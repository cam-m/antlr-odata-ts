grammar OData;

// This thing is a mess - the lexer rules need to be teased out, as they were
// generated from an abnf to antrl converter and are not effective for parsing.
//
// A start has been made. e.g. URI_PROTOCOL: H T T P S?;
//------------------------------------------------------------------------------
// odata-abnf-construction-rules
//------------------------------------------------------------------------------
//
//    OData Version 4.0 Plus Errata 02
//    OASIS Standard incorporating Approved Errata 02
//    30 October 2014
//    Copyright (c) OASIS Open 2014. All Rights Reserved.
//    Source: http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/abnf/
//
//
// Technical Committee:
//   OASIS Open Data Protocol (OData) TC
//   https://www.oasis-open.org/committees/odata
//
// Chairs:
//   - Barbara Hartel (barbara.hartel@sap.com), SAP AG
//   - Ram Jeyaraman (Ram.Jeyaraman@microsoft.com), Microsoft
//
// Editors:
//   - Ralf Handl (ralf.handl@sap.com), SAP AG
//   - Michael Pizzo (mikep@microsoft.com), Microsoft
//   - Martin Zurmuehl (martin.zurmuehl@sap.com), SAP AG
//
// Additional artifacts:
//   This grammar is one component of a Work Product which consists of:
//   - OData Version 4.0 Part 1: Protocol
//   - OData Version 4.0 Part 2: URL Conventions
//   - OData Version 4.0 Part 3: Common Schema Definition Language (CSDL)
//   - OData ABNF Construction Rules Version 4.0 (this document)
//   - OData ABNF Test Cases
//   - OData Core Vocabulary
//   - OData Capabilities Vocabulary
//   - OData Measures Vocabulary
//   - OData Metadata Service Entity Model
//   - OData EDMX XML Schema
//   - OData EDM XML Schema
//
// Related work:
//   This work product is related to the following two Work Products, each of
//   which define alternate formats for OData payloads
//   - OData Atom Format Version 4.0
//   - OData JSON Format Version 4.0
//   This specification replaces or supersedes:
//   - None
//
// Declared XML namespaces:
//   - http://docs.oasis-open.org/odata/ns/edmx
//   - http://docs.oasis-open.org/odata/ns/edm
//
// Abstract:
//   The Open Data Protocol (OData) enables the creation of REST-based data
//   services, which allow resources, identified using Uniform Resource
//   Identifiers (URLs) and defined in a data model, to be published and
//   edited by Web clients using simple HTTP messages. This document defines
//   the URL syntax for requests and the serialization format for primitive
//   literals in request and response payloads.
//
// Overview:
//   This grammar uses the ABNF defined in RFC5234 with one extension: literals
//   enclosed in single quotes (e.g. '$metadata') are treated case-sensitive.
//
//   The following rules assume that URIs have been percent-encoding normalized
//   as described in section 6.2.2.2 of RFC3986
//   (http://tools.ietf.org/html/rfc3986#section-6.2.2.2)
//   before applying the grammar to them, i.e. all characters in the unreserved
//   set (see rule "unreserved" below) are plain literals and NOT
//   percent-encoded.
//
//   For characters outside the unreserved set the rules explicitly state
//   whether the percent-encoded representation is treated identical to the
//   plain literal representation.
//
//   One prominent example is the single quote that delimits OData primitive
//   type literals: %27 and ' are treated identically, so a single quote within
//   a string literal is "encoded" as two consecutive single quotes in either
//   literal or percent-encoded representation.
//
// Contents:
//   1. Resource Path
//   2. Query Options
//   3. Context URL Fragments
//   4. Expressions
//   5. JSON format for function parameters
//   6. Names and identifiers
//   7. Literal Data Values
//   8. Header values
//   9. Punctuation
//
//   A. URI syntax [RFC3986]
//   B. IRI syntax [RFC3986]
//   C. ABNF core definitions [RFC5234]
//
//------------------------------------------------------------------------------
dummystartrule : odatauri | header | primitivevalue; // just to please the test parser
//------------------------------------------------------------------------------


odatauri : serviceroot ( odatarelativeuri )?;

serviceroot : URI_PROTOCOL COLON SLASH SLASH host (COLON port)?
              SLASH ( segment_nz SLASH )*;

odatarelativeuri : BATCH | ENTITY QUESTION entityoptions
                 | ENTITY SLASH qualifiedentitytypename QUESTION entitycastoptions
                 | METADATA ( QUESTION format )? ( context )?
                 | (resourcepath ( QUESTION queryoptions )?);

//------------------------------------------------------------------------------
// 1. Resource Path
//------------------------------------------------------------------------------

resourcepath : (entitysetname                  ( collectionnavigation )?)
             | (singletonentity                ( singlenavigation )?)
             | actionimportcall
             | (entitycolfunctionimportcall    ( collectionnavigation )?)
             | (entityfunctionimportcall       ( singlenavigation )?)
             | (complexcolfunctionimportcall   ( collectionpath )?)
             | (complexfunctionimportcall      ( complexpath )?)
             | (primitivecolfunctionimportcall ( collectionpath )?)
             | (primitivefunctionimportcall    ( singlepath )?)
             | crossjoin
             | DOLLAR A L L ;

collectionnavigation : ( SLASH qualifiedentitytypename )? ( collectionnavpath )?;
collectionnavpath    : (keypredicate ( singlenavigation )?)
                     | collectionpath
                     | ref;

keypredicate     : simplekey | compoundkey;
simplekey        : open keypropertyvalue close;
compoundkey      : open keyvaluepair ( comma keyvaluepair )* close;
keyvaluepair     : ( primitivekeyproperty | keypropertyalias ) eq keypropertyvalue;
keypropertyvalue : primitiveliteral;
keypropertyalias : odataidentifier;

singlenavigation : ( SLASH qualifiedentitytypename )?
                   ( (SLASH propertypath)
                   | boundoperation
                   | ref
                   | value  // request the media resource of a media entity
                   )?;

propertypath : (entitycolnavigationproperty ( collectionnavigation )?)
             | (entitynavigationproperty    ( singlenavigation )?)
             | (complexcolproperty          ( collectionpath )?)
             | (complexproperty             ( complexpath )?)
             | (primitivecolproperty        ( collectionpath )?)
             | (primitiveproperty           ( singlepath )?)
             | (streamproperty              ( boundoperation )?);

collectionpath : count | boundoperation;

singlepath     : value | boundoperation;

complexpath    : ( SLASH qualifiedcomplextypename )?
                 ( (SLASH propertypath)
                 | boundoperation
                 );

count : SLASH DOLLAR C O U N T;
ref   : SLASH DOLLAR R E F;
value : SLASH DOLLAR V A L U E;

// boundOperation segments can only be composed if the type of the previous segment
// matches the type of the first parameter of the action or function being called.
// Note that the rule name reflects the return type of the function.
boundoperation : SLASH ( boundactioncall
                     | (boundentitycolfunccall    ( collectionnavigation )?)
                     | (boundentityfunccall       ( singlenavigation )?)
                     | (boundcomplexcolfunccall   ( SLASH qualifiedcomplextypename )? ( collectionpath )?)
                     | (boundcomplexfunccall      ( complexpath )?)
                     | (boundprimitivecolfunccall ( collectionpath )?)
                     | (boundprimitivefunccall    ( singlepath )?)
                     );

actionimportcall : actionimport;
boundactioncall  : namespace_1 PERIOD action;
                   // with the added restriction that the binding parameter MUST be either an entity or collection of entities
                   // and is specified by reference using the URI immediately preceding (to the left) of the boundActionCall

// The following boundXxxFuncCall rules have the added restrictions that
//  - the function MUST support binding, and
//  - the binding parameter type MUST match the type of resource identified by the
//    URI immediately preceding (to the left) of the boundXxxFuncCall, and
//  - the functionParameters MUST NOT include the bindingParameter.
boundentityfunccall       : namespace_1 PERIOD entityfunction       functionparameters;
boundentitycolfunccall    : namespace_1 PERIOD entitycolfunction    functionparameters;
boundcomplexfunccall      : namespace_1 PERIOD complexfunction      functionparameters;
boundcomplexcolfunccall   : namespace_1 PERIOD complexcolfunction   functionparameters;
boundprimitivefunccall    : namespace_1 PERIOD primitivefunction    functionparameters;
boundprimitivecolfunccall : namespace_1 PERIOD primitivecolfunction functionparameters;

