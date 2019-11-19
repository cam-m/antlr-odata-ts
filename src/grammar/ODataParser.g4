/* ----------------------------------------------------------------------------
 * odata-v4.0-abnf for URI conventions transformed into ANTLRv4 syntax from 
 * https://tools.oasis-open.org/version-control/svn/odata/ in there
 * /trunk/spec/ABNF/odata-abnf-construction-rules-v4.0-wd01.txt rev 191
 * last modified 2013-02-15 15:41:18 +0000 (from svn info)
 * ----------------------------------------------------------------------------
 * From the normative ABNF file:
 * This grammar uses the ABNF defined in RFC5234 with one extension: literals
 * enclosed in single quotes (e.g. '$metadata') are treated case-sensitive.
 *
 * The following rules assume that URIs have been percent-encoding normalized as
 * described in section 6.2.2.2 of RFC3986
 * (http://tools.ietf.org/html/rfc3986#section-6.2.2)
 * before applying the grammar to them, i.e. all characters in the unreserved
 * set (see rule "unreserved" below) are plain literals and NOT percent-encoded.
 *
 * In addition the characters in rule "unencoded" (see section 7. Punctuation)
 * must also be stated as plain literals and not percent-encoded when occurring
 * in the resourcePath or queryOptions part of a URI.
 * ----------------------------------------------------------------------------
 * Contents
 * --------
 * 1. Resource Path
 * 2. Query Options
 * 3. Expressions
 * 4. JSON format for function and action parameters
 * 5. Names and identifiers
 * 6. Literal Data Values
 * 7. Punctuation
 *
 * A. URI syntax [RFC3986]
 * B. ABNF core definitions [RFC5234]
 * C. UTF-8 syntax [RFC3629]
 * ----------------------------------------------------------------------------
 * Comments from transformation:
 * - initial renaming of some rules to
 *   + make them valid in ANTLRv4 (and ease generation of listeners etc.)
 *   + start a separation in Lexer and Parser rules
 * - Added *_LAC or some other AllVarsLiterals like CollectionOP_LAC etc
 *   + All ambiguity made eplicit (is the target)
 *   + Only info of potential interest for app as parser rule (another target)
 * - This is an untested hack (currently)
 * - All errors belong to 'me' ;-)
 * Please cf. lexer grammar for character level info (possibly irrelevant 
 * for applications instrumenting this grammar to parse a request).
 * These notes will be replaced when the code will be released.
 *
 * Contact: Stefan Drees <stefan@drees.name> 
 */
grammar ODataParser;
import ODataLexer;

odataUri : Protocol ColSlaSla host ( COLON port )?
           serviceRoot
           ( ODataSignal_METADATA | ODataSignal_BATCH | odataRelativeUri )? EOF ;

Protocol :  HttpOrHttpsAnyCase;

serviceRoot : SLASH ( segmentNZ SLASH )*;

odataRelativeUri : resourcePath ( QUESTION queryOptions )?;

/* ----------------------------------------------------------------------------
 * 1. Resource Path
 * ----------------------------------------------------------------------------
 */
resourcePath : ( containerQualifier )? entitySetName ( collectionNavigation )? 
             | ( containerQualifier )? namedEntity   ( singleNavigation )?
             | actionImportCall 
             | entityColFunctionImportCall    ( collectionNavigation )? 
             | entityFunctionImportCall       ( singleNavigation )? 
             | complexColFunctionImportCall   ( collectionPath )? 
             | complexFunctionImportCall      ( complexPath )? 
             | primitiveColFunctionImportCall ( collectionPath )? 
             | primitiveFunctionImportCall    ( singlePath )? ;

collectionNavigation : ( SLASH qualifiedEntityTypeName )?
                       ( keyPredicate ( singleNavigation )?
                       | collectionPath
                       | EmptyString     // for restricting to a derived entity type
                       );

keyPredicate     : simpleKey | compoundKey;
simpleKey        : OP keyPropertyValue CP;
compoundKey      : OP keyValuePair ( COMMA keyValuePair )* CP;
keyValuePair     : primitiveKeyProperty EQ keyPropertyValue;
keyPropertyValue : primitiveLiteral; // restricted to characters that are valid in a URI path segment

singleNavigation : ( SLASH qualifiedEntityTypeName )? 
                   ( links SLASH navigationProperty 
                   | SLASH ( entityColNavigationProperty ( collectionNavigation )?
                         | entityNavigationProperty    ( singleNavigation )?
                         | complexColProperty          ( collectionPath )?
                         | complexProperty             ( complexPath )?
                         | primitiveColProperty        ( collectionPath )?
                         | primitiveProperty           ( singlePath )?
                         | streamProperty 
                         )
                   | boundOperation 
                   | ''     // for casting after key access
                   );

collectionPath : count | boundOperation;
singlePath     : value | boundOperation;

complexPath    : ( SLASH qualifiedComplexTypeName )? 
                 ( SLASH ( complexProperty   ( complexPath )?
                       | primitiveProperty ( singlePath )?
                       ) 
                 | boundOperation
                 );

count : ODataSignal_COUNT;
links : ODataSignal_LINKS;
value : ODataSignal_VALUE;

// boundOperation segments can only be composed if the type of the previous segment 
// matches the type of the first parameter of the action or function being called.
boundOperation : SLASH ( boundActionCall
                     | boundEntityColFuncCall    ( collectionNavigation )? 
                     | boundEntityFuncCall       ( singleNavigation )? 
                     | boundComplexColFuncCall   ( collectionPath )?
                     | boundComplexFuncCall      ( complexPath )?
                     | boundPrimitiveColFuncCall ( collectionPath )?
                     | boundPrimitiveFuncCall    ( singlePath )? 
                     );

