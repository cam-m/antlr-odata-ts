// Generated from src/grammar/OData4Lite.g4 by ANTLR 4.9.0-SNAPSHOT


// @ts-nocheck
import { Schema } from './lang/edm/Schema';


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { OData4LiteListener } from "./OData4LiteListener";
import { OData4LiteVisitor } from "./OData4LiteVisitor";


export class OData4LiteParser extends Parser {
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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"odataRelativeURI", "resourcePath", "functionImportCall", "functionParameters", 
		"functionParameter", "functionParameterName", "collectionNavigation", 
		"singleNavigation", "propertyPath", "collectionPath", "singlePath", "property", 
		"qualifiedName", "keyPredicate", "simpleKey", "compoundKey", "queryOptions", 
		"queryOption", "systemQueryOption", "dynamicPropertyAssignment", "aliasAndValue", 
		"parameterAlias", "parameterValue", "filter", "apply", "applyExpression", 
		"applyTrafo", "computeTrafo", "computeExpression", "concatTrafo", "groupbyTrafo", 
		"groupByList", "groupbyElement", "groupingProperty", "pathPrefix", "filterTrafo", 
		"aggregateTrafo", "aggregationParam", "aggregationExpr", "aggregateWith", 
		"aggregateMethod", "aggregatedProperty", "count", "orderby", "skip", "top", 
		"expand", "select", "orderbyItem", "expandItemList", "expandItem", "expandPath", 
		"expandQueryOptions", "expandQueryOption", "expression", "expressionList", 
		"functionName", "firstMemberExpr", "lambdaPredicatePrefixExpr", "memberExpr", 
		"propertyPathExpr", "collectionNavigationExpr", "singleNavigationExpr", 
		"collectionPathExpr", "anyExpr", "allExpr", "lambdaParameterIdentifier", 
		"primitiveLiteralCollection", "primitiveLiteral", "enum", "qualifiedEnumTypeName", 
		"enumValues", "enumValue", "namespace",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'@'", 
		"'.'", "'$'", "'&'", "';'", "':'", "'-'", "'/'", "'?'", "'''", "'\"'", 
		"'='", "','", "')'", "'('", "']'", "'['",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "SELECT_OPT", "APPLY_OPT", "EXPAND_OPT", "FILTER_OPT", "TOP_OPT", 
		"SKIP_COUNT", "COUNT_OPT", "ORDERBY_OPT", "REF_OPT", "VALUE_OPT", "IT_OPT", 
		"AGGREGATE", "TOPCOUNT", "TOPSUM", "TOPPERCENT", "BOTTOMCOUNT", "BOTTOMSUM", 
		"BOTTOMPERCENT", "IDENTITY", "CONCAT", "GROUPBY", "COMPUTE", "FILTER", 
		"EXPAND", "ALL", "ANY", "ASC", "DESC", "SUM_AGGREGATION", "MIN_AGGREGATION", 
		"MAX_AGGREGATION", "AVERAGE_AGGREGATION", "COUNTDISTINCT_AGGREGATION", 
		"OP_EQ", "OP_NE", "OP_GT", "OP_GE", "OP_LT", "OP_LE", "OP_HAS", "OP_AS", 
		"OP_WITH", "OP_FROM", "OP_IN", "OP_AND", "OP_OR", "OP_NOT", "OP_ADD", 
		"OP_SUB", "OP_DIV", "OP_MUL", "OP_MOD", "K_CONTAINS", "K_ENDSWITH", "K_STARTSWITH", 
		"K_LENGTH", "K_INDEXOF", "K_SUBSTRING", "K_TOLOWER", "K_TOUPPER", "K_TRIM", 
		"K_YEAR", "K_MONTH", "K_DAY", "K_HOUR", "K_MINUTE", "K_SECOND", "K_FRACTIONALSECONDS", 
		"K_DATE", "K_TIME", "K_TOTALOFFSETMINUTES", "K_NOW", "K_MINDATETIME", 
		"K_MAXDATETIME", "K_ROUND", "K_FLOOR", "K_CEILING", "K_CAST", "K_ISOF", 
		"K_GEODISTANCE", "K_GEOLENGTH", "K_GEOINTERSECTS", "AT_SIGN", "DOT", "DOLLAR", 
		"AMPERSAND", "SEMICOLON", "COLON", "MINUS", "FWD_SLASH", "QUESTION", "SQUOTE", 
		"DQUOTE", "EQ", "COMMA", "RPAREN", "LPAREN", "RBRACKET", "LBRACKET", "NULL", 
		"LIT_DATETIME", "LIT_DATE", "LIT_TIME_OF_DAY", "LIT_DAY_TIME_DURATION", 
		"LIT_BOOLEAN", "LIT_STRING", "LIT_INTEGER", "LIT_DOUBLE", "IDENTIFIER", 
		"UNEXPECTED",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(OData4LiteParser._LITERAL_NAMES, OData4LiteParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return OData4LiteParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "OData4Lite.g4"; }