entityfunctionimportcall       : entityfunctionimport       functionparameters;
entitycolfunctionimportcall    : entitycolfunctionimport    functionparameters;
complexfunctionimportcall      : complexfunctionimport      functionparameters;
complexcolfunctionimportcall   : complexcolfunctionimport   functionparameters;
primitivefunctionimportcall    : primitivefunctionimport    functionparameters;
primitivecolfunctionimportcall : primitivecolfunctionimport functionparameters;

functionparameters : open ( functionparameter ( comma functionparameter )* )? close;
functionparameter  : parametername eq ( parameteralias | primitiveliteral );
parametername      : odataidentifier;
parameteralias     : at odataidentifier;

crossjoin : CROSSJOIN open entitysetname ( comma entitysetname )* close;


//------------------------------------------------------------------------------
// 2. Query Options
//------------------------------------------------------------------------------

queryoptions : queryoption ( AMPERSAND queryoption )*;
queryoption  : systemqueryoption
             | aliasandvalue
             | customqueryoption;

entityoptions  : ( entityidoption AMPERSAND )* id ( AMPERSAND entityidoption )*;
entityidoption : format
               | customqueryoption;
entitycastoptions : ( entitycastoption AMPERSAND )* id ( AMPERSAND entitycastoption )*;
entitycastoption  : entityidoption
                  | expand
                  | select;

id : DOLLAR I D eq iri_in_query;

systemqueryoption : expand
                  | filter
                  | format
                  | id
                  | inlinecount
                  | orderby
                  | search
                  | select
                  | skip
                  | skiptoken
                  | top;

expand            : DOLLAR E X P A N D eq expanditem ( comma expanditem )*;
expanditem        : (star ( ref | (open levels close) )?)
                  | (expandpath
                    ( (ref   ( open expandrefoption   ( semi expandrefoption   )* close )?)
                    | (count ( open expandcountoption ( semi expandcountoption )* close )?)
                    |         (open expandoption      ( semi expandoption      )* close)
                    )?);
expandpath        : ( ( qualifiedentitytypename | qualifiedcomplextypename ) SLASH )?
                    ( ( complexproperty | complexcolproperty ) SLASH ( qualifiedcomplextypename SLASH )? )*
                    navigationproperty
                    ( SLASH qualifiedentitytypename )?;
expandcountoption : filter
                  | search;
expandrefoption   : expandcountoption
                  | orderby
                  | skip
                  | top
                  | inlinecount;
expandoption      : expandrefoption
                  | select
                  | expand
                  | levels;

levels : LEVELS eq ( (F_NON_ZERO_DIGIT digit*) | M A X );

filter : DOLLAR F I L T E R eq boolcommonexpr;

orderby     : DOLLAR O R D E R B Y eq orderbyitem ( comma orderbyitem )*;
orderbyitem : commonexpr ( rws ( A S C | D E S C ) )?;

skip : DOLLAR S K I P eq digit+;
top  : DOLLAR T O P  eq digit+;

format : FORMAT eq
         ( ATOM
         | JSON
         | XML
         | (pchar+ SLASH pchar+) // <a data service specific value indicating a
         );                     // format specific to the specific data service> or
                               // <An IANA-defined [IANA-MMT] content type>

inlinecount : DOLLAR C O U N T eq booleanvalue;

search     : DOLLAR S E A R C H eq bws searchexpr;
searchexpr : ( (open bws searchexpr bws close)
             | searchterm
             ) ( searchorexpr
               | searchandexpr
               )?;

searchorexpr  : rws O R rws searchexpr;
searchandexpr : rws ( A N D rws )? searchexpr;

searchterm   : ( N O T rws )? ( searchphrase | searchword );
searchphrase : quotation_mark qchar_no_amp_dquote+ quotation_mark;
searchword   : alpha+; // Actually: any character from the Unicode categories L or Nl,
                       // but not the words AND, OR, and NOT

select         : DOLLAR S E L E C T eq selectitem ( comma selectitem )*;
selectitem     : star
               | alloperationsinschema
               | (( ( qualifiedentitytypename | qualifiedcomplextypename ) SLASH )?
                 ( selectproperty
                 | qualifiedactionname
                 | qualifiedfunctionname
                 ));
selectproperty : primitiveproperty
               | primitivecolproperty
               | navigationproperty
               | (selectpath ( SLASH selectproperty )?);
selectpath     : ( complexproperty | complexcolproperty ) ( SLASH qualifiedcomplextypename )?;


alloperationsinschema : namespace_1 PERIOD star;

// The parameterNames uniquely identify the bound function overload
// only if it has overloads.
qualifiedactionname   : namespace_1 PERIOD action;
qualifiedfunctionname : namespace_1 PERIOD function ( open parameternames close )?;

// The names of all non-binding parameters, separated by commas
parameternames : parametername ( comma parametername )*;

skiptoken : DOLLAR S K I P T O K E N eq ( qchar_no_amp )+;

aliasandvalue : parameteralias eq parametervalue;

parametervalue : arrayorobject
               | commonexpr;

customqueryoption : customname ( eq customvalue )?;
customname        : qchar_no_amp_eq_at_dollar ( qchar_no_amp_eq )*;
customvalue       : ( qchar_no_amp )*;


//------------------------------------------------------------------------------
// 3. Context URL Fragments
//------------------------------------------------------------------------------

context         : POUND contextfragment;
contextfragment : C O L L E C T I O N LEFT_PAREN DOLLAR R E F RIGHT_PAREN | DOLLAR R E F
                | C O L L E C T I O N LEFT_PAREN E D M PERIOD E N T I T Y T Y P E RIGHT_PAREN
                | C O L L E C T I O N LEFT_PAREN E D M PERIOD C O M P L E X T Y P E RIGHT_PAREN
                | (singletonentity ( navigation ( containmentnavigation )* ( SLASH qualifiedentitytypename )? )? ( selectlist )?)
                | (qualifiedtypename ( selectlist )?)
                | entityset  SLASH DOLLAR D E L E T E D E N T I T Y | SLASH DOLLAR L I N K | SLASH DOLLAR D E L E T E D L I N K 
                | (entityset keypredicate SLASH contextpropertypath ( selectlist )?)
                | (entityset ( selectlist )? ( (SLASH DOLLAR E N T I T Y) | (SLASH DOLLAR D E L T A) )?);

entityset : entitysetname ( containmentnavigation )* ( SLASH qualifiedentitytypename )?;

containmentnavigation : keypredicate ( SLASH qualifiedentitytypename )? navigation;
navigation            : ( SLASH complexproperty ( SLASH qualifiedcomplextypename )? )* SLASH navigationproperty;

selectlist         : open selectlistitem ( comma selectlistitem )* close;
selectlistitem     : star // all structural properties
                   | alloperationsinschema
                   | (( qualifiedentitytypename SLASH )?
                     ( qualifiedactionname
                     | qualifiedfunctionname
                     | selectlistproperty
                     ));
selectlistproperty : primitiveproperty
                   | primitivecolproperty
                   | (navigationproperty ( PLUS )? ( selectlist )?)
                   | (selectpath ( SLASH selectlistproperty )?);

contextpropertypath : primitiveproperty
                    | primitivecolproperty
                    | complexcolproperty
                    | (complexproperty ( ( SLASH qualifiedcomplextypename )? SLASH contextpropertypath )?);


//------------------------------------------------------------------------------
// 4. Expressions
//------------------------------------------------------------------------------

// Note: a boolCommonExpr is also a commonExpr, e.g. sort by Boolean
commonexpr : ( primitiveliteral
             | parameteralias
             | arrayorobject
             | rootexpr
             | firstmemberexpr
             | functionexpr
             | negateexpr
             | methodcallexpr
             | parenexpr
             | castexpr
             )
             ( addexpr
             | subexpr
             | mulexpr
             | divexpr
             | modexpr
             )?;