// COMMENT_ANTLR: DQ not SQ around empty parenthesis pairs and dot. Why?
actionImportCall : ( containerQualifier )? actionImport ( OP CP )? ;
boundActionCall  : namespace DOT action ( OP CP )? ;
                  // with the added restriction that the binding parameter MUST be either an entity or collection of entities
                  // and is specified by reference using the URI immediately preceding (to the left) of the boundActionCall

// The following boundXxxFuncCall rules have the added restrictions that
//  - the function MUST support binding, and 
//  - the binding parameter type MUST match the type of resource identified by the 
//    URI immediately preceding (to the left) of the boundXxxFuncCall, and
//  - the functionParameters MUST NOT include the bindingParameter.
boundEntityFuncCall       : namespace DOT entityFunction       functionParameters ;
boundEntityColFuncCall    : namespace DOT entityColFunction    functionParameters ;
boundComplexFuncCall      : namespace DOT complexFunction      functionParameters ;
boundComplexColFuncCall   : namespace DOT complexColFunction   functionParameters ;
boundPrimitiveFuncCall    : namespace DOT primitiveFunction    functionParameters ;
boundPrimitiveColFuncCall : namespace DOT primitiveColFunction functionParameters ;

entityFunctionImportCall       : ( containerQualifier )? entityFunctionImport       functionParameters ;
entityColFunctionImportCall    : ( containerQualifier )? entityColFunctionImport    functionParameters ;
complexFunctionImportCall      : ( containerQualifier )? complexFunctionImport      functionParameters ;
complexColFunctionImportCall   : ( containerQualifier )? complexColFunctionImport   functionParameters ;
primitiveFunctionImportCall    : ( containerQualifier )? primitiveFunctionImport    functionParameters ;
primitiveColFunctionImportCall : ( containerQualifier )? primitiveColFunctionImport functionParameters ;

functionParameters    : OP ( functionParameter ( COMMA functionParameter )* )? CP ;
functionParameter     : functionParameterName EQ ( parameterAlias | primitiveLiteral ) ;
functionParameterName : odataIdentifier ;
parameterAlias        : AT_SIGN odataIdentifier ;

containerQualifier : namespace DOT entityContainer DOT ;

/* ----------------------------------------------------------------------------
 * 2. Query Options
 * ----------------------------------------------------------------------------
 */

queryOptions : queryOption ( AMPERSAND queryOption )*;        
queryOption  : systemQueryOption  
             | aliasAndValue 
             | parameterNameAndValue
             | customQueryOption;  

systemQueryOption : aggregate
                  | expand 
                  | filter 
                  | format 
                  | orderby 
                  | skip 
                  | top 
                  | inlinecount 
                  | select 
                  | skiptoken;

aggregate         : ODataSignal_AGGREGATE EQ aggregateCommand ( SEMI aggregateCommand )*;
aggregateCommand  : aggregateClause 
                  | filter 
                  | expand; 
aggregateClause   : aggregateList ( XWS ODataSignal_GROUPBY XWS groupbyList )?
                  | ODataSignal_GROUPBY XWS groupbyList;
// COMMENT_ANTLR4: $groupby had DQS and SQS. Why?
aggregateList     : aggregateItem *( COMMA aggregateItem );
aggregateItem     : property ( XWS As_LLC XWS dynamicProperty )?
                  | aggregateFunction OP property CP ( XWS As_LLC XWS dynamicProperty )?
                  | 'count' OP ( property | navigationProperty )?  CP XWS As_LLC XWS dynamicProperty
                  | 'countDistinct' OP ( property | navigationProperty ) CP XWS As_LLC XWS dynamicProperty
                  | ( navigationProperty SLASH )* OP aggregateList CP
                  | ( navigationProperty SLASH )* property
                  | ( navigationProperty SLASH )* aggregateFunction OP property CP; 
// COMMENT_ANTLR4: first literal as was in DQ all others in SQS. Why?
groupbyList       : groupbyItem ( COMMA groupbyItem )* ;
groupbyItem       : property
                  | navigationProperty SLASH OP groupbyList CP
                  | navigationProperty SLASH groupbyItem ; 
dynamicProperty   : odataIdentifier ;
aggregateFunction : Sum_LLC | Min_LLC | Max_LLC | Average_LLC ;

expand       : ODataSignal_EXPAND EQ expandItem ( COMMA expandItem )* ;
expandItem   : ( qualifiedEntityTypeName SLASH )? navigationProperty 
               ( OP expandOption ( SEMI expandOption )* CP )?;
expandOption : filter
             | select 
             | orderby
             | skip 
             | top 
             | inlinecount
             | expand
             | levels;
             
levels : ODataSignal_LEVELS EQ ( ( Digit )+ | Max_LLC );

filter : ODataSignal_FILTER EQ boolCommonExpr;

orderby     : ODataSignal_ORDERBY EQ orderbyItem ( COMMA orderbyItem )*;
orderbyItem : commonExpr ( XWS ( Asc_LLC | Desc_LLC ) )?;

skip : ODataSignal_SKIP EQ ( Digit )+;
top  : ODataSignal_TOP  EQ ( Digit )+;

format : ODataSignal_FORMAT EQ
         ( Atom_LLC
         | Json_LLC 
         | Xml_LLC
         | ( pChar | SLASH )+ // <a data service specific value indicating a
         ) ;                  // format specific to the specific data service> or
                              // <An IANA-defined [IANA-MMT] content type>
                          
inlinecount : ODataSignal_INLINECOUNT EQ ( AllPages_LLC | None_LLC ) ;

