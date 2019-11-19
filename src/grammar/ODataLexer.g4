/*
 * This is the lexer grammar of OData (please see ODataParser.g4
 * for more details).
 * The used dialect/metalanguage is documented at http://antlr.org/
 * This will all change in the near future, so please do not build 
 * a house on it ;-)
 * The plan is to collect here the character base and signalling 
 * tokens that somehow form the words of the OData vocabulary.
 * These notes will be replaced when the code will be released.
 *
 * Contact: Stefan Drees <stefan@drees.name> 
 */
lexer grammar ODataLexer;

HexLiteral : '0' ('x'|'X') HexDigit+ IntegerTypeSuffix? ;

DecimalLiteral : ('0' | '1'..'9' '0'..'9'*) IntegerTypeSuffix? ;

OctalLiteral : '0' ('0'..'7')+ IntegerTypeSuffix? ;

fragment
HexDigit : ('0'..'9'|'a'..'f'|'A'..'F') ;

fragment
IntegerTypeSuffix : ('l'|'L') ;

FloatingPointLiteral
    :   ('0'..'9')+ '.' ('0'..'9')* Exponent? FloatTypeSuffix?
    |   '.' ('0'..'9')+ Exponent? FloatTypeSuffix?
    |   ('0'..'9')+ Exponent FloatTypeSuffix?
    |   ('0'..'9')+ FloatTypeSuffix
    ;

fragment
Exponent : ('e'|'E') ('+'|'-')? ('0'..'9')+ ;

fragment
FloatTypeSuffix : ('f'|'F'|'d'|'D') ;

CharacterLiteral
    :   '\'' ( EscapeSequence | ~('\''|'\\') ) '\''
    ;

StringLiteral
    :  '"' ( EscapeSequence | ~('\\'|'"') )* '"'
    ;

fragment
EscapeSequence
    :   '\\' ('b'|'t'|'n'|'f'|'r'|'\"'|'\''|'\\')
    |   UnicodeEscape
    |   OctalEscape
    ;

fragment
OctalEscape
    :   '\\' ('0'..'3') ('0'..'7') ('0'..'7')
    |   '\\' ('0'..'7') ('0'..'7')
    |   '\\' ('0'..'7')
    ;

fragment
UnicodeEscape
    :   '\\' 'u' HexDigit HexDigit HexDigit HexDigit
    ;
    

WS  :  (' '|'\r'|'\t'|'\u000C'|'\n') -> skip
    ;

