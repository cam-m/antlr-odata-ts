grammar OData4Lite;
// This lexer/parser is roughly based on the ODatav4.0.abnf grammar, noting that the ODatav4 is currently a work in progress.
// rules are being named consistently with the ODatav4.0.abnf (where possible) so support for extended syntax can be
// added later.
@header {
// @ts-nocheck
import { Schema } from './lang/edm/Schema';
}

@lexer::members {
public odataSchema: Schema;

public static buildOData4LiteLexer(input: CharStream, schema: Schema): OData4LiteLexer {
    const instance: OData4LiteLexer = new OData4LiteLexer(input);
    instance.odataSchema = schema;
    return instance;
}
}

@parser::members {
private odataSchema: Schema;

public static buildOData4LiteParser(input: TokenStream, schema: Schema): OData4LiteParser {
    const instance: OData4LiteParser = new OData4LiteParser(input);
    instance.odataSchema = schema;
    return instance;
}

private isUnboundFunctionName(name: string): boolean {
    if (!name) {
        return false;
    }
    return this.odataSchema ? !!this.odataSchema.functionByName(name) : false;
}
}
// Parser
odataRelativeURI
    : resourcePath (QUESTION queryOptions )? EOF;

resourcePath
    : id = IDENTIFIER
        (
          functionImportCall[$id.text]
        | singleNavigation
        | collectionNavigation
        )?
    // collectionNavigation is ambiguous and would result in functionImportCalls not being matched. Odata is not context free.
    // Consumption of Endpoint metadata by the parser and use of semantic predicates will be needed for this level of parser
    // intelligence
    // Unsupported...
//    | actionImportCall
//    | entityColFunctionImportCall    [ collectionNavigation ]
//    | entityFunctionImportCall       [ singleNavigation ]
//    | complexColFunctionImportCall   [ collectionPath ]
//    | complexFunctionImportCall      [ complexPath ]
//    | primitiveColFunctionImportCall [ collectionPath ]
//    | primitiveFunctionImportCall    [ singlePath ]
//    | crossjoin
//    | '$all'
    ;

functionImportCall [string identifier]
    : {this.isUnboundFunctionName($identifier)}? functionParameters
    ;

functionParameters    : LPAREN ( functionParameter ( COMMA functionParameter )* )? RPAREN ;
functionParameter     : functionParameterName EQ ( parameterAlias | primitiveLiteral ) ;
functionParameterName : IDENTIFIER ;

// collectionNavigation from abnf
collectionNavigation
    : (FWD_SLASH qualifiedName)?
    (
          keyPredicate singleNavigation?
        | collectionPath
        | FWD_SLASH REF_OPT
    ) ;

singleNavigation
    :
    (FWD_SLASH qualifiedName)?
        ( FWD_SLASH propertyPath
// Unsupported...
//        | boundOperation
        | FWD_SLASH REF_OPT
        | FWD_SLASH VALUE_OPT
        )
    ;

// Unsupported since its supported options are indistinguisable from the singleNavigation rule
//complexPath
//    :
//    (FWD_SLASH qualifiedName)?
//        ( FWD_SLASH propertyPath
//        // Unsupported
//        // | boundOperation
//        )
//    ;

propertyPath
    : property collectionNavigation
    | property singleNavigation
    | property singlePath
    | property
    ;
// Unsupported
// | navigationProperty complexPath   // recursive!
// | property collectionPath // also matched by 'property collectionNavigationExpr' above
// | streamProperty           boundOperation?

collectionPath
    : count
// Unsupported
// | boundOperation
    ;

singlePath
    : VALUE_OPT
// Unsupported
// | boundOperation
    ;

// property rule replaces the following rules from the abnf grammar:
//  - navigationProperty
//  - entityColNavigationProperty: ; // transitive
//  - entityNavigationProperty: ;  // transitive
//  - complexColProperty: ;
//  - complexProperty: ;
//  - primitiveColProperty: ;
//  - primitiveProperty: ;
property: IDENTIFIER ;

