
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { OData4LiteListener } from "./OData4LiteListener.js";
import { OData4LiteVisitor } from "./OData4LiteVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


// @ts-nocheck
import { Schema } from './lang/edm/Schema';
import { CharStream, TokenStream } from "antlr4ng";


export class OData4LiteParser extends antlr.Parser {
    public static readonly SELECT_OPT = 1;
    public static readonly APPLY_OPT = 2;
    public static readonly EXPAND_OPT = 3;
    public static readonly FILTER_OPT = 4;
    public static readonly TOP_OPT = 5;
    public static readonly SKIP_COUNT = 6;
    public static readonly COUNT_OPT = 7;
    public static readonly ORDERBY_OPT = 8;
    public static readonly REF_OPT = 9;
    public static readonly VALUE_OPT = 10;
    public static readonly IT_OPT = 11;
    public static readonly AGGREGATE = 12;
    public static readonly TOPCOUNT = 13;
    public static readonly TOPSUM = 14;
    public static readonly TOPPERCENT = 15;
    public static readonly BOTTOMCOUNT = 16;
    public static readonly BOTTOMSUM = 17;
    public static readonly BOTTOMPERCENT = 18;
    public static readonly IDENTITY = 19;
    public static readonly CONCAT = 20;
    public static readonly GROUPBY = 21;
    public static readonly COMPUTE = 22;
    public static readonly FILTER = 23;
    public static readonly EXPAND = 24;
    public static readonly ALL = 25;
    public static readonly ANY = 26;
    public static readonly ASC = 27;
    public static readonly DESC = 28;
    public static readonly SUM_AGGREGATION = 29;
    public static readonly MIN_AGGREGATION = 30;
    public static readonly MAX_AGGREGATION = 31;
    public static readonly AVERAGE_AGGREGATION = 32;
    public static readonly COUNTDISTINCT_AGGREGATION = 33;
    public static readonly OP_EQ = 34;
    public static readonly OP_NE = 35;
    public static readonly OP_GT = 36;
    public static readonly OP_GE = 37;
    public static readonly OP_LT = 38;
    public static readonly OP_LE = 39;
    public static readonly OP_HAS = 40;
    public static readonly OP_AS = 41;
    public static readonly OP_WITH = 42;
    public static readonly OP_FROM = 43;
    public static readonly OP_IN = 44;
    public static readonly OP_AND = 45;
    public static readonly OP_OR = 46;
    public static readonly OP_NOT = 47;
    public static readonly OP_ADD = 48;
    public static readonly OP_SUB = 49;
    public static readonly OP_DIV = 50;
    public static readonly OP_MUL = 51;
    public static readonly OP_MOD = 52;
    public static readonly K_CONTAINS = 53;
    public static readonly K_ENDSWITH = 54;
    public static readonly K_STARTSWITH = 55;
    public static readonly K_LENGTH = 56;
    public static readonly K_INDEXOF = 57;
    public static readonly K_SUBSTRING = 58;
    public static readonly K_TOLOWER = 59;
    public static readonly K_TOUPPER = 60;
    public static readonly K_TRIM = 61;
    public static readonly K_YEAR = 62;
    public static readonly K_MONTH = 63;
    public static readonly K_DAY = 64;
    public static readonly K_HOUR = 65;
    public static readonly K_MINUTE = 66;
    public static readonly K_SECOND = 67;
    public static readonly K_FRACTIONALSECONDS = 68;
    public static readonly K_DATE = 69;
    public static readonly K_TIME = 70;
    public static readonly K_TOTALOFFSETMINUTES = 71;
    public static readonly K_NOW = 72;
    public static readonly K_MINDATETIME = 73;
    public static readonly K_MAXDATETIME = 74;
    public static readonly K_ROUND = 75;
    public static readonly K_FLOOR = 76;
    public static readonly K_CEILING = 77;
    public static readonly K_CAST = 78;
    public static readonly K_ISOF = 79;
    public static readonly K_GEODISTANCE = 80;
    public static readonly K_GEOLENGTH = 81;
    public static readonly K_GEOINTERSECTS = 82;
    public static readonly AT_SIGN = 83;
    public static readonly DOT = 84;
    public static readonly DOLLAR = 85;
    public static readonly AMPERSAND = 86;
    public static readonly SEMICOLON = 87;
    public static readonly COLON = 88;
    public static readonly MINUS = 89;
    public static readonly FWD_SLASH = 90;
    public static readonly QUESTION = 91;
    public static readonly SQUOTE = 92;
    public static readonly DQUOTE = 93;
    public static readonly EQ = 94;
    public static readonly COMMA = 95;
    public static readonly RPAREN = 96;
    public static readonly LPAREN = 97;
    public static readonly RBRACKET = 98;
    public static readonly LBRACKET = 99;
    public static readonly NULL = 100;
    public static readonly LIT_DATETIME = 101;
    public static readonly LIT_DATE = 102;
    public static readonly LIT_TIME_OF_DAY = 103;
    public static readonly LIT_DAY_TIME_DURATION = 104;
    public static readonly LIT_BOOLEAN = 105;
    public static readonly LIT_STRING = 106;
    public static readonly LIT_INTEGER = 107;
    public static readonly LIT_DOUBLE = 108;
    public static readonly IDENTIFIER = 109;
    public static readonly UNEXPECTED = 110;
    public static readonly RULE_odataRelativeURI = 0;
    public static readonly RULE_resourcePath = 1;
    public static readonly RULE_functionImportCall = 2;
    public static readonly RULE_functionParameters = 3;
    public static readonly RULE_functionParameter = 4;
    public static readonly RULE_functionParameterName = 5;
    public static readonly RULE_collectionNavigation = 6;
    public static readonly RULE_singleNavigation = 7;
    public static readonly RULE_propertyPath = 8;
    public static readonly RULE_collectionPath = 9;
    public static readonly RULE_singlePath = 10;
    public static readonly RULE_property = 11;
    public static readonly RULE_qualifiedName = 12;
    public static readonly RULE_keyPredicate = 13;
    public static readonly RULE_simpleKey = 14;
    public static readonly RULE_compoundKey = 15;
    public static readonly RULE_queryOptions = 16;
    public static readonly RULE_queryOption = 17;
    public static readonly RULE_systemQueryOption = 18;
    public static readonly RULE_dynamicPropertyAssignment = 19;
    public static readonly RULE_aliasAndValue = 20;
    public static readonly RULE_parameterAlias = 21;
    public static readonly RULE_parameterValue = 22;
    public static readonly RULE_filter = 23;
    public static readonly RULE_apply = 24;
    public static readonly RULE_applyExpression = 25;
    public static readonly RULE_applyTrafo = 26;
    public static readonly RULE_computeTrafo = 27;
    public static readonly RULE_computeExpression = 28;
    public static readonly RULE_concatTrafo = 29;
    public static readonly RULE_groupbyTrafo = 30;
    public static readonly RULE_groupByList = 31;
    public static readonly RULE_groupbyElement = 32;
    public static readonly RULE_groupingProperty = 33;
    public static readonly RULE_pathPrefix = 34;
    public static readonly RULE_filterTrafo = 35;
    public static readonly RULE_aggregateTrafo = 36;
    public static readonly RULE_aggregationParam = 37;
    public static readonly RULE_aggregationExpr = 38;
    public static readonly RULE_aggregateWith = 39;
    public static readonly RULE_aggregateMethod = 40;
    public static readonly RULE_aggregatedProperty = 41;
    public static readonly RULE_count = 42;
    public static readonly RULE_orderby = 43;
    public static readonly RULE_skip = 44;
    public static readonly RULE_top = 45;
    public static readonly RULE_expand = 46;
    public static readonly RULE_select = 47;
    public static readonly RULE_orderbyItem = 48;
    public static readonly RULE_expandItemList = 49;
    public static readonly RULE_expandItem = 50;
    public static readonly RULE_expandPath = 51;
    public static readonly RULE_expandQueryOptions = 52;
    public static readonly RULE_expandQueryOption = 53;
    public static readonly RULE_expression = 54;
    public static readonly RULE_expressionList = 55;
    public static readonly RULE_functionName = 56;
    public static readonly RULE_firstMemberExpr = 57;
    public static readonly RULE_lambdaPredicatePrefixExpr = 58;
    public static readonly RULE_memberExpr = 59;
    public static readonly RULE_propertyPathExpr = 60;
    public static readonly RULE_collectionNavigationExpr = 61;
    public static readonly RULE_singleNavigationExpr = 62;
    public static readonly RULE_collectionPathExpr = 63;
    public static readonly RULE_anyExpr = 64;
    public static readonly RULE_allExpr = 65;
    public static readonly RULE_lambdaParameterIdentifier = 66;
    public static readonly RULE_primitiveLiteralCollection = 67;
    public static readonly RULE_primitiveLiteral = 68;
    public static readonly RULE_enum = 69;
    public static readonly RULE_qualifiedEnumTypeName = 70;
    public static readonly RULE_enumValues = 71;
    public static readonly RULE_enumValue = 72;
    public static readonly RULE_namespace = 73;