boolcommonexpr : ( isofexpr
                 | boolmethodcallexpr
                 | notexpr
                 | (commonexpr
                   ( eqexpr
                   | neexpr
                   | ltexpr
                   | leexpr
                   | gtexpr
                   | geexpr
                   | hasexpr
                   )?)
                 | boolparenexpr
                 ) ( andexpr | orexpr )?;

rootexpr : DOLLAR R O O T SLASH (( (entitysetname keypredicate) | singletonentity ) ( singlenavigationexpr )?);

firstmemberexpr : memberexpr | (inscopevariableexpr ( SLASH memberexpr )?);

memberexpr : ( qualifiedentitytypename SLASH )?
             ( propertypathexpr
             | boundfunctionexpr
             );

propertypathexpr : ( (entitycolnavigationproperty ( collectionnavigationexpr )?)
                   | (entitynavigationproperty    ( singlenavigationexpr )?)
                   | (complexcolproperty          ( collectionpathexpr )?)
                   | (complexproperty             ( complexpathexpr )?)
                   | (primitivecolproperty        ( collectionpathexpr )?)
                   | (primitiveproperty           ( singlepathexpr )?)
                   | (streamproperty              ( singlepathexpr )?)
                   );

inscopevariableexpr       : implicitvariableexpr
                          | lambdavariableexpr; // only allowed inside a lambdaPredicateExpr
implicitvariableexpr      : DOLLAR I T;              // references the unnamed outer variable of the query
lambdavariableexpr        : odataidentifier;

collectionnavigationexpr : ( SLASH qualifiedentitytypename )?
                           ( (keypredicate ( singlenavigationexpr )?)
                           | collectionpathexpr
                           );

singlenavigationexpr : SLASH memberexpr;

collectionpathexpr : count
                   | (SLASH boundfunctionexpr)
                   | (SLASH anyexpr)
                   | (SLASH allexpr);

complexpathexpr : SLASH ( qualifiedcomplextypename SLASH )?
                  ( propertypathexpr
                  | boundfunctionexpr
                  );

singlepathexpr : SLASH boundfunctionexpr;

boundfunctionexpr : functionexpr; // boundFunction segments can only be composed if the type of the
                                 // previous segment matches the type of the first function parameter

functionexpr : namespace_1 PERIOD
               ( (entitycolfunction    functionexprparameters ( collectionnavigationexpr )?)
               | (entityfunction       functionexprparameters ( singlenavigationexpr )?)
               | (complexcolfunction   functionexprparameters ( collectionpathexpr )?)
               | (complexfunction      functionexprparameters ( complexpathexpr )?)
               | (primitivecolfunction functionexprparameters ( collectionpathexpr )?)
               | (primitivefunction    functionexprparameters ( singlepathexpr )?)
               );

functionexprparameters : open ( functionexprparameter ( comma functionexprparameter )* )? close;
functionexprparameter  : parametername eq ( parameteralias | parametervalue );

anyexpr : 'any' open bws ( lambdavariableexpr bws colon bws lambdapredicateexpr )? bws close;
allexpr : 'all' open bws   lambdavariableexpr bws colon bws lambdapredicateexpr   bws close;
lambdapredicateexpr : boolcommonexpr; // containing at least one lambdaVariableExpr

methodcallexpr : indexofmethodcallexpr
               | tolowermethodcallexpr
               | touppermethodcallexpr
               | trimmethodcallexpr
               | substringmethodcallexpr
               | concatmethodcallexpr
               | lengthmethodcallexpr
               | yearmethodcallexpr
               | monthmethodcallexpr
               | daymethodcallexpr
               | hourmethodcallexpr
               | minutemethodcallexpr
               | secondmethodcallexpr
               | fractionalsecondsmethodcallexpr
               | totalsecondsmethodcallexpr
               | datemethodcallexpr
               | timemethodcallexpr
               | roundmethodcallexpr
               | floormethodcallexpr
               | ceilingmethodcallexpr
               | distancemethodcallexpr
               | geolengthmethodcallexpr
               | totaloffsetminutesmethodcallexpr
               | mindatetimemethodcallexpr
               | maxdatetimemethodcallexpr
               | nowmethodcallexpr;

boolmethodcallexpr : endswithmethodcallexpr
                   | startswithmethodcallexpr
                   | containsmethodcallexpr
                   | intersectsmethodcallexpr;

containsmethodcallexpr   : C O N T A I N S     open bws commonexpr bws comma bws commonexpr bws close;
startswithmethodcallexpr : S T A R T S W I T H open bws commonexpr bws comma bws commonexpr bws close;
endswithmethodcallexpr   : E N D S W I T H     open bws commonexpr bws comma bws commonexpr bws close;
lengthmethodcallexpr     : L E N G T H         open bws commonexpr bws close;
indexofmethodcallexpr    : I N D E X O F       open bws commonexpr bws comma bws commonexpr bws close;
substringmethodcallexpr  : S U B S T R I N G   open bws commonexpr bws comma bws commonexpr bws ( comma bws commonexpr bws )? close;
tolowermethodcallexpr    : T O L O W E R       open bws commonexpr bws close;
touppermethodcallexpr    : T O U P P E R       open bws commonexpr bws close;
trimmethodcallexpr       : T R I M             open bws commonexpr bws close;
concatmethodcallexpr     : C O N C A T         open bws commonexpr bws comma bws commonexpr bws close;

yearmethodcallexpr               : Y E A R               open bws commonexpr bws close;
monthmethodcallexpr              : M O N T H              open bws commonexpr bws close;
daymethodcallexpr                : D A Y                open bws commonexpr bws close;
hourmethodcallexpr               : H O U R               open bws commonexpr bws close;
minutemethodcallexpr             : M I N U T E             open bws commonexpr bws close;
secondmethodcallexpr             : S E C O N D             open bws commonexpr bws close;
fractionalsecondsmethodcallexpr  : F R A C T I O N A L S E C O N D S  open bws commonexpr bws close;
totalsecondsmethodcallexpr       : T O T A L S E C O N D S       open bws commonexpr bws close;
datemethodcallexpr               : D A T E               open bws commonexpr bws close;
timemethodcallexpr               : T I M E               open bws commonexpr bws close;
totaloffsetminutesmethodcallexpr : T O T A L O F F S E T M I N U T E S open bws commonexpr bws close;

mindatetimemethodcallexpr : M I N D A T E T I M E open bws close;
maxdatetimemethodcallexpr : M A X D A T E T I M E open bws close;
nowmethodcallexpr         : N O W open bws close;

roundmethodcallexpr   : R O U N D   open bws commonexpr bws close;
floormethodcallexpr   : F L O O R   open bws commonexpr bws close;
ceilingmethodcallexpr : C E I L I N G open bws commonexpr bws close;

distancemethodcallexpr   : G E O PERIOD D I S T A N C E   open bws commonexpr bws comma bws commonexpr bws close;
geolengthmethodcallexpr  : G E O PERIOD L E N G T H     open bws commonexpr bws close;
intersectsmethodcallexpr : G E O PERIOD I N T E R S E C T S open bws commonexpr bws comma bws commonexpr bws close;

boolparenexpr : open bws boolcommonexpr bws close;
parenexpr     : open bws commonexpr     bws close;

andexpr : rws A N D rws boolcommonexpr;
orexpr  : rws O R  rws boolcommonexpr;

eqexpr : rws E Q rws commonexpr;
neexpr : rws N E rws commonexpr;
ltexpr : rws L T rws commonexpr;
leexpr : rws L E rws commonexpr;
gtexpr : rws G T rws commonexpr;
geexpr : rws G E rws commonexpr;

hasexpr : rws H A S rws enum_1;

addexpr : rws A D D rws commonexpr;
subexpr : rws S U B rws commonexpr;
mulexpr : rws M U L rws commonexpr;
divexpr : rws D I V rws commonexpr;
modexpr : rws M O D rws commonexpr;

negateexpr : DASH bws commonexpr;

notexpr : N O T rws boolcommonexpr;

isofexpr : 'isof' open bws ( commonexpr bws comma bws )? qualifiedtypename bws close;
castexpr : 'cast' open bws ( commonexpr bws comma bws )? qualifiedtypename bws close;