select     : ODataSignal_SELECT EQ selectItem ( COMMA selectItem )* ;
selectItem : STAR  
           | '$ref'
           | allOperationsInSchema 
           | ( qualifiedEntityTypeName SLASH )? 
             ( navigationProperty  
             | ( ( complexProperty | complexColProperty ) SLASH
                  ( qualifiedComplexTypeName SLASH )? 
                )* property 
             | qualifiedActionName  
             | qualifiedFunctionName  
             ) ;

allOperationsInSchema : namespace DOT STAR ;

// The parameterTypeNames are required to uniquely identify the action or function
// only if it has overloads.
qualifiedActionName   : namespace '.' action ( OP parameterTypeNames CP )? ;
qualifiedFunctionName : namespace '.' function ( OP parameterTypeNames CP )? ;

// The types of all the parameters to the corresponding function 
// in the order they are declared in the function.
parameterTypeNames : ( parameterTypeName ( COMMA parameterTypeName )* )? ;
parameterTypeName  : qualifiedTypeName ; 

skiptoken : ODataSignal_SKIPTOKEN EQ 
            ( Unreserved | PctEncoded | OtherDelims |  SQ | COLON | AT_SIGN | DOLLAR | EQ )+; // everything except "&" and ";"

aliasAndValue         : parameterAlias        EQ parameterValue;
parameterNameAndValue : functionParameterName EQ parameterValue;

parameterValue : complexInUri  
               | complexColInUri
               | entityReference
               | entityRefColInUri
               | primitiveLiteral
               | primitiveColInUri;
               
entityReference : 'KEY' OP 
                  ( entityContainer DOT )? entitySetName keyPredicate
                  ( SLASH qualifiedEntityTypeName )?
                  CP;                

customQueryOption : customName ( EQ customValue )?;
customName        :  ( Unreserved | PctEncoded | OtherDelims |  SQ | COLON )                   // MUST NOT start with "$" or "@"
                    ( Unreserved | PctEncoded | OtherDelims |  SQ | COLON | AT_SIGN | DOLLAR )*;       // MUST NOT contain "="
customValue       : ( Unreserved | PctEncoded | OtherDelims |  SQ | COLON | AT_SIGN | DOLLAR | EQ )*; // everything except "&" and ";"
/* ----------------------------------------------------------------------------
 * 3. Expressions
 * ----------------------------------------------------------------------------
 */

// TODO: is a boolCommonExpr also a commonExpr? To e.g. sort by Boolean?
commonExpr : ( primitiveLiteral
             | parameterAlias
             | firstMemberExpr
             | functionExpr
             | negateExpr 
             | methodCallExpr 
             | parenExpr 
             | castExpr 
             ) 
             ( addExpr 
             | subExpr 
             | mulExpr 
             | divExpr 
             | modExpr
             )?;  

boolCommonExpr : ( isofExpr 
                 | boolMethodCallExpr 
                 | notExpr  
                 | commonExpr
                   ( eqExpr 
                   | neExpr 
                   | ltExpr  
                   | leExpr  
                   | gtExpr 
                   | geExpr 
                   | hasExpr 
                   )?
                 | boolParenExpr
                 ) ( andExpr | orExpr )?; 

firstMemberExpr : ( lambdaPredicatePrefixExpr )?  // only allowed inside a lambdaPredicateExpr
                  memberExpr;

memberExpr : ( qualifiedEntityTypeName SLASH )?
             ( entityColNavigationProperty ( collectionNavigationExpr )? 
             | entityNavigationProperty    ( singleNavigationExpr )? 
             | complexColProperty          ( collectionPathExpr )?
             | complexProperty             ( complexPathExpr )? 
             | primitiveColProperty        ( collectionPathExpr )?
             | primitiveProperty           ( singlePathExpr )?
             | streamProperty 
             | boundFunctionExpr 
             );
                   
lambdaPredicatePrefixExpr : inscopeVariableExpr SLASH;
inscopeVariableExpr       : implicitVariableExpr | lambdaVariableExpr;
implicitVariableExpr      : DOLLAR 'it' ; // references the unnamed outer variable of the query
// COMMENT_ANTLR: Was any case $it. Why?
lambdaVariableExpr        : odataIdentifier;

collectionNavigationExpr : count
                         | SLASH ( qualifiedEntityTypeName SLASH )? 
                           ( boundFunctionExpr 
                           | anyExpr
                           | allExpr 
                           );

singleNavigationExpr : SLASH memberExpr;

collectionPathExpr : count 
                   | SLASH boundFunctionExpr
                   | SLASH anyExpr
                   | SLASH allExpr;
 
complexPathExpr : SLASH ( qualifiedComplexTypeName SLASH )?
                  ( primitiveProperty ( singlePathExpr )?
                  | complexProperty   ( complexPathExpr )?
                  | boundFunctionExpr
                  );

singlePathExpr : SLASH boundFunctionExpr ;

boundFunctionExpr : functionExpr ; // boundFunction segments can only be composed if the type of the    
                                   // previous segment matches the type of the first function parameter
                                     
functionExpr : namespace DOT  
               ( entityColFunction    functionExprParameters ( collectionNavigationExpr )? 
               | entityFunction       functionExprParameters ( singleNavigationExpr )? 
               | complexColFunction   functionExprParameters ( collectionPathExpr )?
               | complexFunction      functionExprParameters ( complexPathExpr )?
               | primitiveColFunction functionExprParameters ( collectionPathExpr )? 
               | primitiveFunction    functionExprParameters ( singlePathExpr )? 
               ) 
             ;

functionExprParameters : OP ( functionExprParameter ( COMMA functionExprParameter )* )? CP ;
functionExprParameter  : functionParameterName EQ ( parameterValue | firstMemberExpr ) ;