    public static readonly literalNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, "'@'", "'.'", "'$'", "'&'", 
        "';'", "':'", "'-'", "'/'", "'?'", "'''", "'\"'", "'='", "','", 
        "')'", "'('", "']'", "'['"
    ];

    public static readonly symbolicNames = [
        null, "SELECT_OPT", "APPLY_OPT", "EXPAND_OPT", "FILTER_OPT", "TOP_OPT", 
        "SKIP_COUNT", "COUNT_OPT", "ORDERBY_OPT", "REF_OPT", "VALUE_OPT", 
        "IT_OPT", "AGGREGATE", "TOPCOUNT", "TOPSUM", "TOPPERCENT", "BOTTOMCOUNT", 
        "BOTTOMSUM", "BOTTOMPERCENT", "IDENTITY", "CONCAT", "GROUPBY", "COMPUTE", 
        "FILTER", "EXPAND", "ALL", "ANY", "ASC", "DESC", "SUM_AGGREGATION", 
        "MIN_AGGREGATION", "MAX_AGGREGATION", "AVERAGE_AGGREGATION", "COUNTDISTINCT_AGGREGATION", 
        "OP_EQ", "OP_NE", "OP_GT", "OP_GE", "OP_LT", "OP_LE", "OP_HAS", 
        "OP_AS", "OP_WITH", "OP_FROM", "OP_IN", "OP_AND", "OP_OR", "OP_NOT", 
        "OP_ADD", "OP_SUB", "OP_DIV", "OP_MUL", "OP_MOD", "K_CONTAINS", 
        "K_ENDSWITH", "K_STARTSWITH", "K_LENGTH", "K_INDEXOF", "K_SUBSTRING", 
        "K_TOLOWER", "K_TOUPPER", "K_TRIM", "K_YEAR", "K_MONTH", "K_DAY", 
        "K_HOUR", "K_MINUTE", "K_SECOND", "K_FRACTIONALSECONDS", "K_DATE", 
        "K_TIME", "K_TOTALOFFSETMINUTES", "K_NOW", "K_MINDATETIME", "K_MAXDATETIME", 
        "K_ROUND", "K_FLOOR", "K_CEILING", "K_CAST", "K_ISOF", "K_GEODISTANCE", 
        "K_GEOLENGTH", "K_GEOINTERSECTS", "AT_SIGN", "DOT", "DOLLAR", "AMPERSAND", 
        "SEMICOLON", "COLON", "MINUS", "FWD_SLASH", "QUESTION", "SQUOTE", 
        "DQUOTE", "EQ", "COMMA", "RPAREN", "LPAREN", "RBRACKET", "LBRACKET", 
        "NULL", "LIT_DATETIME", "LIT_DATE", "LIT_TIME_OF_DAY", "LIT_DAY_TIME_DURATION", 
        "LIT_BOOLEAN", "LIT_STRING", "LIT_INTEGER", "LIT_DOUBLE", "IDENTIFIER", 
        "UNEXPECTED"
    ];
    public static readonly ruleNames = [
        "odataRelativeURI", "resourcePath", "functionImportCall", "functionParameters", 
        "functionParameter", "functionParameterName", "collectionNavigation", 
        "singleNavigation", "propertyPath", "collectionPath", "singlePath", 
        "property", "qualifiedName", "keyPredicate", "simpleKey", "compoundKey", 
        "queryOptions", "queryOption", "systemQueryOption", "dynamicPropertyAssignment", 
        "aliasAndValue", "parameterAlias", "parameterValue", "filter", "apply", 
        "applyExpression", "applyTrafo", "computeTrafo", "computeExpression", 
        "concatTrafo", "groupbyTrafo", "groupByList", "groupbyElement", 
        "groupingProperty", "pathPrefix", "filterTrafo", "aggregateTrafo", 
        "aggregationParam", "aggregationExpr", "aggregateWith", "aggregateMethod", 
        "aggregatedProperty", "count", "orderby", "skip", "top", "expand", 
        "select", "orderbyItem", "expandItemList", "expandItem", "expandPath", 
        "expandQueryOptions", "expandQueryOption", "expression", "expressionList", 
        "functionName", "firstMemberExpr", "lambdaPredicatePrefixExpr", 
        "memberExpr", "propertyPathExpr", "collectionNavigationExpr", "singleNavigationExpr", 
        "collectionPathExpr", "anyExpr", "allExpr", "lambdaParameterIdentifier", 
        "primitiveLiteralCollection", "primitiveLiteral", "enum", "qualifiedEnumTypeName", 
        "enumValues", "enumValue", "namespace",
    ];

    public get grammarFileName(): string { return "OData4Lite.g4"; }
    public get literalNames(): (string | null)[] { return OData4LiteParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return OData4LiteParser.symbolicNames; }
    public get ruleNames(): string[] { return OData4LiteParser.ruleNames; }
    public get serializedATN(): number[] { return OData4LiteParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }


    private odataSchema?: Schema;

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

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, OData4LiteParser._ATN, OData4LiteParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public odataRelativeURI(): OdataRelativeURIContext {
        let localContext = new OdataRelativeURIContext(this.context, this.state);
        this.enterRule(localContext, 0, OData4LiteParser.RULE_odataRelativeURI);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 148;
            this.resourcePath();
            this.state = 151;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 91) {
                {
                this.state = 149;
                this.match(OData4LiteParser.QUESTION);
                this.state = 150;
                this.queryOptions();
                }
            }

            this.state = 153;
            this.match(OData4LiteParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public resourcePath(): ResourcePathContext {
        let localContext = new ResourcePathContext(this.context, this.state);
        this.enterRule(localContext, 2, OData4LiteParser.RULE_resourcePath);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 155;
            localContext._id = this.match(OData4LiteParser.IDENTIFIER);
            this.state = 159;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
            case 1:
                {
                this.state = 156;
                this.functionImportCall((localContext._id?.text ?? ''));
                }
                break;
            case 2:
                {
                this.state = 157;
                this.singleNavigation();
                }
                break;
            case 3:
                {
                this.state = 158;
                this.collectionNavigation();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionImportCall(identifier: string): FunctionImportCallContext {
        let localContext = new FunctionImportCallContext(this.context, this.state, identifier);
        this.enterRule(localContext, 4, OData4LiteParser.RULE_functionImportCall);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 161;
            if (!(this.isUnboundFunctionName(localContext?.identifier!))) {
                throw this.createFailedPredicateException("this.isUnboundFunctionName($identifier)");
            }
            this.state = 162;
            this.functionParameters();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionParameters(): FunctionParametersContext {
        let localContext = new FunctionParametersContext(this.context, this.state);
        this.enterRule(localContext, 6, OData4LiteParser.RULE_functionParameters);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 164;
            this.match(OData4LiteParser.LPAREN);
            this.state = 173;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 109) {
                {
                this.state = 165;
                this.functionParameter();
                this.state = 170;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 95) {
                    {
                    {
                    this.state = 166;
                    this.match(OData4LiteParser.COMMA);
                    this.state = 167;
                    this.functionParameter();
                    }
                    }
                    this.state = 172;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 175;
            this.match(OData4LiteParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionParameter(): FunctionParameterContext {
        let localContext = new FunctionParameterContext(this.context, this.state);
        this.enterRule(localContext, 8, OData4LiteParser.RULE_functionParameter);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 177;
            this.functionParameterName();
            this.state = 178;
            this.match(OData4LiteParser.EQ);
            this.state = 181;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OData4LiteParser.AT_SIGN:
                {
                this.state = 179;
                this.parameterAlias();
                }
                break;
            case OData4LiteParser.NULL:
            case OData4LiteParser.LIT_DATETIME:
            case OData4LiteParser.LIT_DATE:
            case OData4LiteParser.LIT_TIME_OF_DAY:
            case OData4LiteParser.LIT_DAY_TIME_DURATION:
            case OData4LiteParser.LIT_BOOLEAN:
            case OData4LiteParser.LIT_STRING:
            case OData4LiteParser.LIT_INTEGER:
            case OData4LiteParser.LIT_DOUBLE:
            case OData4LiteParser.IDENTIFIER:
                {
                this.state = 180;
                this.primitiveLiteral();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionParameterName(): FunctionParameterNameContext {
        let localContext = new FunctionParameterNameContext(this.context, this.state);
        this.enterRule(localContext, 10, OData4LiteParser.RULE_functionParameterName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 183;
            this.match(OData4LiteParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public collectionNavigation(): CollectionNavigationContext {
        let localContext = new CollectionNavigationContext(this.context, this.state);
        this.enterRule(localContext, 12, OData4LiteParser.RULE_collectionNavigation);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 187;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
            case 1:
                {
                this.state = 185;
                this.match(OData4LiteParser.FWD_SLASH);
                this.state = 186;
                this.qualifiedName();
                }
                break;
            }
            this.state = 196;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OData4LiteParser.LPAREN:
                {
                this.state = 189;
                this.keyPredicate();
                this.state = 191;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 90) {
                    {
                    this.state = 190;
                    this.singleNavigation();
                    }
                }

                }
                break;
            case OData4LiteParser.COUNT_OPT:
                {
                this.state = 193;
                this.collectionPath();
                }
                break;
            case OData4LiteParser.FWD_SLASH:
                {
                this.state = 194;
                this.match(OData4LiteParser.FWD_SLASH);
                this.state = 195;
                this.match(OData4LiteParser.REF_OPT);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public singleNavigation(): SingleNavigationContext {
        let localContext = new SingleNavigationContext(this.context, this.state);
        this.enterRule(localContext, 14, OData4LiteParser.RULE_singleNavigation);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 200;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 8, this.context) ) {
            case 1:
                {
                this.state = 198;
                this.match(OData4LiteParser.FWD_SLASH);
                this.state = 199;
                this.qualifiedName();
                }
                break;
            }
            this.state = 208;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 9, this.context) ) {
            case 1:
                {
                this.state = 202;
                this.match(OData4LiteParser.FWD_SLASH);
                this.state = 203;
                this.propertyPath();
                }
                break;
            case 2:
                {
                this.state = 204;
                this.match(OData4LiteParser.FWD_SLASH);
                this.state = 205;
                this.match(OData4LiteParser.REF_OPT);
                }
                break;
            case 3:
                {
                this.state = 206;
                this.match(OData4LiteParser.FWD_SLASH);
                this.state = 207;
                this.match(OData4LiteParser.VALUE_OPT);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public propertyPath(): PropertyPathContext {
        let localContext = new PropertyPathContext(this.context, this.state);
        this.enterRule(localContext, 16, OData4LiteParser.RULE_propertyPath);
        try {
            this.state = 220;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 10, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 210;
                this.property();
                this.state = 211;
                this.collectionNavigation();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 213;
                this.property();
                this.state = 214;
                this.singleNavigation();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 216;
                this.property();
                this.state = 217;
                this.singlePath();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 219;
                this.property();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public collectionPath(): CollectionPathContext {
        let localContext = new CollectionPathContext(this.context, this.state);
        this.enterRule(localContext, 18, OData4LiteParser.RULE_collectionPath);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 222;
            this.count();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public singlePath(): SinglePathContext {
        let localContext = new SinglePathContext(this.context, this.state);
        this.enterRule(localContext, 20, OData4LiteParser.RULE_singlePath);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 224;
            this.match(OData4LiteParser.VALUE_OPT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public property(): PropertyContext {
        let localContext = new PropertyContext(this.context, this.state);
        this.enterRule(localContext, 22, OData4LiteParser.RULE_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 226;
            this.match(OData4LiteParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public qualifiedName(): QualifiedNameContext {
        let localContext = new QualifiedNameContext(this.context, this.state);
        this.enterRule(localContext, 24, OData4LiteParser.RULE_qualifiedName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 228;
            this.namespace();
            this.state = 229;
            this.match(OData4LiteParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public keyPredicate(): KeyPredicateContext {
        let localContext = new KeyPredicateContext(this.context, this.state);
        this.enterRule(localContext, 26, OData4LiteParser.RULE_keyPredicate);
        try {
            this.state = 233;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 11, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 231;
                this.simpleKey();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 232;
                this.compoundKey();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public simpleKey(): SimpleKeyContext {
        let localContext = new SimpleKeyContext(this.context, this.state);
        this.enterRule(localContext, 28, OData4LiteParser.RULE_simpleKey);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 235;
            this.match(OData4LiteParser.LPAREN);
            this.state = 236;
            this.primitiveLiteral();
            this.state = 237;
            this.match(OData4LiteParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public compoundKey(): CompoundKeyContext {
        let localContext = new CompoundKeyContext(this.context, this.state);
        this.enterRule(localContext, 30, OData4LiteParser.RULE_compoundKey);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 239;
            this.match(OData4LiteParser.LPAREN);
            {
            this.state = 240;
            this.match(OData4LiteParser.IDENTIFIER);
            this.state = 241;
            this.match(OData4LiteParser.EQ);
            this.state = 242;
            this.primitiveLiteral();
            this.state = 249;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 95) {
                {
                {
                this.state = 243;
                this.match(OData4LiteParser.COMMA);
                this.state = 244;
                this.match(OData4LiteParser.IDENTIFIER);
                this.state = 245;
                this.match(OData4LiteParser.EQ);
                this.state = 246;
                this.primitiveLiteral();
                }
                }
                this.state = 251;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            this.state = 252;
            this.match(OData4LiteParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public queryOptions(): QueryOptionsContext {
        let localContext = new QueryOptionsContext(this.context, this.state);
        this.enterRule(localContext, 32, OData4LiteParser.RULE_queryOptions);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 254;
            this.queryOption();
            this.state = 259;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 86) {
                {
                {
                this.state = 255;
                this.match(OData4LiteParser.AMPERSAND);
                this.state = 256;
                this.queryOption();
                }
                }
                this.state = 261;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public queryOption(): QueryOptionContext {
        let localContext = new QueryOptionContext(this.context, this.state);
        this.enterRule(localContext, 34, OData4LiteParser.RULE_queryOption);
        try {
            this.state = 264;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OData4LiteParser.SELECT_OPT:
            case OData4LiteParser.APPLY_OPT:
            case OData4LiteParser.EXPAND_OPT:
            case OData4LiteParser.FILTER_OPT:
            case OData4LiteParser.TOP_OPT:
            case OData4LiteParser.SKIP_COUNT:
            case OData4LiteParser.COUNT_OPT:
            case OData4LiteParser.ORDERBY_OPT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 262;
                this.systemQueryOption();
                }
                break;
            case OData4LiteParser.AT_SIGN:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 263;
                this.aliasAndValue();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public systemQueryOption(): SystemQueryOptionContext {
        let localContext = new SystemQueryOptionContext(this.context, this.state);
        this.enterRule(localContext, 36, OData4LiteParser.RULE_systemQueryOption);
        try {
            this.state = 274;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OData4LiteParser.FILTER_OPT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 266;
                this.filter();
                }
                break;
            case OData4LiteParser.COUNT_OPT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 267;
                this.count();
                }
                break;
            case OData4LiteParser.TOP_OPT:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 268;
                this.top();
                }
                break;
            case OData4LiteParser.SKIP_COUNT:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 269;
                this.skip();
                }
                break;
            case OData4LiteParser.ORDERBY_OPT:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 270;
                this.orderby();
                }
                break;
            case OData4LiteParser.EXPAND_OPT:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 271;
                this.expand();
                }
                break;
            case OData4LiteParser.SELECT_OPT:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 272;
                this.select();
                }
                break;
            case OData4LiteParser.APPLY_OPT:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 273;
                this.apply();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dynamicPropertyAssignment(): DynamicPropertyAssignmentContext {
        let localContext = new DynamicPropertyAssignmentContext(this.context, this.state);
        this.enterRule(localContext, 38, OData4LiteParser.RULE_dynamicPropertyAssignment);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 276;
            this.match(OData4LiteParser.OP_AS);
            this.state = 277;
            this.match(OData4LiteParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public aliasAndValue(): AliasAndValueContext {
        let localContext = new AliasAndValueContext(this.context, this.state);
        this.enterRule(localContext, 40, OData4LiteParser.RULE_aliasAndValue);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 279;
            this.parameterAlias();
            this.state = 280;
            this.match(OData4LiteParser.EQ);
            this.state = 281;
            this.parameterValue();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parameterAlias(): ParameterAliasContext {
        let localContext = new ParameterAliasContext(this.context, this.state);
        this.enterRule(localContext, 42, OData4LiteParser.RULE_parameterAlias);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 283;
            this.match(OData4LiteParser.AT_SIGN);
            this.state = 284;
            this.match(OData4LiteParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parameterValue(): ParameterValueContext {
        let localContext = new ParameterValueContext(this.context, this.state);
        this.enterRule(localContext, 44, OData4LiteParser.RULE_parameterValue);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 286;
            this.primitiveLiteral();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public filter(): FilterContext {
        let localContext = new FilterContext(this.context, this.state);
        this.enterRule(localContext, 46, OData4LiteParser.RULE_filter);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 288;
            this.match(OData4LiteParser.FILTER_OPT);
            this.state = 289;
            this.match(OData4LiteParser.EQ);
            this.state = 290;
            this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public apply(): ApplyContext {
        let localContext = new ApplyContext(this.context, this.state);
        this.enterRule(localContext, 48, OData4LiteParser.RULE_apply);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 292;
            this.match(OData4LiteParser.APPLY_OPT);
            this.state = 293;
            this.match(OData4LiteParser.EQ);
            this.state = 294;
            this.applyExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public applyExpression(): ApplyExpressionContext {
        let localContext = new ApplyExpressionContext(this.context, this.state);
        this.enterRule(localContext, 50, OData4LiteParser.RULE_applyExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 296;
            this.applyTrafo();
            this.state = 301;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 90) {
                {
                {
                this.state = 297;
                this.match(OData4LiteParser.FWD_SLASH);
                this.state = 298;
                this.applyTrafo();
                }
                }
                this.state = 303;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public applyTrafo(): ApplyTrafoContext {
        let localContext = new ApplyTrafoContext(this.context, this.state);
        this.enterRule(localContext, 52, OData4LiteParser.RULE_applyTrafo);
        try {
            this.state = 309;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OData4LiteParser.COMPUTE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 304;
                this.computeTrafo();
                }
                break;
            case OData4LiteParser.CONCAT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 305;
                this.concatTrafo();
                }
                break;
            case OData4LiteParser.GROUPBY:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 306;
                this.groupbyTrafo();
                }
                break;
            case OData4LiteParser.AGGREGATE:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 307;
                this.aggregateTrafo();
                }
                break;
            case OData4LiteParser.FILTER:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 308;
                this.filterTrafo();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public computeTrafo(): ComputeTrafoContext {
        let localContext = new ComputeTrafoContext(this.context, this.state);
        this.enterRule(localContext, 54, OData4LiteParser.RULE_computeTrafo);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 311;
            this.match(OData4LiteParser.COMPUTE);
            this.state = 312;
            this.match(OData4LiteParser.LPAREN);
            this.state = 321;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 19, this.context) ) {
            case 1:
                {
                this.state = 313;
                this.computeExpression();
                }
                break;
            case 2:
                {
                this.state = 314;
                this.computeExpression();
                this.state = 317;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 315;
                    this.match(OData4LiteParser.COMMA);
                    this.state = 316;
                    this.computeExpression();
                    }
                    }
                    this.state = 319;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 95);
                }
                break;
            }
            this.state = 323;
            this.match(OData4LiteParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public computeExpression(): ComputeExpressionContext {
        let localContext = new ComputeExpressionContext(this.context, this.state);
        this.enterRule(localContext, 56, OData4LiteParser.RULE_computeExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 325;
            this.expression(0);
            this.state = 326;
            this.dynamicPropertyAssignment();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public concatTrafo(): ConcatTrafoContext {
        let localContext = new ConcatTrafoContext(this.context, this.state);
        this.enterRule(localContext, 58, OData4LiteParser.RULE_concatTrafo);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 328;
            this.match(OData4LiteParser.CONCAT);
            this.state = 329;
            this.match(OData4LiteParser.LPAREN);
            this.state = 338;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 21, this.context) ) {
            case 1:
                {
                this.state = 330;
                this.applyTrafo();
                }
                break;
            case 2:
                {
                this.state = 331;
                this.applyTrafo();
                this.state = 334;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 332;
                    this.match(OData4LiteParser.COMMA);
                    this.state = 333;
                    this.applyTrafo();
                    }
                    }
                    this.state = 336;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 95);
                }
                break;
            }
            this.state = 340;
            this.match(OData4LiteParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupbyTrafo(): GroupbyTrafoContext {
        let localContext = new GroupbyTrafoContext(this.context, this.state);
        this.enterRule(localContext, 60, OData4LiteParser.RULE_groupbyTrafo);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 342;
            this.match(OData4LiteParser.GROUPBY);
            this.state = 343;
            this.match(OData4LiteParser.LPAREN);
            this.state = 344;
            this.groupByList();
            this.state = 347;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 95) {
                {
                this.state = 345;
                this.match(OData4LiteParser.COMMA);
                this.state = 346;
                this.applyExpression();
                }
            }

            this.state = 349;
            this.match(OData4LiteParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupByList(): GroupByListContext {
        let localContext = new GroupByListContext(this.context, this.state);
        this.enterRule(localContext, 62, OData4LiteParser.RULE_groupByList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 351;
            this.match(OData4LiteParser.LPAREN);
            this.state = 352;
            this.groupbyElement();
            this.state = 357;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 95) {
                {
                {
                this.state = 353;
                this.match(OData4LiteParser.COMMA);
                this.state = 354;
                this.groupbyElement();
                }
                }
                this.state = 359;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 360;
            this.match(OData4LiteParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupbyElement(): GroupbyElementContext {
        let localContext = new GroupbyElementContext(this.context, this.state);
        this.enterRule(localContext, 64, OData4LiteParser.RULE_groupbyElement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 362;
            this.groupingProperty();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupingProperty(): GroupingPropertyContext {
        let localContext = new GroupingPropertyContext(this.context, this.state);
        this.enterRule(localContext, 66, OData4LiteParser.RULE_groupingProperty);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 365;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 24, this.context) ) {
            case 1:
                {
                this.state = 364;
                this.pathPrefix();
                }
                break;
            }
            this.state = 376;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 26, this.context) ) {
            case 1:
                {
                this.state = 367;
                this.property();
                this.state = 372;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 90) {
                    {
                    {
                    this.state = 368;
                    this.match(OData4LiteParser.FWD_SLASH);
                    this.state = 369;
                    this.qualifiedName();
                    }
                    }
                    this.state = 374;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            case 2:
                {
                this.state = 375;
                this.property();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pathPrefix(): PathPrefixContext {
        let localContext = new PathPrefixContext(this.context, this.state);
        this.enterRule(localContext, 68, OData4LiteParser.RULE_pathPrefix);
        try {
            let alternative: number;
            this.state = 406;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 31, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 378;
                this.qualifiedName();
                this.state = 379;
                this.match(OData4LiteParser.FWD_SLASH);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 388;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 381;
                        this.property();
                        this.state = 384;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 27, this.context) ) {
                        case 1:
                            {
                            this.state = 382;
                            this.match(OData4LiteParser.FWD_SLASH);
                            this.state = 383;
                            this.qualifiedName();
                            }
                            break;
                        }
                        this.state = 386;
                        this.match(OData4LiteParser.FWD_SLASH);
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 390;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 28, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 392;
                this.qualifiedName();
                this.state = 393;
                this.match(OData4LiteParser.FWD_SLASH);
                this.state = 403;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 30, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 394;
                        this.property();
                        this.state = 397;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 29, this.context) ) {
                        case 1:
                            {
                            this.state = 395;
                            this.match(OData4LiteParser.FWD_SLASH);
                            this.state = 396;
                            this.qualifiedName();
                            }
                            break;
                        }
                        this.state = 399;
                        this.match(OData4LiteParser.FWD_SLASH);
                        }
                        }
                    }
                    this.state = 405;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 30, this.context);
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public filterTrafo(): FilterTrafoContext {
        let localContext = new FilterTrafoContext(this.context, this.state);
        this.enterRule(localContext, 70, OData4LiteParser.RULE_filterTrafo);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 408;
            this.match(OData4LiteParser.FILTER);
            this.state = 409;
            this.match(OData4LiteParser.LPAREN);
            this.state = 410;
            this.expression(0);
            this.state = 411;
            this.match(OData4LiteParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public aggregateTrafo(): AggregateTrafoContext {
        let localContext = new AggregateTrafoContext(this.context, this.state);
        this.enterRule(localContext, 72, OData4LiteParser.RULE_aggregateTrafo);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 413;
            this.match(OData4LiteParser.AGGREGATE);
            this.state = 414;
            this.match(OData4LiteParser.LPAREN);
            this.state = 423;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1050752) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 4294959233) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 4194439167) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 63) !== 0)) {
                {
                this.state = 415;
                this.aggregationParam();
                this.state = 420;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 95) {
                    {
                    {
                    this.state = 416;
                    this.match(OData4LiteParser.COMMA);
                    this.state = 417;
                    this.aggregationParam();
                    }
                    }
                    this.state = 422;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 425;
            this.match(OData4LiteParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public aggregationParam(): AggregationParamContext {
        let localContext = new AggregationParamContext(this.context, this.state);
        this.enterRule(localContext, 74, OData4LiteParser.RULE_aggregationParam);
        let _la: number;
        try {
            this.state = 437;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 35, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 427;
                this.expandPath();
                this.state = 428;
                this.match(OData4LiteParser.LPAREN);
                this.state = 429;
                this.aggregationExpr();
                this.state = 430;
                this.match(OData4LiteParser.RPAREN);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 432;
                this.aggregationExpr();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 433;
                this.aggregatedProperty();
                this.state = 435;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 42) {
                    {
                    this.state = 434;
                    this.aggregateWith();
                    }
                }

                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public aggregationExpr(): AggregationExprContext {
        let localContext = new AggregationExprContext(this.context, this.state);
        this.enterRule(localContext, 76, OData4LiteParser.RULE_aggregationExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 447;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OData4LiteParser.COUNT_OPT:
                {
                this.state = 439;
                this.match(OData4LiteParser.COUNT_OPT);
                this.state = 440;
                this.dynamicPropertyAssignment();
                }
                break;
            case OData4LiteParser.IT_OPT:
            case OData4LiteParser.CONCAT:
            case OData4LiteParser.OP_HAS:
            case OData4LiteParser.OP_NOT:
            case OData4LiteParser.K_CONTAINS:
            case OData4LiteParser.K_ENDSWITH:
            case OData4LiteParser.K_STARTSWITH:
            case OData4LiteParser.K_LENGTH:
            case OData4LiteParser.K_INDEXOF:
            case OData4LiteParser.K_SUBSTRING:
            case OData4LiteParser.K_TOLOWER:
            case OData4LiteParser.K_TOUPPER:
            case OData4LiteParser.K_TRIM:
            case OData4LiteParser.K_YEAR:
            case OData4LiteParser.K_MONTH:
            case OData4LiteParser.K_DAY:
            case OData4LiteParser.K_HOUR:
            case OData4LiteParser.K_MINUTE:
            case OData4LiteParser.K_SECOND:
            case OData4LiteParser.K_FRACTIONALSECONDS:
            case OData4LiteParser.K_DATE:
            case OData4LiteParser.K_TIME:
            case OData4LiteParser.K_TOTALOFFSETMINUTES:
            case OData4LiteParser.K_NOW:
            case OData4LiteParser.K_MINDATETIME:
            case OData4LiteParser.K_MAXDATETIME:
            case OData4LiteParser.K_ROUND:
            case OData4LiteParser.K_FLOOR:
            case OData4LiteParser.K_CEILING:
            case OData4LiteParser.K_CAST:
            case OData4LiteParser.K_ISOF:
            case OData4LiteParser.K_GEODISTANCE:
            case OData4LiteParser.K_GEOLENGTH:
            case OData4LiteParser.K_GEOINTERSECTS:
            case OData4LiteParser.AT_SIGN:
            case OData4LiteParser.MINUS:
            case OData4LiteParser.LPAREN:
            case OData4LiteParser.LBRACKET:
            case OData4LiteParser.NULL:
            case OData4LiteParser.LIT_DATETIME:
            case OData4LiteParser.LIT_DATE:
            case OData4LiteParser.LIT_TIME_OF_DAY:
            case OData4LiteParser.LIT_DAY_TIME_DURATION:
            case OData4LiteParser.LIT_BOOLEAN:
            case OData4LiteParser.LIT_STRING:
            case OData4LiteParser.LIT_INTEGER:
            case OData4LiteParser.LIT_DOUBLE:
            case OData4LiteParser.IDENTIFIER:
                {
                this.state = 441;
                this.expression(0);
                this.state = 443;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 42) {
                    {
                    this.state = 442;
                    this.aggregateWith();
                    }
                }

                this.state = 445;
                this.dynamicPropertyAssignment();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public aggregateWith(): AggregateWithContext {
        let localContext = new AggregateWithContext(this.context, this.state);
        this.enterRule(localContext, 78, OData4LiteParser.RULE_aggregateWith);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 449;
            this.match(OData4LiteParser.OP_WITH);
            this.state = 450;
            this.aggregateMethod();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public aggregateMethod(): AggregateMethodContext {
        let localContext = new AggregateMethodContext(this.context, this.state);
        this.enterRule(localContext, 80, OData4LiteParser.RULE_aggregateMethod);
        try {
            this.state = 458;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OData4LiteParser.SUM_AGGREGATION:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 452;
                this.match(OData4LiteParser.SUM_AGGREGATION);
                }
                break;
            case OData4LiteParser.MIN_AGGREGATION:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 453;
                this.match(OData4LiteParser.MIN_AGGREGATION);
                }
                break;
            case OData4LiteParser.MAX_AGGREGATION:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 454;
                this.match(OData4LiteParser.MAX_AGGREGATION);
                }
                break;
            case OData4LiteParser.AVERAGE_AGGREGATION:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 455;
                this.match(OData4LiteParser.AVERAGE_AGGREGATION);
                }
                break;
            case OData4LiteParser.COUNTDISTINCT_AGGREGATION:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 456;
                this.match(OData4LiteParser.COUNTDISTINCT_AGGREGATION);
                }
                break;
            case OData4LiteParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 457;
                this.qualifiedName();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public aggregatedProperty(): AggregatedPropertyContext {
        let localContext = new AggregatedPropertyContext(this.context, this.state);
        this.enterRule(localContext, 82, OData4LiteParser.RULE_aggregatedProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 460;
            this.pathPrefix();
            this.state = 461;
            this.property();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public count(): CountContext {
        let localContext = new CountContext(this.context, this.state);
        this.enterRule(localContext, 84, OData4LiteParser.RULE_count);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 463;
            this.match(OData4LiteParser.COUNT_OPT);
            this.state = 464;
            this.match(OData4LiteParser.EQ);
            this.state = 465;
            this.match(OData4LiteParser.LIT_BOOLEAN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public orderby(): OrderbyContext {
        let localContext = new OrderbyContext(this.context, this.state);
        this.enterRule(localContext, 86, OData4LiteParser.RULE_orderby);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 467;
            this.match(OData4LiteParser.ORDERBY_OPT);
            this.state = 468;
            this.match(OData4LiteParser.EQ);
            this.state = 477;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 40, this.context) ) {
            case 1:
                {
                this.state = 469;
                this.orderbyItem();
                }
                break;
            case 2:
                {
                this.state = 470;
                this.orderbyItem();
                this.state = 473;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 471;
                    this.match(OData4LiteParser.COMMA);
                    this.state = 472;
                    this.orderbyItem();
                    }
                    }
                    this.state = 475;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 95);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public skip(): SkipContext {
        let localContext = new SkipContext(this.context, this.state);
        this.enterRule(localContext, 88, OData4LiteParser.RULE_skip);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 479;
            this.match(OData4LiteParser.SKIP_COUNT);
            this.state = 480;
            this.match(OData4LiteParser.EQ);
            this.state = 481;
            this.match(OData4LiteParser.LIT_INTEGER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public top(): TopContext {
        let localContext = new TopContext(this.context, this.state);
        this.enterRule(localContext, 90, OData4LiteParser.RULE_top);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 483;
            this.match(OData4LiteParser.TOP_OPT);
            this.state = 484;
            this.match(OData4LiteParser.EQ);
            this.state = 485;
            this.match(OData4LiteParser.LIT_INTEGER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expand(): ExpandContext {
        let localContext = new ExpandContext(this.context, this.state);
        this.enterRule(localContext, 92, OData4LiteParser.RULE_expand);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 487;
            this.match(OData4LiteParser.EXPAND_OPT);
            this.state = 488;
            this.match(OData4LiteParser.EQ);
            this.state = 489;
            this.expandItemList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public select(): SelectContext {
        let localContext = new SelectContext(this.context, this.state);
        this.enterRule(localContext, 94, OData4LiteParser.RULE_select);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 491;
            this.match(OData4LiteParser.SELECT_OPT);
            this.state = 492;
            this.match(OData4LiteParser.EQ);
            this.state = 501;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 42, this.context) ) {
            case 1:
                {
                this.state = 493;
                this.match(OData4LiteParser.IDENTIFIER);
                }
                break;
            case 2:
                {
                this.state = 494;
                this.match(OData4LiteParser.IDENTIFIER);
                this.state = 497;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 495;
                    this.match(OData4LiteParser.COMMA);
                    this.state = 496;
                    this.match(OData4LiteParser.IDENTIFIER);
                    }
                    }
                    this.state = 499;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 95);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public orderbyItem(): OrderbyItemContext {
        let localContext = new OrderbyItemContext(this.context, this.state);
        this.enterRule(localContext, 96, OData4LiteParser.RULE_orderbyItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 503;
            this.expression(0);
            this.state = 505;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 27 || _la === 28) {
                {
                this.state = 504;
                _la = this.tokenStream.LA(1);
                if(!(_la === 27 || _la === 28)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expandItemList(): ExpandItemListContext {
        let localContext = new ExpandItemListContext(this.context, this.state);
        this.enterRule(localContext, 98, OData4LiteParser.RULE_expandItemList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 507;
            this.expandItem();
            this.state = 510;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 95) {
                {
                this.state = 508;
                this.match(OData4LiteParser.COMMA);
                this.state = 509;
                this.expandItem();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expandItem(): ExpandItemContext {
        let localContext = new ExpandItemContext(this.context, this.state);
        this.enterRule(localContext, 100, OData4LiteParser.RULE_expandItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 512;
            this.match(OData4LiteParser.IDENTIFIER);
            this.state = 517;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 97) {
                {
                this.state = 513;
                this.match(OData4LiteParser.LPAREN);
                this.state = 514;
                this.expandQueryOptions();
                this.state = 515;
                this.match(OData4LiteParser.RPAREN);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expandPath(): ExpandPathContext {
        let localContext = new ExpandPathContext(this.context, this.state);
        this.enterRule(localContext, 102, OData4LiteParser.RULE_expandPath);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 522;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 46, this.context) ) {
            case 1:
                {
                this.state = 519;
                this.qualifiedName();
                this.state = 520;
                this.match(OData4LiteParser.FWD_SLASH);
                }
                break;
            }
            this.state = 533;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 48, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 524;
                    this.property();
                    this.state = 525;
                    this.match(OData4LiteParser.FWD_SLASH);
                    this.state = 529;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 47, this.context) ) {
                    case 1:
                        {
                        this.state = 526;
                        this.qualifiedName();
                        this.state = 527;
                        this.match(OData4LiteParser.FWD_SLASH);
                        }
                        break;
                    }
                    }
                    }
                }
                this.state = 535;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 48, this.context);
            }
            this.state = 536;
            this.property();
            this.state = 539;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 90) {
                {
                this.state = 537;
                this.match(OData4LiteParser.FWD_SLASH);
                this.state = 538;
                this.qualifiedName();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expandQueryOptions(): ExpandQueryOptionsContext {
        let localContext = new ExpandQueryOptionsContext(this.context, this.state);
        this.enterRule(localContext, 104, OData4LiteParser.RULE_expandQueryOptions);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 541;
            this.expandQueryOption();
            this.state = 546;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 87) {
                {
                {
                this.state = 542;
                this.match(OData4LiteParser.SEMICOLON);
                this.state = 543;
                this.expandQueryOption();
                }
                }
                this.state = 548;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expandQueryOption(): ExpandQueryOptionContext {
        let localContext = new ExpandQueryOptionContext(this.context, this.state);
        this.enterRule(localContext, 106, OData4LiteParser.RULE_expandQueryOption);
        try {
            this.state = 557;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OData4LiteParser.SEMICOLON:
            case OData4LiteParser.RPAREN:
                this.enterOuterAlt(localContext, 1);
                // tslint:disable-next-line:no-empty
                {
                }
                break;
            case OData4LiteParser.FILTER_OPT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 550;
                this.filter();
                }
                break;
            case OData4LiteParser.COUNT_OPT:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 551;
                this.count();
                }
                break;
            case OData4LiteParser.ORDERBY_OPT:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 552;
                this.orderby();
                }
                break;
            case OData4LiteParser.SKIP_COUNT:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 553;
                this.skip();
                }
                break;
            case OData4LiteParser.TOP_OPT:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 554;
                this.top();
                }
                break;
            case OData4LiteParser.EXPAND_OPT:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 555;
                this.expand();
                }
                break;
            case OData4LiteParser.SELECT_OPT:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 556;
                this.select();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public expression(): ExpressionContext;
    public expression(_p: number): ExpressionContext;
    public expression(_p?: number): ExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 108;
        this.enterRecursionRule(localContext, 108, OData4LiteParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 579;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 53, this.context) ) {
            case 1:
                {
                localContext = new FunctionExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 560;
                this.functionName();
                this.state = 561;
                this.match(OData4LiteParser.LPAREN);
                this.state = 563;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & 536871425) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 4294967233) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 2146698271) !== 0)) {
                    {
                    this.state = 562;
                    this.expressionList();
                    }
                }

                this.state = 565;
                this.match(OData4LiteParser.RPAREN);
                }
                break;
            case 2:
                {
                localContext = new ParenthesisExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 567;
                this.match(OData4LiteParser.LPAREN);
                this.state = 568;
                this.expression(0);
                this.state = 569;
                this.match(OData4LiteParser.RPAREN);
                }
                break;
            case 3:
                {
                localContext = new UnaryExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 571;
                _la = this.tokenStream.LA(1);
                if(!(_la === 40 || _la === 47 || _la === 89)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 572;
                this.expression(13);
                }
                break;
            case 4:
                {
                localContext = new NegativeExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 573;
                this.match(OData4LiteParser.MINUS);
                this.state = 574;
                this.expression(12);
                }
                break;
            case 5:
                {
                localContext = new LiteralExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 575;
                this.primitiveLiteral();
                }
                break;
            case 6:
                {
                localContext = new LiteralCollectionExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 576;
                this.primitiveLiteralCollection();
                }
                break;
            case 7:
                {
                localContext = new FirstMemberExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 577;
                this.firstMemberExpr();
                }
                break;
            case 8:
                {
                localContext = new AliasExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 578;
                this.parameterAlias();
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 610;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 56, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 608;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 55, this.context) ) {
                    case 1:
                        {
                        localContext = new ModulusExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, OData4LiteParser.RULE_expression);
                        this.state = 581;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 582;
                        this.match(OData4LiteParser.OP_MOD);
                        this.state = 583;
                        this.expression(11);
                        }
                        break;
                    case 2:
                        {
                        localContext = new MultiplyExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, OData4LiteParser.RULE_expression);
                        this.state = 584;
                        if (!(this.precpred(this.context, 10))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 10)");
                        }
                        this.state = 585;
                        this.match(OData4LiteParser.OP_MUL);
                        this.state = 586;
                        this.expression(11);
                        }
                        break;
                    case 3:
                        {
                        localContext = new DivisionExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, OData4LiteParser.RULE_expression);
                        this.state = 587;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        this.state = 588;
                        this.match(OData4LiteParser.OP_DIV);
                        this.state = 589;
                        this.expression(10);
                        }
                        break;
                    case 4:
                        {
                        localContext = new SubtractExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, OData4LiteParser.RULE_expression);
                        this.state = 590;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 591;
                        this.match(OData4LiteParser.OP_SUB);
                        this.state = 592;
                        this.expression(9);
                        }
                        break;
                    case 5:
                        {
                        localContext = new AddExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, OData4LiteParser.RULE_expression);
                        this.state = 593;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 594;
                        this.match(OData4LiteParser.OP_ADD);
                        this.state = 595;
                        this.expression(8);
                        }
                        break;
                    case 6:
                        {
                        localContext = new BinaryExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, OData4LiteParser.RULE_expression);
                        this.state = 596;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 597;
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 63) !== 0))) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 598;
                        this.expression(7);
                        }
                        break;
                    case 7:
                        {
                        localContext = new LogicalExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, OData4LiteParser.RULE_expression);
                        this.state = 599;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 600;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 45 || _la === 46)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 601;
                        this.expression(6);
                        }
                        break;
                    case 8:
                        {
                        localContext = new InExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, OData4LiteParser.RULE_expression);
                        this.state = 602;
                        if (!(this.precpred(this.context, 15))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 15)");
                        }
                        this.state = 603;
                        this.match(OData4LiteParser.OP_IN);
                        this.state = 606;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case OData4LiteParser.LBRACKET:
                            {
                            this.state = 604;
                            this.primitiveLiteralCollection();
                            }
                            break;
                        case OData4LiteParser.AT_SIGN:
                            {
                            this.state = 605;
                            this.parameterAlias();
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        }
                        break;
                    }
                    }
                }
                this.state = 612;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 56, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public expressionList(): ExpressionListContext {
        let localContext = new ExpressionListContext(this.context, this.state);
        this.enterRule(localContext, 110, OData4LiteParser.RULE_expressionList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 613;
            this.expression(0);
            this.state = 618;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 95) {
                {
                {
                this.state = 614;
                this.match(OData4LiteParser.COMMA);
                this.state = 615;
                this.expression(0);
                }
                }
                this.state = 620;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionName(): FunctionNameContext {
        let localContext = new FunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 112, OData4LiteParser.RULE_functionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 621;
            _la = this.tokenStream.LA(1);
            if(!(_la === 20 || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 1073741823) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public firstMemberExpr(): FirstMemberExprContext {
        let localContext = new FirstMemberExprContext(this.context, this.state);
        this.enterRule(localContext, 114, OData4LiteParser.RULE_firstMemberExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 624;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 11) {
                {
                this.state = 623;
                this.lambdaPredicatePrefixExpr();
                }
            }

            this.state = 626;
            this.memberExpr();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lambdaPredicatePrefixExpr(): LambdaPredicatePrefixExprContext {
        let localContext = new LambdaPredicatePrefixExprContext(this.context, this.state);
        this.enterRule(localContext, 116, OData4LiteParser.RULE_lambdaPredicatePrefixExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 628;
            this.match(OData4LiteParser.IT_OPT);
            this.state = 629;
            this.match(OData4LiteParser.FWD_SLASH);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public memberExpr(): MemberExprContext {
        let localContext = new MemberExprContext(this.context, this.state);
        this.enterRule(localContext, 118, OData4LiteParser.RULE_memberExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 634;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 59, this.context) ) {
            case 1:
                {
                this.state = 631;
                this.qualifiedName();
                this.state = 632;
                this.match(OData4LiteParser.FWD_SLASH);
                }
                break;
            }
            this.state = 636;
            this.propertyPathExpr();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public propertyPathExpr(): PropertyPathExprContext {
        let localContext = new PropertyPathExprContext(this.context, this.state);
        this.enterRule(localContext, 120, OData4LiteParser.RULE_propertyPathExpr);
        try {
            this.state = 645;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 60, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 638;
                this.property();
                this.state = 639;
                this.singleNavigationExpr();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 641;
                this.property();
                this.state = 642;
                this.collectionPathExpr();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 644;
                this.property();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public collectionNavigationExpr(): CollectionNavigationExprContext {
        let localContext = new CollectionNavigationExprContext(this.context, this.state);
        this.enterRule(localContext, 122, OData4LiteParser.RULE_collectionNavigationExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 649;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 61, this.context) ) {
            case 1:
                {
                this.state = 647;
                this.match(OData4LiteParser.FWD_SLASH);
                this.state = 648;
                this.qualifiedName();
                }
                break;
            }
            this.state = 656;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OData4LiteParser.LPAREN:
                {
                this.state = 651;
                this.keyPredicate();
                this.state = 653;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 90) {
                    {
                    this.state = 652;
                    this.singleNavigationExpr();
                    }
                }

                }
                break;
            case OData4LiteParser.COUNT_OPT:
            case OData4LiteParser.FWD_SLASH:
                {
                this.state = 655;
                this.collectionPathExpr();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public singleNavigationExpr(): SingleNavigationExprContext {
        let localContext = new SingleNavigationExprContext(this.context, this.state);
        this.enterRule(localContext, 124, OData4LiteParser.RULE_singleNavigationExpr);
        try {
            this.state = 664;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 64, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 658;
                this.match(OData4LiteParser.FWD_SLASH);
                this.state = 659;
                this.memberExpr();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 660;
                this.match(OData4LiteParser.FWD_SLASH);
                this.state = 661;
                this.parameterAlias();
                this.notifyErrorListeners('Aliases are not valid in navigation expressions.', null, null);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public collectionPathExpr(): CollectionPathExprContext {
        let localContext = new CollectionPathExprContext(this.context, this.state);
        this.enterRule(localContext, 126, OData4LiteParser.RULE_collectionPathExpr);
        try {
            this.state = 671;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 65, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 666;
                this.match(OData4LiteParser.COUNT_OPT);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 667;
                this.match(OData4LiteParser.FWD_SLASH);
                this.state = 668;
                this.anyExpr();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 669;
                this.match(OData4LiteParser.FWD_SLASH);
                this.state = 670;
                this.allExpr();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public anyExpr(): AnyExprContext {
        let localContext = new AnyExprContext(this.context, this.state);
        this.enterRule(localContext, 128, OData4LiteParser.RULE_anyExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 673;
            this.match(OData4LiteParser.ANY);
            this.state = 674;
            this.match(OData4LiteParser.LPAREN);
            this.state = 679;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 109) {
                {
                this.state = 675;
                this.lambdaParameterIdentifier();
                this.state = 676;
                this.match(OData4LiteParser.COLON);
                this.state = 677;
                this.expression(0);
                }
            }

            this.state = 681;
            this.match(OData4LiteParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public allExpr(): AllExprContext {
        let localContext = new AllExprContext(this.context, this.state);
        this.enterRule(localContext, 130, OData4LiteParser.RULE_allExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 683;
            this.match(OData4LiteParser.ALL);
            this.state = 684;
            this.match(OData4LiteParser.LPAREN);
            this.state = 685;
            this.lambdaParameterIdentifier();
            this.state = 686;
            this.match(OData4LiteParser.COLON);
            this.state = 687;
            this.expression(0);
            this.state = 688;
            this.match(OData4LiteParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lambdaParameterIdentifier(): LambdaParameterIdentifierContext {
        let localContext = new LambdaParameterIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 132, OData4LiteParser.RULE_lambdaParameterIdentifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 690;
            this.match(OData4LiteParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public primitiveLiteralCollection(): PrimitiveLiteralCollectionContext {
        let localContext = new PrimitiveLiteralCollectionContext(this.context, this.state);
        this.enterRule(localContext, 134, OData4LiteParser.RULE_primitiveLiteralCollection);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 692;
            this.match(OData4LiteParser.LBRACKET);
            this.state = 701;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 1023) !== 0)) {
                {
                this.state = 693;
                this.primitiveLiteral();
                this.state = 698;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 95) {
                    {
                    {
                    this.state = 694;
                    this.match(OData4LiteParser.COMMA);
                    this.state = 695;
                    this.primitiveLiteral();
                    }
                    }
                    this.state = 700;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 703;
            this.match(OData4LiteParser.RBRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public primitiveLiteral(): PrimitiveLiteralContext {
        let localContext = new PrimitiveLiteralContext(this.context, this.state);
        this.enterRule(localContext, 136, OData4LiteParser.RULE_primitiveLiteral);
        try {
            this.state = 715;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OData4LiteParser.NULL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 705;
                this.match(OData4LiteParser.NULL);
                }
                break;
            case OData4LiteParser.LIT_BOOLEAN:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 706;
                this.match(OData4LiteParser.LIT_BOOLEAN);
                }
                break;
            case OData4LiteParser.LIT_DATE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 707;
                this.match(OData4LiteParser.LIT_DATE);
                }
                break;
            case OData4LiteParser.LIT_DATETIME:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 708;
                this.match(OData4LiteParser.LIT_DATETIME);
                }
                break;
            case OData4LiteParser.LIT_TIME_OF_DAY:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 709;
                this.match(OData4LiteParser.LIT_TIME_OF_DAY);
                }
                break;
            case OData4LiteParser.LIT_INTEGER:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 710;
                this.match(OData4LiteParser.LIT_INTEGER);
                }
                break;
            case OData4LiteParser.LIT_DOUBLE:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 711;
                this.match(OData4LiteParser.LIT_DOUBLE);
                }
                break;
            case OData4LiteParser.LIT_STRING:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 712;
                this.match(OData4LiteParser.LIT_STRING);
                }
                break;
            case OData4LiteParser.LIT_DAY_TIME_DURATION:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 713;
                this.match(OData4LiteParser.LIT_DAY_TIME_DURATION);
                }
                break;
            case OData4LiteParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 714;
                this.enum_();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enum_(): EnumContext {
        let localContext = new EnumContext(this.context, this.state);
        this.enterRule(localContext, 138, OData4LiteParser.RULE_enum);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 717;
            this.qualifiedEnumTypeName();
            this.state = 718;
            this.match(OData4LiteParser.SQUOTE);
            this.state = 719;
            this.enumValues();
            this.state = 720;
            this.match(OData4LiteParser.SQUOTE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public qualifiedEnumTypeName(): QualifiedEnumTypeNameContext {
        let localContext = new QualifiedEnumTypeNameContext(this.context, this.state);
        this.enterRule(localContext, 140, OData4LiteParser.RULE_qualifiedEnumTypeName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 722;
            this.namespace();
            this.state = 723;
            this.match(OData4LiteParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumValues(): EnumValuesContext {
        let localContext = new EnumValuesContext(this.context, this.state);
        this.enterRule(localContext, 142, OData4LiteParser.RULE_enumValues);
        let _la: number;
        try {
            this.state = 733;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 71, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 725;
                this.enumValue();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 726;
                this.enumValue();
                this.state = 729;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 727;
                    this.match(OData4LiteParser.COMMA);
                    this.state = 728;
                    this.enumValue();
                    }
                    }
                    this.state = 731;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 95);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumValue(): EnumValueContext {
        let localContext = new EnumValueContext(this.context, this.state);
        this.enterRule(localContext, 144, OData4LiteParser.RULE_enumValue);
        try {
            this.state = 739;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OData4LiteParser.LIT_INTEGER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 735;
                this.match(OData4LiteParser.LIT_INTEGER);
                }
                break;
            case OData4LiteParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 736;
                this.match(OData4LiteParser.IDENTIFIER);
                this.state = 737;
                this.match(OData4LiteParser.DOT);
                this.state = 738;
                this.match(OData4LiteParser.IDENTIFIER);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public namespace(): NamespaceContext {
        let localContext = new NamespaceContext(this.context, this.state);
        this.enterRule(localContext, 146, OData4LiteParser.RULE_namespace);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 741;
            this.match(OData4LiteParser.IDENTIFIER);
            this.state = 746;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 73, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 742;
                    this.match(OData4LiteParser.DOT);
                    this.state = 743;
                    this.match(OData4LiteParser.IDENTIFIER);
                    }
                    }
                }
                this.state = 748;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 73, this.context);
            }
            this.state = 749;
            this.match(OData4LiteParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 2:
            return this.functionImportCall_sempred(localContext as FunctionImportCallContext, predIndex);
        case 54:
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        }
        return true;
    }
    private functionImportCall_sempred(localContext: FunctionImportCallContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.isUnboundFunctionName(localContext?.identifier!);
        }
        return true;
    }
    private expression_sempred(localContext: ExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 1:
            return this.precpred(this.context, 11);
        case 2:
            return this.precpred(this.context, 10);
        case 3:
            return this.precpred(this.context, 9);
        case 4:
            return this.precpred(this.context, 8);
        case 5:
            return this.precpred(this.context, 7);
        case 6:
            return this.precpred(this.context, 6);
        case 7:
            return this.precpred(this.context, 5);
        case 8:
            return this.precpred(this.context, 15);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,110,752,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,
        59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,
        65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,
        72,7,72,2,73,7,73,1,0,1,0,1,0,3,0,152,8,0,1,0,1,0,1,1,1,1,1,1,1,
        1,3,1,160,8,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,5,3,169,8,3,10,3,12,3,
        172,9,3,3,3,174,8,3,1,3,1,3,1,4,1,4,1,4,1,4,3,4,182,8,4,1,5,1,5,
        1,6,1,6,3,6,188,8,6,1,6,1,6,3,6,192,8,6,1,6,1,6,1,6,3,6,197,8,6,
        1,7,1,7,3,7,201,8,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,209,8,7,1,8,1,8,
        1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,221,8,8,1,9,1,9,1,10,1,10,1,
        11,1,11,1,12,1,12,1,12,1,13,1,13,3,13,234,8,13,1,14,1,14,1,14,1,
        14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,248,8,15,10,15,12,
        15,251,9,15,1,15,1,15,1,16,1,16,1,16,5,16,258,8,16,10,16,12,16,261,
        9,16,1,17,1,17,3,17,265,8,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
        1,18,3,18,275,8,18,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,21,1,21,
        1,21,1,22,1,22,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,25,1,25,
        1,25,5,25,300,8,25,10,25,12,25,303,9,25,1,26,1,26,1,26,1,26,1,26,
        3,26,310,8,26,1,27,1,27,1,27,1,27,1,27,1,27,4,27,318,8,27,11,27,
        12,27,319,3,27,322,8,27,1,27,1,27,1,28,1,28,1,28,1,29,1,29,1,29,
        1,29,1,29,1,29,4,29,335,8,29,11,29,12,29,336,3,29,339,8,29,1,29,
        1,29,1,30,1,30,1,30,1,30,1,30,3,30,348,8,30,1,30,1,30,1,31,1,31,
        1,31,1,31,5,31,356,8,31,10,31,12,31,359,9,31,1,31,1,31,1,32,1,32,
        1,33,3,33,366,8,33,1,33,1,33,1,33,5,33,371,8,33,10,33,12,33,374,
        9,33,1,33,3,33,377,8,33,1,34,1,34,1,34,1,34,1,34,1,34,3,34,385,8,
        34,1,34,1,34,4,34,389,8,34,11,34,12,34,390,1,34,1,34,1,34,1,34,1,
        34,3,34,398,8,34,1,34,1,34,5,34,402,8,34,10,34,12,34,405,9,34,3,
        34,407,8,34,1,35,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,5,
        36,419,8,36,10,36,12,36,422,9,36,3,36,424,8,36,1,36,1,36,1,37,1,
        37,1,37,1,37,1,37,1,37,1,37,1,37,3,37,436,8,37,3,37,438,8,37,1,38,
        1,38,1,38,1,38,3,38,444,8,38,1,38,1,38,3,38,448,8,38,1,39,1,39,1,
        39,1,40,1,40,1,40,1,40,1,40,1,40,3,40,459,8,40,1,41,1,41,1,41,1,
        42,1,42,1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,43,4,43,474,8,43,11,
        43,12,43,475,3,43,478,8,43,1,44,1,44,1,44,1,44,1,45,1,45,1,45,1,
        45,1,46,1,46,1,46,1,46,1,47,1,47,1,47,1,47,1,47,1,47,4,47,498,8,
        47,11,47,12,47,499,3,47,502,8,47,1,48,1,48,3,48,506,8,48,1,49,1,
        49,1,49,3,49,511,8,49,1,50,1,50,1,50,1,50,1,50,3,50,518,8,50,1,51,
        1,51,1,51,3,51,523,8,51,1,51,1,51,1,51,1,51,1,51,3,51,530,8,51,5,
        51,532,8,51,10,51,12,51,535,9,51,1,51,1,51,1,51,3,51,540,8,51,1,
        52,1,52,1,52,5,52,545,8,52,10,52,12,52,548,9,52,1,53,1,53,1,53,1,
        53,1,53,1,53,1,53,1,53,3,53,558,8,53,1,54,1,54,1,54,1,54,3,54,564,
        8,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,
        1,54,1,54,3,54,580,8,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,
        1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,
        1,54,1,54,1,54,1,54,3,54,607,8,54,5,54,609,8,54,10,54,12,54,612,
        9,54,1,55,1,55,1,55,5,55,617,8,55,10,55,12,55,620,9,55,1,56,1,56,
        1,57,3,57,625,8,57,1,57,1,57,1,58,1,58,1,58,1,59,1,59,1,59,3,59,
        635,8,59,1,59,1,59,1,60,1,60,1,60,1,60,1,60,1,60,1,60,3,60,646,8,
        60,1,61,1,61,3,61,650,8,61,1,61,1,61,3,61,654,8,61,1,61,3,61,657,
        8,61,1,62,1,62,1,62,1,62,1,62,1,62,3,62,665,8,62,1,63,1,63,1,63,
        1,63,1,63,3,63,672,8,63,1,64,1,64,1,64,1,64,1,64,1,64,3,64,680,8,
        64,1,64,1,64,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,66,1,66,1,67,1,
        67,1,67,1,67,5,67,697,8,67,10,67,12,67,700,9,67,3,67,702,8,67,1,
        67,1,67,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,3,68,716,
        8,68,1,69,1,69,1,69,1,69,1,69,1,70,1,70,1,70,1,71,1,71,1,71,1,71,
        4,71,730,8,71,11,71,12,71,731,3,71,734,8,71,1,72,1,72,1,72,1,72,
        3,72,740,8,72,1,73,1,73,1,73,5,73,745,8,73,10,73,12,73,748,9,73,
        1,73,1,73,1,73,0,1,108,74,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
        30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,
        74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,
        114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,
        146,0,5,1,0,27,28,3,0,40,40,47,47,89,89,1,0,34,39,1,0,45,46,2,0,
        20,20,53,82,800,0,148,1,0,0,0,2,155,1,0,0,0,4,161,1,0,0,0,6,164,
        1,0,0,0,8,177,1,0,0,0,10,183,1,0,0,0,12,187,1,0,0,0,14,200,1,0,0,
        0,16,220,1,0,0,0,18,222,1,0,0,0,20,224,1,0,0,0,22,226,1,0,0,0,24,
        228,1,0,0,0,26,233,1,0,0,0,28,235,1,0,0,0,30,239,1,0,0,0,32,254,
        1,0,0,0,34,264,1,0,0,0,36,274,1,0,0,0,38,276,1,0,0,0,40,279,1,0,
        0,0,42,283,1,0,0,0,44,286,1,0,0,0,46,288,1,0,0,0,48,292,1,0,0,0,
        50,296,1,0,0,0,52,309,1,0,0,0,54,311,1,0,0,0,56,325,1,0,0,0,58,328,
        1,0,0,0,60,342,1,0,0,0,62,351,1,0,0,0,64,362,1,0,0,0,66,365,1,0,
        0,0,68,406,1,0,0,0,70,408,1,0,0,0,72,413,1,0,0,0,74,437,1,0,0,0,
        76,447,1,0,0,0,78,449,1,0,0,0,80,458,1,0,0,0,82,460,1,0,0,0,84,463,
        1,0,0,0,86,467,1,0,0,0,88,479,1,0,0,0,90,483,1,0,0,0,92,487,1,0,
        0,0,94,491,1,0,0,0,96,503,1,0,0,0,98,507,1,0,0,0,100,512,1,0,0,0,
        102,522,1,0,0,0,104,541,1,0,0,0,106,557,1,0,0,0,108,579,1,0,0,0,
        110,613,1,0,0,0,112,621,1,0,0,0,114,624,1,0,0,0,116,628,1,0,0,0,
        118,634,1,0,0,0,120,645,1,0,0,0,122,649,1,0,0,0,124,664,1,0,0,0,
        126,671,1,0,0,0,128,673,1,0,0,0,130,683,1,0,0,0,132,690,1,0,0,0,
        134,692,1,0,0,0,136,715,1,0,0,0,138,717,1,0,0,0,140,722,1,0,0,0,
        142,733,1,0,0,0,144,739,1,0,0,0,146,741,1,0,0,0,148,151,3,2,1,0,
        149,150,5,91,0,0,150,152,3,32,16,0,151,149,1,0,0,0,151,152,1,0,0,
        0,152,153,1,0,0,0,153,154,5,0,0,1,154,1,1,0,0,0,155,159,5,109,0,
        0,156,160,3,4,2,0,157,160,3,14,7,0,158,160,3,12,6,0,159,156,1,0,
        0,0,159,157,1,0,0,0,159,158,1,0,0,0,159,160,1,0,0,0,160,3,1,0,0,
        0,161,162,4,2,0,1,162,163,3,6,3,0,163,5,1,0,0,0,164,173,5,97,0,0,
        165,170,3,8,4,0,166,167,5,95,0,0,167,169,3,8,4,0,168,166,1,0,0,0,
        169,172,1,0,0,0,170,168,1,0,0,0,170,171,1,0,0,0,171,174,1,0,0,0,
        172,170,1,0,0,0,173,165,1,0,0,0,173,174,1,0,0,0,174,175,1,0,0,0,
        175,176,5,96,0,0,176,7,1,0,0,0,177,178,3,10,5,0,178,181,5,94,0,0,
        179,182,3,42,21,0,180,182,3,136,68,0,181,179,1,0,0,0,181,180,1,0,
        0,0,182,9,1,0,0,0,183,184,5,109,0,0,184,11,1,0,0,0,185,186,5,90,
        0,0,186,188,3,24,12,0,187,185,1,0,0,0,187,188,1,0,0,0,188,196,1,
        0,0,0,189,191,3,26,13,0,190,192,3,14,7,0,191,190,1,0,0,0,191,192,
        1,0,0,0,192,197,1,0,0,0,193,197,3,18,9,0,194,195,5,90,0,0,195,197,
        5,9,0,0,196,189,1,0,0,0,196,193,1,0,0,0,196,194,1,0,0,0,197,13,1,
        0,0,0,198,199,5,90,0,0,199,201,3,24,12,0,200,198,1,0,0,0,200,201,
        1,0,0,0,201,208,1,0,0,0,202,203,5,90,0,0,203,209,3,16,8,0,204,205,
        5,90,0,0,205,209,5,9,0,0,206,207,5,90,0,0,207,209,5,10,0,0,208,202,
        1,0,0,0,208,204,1,0,0,0,208,206,1,0,0,0,209,15,1,0,0,0,210,211,3,
        22,11,0,211,212,3,12,6,0,212,221,1,0,0,0,213,214,3,22,11,0,214,215,
        3,14,7,0,215,221,1,0,0,0,216,217,3,22,11,0,217,218,3,20,10,0,218,
        221,1,0,0,0,219,221,3,22,11,0,220,210,1,0,0,0,220,213,1,0,0,0,220,
        216,1,0,0,0,220,219,1,0,0,0,221,17,1,0,0,0,222,223,3,84,42,0,223,
        19,1,0,0,0,224,225,5,10,0,0,225,21,1,0,0,0,226,227,5,109,0,0,227,
        23,1,0,0,0,228,229,3,146,73,0,229,230,5,109,0,0,230,25,1,0,0,0,231,
        234,3,28,14,0,232,234,3,30,15,0,233,231,1,0,0,0,233,232,1,0,0,0,
        234,27,1,0,0,0,235,236,5,97,0,0,236,237,3,136,68,0,237,238,5,96,
        0,0,238,29,1,0,0,0,239,240,5,97,0,0,240,241,5,109,0,0,241,242,5,
        94,0,0,242,249,3,136,68,0,243,244,5,95,0,0,244,245,5,109,0,0,245,
        246,5,94,0,0,246,248,3,136,68,0,247,243,1,0,0,0,248,251,1,0,0,0,
        249,247,1,0,0,0,249,250,1,0,0,0,250,252,1,0,0,0,251,249,1,0,0,0,
        252,253,5,96,0,0,253,31,1,0,0,0,254,259,3,34,17,0,255,256,5,86,0,
        0,256,258,3,34,17,0,257,255,1,0,0,0,258,261,1,0,0,0,259,257,1,0,
        0,0,259,260,1,0,0,0,260,33,1,0,0,0,261,259,1,0,0,0,262,265,3,36,
        18,0,263,265,3,40,20,0,264,262,1,0,0,0,264,263,1,0,0,0,265,35,1,
        0,0,0,266,275,3,46,23,0,267,275,3,84,42,0,268,275,3,90,45,0,269,
        275,3,88,44,0,270,275,3,86,43,0,271,275,3,92,46,0,272,275,3,94,47,
        0,273,275,3,48,24,0,274,266,1,0,0,0,274,267,1,0,0,0,274,268,1,0,
        0,0,274,269,1,0,0,0,274,270,1,0,0,0,274,271,1,0,0,0,274,272,1,0,
        0,0,274,273,1,0,0,0,275,37,1,0,0,0,276,277,5,41,0,0,277,278,5,109,
        0,0,278,39,1,0,0,0,279,280,3,42,21,0,280,281,5,94,0,0,281,282,3,
        44,22,0,282,41,1,0,0,0,283,284,5,83,0,0,284,285,5,109,0,0,285,43,
        1,0,0,0,286,287,3,136,68,0,287,45,1,0,0,0,288,289,5,4,0,0,289,290,
        5,94,0,0,290,291,3,108,54,0,291,47,1,0,0,0,292,293,5,2,0,0,293,294,
        5,94,0,0,294,295,3,50,25,0,295,49,1,0,0,0,296,301,3,52,26,0,297,
        298,5,90,0,0,298,300,3,52,26,0,299,297,1,0,0,0,300,303,1,0,0,0,301,
        299,1,0,0,0,301,302,1,0,0,0,302,51,1,0,0,0,303,301,1,0,0,0,304,310,
        3,54,27,0,305,310,3,58,29,0,306,310,3,60,30,0,307,310,3,72,36,0,
        308,310,3,70,35,0,309,304,1,0,0,0,309,305,1,0,0,0,309,306,1,0,0,
        0,309,307,1,0,0,0,309,308,1,0,0,0,310,53,1,0,0,0,311,312,5,22,0,
        0,312,321,5,97,0,0,313,322,3,56,28,0,314,317,3,56,28,0,315,316,5,
        95,0,0,316,318,3,56,28,0,317,315,1,0,0,0,318,319,1,0,0,0,319,317,
        1,0,0,0,319,320,1,0,0,0,320,322,1,0,0,0,321,313,1,0,0,0,321,314,
        1,0,0,0,322,323,1,0,0,0,323,324,5,96,0,0,324,55,1,0,0,0,325,326,
        3,108,54,0,326,327,3,38,19,0,327,57,1,0,0,0,328,329,5,20,0,0,329,
        338,5,97,0,0,330,339,3,52,26,0,331,334,3,52,26,0,332,333,5,95,0,
        0,333,335,3,52,26,0,334,332,1,0,0,0,335,336,1,0,0,0,336,334,1,0,
        0,0,336,337,1,0,0,0,337,339,1,0,0,0,338,330,1,0,0,0,338,331,1,0,
        0,0,339,340,1,0,0,0,340,341,5,96,0,0,341,59,1,0,0,0,342,343,5,21,
        0,0,343,344,5,97,0,0,344,347,3,62,31,0,345,346,5,95,0,0,346,348,
        3,50,25,0,347,345,1,0,0,0,347,348,1,0,0,0,348,349,1,0,0,0,349,350,
        5,96,0,0,350,61,1,0,0,0,351,352,5,97,0,0,352,357,3,64,32,0,353,354,
        5,95,0,0,354,356,3,64,32,0,355,353,1,0,0,0,356,359,1,0,0,0,357,355,
        1,0,0,0,357,358,1,0,0,0,358,360,1,0,0,0,359,357,1,0,0,0,360,361,
        5,96,0,0,361,63,1,0,0,0,362,363,3,66,33,0,363,65,1,0,0,0,364,366,
        3,68,34,0,365,364,1,0,0,0,365,366,1,0,0,0,366,376,1,0,0,0,367,372,
        3,22,11,0,368,369,5,90,0,0,369,371,3,24,12,0,370,368,1,0,0,0,371,
        374,1,0,0,0,372,370,1,0,0,0,372,373,1,0,0,0,373,377,1,0,0,0,374,
        372,1,0,0,0,375,377,3,22,11,0,376,367,1,0,0,0,376,375,1,0,0,0,377,
        67,1,0,0,0,378,379,3,24,12,0,379,380,5,90,0,0,380,407,1,0,0,0,381,
        384,3,22,11,0,382,383,5,90,0,0,383,385,3,24,12,0,384,382,1,0,0,0,
        384,385,1,0,0,0,385,386,1,0,0,0,386,387,5,90,0,0,387,389,1,0,0,0,
        388,381,1,0,0,0,389,390,1,0,0,0,390,388,1,0,0,0,390,391,1,0,0,0,
        391,407,1,0,0,0,392,393,3,24,12,0,393,403,5,90,0,0,394,397,3,22,
        11,0,395,396,5,90,0,0,396,398,3,24,12,0,397,395,1,0,0,0,397,398,
        1,0,0,0,398,399,1,0,0,0,399,400,5,90,0,0,400,402,1,0,0,0,401,394,
        1,0,0,0,402,405,1,0,0,0,403,401,1,0,0,0,403,404,1,0,0,0,404,407,
        1,0,0,0,405,403,1,0,0,0,406,378,1,0,0,0,406,388,1,0,0,0,406,392,
        1,0,0,0,407,69,1,0,0,0,408,409,5,23,0,0,409,410,5,97,0,0,410,411,
        3,108,54,0,411,412,5,96,0,0,412,71,1,0,0,0,413,414,5,12,0,0,414,
        423,5,97,0,0,415,420,3,74,37,0,416,417,5,95,0,0,417,419,3,74,37,
        0,418,416,1,0,0,0,419,422,1,0,0,0,420,418,1,0,0,0,420,421,1,0,0,
        0,421,424,1,0,0,0,422,420,1,0,0,0,423,415,1,0,0,0,423,424,1,0,0,
        0,424,425,1,0,0,0,425,426,5,96,0,0,426,73,1,0,0,0,427,428,3,102,
        51,0,428,429,5,97,0,0,429,430,3,76,38,0,430,431,5,96,0,0,431,438,
        1,0,0,0,432,438,3,76,38,0,433,435,3,82,41,0,434,436,3,78,39,0,435,
        434,1,0,0,0,435,436,1,0,0,0,436,438,1,0,0,0,437,427,1,0,0,0,437,
        432,1,0,0,0,437,433,1,0,0,0,438,75,1,0,0,0,439,440,5,7,0,0,440,448,
        3,38,19,0,441,443,3,108,54,0,442,444,3,78,39,0,443,442,1,0,0,0,443,
        444,1,0,0,0,444,445,1,0,0,0,445,446,3,38,19,0,446,448,1,0,0,0,447,
        439,1,0,0,0,447,441,1,0,0,0,448,77,1,0,0,0,449,450,5,42,0,0,450,
        451,3,80,40,0,451,79,1,0,0,0,452,459,5,29,0,0,453,459,5,30,0,0,454,
        459,5,31,0,0,455,459,5,32,0,0,456,459,5,33,0,0,457,459,3,24,12,0,
        458,452,1,0,0,0,458,453,1,0,0,0,458,454,1,0,0,0,458,455,1,0,0,0,
        458,456,1,0,0,0,458,457,1,0,0,0,459,81,1,0,0,0,460,461,3,68,34,0,
        461,462,3,22,11,0,462,83,1,0,0,0,463,464,5,7,0,0,464,465,5,94,0,
        0,465,466,5,105,0,0,466,85,1,0,0,0,467,468,5,8,0,0,468,477,5,94,
        0,0,469,478,3,96,48,0,470,473,3,96,48,0,471,472,5,95,0,0,472,474,
        3,96,48,0,473,471,1,0,0,0,474,475,1,0,0,0,475,473,1,0,0,0,475,476,
        1,0,0,0,476,478,1,0,0,0,477,469,1,0,0,0,477,470,1,0,0,0,478,87,1,
        0,0,0,479,480,5,6,0,0,480,481,5,94,0,0,481,482,5,107,0,0,482,89,
        1,0,0,0,483,484,5,5,0,0,484,485,5,94,0,0,485,486,5,107,0,0,486,91,
        1,0,0,0,487,488,5,3,0,0,488,489,5,94,0,0,489,490,3,98,49,0,490,93,
        1,0,0,0,491,492,5,1,0,0,492,501,5,94,0,0,493,502,5,109,0,0,494,497,
        5,109,0,0,495,496,5,95,0,0,496,498,5,109,0,0,497,495,1,0,0,0,498,
        499,1,0,0,0,499,497,1,0,0,0,499,500,1,0,0,0,500,502,1,0,0,0,501,
        493,1,0,0,0,501,494,1,0,0,0,502,95,1,0,0,0,503,505,3,108,54,0,504,
        506,7,0,0,0,505,504,1,0,0,0,505,506,1,0,0,0,506,97,1,0,0,0,507,510,
        3,100,50,0,508,509,5,95,0,0,509,511,3,100,50,0,510,508,1,0,0,0,510,
        511,1,0,0,0,511,99,1,0,0,0,512,517,5,109,0,0,513,514,5,97,0,0,514,
        515,3,104,52,0,515,516,5,96,0,0,516,518,1,0,0,0,517,513,1,0,0,0,
        517,518,1,0,0,0,518,101,1,0,0,0,519,520,3,24,12,0,520,521,5,90,0,
        0,521,523,1,0,0,0,522,519,1,0,0,0,522,523,1,0,0,0,523,533,1,0,0,
        0,524,525,3,22,11,0,525,529,5,90,0,0,526,527,3,24,12,0,527,528,5,
        90,0,0,528,530,1,0,0,0,529,526,1,0,0,0,529,530,1,0,0,0,530,532,1,
        0,0,0,531,524,1,0,0,0,532,535,1,0,0,0,533,531,1,0,0,0,533,534,1,
        0,0,0,534,536,1,0,0,0,535,533,1,0,0,0,536,539,3,22,11,0,537,538,
        5,90,0,0,538,540,3,24,12,0,539,537,1,0,0,0,539,540,1,0,0,0,540,103,
        1,0,0,0,541,546,3,106,53,0,542,543,5,87,0,0,543,545,3,106,53,0,544,
        542,1,0,0,0,545,548,1,0,0,0,546,544,1,0,0,0,546,547,1,0,0,0,547,
        105,1,0,0,0,548,546,1,0,0,0,549,558,1,0,0,0,550,558,3,46,23,0,551,
        558,3,84,42,0,552,558,3,86,43,0,553,558,3,88,44,0,554,558,3,90,45,
        0,555,558,3,92,46,0,556,558,3,94,47,0,557,549,1,0,0,0,557,550,1,
        0,0,0,557,551,1,0,0,0,557,552,1,0,0,0,557,553,1,0,0,0,557,554,1,
        0,0,0,557,555,1,0,0,0,557,556,1,0,0,0,558,107,1,0,0,0,559,560,6,
        54,-1,0,560,561,3,112,56,0,561,563,5,97,0,0,562,564,3,110,55,0,563,
        562,1,0,0,0,563,564,1,0,0,0,564,565,1,0,0,0,565,566,5,96,0,0,566,
        580,1,0,0,0,567,568,5,97,0,0,568,569,3,108,54,0,569,570,5,96,0,0,
        570,580,1,0,0,0,571,572,7,1,0,0,572,580,3,108,54,13,573,574,5,89,
        0,0,574,580,3,108,54,12,575,580,3,136,68,0,576,580,3,134,67,0,577,
        580,3,114,57,0,578,580,3,42,21,0,579,559,1,0,0,0,579,567,1,0,0,0,
        579,571,1,0,0,0,579,573,1,0,0,0,579,575,1,0,0,0,579,576,1,0,0,0,
        579,577,1,0,0,0,579,578,1,0,0,0,580,610,1,0,0,0,581,582,10,11,0,
        0,582,583,5,52,0,0,583,609,3,108,54,11,584,585,10,10,0,0,585,586,
        5,51,0,0,586,609,3,108,54,11,587,588,10,9,0,0,588,589,5,50,0,0,589,
        609,3,108,54,10,590,591,10,8,0,0,591,592,5,49,0,0,592,609,3,108,
        54,9,593,594,10,7,0,0,594,595,5,48,0,0,595,609,3,108,54,8,596,597,
        10,6,0,0,597,598,7,2,0,0,598,609,3,108,54,7,599,600,10,5,0,0,600,
        601,7,3,0,0,601,609,3,108,54,6,602,603,10,15,0,0,603,606,5,44,0,
        0,604,607,3,134,67,0,605,607,3,42,21,0,606,604,1,0,0,0,606,605,1,
        0,0,0,607,609,1,0,0,0,608,581,1,0,0,0,608,584,1,0,0,0,608,587,1,
        0,0,0,608,590,1,0,0,0,608,593,1,0,0,0,608,596,1,0,0,0,608,599,1,
        0,0,0,608,602,1,0,0,0,609,612,1,0,0,0,610,608,1,0,0,0,610,611,1,
        0,0,0,611,109,1,0,0,0,612,610,1,0,0,0,613,618,3,108,54,0,614,615,
        5,95,0,0,615,617,3,108,54,0,616,614,1,0,0,0,617,620,1,0,0,0,618,
        616,1,0,0,0,618,619,1,0,0,0,619,111,1,0,0,0,620,618,1,0,0,0,621,
        622,7,4,0,0,622,113,1,0,0,0,623,625,3,116,58,0,624,623,1,0,0,0,624,
        625,1,0,0,0,625,626,1,0,0,0,626,627,3,118,59,0,627,115,1,0,0,0,628,
        629,5,11,0,0,629,630,5,90,0,0,630,117,1,0,0,0,631,632,3,24,12,0,
        632,633,5,90,0,0,633,635,1,0,0,0,634,631,1,0,0,0,634,635,1,0,0,0,
        635,636,1,0,0,0,636,637,3,120,60,0,637,119,1,0,0,0,638,639,3,22,
        11,0,639,640,3,124,62,0,640,646,1,0,0,0,641,642,3,22,11,0,642,643,
        3,126,63,0,643,646,1,0,0,0,644,646,3,22,11,0,645,638,1,0,0,0,645,
        641,1,0,0,0,645,644,1,0,0,0,646,121,1,0,0,0,647,648,5,90,0,0,648,
        650,3,24,12,0,649,647,1,0,0,0,649,650,1,0,0,0,650,656,1,0,0,0,651,
        653,3,26,13,0,652,654,3,124,62,0,653,652,1,0,0,0,653,654,1,0,0,0,
        654,657,1,0,0,0,655,657,3,126,63,0,656,651,1,0,0,0,656,655,1,0,0,
        0,657,123,1,0,0,0,658,659,5,90,0,0,659,665,3,118,59,0,660,661,5,
        90,0,0,661,662,3,42,21,0,662,663,6,62,-1,0,663,665,1,0,0,0,664,658,
        1,0,0,0,664,660,1,0,0,0,665,125,1,0,0,0,666,672,5,7,0,0,667,668,
        5,90,0,0,668,672,3,128,64,0,669,670,5,90,0,0,670,672,3,130,65,0,
        671,666,1,0,0,0,671,667,1,0,0,0,671,669,1,0,0,0,672,127,1,0,0,0,
        673,674,5,26,0,0,674,679,5,97,0,0,675,676,3,132,66,0,676,677,5,88,
        0,0,677,678,3,108,54,0,678,680,1,0,0,0,679,675,1,0,0,0,679,680,1,
        0,0,0,680,681,1,0,0,0,681,682,5,96,0,0,682,129,1,0,0,0,683,684,5,
        25,0,0,684,685,5,97,0,0,685,686,3,132,66,0,686,687,5,88,0,0,687,
        688,3,108,54,0,688,689,5,96,0,0,689,131,1,0,0,0,690,691,5,109,0,
        0,691,133,1,0,0,0,692,701,5,99,0,0,693,698,3,136,68,0,694,695,5,
        95,0,0,695,697,3,136,68,0,696,694,1,0,0,0,697,700,1,0,0,0,698,696,
        1,0,0,0,698,699,1,0,0,0,699,702,1,0,0,0,700,698,1,0,0,0,701,693,
        1,0,0,0,701,702,1,0,0,0,702,703,1,0,0,0,703,704,5,98,0,0,704,135,
        1,0,0,0,705,716,5,100,0,0,706,716,5,105,0,0,707,716,5,102,0,0,708,
        716,5,101,0,0,709,716,5,103,0,0,710,716,5,107,0,0,711,716,5,108,
        0,0,712,716,5,106,0,0,713,716,5,104,0,0,714,716,3,138,69,0,715,705,
        1,0,0,0,715,706,1,0,0,0,715,707,1,0,0,0,715,708,1,0,0,0,715,709,
        1,0,0,0,715,710,1,0,0,0,715,711,1,0,0,0,715,712,1,0,0,0,715,713,
        1,0,0,0,715,714,1,0,0,0,716,137,1,0,0,0,717,718,3,140,70,0,718,719,
        5,92,0,0,719,720,3,142,71,0,720,721,5,92,0,0,721,139,1,0,0,0,722,
        723,3,146,73,0,723,724,5,109,0,0,724,141,1,0,0,0,725,734,3,144,72,
        0,726,729,3,144,72,0,727,728,5,95,0,0,728,730,3,144,72,0,729,727,
        1,0,0,0,730,731,1,0,0,0,731,729,1,0,0,0,731,732,1,0,0,0,732,734,
        1,0,0,0,733,725,1,0,0,0,733,726,1,0,0,0,734,143,1,0,0,0,735,740,
        5,107,0,0,736,737,5,109,0,0,737,738,5,84,0,0,738,740,5,109,0,0,739,
        735,1,0,0,0,739,736,1,0,0,0,740,145,1,0,0,0,741,746,5,109,0,0,742,
        743,5,84,0,0,743,745,5,109,0,0,744,742,1,0,0,0,745,748,1,0,0,0,746,
        744,1,0,0,0,746,747,1,0,0,0,747,749,1,0,0,0,748,746,1,0,0,0,749,
        750,5,84,0,0,750,147,1,0,0,0,74,151,159,170,173,181,187,191,196,
        200,208,220,233,249,259,264,274,301,309,319,321,336,338,347,357,
        365,372,376,384,390,397,403,406,420,423,435,437,443,447,458,475,
        477,499,501,505,510,517,522,529,533,539,546,557,563,579,606,608,
        610,618,624,634,645,649,653,656,664,671,679,698,701,715,731,733,
        739,746
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!OData4LiteParser.__ATN) {
            OData4LiteParser.__ATN = new antlr.ATNDeserializer().deserialize(OData4LiteParser._serializedATN);
        }

        return OData4LiteParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(OData4LiteParser.literalNames, OData4LiteParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return OData4LiteParser.vocabulary;
    }

    private static readonly decisionsToDFA = OData4LiteParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class OdataRelativeURIContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public resourcePath(): ResourcePathContext {
        return this.getRuleContext(0, ResourcePathContext)!;
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.EOF, 0)!;
    }
    public QUESTION(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.QUESTION, 0);
    }
    public queryOptions(): QueryOptionsContext | null {
        return this.getRuleContext(0, QueryOptionsContext);
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_odataRelativeURI;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterOdataRelativeURI) {
             listener.enterOdataRelativeURI(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitOdataRelativeURI) {
             listener.exitOdataRelativeURI(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitOdataRelativeURI) {
            return visitor.visitOdataRelativeURI(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ResourcePathContext extends antlr.ParserRuleContext {
    public _id?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.IDENTIFIER, 0)!;
    }
    public functionImportCall(): FunctionImportCallContext | null {
        return this.getRuleContext(0, FunctionImportCallContext);
    }
    public singleNavigation(): SingleNavigationContext | null {
        return this.getRuleContext(0, SingleNavigationContext);
    }
    public collectionNavigation(): CollectionNavigationContext | null {
        return this.getRuleContext(0, CollectionNavigationContext);
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_resourcePath;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterResourcePath) {
             listener.enterResourcePath(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitResourcePath) {
             listener.exitResourcePath(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitResourcePath) {
            return visitor.visitResourcePath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionImportCallContext extends antlr.ParserRuleContext {
    public identifier: string;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number, identifier: string) {
        super(parent, invokingState);
        this.identifier = identifier;
    }
    public functionParameters(): FunctionParametersContext {
        return this.getRuleContext(0, FunctionParametersContext)!;
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_functionImportCall;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterFunctionImportCall) {
             listener.enterFunctionImportCall(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitFunctionImportCall) {
             listener.exitFunctionImportCall(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitFunctionImportCall) {
            return visitor.visitFunctionImportCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionParametersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.RPAREN, 0)!;
    }
    public functionParameter(): FunctionParameterContext[];
    public functionParameter(i: number): FunctionParameterContext | null;
    public functionParameter(i?: number): FunctionParameterContext[] | FunctionParameterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FunctionParameterContext);
        }

        return this.getRuleContext(i, FunctionParameterContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OData4LiteParser.COMMA);
    	} else {
    		return this.getToken(OData4LiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_functionParameters;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterFunctionParameters) {
             listener.enterFunctionParameters(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitFunctionParameters) {
             listener.exitFunctionParameters(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitFunctionParameters) {
            return visitor.visitFunctionParameters(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionParameterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public functionParameterName(): FunctionParameterNameContext {
        return this.getRuleContext(0, FunctionParameterNameContext)!;
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.EQ, 0)!;
    }
    public parameterAlias(): ParameterAliasContext | null {
        return this.getRuleContext(0, ParameterAliasContext);
    }
    public primitiveLiteral(): PrimitiveLiteralContext | null {
        return this.getRuleContext(0, PrimitiveLiteralContext);
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_functionParameter;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterFunctionParameter) {
             listener.enterFunctionParameter(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitFunctionParameter) {
             listener.exitFunctionParameter(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitFunctionParameter) {
            return visitor.visitFunctionParameter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionParameterNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_functionParameterName;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterFunctionParameterName) {
             listener.enterFunctionParameterName(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitFunctionParameterName) {
             listener.exitFunctionParameterName(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitFunctionParameterName) {
            return visitor.visitFunctionParameterName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CollectionNavigationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public keyPredicate(): KeyPredicateContext | null {
        return this.getRuleContext(0, KeyPredicateContext);
    }
    public collectionPath(): CollectionPathContext | null {
        return this.getRuleContext(0, CollectionPathContext);
    }
    public FWD_SLASH(): antlr.TerminalNode[];
    public FWD_SLASH(i: number): antlr.TerminalNode | null;
    public FWD_SLASH(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OData4LiteParser.FWD_SLASH);
    	} else {
    		return this.getToken(OData4LiteParser.FWD_SLASH, i);
    	}
    }
    public REF_OPT(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.REF_OPT, 0);
    }
    public qualifiedName(): QualifiedNameContext | null {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    public singleNavigation(): SingleNavigationContext | null {
        return this.getRuleContext(0, SingleNavigationContext);
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_collectionNavigation;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterCollectionNavigation) {
             listener.enterCollectionNavigation(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitCollectionNavigation) {
             listener.exitCollectionNavigation(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitCollectionNavigation) {
            return visitor.visitCollectionNavigation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SingleNavigationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FWD_SLASH(): antlr.TerminalNode[];
    public FWD_SLASH(i: number): antlr.TerminalNode | null;
    public FWD_SLASH(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OData4LiteParser.FWD_SLASH);
    	} else {
    		return this.getToken(OData4LiteParser.FWD_SLASH, i);
    	}
    }
    public propertyPath(): PropertyPathContext | null {
        return this.getRuleContext(0, PropertyPathContext);
    }
    public REF_OPT(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.REF_OPT, 0);
    }
    public VALUE_OPT(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.VALUE_OPT, 0);
    }
    public qualifiedName(): QualifiedNameContext | null {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_singleNavigation;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterSingleNavigation) {
             listener.enterSingleNavigation(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitSingleNavigation) {
             listener.exitSingleNavigation(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitSingleNavigation) {
            return visitor.visitSingleNavigation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PropertyPathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public property(): PropertyContext {
        return this.getRuleContext(0, PropertyContext)!;
    }
    public collectionNavigation(): CollectionNavigationContext | null {
        return this.getRuleContext(0, CollectionNavigationContext);
    }
    public singleNavigation(): SingleNavigationContext | null {
        return this.getRuleContext(0, SingleNavigationContext);
    }
    public singlePath(): SinglePathContext | null {
        return this.getRuleContext(0, SinglePathContext);
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_propertyPath;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterPropertyPath) {
             listener.enterPropertyPath(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitPropertyPath) {
             listener.exitPropertyPath(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitPropertyPath) {
            return visitor.visitPropertyPath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CollectionPathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public count(): CountContext {
        return this.getRuleContext(0, CountContext)!;
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_collectionPath;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterCollectionPath) {
             listener.enterCollectionPath(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitCollectionPath) {
             listener.exitCollectionPath(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitCollectionPath) {
            return visitor.visitCollectionPath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SinglePathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public VALUE_OPT(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.VALUE_OPT, 0)!;
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_singlePath;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterSinglePath) {
             listener.enterSinglePath(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitSinglePath) {
             listener.exitSinglePath(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitSinglePath) {
            return visitor.visitSinglePath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_property;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterProperty) {
             listener.enterProperty(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitProperty) {
             listener.exitProperty(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitProperty) {
            return visitor.visitProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QualifiedNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public namespace(): NamespaceContext {
        return this.getRuleContext(0, NamespaceContext)!;
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_qualifiedName;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterQualifiedName) {
             listener.enterQualifiedName(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitQualifiedName) {
             listener.exitQualifiedName(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitQualifiedName) {
            return visitor.visitQualifiedName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class KeyPredicateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public simpleKey(): SimpleKeyContext | null {
        return this.getRuleContext(0, SimpleKeyContext);
    }
    public compoundKey(): CompoundKeyContext | null {
        return this.getRuleContext(0, CompoundKeyContext);
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_keyPredicate;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterKeyPredicate) {
             listener.enterKeyPredicate(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitKeyPredicate) {
             listener.exitKeyPredicate(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitKeyPredicate) {
            return visitor.visitKeyPredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SimpleKeyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.LPAREN, 0)!;
    }
    public primitiveLiteral(): PrimitiveLiteralContext {
        return this.getRuleContext(0, PrimitiveLiteralContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.RPAREN, 0)!;
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_simpleKey;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterSimpleKey) {
             listener.enterSimpleKey(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitSimpleKey) {
             listener.exitSimpleKey(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitSimpleKey) {
            return visitor.visitSimpleKey(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CompoundKeyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.RPAREN, 0)!;
    }
    public IDENTIFIER(): antlr.TerminalNode[];
    public IDENTIFIER(i: number): antlr.TerminalNode | null;
    public IDENTIFIER(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OData4LiteParser.IDENTIFIER);
    	} else {
    		return this.getToken(OData4LiteParser.IDENTIFIER, i);
    	}
    }
    public EQ(): antlr.TerminalNode[];
    public EQ(i: number): antlr.TerminalNode | null;
    public EQ(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OData4LiteParser.EQ);
    	} else {
    		return this.getToken(OData4LiteParser.EQ, i);
    	}
    }
    public primitiveLiteral(): PrimitiveLiteralContext[];
    public primitiveLiteral(i: number): PrimitiveLiteralContext | null;
    public primitiveLiteral(i?: number): PrimitiveLiteralContext[] | PrimitiveLiteralContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PrimitiveLiteralContext);
        }

        return this.getRuleContext(i, PrimitiveLiteralContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OData4LiteParser.COMMA);
    	} else {
    		return this.getToken(OData4LiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_compoundKey;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterCompoundKey) {
             listener.enterCompoundKey(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitCompoundKey) {
             listener.exitCompoundKey(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitCompoundKey) {
            return visitor.visitCompoundKey(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QueryOptionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public queryOption(): QueryOptionContext[];
    public queryOption(i: number): QueryOptionContext | null;
    public queryOption(i?: number): QueryOptionContext[] | QueryOptionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QueryOptionContext);
        }

        return this.getRuleContext(i, QueryOptionContext);
    }
    public AMPERSAND(): antlr.TerminalNode[];
    public AMPERSAND(i: number): antlr.TerminalNode | null;
    public AMPERSAND(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OData4LiteParser.AMPERSAND);
    	} else {
    		return this.getToken(OData4LiteParser.AMPERSAND, i);
    	}
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_queryOptions;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterQueryOptions) {
             listener.enterQueryOptions(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitQueryOptions) {
             listener.exitQueryOptions(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitQueryOptions) {
            return visitor.visitQueryOptions(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QueryOptionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public systemQueryOption(): SystemQueryOptionContext | null {
        return this.getRuleContext(0, SystemQueryOptionContext);
    }
    public aliasAndValue(): AliasAndValueContext | null {
        return this.getRuleContext(0, AliasAndValueContext);
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_queryOption;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterQueryOption) {
             listener.enterQueryOption(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitQueryOption) {
             listener.exitQueryOption(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitQueryOption) {
            return visitor.visitQueryOption(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SystemQueryOptionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public filter(): FilterContext | null {
        return this.getRuleContext(0, FilterContext);
    }
    public count(): CountContext | null {
        return this.getRuleContext(0, CountContext);
    }
    public top(): TopContext | null {
        return this.getRuleContext(0, TopContext);
    }
    public skip(): SkipContext | null {
        return this.getRuleContext(0, SkipContext);
    }
    public orderby(): OrderbyContext | null {
        return this.getRuleContext(0, OrderbyContext);
    }
    public expand(): ExpandContext | null {
        return this.getRuleContext(0, ExpandContext);
    }
    public select(): SelectContext | null {
        return this.getRuleContext(0, SelectContext);
    }
    public apply(): ApplyContext | null {
        return this.getRuleContext(0, ApplyContext);
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_systemQueryOption;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterSystemQueryOption) {
             listener.enterSystemQueryOption(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitSystemQueryOption) {
             listener.exitSystemQueryOption(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitSystemQueryOption) {
            return visitor.visitSystemQueryOption(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DynamicPropertyAssignmentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OP_AS(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.OP_AS, 0)!;
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_dynamicPropertyAssignment;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterDynamicPropertyAssignment) {
             listener.enterDynamicPropertyAssignment(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitDynamicPropertyAssignment) {
             listener.exitDynamicPropertyAssignment(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitDynamicPropertyAssignment) {
            return visitor.visitDynamicPropertyAssignment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AliasAndValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public parameterAlias(): ParameterAliasContext {
        return this.getRuleContext(0, ParameterAliasContext)!;
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.EQ, 0)!;
    }
    public parameterValue(): ParameterValueContext {
        return this.getRuleContext(0, ParameterValueContext)!;
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_aliasAndValue;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterAliasAndValue) {
             listener.enterAliasAndValue(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitAliasAndValue) {
             listener.exitAliasAndValue(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitAliasAndValue) {
            return visitor.visitAliasAndValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParameterAliasContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public AT_SIGN(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.AT_SIGN, 0)!;
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_parameterAlias;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterParameterAlias) {
             listener.enterParameterAlias(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitParameterAlias) {
             listener.exitParameterAlias(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitParameterAlias) {
            return visitor.visitParameterAlias(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParameterValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public primitiveLiteral(): PrimitiveLiteralContext {
        return this.getRuleContext(0, PrimitiveLiteralContext)!;
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_parameterValue;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterParameterValue) {
             listener.enterParameterValue(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitParameterValue) {
             listener.exitParameterValue(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitParameterValue) {
            return visitor.visitParameterValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FilterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FILTER_OPT(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.FILTER_OPT, 0)!;
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.EQ, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_filter;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterFilter) {
             listener.enterFilter(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitFilter) {
             listener.exitFilter(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitFilter) {
            return visitor.visitFilter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ApplyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public APPLY_OPT(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.APPLY_OPT, 0)!;
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.EQ, 0)!;
    }
    public applyExpression(): ApplyExpressionContext {
        return this.getRuleContext(0, ApplyExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_apply;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterApply) {
             listener.enterApply(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitApply) {
             listener.exitApply(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitApply) {
            return visitor.visitApply(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ApplyExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public applyTrafo(): ApplyTrafoContext[];
    public applyTrafo(i: number): ApplyTrafoContext | null;
    public applyTrafo(i?: number): ApplyTrafoContext[] | ApplyTrafoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ApplyTrafoContext);
        }

        return this.getRuleContext(i, ApplyTrafoContext);
    }
    public FWD_SLASH(): antlr.TerminalNode[];
    public FWD_SLASH(i: number): antlr.TerminalNode | null;
    public FWD_SLASH(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OData4LiteParser.FWD_SLASH);
    	} else {
    		return this.getToken(OData4LiteParser.FWD_SLASH, i);
    	}
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_applyExpression;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterApplyExpression) {
             listener.enterApplyExpression(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitApplyExpression) {
             listener.exitApplyExpression(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitApplyExpression) {
            return visitor.visitApplyExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ApplyTrafoContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public computeTrafo(): ComputeTrafoContext | null {
        return this.getRuleContext(0, ComputeTrafoContext);
    }
    public concatTrafo(): ConcatTrafoContext | null {
        return this.getRuleContext(0, ConcatTrafoContext);
    }
    public groupbyTrafo(): GroupbyTrafoContext | null {
        return this.getRuleContext(0, GroupbyTrafoContext);
    }
    public aggregateTrafo(): AggregateTrafoContext | null {
        return this.getRuleContext(0, AggregateTrafoContext);
    }
    public filterTrafo(): FilterTrafoContext | null {
        return this.getRuleContext(0, FilterTrafoContext);
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_applyTrafo;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterApplyTrafo) {
             listener.enterApplyTrafo(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitApplyTrafo) {
             listener.exitApplyTrafo(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitApplyTrafo) {
            return visitor.visitApplyTrafo(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ComputeTrafoContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COMPUTE(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.COMPUTE, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.RPAREN, 0)!;
    }
    public computeExpression(): ComputeExpressionContext[];
    public computeExpression(i: number): ComputeExpressionContext | null;
    public computeExpression(i?: number): ComputeExpressionContext[] | ComputeExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ComputeExpressionContext);
        }

        return this.getRuleContext(i, ComputeExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OData4LiteParser.COMMA);
    	} else {
    		return this.getToken(OData4LiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_computeTrafo;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterComputeTrafo) {
             listener.enterComputeTrafo(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitComputeTrafo) {
             listener.exitComputeTrafo(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitComputeTrafo) {
            return visitor.visitComputeTrafo(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ComputeExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public dynamicPropertyAssignment(): DynamicPropertyAssignmentContext {
        return this.getRuleContext(0, DynamicPropertyAssignmentContext)!;
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_computeExpression;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterComputeExpression) {
             listener.enterComputeExpression(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitComputeExpression) {
             listener.exitComputeExpression(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitComputeExpression) {
            return visitor.visitComputeExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConcatTrafoContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CONCAT(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.CONCAT, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.RPAREN, 0)!;
    }
    public applyTrafo(): ApplyTrafoContext[];
    public applyTrafo(i: number): ApplyTrafoContext | null;
    public applyTrafo(i?: number): ApplyTrafoContext[] | ApplyTrafoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ApplyTrafoContext);
        }

        return this.getRuleContext(i, ApplyTrafoContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OData4LiteParser.COMMA);
    	} else {
    		return this.getToken(OData4LiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_concatTrafo;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterConcatTrafo) {
             listener.enterConcatTrafo(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitConcatTrafo) {
             listener.exitConcatTrafo(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitConcatTrafo) {
            return visitor.visitConcatTrafo(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupbyTrafoContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GROUPBY(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.GROUPBY, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.LPAREN, 0)!;
    }
    public groupByList(): GroupByListContext {
        return this.getRuleContext(0, GroupByListContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.RPAREN, 0)!;
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.COMMA, 0);
    }
    public applyExpression(): ApplyExpressionContext | null {
        return this.getRuleContext(0, ApplyExpressionContext);
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_groupbyTrafo;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterGroupbyTrafo) {
             listener.enterGroupbyTrafo(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitGroupbyTrafo) {
             listener.exitGroupbyTrafo(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitGroupbyTrafo) {
            return visitor.visitGroupbyTrafo(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupByListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.LPAREN, 0)!;
    }
    public groupbyElement(): GroupbyElementContext[];
    public groupbyElement(i: number): GroupbyElementContext | null;
    public groupbyElement(i?: number): GroupbyElementContext[] | GroupbyElementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(GroupbyElementContext);
        }

        return this.getRuleContext(i, GroupbyElementContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.RPAREN, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OData4LiteParser.COMMA);
    	} else {
    		return this.getToken(OData4LiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_groupByList;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterGroupByList) {
             listener.enterGroupByList(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitGroupByList) {
             listener.exitGroupByList(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitGroupByList) {
            return visitor.visitGroupByList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupbyElementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public groupingProperty(): GroupingPropertyContext {
        return this.getRuleContext(0, GroupingPropertyContext)!;
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_groupbyElement;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterGroupbyElement) {
             listener.enterGroupbyElement(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitGroupbyElement) {
             listener.exitGroupbyElement(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitGroupbyElement) {
            return visitor.visitGroupbyElement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupingPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public property(): PropertyContext | null {
        return this.getRuleContext(0, PropertyContext);
    }
    public pathPrefix(): PathPrefixContext | null {
        return this.getRuleContext(0, PathPrefixContext);
    }
    public FWD_SLASH(): antlr.TerminalNode[];
    public FWD_SLASH(i: number): antlr.TerminalNode | null;
    public FWD_SLASH(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OData4LiteParser.FWD_SLASH);
    	} else {
    		return this.getToken(OData4LiteParser.FWD_SLASH, i);
    	}
    }
    public qualifiedName(): QualifiedNameContext[];
    public qualifiedName(i: number): QualifiedNameContext | null;
    public qualifiedName(i?: number): QualifiedNameContext[] | QualifiedNameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QualifiedNameContext);
        }

        return this.getRuleContext(i, QualifiedNameContext);
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_groupingProperty;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterGroupingProperty) {
             listener.enterGroupingProperty(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitGroupingProperty) {
             listener.exitGroupingProperty(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitGroupingProperty) {
            return visitor.visitGroupingProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PathPrefixContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext[];
    public qualifiedName(i: number): QualifiedNameContext | null;
    public qualifiedName(i?: number): QualifiedNameContext[] | QualifiedNameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QualifiedNameContext);
        }

        return this.getRuleContext(i, QualifiedNameContext);
    }
    public FWD_SLASH(): antlr.TerminalNode[];
    public FWD_SLASH(i: number): antlr.TerminalNode | null;
    public FWD_SLASH(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OData4LiteParser.FWD_SLASH);
    	} else {
    		return this.getToken(OData4LiteParser.FWD_SLASH, i);
    	}
    }
    public property(): PropertyContext[];
    public property(i: number): PropertyContext | null;
    public property(i?: number): PropertyContext[] | PropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PropertyContext);
        }

        return this.getRuleContext(i, PropertyContext);
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_pathPrefix;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterPathPrefix) {
             listener.enterPathPrefix(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitPathPrefix) {
             listener.exitPathPrefix(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitPathPrefix) {
            return visitor.visitPathPrefix(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FilterTrafoContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FILTER(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.FILTER, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.LPAREN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.RPAREN, 0)!;
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_filterTrafo;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterFilterTrafo) {
             listener.enterFilterTrafo(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitFilterTrafo) {
             listener.exitFilterTrafo(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitFilterTrafo) {
            return visitor.visitFilterTrafo(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AggregateTrafoContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public AGGREGATE(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.AGGREGATE, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.RPAREN, 0)!;
    }
    public aggregationParam(): AggregationParamContext[];
    public aggregationParam(i: number): AggregationParamContext | null;
    public aggregationParam(i?: number): AggregationParamContext[] | AggregationParamContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AggregationParamContext);
        }

        return this.getRuleContext(i, AggregationParamContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OData4LiteParser.COMMA);
    	} else {
    		return this.getToken(OData4LiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_aggregateTrafo;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterAggregateTrafo) {
             listener.enterAggregateTrafo(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitAggregateTrafo) {
             listener.exitAggregateTrafo(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitAggregateTrafo) {
            return visitor.visitAggregateTrafo(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AggregationParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expandPath(): ExpandPathContext | null {
        return this.getRuleContext(0, ExpandPathContext);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.LPAREN, 0);
    }
    public aggregationExpr(): AggregationExprContext | null {
        return this.getRuleContext(0, AggregationExprContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.RPAREN, 0);
    }
    public aggregatedProperty(): AggregatedPropertyContext | null {
        return this.getRuleContext(0, AggregatedPropertyContext);
    }
    public aggregateWith(): AggregateWithContext | null {
        return this.getRuleContext(0, AggregateWithContext);
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_aggregationParam;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterAggregationParam) {
             listener.enterAggregationParam(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitAggregationParam) {
             listener.exitAggregationParam(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitAggregationParam) {
            return visitor.visitAggregationParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AggregationExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COUNT_OPT(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.COUNT_OPT, 0);
    }
    public dynamicPropertyAssignment(): DynamicPropertyAssignmentContext | null {
        return this.getRuleContext(0, DynamicPropertyAssignmentContext);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public aggregateWith(): AggregateWithContext | null {
        return this.getRuleContext(0, AggregateWithContext);
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_aggregationExpr;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterAggregationExpr) {
             listener.enterAggregationExpr(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitAggregationExpr) {
             listener.exitAggregationExpr(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitAggregationExpr) {
            return visitor.visitAggregationExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AggregateWithContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OP_WITH(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.OP_WITH, 0)!;
    }
    public aggregateMethod(): AggregateMethodContext {
        return this.getRuleContext(0, AggregateMethodContext)!;
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_aggregateWith;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterAggregateWith) {
             listener.enterAggregateWith(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitAggregateWith) {
             listener.exitAggregateWith(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitAggregateWith) {
            return visitor.visitAggregateWith(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AggregateMethodContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SUM_AGGREGATION(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.SUM_AGGREGATION, 0);
    }
    public MIN_AGGREGATION(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.MIN_AGGREGATION, 0);
    }
    public MAX_AGGREGATION(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.MAX_AGGREGATION, 0);
    }
    public AVERAGE_AGGREGATION(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.AVERAGE_AGGREGATION, 0);
    }
    public COUNTDISTINCT_AGGREGATION(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.COUNTDISTINCT_AGGREGATION, 0);
    }
    public qualifiedName(): QualifiedNameContext | null {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_aggregateMethod;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterAggregateMethod) {
             listener.enterAggregateMethod(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitAggregateMethod) {
             listener.exitAggregateMethod(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitAggregateMethod) {
            return visitor.visitAggregateMethod(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AggregatedPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pathPrefix(): PathPrefixContext {
        return this.getRuleContext(0, PathPrefixContext)!;
    }
    public property(): PropertyContext {
        return this.getRuleContext(0, PropertyContext)!;
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_aggregatedProperty;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterAggregatedProperty) {
             listener.enterAggregatedProperty(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitAggregatedProperty) {
             listener.exitAggregatedProperty(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitAggregatedProperty) {
            return visitor.visitAggregatedProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CountContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COUNT_OPT(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.COUNT_OPT, 0)!;
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.EQ, 0)!;
    }
    public LIT_BOOLEAN(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.LIT_BOOLEAN, 0)!;
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_count;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterCount) {
             listener.enterCount(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitCount) {
             listener.exitCount(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitCount) {
            return visitor.visitCount(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OrderbyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ORDERBY_OPT(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.ORDERBY_OPT, 0)!;
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.EQ, 0)!;
    }
    public orderbyItem(): OrderbyItemContext[];
    public orderbyItem(i: number): OrderbyItemContext | null;
    public orderbyItem(i?: number): OrderbyItemContext[] | OrderbyItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OrderbyItemContext);
        }

        return this.getRuleContext(i, OrderbyItemContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OData4LiteParser.COMMA);
    	} else {
    		return this.getToken(OData4LiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_orderby;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterOrderby) {
             listener.enterOrderby(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitOrderby) {
             listener.exitOrderby(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitOrderby) {
            return visitor.visitOrderby(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SkipContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SKIP_COUNT(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.SKIP_COUNT, 0)!;
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.EQ, 0)!;
    }
    public LIT_INTEGER(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.LIT_INTEGER, 0)!;
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_skip;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterSkip) {
             listener.enterSkip(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitSkip) {
             listener.exitSkip(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitSkip) {
            return visitor.visitSkip(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TopContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TOP_OPT(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.TOP_OPT, 0)!;
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.EQ, 0)!;
    }
    public LIT_INTEGER(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.LIT_INTEGER, 0)!;
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_top;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterTop) {
             listener.enterTop(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitTop) {
             listener.exitTop(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitTop) {
            return visitor.visitTop(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EXPAND_OPT(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.EXPAND_OPT, 0)!;
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.EQ, 0)!;
    }
    public expandItemList(): ExpandItemListContext {
        return this.getRuleContext(0, ExpandItemListContext)!;
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_expand;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterExpand) {
             listener.enterExpand(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitExpand) {
             listener.exitExpand(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitExpand) {
            return visitor.visitExpand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SelectContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SELECT_OPT(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.SELECT_OPT, 0)!;
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.EQ, 0)!;
    }
    public IDENTIFIER(): antlr.TerminalNode[];
    public IDENTIFIER(i: number): antlr.TerminalNode | null;
    public IDENTIFIER(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OData4LiteParser.IDENTIFIER);
    	} else {
    		return this.getToken(OData4LiteParser.IDENTIFIER, i);
    	}
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OData4LiteParser.COMMA);
    	} else {
    		return this.getToken(OData4LiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_select;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterSelect) {
             listener.enterSelect(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitSelect) {
             listener.exitSelect(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitSelect) {
            return visitor.visitSelect(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OrderbyItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public DESC(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.DESC, 0);
    }
    public ASC(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.ASC, 0);
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_orderbyItem;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterOrderbyItem) {
             listener.enterOrderbyItem(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitOrderbyItem) {
             listener.exitOrderbyItem(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitOrderbyItem) {
            return visitor.visitOrderbyItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpandItemListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expandItem(): ExpandItemContext[];
    public expandItem(i: number): ExpandItemContext | null;
    public expandItem(i?: number): ExpandItemContext[] | ExpandItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpandItemContext);
        }

        return this.getRuleContext(i, ExpandItemContext);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_expandItemList;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterExpandItemList) {
             listener.enterExpandItemList(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitExpandItemList) {
             listener.exitExpandItemList(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitExpandItemList) {
            return visitor.visitExpandItemList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpandItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.IDENTIFIER, 0)!;
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.LPAREN, 0);
    }
    public expandQueryOptions(): ExpandQueryOptionsContext | null {
        return this.getRuleContext(0, ExpandQueryOptionsContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.RPAREN, 0);
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_expandItem;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterExpandItem) {
             listener.enterExpandItem(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitExpandItem) {
             listener.exitExpandItem(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitExpandItem) {
            return visitor.visitExpandItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpandPathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public property(): PropertyContext[];
    public property(i: number): PropertyContext | null;
    public property(i?: number): PropertyContext[] | PropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PropertyContext);
        }

        return this.getRuleContext(i, PropertyContext);
    }
    public qualifiedName(): QualifiedNameContext[];
    public qualifiedName(i: number): QualifiedNameContext | null;
    public qualifiedName(i?: number): QualifiedNameContext[] | QualifiedNameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QualifiedNameContext);
        }

        return this.getRuleContext(i, QualifiedNameContext);
    }
    public FWD_SLASH(): antlr.TerminalNode[];
    public FWD_SLASH(i: number): antlr.TerminalNode | null;
    public FWD_SLASH(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OData4LiteParser.FWD_SLASH);
    	} else {
    		return this.getToken(OData4LiteParser.FWD_SLASH, i);
    	}
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_expandPath;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterExpandPath) {
             listener.enterExpandPath(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitExpandPath) {
             listener.exitExpandPath(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitExpandPath) {
            return visitor.visitExpandPath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpandQueryOptionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expandQueryOption(): ExpandQueryOptionContext[];
    public expandQueryOption(i: number): ExpandQueryOptionContext | null;
    public expandQueryOption(i?: number): ExpandQueryOptionContext[] | ExpandQueryOptionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpandQueryOptionContext);
        }

        return this.getRuleContext(i, ExpandQueryOptionContext);
    }
    public SEMICOLON(): antlr.TerminalNode[];
    public SEMICOLON(i: number): antlr.TerminalNode | null;
    public SEMICOLON(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OData4LiteParser.SEMICOLON);
    	} else {
    		return this.getToken(OData4LiteParser.SEMICOLON, i);
    	}
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_expandQueryOptions;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterExpandQueryOptions) {
             listener.enterExpandQueryOptions(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitExpandQueryOptions) {
             listener.exitExpandQueryOptions(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitExpandQueryOptions) {
            return visitor.visitExpandQueryOptions(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpandQueryOptionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public filter(): FilterContext | null {
        return this.getRuleContext(0, FilterContext);
    }
    public count(): CountContext | null {
        return this.getRuleContext(0, CountContext);
    }
    public orderby(): OrderbyContext | null {
        return this.getRuleContext(0, OrderbyContext);
    }
    public skip(): SkipContext | null {
        return this.getRuleContext(0, SkipContext);
    }
    public top(): TopContext | null {
        return this.getRuleContext(0, TopContext);
    }
    public expand(): ExpandContext | null {
        return this.getRuleContext(0, ExpandContext);
    }
    public select(): SelectContext | null {
        return this.getRuleContext(0, SelectContext);
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_expandQueryOption;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterExpandQueryOption) {
             listener.enterExpandQueryOption(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitExpandQueryOption) {
             listener.exitExpandQueryOption(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitExpandQueryOption) {
            return visitor.visitExpandQueryOption(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_expression;
    }
    public override copyFrom(ctx: ExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class FunctionExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public functionName(): FunctionNameContext {
        return this.getRuleContext(0, FunctionNameContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.RPAREN, 0)!;
    }
    public expressionList(): ExpressionListContext | null {
        return this.getRuleContext(0, ExpressionListContext);
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterFunctionExpression) {
             listener.enterFunctionExpression(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitFunctionExpression) {
             listener.exitFunctionExpression(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitFunctionExpression) {
            return visitor.visitFunctionExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParenthesisExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.LPAREN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.RPAREN, 0)!;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterParenthesisExpression) {
             listener.enterParenthesisExpression(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitParenthesisExpression) {
             listener.exitParenthesisExpression(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitParenthesisExpression) {
            return visitor.visitParenthesisExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnaryExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public OP_NOT(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.OP_NOT, 0);
    }
    public OP_HAS(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.OP_HAS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.MINUS, 0);
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterUnaryExpression) {
             listener.enterUnaryExpression(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitUnaryExpression) {
             listener.exitUnaryExpression(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitUnaryExpression) {
            return visitor.visitUnaryExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NegativeExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public MINUS(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.MINUS, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterNegativeExpression) {
             listener.enterNegativeExpression(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitNegativeExpression) {
             listener.exitNegativeExpression(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitNegativeExpression) {
            return visitor.visitNegativeExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LiteralExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public primitiveLiteral(): PrimitiveLiteralContext {
        return this.getRuleContext(0, PrimitiveLiteralContext)!;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterLiteralExpression) {
             listener.enterLiteralExpression(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitLiteralExpression) {
             listener.exitLiteralExpression(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitLiteralExpression) {
            return visitor.visitLiteralExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LiteralCollectionExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public primitiveLiteralCollection(): PrimitiveLiteralCollectionContext {
        return this.getRuleContext(0, PrimitiveLiteralCollectionContext)!;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterLiteralCollectionExpression) {
             listener.enterLiteralCollectionExpression(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitLiteralCollectionExpression) {
             listener.exitLiteralCollectionExpression(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitLiteralCollectionExpression) {
            return visitor.visitLiteralCollectionExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FirstMemberExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public firstMemberExpr(): FirstMemberExprContext {
        return this.getRuleContext(0, FirstMemberExprContext)!;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterFirstMemberExpression) {
             listener.enterFirstMemberExpression(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitFirstMemberExpression) {
             listener.exitFirstMemberExpression(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitFirstMemberExpression) {
            return visitor.visitFirstMemberExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AliasExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public parameterAlias(): ParameterAliasContext {
        return this.getRuleContext(0, ParameterAliasContext)!;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterAliasExpression) {
             listener.enterAliasExpression(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitAliasExpression) {
             listener.exitAliasExpression(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitAliasExpression) {
            return visitor.visitAliasExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ModulusExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public OP_MOD(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.OP_MOD, 0)!;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterModulusExpression) {
             listener.enterModulusExpression(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitModulusExpression) {
             listener.exitModulusExpression(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitModulusExpression) {
            return visitor.visitModulusExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MultiplyExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public OP_MUL(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.OP_MUL, 0)!;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterMultiplyExpression) {
             listener.enterMultiplyExpression(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitMultiplyExpression) {
             listener.exitMultiplyExpression(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitMultiplyExpression) {
            return visitor.visitMultiplyExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DivisionExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public OP_DIV(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.OP_DIV, 0)!;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterDivisionExpression) {
             listener.enterDivisionExpression(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitDivisionExpression) {
             listener.exitDivisionExpression(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitDivisionExpression) {
            return visitor.visitDivisionExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SubtractExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public OP_SUB(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.OP_SUB, 0)!;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterSubtractExpression) {
             listener.enterSubtractExpression(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitSubtractExpression) {
             listener.exitSubtractExpression(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitSubtractExpression) {
            return visitor.visitSubtractExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AddExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public OP_ADD(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.OP_ADD, 0)!;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterAddExpression) {
             listener.enterAddExpression(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitAddExpression) {
             listener.exitAddExpression(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitAddExpression) {
            return visitor.visitAddExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BinaryExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public OP_EQ(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.OP_EQ, 0);
    }
    public OP_NE(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.OP_NE, 0);
    }
    public OP_GT(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.OP_GT, 0);
    }
    public OP_GE(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.OP_GE, 0);
    }
    public OP_LT(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.OP_LT, 0);
    }
    public OP_LE(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.OP_LE, 0);
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterBinaryExpression) {
             listener.enterBinaryExpression(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitBinaryExpression) {
             listener.exitBinaryExpression(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitBinaryExpression) {
            return visitor.visitBinaryExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LogicalExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public OP_AND(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.OP_AND, 0);
    }
    public OP_OR(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.OP_OR, 0);
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterLogicalExpression) {
             listener.enterLogicalExpression(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitLogicalExpression) {
             listener.exitLogicalExpression(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitLogicalExpression) {
            return visitor.visitLogicalExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class InExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public OP_IN(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.OP_IN, 0)!;
    }
    public primitiveLiteralCollection(): PrimitiveLiteralCollectionContext | null {
        return this.getRuleContext(0, PrimitiveLiteralCollectionContext);
    }
    public parameterAlias(): ParameterAliasContext | null {
        return this.getRuleContext(0, ParameterAliasContext);
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterInExpression) {
             listener.enterInExpression(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitInExpression) {
             listener.exitInExpression(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitInExpression) {
            return visitor.visitInExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OData4LiteParser.COMMA);
    	} else {
    		return this.getToken(OData4LiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_expressionList;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterExpressionList) {
             listener.enterExpressionList(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitExpressionList) {
             listener.exitExpressionList(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitExpressionList) {
            return visitor.visitExpressionList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public K_CONTAINS(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.K_CONTAINS, 0);
    }
    public K_ENDSWITH(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.K_ENDSWITH, 0);
    }
    public K_STARTSWITH(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.K_STARTSWITH, 0);
    }
    public K_LENGTH(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.K_LENGTH, 0);
    }
    public K_INDEXOF(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.K_INDEXOF, 0);
    }
    public K_SUBSTRING(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.K_SUBSTRING, 0);
    }
    public K_TOLOWER(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.K_TOLOWER, 0);
    }
    public K_TOUPPER(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.K_TOUPPER, 0);
    }
    public K_TRIM(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.K_TRIM, 0);
    }
    public CONCAT(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.CONCAT, 0);
    }
    public K_YEAR(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.K_YEAR, 0);
    }
    public K_MONTH(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.K_MONTH, 0);
    }
    public K_DAY(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.K_DAY, 0);
    }
    public K_HOUR(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.K_HOUR, 0);
    }
    public K_MINUTE(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.K_MINUTE, 0);
    }
    public K_SECOND(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.K_SECOND, 0);
    }
    public K_FRACTIONALSECONDS(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.K_FRACTIONALSECONDS, 0);
    }
    public K_DATE(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.K_DATE, 0);
    }
    public K_TIME(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.K_TIME, 0);
    }
    public K_TOTALOFFSETMINUTES(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.K_TOTALOFFSETMINUTES, 0);
    }
    public K_NOW(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.K_NOW, 0);
    }
    public K_MINDATETIME(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.K_MINDATETIME, 0);
    }
    public K_MAXDATETIME(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.K_MAXDATETIME, 0);
    }
    public K_ROUND(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.K_ROUND, 0);
    }
    public K_FLOOR(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.K_FLOOR, 0);
    }
    public K_CEILING(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.K_CEILING, 0);
    }
    public K_CAST(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.K_CAST, 0);
    }
    public K_ISOF(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.K_ISOF, 0);
    }
    public K_GEODISTANCE(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.K_GEODISTANCE, 0);
    }
    public K_GEOLENGTH(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.K_GEOLENGTH, 0);
    }
    public K_GEOINTERSECTS(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.K_GEOINTERSECTS, 0);
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_functionName;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterFunctionName) {
             listener.enterFunctionName(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitFunctionName) {
             listener.exitFunctionName(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitFunctionName) {
            return visitor.visitFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FirstMemberExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public memberExpr(): MemberExprContext {
        return this.getRuleContext(0, MemberExprContext)!;
    }
    public lambdaPredicatePrefixExpr(): LambdaPredicatePrefixExprContext | null {
        return this.getRuleContext(0, LambdaPredicatePrefixExprContext);
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_firstMemberExpr;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterFirstMemberExpr) {
             listener.enterFirstMemberExpr(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitFirstMemberExpr) {
             listener.exitFirstMemberExpr(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitFirstMemberExpr) {
            return visitor.visitFirstMemberExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LambdaPredicatePrefixExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IT_OPT(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.IT_OPT, 0)!;
    }
    public FWD_SLASH(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.FWD_SLASH, 0)!;
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_lambdaPredicatePrefixExpr;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterLambdaPredicatePrefixExpr) {
             listener.enterLambdaPredicatePrefixExpr(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitLambdaPredicatePrefixExpr) {
             listener.exitLambdaPredicatePrefixExpr(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitLambdaPredicatePrefixExpr) {
            return visitor.visitLambdaPredicatePrefixExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MemberExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public propertyPathExpr(): PropertyPathExprContext {
        return this.getRuleContext(0, PropertyPathExprContext)!;
    }
    public qualifiedName(): QualifiedNameContext | null {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    public FWD_SLASH(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.FWD_SLASH, 0);
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_memberExpr;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterMemberExpr) {
             listener.enterMemberExpr(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitMemberExpr) {
             listener.exitMemberExpr(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitMemberExpr) {
            return visitor.visitMemberExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PropertyPathExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public property(): PropertyContext {
        return this.getRuleContext(0, PropertyContext)!;
    }
    public singleNavigationExpr(): SingleNavigationExprContext | null {
        return this.getRuleContext(0, SingleNavigationExprContext);
    }
    public collectionPathExpr(): CollectionPathExprContext | null {
        return this.getRuleContext(0, CollectionPathExprContext);
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_propertyPathExpr;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterPropertyPathExpr) {
             listener.enterPropertyPathExpr(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitPropertyPathExpr) {
             listener.exitPropertyPathExpr(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitPropertyPathExpr) {
            return visitor.visitPropertyPathExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CollectionNavigationExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public keyPredicate(): KeyPredicateContext | null {
        return this.getRuleContext(0, KeyPredicateContext);
    }
    public collectionPathExpr(): CollectionPathExprContext | null {
        return this.getRuleContext(0, CollectionPathExprContext);
    }
    public FWD_SLASH(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.FWD_SLASH, 0);
    }
    public qualifiedName(): QualifiedNameContext | null {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    public singleNavigationExpr(): SingleNavigationExprContext | null {
        return this.getRuleContext(0, SingleNavigationExprContext);
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_collectionNavigationExpr;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterCollectionNavigationExpr) {
             listener.enterCollectionNavigationExpr(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitCollectionNavigationExpr) {
             listener.exitCollectionNavigationExpr(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitCollectionNavigationExpr) {
            return visitor.visitCollectionNavigationExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SingleNavigationExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FWD_SLASH(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.FWD_SLASH, 0)!;
    }
    public memberExpr(): MemberExprContext | null {
        return this.getRuleContext(0, MemberExprContext);
    }
    public parameterAlias(): ParameterAliasContext | null {
        return this.getRuleContext(0, ParameterAliasContext);
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_singleNavigationExpr;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterSingleNavigationExpr) {
             listener.enterSingleNavigationExpr(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitSingleNavigationExpr) {
             listener.exitSingleNavigationExpr(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitSingleNavigationExpr) {
            return visitor.visitSingleNavigationExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CollectionPathExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COUNT_OPT(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.COUNT_OPT, 0);
    }
    public FWD_SLASH(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.FWD_SLASH, 0);
    }
    public anyExpr(): AnyExprContext | null {
        return this.getRuleContext(0, AnyExprContext);
    }
    public allExpr(): AllExprContext | null {
        return this.getRuleContext(0, AllExprContext);
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_collectionPathExpr;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterCollectionPathExpr) {
             listener.enterCollectionPathExpr(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitCollectionPathExpr) {
             listener.exitCollectionPathExpr(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitCollectionPathExpr) {
            return visitor.visitCollectionPathExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AnyExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ANY(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.ANY, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.RPAREN, 0)!;
    }
    public lambdaParameterIdentifier(): LambdaParameterIdentifierContext | null {
        return this.getRuleContext(0, LambdaParameterIdentifierContext);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.COLON, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_anyExpr;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterAnyExpr) {
             listener.enterAnyExpr(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitAnyExpr) {
             listener.exitAnyExpr(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitAnyExpr) {
            return visitor.visitAnyExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AllExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ALL(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.ALL, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.LPAREN, 0)!;
    }
    public lambdaParameterIdentifier(): LambdaParameterIdentifierContext {
        return this.getRuleContext(0, LambdaParameterIdentifierContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.COLON, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.RPAREN, 0)!;
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_allExpr;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterAllExpr) {
             listener.enterAllExpr(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitAllExpr) {
             listener.exitAllExpr(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitAllExpr) {
            return visitor.visitAllExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LambdaParameterIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_lambdaParameterIdentifier;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterLambdaParameterIdentifier) {
             listener.enterLambdaParameterIdentifier(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitLambdaParameterIdentifier) {
             listener.exitLambdaParameterIdentifier(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitLambdaParameterIdentifier) {
            return visitor.visitLambdaParameterIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrimitiveLiteralCollectionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBRACKET(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.LBRACKET, 0)!;
    }
    public RBRACKET(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.RBRACKET, 0)!;
    }
    public primitiveLiteral(): PrimitiveLiteralContext[];
    public primitiveLiteral(i: number): PrimitiveLiteralContext | null;
    public primitiveLiteral(i?: number): PrimitiveLiteralContext[] | PrimitiveLiteralContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PrimitiveLiteralContext);
        }

        return this.getRuleContext(i, PrimitiveLiteralContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OData4LiteParser.COMMA);
    	} else {
    		return this.getToken(OData4LiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_primitiveLiteralCollection;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterPrimitiveLiteralCollection) {
             listener.enterPrimitiveLiteralCollection(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitPrimitiveLiteralCollection) {
             listener.exitPrimitiveLiteralCollection(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitPrimitiveLiteralCollection) {
            return visitor.visitPrimitiveLiteralCollection(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrimitiveLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NULL(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.NULL, 0);
    }
    public LIT_BOOLEAN(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.LIT_BOOLEAN, 0);
    }
    public LIT_DATE(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.LIT_DATE, 0);
    }
    public LIT_DATETIME(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.LIT_DATETIME, 0);
    }
    public LIT_TIME_OF_DAY(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.LIT_TIME_OF_DAY, 0);
    }
    public LIT_INTEGER(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.LIT_INTEGER, 0);
    }
    public LIT_DOUBLE(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.LIT_DOUBLE, 0);
    }
    public LIT_STRING(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.LIT_STRING, 0);
    }
    public LIT_DAY_TIME_DURATION(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.LIT_DAY_TIME_DURATION, 0);
    }
    public enum(): EnumContext | null {
        return this.getRuleContext(0, EnumContext);
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_primitiveLiteral;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterPrimitiveLiteral) {
             listener.enterPrimitiveLiteral(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitPrimitiveLiteral) {
             listener.exitPrimitiveLiteral(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitPrimitiveLiteral) {
            return visitor.visitPrimitiveLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedEnumTypeName(): QualifiedEnumTypeNameContext {
        return this.getRuleContext(0, QualifiedEnumTypeNameContext)!;
    }
    public SQUOTE(): antlr.TerminalNode[];
    public SQUOTE(i: number): antlr.TerminalNode | null;
    public SQUOTE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OData4LiteParser.SQUOTE);
    	} else {
    		return this.getToken(OData4LiteParser.SQUOTE, i);
    	}
    }
    public enumValues(): EnumValuesContext {
        return this.getRuleContext(0, EnumValuesContext)!;
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_enum;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterEnum) {
             listener.enterEnum(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitEnum) {
             listener.exitEnum(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitEnum) {
            return visitor.visitEnum(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QualifiedEnumTypeNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public namespace(): NamespaceContext {
        return this.getRuleContext(0, NamespaceContext)!;
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(OData4LiteParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_qualifiedEnumTypeName;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterQualifiedEnumTypeName) {
             listener.enterQualifiedEnumTypeName(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitQualifiedEnumTypeName) {
             listener.exitQualifiedEnumTypeName(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitQualifiedEnumTypeName) {
            return visitor.visitQualifiedEnumTypeName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumValuesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public enumValue(): EnumValueContext[];
    public enumValue(i: number): EnumValueContext | null;
    public enumValue(i?: number): EnumValueContext[] | EnumValueContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EnumValueContext);
        }

        return this.getRuleContext(i, EnumValueContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OData4LiteParser.COMMA);
    	} else {
    		return this.getToken(OData4LiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_enumValues;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterEnumValues) {
             listener.enterEnumValues(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitEnumValues) {
             listener.exitEnumValues(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitEnumValues) {
            return visitor.visitEnumValues(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LIT_INTEGER(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.LIT_INTEGER, 0);
    }
    public IDENTIFIER(): antlr.TerminalNode[];
    public IDENTIFIER(i: number): antlr.TerminalNode | null;
    public IDENTIFIER(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OData4LiteParser.IDENTIFIER);
    	} else {
    		return this.getToken(OData4LiteParser.IDENTIFIER, i);
    	}
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(OData4LiteParser.DOT, 0);
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_enumValue;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterEnumValue) {
             listener.enterEnumValue(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitEnumValue) {
             listener.exitEnumValue(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitEnumValue) {
            return visitor.visitEnumValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NamespaceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode[];
    public IDENTIFIER(i: number): antlr.TerminalNode | null;
    public IDENTIFIER(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OData4LiteParser.IDENTIFIER);
    	} else {
    		return this.getToken(OData4LiteParser.IDENTIFIER, i);
    	}
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OData4LiteParser.DOT);
    	} else {
    		return this.getToken(OData4LiteParser.DOT, i);
    	}
    }
    public override get ruleIndex(): number {
        return OData4LiteParser.RULE_namespace;
    }
    public override enterRule(listener: OData4LiteListener): void {
        if(listener.enterNamespace) {
             listener.enterNamespace(this);
        }
    }
    public override exitRule(listener: OData4LiteListener): void {
        if(listener.exitNamespace) {
             listener.exitNamespace(this);
        }
    }
    public override accept<Result>(visitor: OData4LiteVisitor<Result>): Result | null {
        if (visitor.visitNamespace) {
            return visitor.visitNamespace(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