//------------------------------------------------------------------------------
// 5. JSON format for function parameters
//------------------------------------------------------------------------------
// Note: the query part of a URI needs to be partially percent-decoded before
// applying these rules, see comment at the top of this file
//------------------------------------------------------------------------------

arrayorobject : complexcolinuri
              | complexinuri
              | rootexprcol
              | primitivecolinuri;

complexcolinuri : begin_array
                  ( complexinuri ( value_separator complexinuri )* )?
                  end_array;

complexinuri : begin_object
               ( ( annotationinuri
                 | primitivepropertyinuri
                 | complexpropertyinuri
                 | collectionpropertyinuri
                 | navigationpropertyinuri
                 )
                 ( value_separator
                    ( annotationinuri
                    | primitivepropertyinuri
                    | complexpropertyinuri
                    | collectionpropertyinuri
                    | navigationpropertyinuri
                    )
                  )*
               )?
               end_object;

collectionpropertyinuri : ( quotation_mark primitivecolproperty quotation_mark
                            name_separator
                            primitivecolinuri
                          )
                        | ( quotation_mark complexcolproperty quotation_mark
                            name_separator
                            complexcolinuri
                          );

primitivecolinuri : begin_array
                    ( primitiveliteralinjson ( value_separator primitiveliteralinjson )* )?
                    end_array;

complexpropertyinuri : quotation_mark complexproperty quotation_mark
                       name_separator
                       complexinuri;

annotationinuri : quotation_mark at namespace_1 PERIOD termname quotation_mark
                  name_separator
                  ( complexinuri | complexcolinuri | primitiveliteralinjson | primitivecolinuri );

primitivepropertyinuri : quotation_mark primitiveproperty quotation_mark
                         name_separator
                         primitiveliteralinjson;

navigationpropertyinuri : singlenavpropinjson
                        | collectionnavpropinjson;
singlenavpropinjson     : quotation_mark entitynavigationproperty quotation_mark
													name_separator
													rootexpr;
collectionnavpropinjson : quotation_mark entitycolnavigationproperty quotation_mark
													name_separator
													rootexprcol;

rootexprcol : begin_array
              ( rootexpr ( value_separator rootexpr )* )?
              end_array;

// JSON syntax: adapted to URI restrictions from [RFC4627]
begin_object : bws ( LEFT_CURLY_BRACE | (PERCENT SEVEN (B)) ) bws;
end_object   : bws ( RIGHT_CURLY_BRACE | (PERCENT SEVEN (D)) ) bws;

begin_array : bws ( LEFT_BRACE | (PERCENT FIVE (B)) ) bws;
end_array   : bws ( RIGHT_BRACE | (PERCENT FIVE (D)) ) bws;

quotation_mark  : dquote | (PERCENT TWO TWO);
name_separator  : bws colon bws;
value_separator : bws comma bws;

primitiveliteralinjson : stringinjson
                       | numberinjson
                       | 'true'
                       | 'false'
                       | 'null';

stringinjson : quotation_mark charinjson* quotation_mark;
charinjson   : qchar_unescaped
             | qchar_json_special
             | (escape ( quotation_mark
                      | escape
                      | ( SLASH | (PERCENT TWO (F)) ) // solidus         U+002F - literal form is allowed in the query part of a URL
                      | 'b'             // backspace       U+0008
                      | 'f'             // form feed       U+000C
                      | 'n'             // line feed       U+000A
                      | 'r'             // carriage return U+000D
                      | 't'             // tab             U+0009
                      | ('u' hexdig hexdig hexdig hexdig)     //                 U+XXXX
                      ));

qchar_json_special : sp | COLON | LEFT_CURLY_BRACE | RIGHT_CURLY_BRACE | LEFT_BRACE | RIGHT_BRACE; // some agents put these unencoded into the query part of a URL

escape : BACKSLASH | (PERCENT FIVE (C));     // reverse solidus U+005C

numberinjson : ( DASH )? int_1 ( frac )? ( exp )?;
int_1          : ZERO | ( F_NON_ZERO_DIGIT F_DIGIT* );
frac         : PERIOD digit+;
exp          : 'e' ( DASH | PLUS )? F_DIGIT+;


//------------------------------------------------------------------------------
// 6. Names and identifiers
//------------------------------------------------------------------------------

singlequalifiedtypename : qualifiedentitytypename
                        | qualifiedcomplextypename
                        | qualifiedtypedefinitionname
                        | qualifiedenumtypename
                        | primitivetypename;

qualifiedtypename : singlequalifiedtypename
                  | ('Collection' open singlequalifiedtypename close);

qualifiedentitytypename     : namespace_1 PERIOD entitytypename;
qualifiedcomplextypename    : namespace_1 PERIOD complextypename;
qualifiedtypedefinitionname : namespace_1 PERIOD typedefinitionname;
qualifiedenumtypename       : namespace_1 PERIOD enumerationtypename;

// an alias is just a single-part namespace
namespace_1     : namespacepart ( PERIOD namespacepart )*;
namespacepart : odataidentifier;

entitysetname       : odataidentifier;
singletonentity     : odataidentifier;
entitytypename      : odataidentifier;
complextypename     : odataidentifier;
typedefinitionname  : odataidentifier;
enumerationtypename : odataidentifier;
enumerationmember   : odataidentifier;
termname            : odataidentifier;

// Note: this pattern is overly restrictive, the normative definition is type TSimpleIdentifier in OData EDM XML Schema (TODO: Fix to be identifiercharacters{127}
odataidentifier             : identifierleadingcharacter identifiercharacter*;
identifierleadingcharacter  : alpha | UNDERSCORE;         // plus Unicode characters from the categories L or Nl
identifiercharacter         : alpha | UNDERSCORE | digit; // plus Unicode characters from the categories L, Nl, Nd, Mn, Mc, Pc, or Cf

primitivetypename : 'Edm' PERIOD ( 'Binary' | 'Boolean' | 'Byte' | 'Date' | 'DateTimeOffset' | 'Decimal' | 'Double' | 'Duration' | 'Guid' | 'Int16' | 'Int32' | 'Int64' | 'SByte' | 'Single' | 'Stream' | 'String' | 'TimeOfDay' | abstractspatialtypename concretespatialtypename? );

abstractspatialtypename : 'Geography' | 'Geometry';

concretespatialtypename : 'Collection'
                        | 'LineString'
                        | 'MultiLineString'
                        | 'MultiPoint'
                        | 'MultiPolygon'
                        | 'Point'
                        | 'Polygon';

primitiveproperty       : primitivekeyproperty | primitivenonkeyproperty;
primitivekeyproperty    : odataidentifier;
primitivenonkeyproperty : odataidentifier;
primitivecolproperty    : odataidentifier;
complexproperty         : odataidentifier;
complexcolproperty      : odataidentifier;
streamproperty          : odataidentifier;

navigationproperty          : entitynavigationproperty | entitycolnavigationproperty;
entitynavigationproperty    : odataidentifier;
entitycolnavigationproperty : odataidentifier;

action       : odataidentifier;
actionimport : odataidentifier;

function : entityfunction
         | entitycolfunction
         | complexfunction
         | complexcolfunction
         | primitivefunction
         | primitivecolfunction;

entityfunction       : odataidentifier;
entitycolfunction    : odataidentifier;
complexfunction      : odataidentifier;
complexcolfunction   : odataidentifier;
primitivefunction    : odataidentifier;
primitivecolfunction : odataidentifier;

entityfunctionimport       : odataidentifier;
entitycolfunctionimport    : odataidentifier;
complexfunctionimport      : odataidentifier;
complexcolfunctionimport   : odataidentifier;
primitivefunctionimport    : odataidentifier;
primitivecolfunctionimport : odataidentifier;


//------------------------------------------------------------------------------
// 7. Literal Data Values
//------------------------------------------------------------------------------