anyExpr : Any_LLC OP ( XWS )* ( lambdaVariableExpr  ( XWS )* COLON  ( XWS )* lambdaPredicateExpr )?  ( XWS )* CP ;
allExpr : All_LLC OP  ( XWS )*   lambdaVariableExpr  ( XWS )* COLON  ( XWS )* lambdaPredicateExpr    ( XWS )* CP ;
lambdaPredicateExpr : boolCommonExpr ; // containing at least one lambdaPredicatePrefixExpr

methodCallExpr : indexOfMethodCallExpr 
               | toLowerMethodCallExpr 
               | toUpperMethodCallExpr  
               | trimMethodCallExpr 
               | substringMethodCallExpr 
               | concatMethodCallExpr 
               | lengthMethodCallExpr 
               | yearMethodCallExpr 
               | monthMethodCallExpr 
               | dayMethodCallExpr 
               | daysMethodCallExpr 
               | hourMethodCallExpr 
               | hoursMethodCallExpr 
               | minuteMethodCallExpr 
               | minutesMethodCallExpr 
               | secondMethodCallExpr 
               | secondsMethodCallExpr
               | timeMethodCallExpr
               | dateMethodCallExpr 
               | roundMethodCallExpr 
               | floorMethodCallExpr 
               | ceilingMethodCallExpr 
               | distanceMethodCallExpr 
               | geoLengthMethodCallExpr 
               | getTotalOffsetMinutesExpr
               | minDateTimeExpr
               | maxDateTimeExpr
               | nowDateTimeExpr;

boolMethodCallExpr : endsWithMethodCallExpr 
                   | startsWithMethodCallExpr 
                   | substringOfMethodCallExpr                                          
                   | intersectsMethodCallExpr; 

substringOfMethodCallExpr : SubStringOf_LLC OP  ( XWS )* commonExpr  ( XWS )* COMMA  ( XWS )* commonExpr  ( XWS )* CP;
startsWithMethodCallExpr  : StartsWith_LLC  OP  ( XWS )* commonExpr  ( XWS )* COMMA  ( XWS )* commonExpr  ( XWS )* CP;
endsWithMethodCallExpr    : EndsWith_LLC    OP  ( XWS )* commonExpr  ( XWS )* COMMA  ( XWS )* commonExpr  ( XWS )* CP;
lengthMethodCallExpr      : Length_LLC      OP  ( XWS )* commonExpr  ( XWS )* CP;
indexOfMethodCallExpr     : IndexOf_LLC     OP  ( XWS )* commonExpr  ( XWS )* COMMA  ( XWS )* commonExpr  ( XWS )* CP;
substringMethodCallExpr   : Substring_LLC   OP  ( XWS )* commonExpr  ( XWS )* COMMA  ( XWS )* commonExpr (  ( XWS )* COMMA  ( XWS )* commonExpr  ( XWS )* )? CP;
toLowerMethodCallExpr     : ToLower_LLC     OP  ( XWS )* commonExpr  ( XWS )* CP ;
toUpperMethodCallExpr     : ToUpper_LLC     OP  ( XWS )* commonExpr  ( XWS )* CP ;
trimMethodCallExpr        : Trim_LLC        OP  ( XWS )* commonExpr  ( XWS )* CP ;
concatMethodCallExpr      : Concat_LLC      OP  ( XWS )* commonExpr  ( XWS )* COMMA  ( XWS )* commonExpr  ( XWS )* CP;

yearMethodCallExpr        : Year_LLC        OP  ( XWS )* commonExpr  ( XWS )* CP ;
monthMethodCallExpr       : Month_LLC       OP  ( XWS )* commonExpr  ( XWS )* CP ;
dayMethodCallExpr         : Day_LLC         OP  ( XWS )* commonExpr  ( XWS )* CP ;
daysMethodCallExpr        : Days_LLC        OP  ( XWS )* commonExpr  ( XWS )* CP ;
hourMethodCallExpr        : Hour_LLC        OP  ( XWS )* commonExpr  ( XWS )* CP ;
hoursMethodCallExpr       : Hours_LLC       OP  ( XWS )* commonExpr  ( XWS )* CP ;
minuteMethodCallExpr      : Minute_LLC      OP  ( XWS )* commonExpr  ( XWS )* CP ;
minutesMethodCallExpr     : Minutes_LLC     OP  ( XWS )* commonExpr  ( XWS )* CP ;
secondMethodCallExpr      : Second_LLC      OP  ( XWS )* commonExpr  ( XWS )* CP ;
secondsMethodCallExpr     : Seconds_LLC     OP  ( XWS )* commonExpr  ( XWS )* CP ;
timeMethodCallExpr        : Time_LLC        OP  ( XWS )* commonExpr  ( XWS )* CP ;
dateMethodCallExpr        : Date_LLC        OP  ( XWS )* commonExpr  ( XWS )* CP ;

roundMethodCallExpr       : Round_LLC       OP  ( XWS )* commonExpr  ( XWS )* CP ;
floorMethodCallExpr       : Floor_LLC       OP  ( XWS )* commonExpr  ( XWS )* CP ;
ceilingMethodCallExpr     : Ceiling_LLC     OP  ( XWS )* commonExpr  ( XWS )* CP ;

getTotalOffsetMinutesExpr : GetTotalOffsetMinutes_LLC OP  ( XWS )* commonExpr  ( XWS )* CP ; 

distanceMethodCallExpr    : GeoDotDistance_LLC   OP  ( XWS )* commonExpr  ( XWS )* COMMA  ( XWS )* commonExpr  ( XWS )* CP;
geoLengthMethodCallExpr   : GeoLength_LLC     OP  ( XWS )* commonExpr  ( XWS )* CP;
intersectsMethodCallExpr  : GeoDotIntersects_LLC OP  ( XWS )* commonExpr  ( XWS )* COMMA  ( XWS )* commonExpr  ( XWS )* CP;