// qualifiedName rule replaces the following rules from abnf grammar:
//  - qualifiedEntityTypeName
//  - qualifiedComplexTypeName
//  - qualifiedTypeDefinitionName
//  - qualifiedEnumTypeName
qualifiedName
    : namespace IDENTIFIER;

keyPredicate
    : simpleKey
    | compoundKey
    ;

simpleKey: LPAREN primitiveLiteral RPAREN;
compoundKey
    : LPAREN (
        IDENTIFIER EQ primitiveLiteral ( COMMA IDENTIFIER EQ primitiveLiteral )*
    ) RPAREN;
// /$value can be appended to a media entity - not supported

queryOptions: queryOption (AMPERSAND queryOption)* ;

queryOption  : systemQueryOption
             | aliasAndValue
             //    Unsupported
             // | parameterNameAndValue
             // | customQueryOption
             ;

systemQueryOption
    : filter
    | count
    | top
    | skip
    | orderby
    | expand
    | select
    | apply
//    Unsupported
//    | aggregate
//    | inlinecount
//    | format
    ;

dynamicPropertyAssignment : OP_AS IDENTIFIER ;

aliasAndValue
    : parameterAlias EQ parameterValue
    ;

parameterAlias : AT_SIGN IDENTIFIER ;

parameterValue : primitiveLiteral;
// TODO: assess for support
//parameterValue : complexInUri
//               | complexColInUri
//               | entityReference
//               | entityRefColInUri
//               | primitiveLiteral
//               | primitiveColInUri;


// search: ; // TODO
filter: FILTER_OPT EQ expression ;
apply:  APPLY_OPT EQ applyExpression;
applyExpression: applyTrafo (FWD_SLASH applyTrafo)*;
// rename this to setTransformation at some point...
applyTrafo
    : computeTrafo
    | concatTrafo
    | groupbyTrafo
    | aggregateTrafo
    | filterTrafo
    ;

computeTrafo
    : COMPUTE LPAREN (
        computeExpression |
        computeExpression (COMMA computeExpression)+
    ) RPAREN
    ;

computeExpression
    : expression dynamicPropertyAssignment
    ;

concatTrafo
    : CONCAT LPAREN (
        applyTrafo |
        applyTrafo (COMMA applyTrafo)+
    ) RPAREN
    ;


// groupbyTrafo   = 'groupby' OPEN BWS groupbyList *( BWS COMMA BWS applyExpr)  BWS CLOSE
groupbyTrafo
    : GROUPBY LPAREN groupByList (COMMA applyExpression)? RPAREN
    ;

groupByList : LPAREN groupbyElement (COMMA groupbyElement)* RPAREN ;
groupbyElement
    : groupingProperty
    // | rollupSpec // Not supported
    ;

groupingProperty
    : pathPrefix? ( property (FWD_SLASH qualifiedName)* | property ) ;

pathPrefix
    : qualifiedName FWD_SLASH
    | ( property ( FWD_SLASH qualifiedName )? FWD_SLASH )+
    | qualifiedName FWD_SLASH ( property ( FWD_SLASH qualifiedName )? FWD_SLASH )*
    ;

filterTrafo
    : FILTER LPAREN expression RPAREN
    ;

aggregateTrafo
    : AGGREGATE LPAREN (aggregationParam (COMMA aggregationParam)*)? RPAREN
    ;

aggregationParam
    : expandPath LPAREN aggregationExpr RPAREN
    | aggregationExpr
    | aggregatedProperty aggregateWith?
    ;

// TODO: Add support for *( aggregateFrom ) per abnf rule:
//aggregateExpr   = ( '$count'                     aggregateAs
//                  / commonExpr [ aggregateWith ] aggregateAs *( aggregateFrom )
//                  )
aggregationExpr
    :
    ( COUNT_OPT dynamicPropertyAssignment
    | expression aggregateWith? dynamicPropertyAssignment
    )
    ;

aggregateWith : OP_WITH aggregateMethod;
// aggregateFrom : OP_FROM IDENTIFIER ;