// in URLs
primitiveliteral : nullvalue                  // plain values up to int64Value
                 | booleanvalue
                 | guidvalue
                 | datevalue
                 | datetimeoffsetvalue
                 | timeofdayvalue
                 | decimalvalue
                 | doublevalue
                 | singlevalue
                 | sbytevalue
                 | bytevalue
                 | int16value
                 | int32value
                 | int64value
                 | string_2                     // single-quoted
                 | duration_1                   // all others are quoted and prefixed
                 | binary_1
                 | enum_1
                 | geographycollection
                 | geographylinestring
                 | geographymultilinestring
                 | geographymultipoint
                 | geographymultipolygon
                 | geographypoint
                 | geographypolygon
                 | geometrycollection
                 | geometrylinestring
                 | geometrymultilinestring
                 | geometrymultipoint
                 | geometrymultipolygon
                 | geometrypoint
                 | geometrypolygon;

// in Atom and JSON message bodies and CSDL DefaultValue attributes
primitivevalue : booleanvalue
               | guidvalue
               | durationvalue
               | datevalue
               | datetimeoffsetvalue
               | timeofdayvalue
               | enumvalue
               | fullcollectionliteral
               | fulllinestringliteral
               | fullmultipointliteral
               | fullmultilinestringliteral
               | fullmultipolygonliteral
               | fullpointliteral
               | fullpolygonliteral
               | decimalvalue
               | doublevalue
               | singlevalue
               | sbytevalue
               | bytevalue
               | int16value
               | int32value
               | int64value
               | binaryvalue;
               // also valid are:
               // - any XML string for strings in Atom and CSDL documents
               // - any JSON string for JSON documents

nullvalue : 'null';

// base64url encoding according to http://tools.ietf.org/html/rfc4648#section-5
binary_1      : B I N A R Y squote binaryvalue squote;
binaryvalue : (base64char base64char base64char base64char)* ( base64b16  | base64b8 )?;
base64b16   : base64char base64char ( 'A' | 'E' | 'I' | 'M' | 'Q' | 'U' | 'Y' | 'c' | 'g' | 'k' | 'o' | 's' | 'w' | '0' | '4' | '8' )  '='?;
base64b8    : base64char ( 'A' | 'Q' | 'q' | 'w') ( EQUALS EQUALS )?;
base64char  : alpha | digit | DASH | UNDERSCORE;

booleanvalue : T R U E | F A L S E;

decimalvalue : (sign)? digit+ (PERIOD digit+)?;

doublevalue : (decimalvalue ( (E) (sign)? digit+ )?) | nanInfinity; // IEEE 754 binary64 floating-point number (15-17 decimal digits)
singlevalue : doublevalue;                                       // IEEE 754 binary32 floating-point number (6-9 decimal digits)
nanInfinity : 'NaN' | '-INF' | 'INF' ;
guidvalue : hexdig hexdig hexdig hexdig hexdig hexdig hexdig hexdig DASH hexdig hexdig hexdig hexdig DASH hexdig hexdig hexdig hexdig DASH hexdig hexdig hexdig hexdig DASH hexdig hexdig hexdig hexdig hexdig hexdig hexdig hexdig hexdig hexdig hexdig hexdig;

bytevalue  : digit (digit? | (digit digit));           // numbers in the range from 0 to 255
sbytevalue : ( sign )? digit (digit? | (digit digit));  // numbers in the range from -128 to 127
int16value : ( sign )? digit (digit? | (digit digit) | (digit digit digit) | (digit digit digit digit));  // numbers in the range from -32768 to 32767
int32value : ( sign )? digit (digit? | (digit digit) | (digit digit digit) | (digit digit digit digit) | (digit digit digit digit digit) | (digit digit digit digit digit digit) | (digit digit digit digit digit digit digit) | (digit digit digit digit digit digit digit digit) | (digit digit digit digit digit digit digit digit digit)); // numbers in the range from -2147483648 to 2147483647
int64value : ( sign )? digit (digit? | (digit digit) | (digit digit digit) | (digit digit digit digit) | (digit digit digit digit digit) | (digit digit digit digit digit digit) | (digit digit digit digit digit digit digit) | (digit digit digit digit digit digit digit digit) | (digit digit digit digit digit digit digit digit digit) | (digit digit digit digit digit digit digit digit digit digit) | (digit digit digit digit digit digit digit digit digit digit digit) | (digit digit digit digit digit digit digit digit digit digit digit digit) | (digit digit digit digit digit digit digit digit digit digit digit digit digit) | (digit digit digit digit digit digit digit digit digit digit digit digit digit digit) | (digit digit digit digit digit digit digit digit digit digit digit digit digit digit digit) | (digit digit digit digit digit digit digit digit digit digit digit digit digit digit digit digit) | (digit digit digit digit digit digit digit digit digit digit digit digit digit digit digit digit digit) | (digit digit digit digit digit digit digit digit digit digit digit digit digit digit digit digit digit digit)); // numbers in the range from -9223372036854775808 to 9223372036854775807

string_2         : squote ( squote_in_string | pchar_no_squote )* squote;
squote_in_string : squote squote; // two consecutive single quotes represent one within a string literal

datevalue : year DASH month DASH day;

datetimeoffsetvalue : year DASH month DASH day T hour COLON minute ( COLON second ( PERIOD fractionalseconds_1 )? )? ( Z | sign hour COLON minute );

duration_1      : D U R A T I O N squote durationvalue squote;
durationvalue : sign? P ( digit+ D )? ( T ( digit+ H )? ( digit+ M )? ( digit+ ( PERIOD digit+ )? S )? )?;
     // the above is an approximation of the rules for an xml dayTimeDuration.
     // see the lexical representation for dayTimeDuration in http://www.w3.org/TR/xmlschema11-2#dayTimeDuration for more information

timeofdayvalue : hour COLON minute ( COLON second ( PERIOD fractionalseconds_1 )? )?;

onetonine       : ONE | TWO | THREE | FOUR | FIVE | SIX | SEVEN | EIGHT | NINE;
zerotofiftynine : ( ZERO | ONE | TWO | THREE | FOUR | FIVE ) digit;
year  : ( DASH )? ( (ZERO digit digit digit) | (onetonine digit digit digit+) );
month : (ZERO onetonine)
      | (ONE ( ZERO | ONE | TWO ));
day   : (ZERO onetonine)
      | (( ONE | TWO ) digit)
      | (THREE ( ZERO | ONE ));
hour   : (( ZERO | ONE ) digit)
       | (TWO ( ZERO | ONE | TWO | THREE ));
minute : zerotofiftynine;
second : zerotofiftynine;
fractionalseconds_1 : digit (digit? | (digit digit) | (digit digit digit) | (digit digit digit digit) | (digit digit digit digit digit) | (digit digit digit digit digit digit) | (digit digit digit digit digit digit digit) | (digit digit digit digit digit digit digit digit) | (digit digit digit digit digit digit digit digit digit) | (digit digit digit digit digit digit digit digit digit digit) | (digit digit digit digit digit digit digit digit digit digit digit));

enum_1            : qualifiedenumtypename squote enumvalue squote;
enumvalue       : singleenumvalue ( comma singleenumvalue )*;
singleenumvalue : enumerationmember | enummembervalue;
enummembervalue : int64value;

geographycollection   : geographyprefix squote fullcollectionliteral squote;
fullcollectionliteral : sridliteral collectionliteral;
collectionliteral     : C O L L E C T I O N LEFT_PAREN geoliteral ( comma geoliteral )* close;
geoliteral            : collectionliteral
                      | linestringliteral
                      | multipointliteral
                      | multilinestringliteral
                      | multipolygonliteral
                      | pointliteral
                      | polygonliteral;

geographylinestring   : geographyprefix squote fulllinestringliteral squote;
fulllinestringliteral : sridliteral linestringliteral;
linestringliteral     : L I N E S T R I N G linestringdata;
linestringdata        : open positionliteral ( comma positionliteral )+ close;

geographymultilinestring   : geographyprefix squote fullmultilinestringliteral squote;
fullmultilinestringliteral : sridliteral multilinestringliteral;
multilinestringliteral     : M U L T I L I N E S T R I N G LEFT_PAREN ( linestringdata ( comma linestringdata )* )? close;

geographymultipoint   : geographyprefix squote fullmultipointliteral squote;
fullmultipointliteral : sridliteral multipointliteral;
multipointliteral     : M U L T I P O I N T LEFT_PAREN ( pointdata ( comma pointdata )* )? close;