minDateTimeExpr : MinDateTime_LLC OP  ( XWS )* CP ;
maxDateTimeExpr : MaxDateTime_LLC OP  ( XWS )* CP ;
nowDateTimeExpr : Now_LLC OP  ( XWS )* CP ;

boolParenExpr : OP  ( XWS )* boolCommonExpr  ( XWS )* CP ;
parenExpr     : OP  ( XWS )* commonExpr      ( XWS )* CP ;

andExpr : XWS And_LLC XWS boolCommonExpr ;
orExpr  : XWS Or_LLC  XWS boolCommonExpr ;

eqExpr : XWS Eq_LLC XWS commonExpr ;     
neExpr : XWS Ne_LLC XWS commonExpr ;
ltExpr : XWS Lt_LLC XWS commonExpr ;
leExpr : XWS Le_LLC XWS commonExpr ;
gtExpr : XWS Gt_LLC XWS commonExpr ;
geExpr : XWS Ge_LLC XWS commonExpr ;

hasExpr : XWS Has_LLC XWS commonExpr ;

addExpr : XWS Add_LLC XWS commonExpr ;
subExpr : XWS Sub_LLC XWS commonExpr ;
mulExpr : XWS Mul_LLC XWS commonExpr ;
divExpr : XWS Div_LLC XWS commonExpr ;
modExpr : XWS Mod_LLC XWS commonExpr ;

negateExpr : MINUS  ( XWS )* commonExpr ;

notExpr : Not_LLC XWS boolCommonExpr ;

isofExpr : IsOf_LLC OP  ( XWS )* ( commonExpr  ( XWS )* COMMA  ( XWS )* )? qualifiedTypeName  ( XWS )* CP ;
castExpr : Cast_LLC OP  ( XWS )* ( commonExpr  ( XWS )* COMMA  ( XWS )* )? qualifiedTypeName  ( XWS )* CP ;
/* ----------------------------------------------------------------------------
 * 4. JSON format for function and action parameters
 * ----------------------------------------------------------------------------
 * Note: the query part of a URI needs to be partially percent-decoded before
 *       applying these rules, see comment at the top of this file
 */

complexColInUri : BeginArray 
                  ( complexInUri ( ValueSeparator complexInUri )* )? 
                  EndArray
                ;
                  
complexInUri : BeginObject
               ( ( complexTypeMetadataInUri  
                 | primitivePropertyInUri 
                 | complexPropertyInUri 
                 | collectionPropertyInUri  
                 )
                 ( ValueSeparator 
                    ( primitivePropertyInUri 
                    | complexPropertyInUri 
                    | collectionPropertyInUri  
                    ) 
                  )*
               )?  
               EndObject;

collectionPropertyInUri : ( QuotationMark primitiveColProperty QuotationMark 
                            NameSeparator 
                            primitiveColInUri 
                          ) 
                        | ( QuotationMark complexColProperty QuotationMark 
                            NameSeparator 
                            complexColInUri
                          );

primitiveColInUri : BeginArray 
                    ( primitiveLiteralInJSON ( ValueSeparator primitiveLiteralInJSON )* )? 
                    EndArray;
                    
complexPropertyInUri : QuotationMark complexProperty QuotationMark 
                       NameSeparator 
                       complexInUri;
                            
complexTypeMetadataInUri : typeNVPInUri;

typeNVPInUri : QuotationMark 'odata' DOT 'type' QuotationMark
               NameSeparator
               QuotationMark qualifiedTypeName QuotationMark;

primitivePropertyInUri : QuotationMark primitiveProperty QuotationMark 
                         NameSeparator 
                         primitiveLiteralInJSON;

// COMMENT_ANTLR: Rule below noted as missing in rule actionParameterValue. Why?
entityRefColInUri : BeginArray
                    ( entityRefInJSON ( ValueSeparator entityRefInJSON )* )?
                    EndArray;


entityRefInJSON   : DQ entityReference DQ;                                       
                                        
// JSON syntax: adapted to URI restrictions from [RFC4627]                 
BeginObject :  ( XWS )* OC  ( XWS )*;
EndObject   :  ( XWS )* CC  ( XWS )*;

BeginArray :  ( XWS )* OB  ( XWS )*; 
EndArray   :  ( XWS )* CB  ( XWS )*;

QuotationMark  : DQ;
NameSeparator  :  ( XWS )* COLON  ( XWS )*;
ValueSeparator :  ( XWS )* COMMA  ( XWS )*;

primitiveLiteralInJSON : stringInJSON
                       | numberInJSON
                       | True_LLC 
                       | False_LLC
                       | Null_LLC;

stringInJSON : QuotationMark charInJSON* QuotationMark;
charInJSON   : pChar | SLASH | QUESTION    // only these are allowed in the query part of a URL
             | UnencodedNoSpecial // these are allowed per processing rule
             | ESCAPE ( DQ 
                      | ESCAPE
                      | SLASH         // solidus         U+002F
                      | B_LLC         // backspace       U+0008                
                      | F_LLC         // form feed       U+000C
                      | N_LLC         // line feed       U+000A
                      | R_LLC         // carriage return U+000D
                      | T_LLC         // tab             U+0009
                      | U_LLC HEXDIG4 //                 U+XXXX
                      );
escape       : ESCAPE;                // reverse solidus U+005C

numberInJSON : ( MINUS )? intPart ( fracPart )? ( expPart )?;
intPart          : ZERO | ( ONE_TO_NINE ( Digit )* );
fracPart         : DOT ( Digit )+;
expPart          : E ( SIGN )? ( Digit )+;