aggregateMethod
    : SUM_AGGREGATION
    | MIN_AGGREGATION
    | MAX_AGGREGATION
    | AVERAGE_AGGREGATION
    | COUNTDISTINCT_AGGREGATION
    | qualifiedName
    ;

aggregatedProperty
    : pathPrefix property ;

count: COUNT_OPT EQ LIT_BOOLEAN ;
orderby: ORDERBY_OPT EQ (orderbyItem | orderbyItem (COMMA orderbyItem )+);
skip: SKIP_COUNT EQ LIT_INTEGER;
top: TOP_OPT EQ LIT_INTEGER ;
expand: EXPAND_OPT EQ expandItemList;
select: SELECT_OPT EQ (IDENTIFIER | IDENTIFIER (COMMA IDENTIFIER)+);
// format: ; // Not supported

orderbyItem: expression (DESC | ASC)?;

expandItemList: expandItem (COMMA expandItem)?;
expandItem: IDENTIFIER ( LPAREN expandQueryOptions RPAREN )? ;


// TODO: expandPath should also be used in expandItem
expandPath :  ( qualifiedName FWD_SLASH )?
              ( property FWD_SLASH (qualifiedName FWD_SLASH)? )*
              property (FWD_SLASH qualifiedName)?
;
// TODO: Currently expandItem can only start with a simple property name, but it will eventually need to support the full
//  grammar below...
//
// expandItem        = STAR [ ref / OPEN levels CLOSE ]
//                   / expandPath
//                     [ ref   [ OPEN expandRefOption   *( SEMI expandRefOption   ) CLOSE ]
//                     / count [ OPEN expandCountOption *( SEMI expandCountOption ) CLOSE ]
//                     /         OPEN expandOption      *( SEMI expandOption      ) CLOSE
//                     ]
// expandPath        = [ ( qualifiedEntityTypeName / qualifiedComplexTypeName ) "/" ]
//                     *( ( complexProperty / complexColProperty ) "/" [ qualifiedComplexTypeName "/" ] )
//                     navigationProperty
//                     [ "/" qualifiedEntityTypeName ]
// expandCountOption = filter
//                   / search
// expandRefOption   = expandCountOption
//                   / orderby
//                   / skip
//                   / top
//                   / inlinecount
// expandOption      = expandRefOption
//                   / select
//                   / expand
//                   / levels

expandQueryOptions: expandQueryOption (SEMICOLON expandQueryOption)* ;
expandQueryOption
    :
    | filter
    | count
    | orderby
    | skip
    | top
    | expand
    | select
    ;

// TODO: Expressions need alot of work:
//  - define boolean expressions
//  - rename to align with abnf (if possible?)
//
expression
    : functionName LPAREN expressionList? RPAREN                               # functionExpression
    | expression OP_IN ( primitiveLiteralCollection | parameterAlias )         # inExpression
    | LPAREN expression RPAREN                                                 # parenthesisExpression
    | ( OP_NOT | OP_HAS | MINUS ) expression                                   # unaryExpression
    | MINUS expression                                                         # negativeExpression
    | <assoc=right> expression OP_MOD expression                               # modulusExpression
    | expression OP_MUL expression                                             # multiplyExpression
    | expression OP_DIV expression                                             # divisionExpression
    | expression OP_SUB expression                                             # subtractExpression
    | expression OP_ADD expression                                             # addExpression
    | expression ( OP_EQ | OP_NE | OP_GT | OP_GE | OP_LT | OP_LE ) expression  # binaryExpression
    | expression ( OP_AND | OP_OR ) expression                                 # logicalExpression
    | primitiveLiteral                                                         # literalExpression
    | primitiveLiteralCollection                                               # literalCollectionExpression
    | firstMemberExpr                                                          # firstMemberExpression
    | parameterAlias                                                           # aliasExpression
    ;

expressionList
    : expression (COMMA expression)* ;