	// @Override
	public get ruleNames(): string[] { return OData4LiteParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return OData4LiteParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}


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

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(OData4LiteParser._ATN, this);
	}
	// @RuleVersion(0)
	public odataRelativeURI(): OdataRelativeURIContext {
		let _localctx: OdataRelativeURIContext = new OdataRelativeURIContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, OData4LiteParser.RULE_odataRelativeURI);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 148;
			this.resourcePath();
			this.state = 151;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === OData4LiteParser.QUESTION) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resourcePath(): ResourcePathContext {
		let _localctx: ResourcePathContext = new ResourcePathContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, OData4LiteParser.RULE_resourcePath);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			_localctx._id = this.match(OData4LiteParser.IDENTIFIER);
			this.state = 159;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 156;
				this.functionImportCall((_localctx._id != null ? _localctx._id.text : undefined));
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionImportCall(identifier: string): FunctionImportCallContext {
		let _localctx: FunctionImportCallContext = new FunctionImportCallContext(this._ctx, this.state, identifier);
		this.enterRule(_localctx, 4, OData4LiteParser.RULE_functionImportCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			if (!(this.isUnboundFunctionName(_localctx.identifier))) {
				throw this.createFailedPredicateException("this.isUnboundFunctionName($identifier)");
			}
			this.state = 162;
			this.functionParameters();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionParameters(): FunctionParametersContext {
		let _localctx: FunctionParametersContext = new FunctionParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, OData4LiteParser.RULE_functionParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			this.match(OData4LiteParser.LPAREN);
			this.state = 173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === OData4LiteParser.IDENTIFIER) {
				{
				this.state = 165;
				this.functionParameter();
				this.state = 170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === OData4LiteParser.COMMA) {
					{
					{
					this.state = 166;
					this.match(OData4LiteParser.COMMA);
					this.state = 167;
					this.functionParameter();
					}
					}
					this.state = 172;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 175;
			this.match(OData4LiteParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionParameter(): FunctionParameterContext {
		let _localctx: FunctionParameterContext = new FunctionParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, OData4LiteParser.RULE_functionParameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 177;
			this.functionParameterName();
			this.state = 178;
			this.match(OData4LiteParser.EQ);
			this.state = 181;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
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
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionParameterName(): FunctionParameterNameContext {
		let _localctx: FunctionParameterNameContext = new FunctionParameterNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, OData4LiteParser.RULE_functionParameterName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 183;
			this.match(OData4LiteParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public collectionNavigation(): CollectionNavigationContext {
		let _localctx: CollectionNavigationContext = new CollectionNavigationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, OData4LiteParser.RULE_collectionNavigation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
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
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case OData4LiteParser.LPAREN:
				{
				this.state = 189;
				this.keyPredicate();
				this.state = 191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === OData4LiteParser.FWD_SLASH) {
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
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public singleNavigation(): SingleNavigationContext {
		let _localctx: SingleNavigationContext = new SingleNavigationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, OData4LiteParser.RULE_singleNavigation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
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
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyPath(): PropertyPathContext {
		let _localctx: PropertyPathContext = new PropertyPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, OData4LiteParser.RULE_propertyPath);
		try {
			this.state = 220;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 210;
				this.property();
				this.state = 211;
				this.collectionNavigation();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 213;
				this.property();
				this.state = 214;
				this.singleNavigation();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 216;
				this.property();
				this.state = 217;
				this.singlePath();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 219;
				this.property();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public collectionPath(): CollectionPathContext {
		let _localctx: CollectionPathContext = new CollectionPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, OData4LiteParser.RULE_collectionPath);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			this.count();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public singlePath(): SinglePathContext {
		let _localctx: SinglePathContext = new SinglePathContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, OData4LiteParser.RULE_singlePath);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this.match(OData4LiteParser.VALUE_OPT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public property(): PropertyContext {
		let _localctx: PropertyContext = new PropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, OData4LiteParser.RULE_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this.match(OData4LiteParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, OData4LiteParser.RULE_qualifiedName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 228;
			this.namespace();
			this.state = 229;
			this.match(OData4LiteParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keyPredicate(): KeyPredicateContext {
		let _localctx: KeyPredicateContext = new KeyPredicateContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, OData4LiteParser.RULE_keyPredicate);
		try {
			this.state = 233;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 231;
				this.simpleKey();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 232;
				this.compoundKey();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleKey(): SimpleKeyContext {
		let _localctx: SimpleKeyContext = new SimpleKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, OData4LiteParser.RULE_simpleKey);
		try {
			this.enterOuterAlt(_localctx, 1);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compoundKey(): CompoundKeyContext {
		let _localctx: CompoundKeyContext = new CompoundKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, OData4LiteParser.RULE_compoundKey);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
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
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === OData4LiteParser.COMMA) {
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
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 252;
			this.match(OData4LiteParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryOptions(): QueryOptionsContext {
		let _localctx: QueryOptionsContext = new QueryOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, OData4LiteParser.RULE_queryOptions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 254;
			this.queryOption();
			this.state = 259;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === OData4LiteParser.AMPERSAND) {
				{
				{
				this.state = 255;
				this.match(OData4LiteParser.AMPERSAND);
				this.state = 256;
				this.queryOption();
				}
				}
				this.state = 261;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryOption(): QueryOptionContext {
		let _localctx: QueryOptionContext = new QueryOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, OData4LiteParser.RULE_queryOption);
		try {
			this.state = 264;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case OData4LiteParser.SELECT_OPT:
			case OData4LiteParser.APPLY_OPT:
			case OData4LiteParser.EXPAND_OPT:
			case OData4LiteParser.FILTER_OPT:
			case OData4LiteParser.TOP_OPT:
			case OData4LiteParser.SKIP_COUNT:
			case OData4LiteParser.COUNT_OPT:
			case OData4LiteParser.ORDERBY_OPT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 262;
				this.systemQueryOption();
				}
				break;
			case OData4LiteParser.AT_SIGN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 263;
				this.aliasAndValue();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public systemQueryOption(): SystemQueryOptionContext {
		let _localctx: SystemQueryOptionContext = new SystemQueryOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, OData4LiteParser.RULE_systemQueryOption);
		try {
			this.state = 274;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case OData4LiteParser.FILTER_OPT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 266;
				this.filter();
				}
				break;
			case OData4LiteParser.COUNT_OPT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 267;
				this.count();
				}
				break;
			case OData4LiteParser.TOP_OPT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 268;
				this.top();
				}
				break;
			case OData4LiteParser.SKIP_COUNT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 269;
				this.skip();
				}
				break;
			case OData4LiteParser.ORDERBY_OPT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 270;
				this.orderby();
				}
				break;
			case OData4LiteParser.EXPAND_OPT:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 271;
				this.expand();
				}
				break;
			case OData4LiteParser.SELECT_OPT:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 272;
				this.select();
				}
				break;
			case OData4LiteParser.APPLY_OPT:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 273;
				this.apply();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dynamicPropertyAssignment(): DynamicPropertyAssignmentContext {
		let _localctx: DynamicPropertyAssignmentContext = new DynamicPropertyAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, OData4LiteParser.RULE_dynamicPropertyAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 276;
			this.match(OData4LiteParser.OP_AS);
			this.state = 277;
			this.match(OData4LiteParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aliasAndValue(): AliasAndValueContext {
		let _localctx: AliasAndValueContext = new AliasAndValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, OData4LiteParser.RULE_aliasAndValue);
		try {
			this.enterOuterAlt(_localctx, 1);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterAlias(): ParameterAliasContext {
		let _localctx: ParameterAliasContext = new ParameterAliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, OData4LiteParser.RULE_parameterAlias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 283;
			this.match(OData4LiteParser.AT_SIGN);
			this.state = 284;
			this.match(OData4LiteParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterValue(): ParameterValueContext {
		let _localctx: ParameterValueContext = new ParameterValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, OData4LiteParser.RULE_parameterValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 286;
			this.primitiveLiteral();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public filter(): FilterContext {
		let _localctx: FilterContext = new FilterContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, OData4LiteParser.RULE_filter);
		try {
			this.enterOuterAlt(_localctx, 1);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public apply(): ApplyContext {
		let _localctx: ApplyContext = new ApplyContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, OData4LiteParser.RULE_apply);
		try {
			this.enterOuterAlt(_localctx, 1);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public applyExpression(): ApplyExpressionContext {
		let _localctx: ApplyExpressionContext = new ApplyExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, OData4LiteParser.RULE_applyExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 296;
			this.applyTrafo();
			this.state = 301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === OData4LiteParser.FWD_SLASH) {
				{
				{
				this.state = 297;
				this.match(OData4LiteParser.FWD_SLASH);
				this.state = 298;
				this.applyTrafo();
				}
				}
				this.state = 303;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public applyTrafo(): ApplyTrafoContext {
		let _localctx: ApplyTrafoContext = new ApplyTrafoContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, OData4LiteParser.RULE_applyTrafo);
		try {
			this.state = 309;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case OData4LiteParser.COMPUTE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 304;
				this.computeTrafo();
				}
				break;
			case OData4LiteParser.CONCAT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 305;
				this.concatTrafo();
				}
				break;
			case OData4LiteParser.GROUPBY:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 306;
				this.groupbyTrafo();
				}
				break;
			case OData4LiteParser.AGGREGATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 307;
				this.aggregateTrafo();
				}
				break;
			case OData4LiteParser.FILTER:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 308;
				this.filterTrafo();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public computeTrafo(): ComputeTrafoContext {
		let _localctx: ComputeTrafoContext = new ComputeTrafoContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, OData4LiteParser.RULE_computeTrafo);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 311;
			this.match(OData4LiteParser.COMPUTE);
			this.state = 312;
			this.match(OData4LiteParser.LPAREN);
			this.state = 321;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
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
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === OData4LiteParser.COMMA);
				}
				break;
			}
			this.state = 323;
			this.match(OData4LiteParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public computeExpression(): ComputeExpressionContext {
		let _localctx: ComputeExpressionContext = new ComputeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, OData4LiteParser.RULE_computeExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 325;
			this.expression(0);
			this.state = 326;
			this.dynamicPropertyAssignment();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public concatTrafo(): ConcatTrafoContext {
		let _localctx: ConcatTrafoContext = new ConcatTrafoContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, OData4LiteParser.RULE_concatTrafo);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 328;
			this.match(OData4LiteParser.CONCAT);
			this.state = 329;
			this.match(OData4LiteParser.LPAREN);
			this.state = 338;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
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
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === OData4LiteParser.COMMA);
				}
				break;
			}
			this.state = 340;
			this.match(OData4LiteParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupbyTrafo(): GroupbyTrafoContext {
		let _localctx: GroupbyTrafoContext = new GroupbyTrafoContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, OData4LiteParser.RULE_groupbyTrafo);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 342;
			this.match(OData4LiteParser.GROUPBY);
			this.state = 343;
			this.match(OData4LiteParser.LPAREN);
			this.state = 344;
			this.groupByList();
			this.state = 347;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === OData4LiteParser.COMMA) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupByList(): GroupByListContext {
		let _localctx: GroupByListContext = new GroupByListContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, OData4LiteParser.RULE_groupByList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 351;
			this.match(OData4LiteParser.LPAREN);
			this.state = 352;
			this.groupbyElement();
			this.state = 357;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === OData4LiteParser.COMMA) {
				{
				{
				this.state = 353;
				this.match(OData4LiteParser.COMMA);
				this.state = 354;
				this.groupbyElement();
				}
				}
				this.state = 359;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 360;
			this.match(OData4LiteParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupbyElement(): GroupbyElementContext {
		let _localctx: GroupbyElementContext = new GroupbyElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, OData4LiteParser.RULE_groupbyElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 362;
			this.groupingProperty();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupingProperty(): GroupingPropertyContext {
		let _localctx: GroupingPropertyContext = new GroupingPropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, OData4LiteParser.RULE_groupingProperty);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 365;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 364;
				this.pathPrefix();
				}
				break;
			}
			this.state = 376;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 367;
				this.property();
				this.state = 372;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === OData4LiteParser.FWD_SLASH) {
					{
					{
					this.state = 368;
					this.match(OData4LiteParser.FWD_SLASH);
					this.state = 369;
					this.qualifiedName();
					}
					}
					this.state = 374;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pathPrefix(): PathPrefixContext {
		let _localctx: PathPrefixContext = new PathPrefixContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, OData4LiteParser.RULE_pathPrefix);
		try {
			let _alt: number;
			this.state = 406;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 378;
				this.qualifiedName();
				this.state = 379;
				this.match(OData4LiteParser.FWD_SLASH);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 388;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 381;
						this.property();
						this.state = 384;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
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
						throw new NoViableAltException(this);
					}
					this.state = 390;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 392;
				this.qualifiedName();
				this.state = 393;
				this.match(OData4LiteParser.FWD_SLASH);
				this.state = 403;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 394;
						this.property();
						this.state = 397;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
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
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public filterTrafo(): FilterTrafoContext {
		let _localctx: FilterTrafoContext = new FilterTrafoContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, OData4LiteParser.RULE_filterTrafo);
		try {
			this.enterOuterAlt(_localctx, 1);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aggregateTrafo(): AggregateTrafoContext {
		let _localctx: AggregateTrafoContext = new AggregateTrafoContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, OData4LiteParser.RULE_aggregateTrafo);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 413;
			this.match(OData4LiteParser.AGGREGATE);
			this.state = 414;
			this.match(OData4LiteParser.LPAREN);
			this.state = 423;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << OData4LiteParser.COUNT_OPT) | (1 << OData4LiteParser.IT_OPT) | (1 << OData4LiteParser.CONCAT))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (OData4LiteParser.OP_HAS - 40)) | (1 << (OData4LiteParser.OP_NOT - 40)) | (1 << (OData4LiteParser.K_CONTAINS - 40)) | (1 << (OData4LiteParser.K_ENDSWITH - 40)) | (1 << (OData4LiteParser.K_STARTSWITH - 40)) | (1 << (OData4LiteParser.K_LENGTH - 40)) | (1 << (OData4LiteParser.K_INDEXOF - 40)) | (1 << (OData4LiteParser.K_SUBSTRING - 40)) | (1 << (OData4LiteParser.K_TOLOWER - 40)) | (1 << (OData4LiteParser.K_TOUPPER - 40)) | (1 << (OData4LiteParser.K_TRIM - 40)) | (1 << (OData4LiteParser.K_YEAR - 40)) | (1 << (OData4LiteParser.K_MONTH - 40)) | (1 << (OData4LiteParser.K_DAY - 40)) | (1 << (OData4LiteParser.K_HOUR - 40)) | (1 << (OData4LiteParser.K_MINUTE - 40)) | (1 << (OData4LiteParser.K_SECOND - 40)) | (1 << (OData4LiteParser.K_FRACTIONALSECONDS - 40)) | (1 << (OData4LiteParser.K_DATE - 40)) | (1 << (OData4LiteParser.K_TIME - 40)) | (1 << (OData4LiteParser.K_TOTALOFFSETMINUTES - 40)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (OData4LiteParser.K_NOW - 72)) | (1 << (OData4LiteParser.K_MINDATETIME - 72)) | (1 << (OData4LiteParser.K_MAXDATETIME - 72)) | (1 << (OData4LiteParser.K_ROUND - 72)) | (1 << (OData4LiteParser.K_FLOOR - 72)) | (1 << (OData4LiteParser.K_CEILING - 72)) | (1 << (OData4LiteParser.K_CAST - 72)) | (1 << (OData4LiteParser.K_ISOF - 72)) | (1 << (OData4LiteParser.K_GEODISTANCE - 72)) | (1 << (OData4LiteParser.K_GEOLENGTH - 72)) | (1 << (OData4LiteParser.K_GEOINTERSECTS - 72)) | (1 << (OData4LiteParser.AT_SIGN - 72)) | (1 << (OData4LiteParser.MINUS - 72)) | (1 << (OData4LiteParser.LPAREN - 72)) | (1 << (OData4LiteParser.LBRACKET - 72)) | (1 << (OData4LiteParser.NULL - 72)) | (1 << (OData4LiteParser.LIT_DATETIME - 72)) | (1 << (OData4LiteParser.LIT_DATE - 72)) | (1 << (OData4LiteParser.LIT_TIME_OF_DAY - 72)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (OData4LiteParser.LIT_DAY_TIME_DURATION - 104)) | (1 << (OData4LiteParser.LIT_BOOLEAN - 104)) | (1 << (OData4LiteParser.LIT_STRING - 104)) | (1 << (OData4LiteParser.LIT_INTEGER - 104)) | (1 << (OData4LiteParser.LIT_DOUBLE - 104)) | (1 << (OData4LiteParser.IDENTIFIER - 104)))) !== 0)) {
				{
				this.state = 415;
				this.aggregationParam();
				this.state = 420;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === OData4LiteParser.COMMA) {
					{
					{
					this.state = 416;
					this.match(OData4LiteParser.COMMA);
					this.state = 417;
					this.aggregationParam();
					}
					}
					this.state = 422;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 425;
			this.match(OData4LiteParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aggregationParam(): AggregationParamContext {
		let _localctx: AggregationParamContext = new AggregationParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, OData4LiteParser.RULE_aggregationParam);
		let _la: number;
		try {
			this.state = 437;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
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
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 432;
				this.aggregationExpr();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 433;
				this.aggregatedProperty();
				this.state = 435;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === OData4LiteParser.OP_WITH) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aggregationExpr(): AggregationExprContext {
		let _localctx: AggregationExprContext = new AggregationExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, OData4LiteParser.RULE_aggregationExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 447;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
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
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === OData4LiteParser.OP_WITH) {
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
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aggregateWith(): AggregateWithContext {
		let _localctx: AggregateWithContext = new AggregateWithContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, OData4LiteParser.RULE_aggregateWith);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 449;
			this.match(OData4LiteParser.OP_WITH);
			this.state = 450;
			this.aggregateMethod();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aggregateMethod(): AggregateMethodContext {
		let _localctx: AggregateMethodContext = new AggregateMethodContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, OData4LiteParser.RULE_aggregateMethod);
		try {
			this.state = 458;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case OData4LiteParser.SUM_AGGREGATION:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 452;
				this.match(OData4LiteParser.SUM_AGGREGATION);
				}
				break;
			case OData4LiteParser.MIN_AGGREGATION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 453;
				this.match(OData4LiteParser.MIN_AGGREGATION);
				}
				break;
			case OData4LiteParser.MAX_AGGREGATION:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 454;
				this.match(OData4LiteParser.MAX_AGGREGATION);
				}
				break;
			case OData4LiteParser.AVERAGE_AGGREGATION:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 455;
				this.match(OData4LiteParser.AVERAGE_AGGREGATION);
				}
				break;
			case OData4LiteParser.COUNTDISTINCT_AGGREGATION:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 456;
				this.match(OData4LiteParser.COUNTDISTINCT_AGGREGATION);
				}
				break;
			case OData4LiteParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 457;
				this.qualifiedName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aggregatedProperty(): AggregatedPropertyContext {
		let _localctx: AggregatedPropertyContext = new AggregatedPropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, OData4LiteParser.RULE_aggregatedProperty);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 460;
			this.pathPrefix();
			this.state = 461;
			this.property();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public count(): CountContext {
		let _localctx: CountContext = new CountContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, OData4LiteParser.RULE_count);
		try {
			this.enterOuterAlt(_localctx, 1);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orderby(): OrderbyContext {
		let _localctx: OrderbyContext = new OrderbyContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, OData4LiteParser.RULE_orderby);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 467;
			this.match(OData4LiteParser.ORDERBY_OPT);
			this.state = 468;
			this.match(OData4LiteParser.EQ);
			this.state = 477;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
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
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === OData4LiteParser.COMMA);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public skip(): SkipContext {
		let _localctx: SkipContext = new SkipContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, OData4LiteParser.RULE_skip);
		try {
			this.enterOuterAlt(_localctx, 1);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public top(): TopContext {
		let _localctx: TopContext = new TopContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, OData4LiteParser.RULE_top);
		try {
			this.enterOuterAlt(_localctx, 1);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expand(): ExpandContext {
		let _localctx: ExpandContext = new ExpandContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, OData4LiteParser.RULE_expand);
		try {
			this.enterOuterAlt(_localctx, 1);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public select(): SelectContext {
		let _localctx: SelectContext = new SelectContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, OData4LiteParser.RULE_select);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 491;
			this.match(OData4LiteParser.SELECT_OPT);
			this.state = 492;
			this.match(OData4LiteParser.EQ);
			this.state = 501;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
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
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === OData4LiteParser.COMMA);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orderbyItem(): OrderbyItemContext {
		let _localctx: OrderbyItemContext = new OrderbyItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, OData4LiteParser.RULE_orderbyItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 503;
			this.expression(0);
			this.state = 505;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === OData4LiteParser.ASC || _la === OData4LiteParser.DESC) {
				{
				this.state = 504;
				_la = this._input.LA(1);
				if (!(_la === OData4LiteParser.ASC || _la === OData4LiteParser.DESC)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expandItemList(): ExpandItemListContext {
		let _localctx: ExpandItemListContext = new ExpandItemListContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, OData4LiteParser.RULE_expandItemList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 507;
			this.expandItem();
			this.state = 510;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === OData4LiteParser.COMMA) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expandItem(): ExpandItemContext {
		let _localctx: ExpandItemContext = new ExpandItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, OData4LiteParser.RULE_expandItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 512;
			this.match(OData4LiteParser.IDENTIFIER);
			this.state = 517;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === OData4LiteParser.LPAREN) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expandPath(): ExpandPathContext {
		let _localctx: ExpandPathContext = new ExpandPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, OData4LiteParser.RULE_expandPath);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 522;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
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
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 524;
					this.property();
					this.state = 525;
					this.match(OData4LiteParser.FWD_SLASH);
					this.state = 529;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
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
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			}
			this.state = 536;
			this.property();
			this.state = 539;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === OData4LiteParser.FWD_SLASH) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expandQueryOptions(): ExpandQueryOptionsContext {
		let _localctx: ExpandQueryOptionsContext = new ExpandQueryOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, OData4LiteParser.RULE_expandQueryOptions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 541;
			this.expandQueryOption();
			this.state = 546;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === OData4LiteParser.SEMICOLON) {
				{
				{
				this.state = 542;
				this.match(OData4LiteParser.SEMICOLON);
				this.state = 543;
				this.expandQueryOption();
				}
				}
				this.state = 548;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expandQueryOption(): ExpandQueryOptionContext {
		let _localctx: ExpandQueryOptionContext = new ExpandQueryOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, OData4LiteParser.RULE_expandQueryOption);
		try {
			this.state = 557;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case OData4LiteParser.SEMICOLON:
			case OData4LiteParser.RPAREN:
				this.enterOuterAlt(_localctx, 1);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			case OData4LiteParser.FILTER_OPT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 550;
				this.filter();
				}
				break;
			case OData4LiteParser.COUNT_OPT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 551;
				this.count();
				}
				break;
			case OData4LiteParser.ORDERBY_OPT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 552;
				this.orderby();
				}
				break;
			case OData4LiteParser.SKIP_COUNT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 553;
				this.skip();
				}
				break;
			case OData4LiteParser.TOP_OPT:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 554;
				this.top();
				}
				break;
			case OData4LiteParser.EXPAND_OPT:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 555;
				this.expand();
				}
				break;
			case OData4LiteParser.SELECT_OPT:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 556;
				this.select();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 108;
		this.enterRecursionRule(_localctx, 108, OData4LiteParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 579;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				{
				_localctx = new FunctionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 560;
				this.functionName();
				this.state = 561;
				this.match(OData4LiteParser.LPAREN);
				this.state = 563;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (OData4LiteParser.IT_OPT - 11)) | (1 << (OData4LiteParser.CONCAT - 11)) | (1 << (OData4LiteParser.OP_HAS - 11)))) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (OData4LiteParser.OP_NOT - 47)) | (1 << (OData4LiteParser.K_CONTAINS - 47)) | (1 << (OData4LiteParser.K_ENDSWITH - 47)) | (1 << (OData4LiteParser.K_STARTSWITH - 47)) | (1 << (OData4LiteParser.K_LENGTH - 47)) | (1 << (OData4LiteParser.K_INDEXOF - 47)) | (1 << (OData4LiteParser.K_SUBSTRING - 47)) | (1 << (OData4LiteParser.K_TOLOWER - 47)) | (1 << (OData4LiteParser.K_TOUPPER - 47)) | (1 << (OData4LiteParser.K_TRIM - 47)) | (1 << (OData4LiteParser.K_YEAR - 47)) | (1 << (OData4LiteParser.K_MONTH - 47)) | (1 << (OData4LiteParser.K_DAY - 47)) | (1 << (OData4LiteParser.K_HOUR - 47)) | (1 << (OData4LiteParser.K_MINUTE - 47)) | (1 << (OData4LiteParser.K_SECOND - 47)) | (1 << (OData4LiteParser.K_FRACTIONALSECONDS - 47)) | (1 << (OData4LiteParser.K_DATE - 47)) | (1 << (OData4LiteParser.K_TIME - 47)) | (1 << (OData4LiteParser.K_TOTALOFFSETMINUTES - 47)) | (1 << (OData4LiteParser.K_NOW - 47)) | (1 << (OData4LiteParser.K_MINDATETIME - 47)) | (1 << (OData4LiteParser.K_MAXDATETIME - 47)) | (1 << (OData4LiteParser.K_ROUND - 47)) | (1 << (OData4LiteParser.K_FLOOR - 47)) | (1 << (OData4LiteParser.K_CEILING - 47)) | (1 << (OData4LiteParser.K_CAST - 47)))) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (OData4LiteParser.K_ISOF - 79)) | (1 << (OData4LiteParser.K_GEODISTANCE - 79)) | (1 << (OData4LiteParser.K_GEOLENGTH - 79)) | (1 << (OData4LiteParser.K_GEOINTERSECTS - 79)) | (1 << (OData4LiteParser.AT_SIGN - 79)) | (1 << (OData4LiteParser.MINUS - 79)) | (1 << (OData4LiteParser.LPAREN - 79)) | (1 << (OData4LiteParser.LBRACKET - 79)) | (1 << (OData4LiteParser.NULL - 79)) | (1 << (OData4LiteParser.LIT_DATETIME - 79)) | (1 << (OData4LiteParser.LIT_DATE - 79)) | (1 << (OData4LiteParser.LIT_TIME_OF_DAY - 79)) | (1 << (OData4LiteParser.LIT_DAY_TIME_DURATION - 79)) | (1 << (OData4LiteParser.LIT_BOOLEAN - 79)) | (1 << (OData4LiteParser.LIT_STRING - 79)) | (1 << (OData4LiteParser.LIT_INTEGER - 79)) | (1 << (OData4LiteParser.LIT_DOUBLE - 79)) | (1 << (OData4LiteParser.IDENTIFIER - 79)))) !== 0)) {
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
				_localctx = new ParenthesisExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
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
				_localctx = new UnaryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 571;
				_la = this._input.LA(1);
				if (!(_la === OData4LiteParser.OP_HAS || _la === OData4LiteParser.OP_NOT || _la === OData4LiteParser.MINUS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 572;
				this.expression(13);
				}
				break;

			case 4:
				{
				_localctx = new NegativeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 573;
				this.match(OData4LiteParser.MINUS);
				this.state = 574;
				this.expression(12);
				}
				break;

			case 5:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 575;
				this.primitiveLiteral();
				}
				break;

			case 6:
				{
				_localctx = new LiteralCollectionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 576;
				this.primitiveLiteralCollection();
				}
				break;

			case 7:
				{
				_localctx = new FirstMemberExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 577;
				this.firstMemberExpr();
				}
				break;

			case 8:
				{
				_localctx = new AliasExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 578;
				this.parameterAlias();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 610;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 608;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
					case 1:
						{
						_localctx = new ModulusExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, OData4LiteParser.RULE_expression);
						this.state = 581;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 582;
						this.match(OData4LiteParser.OP_MOD);
						this.state = 583;
						this.expression(11);
						}
						break;

					case 2:
						{
						_localctx = new MultiplyExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, OData4LiteParser.RULE_expression);
						this.state = 584;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 585;
						this.match(OData4LiteParser.OP_MUL);
						this.state = 586;
						this.expression(11);
						}
						break;

					case 3:
						{
						_localctx = new DivisionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, OData4LiteParser.RULE_expression);
						this.state = 587;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 588;
						this.match(OData4LiteParser.OP_DIV);
						this.state = 589;
						this.expression(10);
						}
						break;

					case 4:
						{
						_localctx = new SubtractExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, OData4LiteParser.RULE_expression);
						this.state = 590;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 591;
						this.match(OData4LiteParser.OP_SUB);
						this.state = 592;
						this.expression(9);
						}
						break;

					case 5:
						{
						_localctx = new AddExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, OData4LiteParser.RULE_expression);
						this.state = 593;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 594;
						this.match(OData4LiteParser.OP_ADD);
						this.state = 595;
						this.expression(8);
						}
						break;

					case 6:
						{
						_localctx = new BinaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, OData4LiteParser.RULE_expression);
						this.state = 596;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 597;
						_la = this._input.LA(1);
						if (!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (OData4LiteParser.OP_EQ - 34)) | (1 << (OData4LiteParser.OP_NE - 34)) | (1 << (OData4LiteParser.OP_GT - 34)) | (1 << (OData4LiteParser.OP_GE - 34)) | (1 << (OData4LiteParser.OP_LT - 34)) | (1 << (OData4LiteParser.OP_LE - 34)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 598;
						this.expression(7);
						}
						break;

					case 7:
						{
						_localctx = new LogicalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, OData4LiteParser.RULE_expression);
						this.state = 599;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 600;
						_la = this._input.LA(1);
						if (!(_la === OData4LiteParser.OP_AND || _la === OData4LiteParser.OP_OR)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 601;
						this.expression(6);
						}
						break;

					case 8:
						{
						_localctx = new InExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, OData4LiteParser.RULE_expression);
						this.state = 602;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 603;
						this.match(OData4LiteParser.OP_IN);
						this.state = 606;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
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
							throw new NoViableAltException(this);
						}
						}
						break;
					}
					}
				}
				this.state = 612;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, OData4LiteParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 613;
			this.expression(0);
			this.state = 618;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === OData4LiteParser.COMMA) {
				{
				{
				this.state = 614;
				this.match(OData4LiteParser.COMMA);
				this.state = 615;
				this.expression(0);
				}
				}
				this.state = 620;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionName(): FunctionNameContext {
		let _localctx: FunctionNameContext = new FunctionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, OData4LiteParser.RULE_functionName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 621;
			_la = this._input.LA(1);
			if (!(_la === OData4LiteParser.CONCAT || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (OData4LiteParser.K_CONTAINS - 53)) | (1 << (OData4LiteParser.K_ENDSWITH - 53)) | (1 << (OData4LiteParser.K_STARTSWITH - 53)) | (1 << (OData4LiteParser.K_LENGTH - 53)) | (1 << (OData4LiteParser.K_INDEXOF - 53)) | (1 << (OData4LiteParser.K_SUBSTRING - 53)) | (1 << (OData4LiteParser.K_TOLOWER - 53)) | (1 << (OData4LiteParser.K_TOUPPER - 53)) | (1 << (OData4LiteParser.K_TRIM - 53)) | (1 << (OData4LiteParser.K_YEAR - 53)) | (1 << (OData4LiteParser.K_MONTH - 53)) | (1 << (OData4LiteParser.K_DAY - 53)) | (1 << (OData4LiteParser.K_HOUR - 53)) | (1 << (OData4LiteParser.K_MINUTE - 53)) | (1 << (OData4LiteParser.K_SECOND - 53)) | (1 << (OData4LiteParser.K_FRACTIONALSECONDS - 53)) | (1 << (OData4LiteParser.K_DATE - 53)) | (1 << (OData4LiteParser.K_TIME - 53)) | (1 << (OData4LiteParser.K_TOTALOFFSETMINUTES - 53)) | (1 << (OData4LiteParser.K_NOW - 53)) | (1 << (OData4LiteParser.K_MINDATETIME - 53)) | (1 << (OData4LiteParser.K_MAXDATETIME - 53)) | (1 << (OData4LiteParser.K_ROUND - 53)) | (1 << (OData4LiteParser.K_FLOOR - 53)) | (1 << (OData4LiteParser.K_CEILING - 53)) | (1 << (OData4LiteParser.K_CAST - 53)) | (1 << (OData4LiteParser.K_ISOF - 53)) | (1 << (OData4LiteParser.K_GEODISTANCE - 53)) | (1 << (OData4LiteParser.K_GEOLENGTH - 53)) | (1 << (OData4LiteParser.K_GEOINTERSECTS - 53)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public firstMemberExpr(): FirstMemberExprContext {
		let _localctx: FirstMemberExprContext = new FirstMemberExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, OData4LiteParser.RULE_firstMemberExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 624;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === OData4LiteParser.IT_OPT) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaPredicatePrefixExpr(): LambdaPredicatePrefixExprContext {
		let _localctx: LambdaPredicatePrefixExprContext = new LambdaPredicatePrefixExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, OData4LiteParser.RULE_lambdaPredicatePrefixExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 628;
			this.match(OData4LiteParser.IT_OPT);
			this.state = 629;
			this.match(OData4LiteParser.FWD_SLASH);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memberExpr(): MemberExprContext {
		let _localctx: MemberExprContext = new MemberExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, OData4LiteParser.RULE_memberExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 634;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyPathExpr(): PropertyPathExprContext {
		let _localctx: PropertyPathExprContext = new PropertyPathExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, OData4LiteParser.RULE_propertyPathExpr);
		try {
			this.state = 645;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 638;
				this.property();
				this.state = 639;
				this.singleNavigationExpr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 641;
				this.property();
				this.state = 642;
				this.collectionPathExpr();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 644;
				this.property();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public collectionNavigationExpr(): CollectionNavigationExprContext {
		let _localctx: CollectionNavigationExprContext = new CollectionNavigationExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, OData4LiteParser.RULE_collectionNavigationExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 649;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
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
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case OData4LiteParser.LPAREN:
				{
				this.state = 651;
				this.keyPredicate();
				this.state = 653;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === OData4LiteParser.FWD_SLASH) {
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
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public singleNavigationExpr(): SingleNavigationExprContext {
		let _localctx: SingleNavigationExprContext = new SingleNavigationExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, OData4LiteParser.RULE_singleNavigationExpr);
		try {
			this.state = 664;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 658;
				this.match(OData4LiteParser.FWD_SLASH);
				this.state = 659;
				this.memberExpr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 660;
				this.match(OData4LiteParser.FWD_SLASH);
				this.state = 661;
				this.parameterAlias();
				this.notifyErrorListeners('Aliases are not valid in navigation expressions.');
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public collectionPathExpr(): CollectionPathExprContext {
		let _localctx: CollectionPathExprContext = new CollectionPathExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, OData4LiteParser.RULE_collectionPathExpr);
		try {
			this.state = 671;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 666;
				this.match(OData4LiteParser.COUNT_OPT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 667;
				this.match(OData4LiteParser.FWD_SLASH);
				this.state = 668;
				this.anyExpr();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public anyExpr(): AnyExprContext {
		let _localctx: AnyExprContext = new AnyExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, OData4LiteParser.RULE_anyExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 673;
			this.match(OData4LiteParser.ANY);
			this.state = 674;
			this.match(OData4LiteParser.LPAREN);
			this.state = 679;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === OData4LiteParser.IDENTIFIER) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public allExpr(): AllExprContext {
		let _localctx: AllExprContext = new AllExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, OData4LiteParser.RULE_allExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 683;
			this.match(OData4LiteParser.ANY);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaParameterIdentifier(): LambdaParameterIdentifierContext {
		let _localctx: LambdaParameterIdentifierContext = new LambdaParameterIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, OData4LiteParser.RULE_lambdaParameterIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 690;
			this.match(OData4LiteParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primitiveLiteralCollection(): PrimitiveLiteralCollectionContext {
		let _localctx: PrimitiveLiteralCollectionContext = new PrimitiveLiteralCollectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, OData4LiteParser.RULE_primitiveLiteralCollection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 692;
			this.match(OData4LiteParser.LBRACKET);
			this.state = 701;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (OData4LiteParser.NULL - 100)) | (1 << (OData4LiteParser.LIT_DATETIME - 100)) | (1 << (OData4LiteParser.LIT_DATE - 100)) | (1 << (OData4LiteParser.LIT_TIME_OF_DAY - 100)) | (1 << (OData4LiteParser.LIT_DAY_TIME_DURATION - 100)) | (1 << (OData4LiteParser.LIT_BOOLEAN - 100)) | (1 << (OData4LiteParser.LIT_STRING - 100)) | (1 << (OData4LiteParser.LIT_INTEGER - 100)) | (1 << (OData4LiteParser.LIT_DOUBLE - 100)) | (1 << (OData4LiteParser.IDENTIFIER - 100)))) !== 0)) {
				{
				this.state = 693;
				this.primitiveLiteral();
				this.state = 698;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === OData4LiteParser.COMMA) {
					{
					{
					this.state = 694;
					this.match(OData4LiteParser.COMMA);
					this.state = 695;
					this.primitiveLiteral();
					}
					}
					this.state = 700;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 703;
			this.match(OData4LiteParser.RBRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primitiveLiteral(): PrimitiveLiteralContext {
		let _localctx: PrimitiveLiteralContext = new PrimitiveLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, OData4LiteParser.RULE_primitiveLiteral);
		try {
			this.state = 715;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case OData4LiteParser.NULL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 705;
				this.match(OData4LiteParser.NULL);
				}
				break;
			case OData4LiteParser.LIT_BOOLEAN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 706;
				this.match(OData4LiteParser.LIT_BOOLEAN);
				}
				break;
			case OData4LiteParser.LIT_DATE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 707;
				this.match(OData4LiteParser.LIT_DATE);
				}
				break;
			case OData4LiteParser.LIT_DATETIME:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 708;
				this.match(OData4LiteParser.LIT_DATETIME);
				}
				break;
			case OData4LiteParser.LIT_TIME_OF_DAY:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 709;
				this.match(OData4LiteParser.LIT_TIME_OF_DAY);
				}
				break;
			case OData4LiteParser.LIT_INTEGER:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 710;
				this.match(OData4LiteParser.LIT_INTEGER);
				}
				break;
			case OData4LiteParser.LIT_DOUBLE:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 711;
				this.match(OData4LiteParser.LIT_DOUBLE);
				}
				break;
			case OData4LiteParser.LIT_STRING:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 712;
				this.match(OData4LiteParser.LIT_STRING);
				}
				break;
			case OData4LiteParser.LIT_DAY_TIME_DURATION:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 713;
				this.match(OData4LiteParser.LIT_DAY_TIME_DURATION);
				}
				break;
			case OData4LiteParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 714;
				this.enum();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enum(): EnumContext {
		let _localctx: EnumContext = new EnumContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, OData4LiteParser.RULE_enum);
		try {
			this.enterOuterAlt(_localctx, 1);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedEnumTypeName(): QualifiedEnumTypeNameContext {
		let _localctx: QualifiedEnumTypeNameContext = new QualifiedEnumTypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, OData4LiteParser.RULE_qualifiedEnumTypeName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 722;
			this.namespace();
			this.state = 723;
			this.match(OData4LiteParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumValues(): EnumValuesContext {
		let _localctx: EnumValuesContext = new EnumValuesContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, OData4LiteParser.RULE_enumValues);
		let _la: number;
		try {
			this.state = 733;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 725;
				this.enumValue();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 726;
				this.enumValue();
				this.state = 729;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === OData4LiteParser.COMMA);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumValue(): EnumValueContext {
		let _localctx: EnumValueContext = new EnumValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, OData4LiteParser.RULE_enumValue);
		try {
			this.state = 739;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case OData4LiteParser.LIT_INTEGER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 735;
				this.match(OData4LiteParser.LIT_INTEGER);
				}
				break;
			case OData4LiteParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
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
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespace(): NamespaceContext {
		let _localctx: NamespaceContext = new NamespaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, OData4LiteParser.RULE_namespace);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 741;
			this.match(OData4LiteParser.IDENTIFIER);
			this.state = 746;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
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
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
			}
			this.state = 749;
			this.match(OData4LiteParser.DOT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.functionImportCall_sempred(_localctx as FunctionImportCallContext, predIndex);

		case 54:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private functionImportCall_sempred(_localctx: FunctionImportCallContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.isUnboundFunctionName(_localctx.identifier);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 11);

		case 2:
			return this.precpred(this._ctx, 10);

		case 3:
			return this.precpred(this._ctx, 9);

		case 4:
			return this.precpred(this._ctx, 8);

		case 5:
			return this.precpred(this._ctx, 7);

		case 6:
			return this.precpred(this._ctx, 6);

		case 7:
			return this.precpred(this._ctx, 5);

		case 8:
			return this.precpred(this._ctx, 15);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03p\u02F2\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x03\x02\x03\x02\x03\x02\x05" +
		"\x02\x9A\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		"\xA2\n\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x07" +
		"\x05\xAB\n\x05\f\x05\x0E\x05\xAE\v\x05\x05\x05\xB0\n\x05\x03\x05\x03\x05" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xB8\n\x06\x03\x07\x03\x07\x03" +
		"\b\x03\b\x05\b\xBE\n\b\x03\b\x03\b\x05\b\xC2\n\b\x03\b\x03\b\x03\b\x05" +
		"\b\xC7\n\b\x03\t\x03\t\x05\t\xCB\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x05\t\xD3\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x05\n\xDF\n\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0F\x03\x0F\x05\x0F\xEC\n\x0F\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07" +
		"\x11\xFA\n\x11\f\x11\x0E\x11\xFD\v\x11\x03\x11\x03\x11\x03\x12\x03\x12" +
		"\x03\x12\x07\x12\u0104\n\x12\f\x12\x0E\x12\u0107\v\x12\x03\x13\x03\x13" +
		"\x05\x13\u010B\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x05\x14\u0115\n\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B" +
		"\x07\x1B\u012E\n\x1B\f\x1B\x0E\x1B\u0131\v\x1B\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x05\x1C\u0138\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x06\x1D\u0140\n\x1D\r\x1D\x0E\x1D\u0141\x05\x1D\u0144\n\x1D" +
		"\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x06\x1F\u0151\n\x1F\r\x1F\x0E\x1F\u0152\x05\x1F\u0155" +
		"\n\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x05 \u015E\n \x03 \x03" +
		" \x03!\x03!\x03!\x03!\x07!\u0166\n!\f!\x0E!\u0169\v!\x03!\x03!\x03\"\x03" +
		"\"\x03#\x05#\u0170\n#\x03#\x03#\x03#\x07#\u0175\n#\f#\x0E#\u0178\v#\x03" +
		"#\x05#\u017B\n#\x03$\x03$\x03$\x03$\x03$\x03$\x05$\u0183\n$\x03$\x03$" +
		"\x06$\u0187\n$\r$\x0E$\u0188\x03$\x03$\x03$\x03$\x03$\x05$\u0190\n$\x03" +
		"$\x03$\x07$\u0194\n$\f$\x0E$\u0197\v$\x05$\u0199\n$\x03%\x03%\x03%\x03" +
		"%\x03%\x03&\x03&\x03&\x03&\x03&\x07&\u01A5\n&\f&\x0E&\u01A8\v&\x05&\u01AA" +
		"\n&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u01B6" +
		"\n\'\x05\'\u01B8\n\'\x03(\x03(\x03(\x03(\x05(\u01BE\n(\x03(\x03(\x05(" +
		"\u01C2\n(\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u01CD\n*\x03" +
		"+\x03+\x03+\x03,\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x03-\x03-\x06-\u01DC" +
		"\n-\r-\x0E-\u01DD\x05-\u01E0\n-\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x03" +
		"/\x030\x030\x030\x030\x031\x031\x031\x031\x031\x031\x061\u01F4\n1\r1\x0E" +
		"1\u01F5\x051\u01F8\n1\x032\x032\x052\u01FC\n2\x033\x033\x033\x053\u0201" +
		"\n3\x034\x034\x034\x034\x034\x054\u0208\n4\x035\x035\x035\x055\u020D\n" +
		"5\x035\x035\x035\x035\x035\x055\u0214\n5\x075\u0216\n5\f5\x0E5\u0219\v" +
		"5\x035\x035\x035\x055\u021E\n5\x036\x036\x036\x076\u0223\n6\f6\x0E6\u0226" +
		"\v6\x037\x037\x037\x037\x037\x037\x037\x037\x057\u0230\n7\x038\x038\x03" +
		"8\x038\x058\u0236\n8\x038\x038\x038\x038\x038\x038\x038\x038\x038\x03" +
		"8\x038\x038\x038\x038\x058\u0246\n8\x038\x038\x038\x038\x038\x038\x03" +
		"8\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x03" +
		"8\x038\x038\x038\x038\x058\u0261\n8\x078\u0263\n8\f8\x0E8\u0266\v8\x03" +
		"9\x039\x039\x079\u026B\n9\f9\x0E9\u026E\v9\x03:\x03:\x03;\x05;\u0273\n" +
		";\x03;\x03;\x03<\x03<\x03<\x03=\x03=\x03=\x05=\u027D\n=\x03=\x03=\x03" +
		">\x03>\x03>\x03>\x03>\x03>\x03>\x05>\u0288\n>\x03?\x03?\x05?\u028C\n?" +
		"\x03?\x03?\x05?\u0290\n?\x03?\x05?\u0293\n?\x03@\x03@\x03@\x03@\x03@\x03" +
		"@\x05@\u029B\n@\x03A\x03A\x03A\x03A\x03A\x05A\u02A2\nA\x03B\x03B\x03B" +
		"\x03B\x03B\x03B\x05B\u02AA\nB\x03B\x03B\x03C\x03C\x03C\x03C\x03C\x03C" +
		"\x03C\x03D\x03D\x03E\x03E\x03E\x03E\x07E\u02BB\nE\fE\x0EE\u02BE\vE\x05" +
		"E\u02C0\nE\x03E\x03E\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03" +
		"F\x05F\u02CE\nF\x03G\x03G\x03G\x03G\x03G\x03H\x03H\x03H\x03I\x03I\x03" +
		"I\x03I\x06I\u02DC\nI\rI\x0EI\u02DD\x05I\u02E0\nI\x03J\x03J\x03J\x03J\x05" +
		"J\u02E6\nJ\x03K\x03K\x03K\x07K\u02EB\nK\fK\x0EK\u02EE\vK\x03K\x03K\x03" +
		"K\x02\x02\x03nL\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
		"$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02" +
		"@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02" +
		"\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02" +
		"x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C" +
		"\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x02\x07\x03\x02\x1D\x1E\x05\x02*" +
		"*11[[\x03\x02$)\x03\x02/0\x04\x02\x16\x167T\x02\u0322\x02\x96\x03\x02" +
		"\x02\x02\x04\x9D\x03\x02\x02\x02\x06\xA3\x03\x02\x02\x02\b\xA6\x03\x02" +
		"\x02\x02\n\xB3\x03\x02\x02\x02\f\xB9\x03\x02\x02\x02\x0E\xBD\x03\x02\x02" +
		"\x02\x10\xCA\x03\x02\x02\x02\x12\xDE\x03\x02\x02\x02\x14\xE0\x03\x02\x02" +
		"\x02\x16\xE2\x03\x02\x02\x02\x18\xE4\x03\x02\x02\x02\x1A\xE6\x03\x02\x02" +
		"\x02\x1C\xEB\x03\x02\x02\x02\x1E\xED\x03\x02\x02\x02 \xF1\x03\x02\x02" +
		"\x02\"\u0100\x03\x02\x02\x02$\u010A\x03\x02\x02\x02&\u0114\x03\x02\x02" +
		"\x02(\u0116\x03\x02\x02\x02*\u0119\x03\x02\x02\x02,\u011D\x03\x02\x02" +
		"\x02.\u0120\x03\x02\x02\x020\u0122\x03\x02\x02\x022\u0126\x03\x02\x02" +
		"\x024\u012A\x03\x02\x02\x026\u0137\x03\x02\x02\x028\u0139\x03\x02\x02" +
		"\x02:\u0147\x03\x02\x02\x02<\u014A\x03\x02\x02\x02>\u0158\x03\x02\x02" +
		"\x02@\u0161\x03\x02\x02\x02B\u016C\x03\x02\x02\x02D\u016F\x03\x02\x02" +
		"\x02F\u0198\x03\x02\x02\x02H\u019A\x03\x02\x02\x02J\u019F\x03\x02\x02" +
		"\x02L\u01B7\x03\x02\x02\x02N\u01C1\x03\x02\x02\x02P\u01C3\x03\x02\x02" +
		"\x02R\u01CC\x03\x02\x02\x02T\u01CE\x03\x02\x02\x02V\u01D1\x03\x02\x02" +
		"\x02X\u01D5\x03\x02\x02\x02Z\u01E1\x03\x02\x02\x02\\\u01E5\x03\x02\x02" +
		"\x02^\u01E9\x03\x02\x02\x02`\u01ED\x03\x02\x02\x02b\u01F9\x03\x02\x02" +
		"\x02d\u01FD\x03\x02\x02\x02f\u0202\x03\x02\x02\x02h\u020C\x03\x02\x02" +
		"\x02j\u021F\x03\x02\x02\x02l\u022F\x03\x02\x02\x02n\u0245\x03\x02\x02" +
		"\x02p\u0267\x03\x02\x02\x02r\u026F\x03\x02\x02\x02t\u0272\x03\x02\x02" +
		"\x02v\u0276\x03\x02\x02\x02x\u027C\x03\x02\x02\x02z\u0287\x03\x02\x02" +
		"\x02|\u028B\x03\x02\x02\x02~\u029A\x03\x02\x02\x02\x80\u02A1\x03\x02\x02" +
		"\x02\x82\u02A3\x03\x02\x02\x02\x84\u02AD\x03\x02\x02\x02\x86\u02B4\x03" +
		"\x02\x02\x02\x88\u02B6\x03\x02\x02\x02\x8A\u02CD\x03\x02\x02\x02\x8C\u02CF" +
		"\x03\x02\x02\x02\x8E\u02D4\x03\x02\x02\x02\x90\u02DF\x03\x02\x02\x02\x92" +
		"\u02E5\x03\x02\x02\x02\x94\u02E7\x03\x02\x02\x02\x96\x99\x05\x04\x03\x02" +
		"\x97\x98\x07]\x02\x02\x98\x9A\x05\"\x12\x02\x99\x97\x03\x02\x02\x02\x99" +
		"\x9A\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9C\x07\x02\x02\x03\x9C" +
		"\x03\x03\x02\x02\x02\x9D\xA1\x07o\x02\x02\x9E\xA2\x05\x06\x04\x02\x9F" +
		"\xA2\x05\x10\t\x02\xA0\xA2\x05\x0E\b\x02\xA1\x9E\x03\x02\x02\x02\xA1\x9F" +
		"\x03\x02\x02\x02\xA1\xA0\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\x05" +
		"\x03\x02\x02\x02\xA3\xA4\x06\x04\x02\x03\xA4\xA5\x05\b\x05\x02\xA5\x07" +
		"\x03\x02\x02\x02\xA6\xAF\x07c\x02\x02\xA7\xAC\x05\n\x06\x02\xA8\xA9\x07" +
		"a\x02\x02\xA9\xAB\x05\n\x06\x02\xAA\xA8\x03\x02\x02\x02\xAB\xAE\x03\x02" +
		"\x02\x02\xAC\xAA\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xB0\x03\x02" +
		"\x02\x02\xAE\xAC\x03\x02\x02\x02\xAF\xA7\x03\x02\x02\x02\xAF\xB0\x03\x02" +
		"\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xB2\x07b\x02\x02\xB2\t\x03\x02\x02" +
		"\x02\xB3\xB4\x05\f\x07\x02\xB4\xB7\x07`\x02\x02\xB5\xB8\x05,\x17\x02\xB6" +
		"\xB8\x05\x8AF\x02\xB7\xB5\x03\x02\x02\x02\xB7\xB6\x03\x02\x02\x02\xB8" +
		"\v\x03\x02\x02\x02\xB9\xBA\x07o\x02\x02\xBA\r\x03\x02\x02\x02\xBB\xBC" +
		"\x07\\\x02\x02\xBC\xBE\x05\x1A\x0E\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBE" +
		"\x03\x02\x02\x02\xBE\xC6\x03\x02\x02\x02\xBF\xC1\x05\x1C\x0F\x02\xC0\xC2" +
		"\x05\x10\t\x02\xC1\xC0\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC7" +
		"\x03\x02\x02\x02\xC3\xC7\x05\x14\v\x02\xC4\xC5\x07\\\x02\x02\xC5\xC7\x07" +
		"\v\x02\x02\xC6\xBF\x03\x02\x02\x02\xC6\xC3\x03\x02\x02\x02\xC6\xC4\x03" +
		"\x02\x02\x02\xC7\x0F\x03\x02\x02\x02\xC8\xC9\x07\\\x02\x02\xC9\xCB\x05" +
		"\x1A\x0E\x02\xCA\xC8\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xD2\x03" +
		"\x02\x02\x02\xCC\xCD\x07\\\x02\x02\xCD\xD3\x05\x12\n\x02\xCE\xCF\x07\\" +
		"\x02\x02\xCF\xD3\x07\v\x02\x02\xD0\xD1\x07\\\x02\x02\xD1\xD3\x07\f\x02" +
		"\x02\xD2\xCC\x03\x02\x02\x02\xD2\xCE\x03\x02\x02\x02\xD2\xD0\x03\x02\x02" +
		"\x02\xD3\x11\x03\x02\x02\x02\xD4\xD5\x05\x18\r\x02\xD5\xD6\x05\x0E\b\x02" +
		"\xD6\xDF\x03\x02\x02\x02\xD7\xD8\x05\x18\r\x02\xD8\xD9\x05\x10\t\x02\xD9" +
		"\xDF\x03\x02\x02\x02\xDA\xDB\x05\x18\r\x02\xDB\xDC\x05\x16\f\x02\xDC\xDF" +
		"\x03\x02\x02\x02\xDD\xDF\x05\x18\r\x02\xDE\xD4\x03\x02\x02\x02\xDE\xD7" +
		"\x03\x02\x02\x02\xDE\xDA\x03\x02\x02\x02\xDE\xDD\x03\x02\x02\x02\xDF\x13" +
		"\x03\x02\x02\x02\xE0\xE1\x05V,\x02\xE1\x15\x03\x02\x02\x02\xE2\xE3\x07" +
		"\f\x02\x02\xE3\x17\x03\x02\x02\x02\xE4\xE5\x07o\x02\x02\xE5\x19\x03\x02" +
		"\x02\x02\xE6\xE7\x05\x94K\x02\xE7\xE8\x07o\x02\x02\xE8\x1B\x03\x02\x02" +
		"\x02\xE9\xEC\x05\x1E\x10\x02\xEA\xEC\x05 \x11\x02\xEB\xE9\x03\x02\x02" +
		"\x02\xEB\xEA\x03\x02\x02\x02\xEC\x1D\x03\x02\x02\x02\xED\xEE\x07c\x02" +
		"\x02\xEE\xEF\x05\x8AF\x02\xEF\xF0\x07b\x02\x02\xF0\x1F\x03\x02\x02\x02" +
		"\xF1\xF2\x07c\x02\x02\xF2\xF3\x07o\x02\x02\xF3\xF4\x07`\x02\x02\xF4\xFB" +
		"\x05\x8AF\x02\xF5\xF6\x07a\x02\x02\xF6\xF7\x07o\x02\x02\xF7\xF8\x07`\x02" +
		"\x02\xF8\xFA\x05\x8AF\x02\xF9\xF5\x03\x02\x02\x02\xFA\xFD\x03\x02\x02" +
		"\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\xFE\x03\x02\x02" +
		"\x02\xFD\xFB\x03\x02\x02\x02\xFE\xFF\x07b\x02\x02\xFF!\x03\x02\x02\x02" +
		"\u0100\u0105\x05$\x13\x02\u0101\u0102\x07X\x02\x02\u0102\u0104\x05$\x13" +
		"\x02\u0103\u0101\x03\x02\x02\x02\u0104\u0107\x03\x02\x02\x02\u0105\u0103" +
		"\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02\u0106#\x03\x02\x02\x02\u0107" +
		"\u0105\x03\x02\x02\x02\u0108\u010B\x05&\x14\x02\u0109\u010B\x05*\x16\x02" +
		"\u010A\u0108\x03\x02\x02\x02\u010A\u0109\x03\x02\x02\x02\u010B%\x03\x02" +
		"\x02\x02\u010C\u0115\x050\x19\x02\u010D\u0115\x05V,\x02\u010E\u0115\x05" +
		"\\/\x02\u010F\u0115\x05Z.\x02\u0110\u0115\x05X-\x02\u0111\u0115\x05^0" +
		"\x02\u0112\u0115\x05`1\x02\u0113\u0115\x052\x1A\x02\u0114\u010C\x03\x02" +
		"\x02\x02\u0114\u010D\x03\x02\x02\x02\u0114\u010E\x03\x02\x02\x02\u0114" +
		"\u010F\x03\x02\x02\x02\u0114\u0110\x03\x02\x02\x02\u0114\u0111\x03\x02" +
		"\x02\x02\u0114\u0112\x03\x02\x02\x02\u0114\u0113\x03\x02\x02\x02\u0115" +
		"\'\x03\x02\x02\x02\u0116\u0117\x07+\x02\x02\u0117\u0118\x07o\x02\x02\u0118" +
		")\x03\x02\x02\x02\u0119\u011A\x05,\x17\x02\u011A\u011B\x07`\x02\x02\u011B" +
		"\u011C\x05.\x18\x02\u011C+\x03\x02\x02\x02\u011D\u011E\x07U\x02\x02\u011E" +
		"\u011F\x07o\x02\x02\u011F-\x03\x02\x02\x02\u0120\u0121\x05\x8AF\x02\u0121" +
		"/\x03\x02\x02\x02\u0122\u0123\x07\x06\x02\x02\u0123\u0124\x07`\x02\x02" +
		"\u0124\u0125\x05n8\x02\u01251\x03\x02\x02\x02\u0126\u0127\x07\x04\x02" +
		"\x02\u0127\u0128\x07`\x02\x02\u0128\u0129\x054\x1B\x02\u01293\x03\x02" +
		"\x02\x02\u012A\u012F\x056\x1C\x02\u012B\u012C\x07\\\x02\x02\u012C\u012E" +
		"\x056\x1C\x02\u012D\u012B\x03\x02\x02\x02\u012E\u0131\x03\x02\x02\x02" +
		"\u012F\u012D\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u01305\x03\x02" +
		"\x02\x02\u0131\u012F\x03\x02\x02\x02\u0132\u0138\x058\x1D\x02\u0133\u0138" +
		"\x05<\x1F\x02\u0134\u0138\x05> \x02\u0135\u0138\x05J&\x02\u0136\u0138" +
		"\x05H%\x02\u0137\u0132\x03\x02\x02\x02\u0137\u0133\x03\x02\x02\x02\u0137" +
		"\u0134\x03\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0137\u0136\x03\x02" +
		"\x02\x02\u01387\x03\x02\x02\x02\u0139\u013A\x07\x18\x02\x02\u013A\u0143" +
		"\x07c\x02\x02\u013B\u0144\x05:\x1E\x02\u013C\u013F\x05:\x1E\x02\u013D" +
		"\u013E\x07a\x02\x02\u013E\u0140\x05:\x1E\x02\u013F\u013D\x03\x02\x02\x02" +
		"\u0140\u0141\x03\x02\x02\x02\u0141\u013F\x03\x02\x02\x02\u0141\u0142\x03" +
		"\x02\x02\x02\u0142\u0144\x03\x02\x02\x02\u0143\u013B\x03\x02\x02\x02\u0143" +
		"\u013C\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0146\x07b\x02" +
		"\x02\u01469\x03\x02\x02\x02\u0147\u0148\x05n8\x02\u0148\u0149\x05(\x15" +
		"\x02\u0149;\x03\x02\x02\x02\u014A\u014B\x07\x16\x02\x02\u014B\u0154\x07" +
		"c\x02\x02\u014C\u0155\x056\x1C\x02\u014D\u0150\x056\x1C\x02\u014E\u014F" +
		"\x07a\x02\x02\u014F\u0151\x056\x1C\x02\u0150\u014E\x03\x02\x02\x02\u0151" +
		"\u0152\x03\x02\x02\x02\u0152\u0150\x03\x02\x02\x02\u0152\u0153\x03\x02" +
		"\x02\x02\u0153\u0155\x03\x02\x02\x02\u0154\u014C\x03\x02\x02\x02\u0154" +
		"\u014D\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u0157\x07b\x02" +
		"\x02\u0157=\x03\x02\x02\x02\u0158\u0159\x07\x17\x02\x02\u0159\u015A\x07" +
		"c\x02\x02\u015A\u015D\x05@!\x02\u015B\u015C\x07a\x02\x02\u015C\u015E\x05" +
		"4\x1B\x02\u015D\u015B\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E" +
		"\u015F\x03\x02\x02\x02\u015F\u0160\x07b\x02\x02\u0160?\x03\x02\x02\x02" +
		"\u0161\u0162\x07c\x02\x02\u0162\u0167\x05B\"\x02\u0163\u0164\x07a\x02" +
		"\x02\u0164\u0166\x05B\"\x02\u0165\u0163\x03\x02\x02\x02\u0166\u0169\x03" +
		"\x02\x02\x02\u0167\u0165\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02\u0168" +
		"\u016A\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02\u016A\u016B\x07b\x02" +
		"\x02\u016BA\x03\x02\x02\x02\u016C\u016D\x05D#\x02\u016DC\x03\x02\x02\x02" +
		"\u016E\u0170\x05F$\x02\u016F\u016E\x03\x02\x02\x02\u016F\u0170\x03\x02" +
		"\x02\x02\u0170\u017A\x03\x02\x02\x02\u0171\u0176\x05\x18\r\x02\u0172\u0173" +
		"\x07\\\x02\x02\u0173\u0175\x05\x1A\x0E\x02\u0174\u0172\x03\x02\x02\x02" +
		"\u0175\u0178\x03\x02\x02\x02\u0176\u0174\x03\x02\x02\x02\u0176\u0177\x03" +
		"\x02\x02\x02\u0177\u017B\x03\x02\x02\x02\u0178\u0176\x03\x02\x02\x02\u0179" +
		"\u017B\x05\x18\r\x02\u017A\u0171\x03\x02\x02\x02\u017A\u0179\x03\x02\x02" +
		"\x02\u017BE\x03\x02\x02\x02\u017C\u017D\x05\x1A\x0E\x02\u017D\u017E\x07" +
		"\\\x02\x02\u017E\u0199\x03\x02\x02\x02\u017F\u0182\x05\x18\r\x02\u0180" +
		"\u0181\x07\\\x02\x02\u0181\u0183\x05\x1A\x0E\x02\u0182\u0180\x03\x02\x02" +
		"\x02\u0182\u0183\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184\u0185" +
		"\x07\\\x02\x02\u0185\u0187\x03\x02\x02\x02\u0186\u017F\x03\x02\x02\x02" +
		"\u0187\u0188\x03\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0188\u0189\x03" +
		"\x02\x02\x02\u0189\u0199\x03\x02\x02\x02\u018A\u018B\x05\x1A\x0E\x02\u018B" +
		"\u0195\x07\\\x02\x02\u018C\u018F\x05\x18\r\x02\u018D\u018E\x07\\\x02\x02" +
		"\u018E\u0190\x05\x1A\x0E\x02\u018F\u018D\x03\x02\x02\x02\u018F\u0190\x03" +
		"\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191\u0192\x07\\\x02\x02\u0192" +
		"\u0194\x03\x02\x02\x02\u0193\u018C\x03\x02\x02\x02\u0194\u0197\x03\x02" +
		"\x02\x02\u0195\u0193\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196" +
		"\u0199\x03\x02\x02\x02\u0197\u0195\x03\x02\x02\x02\u0198\u017C\x03\x02" +
		"\x02\x02\u0198\u0186\x03\x02\x02\x02\u0198\u018A\x03\x02\x02\x02\u0199" +
		"G\x03\x02\x02\x02\u019A\u019B\x07\x19\x02\x02\u019B\u019C\x07c\x02\x02" +
		"\u019C\u019D\x05n8\x02\u019D\u019E\x07b\x02\x02\u019EI\x03\x02\x02\x02" +
		"\u019F\u01A0\x07\x0E\x02\x02\u01A0\u01A9\x07c\x02\x02\u01A1\u01A6\x05" +
		"L\'\x02\u01A2\u01A3\x07a\x02\x02\u01A3\u01A5\x05L\'\x02\u01A4\u01A2\x03" +
		"\x02\x02\x02\u01A5\u01A8\x03\x02\x02\x02\u01A6\u01A4\x03\x02\x02\x02\u01A6" +
		"\u01A7\x03\x02\x02\x02\u01A7\u01AA\x03\x02\x02\x02\u01A8\u01A6\x03\x02" +
		"\x02\x02\u01A9\u01A1\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA" +
		"\u01AB\x03\x02\x02\x02\u01AB\u01AC\x07b\x02\x02\u01ACK\x03\x02\x02\x02" +
		"\u01AD\u01AE\x05h5\x02\u01AE\u01AF\x07c\x02\x02\u01AF\u01B0\x05N(\x02" +
		"\u01B0\u01B1\x07b\x02\x02\u01B1\u01B8\x03\x02\x02\x02\u01B2\u01B8\x05" +
		"N(\x02\u01B3\u01B5\x05T+\x02\u01B4\u01B6\x05P)\x02\u01B5\u01B4\x03\x02" +
		"\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01B8\x03\x02\x02\x02\u01B7" +
		"\u01AD\x03\x02\x02\x02\u01B7\u01B2\x03\x02\x02\x02\u01B7\u01B3\x03\x02" +
		"\x02\x02\u01B8M\x03\x02\x02\x02\u01B9\u01BA\x07\t\x02\x02\u01BA\u01C2" +
		"\x05(\x15\x02\u01BB\u01BD\x05n8\x02\u01BC\u01BE\x05P)\x02\u01BD\u01BC" +
		"\x03\x02\x02\x02\u01BD\u01BE\x03\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02" +
		"\u01BF\u01C0\x05(\x15\x02\u01C0\u01C2\x03\x02\x02\x02\u01C1\u01B9\x03" +
		"\x02\x02\x02\u01C1\u01BB\x03\x02\x02\x02\u01C2O\x03\x02\x02\x02\u01C3" +
		"\u01C4\x07,\x02\x02\u01C4\u01C5\x05R*\x02\u01C5Q\x03\x02\x02\x02\u01C6" +
		"\u01CD\x07\x1F\x02\x02\u01C7\u01CD\x07 \x02\x02\u01C8\u01CD\x07!\x02\x02" +
		"\u01C9\u01CD\x07\"\x02\x02\u01CA\u01CD\x07#\x02\x02\u01CB\u01CD\x05\x1A" +
		"\x0E\x02\u01CC\u01C6\x03\x02\x02\x02\u01CC\u01C7\x03\x02\x02\x02\u01CC" +
		"\u01C8\x03\x02\x02\x02\u01CC\u01C9\x03\x02\x02\x02\u01CC\u01CA\x03\x02" +
		"\x02\x02\u01CC\u01CB\x03\x02\x02\x02\u01CDS\x03\x02\x02\x02\u01CE\u01CF" +
		"\x05F$\x02\u01CF\u01D0\x05\x18\r\x02\u01D0U\x03\x02\x02\x02\u01D1\u01D2" +
		"\x07\t\x02\x02\u01D2\u01D3\x07`\x02\x02\u01D3\u01D4\x07k\x02\x02\u01D4" +
		"W\x03\x02\x02\x02\u01D5\u01D6\x07\n\x02\x02\u01D6\u01DF\x07`\x02\x02\u01D7" +
		"\u01E0\x05b2\x02\u01D8\u01DB\x05b2\x02\u01D9\u01DA\x07a\x02\x02\u01DA" +
		"\u01DC\x05b2\x02\u01DB\u01D9\x03\x02\x02\x02\u01DC\u01DD\x03\x02\x02\x02" +
		"\u01DD\u01DB\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\u01E0\x03" +
		"\x02\x02\x02\u01DF\u01D7\x03\x02\x02\x02\u01DF\u01D8\x03\x02\x02\x02\u01E0" +
		"Y\x03\x02\x02\x02\u01E1\u01E2\x07\b\x02\x02\u01E2\u01E3\x07`\x02\x02\u01E3" +
		"\u01E4\x07m\x02\x02\u01E4[\x03\x02\x02\x02\u01E5\u01E6\x07\x07\x02\x02" +
		"\u01E6\u01E7\x07`\x02\x02\u01E7\u01E8\x07m\x02\x02\u01E8]\x03\x02\x02" +
		"\x02\u01E9\u01EA\x07\x05\x02\x02\u01EA\u01EB\x07`\x02\x02\u01EB\u01EC" +
		"\x05d3\x02\u01EC_\x03\x02\x02\x02\u01ED\u01EE\x07\x03\x02\x02\u01EE\u01F7" +
		"\x07`\x02\x02\u01EF\u01F8\x07o\x02\x02\u01F0\u01F3\x07o\x02\x02\u01F1" +
		"\u01F2\x07a\x02\x02\u01F2\u01F4\x07o\x02\x02\u01F3\u01F1\x03\x02\x02\x02" +
		"\u01F4\u01F5\x03\x02\x02\x02\u01F5\u01F3\x03\x02\x02\x02\u01F5\u01F6\x03" +
		"\x02\x02\x02\u01F6\u01F8\x03\x02\x02\x02\u01F7\u01EF\x03\x02\x02\x02\u01F7" +
		"\u01F0\x03\x02\x02\x02\u01F8a\x03\x02\x02\x02\u01F9\u01FB\x05n8\x02\u01FA" +
		"\u01FC\t\x02\x02\x02\u01FB\u01FA\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02" +
		"\x02\u01FCc\x03\x02\x02\x02\u01FD\u0200\x05f4\x02\u01FE\u01FF\x07a\x02" +
		"\x02\u01FF\u0201\x05f4\x02\u0200\u01FE\x03\x02\x02\x02\u0200\u0201\x03" +
		"\x02\x02\x02\u0201e\x03\x02\x02\x02\u0202\u0207\x07o\x02\x02\u0203\u0204" +
		"\x07c\x02\x02\u0204\u0205\x05j6\x02\u0205\u0206\x07b\x02\x02\u0206\u0208" +
		"\x03\x02\x02\x02\u0207\u0203\x03\x02\x02\x02\u0207\u0208\x03\x02\x02\x02" +
		"\u0208g\x03\x02\x02\x02\u0209\u020A\x05\x1A\x0E\x02\u020A\u020B\x07\\" +
		"\x02\x02\u020B\u020D\x03\x02\x02\x02\u020C\u0209\x03\x02\x02\x02\u020C" +
		"\u020D\x03\x02\x02\x02\u020D\u0217\x03\x02\x02\x02\u020E\u020F\x05\x18" +
		"\r\x02\u020F\u0213\x07\\\x02\x02\u0210\u0211\x05\x1A\x0E\x02\u0211\u0212" +
		"\x07\\\x02\x02\u0212\u0214\x03\x02\x02\x02\u0213\u0210\x03\x02\x02\x02" +
		"\u0213\u0214\x03\x02\x02\x02\u0214\u0216\x03\x02\x02\x02\u0215\u020E\x03" +
		"\x02\x02\x02\u0216\u0219\x03\x02\x02\x02\u0217\u0215\x03\x02\x02\x02\u0217" +
		"\u0218\x03\x02\x02\x02\u0218\u021A\x03\x02\x02\x02\u0219\u0217\x03\x02" +
		"\x02\x02\u021A\u021D\x05\x18\r\x02\u021B\u021C\x07\\\x02\x02\u021C\u021E" +
		"\x05\x1A";
	private static readonly _serializedATNSegment1: string =
		"\x0E\x02\u021D\u021B\x03\x02\x02\x02\u021D\u021E\x03\x02\x02\x02\u021E" +
		"i\x03\x02\x02\x02\u021F\u0224\x05l7\x02\u0220\u0221\x07Y\x02\x02\u0221" +
		"\u0223\x05l7\x02\u0222\u0220\x03\x02\x02\x02\u0223\u0226\x03\x02\x02\x02" +
		"\u0224\u0222\x03\x02\x02\x02\u0224\u0225\x03\x02\x02\x02\u0225k\x03\x02" +
		"\x02\x02\u0226\u0224\x03\x02\x02\x02\u0227\u0230\x03\x02\x02\x02\u0228" +
		"\u0230\x050\x19\x02\u0229\u0230\x05V,\x02\u022A\u0230\x05X-\x02\u022B" +
		"\u0230\x05Z.\x02\u022C\u0230\x05\\/\x02\u022D\u0230\x05^0\x02\u022E\u0230" +
		"\x05`1\x02\u022F\u0227\x03\x02\x02\x02\u022F\u0228\x03\x02\x02\x02\u022F" +
		"\u0229\x03\x02\x02\x02\u022F\u022A\x03\x02\x02\x02\u022F\u022B\x03\x02" +
		"\x02\x02\u022F\u022C\x03\x02\x02\x02\u022F\u022D\x03\x02\x02\x02\u022F" +
		"\u022E\x03\x02\x02\x02\u0230m\x03\x02\x02\x02\u0231\u0232\b8\x01\x02\u0232" +
		"\u0233\x05r:\x02\u0233\u0235\x07c\x02\x02\u0234\u0236\x05p9\x02\u0235" +
		"\u0234\x03\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u0236\u0237\x03\x02" +
		"\x02\x02\u0237\u0238\x07b\x02\x02\u0238\u0246\x03\x02\x02\x02\u0239\u023A" +
		"\x07c\x02\x02\u023A\u023B\x05n8\x02\u023B\u023C\x07b\x02\x02\u023C\u0246" +
		"\x03\x02\x02\x02\u023D\u023E\t\x03\x02\x02\u023E\u0246\x05n8\x0F\u023F" +
		"\u0240\x07[\x02\x02\u0240\u0246\x05n8\x0E\u0241\u0246\x05\x8AF\x02\u0242" +
		"\u0246\x05\x88E\x02\u0243\u0246\x05t;\x02\u0244\u0246\x05,\x17\x02\u0245" +
		"\u0231\x03\x02\x02\x02\u0245\u0239\x03\x02\x02\x02\u0245\u023D\x03\x02" +
		"\x02\x02\u0245\u023F\x03\x02\x02\x02\u0245\u0241\x03\x02\x02\x02\u0245" +
		"\u0242\x03\x02\x02\x02\u0245\u0243\x03\x02\x02\x02\u0245\u0244\x03\x02" +
		"\x02\x02\u0246\u0264\x03\x02\x02\x02\u0247\u0248\f\r\x02\x02\u0248\u0249" +
		"\x076\x02\x02\u0249\u0263\x05n8\r\u024A\u024B\f\f\x02\x02\u024B\u024C" +
		"\x075\x02\x02\u024C\u0263\x05n8\r\u024D\u024E\f\v\x02\x02\u024E\u024F" +
		"\x074\x02\x02\u024F\u0263\x05n8\f\u0250\u0251\f\n\x02\x02\u0251\u0252" +
		"\x073\x02\x02\u0252\u0263\x05n8\v\u0253\u0254\f\t\x02\x02\u0254\u0255" +
		"\x072\x02\x02\u0255\u0263\x05n8\n\u0256\u0257\f\b\x02\x02\u0257\u0258" +
		"\t\x04\x02\x02\u0258\u0263\x05n8\t\u0259\u025A\f\x07\x02\x02\u025A\u025B" +
		"\t\x05\x02\x02\u025B\u0263\x05n8\b\u025C\u025D\f\x11\x02\x02\u025D\u0260" +
		"\x07.\x02\x02\u025E\u0261\x05\x88E\x02\u025F\u0261\x05,\x17\x02\u0260" +
		"\u025E\x03\x02\x02\x02\u0260\u025F\x03\x02\x02\x02\u0261\u0263\x03\x02" +
		"\x02\x02\u0262\u0247\x03\x02\x02\x02\u0262\u024A\x03\x02\x02\x02\u0262" +
		"\u024D\x03\x02\x02\x02\u0262\u0250\x03\x02\x02\x02\u0262\u0253\x03\x02" +
		"\x02\x02\u0262\u0256\x03\x02\x02\x02\u0262\u0259\x03\x02\x02\x02\u0262" +
		"\u025C\x03\x02\x02\x02\u0263\u0266\x03\x02\x02\x02\u0264\u0262\x03\x02" +
		"\x02\x02\u0264\u0265\x03\x02\x02\x02\u0265o\x03\x02\x02\x02\u0266\u0264" +
		"\x03\x02\x02\x02\u0267\u026C\x05n8\x02\u0268\u0269\x07a\x02\x02\u0269" +
		"\u026B\x05n8\x02\u026A\u0268\x03\x02\x02\x02\u026B\u026E\x03\x02\x02\x02" +
		"\u026C\u026A\x03\x02\x02\x02\u026C\u026D\x03\x02\x02\x02\u026Dq\x03\x02" +
		"\x02\x02\u026E\u026C\x03\x02\x02\x02\u026F\u0270\t\x06\x02\x02\u0270s" +
		"\x03\x02\x02\x02\u0271\u0273\x05v<\x02\u0272\u0271\x03\x02\x02\x02\u0272" +
		"\u0273\x03\x02\x02\x02\u0273\u0274\x03\x02\x02\x02\u0274\u0275\x05x=\x02" +
		"\u0275u\x03\x02\x02\x02\u0276\u0277\x07\r\x02\x02\u0277\u0278\x07\\\x02" +
		"\x02\u0278w\x03\x02\x02\x02\u0279\u027A\x05\x1A\x0E\x02\u027A\u027B\x07" +
		"\\\x02\x02\u027B\u027D\x03\x02\x02\x02\u027C\u0279\x03\x02\x02\x02\u027C" +
		"\u027D\x03\x02\x02\x02\u027D\u027E\x03\x02\x02\x02\u027E\u027F\x05z>\x02" +
		"\u027Fy\x03\x02\x02\x02\u0280\u0281\x05\x18\r\x02\u0281\u0282\x05~@\x02" +
		"\u0282\u0288\x03\x02\x02\x02\u0283\u0284\x05\x18\r\x02\u0284\u0285\x05" +
		"\x80A\x02\u0285\u0288\x03\x02\x02\x02\u0286\u0288\x05\x18\r\x02\u0287" +
		"\u0280\x03\x02\x02\x02\u0287\u0283\x03\x02\x02\x02\u0287\u0286\x03\x02" +
		"\x02\x02\u0288{\x03\x02\x02\x02\u0289\u028A\x07\\\x02\x02\u028A\u028C" +
		"\x05\x1A\x0E\x02\u028B\u0289\x03\x02\x02\x02\u028B\u028C\x03\x02\x02\x02" +
		"\u028C\u0292\x03\x02\x02\x02\u028D\u028F\x05\x1C\x0F\x02\u028E\u0290\x05" +
		"~@\x02\u028F\u028E\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290\u0293" +
		"\x03\x02\x02\x02\u0291\u0293\x05\x80A\x02\u0292\u028D\x03\x02\x02\x02" +
		"\u0292\u0291\x03\x02\x02\x02\u0293}\x03\x02\x02\x02\u0294\u0295\x07\\" +
		"\x02\x02\u0295\u029B\x05x=\x02\u0296\u0297\x07\\\x02\x02\u0297\u0298\x05" +
		",\x17\x02\u0298\u0299\b@\x01\x02\u0299\u029B\x03\x02\x02\x02\u029A\u0294" +
		"\x03\x02\x02\x02\u029A\u0296\x03\x02\x02\x02\u029B\x7F\x03\x02\x02\x02" +
		"\u029C\u02A2\x07\t\x02\x02\u029D\u029E\x07\\\x02\x02\u029E\u02A2\x05\x82" +
		"B\x02\u029F\u02A0\x07\\\x02\x02\u02A0\u02A2\x05\x84C\x02\u02A1\u029C\x03" +
		"\x02\x02\x02\u02A1\u029D\x03\x02\x02\x02\u02A1\u029F\x03\x02\x02\x02\u02A2" +
		"\x81\x03\x02\x02\x02\u02A3\u02A4\x07\x1C\x02\x02\u02A4\u02A9\x07c\x02" +
		"\x02\u02A5\u02A6\x05\x86D\x02\u02A6\u02A7\x07Z\x02\x02\u02A7\u02A8\x05" +
		"n8\x02\u02A8\u02AA\x03\x02\x02\x02\u02A9\u02A5\x03\x02\x02\x02\u02A9\u02AA" +
		"\x03\x02\x02\x02\u02AA\u02AB\x03\x02\x02\x02\u02AB\u02AC\x07b\x02\x02" +
		"\u02AC\x83\x03\x02\x02\x02\u02AD\u02AE\x07\x1C\x02\x02\u02AE\u02AF\x07" +
		"c\x02\x02\u02AF\u02B0\x05\x86D\x02\u02B0\u02B1\x07Z\x02\x02\u02B1\u02B2" +
		"\x05n8\x02\u02B2\u02B3\x07b\x02\x02\u02B3\x85\x03\x02\x02\x02\u02B4\u02B5" +
		"\x07o\x02\x02\u02B5\x87\x03\x02\x02\x02\u02B6\u02BF\x07e\x02\x02\u02B7" +
		"\u02BC\x05\x8AF\x02\u02B8\u02B9\x07a\x02\x02\u02B9\u02BB\x05\x8AF\x02" +
		"\u02BA\u02B8\x03\x02\x02\x02\u02BB\u02BE\x03\x02\x02\x02\u02BC\u02BA\x03" +
		"\x02\x02\x02\u02BC\u02BD\x03\x02\x02\x02\u02BD\u02C0\x03\x02\x02\x02\u02BE" +
		"\u02BC\x03\x02\x02\x02\u02BF\u02B7\x03\x02\x02\x02\u02BF\u02C0\x03\x02" +
		"\x02\x02\u02C0\u02C1\x03\x02\x02\x02\u02C1\u02C2\x07d\x02\x02\u02C2\x89" +
		"\x03\x02\x02\x02\u02C3\u02CE\x07f\x02\x02\u02C4\u02CE\x07k\x02\x02\u02C5" +
		"\u02CE\x07h\x02\x02\u02C6\u02CE\x07g\x02\x02\u02C7\u02CE\x07i\x02\x02" +
		"\u02C8\u02CE\x07m\x02\x02\u02C9\u02CE\x07n\x02\x02\u02CA\u02CE\x07l\x02" +
		"\x02\u02CB\u02CE\x07j\x02\x02\u02CC\u02CE\x05\x8CG\x02\u02CD\u02C3\x03" +
		"\x02\x02\x02\u02CD\u02C4\x03\x02\x02\x02\u02CD\u02C5\x03\x02\x02\x02\u02CD" +
		"\u02C6\x03\x02\x02\x02\u02CD\u02C7\x03\x02\x02\x02\u02CD\u02C8\x03\x02" +
		"\x02\x02\u02CD\u02C9\x03\x02\x02\x02\u02CD\u02CA\x03\x02\x02\x02\u02CD" +
		"\u02CB\x03\x02\x02\x02\u02CD\u02CC\x03\x02\x02\x02\u02CE\x8B\x03\x02\x02" +
		"\x02\u02CF\u02D0\x05\x8EH\x02\u02D0\u02D1\x07^\x02\x02\u02D1\u02D2\x05" +
		"\x90I\x02\u02D2\u02D3\x07^\x02\x02\u02D3\x8D\x03\x02\x02\x02\u02D4\u02D5" +
		"\x05\x94K\x02\u02D5\u02D6\x07o\x02\x02\u02D6\x8F\x03\x02\x02\x02\u02D7" +
		"\u02E0\x05\x92J\x02\u02D8\u02DB\x05\x92J\x02\u02D9\u02DA\x07a\x02\x02" +
		"\u02DA\u02DC\x05\x92J\x02\u02DB\u02D9\x03\x02\x02\x02\u02DC\u02DD\x03" +
		"\x02\x02\x02\u02DD\u02DB\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02\u02DE" +
		"\u02E0\x03\x02\x02\x02\u02DF\u02D7\x03\x02\x02\x02\u02DF\u02D8\x03\x02" +
		"\x02\x02\u02E0\x91\x03\x02\x02\x02\u02E1\u02E6\x07m\x02\x02\u02E2\u02E3" +
		"\x07o\x02\x02\u02E3\u02E4\x07V\x02\x02\u02E4\u02E6\x07o\x02\x02\u02E5" +
		"\u02E1\x03\x02\x02\x02\u02E5\u02E2\x03\x02\x02\x02\u02E6\x93\x03\x02\x02" +
		"\x02\u02E7\u02EC\x07o\x02\x02\u02E8\u02E9\x07V\x02\x02\u02E9\u02EB\x07" +
		"o\x02\x02\u02EA\u02E8\x03\x02\x02\x02\u02EB\u02EE\x03\x02\x02\x02\u02EC" +
		"\u02EA\x03\x02\x02\x02\u02EC\u02ED\x03\x02\x02\x02\u02ED\u02EF\x03\x02" +
		"\x02\x02\u02EE\u02EC\x03\x02\x02\x02\u02EF\u02F0\x07V\x02\x02\u02F0\x95" +
		"\x03\x02\x02\x02L\x99\xA1\xAC\xAF\xB7\xBD\xC1\xC6\xCA\xD2\xDE\xEB\xFB" +
		"\u0105\u010A\u0114\u012F\u0137\u0141\u0143\u0152\u0154\u015D\u0167\u016F" +
		"\u0176\u017A\u0182\u0188\u018F\u0195\u0198\u01A6\u01A9\u01B5\u01B7\u01BD" +
		"\u01C1\u01CC\u01DD\u01DF\u01F5\u01F7\u01FB\u0200\u0207\u020C\u0213\u0217" +
		"\u021D\u0224\u022F\u0235\u0245\u0260\u0262\u0264\u026C\u0272\u027C\u0287" +
		"\u028B\u028F\u0292\u029A\u02A1\u02A9\u02BC\u02BF\u02CD\u02DD\u02DF\u02E5" +
		"\u02EC";
	public static readonly _serializedATN: string = Utils.join(
		[
			OData4LiteParser._serializedATNSegment0,
			OData4LiteParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!OData4LiteParser.__ATN) {
			OData4LiteParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(OData4LiteParser._serializedATN));
		}

		return OData4LiteParser.__ATN;
	}

}

export class OdataRelativeURIContext extends ParserRuleContext {
	public resourcePath(): ResourcePathContext {
		return this.getRuleContext(0, ResourcePathContext);
	}
	public EOF(): TerminalNode { return this.getToken(OData4LiteParser.EOF, 0); }
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.QUESTION, 0); }
	public queryOptions(): QueryOptionsContext | undefined {
		return this.tryGetRuleContext(0, QueryOptionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_odataRelativeURI; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterOdataRelativeURI) {
			listener.enterOdataRelativeURI(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitOdataRelativeURI) {
			listener.exitOdataRelativeURI(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitOdataRelativeURI) {
			return visitor.visitOdataRelativeURI(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourcePathContext extends ParserRuleContext {
	public _id!: Token;
	public IDENTIFIER(): TerminalNode { return this.getToken(OData4LiteParser.IDENTIFIER, 0); }
	public functionImportCall(): FunctionImportCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionImportCallContext);
	}
	public singleNavigation(): SingleNavigationContext | undefined {
		return this.tryGetRuleContext(0, SingleNavigationContext);
	}
	public collectionNavigation(): CollectionNavigationContext | undefined {
		return this.tryGetRuleContext(0, CollectionNavigationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_resourcePath; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterResourcePath) {
			listener.enterResourcePath(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitResourcePath) {
			listener.exitResourcePath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitResourcePath) {
			return visitor.visitResourcePath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionImportCallContext extends ParserRuleContext {
	public identifier: string;
	public functionParameters(): FunctionParametersContext {
		return this.getRuleContext(0, FunctionParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number, identifier: string) {
		super(parent, invokingState);
		this.identifier = identifier;
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_functionImportCall; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterFunctionImportCall) {
			listener.enterFunctionImportCall(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitFunctionImportCall) {
			listener.exitFunctionImportCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitFunctionImportCall) {
			return visitor.visitFunctionImportCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionParametersContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(OData4LiteParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(OData4LiteParser.RPAREN, 0); }
	public functionParameter(): FunctionParameterContext[];
	public functionParameter(i: number): FunctionParameterContext;
	public functionParameter(i?: number): FunctionParameterContext | FunctionParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionParameterContext);
		} else {
			return this.getRuleContext(i, FunctionParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(OData4LiteParser.COMMA);
		} else {
			return this.getToken(OData4LiteParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_functionParameters; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterFunctionParameters) {
			listener.enterFunctionParameters(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitFunctionParameters) {
			listener.exitFunctionParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitFunctionParameters) {
			return visitor.visitFunctionParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionParameterContext extends ParserRuleContext {
	public functionParameterName(): FunctionParameterNameContext {
		return this.getRuleContext(0, FunctionParameterNameContext);
	}
	public EQ(): TerminalNode { return this.getToken(OData4LiteParser.EQ, 0); }
	public parameterAlias(): ParameterAliasContext | undefined {
		return this.tryGetRuleContext(0, ParameterAliasContext);
	}
	public primitiveLiteral(): PrimitiveLiteralContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_functionParameter; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterFunctionParameter) {
			listener.enterFunctionParameter(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitFunctionParameter) {
			listener.exitFunctionParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitFunctionParameter) {
			return visitor.visitFunctionParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionParameterNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(OData4LiteParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_functionParameterName; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterFunctionParameterName) {
			listener.enterFunctionParameterName(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitFunctionParameterName) {
			listener.exitFunctionParameterName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitFunctionParameterName) {
			return visitor.visitFunctionParameterName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CollectionNavigationContext extends ParserRuleContext {
	public keyPredicate(): KeyPredicateContext | undefined {
		return this.tryGetRuleContext(0, KeyPredicateContext);
	}
	public collectionPath(): CollectionPathContext | undefined {
		return this.tryGetRuleContext(0, CollectionPathContext);
	}
	public FWD_SLASH(): TerminalNode[];
	public FWD_SLASH(i: number): TerminalNode;
	public FWD_SLASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(OData4LiteParser.FWD_SLASH);
		} else {
			return this.getToken(OData4LiteParser.FWD_SLASH, i);
		}
	}
	public REF_OPT(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.REF_OPT, 0); }
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public singleNavigation(): SingleNavigationContext | undefined {
		return this.tryGetRuleContext(0, SingleNavigationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_collectionNavigation; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterCollectionNavigation) {
			listener.enterCollectionNavigation(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitCollectionNavigation) {
			listener.exitCollectionNavigation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitCollectionNavigation) {
			return visitor.visitCollectionNavigation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleNavigationContext extends ParserRuleContext {
	public FWD_SLASH(): TerminalNode[];
	public FWD_SLASH(i: number): TerminalNode;
	public FWD_SLASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(OData4LiteParser.FWD_SLASH);
		} else {
			return this.getToken(OData4LiteParser.FWD_SLASH, i);
		}
	}
	public propertyPath(): PropertyPathContext | undefined {
		return this.tryGetRuleContext(0, PropertyPathContext);
	}
	public REF_OPT(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.REF_OPT, 0); }
	public VALUE_OPT(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.VALUE_OPT, 0); }
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_singleNavigation; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterSingleNavigation) {
			listener.enterSingleNavigation(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitSingleNavigation) {
			listener.exitSingleNavigation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitSingleNavigation) {
			return visitor.visitSingleNavigation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyPathContext extends ParserRuleContext {
	public property(): PropertyContext {
		return this.getRuleContext(0, PropertyContext);
	}
	public collectionNavigation(): CollectionNavigationContext | undefined {
		return this.tryGetRuleContext(0, CollectionNavigationContext);
	}
	public singleNavigation(): SingleNavigationContext | undefined {
		return this.tryGetRuleContext(0, SingleNavigationContext);
	}
	public singlePath(): SinglePathContext | undefined {
		return this.tryGetRuleContext(0, SinglePathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_propertyPath; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterPropertyPath) {
			listener.enterPropertyPath(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitPropertyPath) {
			listener.exitPropertyPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitPropertyPath) {
			return visitor.visitPropertyPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CollectionPathContext extends ParserRuleContext {
	public count(): CountContext {
		return this.getRuleContext(0, CountContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_collectionPath; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterCollectionPath) {
			listener.enterCollectionPath(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitCollectionPath) {
			listener.exitCollectionPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitCollectionPath) {
			return visitor.visitCollectionPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SinglePathContext extends ParserRuleContext {
	public VALUE_OPT(): TerminalNode { return this.getToken(OData4LiteParser.VALUE_OPT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_singlePath; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterSinglePath) {
			listener.enterSinglePath(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitSinglePath) {
			listener.exitSinglePath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitSinglePath) {
			return visitor.visitSinglePath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(OData4LiteParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_property; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterProperty) {
			listener.enterProperty(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitProperty) {
			listener.exitProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitProperty) {
			return visitor.visitProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	public namespace(): NamespaceContext {
		return this.getRuleContext(0, NamespaceContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(OData4LiteParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyPredicateContext extends ParserRuleContext {
	public simpleKey(): SimpleKeyContext | undefined {
		return this.tryGetRuleContext(0, SimpleKeyContext);
	}
	public compoundKey(): CompoundKeyContext | undefined {
		return this.tryGetRuleContext(0, CompoundKeyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_keyPredicate; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterKeyPredicate) {
			listener.enterKeyPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitKeyPredicate) {
			listener.exitKeyPredicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitKeyPredicate) {
			return visitor.visitKeyPredicate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleKeyContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(OData4LiteParser.LPAREN, 0); }
	public primitiveLiteral(): PrimitiveLiteralContext {
		return this.getRuleContext(0, PrimitiveLiteralContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(OData4LiteParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_simpleKey; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterSimpleKey) {
			listener.enterSimpleKey(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitSimpleKey) {
			listener.exitSimpleKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitSimpleKey) {
			return visitor.visitSimpleKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompoundKeyContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(OData4LiteParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(OData4LiteParser.RPAREN, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(OData4LiteParser.IDENTIFIER);
		} else {
			return this.getToken(OData4LiteParser.IDENTIFIER, i);
		}
	}
	public EQ(): TerminalNode[];
	public EQ(i: number): TerminalNode;
	public EQ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(OData4LiteParser.EQ);
		} else {
			return this.getToken(OData4LiteParser.EQ, i);
		}
	}
	public primitiveLiteral(): PrimitiveLiteralContext[];
	public primitiveLiteral(i: number): PrimitiveLiteralContext;
	public primitiveLiteral(i?: number): PrimitiveLiteralContext | PrimitiveLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrimitiveLiteralContext);
		} else {
			return this.getRuleContext(i, PrimitiveLiteralContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(OData4LiteParser.COMMA);
		} else {
			return this.getToken(OData4LiteParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_compoundKey; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterCompoundKey) {
			listener.enterCompoundKey(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitCompoundKey) {
			listener.exitCompoundKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitCompoundKey) {
			return visitor.visitCompoundKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryOptionsContext extends ParserRuleContext {
	public queryOption(): QueryOptionContext[];
	public queryOption(i: number): QueryOptionContext;
	public queryOption(i?: number): QueryOptionContext | QueryOptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QueryOptionContext);
		} else {
			return this.getRuleContext(i, QueryOptionContext);
		}
	}
	public AMPERSAND(): TerminalNode[];
	public AMPERSAND(i: number): TerminalNode;
	public AMPERSAND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(OData4LiteParser.AMPERSAND);
		} else {
			return this.getToken(OData4LiteParser.AMPERSAND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_queryOptions; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterQueryOptions) {
			listener.enterQueryOptions(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitQueryOptions) {
			listener.exitQueryOptions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitQueryOptions) {
			return visitor.visitQueryOptions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryOptionContext extends ParserRuleContext {
	public systemQueryOption(): SystemQueryOptionContext | undefined {
		return this.tryGetRuleContext(0, SystemQueryOptionContext);
	}
	public aliasAndValue(): AliasAndValueContext | undefined {
		return this.tryGetRuleContext(0, AliasAndValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_queryOption; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterQueryOption) {
			listener.enterQueryOption(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitQueryOption) {
			listener.exitQueryOption(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitQueryOption) {
			return visitor.visitQueryOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SystemQueryOptionContext extends ParserRuleContext {
	public filter(): FilterContext | undefined {
		return this.tryGetRuleContext(0, FilterContext);
	}
	public count(): CountContext | undefined {
		return this.tryGetRuleContext(0, CountContext);
	}
	public top(): TopContext | undefined {
		return this.tryGetRuleContext(0, TopContext);
	}
	public skip(): SkipContext | undefined {
		return this.tryGetRuleContext(0, SkipContext);
	}
	public orderby(): OrderbyContext | undefined {
		return this.tryGetRuleContext(0, OrderbyContext);
	}
	public expand(): ExpandContext | undefined {
		return this.tryGetRuleContext(0, ExpandContext);
	}
	public select(): SelectContext | undefined {
		return this.tryGetRuleContext(0, SelectContext);
	}
	public apply(): ApplyContext | undefined {
		return this.tryGetRuleContext(0, ApplyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_systemQueryOption; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterSystemQueryOption) {
			listener.enterSystemQueryOption(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitSystemQueryOption) {
			listener.exitSystemQueryOption(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitSystemQueryOption) {
			return visitor.visitSystemQueryOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DynamicPropertyAssignmentContext extends ParserRuleContext {
	public OP_AS(): TerminalNode { return this.getToken(OData4LiteParser.OP_AS, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(OData4LiteParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_dynamicPropertyAssignment; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterDynamicPropertyAssignment) {
			listener.enterDynamicPropertyAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitDynamicPropertyAssignment) {
			listener.exitDynamicPropertyAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitDynamicPropertyAssignment) {
			return visitor.visitDynamicPropertyAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AliasAndValueContext extends ParserRuleContext {
	public parameterAlias(): ParameterAliasContext {
		return this.getRuleContext(0, ParameterAliasContext);
	}
	public EQ(): TerminalNode { return this.getToken(OData4LiteParser.EQ, 0); }
	public parameterValue(): ParameterValueContext {
		return this.getRuleContext(0, ParameterValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_aliasAndValue; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterAliasAndValue) {
			listener.enterAliasAndValue(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitAliasAndValue) {
			listener.exitAliasAndValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitAliasAndValue) {
			return visitor.visitAliasAndValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterAliasContext extends ParserRuleContext {
	public AT_SIGN(): TerminalNode { return this.getToken(OData4LiteParser.AT_SIGN, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(OData4LiteParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_parameterAlias; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterParameterAlias) {
			listener.enterParameterAlias(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitParameterAlias) {
			listener.exitParameterAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitParameterAlias) {
			return visitor.visitParameterAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterValueContext extends ParserRuleContext {
	public primitiveLiteral(): PrimitiveLiteralContext {
		return this.getRuleContext(0, PrimitiveLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_parameterValue; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterParameterValue) {
			listener.enterParameterValue(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitParameterValue) {
			listener.exitParameterValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitParameterValue) {
			return visitor.visitParameterValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FilterContext extends ParserRuleContext {
	public FILTER_OPT(): TerminalNode { return this.getToken(OData4LiteParser.FILTER_OPT, 0); }
	public EQ(): TerminalNode { return this.getToken(OData4LiteParser.EQ, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_filter; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterFilter) {
			listener.enterFilter(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitFilter) {
			listener.exitFilter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitFilter) {
			return visitor.visitFilter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ApplyContext extends ParserRuleContext {
	public APPLY_OPT(): TerminalNode { return this.getToken(OData4LiteParser.APPLY_OPT, 0); }
	public EQ(): TerminalNode { return this.getToken(OData4LiteParser.EQ, 0); }
	public applyExpression(): ApplyExpressionContext {
		return this.getRuleContext(0, ApplyExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_apply; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterApply) {
			listener.enterApply(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitApply) {
			listener.exitApply(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitApply) {
			return visitor.visitApply(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ApplyExpressionContext extends ParserRuleContext {
	public applyTrafo(): ApplyTrafoContext[];
	public applyTrafo(i: number): ApplyTrafoContext;
	public applyTrafo(i?: number): ApplyTrafoContext | ApplyTrafoContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ApplyTrafoContext);
		} else {
			return this.getRuleContext(i, ApplyTrafoContext);
		}
	}
	public FWD_SLASH(): TerminalNode[];
	public FWD_SLASH(i: number): TerminalNode;
	public FWD_SLASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(OData4LiteParser.FWD_SLASH);
		} else {
			return this.getToken(OData4LiteParser.FWD_SLASH, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_applyExpression; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterApplyExpression) {
			listener.enterApplyExpression(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitApplyExpression) {
			listener.exitApplyExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitApplyExpression) {
			return visitor.visitApplyExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ApplyTrafoContext extends ParserRuleContext {
	public computeTrafo(): ComputeTrafoContext | undefined {
		return this.tryGetRuleContext(0, ComputeTrafoContext);
	}
	public concatTrafo(): ConcatTrafoContext | undefined {
		return this.tryGetRuleContext(0, ConcatTrafoContext);
	}
	public groupbyTrafo(): GroupbyTrafoContext | undefined {
		return this.tryGetRuleContext(0, GroupbyTrafoContext);
	}
	public aggregateTrafo(): AggregateTrafoContext | undefined {
		return this.tryGetRuleContext(0, AggregateTrafoContext);
	}
	public filterTrafo(): FilterTrafoContext | undefined {
		return this.tryGetRuleContext(0, FilterTrafoContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_applyTrafo; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterApplyTrafo) {
			listener.enterApplyTrafo(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitApplyTrafo) {
			listener.exitApplyTrafo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitApplyTrafo) {
			return visitor.visitApplyTrafo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComputeTrafoContext extends ParserRuleContext {
	public COMPUTE(): TerminalNode { return this.getToken(OData4LiteParser.COMPUTE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(OData4LiteParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(OData4LiteParser.RPAREN, 0); }
	public computeExpression(): ComputeExpressionContext[];
	public computeExpression(i: number): ComputeExpressionContext;
	public computeExpression(i?: number): ComputeExpressionContext | ComputeExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComputeExpressionContext);
		} else {
			return this.getRuleContext(i, ComputeExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(OData4LiteParser.COMMA);
		} else {
			return this.getToken(OData4LiteParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_computeTrafo; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterComputeTrafo) {
			listener.enterComputeTrafo(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitComputeTrafo) {
			listener.exitComputeTrafo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitComputeTrafo) {
			return visitor.visitComputeTrafo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComputeExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public dynamicPropertyAssignment(): DynamicPropertyAssignmentContext {
		return this.getRuleContext(0, DynamicPropertyAssignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_computeExpression; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterComputeExpression) {
			listener.enterComputeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitComputeExpression) {
			listener.exitComputeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitComputeExpression) {
			return visitor.visitComputeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConcatTrafoContext extends ParserRuleContext {
	public CONCAT(): TerminalNode { return this.getToken(OData4LiteParser.CONCAT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(OData4LiteParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(OData4LiteParser.RPAREN, 0); }
	public applyTrafo(): ApplyTrafoContext[];
	public applyTrafo(i: number): ApplyTrafoContext;
	public applyTrafo(i?: number): ApplyTrafoContext | ApplyTrafoContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ApplyTrafoContext);
		} else {
			return this.getRuleContext(i, ApplyTrafoContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(OData4LiteParser.COMMA);
		} else {
			return this.getToken(OData4LiteParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_concatTrafo; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterConcatTrafo) {
			listener.enterConcatTrafo(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitConcatTrafo) {
			listener.exitConcatTrafo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitConcatTrafo) {
			return visitor.visitConcatTrafo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupbyTrafoContext extends ParserRuleContext {
	public GROUPBY(): TerminalNode { return this.getToken(OData4LiteParser.GROUPBY, 0); }
	public LPAREN(): TerminalNode { return this.getToken(OData4LiteParser.LPAREN, 0); }
	public groupByList(): GroupByListContext {
		return this.getRuleContext(0, GroupByListContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(OData4LiteParser.RPAREN, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.COMMA, 0); }
	public applyExpression(): ApplyExpressionContext | undefined {
		return this.tryGetRuleContext(0, ApplyExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_groupbyTrafo; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterGroupbyTrafo) {
			listener.enterGroupbyTrafo(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitGroupbyTrafo) {
			listener.exitGroupbyTrafo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitGroupbyTrafo) {
			return visitor.visitGroupbyTrafo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupByListContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(OData4LiteParser.LPAREN, 0); }
	public groupbyElement(): GroupbyElementContext[];
	public groupbyElement(i: number): GroupbyElementContext;
	public groupbyElement(i?: number): GroupbyElementContext | GroupbyElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GroupbyElementContext);
		} else {
			return this.getRuleContext(i, GroupbyElementContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(OData4LiteParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(OData4LiteParser.COMMA);
		} else {
			return this.getToken(OData4LiteParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_groupByList; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterGroupByList) {
			listener.enterGroupByList(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitGroupByList) {
			listener.exitGroupByList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitGroupByList) {
			return visitor.visitGroupByList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupbyElementContext extends ParserRuleContext {
	public groupingProperty(): GroupingPropertyContext {
		return this.getRuleContext(0, GroupingPropertyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_groupbyElement; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterGroupbyElement) {
			listener.enterGroupbyElement(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitGroupbyElement) {
			listener.exitGroupbyElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitGroupbyElement) {
			return visitor.visitGroupbyElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupingPropertyContext extends ParserRuleContext {
	public property(): PropertyContext | undefined {
		return this.tryGetRuleContext(0, PropertyContext);
	}
	public pathPrefix(): PathPrefixContext | undefined {
		return this.tryGetRuleContext(0, PathPrefixContext);
	}
	public FWD_SLASH(): TerminalNode[];
	public FWD_SLASH(i: number): TerminalNode;
	public FWD_SLASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(OData4LiteParser.FWD_SLASH);
		} else {
			return this.getToken(OData4LiteParser.FWD_SLASH, i);
		}
	}
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_groupingProperty; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterGroupingProperty) {
			listener.enterGroupingProperty(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitGroupingProperty) {
			listener.exitGroupingProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitGroupingProperty) {
			return visitor.visitGroupingProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathPrefixContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	public FWD_SLASH(): TerminalNode[];
	public FWD_SLASH(i: number): TerminalNode;
	public FWD_SLASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(OData4LiteParser.FWD_SLASH);
		} else {
			return this.getToken(OData4LiteParser.FWD_SLASH, i);
		}
	}
	public property(): PropertyContext[];
	public property(i: number): PropertyContext;
	public property(i?: number): PropertyContext | PropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyContext);
		} else {
			return this.getRuleContext(i, PropertyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_pathPrefix; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterPathPrefix) {
			listener.enterPathPrefix(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitPathPrefix) {
			listener.exitPathPrefix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitPathPrefix) {
			return visitor.visitPathPrefix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FilterTrafoContext extends ParserRuleContext {
	public FILTER(): TerminalNode { return this.getToken(OData4LiteParser.FILTER, 0); }
	public LPAREN(): TerminalNode { return this.getToken(OData4LiteParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(OData4LiteParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_filterTrafo; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterFilterTrafo) {
			listener.enterFilterTrafo(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitFilterTrafo) {
			listener.exitFilterTrafo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitFilterTrafo) {
			return visitor.visitFilterTrafo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AggregateTrafoContext extends ParserRuleContext {
	public AGGREGATE(): TerminalNode { return this.getToken(OData4LiteParser.AGGREGATE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(OData4LiteParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(OData4LiteParser.RPAREN, 0); }
	public aggregationParam(): AggregationParamContext[];
	public aggregationParam(i: number): AggregationParamContext;
	public aggregationParam(i?: number): AggregationParamContext | AggregationParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AggregationParamContext);
		} else {
			return this.getRuleContext(i, AggregationParamContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(OData4LiteParser.COMMA);
		} else {
			return this.getToken(OData4LiteParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_aggregateTrafo; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterAggregateTrafo) {
			listener.enterAggregateTrafo(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitAggregateTrafo) {
			listener.exitAggregateTrafo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitAggregateTrafo) {
			return visitor.visitAggregateTrafo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AggregationParamContext extends ParserRuleContext {
	public expandPath(): ExpandPathContext | undefined {
		return this.tryGetRuleContext(0, ExpandPathContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.LPAREN, 0); }
	public aggregationExpr(): AggregationExprContext | undefined {
		return this.tryGetRuleContext(0, AggregationExprContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.RPAREN, 0); }
	public aggregatedProperty(): AggregatedPropertyContext | undefined {
		return this.tryGetRuleContext(0, AggregatedPropertyContext);
	}
	public aggregateWith(): AggregateWithContext | undefined {
		return this.tryGetRuleContext(0, AggregateWithContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_aggregationParam; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterAggregationParam) {
			listener.enterAggregationParam(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitAggregationParam) {
			listener.exitAggregationParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitAggregationParam) {
			return visitor.visitAggregationParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AggregationExprContext extends ParserRuleContext {
	public COUNT_OPT(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.COUNT_OPT, 0); }
	public dynamicPropertyAssignment(): DynamicPropertyAssignmentContext | undefined {
		return this.tryGetRuleContext(0, DynamicPropertyAssignmentContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public aggregateWith(): AggregateWithContext | undefined {
		return this.tryGetRuleContext(0, AggregateWithContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_aggregationExpr; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterAggregationExpr) {
			listener.enterAggregationExpr(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitAggregationExpr) {
			listener.exitAggregationExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitAggregationExpr) {
			return visitor.visitAggregationExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AggregateWithContext extends ParserRuleContext {
	public OP_WITH(): TerminalNode { return this.getToken(OData4LiteParser.OP_WITH, 0); }
	public aggregateMethod(): AggregateMethodContext {
		return this.getRuleContext(0, AggregateMethodContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_aggregateWith; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterAggregateWith) {
			listener.enterAggregateWith(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitAggregateWith) {
			listener.exitAggregateWith(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitAggregateWith) {
			return visitor.visitAggregateWith(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AggregateMethodContext extends ParserRuleContext {
	public SUM_AGGREGATION(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.SUM_AGGREGATION, 0); }
	public MIN_AGGREGATION(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.MIN_AGGREGATION, 0); }
	public MAX_AGGREGATION(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.MAX_AGGREGATION, 0); }
	public AVERAGE_AGGREGATION(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.AVERAGE_AGGREGATION, 0); }
	public COUNTDISTINCT_AGGREGATION(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.COUNTDISTINCT_AGGREGATION, 0); }
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_aggregateMethod; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterAggregateMethod) {
			listener.enterAggregateMethod(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitAggregateMethod) {
			listener.exitAggregateMethod(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitAggregateMethod) {
			return visitor.visitAggregateMethod(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AggregatedPropertyContext extends ParserRuleContext {
	public pathPrefix(): PathPrefixContext {
		return this.getRuleContext(0, PathPrefixContext);
	}
	public property(): PropertyContext {
		return this.getRuleContext(0, PropertyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_aggregatedProperty; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterAggregatedProperty) {
			listener.enterAggregatedProperty(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitAggregatedProperty) {
			listener.exitAggregatedProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitAggregatedProperty) {
			return visitor.visitAggregatedProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CountContext extends ParserRuleContext {
	public COUNT_OPT(): TerminalNode { return this.getToken(OData4LiteParser.COUNT_OPT, 0); }
	public EQ(): TerminalNode { return this.getToken(OData4LiteParser.EQ, 0); }
	public LIT_BOOLEAN(): TerminalNode { return this.getToken(OData4LiteParser.LIT_BOOLEAN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_count; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterCount) {
			listener.enterCount(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitCount) {
			listener.exitCount(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitCount) {
			return visitor.visitCount(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderbyContext extends ParserRuleContext {
	public ORDERBY_OPT(): TerminalNode { return this.getToken(OData4LiteParser.ORDERBY_OPT, 0); }
	public EQ(): TerminalNode { return this.getToken(OData4LiteParser.EQ, 0); }
	public orderbyItem(): OrderbyItemContext[];
	public orderbyItem(i: number): OrderbyItemContext;
	public orderbyItem(i?: number): OrderbyItemContext | OrderbyItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OrderbyItemContext);
		} else {
			return this.getRuleContext(i, OrderbyItemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(OData4LiteParser.COMMA);
		} else {
			return this.getToken(OData4LiteParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_orderby; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterOrderby) {
			listener.enterOrderby(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitOrderby) {
			listener.exitOrderby(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitOrderby) {
			return visitor.visitOrderby(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SkipContext extends ParserRuleContext {
	public SKIP_COUNT(): TerminalNode { return this.getToken(OData4LiteParser.SKIP_COUNT, 0); }
	public EQ(): TerminalNode { return this.getToken(OData4LiteParser.EQ, 0); }
	public LIT_INTEGER(): TerminalNode { return this.getToken(OData4LiteParser.LIT_INTEGER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_skip; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterSkip) {
			listener.enterSkip(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitSkip) {
			listener.exitSkip(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitSkip) {
			return visitor.visitSkip(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TopContext extends ParserRuleContext {
	public TOP_OPT(): TerminalNode { return this.getToken(OData4LiteParser.TOP_OPT, 0); }
	public EQ(): TerminalNode { return this.getToken(OData4LiteParser.EQ, 0); }
	public LIT_INTEGER(): TerminalNode { return this.getToken(OData4LiteParser.LIT_INTEGER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_top; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterTop) {
			listener.enterTop(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitTop) {
			listener.exitTop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitTop) {
			return visitor.visitTop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpandContext extends ParserRuleContext {
	public EXPAND_OPT(): TerminalNode { return this.getToken(OData4LiteParser.EXPAND_OPT, 0); }
	public EQ(): TerminalNode { return this.getToken(OData4LiteParser.EQ, 0); }
	public expandItemList(): ExpandItemListContext {
		return this.getRuleContext(0, ExpandItemListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_expand; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterExpand) {
			listener.enterExpand(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitExpand) {
			listener.exitExpand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitExpand) {
			return visitor.visitExpand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectContext extends ParserRuleContext {
	public SELECT_OPT(): TerminalNode { return this.getToken(OData4LiteParser.SELECT_OPT, 0); }
	public EQ(): TerminalNode { return this.getToken(OData4LiteParser.EQ, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(OData4LiteParser.IDENTIFIER);
		} else {
			return this.getToken(OData4LiteParser.IDENTIFIER, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(OData4LiteParser.COMMA);
		} else {
			return this.getToken(OData4LiteParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_select; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterSelect) {
			listener.enterSelect(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitSelect) {
			listener.exitSelect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitSelect) {
			return visitor.visitSelect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderbyItemContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public DESC(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.DESC, 0); }
	public ASC(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.ASC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_orderbyItem; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterOrderbyItem) {
			listener.enterOrderbyItem(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitOrderbyItem) {
			listener.exitOrderbyItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitOrderbyItem) {
			return visitor.visitOrderbyItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpandItemListContext extends ParserRuleContext {
	public expandItem(): ExpandItemContext[];
	public expandItem(i: number): ExpandItemContext;
	public expandItem(i?: number): ExpandItemContext | ExpandItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpandItemContext);
		} else {
			return this.getRuleContext(i, ExpandItemContext);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_expandItemList; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterExpandItemList) {
			listener.enterExpandItemList(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitExpandItemList) {
			listener.exitExpandItemList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitExpandItemList) {
			return visitor.visitExpandItemList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpandItemContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(OData4LiteParser.IDENTIFIER, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.LPAREN, 0); }
	public expandQueryOptions(): ExpandQueryOptionsContext | undefined {
		return this.tryGetRuleContext(0, ExpandQueryOptionsContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_expandItem; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterExpandItem) {
			listener.enterExpandItem(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitExpandItem) {
			listener.exitExpandItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitExpandItem) {
			return visitor.visitExpandItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpandPathContext extends ParserRuleContext {
	public property(): PropertyContext[];
	public property(i: number): PropertyContext;
	public property(i?: number): PropertyContext | PropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyContext);
		} else {
			return this.getRuleContext(i, PropertyContext);
		}
	}
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	public FWD_SLASH(): TerminalNode[];
	public FWD_SLASH(i: number): TerminalNode;
	public FWD_SLASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(OData4LiteParser.FWD_SLASH);
		} else {
			return this.getToken(OData4LiteParser.FWD_SLASH, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_expandPath; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterExpandPath) {
			listener.enterExpandPath(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitExpandPath) {
			listener.exitExpandPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitExpandPath) {
			return visitor.visitExpandPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpandQueryOptionsContext extends ParserRuleContext {
	public expandQueryOption(): ExpandQueryOptionContext[];
	public expandQueryOption(i: number): ExpandQueryOptionContext;
	public expandQueryOption(i?: number): ExpandQueryOptionContext | ExpandQueryOptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpandQueryOptionContext);
		} else {
			return this.getRuleContext(i, ExpandQueryOptionContext);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(OData4LiteParser.SEMICOLON);
		} else {
			return this.getToken(OData4LiteParser.SEMICOLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_expandQueryOptions; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterExpandQueryOptions) {
			listener.enterExpandQueryOptions(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitExpandQueryOptions) {
			listener.exitExpandQueryOptions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitExpandQueryOptions) {
			return visitor.visitExpandQueryOptions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpandQueryOptionContext extends ParserRuleContext {
	public filter(): FilterContext | undefined {
		return this.tryGetRuleContext(0, FilterContext);
	}
	public count(): CountContext | undefined {
		return this.tryGetRuleContext(0, CountContext);
	}
	public orderby(): OrderbyContext | undefined {
		return this.tryGetRuleContext(0, OrderbyContext);
	}
	public skip(): SkipContext | undefined {
		return this.tryGetRuleContext(0, SkipContext);
	}
	public top(): TopContext | undefined {
		return this.tryGetRuleContext(0, TopContext);
	}
	public expand(): ExpandContext | undefined {
		return this.tryGetRuleContext(0, ExpandContext);
	}
	public select(): SelectContext | undefined {
		return this.tryGetRuleContext(0, SelectContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_expandQueryOption; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterExpandQueryOption) {
			listener.enterExpandQueryOption(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitExpandQueryOption) {
			listener.exitExpandQueryOption(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitExpandQueryOption) {
			return visitor.visitExpandQueryOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class FunctionExpressionContext extends ExpressionContext {
	public functionName(): FunctionNameContext {
		return this.getRuleContext(0, FunctionNameContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(OData4LiteParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(OData4LiteParser.RPAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterFunctionExpression) {
			listener.enterFunctionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitFunctionExpression) {
			listener.exitFunctionExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitFunctionExpression) {
			return visitor.visitFunctionExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public OP_IN(): TerminalNode { return this.getToken(OData4LiteParser.OP_IN, 0); }
	public primitiveLiteralCollection(): PrimitiveLiteralCollectionContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveLiteralCollectionContext);
	}
	public parameterAlias(): ParameterAliasContext | undefined {
		return this.tryGetRuleContext(0, ParameterAliasContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterInExpression) {
			listener.enterInExpression(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitInExpression) {
			listener.exitInExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitInExpression) {
			return visitor.visitInExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesisExpressionContext extends ExpressionContext {
	public LPAREN(): TerminalNode { return this.getToken(OData4LiteParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(OData4LiteParser.RPAREN, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterParenthesisExpression) {
			listener.enterParenthesisExpression(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitParenthesisExpression) {
			listener.exitParenthesisExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitParenthesisExpression) {
			return visitor.visitParenthesisExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public OP_NOT(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.OP_NOT, 0); }
	public OP_HAS(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.OP_HAS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.MINUS, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterUnaryExpression) {
			listener.enterUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitUnaryExpression) {
			listener.exitUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitUnaryExpression) {
			return visitor.visitUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NegativeExpressionContext extends ExpressionContext {
	public MINUS(): TerminalNode { return this.getToken(OData4LiteParser.MINUS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterNegativeExpression) {
			listener.enterNegativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitNegativeExpression) {
			listener.exitNegativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitNegativeExpression) {
			return visitor.visitNegativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ModulusExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public OP_MOD(): TerminalNode { return this.getToken(OData4LiteParser.OP_MOD, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterModulusExpression) {
			listener.enterModulusExpression(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitModulusExpression) {
			listener.exitModulusExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitModulusExpression) {
			return visitor.visitModulusExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplyExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public OP_MUL(): TerminalNode { return this.getToken(OData4LiteParser.OP_MUL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterMultiplyExpression) {
			listener.enterMultiplyExpression(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitMultiplyExpression) {
			listener.exitMultiplyExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitMultiplyExpression) {
			return visitor.visitMultiplyExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DivisionExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public OP_DIV(): TerminalNode { return this.getToken(OData4LiteParser.OP_DIV, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterDivisionExpression) {
			listener.enterDivisionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitDivisionExpression) {
			listener.exitDivisionExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitDivisionExpression) {
			return visitor.visitDivisionExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubtractExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public OP_SUB(): TerminalNode { return this.getToken(OData4LiteParser.OP_SUB, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterSubtractExpression) {
			listener.enterSubtractExpression(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitSubtractExpression) {
			listener.exitSubtractExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitSubtractExpression) {
			return visitor.visitSubtractExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public OP_ADD(): TerminalNode { return this.getToken(OData4LiteParser.OP_ADD, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterAddExpression) {
			listener.enterAddExpression(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitAddExpression) {
			listener.exitAddExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitAddExpression) {
			return visitor.visitAddExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BinaryExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public OP_EQ(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.OP_EQ, 0); }
	public OP_NE(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.OP_NE, 0); }
	public OP_GT(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.OP_GT, 0); }
	public OP_GE(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.OP_GE, 0); }
	public OP_LT(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.OP_LT, 0); }
	public OP_LE(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.OP_LE, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterBinaryExpression) {
			listener.enterBinaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitBinaryExpression) {
			listener.exitBinaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitBinaryExpression) {
			return visitor.visitBinaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public OP_AND(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.OP_AND, 0); }
	public OP_OR(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.OP_OR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterLogicalExpression) {
			listener.enterLogicalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitLogicalExpression) {
			listener.exitLogicalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitLogicalExpression) {
			return visitor.visitLogicalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralExpressionContext extends ExpressionContext {
	public primitiveLiteral(): PrimitiveLiteralContext {
		return this.getRuleContext(0, PrimitiveLiteralContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterLiteralExpression) {
			listener.enterLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitLiteralExpression) {
			listener.exitLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitLiteralExpression) {
			return visitor.visitLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralCollectionExpressionContext extends ExpressionContext {
	public primitiveLiteralCollection(): PrimitiveLiteralCollectionContext {
		return this.getRuleContext(0, PrimitiveLiteralCollectionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterLiteralCollectionExpression) {
			listener.enterLiteralCollectionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitLiteralCollectionExpression) {
			listener.exitLiteralCollectionExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitLiteralCollectionExpression) {
			return visitor.visitLiteralCollectionExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FirstMemberExpressionContext extends ExpressionContext {
	public firstMemberExpr(): FirstMemberExprContext {
		return this.getRuleContext(0, FirstMemberExprContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterFirstMemberExpression) {
			listener.enterFirstMemberExpression(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitFirstMemberExpression) {
			listener.exitFirstMemberExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitFirstMemberExpression) {
			return visitor.visitFirstMemberExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AliasExpressionContext extends ExpressionContext {
	public parameterAlias(): ParameterAliasContext {
		return this.getRuleContext(0, ParameterAliasContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterAliasExpression) {
			listener.enterAliasExpression(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitAliasExpression) {
			listener.exitAliasExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitAliasExpression) {
			return visitor.visitAliasExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(OData4LiteParser.COMMA);
		} else {
			return this.getToken(OData4LiteParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionNameContext extends ParserRuleContext {
	public K_CONTAINS(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.K_CONTAINS, 0); }
	public K_ENDSWITH(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.K_ENDSWITH, 0); }
	public K_STARTSWITH(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.K_STARTSWITH, 0); }
	public K_LENGTH(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.K_LENGTH, 0); }
	public K_INDEXOF(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.K_INDEXOF, 0); }
	public K_SUBSTRING(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.K_SUBSTRING, 0); }
	public K_TOLOWER(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.K_TOLOWER, 0); }
	public K_TOUPPER(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.K_TOUPPER, 0); }
	public K_TRIM(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.K_TRIM, 0); }
	public CONCAT(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.CONCAT, 0); }
	public K_YEAR(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.K_YEAR, 0); }
	public K_MONTH(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.K_MONTH, 0); }
	public K_DAY(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.K_DAY, 0); }
	public K_HOUR(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.K_HOUR, 0); }
	public K_MINUTE(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.K_MINUTE, 0); }
	public K_SECOND(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.K_SECOND, 0); }
	public K_FRACTIONALSECONDS(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.K_FRACTIONALSECONDS, 0); }
	public K_DATE(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.K_DATE, 0); }
	public K_TIME(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.K_TIME, 0); }
	public K_TOTALOFFSETMINUTES(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.K_TOTALOFFSETMINUTES, 0); }
	public K_NOW(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.K_NOW, 0); }
	public K_MINDATETIME(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.K_MINDATETIME, 0); }
	public K_MAXDATETIME(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.K_MAXDATETIME, 0); }
	public K_ROUND(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.K_ROUND, 0); }
	public K_FLOOR(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.K_FLOOR, 0); }
	public K_CEILING(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.K_CEILING, 0); }
	public K_CAST(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.K_CAST, 0); }
	public K_ISOF(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.K_ISOF, 0); }
	public K_GEODISTANCE(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.K_GEODISTANCE, 0); }
	public K_GEOLENGTH(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.K_GEOLENGTH, 0); }
	public K_GEOINTERSECTS(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.K_GEOINTERSECTS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_functionName; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterFunctionName) {
			listener.enterFunctionName(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitFunctionName) {
			listener.exitFunctionName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitFunctionName) {
			return visitor.visitFunctionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FirstMemberExprContext extends ParserRuleContext {
	public memberExpr(): MemberExprContext {
		return this.getRuleContext(0, MemberExprContext);
	}
	public lambdaPredicatePrefixExpr(): LambdaPredicatePrefixExprContext | undefined {
		return this.tryGetRuleContext(0, LambdaPredicatePrefixExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_firstMemberExpr; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterFirstMemberExpr) {
			listener.enterFirstMemberExpr(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitFirstMemberExpr) {
			listener.exitFirstMemberExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitFirstMemberExpr) {
			return visitor.visitFirstMemberExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaPredicatePrefixExprContext extends ParserRuleContext {
	public IT_OPT(): TerminalNode { return this.getToken(OData4LiteParser.IT_OPT, 0); }
	public FWD_SLASH(): TerminalNode { return this.getToken(OData4LiteParser.FWD_SLASH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_lambdaPredicatePrefixExpr; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterLambdaPredicatePrefixExpr) {
			listener.enterLambdaPredicatePrefixExpr(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitLambdaPredicatePrefixExpr) {
			listener.exitLambdaPredicatePrefixExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitLambdaPredicatePrefixExpr) {
			return visitor.visitLambdaPredicatePrefixExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemberExprContext extends ParserRuleContext {
	public propertyPathExpr(): PropertyPathExprContext {
		return this.getRuleContext(0, PropertyPathExprContext);
	}
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public FWD_SLASH(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.FWD_SLASH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_memberExpr; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterMemberExpr) {
			listener.enterMemberExpr(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitMemberExpr) {
			listener.exitMemberExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitMemberExpr) {
			return visitor.visitMemberExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyPathExprContext extends ParserRuleContext {
	public property(): PropertyContext {
		return this.getRuleContext(0, PropertyContext);
	}
	public singleNavigationExpr(): SingleNavigationExprContext | undefined {
		return this.tryGetRuleContext(0, SingleNavigationExprContext);
	}
	public collectionPathExpr(): CollectionPathExprContext | undefined {
		return this.tryGetRuleContext(0, CollectionPathExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_propertyPathExpr; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterPropertyPathExpr) {
			listener.enterPropertyPathExpr(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitPropertyPathExpr) {
			listener.exitPropertyPathExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitPropertyPathExpr) {
			return visitor.visitPropertyPathExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CollectionNavigationExprContext extends ParserRuleContext {
	public keyPredicate(): KeyPredicateContext | undefined {
		return this.tryGetRuleContext(0, KeyPredicateContext);
	}
	public collectionPathExpr(): CollectionPathExprContext | undefined {
		return this.tryGetRuleContext(0, CollectionPathExprContext);
	}
	public FWD_SLASH(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.FWD_SLASH, 0); }
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public singleNavigationExpr(): SingleNavigationExprContext | undefined {
		return this.tryGetRuleContext(0, SingleNavigationExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_collectionNavigationExpr; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterCollectionNavigationExpr) {
			listener.enterCollectionNavigationExpr(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitCollectionNavigationExpr) {
			listener.exitCollectionNavigationExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitCollectionNavigationExpr) {
			return visitor.visitCollectionNavigationExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleNavigationExprContext extends ParserRuleContext {
	public FWD_SLASH(): TerminalNode { return this.getToken(OData4LiteParser.FWD_SLASH, 0); }
	public memberExpr(): MemberExprContext | undefined {
		return this.tryGetRuleContext(0, MemberExprContext);
	}
	public parameterAlias(): ParameterAliasContext | undefined {
		return this.tryGetRuleContext(0, ParameterAliasContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_singleNavigationExpr; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterSingleNavigationExpr) {
			listener.enterSingleNavigationExpr(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitSingleNavigationExpr) {
			listener.exitSingleNavigationExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitSingleNavigationExpr) {
			return visitor.visitSingleNavigationExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CollectionPathExprContext extends ParserRuleContext {
	public COUNT_OPT(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.COUNT_OPT, 0); }
	public FWD_SLASH(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.FWD_SLASH, 0); }
	public anyExpr(): AnyExprContext | undefined {
		return this.tryGetRuleContext(0, AnyExprContext);
	}
	public allExpr(): AllExprContext | undefined {
		return this.tryGetRuleContext(0, AllExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_collectionPathExpr; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterCollectionPathExpr) {
			listener.enterCollectionPathExpr(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitCollectionPathExpr) {
			listener.exitCollectionPathExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitCollectionPathExpr) {
			return visitor.visitCollectionPathExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnyExprContext extends ParserRuleContext {
	public ANY(): TerminalNode { return this.getToken(OData4LiteParser.ANY, 0); }
	public LPAREN(): TerminalNode { return this.getToken(OData4LiteParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(OData4LiteParser.RPAREN, 0); }
	public lambdaParameterIdentifier(): LambdaParameterIdentifierContext | undefined {
		return this.tryGetRuleContext(0, LambdaParameterIdentifierContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.COLON, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_anyExpr; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterAnyExpr) {
			listener.enterAnyExpr(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitAnyExpr) {
			listener.exitAnyExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitAnyExpr) {
			return visitor.visitAnyExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AllExprContext extends ParserRuleContext {
	public ANY(): TerminalNode { return this.getToken(OData4LiteParser.ANY, 0); }
	public LPAREN(): TerminalNode { return this.getToken(OData4LiteParser.LPAREN, 0); }
	public lambdaParameterIdentifier(): LambdaParameterIdentifierContext {
		return this.getRuleContext(0, LambdaParameterIdentifierContext);
	}
	public COLON(): TerminalNode { return this.getToken(OData4LiteParser.COLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(OData4LiteParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_allExpr; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterAllExpr) {
			listener.enterAllExpr(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitAllExpr) {
			listener.exitAllExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitAllExpr) {
			return visitor.visitAllExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaParameterIdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(OData4LiteParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_lambdaParameterIdentifier; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterLambdaParameterIdentifier) {
			listener.enterLambdaParameterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitLambdaParameterIdentifier) {
			listener.exitLambdaParameterIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitLambdaParameterIdentifier) {
			return visitor.visitLambdaParameterIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveLiteralCollectionContext extends ParserRuleContext {
	public LBRACKET(): TerminalNode { return this.getToken(OData4LiteParser.LBRACKET, 0); }
	public RBRACKET(): TerminalNode { return this.getToken(OData4LiteParser.RBRACKET, 0); }
	public primitiveLiteral(): PrimitiveLiteralContext[];
	public primitiveLiteral(i: number): PrimitiveLiteralContext;
	public primitiveLiteral(i?: number): PrimitiveLiteralContext | PrimitiveLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrimitiveLiteralContext);
		} else {
			return this.getRuleContext(i, PrimitiveLiteralContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(OData4LiteParser.COMMA);
		} else {
			return this.getToken(OData4LiteParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_primitiveLiteralCollection; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterPrimitiveLiteralCollection) {
			listener.enterPrimitiveLiteralCollection(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitPrimitiveLiteralCollection) {
			listener.exitPrimitiveLiteralCollection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitPrimitiveLiteralCollection) {
			return visitor.visitPrimitiveLiteralCollection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveLiteralContext extends ParserRuleContext {
	public NULL(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.NULL, 0); }
	public LIT_BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.LIT_BOOLEAN, 0); }
	public LIT_DATE(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.LIT_DATE, 0); }
	public LIT_DATETIME(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.LIT_DATETIME, 0); }
	public LIT_TIME_OF_DAY(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.LIT_TIME_OF_DAY, 0); }
	public LIT_INTEGER(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.LIT_INTEGER, 0); }
	public LIT_DOUBLE(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.LIT_DOUBLE, 0); }
	public LIT_STRING(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.LIT_STRING, 0); }
	public LIT_DAY_TIME_DURATION(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.LIT_DAY_TIME_DURATION, 0); }
	public enum(): EnumContext | undefined {
		return this.tryGetRuleContext(0, EnumContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_primitiveLiteral; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterPrimitiveLiteral) {
			listener.enterPrimitiveLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitPrimitiveLiteral) {
			listener.exitPrimitiveLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitPrimitiveLiteral) {
			return visitor.visitPrimitiveLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumContext extends ParserRuleContext {
	public qualifiedEnumTypeName(): QualifiedEnumTypeNameContext {
		return this.getRuleContext(0, QualifiedEnumTypeNameContext);
	}
	public SQUOTE(): TerminalNode[];
	public SQUOTE(i: number): TerminalNode;
	public SQUOTE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(OData4LiteParser.SQUOTE);
		} else {
			return this.getToken(OData4LiteParser.SQUOTE, i);
		}
	}
	public enumValues(): EnumValuesContext {
		return this.getRuleContext(0, EnumValuesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_enum; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterEnum) {
			listener.enterEnum(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitEnum) {
			listener.exitEnum(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitEnum) {
			return visitor.visitEnum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedEnumTypeNameContext extends ParserRuleContext {
	public namespace(): NamespaceContext {
		return this.getRuleContext(0, NamespaceContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(OData4LiteParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_qualifiedEnumTypeName; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterQualifiedEnumTypeName) {
			listener.enterQualifiedEnumTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitQualifiedEnumTypeName) {
			listener.exitQualifiedEnumTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitQualifiedEnumTypeName) {
			return visitor.visitQualifiedEnumTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumValuesContext extends ParserRuleContext {
	public enumValue(): EnumValueContext[];
	public enumValue(i: number): EnumValueContext;
	public enumValue(i?: number): EnumValueContext | EnumValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumValueContext);
		} else {
			return this.getRuleContext(i, EnumValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(OData4LiteParser.COMMA);
		} else {
			return this.getToken(OData4LiteParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_enumValues; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterEnumValues) {
			listener.enterEnumValues(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitEnumValues) {
			listener.exitEnumValues(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitEnumValues) {
			return visitor.visitEnumValues(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumValueContext extends ParserRuleContext {
	public LIT_INTEGER(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.LIT_INTEGER, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(OData4LiteParser.IDENTIFIER);
		} else {
			return this.getToken(OData4LiteParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_enumValue; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterEnumValue) {
			listener.enterEnumValue(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitEnumValue) {
			listener.exitEnumValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitEnumValue) {
			return visitor.visitEnumValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(OData4LiteParser.IDENTIFIER);
		} else {
			return this.getToken(OData4LiteParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(OData4LiteParser.DOT);
		} else {
			return this.getToken(OData4LiteParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_namespace; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterNamespace) {
			listener.enterNamespace(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitNamespace) {
			listener.exitNamespace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitNamespace) {
			return visitor.visitNamespace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