// TODO: move this to separate ABNF and cite original JSON syntax [RFC4627]?
//  - pro: request body is less restrictive than URI, so xxxInUri rules are too restrictive
//  - con: would require duplicating xxxInUri rules to just add  ( VWS )*
//  - pro: will require duplicating these rules for JSON format anyway, roll action in there  
actionRequestBody    :  ( VWS )* BeginObject  ( VWS )* 
                       actionParameter ( ValueSeparator  ( VWS )* actionParameter )* 
                        ( VWS )* EndObject  ( VWS )*; 
actionParameter      : actionParameterName NameSeparator actionParameterValue; 
actionParameterName  : QuotationMark odataIdentifier QuotationMark; 
actionParameterValue : complexInUri  
                     | complexColInUri
                     | entityRefInJSON
                     | entityRefColInUri
                     | primitiveLiteralInJSON
                     | primitiveColInUri;

/* ----------------------------------------------------------------------------
 * 5. Names and identifiers
 * ----------------------------------------------------------------------------
 */

qualifiedTypeName : qualifiedEntityTypeName 
                  | qualifiedComplexTypeName
                  | qualifiedEnumerationTypeName
                  | PrimitiveTypeName 
                  | 'Collection' OP 
                    ( qualifiedEntityTypeName 
                    | qualifiedComplexTypeName
                    | qualifiedEnumerationTypeName 
                    | PrimitiveTypeName 
                    ) CP;

qualifiedEntityTypeName      : namespace DOT entityTypeName;
qualifiedComplexTypeName     : namespace DOT complexTypeName;
qualifiedEnumerationTypeName : namespace DOT enumerationTypeName;

// an alias is just a single-part namespace
namespace     : namespacePart ( DOT namespacePart )*;
namespacePart : odataIdentifier;

entitySetName       : odataIdentifier;
namedEntity         : odataIdentifier;         
entityTypeName      : odataIdentifier;
complexTypeName     : odataIdentifier; 
enumerationTypeName : odataIdentifier;
enumerationMember   : odataIdentifier;

odataIdentifier             : identifierLeadingCharacter ODATA_ID_CHAR478*;
identifierLeadingCharacter  : Alpha | UNDERSCORE ;          // TODO: Any character from the Unicode classes L or Nl
identifierCharacter         : Alpha | ( Digit ) | UNDERSCORE;    // TODO: Any character from the Unicode classes L, Nl, Nd, Mn, Mc, Pc or Cf

PrimitiveTypeName : ('Edm' DOT)? ( 'Binary'
                             | 'Boolean'
                             | 'Byte'
                             | 'Date' 
                             | 'DateTimeOffset'
                             | 'Decimal'
                             | 'Double'
                             | 'Duration' 
                             | 'Guid' 
                             | 'Int16'
                             | 'Int32'
                             | 'Int64'
                             | 'SByte'
                             | 'Single'
                             | 'Stream'
                             | 'String'
                             | 'TimeOfDay'
                             | AbstractSpatialTypeName ( ConcreteSpatialTypeName )? 
                             );
AbstractSpatialTypeName : 'Geography'
                        | 'Geometry';
ConcreteSpatialTypeName : 'Collection'
                        | 'LineString'
                        | 'MultiLineString'
                        | 'MultiPoint'
                        | 'MultiPolygon'
                        | 'Point'
                        | 'Polygon';

property : primitiveProperty  
         | primitiveColProperty 
         | complexProperty 
         | complexColProperty 
         | streamProperty;

primitiveProperty       : primitiveKeyProperty | primitiveNonKeyProperty;
primitiveKeyProperty    : odataIdentifier;
primitiveNonKeyProperty : odataIdentifier;
primitiveColProperty    : odataIdentifier;
complexProperty         : odataIdentifier;
complexColProperty      : odataIdentifier;
streamProperty          : odataIdentifier;

navigationProperty          : entityNavigationProperty | entityColNavigationProperty;
entityNavigationProperty    : odataIdentifier;
entityColNavigationProperty : odataIdentifier;

entityContainer : odataIdentifier;

action : odataIdentifier ;
actionImport : odataIdentifier ;

function : entityFunction 
         | entityColFunction 
         | complexFunction 
         | complexColFunction 
         | primitiveFunction 
         | primitiveColFunction
         ;
         
entityFunction       : odataIdentifier ;
entityColFunction    : odataIdentifier ;
complexFunction      : odataIdentifier ;
complexColFunction   : odataIdentifier ;
primitiveFunction    : odataIdentifier ;
primitiveColFunction : odataIdentifier ;

entityFunctionImport       : odataIdentifier ;
entityColFunctionImport    : odataIdentifier ;
complexFunctionImport      : odataIdentifier ;
complexColFunctionImport   : odataIdentifier ;
primitiveFunctionImport    : odataIdentifier ;
primitiveColFunctionImport : odataIdentifier ;

/* ----------------------------------------------------------------------------
 * 6. Literal Data Values
 * ----------------------------------------------------------------------------
 */

primitiveLiteral : null_symbol 
                 | decimal 
                 | single 
                 | double_symbol 
                 | sbyte 
                 | byte_symbol 
                 | int16 
                 | int32 
                 | int64 
                 | binary 
                 | date
                 | dateTimeOffset 
                 | duration
                 | guid 
                 | aString 
                 | timeOfDay 
                 | boolean_symbol 
                 | enum_symbol
                 | geographyCollection 
                 | geographyLineString 
                 | geographyMultiLineString 
                 | geographyMultiPoint 
                 | geographyMultiPolygon 
                 | geographyPoint 
                 | geographyPolygon 
                 | geometryCollection 
                 | geometryLineString 
                 | geometryMultiLineString 
                 | geometryMultiPoint 
                 | geometryMultiPolygon 
                 | geometryPoint 
                 | geometryPolygon;