functionName
    : K_CONTAINS
    | K_ENDSWITH
    | K_STARTSWITH
    | K_LENGTH
    | K_INDEXOF
    | K_SUBSTRING
    | K_TOLOWER
    | K_TOUPPER
    | K_TRIM
    | CONCAT
    | K_YEAR
    | K_MONTH
    | K_DAY
    | K_HOUR
    | K_MINUTE
    | K_SECOND
    | K_FRACTIONALSECONDS
    | K_DATE
    | K_TIME
    | K_TOTALOFFSETMINUTES
    | K_NOW
    | K_MINDATETIME
    | K_MAXDATETIME
    | K_ROUND
    | K_FLOOR
    | K_CEILING
    | K_CAST
    | K_ISOF
    | K_GEODISTANCE
    | K_GEOLENGTH
    | K_GEOINTERSECTS
    ;

firstMemberExpr
    : lambdaPredicatePrefixExpr? memberExpr
    ;

lambdaPredicatePrefixExpr
    : IT_OPT FWD_SLASH
    ;

memberExpr
    : (qualifiedName FWD_SLASH)? propertyPathExpr
    // | boundFunctionExpr // unsupported
    ;

propertyPathExpr
    : property singleNavigationExpr
    | property collectionPathExpr
    | property
    ;
//    : property collectionNavigationExpr?
//    | property singleNavigationExpr?
//    | property collectionPathExpr?
//    ;

collectionNavigationExpr
    : (FWD_SLASH qualifiedName)?
        (
              keyPredicate singleNavigationExpr?
            | collectionPathExpr
        )
    ;

singleNavigationExpr
    : FWD_SLASH memberExpr
    | FWD_SLASH parameterAlias {this.notifyErrorListeners('Aliases are not valid in navigation expressions.');}
    ;

collectionPathExpr
    : COUNT_OPT
    // | FWD_SLASH boundFunctionExpr // Unsupported
    | FWD_SLASH anyExpr
    | FWD_SLASH allExpr
    ;

anyExpr : ANY LPAREN (lambdaParameterIdentifier COLON expression)? RPAREN;
allExpr : ALL LPAREN lambdaParameterIdentifier COLON expression RPAREN;

// in any allExpr or allExpr, the 'expression' _should_ be a lambdaPredicateExpr, but this
// is just a boolCommonExpr with a condition:
//lambdaPredicateExpr : boolCommonExpr ; // containing at least one lambdaPredicatePrefixExpr

lambdaParameterIdentifier: IDENTIFIER;

primitiveLiteralCollection
    : LBRACKET (primitiveLiteral (COMMA primitiveLiteral)*)? RBRACKET ;

primitiveLiteral
    : NULL                 // plain values up to int64Value
    | LIT_BOOLEAN
    | LIT_DATE
    | LIT_DATETIME
    | LIT_TIME_OF_DAY
    | LIT_INTEGER
    | LIT_DOUBLE
    | LIT_STRING                     // single-quoted
    | LIT_DAY_TIME_DURATION          // all                                                   others are quoted and prefixed
    | enum
    // Unsupported...

//    | guidValue
//    | decimalValue
//    | doubleValue
//    | singleValue
//    | sbyteValue
//    | byteValue
//    | int16Value
//    | int32Value
//    | int64Value
//    | binary
//    | geographyCollection
//    | geographyLineString
//    | geographyMultiLineString
//    | geographyMultiPoint
//    | geographyMultiPolygon
//    | geographyPoint
//    | geographyPolygon
//    | geometryCollection
//    | geometryLineString
//    | geometryMultiLineString
//    | geometryMultiPoint
//    | geometryMultiPolygon
//    | geometryPoint
//    | geometryPolygon
    ;

enum
    : qualifiedEnumTypeName SQUOTE enumValues SQUOTE;

qualifiedEnumTypeName
    : namespace IDENTIFIER;

enumValues
    : enumValue
    | enumValue (COMMA enumValue)+;

enumValue
    : LIT_INTEGER
    | IDENTIFIER DOT IDENTIFIER
    ;

namespace
    : IDENTIFIER (DOT IDENTIFIER)* DOT
    ;