SQ : ['];              
DQ : '\u0022';
SP     : '\u0020';
HTAB   : '\u0009';
CR     : '\u000D';
LF     : '\u000A';
SEMI   : [;];              
COMMA  : [,];
EQ     : [=];
DOLLAR : '$';
PLUS : [+];
MINUS : [-];
SIGN   : (PLUS | MINUS);
AMPERSAND : [&];
OP : '(';
CP : ')';
OB : '[';
CB : ']';
OC : '{';
CC : '}';
TILDE : '~';
STAR   : [*];
ESCAPE : [\u005C]; // reverse solidus U+005C

SLASH : '/';
DOT : '.';
COLON : ':';
PERCENT : '%';
AT_SIGN : '@';
EXCLAMATION : '!';
QUESTION : '?';
UNDERSCORE : '_';

A : [Aa] ;
B : [Bb] ;
C : [Cc] ;
D : [Dd] ;
E : [Ee] ;
F : [Ff] ;
G : [Gg] ;
H : [Hh] ;
I : [Ii] ;
L : [Ll] ;
M : [Mm] ;
N : [Nn] ;
O : [Oo] ;
P : [Pp] ;
R : [Rr] ;
S : [Ss] ;
T : [Tt] ;
U : [Uu] ;
Y : [Yy] ;
    
ZERO : '0' ;
ONE : '1' ;
TWO: '2' ;
THREE: '3' ;

ColCol : COLON COLON ;
ColSlaSla : COLON SLASH SLASH ;

HttpOrHttpsAnyCase : H T T P ( S )? ;

Binary_LAC : B I N A R Y ;
True_LAC : T R U E ;
False_LAC : F A L S E ;

DateTimeOffset_LAC: Date_LAC Time_LAC O F F S E T ;
Duration_LAC : D U R A T I O N ;
TimeOfDay_LAC : Time_LAC O F D A Y ;
Date_LAC : D A T E ;
Time_LAC : T I M E ;

MultiLineStringOP_LAC : Multi_LAC LineString_LAC OP ;
LineString_LAC : L I N E S T R I N G ;
MultiPointOP_LAC : Multi_LAC  P O I N T OP ;
MultiPolygonOP_LAC : Multi_LAC Polygon_LAC OP ;
Point_LAC : P O I N T ;
Geography_LAC: G E O G R A P H Y ;
Geometry_LAC : G E O M E T R Y ;
Polygon_LAC : P O L Y G O N ;
Multi_LAC : M U L T I ;
CollectionOP_LAC : C O L L E C T I O N  OP ;

GUID_LAC : G U I D ;
SRID_LAC : S R I D ;

I64_POSTFIX : L;

ODataSignal_METADATA : DOLLAR 'metadata' ;
ODataSignal_BATCH : DOLLAR 'batch' ;
ODataSignal_SKIPTOKEN : DOLLAR 'skiptoken' ;
ODataSignal_COUNT : SLASH DOLLAR 'count' ;
ODataSignal_LINKS : SLASH DOLLAR 'links' ;
ODataSignal_VALUE : SLASH DOLLAR 'value' ;
ODataSignal_AGGREGATE : DOLLAR 'aggregate' ;
ODataSignal_GROUPBY : DOLLAR 'groupby' ;
ODataSignal_EXPAND : DOLLAR 'expand' ;

ODataSignal_LEVELS : DOLLAR 'levels' ;
ODataSignal_FILTER : DOLLAR 'filter' ;
ODataSignal_ORDERBY : DOLLAR 'orderby' ;

ODataSignal_SKIP : DOLLAR 'skip' ;
ODataSignal_TOP  : DOLLAR 'top' ;
ODataSignal_FORMAT : DOLLAR 'format' ;

                          
ODataSignal_INLINECOUNT : DOLLAR 'inlinecount' ;


ODataSignal_SELECT : DOLLAR 'select' ;

Atom_LLC : 'atom' ;
Json_LLC : 'json' ;
Xml_LLC : 'xml' ;
All_LLC : 'all' ;
AllPages_LLC : All_LLC 'pages' ;
None_LLC : 'none' ;
Asc_LLC : 'asc' ;
Desc_LLC : 'desc' ;
Sum_LLC : 'sum' ;
Min_LLC : 'min' ;
Max_LLC : 'max' ;
Average_LLC : 'average' ;
Any_LLC: 'any' ;
As_LLC : 'as' ;

SubStringOf_LLC : 'substringof' ;
StartsWith_LLC  : 'startswith' ;
EndsWith_LLC    : 'endswith' ;
Length_LLC      : 'length' ;
IndexOf_LLC : 'indexof' ;
Substring_LLC : 'substring' ;
ToLower_LLC : 'tolower' ;
ToUpper_LLC : 'toupper' ;
Trim_LLC : 'trim' ;
Concat_LLC : 'concat' ;
Year_LLC : 'year' ;
Month_LLC : 'month' ;
Day_LLC : 'day' ;
Days_LLC : 'days' ;
Hour_LLC : 'hour' ;
Hours_LLC : Hour_LLC 's' ;
Minute_LLC : 'minute' ;
Minutes_LLC : Minute_LLC 's' ;
Second_LLC : 'second' ;
Seconds_LLC : Second_LLC 's' ;
Date_LLC : 'date' ;
Time_LLC : 'time' ;
Round_LLC : 'round' ;
Floor_LLC : 'floor' ;
Ceiling_LLC : 'ceiling' ;

GetTotalOffsetMinutes_LLC : 'gettotaloffsetminutes' ; 

GeoDotDistance_LLC : 'geo.distance' ;
GeoLength_LLC : 'geo.length' ;
GeoDotIntersects_LLC  : 'geo.intersects' ;

MinDateTime_LLC : 'mindatetime' ;
MaxDateTime_LLC : 'maxdatetime' ;
Now_LLC : 'now' ;

// --
And_LLC : 'and' ;
Or_LLC  : 'or'  ;

Eq_LLC : 'eq' ;     
Ne_LLC : 'ne' ;
Lt_LLC : 'lt' ;
Le_LLC : 'le' ;
Gt_LLC : 'gt' ;
Ge_LLC : 'ge' ;

Has_LLC : 'has' ;

Add_LLC : 'add' ;
Sub_LLC : 'sub' ;
Mul_LLC : 'mul' ;
Div_LLC : 'div' ;
Mod_LLC : 'mod' ;

Not_LLC : 'not' ;

IsOf_LLC : 'isof' ;
Cast_LLC : 'cast' ;

// --

All_LUC : 'ALL' ;

D_LUC : 'D';
H_LUC : 'H';
M_LUC : 'M';
P_LUC : 'P';
S_LUC : 'S';
T_LUC : 'T';
X_LUC : 'X';
Z_LUC : 'Z';

B_LLC :  'b';                
F_LLC :  'f';
N_LLC :  'n';
R_LLC :  'r';
T_LLC :  't';
V_LLC :  'v';
U_LLC :  'u';

NotANumber_LXC : 'NaN' ;
Infinity_LUC : 'INF' ;
Null_LLC : 'null' ;
True_LLC : 'true' ;
False_LLC : 'false' ;
EmptyString : '' ; // danger will robinson ! FIXME

// refactor below: 

ONE_TO_TWO  : [1-2];
ONE_TO_THREE  : ONE_TO_TWO | [3];
ONE_TO_FOUR  : ONE_TO_THREE | [4]; 
ONE_TO_NINE  : ONE_TO_FOUR | [5-9]; 
ZERO_TO_ONE : [0-1];
ZERO_TO_TWO : ZERO_TO_ONE | [2];
ZERO_TO_THREE : ZERO_TO_TWO | [3];
ZERO_TO_FOUR : ZERO_TO_THREE | [4];
ZERO_TO_FIVE : ZERO_TO_FOUR | [5];
ZERO_TO_FIFTY_NINE : ZERO_TO_FIVE Digit;

ONEHUNDRED_TO_ONEHUNDREDNINETYNINE : '1' Digit Digit;            // 100-199
TWOHUNDRED_TO_TWOHUNDREDFOURTYNINE : '2' ZERO_TO_FOUR Digit;     // 200-249
TWOHUNDREDFIFTY_TO_TWOHUNDREDFIFTYFIVE : '25' ZERO_TO_FIVE;      // 250-2550
TEN_TO_NINETYNINE : ONE_TO_NINE Digit;                           // 10-99

DIGIT3: Digit Digit Digit;
DIGIT5 : DIGIT3 Digit Digit;
DIGIT10 : DIGIT5 DIGIT5;
DIGIT19 : DIGIT10 DIGIT5 DIGIT3 Digit;

HEXDIG1 : HexDigit ;
HEXDIG2 : HEXDIG1 HEXDIG1 ;
HEXDIG4 : HEXDIG2 HEXDIG2 ;
HEXDIG8 : HEXDIG4 HEXDIG4 ;
HEXDIG12 : HEXDIG8 HEXDIG4 ;

// Below is my personal bug ;-)
H16 : HEXDIG1 
    | HEXDIG2
    | HEXDIG2 HEXDIG1
    | HEXDIG4 
    ; //1*4HEXDIG from ABNF
H16Col        : H16 COLON ;

// Punctuation resolved:

Unencoded            : DQ | ESCAPE | UnencodedNoSpecial;
UnencodedNoSpecial : SP | COLON | OC | CC | OB | CB ;
// COMMENT_ANTLR: Heavy hacks, since ABNF grammars' BWS/OWS may match the empty string
XWS  : SP | HTAB ;    // "required" whitespace 
VWS : CR | LF | XWS ; // "bad" vertical whitespace 
// COMMENT_ANTLR4: ( XWS )* is OWS when considered bad (from context) identical as lexer rules so:
// COMMENT_ANTLR4_CONT: ... OWS (otherwise not referenced has been renamed to BWS

Alpha  : [a-zA-Z];
Digit  : [0-9];

ODATA_ID_CHAR : Alpha | Digit | UNDERSCORE;
ODATA_ID_CHAR2 : ODATA_ID_CHAR ODATA_ID_CHAR;
ODATA_ID_CHAR4 : ODATA_ID_CHAR2 ODATA_ID_CHAR2;
ODATA_ID_CHAR8 : ODATA_ID_CHAR4 ODATA_ID_CHAR4;
ODATA_ID_CHAR16 : ODATA_ID_CHAR8 ODATA_ID_CHAR8;
ODATA_ID_CHAR32 : ODATA_ID_CHAR16 ODATA_ID_CHAR16;
ODATA_ID_CHAR64 : ODATA_ID_CHAR32 ODATA_ID_CHAR32;
ODATA_ID_CHAR128 : ODATA_ID_CHAR64 ODATA_ID_CHAR64;
ODATA_ID_CHAR256 : ODATA_ID_CHAR128 ODATA_ID_CHAR128;
ODATA_ID_CHAR478 : ODATA_ID_CHAR256 ODATA_ID_CHAR128 ODATA_ID_CHAR64 ODATA_ID_CHAR32 ODATA_ID_CHAR16 ODATA_ID_CHAR8 ODATA_ID_CHAR4 ODATA_ID_CHAR2;