null_symbol : Null_LLC ( SQ qualifiedTypeName SQ )?;
       // The optional qualifiedTypeName is used to specify what type this null value should be considered. 
       // Knowing the type is useful for function overload resolution purposes 
                                                
binary  : (X_LUC|Binary_LAC) SQ (HEXDIG1 HEXDIG1)* SQ; // Note: 'X' is case sensitive, "binary" is not
boolean_symbol : (True_LLC|ONE) | (False_LLC|ZERO);

decimal     : decimalBody ( M )?;
decimalBody : (SIGN)? ( Digit )+ (DOT ( Digit )+)?;
double_symbol      : doubleBody ( D )?;
doubleBody  : decimalBody ( E (SIGN)? ( Digit )+ )? // TODO: restrict range
            | nanInfinity;
single      : singleBody ( F )?;
singleBody  : decimalBody ( E (SIGN)? ( Digit )+ )? // TODO: restrict range
            | nanInfinity;
nanInfinity : NotANumber_LXC | MINUS Infinity_LUC | Infinity_LUC;

guid     : GUID_LAC SQ guidBody SQ;
guidBody : HEXDIG8 MINUS HEXDIG4 MINUS HEXDIG4 MINUS HEXDIG4 MINUS HEXDIG12; 

byte_symbol  : ( DIGIT3 )+; // numbers in the range from 0 to 255
sbyte : (SIGN)? ( DIGIT3 )+; // numbers in the range from -128 to 127
int16 : (SIGN)? ( DIGIT5 )+; // numbers in the range from -32768 to 32767        
int32 : (SIGN)? ( DIGIT10 )+; // numbers in the range from -2147483648 to 2147483647
int64 : int64Body (I64_POSTFIX)?;
int64Body : (SIGN)? ( DIGIT19 )+; // numbers in the range from -9223372036854775808 to 9223372036854775807

aString           : SQ ( pCharNoSingleQuote | SingleQuoteEscapedInString | Unencoded )* SQ;
pCharNoSingleQuote  : Unreserved 
                    | PctEncoded 
                    | OtherDelims 
                    | DOLLAR 
                    | AMPERSAND 
                    | SEMI 
                    | EQ 
                    | COLON 
                    | AT_SIGN 
                    ; // also no percent-encoded single quote
SingleQuoteEscapedInString : SQ SQ;  // two quotes represent one within string literal

date     : Date_LAC SQ dateBody SQ;
dateBody : year MINUS month MINUS day;

dateTimeOffset     : DateTimeOffset_LAC SQ dateTimeOffsetBody SQ;
dateTimeOffsetBody : year MINUS month MINUS day T_LUC hour COLON minute ( COLON second ( DOT fractionalSeconds )? )? ( Z_LUC | SIGN hour COLON minute );
    // COMMENT_ANTLR: ISO 8601 says T and not [Tt] separating Date and Time in DateTime
    // COMMENT_ANTLR: ISO 8601 says Z and not [Zz] indicating UTC (Zulu time ie.)

duration     : Duration_LAC SQ durationBody SQ;
durationBody : ( SIGN )? P_LUC ( ( Digit )+ D_LUC )? ( T_LUC ( ( Digit )+ H_LUC )? ( ( Digit )+ M_LUC )? ( ( Digit )+ ( DOT ( Digit )+ )? S_LUC )? )?;
     // the above is an approximation of the rules for an xml dayTimeDuration.
     // see the lexical representation for dayTimeDuration in http://www.w3.org/TR/xmlschema11-2#dayTimeDuration for more information
     // COMMENT_ANTLR: ISO 8601 also PDTHMS indicators as uppercase

timeOfDay     : TimeOfDay_LAC SQ timeOfDayBody SQ; 

timeOfDayBody : hour COLON minute ( COLON second ( DOT fractionalSeconds )?)?;
 
year  : ( Digit ) ( Digit ) ( Digit ) ( Digit );

month : ZERO ONE_TO_NINE
        | ONE ZERO_TO_TWO;

day   : ZERO_TO_TWO ONE_TO_NINE
      | THREE ZERO_TO_ONE;

hour   : ZERO_TO_ONE ( Digit )
       | TWO ONE_TO_THREE; 

minute : ZERO_TO_FIFTY_NINE;

second : ZERO_TO_FIFTY_NINE;       
fractionalSeconds : ( Digit )+;

enum_symbol      : qualifiedEnumerationTypeName SQ enumBody SQ;

enumBody  : enumValue ( COMMA enumValue )*;

enumValue : enumerationMember | int64Body;

geographyCollection   : geographyPrefix fullCollectionLiteral SQ;
fullCollectionLiteral : sridLiteral collectionLiteral;
collectionLiteral     : CollectionOP_LAC geoLiteral ( COMMA geoLiteral )* CP;
geoLiteral            : collectionLiteral
                      | lineStringLiteral
                      | multiPointLiteral
                      | multiLineStringLiteral
                      | multiPolygonLiteral
                      | pointLiteral
                      | polygonLiteral;

geographyLineString   : geographyPrefix fullLineStringLiteral SQ;
fullLineStringLiteral : sridLiteral lineStringLiteral;
lineStringLiteral     : LineString_LAC lineStringData;
lineStringData        : OP positionLiteral ( COMMA positionLiteral )+ CP;

geographyMultiLineString   : geographyPrefix fullMultiLineStringLiteral SQ;
fullMultiLineStringLiteral : sridLiteral multiLineStringLiteral;

multiLineStringLiteral     : MultiLineStringOP_LAC ( lineStringData ( COMMA lineStringData )* )? CP;