// QueryOptions
SELECT_OPT     : DOLLAR S E L E C T;
APPLY_OPT      : DOLLAR A P P L Y;
EXPAND_OPT     : DOLLAR E X P A N D;
FILTER_OPT     : DOLLAR F I L T E R;
TOP_OPT        : DOLLAR T O P;
SKIP_COUNT     : DOLLAR S K I P ;
COUNT_OPT      : DOLLAR C O U N T ;
ORDERBY_OPT    : DOLLAR O R D E R B Y;
REF_OPT        : DOLLAR R E F;
VALUE_OPT      : DOLLAR V A L U E;
IT_OPT         : DOLLAR I T;

// KEYWORDS
AGGREGATE      : A G G R E G A T E;
TOPCOUNT       : T O P C O U N T;
TOPSUM         : T O P S U M;
TOPPERCENT     : T O P P E R C E N T;
BOTTOMCOUNT    : B O T T O M C O U N T;
BOTTOMSUM      : B O T T O M S U M;
BOTTOMPERCENT  : B O T T O M P E R C E N T;
IDENTITY       : I D E N T I T Y;
CONCAT         : C O N C A T;
GROUPBY        : G R O U P B Y;
COMPUTE        : C O M P U T E;
FILTER         : F I L T E R;
EXPAND         : E X P A N D;
ALL            : A L L;
ANY            : A N Y;

ASC              : RWS A S C;
DESC             : RWS D E S C;

SUM_AGGREGATION            : S U M ;
MIN_AGGREGATION            : M I N ;
MAX_AGGREGATION            : M A X ;
AVERAGE_AGGREGATION        : A V E R A G E;
COUNTDISTINCT_AGGREGATION  : C O U N T D I S T I N C T;

// Filter Operators
// Comparison
OP_EQ               : RWS E Q RWS ;
OP_NE               : RWS N E RWS ;
OP_GT               : RWS G T RWS ;
OP_GE               : RWS G E RWS ;
OP_LT               : RWS L T RWS ;
OP_LE               : RWS L E RWS ;
OP_HAS              : RWS H A S RWS ;

OP_AS               : RWS A S RWS ;
OP_WITH             : RWS W I T H RWS ;
OP_FROM             : RWS F R O M RWS ;
OP_IN               : RWS I N RWS ;

// Logical
OP_AND              : RWS A N D RWS;
OP_OR               : RWS O R RWS;
OP_NOT              : RWS N O T RWS;

// Arithmetic
OP_ADD              : RWS A D D RWS;
OP_SUB              : RWS S U B RWS;
OP_DIV              : RWS D I V RWS;
OP_MUL              : RWS M U L RWS;
OP_MOD              : RWS M O D RWS;

// Functions
K_CONTAINS            : C O N T A I N S;
K_ENDSWITH            : E N D S W I T H;
K_STARTSWITH          : S T A R T S W I T H;
K_LENGTH              : L E N G T H;
K_INDEXOF             : I N D E X O F;
K_SUBSTRING           : S U B S T R I N G;
K_TOLOWER             : T O L O W E R;
K_TOUPPER             : T O U P P E R;
K_TRIM                : T R I M;
K_YEAR                : Y E A R;
K_MONTH               : M O N T H;
K_DAY                 : D A Y;
K_HOUR                : H O U R;
K_MINUTE              : M I N U T E;
K_SECOND              : S E C O N D;
K_FRACTIONALSECONDS   : F R A C T I O N A L S E C O N D S;
K_DATE                : D A T E;
K_TIME                : T I M E;
K_TOTALOFFSETMINUTES  : T O T A L O F F S E T M I N U T E S;
K_NOW                 : N O W;
K_MINDATETIME         : M I N D A T E T I M E;
K_MAXDATETIME         : M A X D A T E T I M E;
K_ROUND               : R O U N D;
K_FLOOR               : F L O O R;
K_CEILING             : C E I L I N G;
K_CAST                : C A S T;
K_ISOF                : I S O F;
K_GEODISTANCE         : G E O D I S T A N C E;
K_GEOLENGTH           : G E O L E N G T H;
K_GEOINTERSECTS       : G E O I N T E R S E C T S;