geographymultipolygon   : geographyprefix squote fullmultipolygonliteral squote;
fullmultipolygonliteral : sridliteral multipolygonliteral;
multipolygonliteral     : M U L T I P O L Y G O N LEFT_PAREN ( polygondata ( comma polygondata )* )? close;

geographypoint   : geographyprefix squote fullpointliteral squote;
fullpointliteral : sridliteral pointliteral;
sridliteral      : S R I D eq digit (digit? | (digit digit) | (digit digit digit) | (digit digit digit digit)) semi;
pointliteral     :P O I N T pointdata;
pointdata        : open positionliteral close;
positionliteral  : doublevalue sp doublevalue;  // longitude, then latitude

geographypolygon   : geographyprefix squote fullpolygonliteral squote;
fullpolygonliteral : sridliteral polygonliteral;
polygonliteral     : P O L Y G O N polygondata;
polygondata        : open ringliteral ( comma ringliteral )* close;
ringliteral        : open positionliteral ( comma positionliteral )* close;
                   // Within each ringLiteral, the first and last positionLiteral elements MUST be an exact syntactic match to each other.
                   // Within the polygonData, the ringLiterals MUST specify their points in appropriate winding order.
                   // In order of traversal, points to the left side of the ring are interpreted as being in the polygon.

geometrycollection      : geometryprefix squote fullcollectionliteral      squote;
geometrylinestring      : geometryprefix squote fulllinestringliteral      squote;
geometrymultilinestring : geometryprefix squote fullmultilinestringliteral squote;
geometrymultipoint      : geometryprefix squote fullmultipointliteral      squote;
geometrymultipolygon    : geometryprefix squote fullmultipolygonliteral    squote;
geometrypoint           : geometryprefix squote fullpointliteral           squote;
geometrypolygon         : geometryprefix squote fullpolygonliteral         squote;

geographyprefix : G E O G R A P H Y;
geometryprefix  : G E O M E T R Y;


//------------------------------------------------------------------------------
// 8. Header values
//------------------------------------------------------------------------------

header : content_id
       | odata_entityid
       | odata_isolation
       | odata_maxversion
       | odata_version
       | prefer;

content_id : C O N T E N T DASH I D COLON ows unreserved+;

odata_entityid   : O D A T A DASH E N T I T Y I D   COLON ows iri_in_header;
odata_isolation  : O D A T A DASH I S O L A T I O N  COLON ows S N A P S H O T;
odata_maxversion : O D A T A DASH M A X V E R S I O N COLON ows digit+ PERIOD digit+;
odata_version    : O D A T A DASH V E R S I O N    COLON ows FOUR PERIOD ZERO;

prefer     : P R E F E R COLON ows preference ( comma preference )*;
preference : allowentityreferencespreference
           | callbackpreference
           | continueonerrorpreference
           | includeannotationspreference
           | maxpagesizepreference
           | respondasyncpreference
           | returnpreference
           | trackchangespreference
           | waitpreference;
           // and everything allowed by http://tools.ietf.org/html/draft-snell-http-prefer-18
           // / token [ EQ-h word ] *( OWS ";" [ OWS parameter ] )

allowentityreferencespreference : O D A T A PERIOD A L L O W DASH E N T I T Y R E F E R E N C E S;

callbackpreference : O D A T A PERIOD C A L L B A C K ows SEMICOLON ows U R L eq_h dquote uri dquote;

continueonerrorpreference : O D A T A PERIOD C O N T I N U E DASH O N DASH E R R O R;

includeannotationspreference : O D A T A PERIOD I N C L U D E DASH A N N O T A T I O N S eq_h dquote annotationslist dquote;
annotationslist      : annotationidentifier (comma annotationidentifier)*;
annotationidentifier : ( excludeoperator )?
                       ( star
                       | (namespace_1 PERIOD ( termname | star ))
                       );
excludeoperator      : DASH;

maxpagesizepreference : O D A T A PERIOD M A X P A G E S I Z E eq_h onetonine digit*;

respondasyncpreference : R E S P O N D DASH A S Y N C;

returnpreference : R E T U R N eq_h ( 'representation' | 'minimal' );

trackchangespreference : O D A T A PERIOD T R A C K DASH C H A N G E S;

waitpreference : W A I T eq_h digit+;

//parameter      = token [ EQ-h word ]
//word           = token / quoted-string
//token          = 1*tchar
//tchar          = "!" / "#" / "$" / "%" / "&" / "'" / "*"
//               / "+" / "-" / "." / "^" / "_" / "`" / "|" / "~"
//               / DIGIT / ALPHA
//quoted-string  = DQUOTE *( qdtext / quoted-pair ) DQUOTE
//qdtext         = %x21 / %x23-5B / %x5D-7E / obs-text / OWS
obs_text       : (U_0080 | U_0081 | U_0082 | U_0083 | U_0084 | U_0085 | U_0086 | U_0087 | U_0088 | U_0089 | U_008A | U_008B | U_008C | U_008D | U_008E | U_008F | U_0090 | U_0091 | U_0092 | U_0093 | U_0094 | U_0095 | U_0096 | U_0097 | U_0098 | U_0099 | U_009A | U_009B | U_009C | U_009D | U_009E | U_009F | U_00A0 | U_00A1 | U_00A2 | U_00A3 | U_00A4 | U_00A5 | U_00A6 | U_00A7 | U_00A8 | U_00A9 | U_00AA | U_00AB | U_00AC | U_00AD | U_00AE | U_00AF | U_00B0 | U_00B1 | U_00B2 | U_00B3 | U_00B4 | U_00B5 | U_00B6 | U_00B7 | U_00B8 | U_00B9 | U_00BA | U_00BB | U_00BC | U_00BD | U_00BE | U_00BF | U_00C0 | U_00C1 | U_00C2 | U_00C3 | U_00C4 | U_00C5 | U_00C6 | U_00C7 | U_00C8 | U_00C9 | U_00CA | U_00CB | U_00CC | U_00CD | U_00CE | U_00CF | U_00D0 | U_00D1 | U_00D2 | U_00D3 | U_00D4 | U_00D5 | U_00D6 | U_00D7 | U_00D8 | U_00D9 | U_00DA | U_00DB | U_00DC | U_00DD | U_00DE | U_00DF | U_00E0 | U_00E1 | U_00E2 | U_00E3 | U_00E4 | U_00E5 | U_00E6 | U_00E7 | U_00E8 | U_00E9 | U_00EA | U_00EB | U_00EC | U_00ED | U_00EE | U_00EF | U_00F0 | U_00F1 | U_00F2 | U_00F3 | U_00F4 | U_00F5 | U_00F6 | U_00F7 | U_00F8 | U_00F9 | U_00FA | U_00FB | U_00FC | U_00FD | U_00FE | U_00FF);
//quoted-pair    = "\" ( HTAB / SP / VCHAR / obs-text )

ows   : ( sp | htab )*;  // "optional" whitespace
bws_h : ( sp | htab )*;  // "bad" whitespace in header values
eq_h  : bws_h eq bws_h;


//------------------------------------------------------------------------------
// 9. Punctuation
//------------------------------------------------------------------------------

rws : ( sp | htab | (PERCENT TWO ZERO) | (PERCENT ZERO NINE) )+;  // "required" whitespace
bws :  ( sp | htab | (PERCENT TWO ZERO) | (PERCENT ZERO NINE) )*;  // "bad" whitespace

at     : AT | PERCENT FOUR ZERO;
colon  : COLON | PERCENT THREE A;
comma  : COMMA | PERCENT TWO C;
eq     : EQUALS;
sign   : PLUS | PERCENT TWO B | DASH;
semi   : SEMICOLON | PERCENT THREE B;
star   : ASTERISK | PERCENT TWO A;
squote : APOSTROPHE | PERCENT TWO SEVEN;

open  : LEFT_PAREN | PERCENT TWO EIGHT;
close : RIGHT_PAREN | PERCENT TWO NINE;


//------------------------------------------------------------------------------
// A. URI syntax [RFC3986]
//------------------------------------------------------------------------------