geographyMultiPoint   : geographyPrefix fullMultiPointLiteral SQ;

fullMultiPointLiteral : sridLiteral multiPointLiteral;
multiPointLiteral     : MultiPointOP_LAC ( pointData *( COMMA pointData ) )? CP;

geographyMultiPolygon   : geographyPrefix fullMultiPolygonLiteral SQ;

fullMultiPolygonLiteral : sridLiteral multiPolygonLiteral;
multiPolygonLiteral     : MultiPolygonOP_LAC ( polygonData ( COMMA polygonData )* )? CP;

geographyPoint   : geographyPrefix fullPointLiteral SQ;
fullPointLiteral : sridLiteral pointLiteral;

sridLiteral      : SRID_LAC EQ ( DIGIT5 )+ SEMI;
pointLiteral     : Point_LAC pointData;
pointData        : OP positionLiteral CP;
positionLiteral  : double_symbol SP double_symbol;  // longitude, then latitude

geographyPolygon   : geographyPrefix fullPolygonLiteral SQ;
fullPolygonLiteral : sridLiteral polygonLiteral;

polygonLiteral     : Polygon_LAC polygonData;
polygonData        : OP ringLiteral   ( COMMA ringLiteral )* CP;
ringLiteral        : OP positionLiteral ( COMMA positionLiteral )* CP;

// Within each ringLiteral, the first and last positionLiteral elements MUST be an exact syntactic match to each other.
// Within the polygonData, the ringLiterals MUST specify their points in appropriate winding order. 
// In order of traversal, points to the left side of the ring are interpreted as being in the polygon.

geometryCollection      : geometryPrefix fullCollectionLiteral      SQ;

geometryLineString      : geometryPrefix fullLineStringLiteral      SQ;
geometryMultiLineString : geometryPrefix fullMultiLineStringLiteral SQ;
geometryMultiPoint      : geometryPrefix fullMultiPointLiteral      SQ;

geometryMultiPolygon    : geometryPrefix fullMultiPolygonLiteral    SQ;
geometryPoint           : geometryPrefix fullPointLiteral           SQ;

geometryPolygon         : geometryPrefix fullPolygonLiteral SQ;


geographyPrefix : Geography_LAC SQ;
geometryPrefix  : Geometry_LAC SQ;
/*
 * ----------------------------------------------------------------------------
 * A. URI syntax [RFC3986]
 * ----------------------------------------------------------------------------
 */
host          : IPLiteral | IPv4address | regName;
port          : ( Digit )*;
IPLiteral    : OB ( IPv6address | IPvFuture  ) CB;
IPvFuture     : V_LLC ( HEXDIG1 )+ DOT ( Unreserved | SubDelims | COLON )+;
IPv6address   :   ( H16Col )+ ( H16Col )+ ( H16Col )+ ( H16Col )+ ( H16Col )+ ( H16Col )+ Ls32
                 |                      ColCol ( H16Col )+ ( H16Col )+ ( H16Col )+ ( H16Col )+ ( H16Col )+  Ls32
                 | (               H16 )? ColCol ( H16Col )+ ( H16Col )+ ( H16Col )+ ( H16Col )+  Ls32
                 | ( ( H16Col )? H16 )? ColCol ( H16Col )+ ( H16Col )+ ( H16Col )+  Ls32
                 | ( ( H16Col )? ( H16Col )? H16 )? ColCol ( H16Col )+ ( H16Col )+  Ls32
                 | ( ( H16Col )? ( H16Col )? ( H16Col )? H16 )? ColCol    H16Col   Ls32
                 | ( ( H16Col )? ( H16Col )? ( H16Col )? ( H16Col )? H16 )? ColCol              Ls32
                 | ( ( H16Col )? ( H16Col )? ( H16Col )? ( H16Col )? ( H16Col )? H16 )? ColCol              H16
                 | ( ( H16Col )? ( H16Col )? ( H16Col )? ( H16Col )? ( H16Col )? ( H16Col )? H16 )? ColCol ;
Ls32          : ( H16Col H16 ) | IPv4address;
IPv4address   : DecOctet DOT DecOctet DOT DecOctet DOT DecOctet;
DecOctet     : ONEHUNDRED_TO_ONEHUNDREDNINETYNINE            // 100-199
              | TWOHUNDRED_TO_TWOHUNDREDFOURTYNINE     // 200-249
              | TWOHUNDREDFIFTY_TO_TWOHUNDREDFIFTYFIVE        // 250-255
              | TEN_TO_NINETYNINE         // 10-99
              | ( Digit ) ;                // 0-9
regName      : ( Unreserved | PctEncoded | SubDelims )*;
segmentNZ    : ( pChar )+;
pChar         : Unreserved | PctEncoded | SubDelims | COLON | AT_SIGN;
PctEncoded   : PERCENT HEXDIG1 HEXDIG1;
Unreserved    : Alpha | Digit | MINUS | DOT | UNDERSCORE | TILDE;
SubDelims    : DOLLAR | AMPERSAND | EQ | SEMI | SQ | OtherDelims;
OtherDelims  : EXCLAMATION | OP | CP | STAR | PLUS | COMMA;

/* ----------------------------------------------------------------------------
 * 7. Punctuation
 * ----------------------------------------------------------------------------
 */
// TODO: SQUOTE ie. SQ must also be normalized before parsing
// see lexer grammar.

/* ----------------------------------------------------------------------------
 * B. ABNF core definitions [RFC5234]
 * ----------------------------------------------------------------------------
 */

// see lexer grammar.

/* ----------------------------------------------------------------------------
 * End of ODataGrammar
 * ----------------------------------------------------------------------------
 */