AT_SIGN          : '@'   ;
DOT              : '.'   ;
DOLLAR           : '$'   ;
AMPERSAND        : '&'   ;
SEMICOLON        : ';'   ;
COLON            : ':'   ;
MINUS            : '-'   ;
FWD_SLASH        : '/'   ;
QUESTION         : '?'   ;
SQUOTE           : '\''  ;
DQUOTE           : '"'   ;
EQ               : '='   ;
COMMA            : ','   ;
RPAREN           : ')'   ;
LPAREN           : '('   ;
RBRACKET         : ']'   ;
LBRACKET         : '['   ;
NULL             : SQUOTE 'null' SQUOTE;

LIT_DATETIME     : YEAR '-' MONTH '-' DAY 'T' HOUR ':' MINUTE ':' SECOND TIMEZONE;
LIT_DATE         : YEAR '-' MONTH '-' DAY;
LIT_TIME_OF_DAY  : HOUR ':' MINUTE ':' SECOND;
LIT_DAY_TIME_DURATION
    : '-'? 'P'(
            ('T' ( ([0-9]+'H')([0-9]+'M')?([0-9]+('.'[0-9]+)?'S')?
                 | ([0-9]+'M')([0-9]+('.'[0-9]+)?'S')?
                 | ([0-9]+('.'[0-9]+)?'S')
                 )
            )
        )
    ; // could be right....straight from the spec here: https://www.w3.org/TR/xmlschema11-2/#f-durationMap
LIT_BOOLEAN      : T R U E | F A L S E ;
LIT_STRING       : SQUOTE ~[\r\n']* SQUOTE ;
LIT_INTEGER      : DIGIT+                          ; // This covers types INTEGER, SHORT and LONG
LIT_DOUBLE       : DIGIT+ (DOT DIGIT+)?            ;

// Lexer
IDENTIFIER : (UNDERSCORE | ALPHA) (ALPHA | UNDERSCORE | DIGIT)*;

UNEXPECTED: . ;

// DATE TIME FRAGMENTS
fragment YEAR               : '-'? ((F_POS_DIGIT DIGIT DIGIT DIGIT+) | ('0' DIGIT DIGIT DIGIT));
fragment MONTH              : '0' F_POS_DIGIT | '1' [0-2];
fragment DAY                : '0' F_POS_DIGIT | [12] DIGIT | '3' [01];
fragment HOUR               : [01] DIGIT | '2' [0-3] ;
fragment MINUTE             : [0-5] DIGIT ;
fragment SECOND             : [0-5] DIGIT ('.' DIGIT+)?;
fragment TIMEZONE           : 'Z' | ('+' | '-') (('0' DIGIT | '1' [0-3]) ':' MINUTE | '14:00');
fragment ENDOFDAY           : '24:00:00' ('.' '0'+)?;
//fragment F_DU_YEAR_MONTH    : ;
//fragment F_DU_DAY_TIME      : ;
fragment UNDERSCORE         : '_' ;
fragment ALPHA              : [a-zA-Z];
fragment DIGIT              : [0-9];
fragment RWS                : [ \t] | '%20' | '%09';
fragment A                  : [aA];
fragment B                  : [bB];
fragment C                  : [cC];
fragment D                  : [dD];
fragment E                  : [eE];
fragment F                  : [fF];
fragment G                  : [gG];
fragment H                  : [hH];
fragment I                  : [iI];
fragment J                  : [jJ];
fragment K                  : [kK];
fragment L                  : [lL];
fragment M                  : [mM];
fragment N                  : [nN];
fragment O                  : [oO];
fragment P                  : [pP];
fragment Q                  : [qQ];
fragment R                  : [rR];
fragment S                  : [sS];
fragment T                  : [tT];
fragment U                  : [uU];
fragment V                  : [vV];
fragment W                  : [wW];
fragment X                  : [xX];
fragment Y                  : [yY];
fragment Z                  : [zZ];
fragment F_POS_DIGIT        : [1-9];
fragment F_YEAR             : [1-9];