uri           : scheme COLON hier_part ( QUESTION query )? ( POUND fragment_1 )?;
hier_part     : ((SLASH SLASH) authority path_abempty)
              | path_absolute
              | path_rootless;
//              / path-empty
//URI-reference = URI / relative-ref
//absolute-URI  = scheme ":" hier-part [ "?" query ]
//relative-ref  = relative-part [ "?" query ] [ "#" fragment ]
//relative-part = "//" authority path-abempty
//              / path-absolute
//              / path-noscheme
//              / path-empty
scheme        : alpha ( alpha | digit | PLUS | DASH | PERIOD )*;
authority     : ( userinfo AT )? host ( COLON port )?;
userinfo      : ( unreserved | pct_encoded | sub_delims | COLON )*;
host          : ip_literal | ipv4address | reg_name;
port          : digit*;
ip_literal    : LEFT_BRACE ( ipv6address | ipvfuture  ) RIGHT_BRACE;
ipvfuture     : (V) hexdig+ PERIOD ( unreserved | sub_delims | COLON )+;
ipv6address   : (( h16 COLON ) (h16 COLON) (h16 COLON) (h16 COLON) (h16 COLON) (h16 COLON) ls32)
                 | ((COLON COLON) ( h16 COLON ) (h16 COLON) (h16 COLON) (h16 COLON) (h16 COLON) ls32)
                 | (( h16 )? (COLON COLON) ( h16 COLON ) (h16 COLON) (h16 COLON) (h16 COLON) ls32)
                 | ((  (( h16 COLON )?) h16 )? (COLON COLON) ( h16 COLON ) (h16 COLON) (h16 COLON) ls32)
                 | ((  (( h16 COLON )? | ((h16 COLON) (h16 COLON))) h16 )? (COLON COLON) ( h16 COLON ) (h16 COLON) ls32)
                 | ((  (( h16 COLON )? | ((h16 COLON) (h16 COLON)) | ((h16 COLON) (h16 COLON) (h16 COLON))) h16 )? (COLON COLON)    h16 COLON   ls32)
                 | ((  (( h16 COLON )? | ((h16 COLON) (h16 COLON)) | ((h16 COLON) (h16 COLON) (h16 COLON)) | ((h16 COLON) (h16 COLON) (h16 COLON) (h16 COLON))) h16 )? (COLON COLON)              ls32)
                 | ((  (( h16 COLON )? | ((h16 COLON) (h16 COLON)) | ((h16 COLON) (h16 COLON) (h16 COLON)) | ((h16 COLON) (h16 COLON) (h16 COLON) (h16 COLON)) | ((h16 COLON) (h16 COLON) (h16 COLON) (h16 COLON) (h16 COLON))) h16 )? (COLON COLON)              h16)
                 | ((  (( h16 COLON )? | ((h16 COLON) (h16 COLON)) | ((h16 COLON) (h16 COLON) (h16 COLON)) | ((h16 COLON) (h16 COLON) (h16 COLON) (h16 COLON)) | ((h16 COLON) (h16 COLON) (h16 COLON) (h16 COLON) (h16 COLON)) | ((h16 COLON) (h16 COLON) (h16 COLON) (h16 COLON) (h16 COLON) (h16 COLON))) h16 )? (COLON COLON));
h16           : hexdig (hexdig? | (hexdig hexdig) | (hexdig hexdig hexdig));
ls32          : ( h16 COLON h16 ) | ipv4address;
ipv4address   : dec_octet PERIOD dec_octet PERIOD dec_octet PERIOD dec_octet;
dec_octet     : (ONE digit digit)            // 100-199
              | (TWO (ZERO | ONE | TWO | THREE | FOUR) digit)     // 200-249
              | ((TWO FIVE) (ZERO | ONE | TWO | THREE | FOUR | FIVE))          // 250-255
              | ((ONE | TWO | THREE | FOUR | FIVE | SIX | SEVEN | EIGHT | NINE) digit)         // 10-99
              | digit;                 // 0-9
reg_name      : ( unreserved | pct_encoded | sub_delims )*;
//path          = path-abempty    ; begins with "/" or is empty
//              / path-absolute   ; begins with "/" but not "//"
//              / path-noscheme   ; begins with a non-colon segment
//              / path-rootless   ; begins with a segment
//              / path-empty      ; zero characters
path_abempty  : ( SLASH segment )*;
path_absolute : SLASH ( segment_nz ( SLASH segment )* )?;
//path-noscheme = segment-nz-nc *( "/" segment )
path_rootless : segment_nz ( SLASH segment )*;
//path-empty    = ""
segment       : pchar*;
segment_nz    : pchar+;
//segment-nz-nc = 1*( unreserved / pct-encoded / sub-delims / "@" ) ; non-zero-length segment without any colon ":"
pchar         : unreserved | pct_encoded | sub_delims | COLON | AT;
query         : ( pchar | SLASH | QUESTION )*;
fragment_1      : ( pchar | SLASH | QUESTION )*;
pct_encoded   : PERCENT hexdig hexdig;
unreserved    : alpha | digit | DASH | PERIOD | UNDERSCORE | TILDE;
//reserved      = gen-delims / sub-delims
//gen-delims    = ":" / "/" / "?" / "#" / "[" / "]" / "@"
//sub-delims    = "!" / "$" / "&" / "'" / "(" / ")" / "*" / "+" / "," / ";" / "="
sub_delims     : DOLLAR | AMPERSAND | APOSTROPHE | EQUALS | other_delims;
other_delims   : EXCLAMATION | LEFT_PAREN | RIGHT_PAREN | ASTERISK | PLUS | COMMA | SEMICOLON;

pchar_no_squote       : unreserved | pct_encoded_no_squote | other_delims | DOLLAR | AMPERSAND | EQUALS | COLON | AT;
pct_encoded_no_squote : (PERCENT ( ZERO | ONE |   THREE | FOUR | FIVE | SIX | EIGHT | NINE | a_to_f ) hexdig)
                      | (PERCENT TWO ( ZERO | ONE | TWO | THREE | FOUR | FIVE | SIX |   EIGHT | NINE | a_to_f ));

qchar_no_amp              : unreserved | pct_encoded | other_delims | COLON | AT | SLASH | QUESTION | DOLLAR | APOSTROPHE | EQUALS;
qchar_no_amp_eq           : unreserved | pct_encoded | other_delims | COLON | AT | SLASH | QUESTION | DOLLAR | APOSTROPHE;
qchar_no_amp_eq_at_dollar : unreserved | pct_encoded | other_delims | COLON |       SLASH | QUESTION |       APOSTROPHE;

qchar_unescaped       : unreserved | pct_encoded_unescaped | other_delims | COLON | AT | SLASH | QUESTION | DOLLAR | APOSTROPHE | EQUALS;
pct_encoded_unescaped : (PERCENT ( ZERO | ONE |   THREE | FOUR |   SIX | SEVEN | EIGHT | NINE | a_to_f ) hexdig)
                      | (PERCENT TWO ( ZERO | ONE |   THREE | FOUR | FIVE | SIX | SEVEN | EIGHT | NINE | a_to_f ))
                      | (PERCENT FIVE ( digit | (A) | (B) |   (D) | (E) | (F) ));

qchar_no_amp_dquote   : qchar_unescaped
                      | (escape ( escape | quotation_mark ));


//------------------------------------------------------------------------------
// B. IRI syntax [RFC3987]
//------------------------------------------------------------------------------
// Note: these are over-generous stubs, for the actual patterns refer to RFC3987
//------------------------------------------------------------------------------

iri_in_header : ( vchar | obs_text )+;
iri_in_query  : qchar_no_amp+;


//------------------------------------------------------------------------------
// C. ABNF core definitions [RFC5234]
//------------------------------------------------------------------------------

alpha  : F_ALPHA+;
digit  : F_DIGIT;
hexdig : digit | a_to_f;
a_to_f : (A) | (B) | (C) | (D) | (E) | (F);
dquote : QUOTE;
sp     : SPACE;
htab   : TAB;
//WSP    = SP / HTAB
//LWSP = *(WSP / CRLF WSP)
vchar : (EXCLAMATION | QUOTE | POUND | DOLLAR | PERCENT | AMPERSAND | APOSTROPHE | LEFT_PAREN | RIGHT_PAREN | ASTERISK | PLUS | COMMA | DASH | PERIOD | SLASH | ZERO | ONE | TWO | THREE | FOUR | FIVE | SIX | SEVEN | EIGHT | NINE | COLON | SEMICOLON | LESS_THAN | EQUALS | GREATER_THAN | QUESTION | AT | LEFT_BRACE | BACKSLASH | RIGHT_BRACE | CARAT | UNDERSCORE | ACCENT | A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z | LEFT_CURLY_BRACE | PIPE | RIGHT_CURLY_BRACE | TILDE);
//CHAR = %x01-7F
//LOCTET = %x00-FF
//CR     = %x0D
//LF     = %x0A
//CRLF   = CR LF
//BIT = "0" / "1"


//------------------------------------------------------------------------------
// End of odata-abnf-construction-rules
//------------------------------------------------------------------------------

//////////////////////////////////////////////////////////////////////////
// Lexer rules generated for each distinct character in original grammar
// per http://www.unicode.org/charts/PDF/U0000.pdf
//////////////////////////////////////////////////////////////////////////
URI_PROTOCOL: H T T P S?;
CROSSJOIN: DOLLAR C R O S S J O I N;
ENTITY: DOLLAR E N T I T Y;
BATCH: DOLLAR B A T C H;
LEVELS: DOLLAR L E V E L S;
METADATA: DOLLAR M E T A D A T A;
FORMAT: DOLLAR F O R M A T;
ATOM: A T O M;
JSON: J S O N;
XML: X M L;

TAB : '\u0009';
SPACE : ' ';
EXCLAMATION : '!';
QUOTE : '"';
POUND : '#';
DOLLAR : '$';
PERCENT : '%';
AMPERSAND : '&';
APOSTROPHE : '\'';
LEFT_PAREN : '(';
RIGHT_PAREN : ')';
ASTERISK : '*';
PLUS : '+';
COMMA : ',';
DASH : '-';
PERIOD : '.';
SLASH : '/';
ZERO : '0';
ONE : '1';
TWO : '2';
THREE : '3';
FOUR : '4';
FIVE : '5';
SIX : '6';
SEVEN : '7';
EIGHT : '8';
NINE : '9';
COLON : ':';
SEMICOLON : ';';
LESS_THAN : '<';
EQUALS : '=';
GREATER_THAN : '>';
QUESTION : '?';
AT : '@';

LEFT_BRACE : '[';
BACKSLASH : '\\';
RIGHT_BRACE : ']';
CARAT : '^';
UNDERSCORE : '_';
ACCENT : '`';


LEFT_CURLY_BRACE : '{';
PIPE : '|';
RIGHT_CURLY_BRACE : '}';
TILDE : '~';
U_0080 : '\u0080';
U_0081 : '\u0081';
U_0082 : '\u0082';
U_0083 : '\u0083';
U_0084 : '\u0084';
U_0085 : '\u0085';
U_0086 : '\u0086';
U_0087 : '\u0087';
U_0088 : '\u0088';
U_0089 : '\u0089';
U_008A : '\u008A';
U_008B : '\u008B';
U_008C : '\u008C';
U_008D : '\u008D';
U_008E : '\u008E';
U_008F : '\u008F';
U_0090 : '\u0090';
U_0091 : '\u0091';
U_0092 : '\u0092';
U_0093 : '\u0093';
U_0094 : '\u0094';
U_0095 : '\u0095';
U_0096 : '\u0096';
U_0097 : '\u0097';
U_0098 : '\u0098';
U_0099 : '\u0099';
U_009A : '\u009A';
U_009B : '\u009B';
U_009C : '\u009C';
U_009D : '\u009D';
U_009E : '\u009E';
U_009F : '\u009F';
U_00A0 : '\u00A0';
U_00A1 : '\u00A1';
U_00A2 : '\u00A2';
U_00A3 : '\u00A3';
U_00A4 : '\u00A4';
U_00A5 : '\u00A5';
U_00A6 : '\u00A6';
U_00A7 : '\u00A7';
U_00A8 : '\u00A8';
U_00A9 : '\u00A9';
U_00AA : '\u00AA';
U_00AB : '\u00AB';
U_00AC : '\u00AC';
U_00AD : '\u00AD';
U_00AE : '\u00AE';
U_00AF : '\u00AF';
U_00B0 : '\u00B0';
U_00B1 : '\u00B1';
U_00B2 : '\u00B2';
U_00B3 : '\u00B3';
U_00B4 : '\u00B4';
U_00B5 : '\u00B5';
U_00B6 : '\u00B6';
U_00B7 : '\u00B7';
U_00B8 : '\u00B8';
U_00B9 : '\u00B9';
U_00BA : '\u00BA';
U_00BB : '\u00BB';
U_00BC : '\u00BC';
U_00BD : '\u00BD';
U_00BE : '\u00BE';
U_00BF : '\u00BF';
U_00C0 : '\u00C0';
U_00C1 : '\u00C1';
U_00C2 : '\u00C2';
U_00C3 : '\u00C3';
U_00C4 : '\u00C4';
U_00C5 : '\u00C5';
U_00C6 : '\u00C6';
U_00C7 : '\u00C7';
U_00C8 : '\u00C8';
U_00C9 : '\u00C9';
U_00CA : '\u00CA';
U_00CB : '\u00CB';
U_00CC : '\u00CC';
U_00CD : '\u00CD';
U_00CE : '\u00CE';
U_00CF : '\u00CF';
U_00D0 : '\u00D0';
U_00D1 : '\u00D1';
U_00D2 : '\u00D2';
U_00D3 : '\u00D3';
U_00D4 : '\u00D4';
U_00D5 : '\u00D5';
U_00D6 : '\u00D6';
U_00D7 : '\u00D7';
U_00D8 : '\u00D8';
U_00D9 : '\u00D9';
U_00DA : '\u00DA';
U_00DB : '\u00DB';
U_00DC : '\u00DC';
U_00DD : '\u00DD';
U_00DE : '\u00DE';
U_00DF : '\u00DF';
U_00E0 : '\u00E0';
U_00E1 : '\u00E1';
U_00E2 : '\u00E2';
U_00E3 : '\u00E3';
U_00E4 : '\u00E4';
U_00E5 : '\u00E5';
U_00E6 : '\u00E6';
U_00E7 : '\u00E7';
U_00E8 : '\u00E8';
U_00E9 : '\u00E9';
U_00EA : '\u00EA';
U_00EB : '\u00EB';
U_00EC : '\u00EC';
U_00ED : '\u00ED';
U_00EE : '\u00EE';
U_00EF : '\u00EF';
U_00F0 : '\u00F0';
U_00F1 : '\u00F1';
U_00F2 : '\u00F2';
U_00F3 : '\u00F3';
U_00F4 : '\u00F4';
U_00F5 : '\u00F5';
U_00F6 : '\u00F6';
U_00F7 : '\u00F7';
U_00F8 : '\u00F8';
U_00F9 : '\u00F9';
U_00FA : '\u00FA';
U_00FB : '\u00FB';
U_00FC : '\u00FC';
U_00FD : '\u00FD';
U_00FE : '\u00FE';
U_00FF : '\u00FF';

fragment F_ALPHA   : [a-zA-Z_] ;
fragment F_DIGIT   : [0-9] ;
fragment F_NON_ZERO_DIGIT  : [1-9] ;
fragment A         : [aA];
fragment B         : [bB];
fragment C         : [cC];
fragment D         : [dD];
fragment E         : [eE];
fragment F         : [fF];
fragment G         : [gG];
fragment H         : [hH];
fragment I         : [iI];
fragment J         : [jJ];
fragment K         : [kK];
fragment L         : [lL];
fragment M         : [mM];
fragment N         : [nN];
fragment O         : [oO];
fragment P         : [pP];
fragment Q         : [qQ];
fragment R         : [rR];
fragment S         : [sS];
fragment T         : [tT];
fragment U         : [uU];
fragment V         : [vV];
fragment W         : [wW];
fragment X         : [xX];
fragment Y         : [yY];
fragment Z         : [zZ];
