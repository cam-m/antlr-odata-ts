// Generated from src/grammar/OData4Lite.g4 by ANTLR 4.7.3-SNAPSHOT


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
	public static readonly SELECT = 1;
	public static readonly APPLY = 2;
	public static readonly EXPAND = 3;
	public static readonly FILTER = 4;
	public static readonly TOP = 5;
	public static readonly SKIP_COUNT = 6;
	public static readonly COUNT = 7;
	public static readonly ORDERBY = 8;
	public static readonly REF = 9;
	public static readonly VALUE = 10;
	public static readonly AGGREGATE_TRANS = 11;
	public static readonly TOPCOUNT_TRANS = 12;
	public static readonly TOPSUM_TRANS = 13;
	public static readonly TOPPERCENT_TRANS = 14;
	public static readonly BOTTOMCOUNT_TRANS = 15;
	public static readonly BOTTOMSUM_TRANS = 16;
	public static readonly BOTTOMPERCENT_TRANS = 17;
	public static readonly IDENTITY_TRANS = 18;
	public static readonly CONCAT_TRANS = 19;
	public static readonly GROUPBY_TRANS = 20;
	public static readonly FILTER_TRANS = 21;
	public static readonly EXPAND_TRANS = 22;
	public static readonly ASC = 23;
	public static readonly DESC = 24;
	public static readonly SUM_AGGREGATION = 25;
	public static readonly MIN_AGGREGATION = 26;
	public static readonly MAX_AGGREGATION = 27;
	public static readonly AVERAGE_AGGREGATION = 28;
	public static readonly COUNTDISTINCT_AGGREGATION = 29;
	public static readonly OP_EQ = 30;
	public static readonly OP_NE = 31;
	public static readonly OP_GT = 32;
	public static readonly OP_GE = 33;
	public static readonly OP_LT = 34;
	public static readonly OP_LE = 35;
	public static readonly OP_HAS = 36;
	public static readonly OP_AS = 37;
	public static readonly OP_WITH = 38;
	public static readonly OP_FROM = 39;
	public static readonly OP_IN = 40;
	public static readonly OP_AND = 41;
	public static readonly OP_OR = 42;
	public static readonly OP_NOT = 43;
	public static readonly OP_ADD = 44;
	public static readonly OP_SUB = 45;
	public static readonly OP_DIV = 46;
	public static readonly OP_MUL = 47;
	public static readonly OP_MOD = 48;
	public static readonly AT_SIGN = 49;
	public static readonly DOT = 50;
	public static readonly DOLLAR = 51;
	public static readonly AMPERSAND = 52;
	public static readonly SEMICOLON = 53;
	public static readonly MINUS = 54;
	public static readonly FWD_SLASH = 55;
	public static readonly QUESTION = 56;
	public static readonly SQUOTE = 57;
	public static readonly DQUOTE = 58;
	public static readonly EQ = 59;
	public static readonly COMMA = 60;
	public static readonly RPAREN = 61;
	public static readonly LPAREN = 62;
	public static readonly NULL = 63;
	public static readonly LIT_DATETIME = 64;
	public static readonly LIT_DATE = 65;
	public static readonly LIT_TIME_OF_DAY = 66;
	public static readonly LIT_DAY_TIME_DURATION = 67;
	public static readonly LIT_BOOLEAN = 68;
	public static readonly LIT_STRING = 69;
	public static readonly LIT_INTEGER = 70;
	public static readonly LIT_DOUBLE = 71;
	public static readonly IDENTIFIER = 72;
	public static readonly UNEXPECTED = 73;
	public static readonly RULE_odataRelativeURI = 0;
	public static readonly RULE_resourcePath = 1;
	public static readonly RULE_functionImportCall = 2;
	public static readonly RULE_functionParameters = 3;
	public static readonly RULE_functionParameter = 4;
	public static readonly RULE_functionParameterName = 5;
	public static readonly RULE_collectionNavigationExpr = 6;
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
	public static readonly RULE_aliasAndValue = 19;
	public static readonly RULE_parameterAlias = 20;
	public static readonly RULE_parameterValue = 21;
	public static readonly RULE_filter = 22;
	public static readonly RULE_apply = 23;
	public static readonly RULE_applyExpression = 24;
	public static readonly RULE_applyTrafo = 25;
	public static readonly RULE_groupbyTrafo = 26;
	public static readonly RULE_groupByList = 27;
	public static readonly RULE_groupbyElement = 28;
	public static readonly RULE_groupingProperty = 29;
	public static readonly RULE_pathPrefix = 30;
	public static readonly RULE_filterTrafo = 31;
	public static readonly RULE_aggregateTrafo = 32;
	public static readonly RULE_aggregationParam = 33;
	public static readonly RULE_aggregationExpr = 34;
	public static readonly RULE_aggregateAs = 35;
	public static readonly RULE_aggregateWith = 36;
	public static readonly RULE_aggregateMethod = 37;
	public static readonly RULE_aggregatedProperty = 38;
	public static readonly RULE_count = 39;
	public static readonly RULE_orderby = 40;
	public static readonly RULE_skip = 41;
	public static readonly RULE_top = 42;
	public static readonly RULE_expand = 43;
	public static readonly RULE_select = 44;
	public static readonly RULE_orderbyItem = 45;
	public static readonly RULE_expandItemList = 46;
	public static readonly RULE_expandItem = 47;
	public static readonly RULE_expandPath = 48;
	public static readonly RULE_expandQueryOptions = 49;
	public static readonly RULE_expandQueryOption = 50;
	public static readonly RULE_expression = 51;
	public static readonly RULE_expressionList = 52;
	public static readonly RULE_primitiveLiteral = 53;
	public static readonly RULE_enum = 54;
	public static readonly RULE_qualifiedEnumTypeName = 55;
	public static readonly RULE_enumValues = 56;
	public static readonly RULE_enumValue = 57;
	public static readonly RULE_namespace = 58;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"odataRelativeURI", "resourcePath", "functionImportCall", "functionParameters", 
		"functionParameter", "functionParameterName", "collectionNavigationExpr", 
		"singleNavigation", "propertyPath", "collectionPath", "singlePath", "property", 
		"qualifiedName", "keyPredicate", "simpleKey", "compoundKey", "queryOptions", 
		"queryOption", "systemQueryOption", "aliasAndValue", "parameterAlias", 
		"parameterValue", "filter", "apply", "applyExpression", "applyTrafo", 
		"groupbyTrafo", "groupByList", "groupbyElement", "groupingProperty", "pathPrefix", 
		"filterTrafo", "aggregateTrafo", "aggregationParam", "aggregationExpr", 
		"aggregateAs", "aggregateWith", "aggregateMethod", "aggregatedProperty", 
		"count", "orderby", "skip", "top", "expand", "select", "orderbyItem", 
		"expandItemList", "expandItem", "expandPath", "expandQueryOptions", "expandQueryOption", 
		"expression", "expressionList", "primitiveLiteral", "enum", "qualifiedEnumTypeName", 
		"enumValues", "enumValue", "namespace",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'aggregate'", "'topcount'", 
		"'topsum'", "'toppercent'", "'bottomcount'", "'bottomsum'", "'bottompercent'", 
		"'identity'", "'concat'", "'groupby'", "'filter'", "'expand'", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'@'", "'.'", "'$'", "'&'", 
		"';'", "'-'", "'/'", "'?'", "'''", "'\"'", "'='", "','", "')'", "'('", 
		"''ull''",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "SELECT", "APPLY", "EXPAND", "FILTER", "TOP", "SKIP_COUNT", 
		"COUNT", "ORDERBY", "REF", "VALUE", "AGGREGATE_TRANS", "TOPCOUNT_TRANS", 
		"TOPSUM_TRANS", "TOPPERCENT_TRANS", "BOTTOMCOUNT_TRANS", "BOTTOMSUM_TRANS", 
		"BOTTOMPERCENT_TRANS", "IDENTITY_TRANS", "CONCAT_TRANS", "GROUPBY_TRANS", 
		"FILTER_TRANS", "EXPAND_TRANS", "ASC", "DESC", "SUM_AGGREGATION", "MIN_AGGREGATION", 
		"MAX_AGGREGATION", "AVERAGE_AGGREGATION", "COUNTDISTINCT_AGGREGATION", 
		"OP_EQ", "OP_NE", "OP_GT", "OP_GE", "OP_LT", "OP_LE", "OP_HAS", "OP_AS", 
		"OP_WITH", "OP_FROM", "OP_IN", "OP_AND", "OP_OR", "OP_NOT", "OP_ADD", 
		"OP_SUB", "OP_DIV", "OP_MUL", "OP_MOD", "AT_SIGN", "DOT", "DOLLAR", "AMPERSAND", 
		"SEMICOLON", "MINUS", "FWD_SLASH", "QUESTION", "SQUOTE", "DQUOTE", "EQ", 
		"COMMA", "RPAREN", "LPAREN", "NULL", "LIT_DATETIME", "LIT_DATE", "LIT_TIME_OF_DAY", 
		"LIT_DAY_TIME_DURATION", "LIT_BOOLEAN", "LIT_STRING", "LIT_INTEGER", "LIT_DOUBLE", 
		"IDENTIFIER", "UNEXPECTED",
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
			this.state = 118;
			this.resourcePath();
			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === OData4LiteParser.QUESTION) {
				{
				this.state = 119;
				this.match(OData4LiteParser.QUESTION);
				this.state = 120;
				this.queryOptions();
				}
			}

			this.state = 123;
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
			this.state = 129;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 125;
				this.match(OData4LiteParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 126;
				this.match(OData4LiteParser.IDENTIFIER);
				this.state = 127;
				this.singleNavigation();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 128;
				this.functionImportCall();
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
	public functionImportCall(): FunctionImportCallContext {
		let _localctx: FunctionImportCallContext = new FunctionImportCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, OData4LiteParser.RULE_functionImportCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 131;
			this.match(OData4LiteParser.IDENTIFIER);
			this.state = 132;
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
			this.state = 134;
			this.match(OData4LiteParser.LPAREN);
			this.state = 143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === OData4LiteParser.IDENTIFIER) {
				{
				this.state = 135;
				this.functionParameter();
				this.state = 140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === OData4LiteParser.COMMA) {
					{
					{
					this.state = 136;
					this.match(OData4LiteParser.COMMA);
					this.state = 137;
					this.functionParameter();
					}
					}
					this.state = 142;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 145;
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
			this.state = 147;
			this.functionParameterName();
			this.state = 148;
			this.match(OData4LiteParser.EQ);
			this.state = 151;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case OData4LiteParser.AT_SIGN:
				{
				this.state = 149;
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
				this.state = 150;
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
			this.state = 153;
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
	public collectionNavigationExpr(): CollectionNavigationExprContext {
		let _localctx: CollectionNavigationExprContext = new CollectionNavigationExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, OData4LiteParser.RULE_collectionNavigationExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === OData4LiteParser.FWD_SLASH) {
				{
				this.state = 155;
				this.match(OData4LiteParser.FWD_SLASH);
				this.state = 156;
				this.qualifiedName();
				}
			}

			this.state = 164;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case OData4LiteParser.LPAREN:
				{
				this.state = 159;
				this.keyPredicate();
				this.state = 161;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 160;
					this.singleNavigation();
					}
					break;
				}
				}
				break;
			case OData4LiteParser.COUNT:
				{
				this.state = 163;
				this.collectionPath();
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
			this.state = 168;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 166;
				this.match(OData4LiteParser.FWD_SLASH);
				this.state = 167;
				this.qualifiedName();
				}
				break;
			}
			{
			this.state = 170;
			this.match(OData4LiteParser.FWD_SLASH);
			this.state = 171;
			this.propertyPath();
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
			this.state = 183;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 173;
				this.property();
				this.state = 174;
				this.collectionNavigationExpr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 176;
				this.property();
				this.state = 177;
				this.singleNavigation();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 179;
				this.property();
				this.state = 180;
				this.singlePath();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 182;
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
			this.state = 185;
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
			this.state = 187;
			this.match(OData4LiteParser.VALUE);
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
			this.state = 189;
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
			this.state = 191;
			this.namespace();
			this.state = 192;
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
			this.state = 196;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 194;
				this.simpleKey();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 195;
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
			this.state = 198;
			this.match(OData4LiteParser.LPAREN);
			this.state = 199;
			this.match(OData4LiteParser.LIT_INTEGER);
			this.state = 200;
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
			this.state = 202;
			this.match(OData4LiteParser.LPAREN);
			{
			this.state = 203;
			this.match(OData4LiteParser.IDENTIFIER);
			this.state = 204;
			this.match(OData4LiteParser.EQ);
			this.state = 205;
			this.primitiveLiteral();
			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === OData4LiteParser.COMMA) {
				{
				{
				this.state = 206;
				this.match(OData4LiteParser.COMMA);
				this.state = 207;
				this.match(OData4LiteParser.IDENTIFIER);
				this.state = 208;
				this.match(OData4LiteParser.EQ);
				this.state = 209;
				this.primitiveLiteral();
				}
				}
				this.state = 214;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 215;
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
			this.state = 217;
			this.queryOption();
			this.state = 222;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === OData4LiteParser.AMPERSAND) {
				{
				{
				this.state = 218;
				this.match(OData4LiteParser.AMPERSAND);
				this.state = 219;
				this.queryOption();
				}
				}
				this.state = 224;
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
			this.state = 227;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case OData4LiteParser.SELECT:
			case OData4LiteParser.APPLY:
			case OData4LiteParser.EXPAND:
			case OData4LiteParser.FILTER:
			case OData4LiteParser.TOP:
			case OData4LiteParser.SKIP_COUNT:
			case OData4LiteParser.COUNT:
			case OData4LiteParser.ORDERBY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 225;
				this.systemQueryOption();
				}
				break;
			case OData4LiteParser.AT_SIGN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 226;
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
			this.state = 237;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case OData4LiteParser.FILTER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 229;
				this.filter();
				}
				break;
			case OData4LiteParser.COUNT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 230;
				this.count();
				}
				break;
			case OData4LiteParser.TOP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 231;
				this.top();
				}
				break;
			case OData4LiteParser.SKIP_COUNT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 232;
				this.skip();
				}
				break;
			case OData4LiteParser.ORDERBY:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 233;
				this.orderby();
				}
				break;
			case OData4LiteParser.EXPAND:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 234;
				this.expand();
				}
				break;
			case OData4LiteParser.SELECT:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 235;
				this.select();
				}
				break;
			case OData4LiteParser.APPLY:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 236;
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
	public aliasAndValue(): AliasAndValueContext {
		let _localctx: AliasAndValueContext = new AliasAndValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, OData4LiteParser.RULE_aliasAndValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 239;
			this.parameterAlias();
			this.state = 240;
			this.match(OData4LiteParser.EQ);
			this.state = 241;
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
		this.enterRule(_localctx, 40, OData4LiteParser.RULE_parameterAlias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 243;
			this.match(OData4LiteParser.AT_SIGN);
			this.state = 244;
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
		this.enterRule(_localctx, 42, OData4LiteParser.RULE_parameterValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 246;
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
		this.enterRule(_localctx, 44, OData4LiteParser.RULE_filter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 248;
			this.match(OData4LiteParser.FILTER);
			this.state = 249;
			this.match(OData4LiteParser.EQ);
			this.state = 250;
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
		this.enterRule(_localctx, 46, OData4LiteParser.RULE_apply);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 252;
			this.match(OData4LiteParser.APPLY);
			this.state = 253;
			this.match(OData4LiteParser.EQ);
			this.state = 254;
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
		this.enterRule(_localctx, 48, OData4LiteParser.RULE_applyExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			this.applyTrafo();
			this.state = 261;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === OData4LiteParser.FWD_SLASH) {
				{
				{
				this.state = 257;
				this.match(OData4LiteParser.FWD_SLASH);
				this.state = 258;
				this.applyTrafo();
				}
				}
				this.state = 263;
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
		this.enterRule(_localctx, 50, OData4LiteParser.RULE_applyTrafo);
		try {
			this.state = 267;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case OData4LiteParser.GROUPBY_TRANS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 264;
				this.groupbyTrafo();
				}
				break;
			case OData4LiteParser.AGGREGATE_TRANS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 265;
				this.aggregateTrafo();
				}
				break;
			case OData4LiteParser.FILTER_TRANS:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 266;
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
	public groupbyTrafo(): GroupbyTrafoContext {
		let _localctx: GroupbyTrafoContext = new GroupbyTrafoContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, OData4LiteParser.RULE_groupbyTrafo);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 269;
			this.match(OData4LiteParser.GROUPBY_TRANS);
			this.state = 270;
			this.match(OData4LiteParser.LPAREN);
			this.state = 271;
			this.groupByList();
			this.state = 274;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === OData4LiteParser.COMMA) {
				{
				this.state = 272;
				this.match(OData4LiteParser.COMMA);
				this.state = 273;
				this.applyExpression();
				}
			}

			this.state = 276;
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
		this.enterRule(_localctx, 54, OData4LiteParser.RULE_groupByList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 278;
			this.match(OData4LiteParser.LPAREN);
			this.state = 279;
			this.groupbyElement();
			this.state = 284;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === OData4LiteParser.COMMA) {
				{
				{
				this.state = 280;
				this.match(OData4LiteParser.COMMA);
				this.state = 281;
				this.groupbyElement();
				}
				}
				this.state = 286;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 287;
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
		this.enterRule(_localctx, 56, OData4LiteParser.RULE_groupbyElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 289;
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
		this.enterRule(_localctx, 58, OData4LiteParser.RULE_groupingProperty);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 292;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 291;
				this.pathPrefix();
				}
				break;
			}
			this.state = 303;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 294;
				this.property();
				this.state = 299;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === OData4LiteParser.FWD_SLASH) {
					{
					{
					this.state = 295;
					this.match(OData4LiteParser.FWD_SLASH);
					this.state = 296;
					this.qualifiedName();
					}
					}
					this.state = 301;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				{
				this.state = 302;
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
		this.enterRule(_localctx, 60, OData4LiteParser.RULE_pathPrefix);
		try {
			let _alt: number;
			this.state = 333;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 305;
				this.qualifiedName();
				this.state = 306;
				this.match(OData4LiteParser.FWD_SLASH);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 315;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 308;
						this.property();
						this.state = 311;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
						case 1:
							{
							this.state = 309;
							this.match(OData4LiteParser.FWD_SLASH);
							this.state = 310;
							this.qualifiedName();
							}
							break;
						}
						this.state = 313;
						this.match(OData4LiteParser.FWD_SLASH);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 317;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 319;
				this.qualifiedName();
				this.state = 320;
				this.match(OData4LiteParser.FWD_SLASH);
				this.state = 330;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 321;
						this.property();
						this.state = 324;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
						case 1:
							{
							this.state = 322;
							this.match(OData4LiteParser.FWD_SLASH);
							this.state = 323;
							this.qualifiedName();
							}
							break;
						}
						this.state = 326;
						this.match(OData4LiteParser.FWD_SLASH);
						}
						}
					}
					this.state = 332;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
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
		this.enterRule(_localctx, 62, OData4LiteParser.RULE_filterTrafo);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 335;
			this.match(OData4LiteParser.FILTER_TRANS);
			this.state = 336;
			this.match(OData4LiteParser.LPAREN);
			this.state = 337;
			this.expression(0);
			this.state = 338;
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
		this.enterRule(_localctx, 64, OData4LiteParser.RULE_aggregateTrafo);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 340;
			this.match(OData4LiteParser.AGGREGATE_TRANS);
			this.state = 341;
			this.match(OData4LiteParser.LPAREN);
			this.state = 350;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === OData4LiteParser.COUNT || _la === OData4LiteParser.OP_HAS || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (OData4LiteParser.OP_NOT - 43)) | (1 << (OData4LiteParser.AT_SIGN - 43)) | (1 << (OData4LiteParser.MINUS - 43)) | (1 << (OData4LiteParser.LPAREN - 43)) | (1 << (OData4LiteParser.NULL - 43)) | (1 << (OData4LiteParser.LIT_DATETIME - 43)) | (1 << (OData4LiteParser.LIT_DATE - 43)) | (1 << (OData4LiteParser.LIT_TIME_OF_DAY - 43)) | (1 << (OData4LiteParser.LIT_DAY_TIME_DURATION - 43)) | (1 << (OData4LiteParser.LIT_BOOLEAN - 43)) | (1 << (OData4LiteParser.LIT_STRING - 43)) | (1 << (OData4LiteParser.LIT_INTEGER - 43)) | (1 << (OData4LiteParser.LIT_DOUBLE - 43)) | (1 << (OData4LiteParser.IDENTIFIER - 43)))) !== 0)) {
				{
				this.state = 342;
				this.aggregationParam();
				this.state = 347;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === OData4LiteParser.COMMA) {
					{
					{
					this.state = 343;
					this.match(OData4LiteParser.COMMA);
					this.state = 344;
					this.aggregationParam();
					}
					}
					this.state = 349;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 352;
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
		this.enterRule(_localctx, 66, OData4LiteParser.RULE_aggregationParam);
		let _la: number;
		try {
			this.state = 364;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 354;
				this.expandPath();
				this.state = 355;
				this.match(OData4LiteParser.LPAREN);
				this.state = 356;
				this.aggregationExpr();
				this.state = 357;
				this.match(OData4LiteParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 359;
				this.aggregationExpr();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 360;
				this.aggregatedProperty();
				this.state = 362;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === OData4LiteParser.OP_WITH) {
					{
					this.state = 361;
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
		this.enterRule(_localctx, 68, OData4LiteParser.RULE_aggregationExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 374;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case OData4LiteParser.COUNT:
				{
				this.state = 366;
				this.match(OData4LiteParser.COUNT);
				this.state = 367;
				this.aggregateAs();
				}
				break;
			case OData4LiteParser.OP_HAS:
			case OData4LiteParser.OP_NOT:
			case OData4LiteParser.AT_SIGN:
			case OData4LiteParser.MINUS:
			case OData4LiteParser.LPAREN:
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
				this.state = 368;
				this.expression(0);
				this.state = 370;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === OData4LiteParser.OP_WITH) {
					{
					this.state = 369;
					this.aggregateWith();
					}
				}

				this.state = 372;
				this.aggregateAs();
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
	public aggregateAs(): AggregateAsContext {
		let _localctx: AggregateAsContext = new AggregateAsContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, OData4LiteParser.RULE_aggregateAs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 376;
			this.match(OData4LiteParser.OP_AS);
			this.state = 377;
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
	public aggregateWith(): AggregateWithContext {
		let _localctx: AggregateWithContext = new AggregateWithContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, OData4LiteParser.RULE_aggregateWith);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 379;
			this.match(OData4LiteParser.OP_WITH);
			this.state = 380;
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
		this.enterRule(_localctx, 74, OData4LiteParser.RULE_aggregateMethod);
		try {
			this.state = 388;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case OData4LiteParser.SUM_AGGREGATION:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 382;
				this.match(OData4LiteParser.SUM_AGGREGATION);
				}
				break;
			case OData4LiteParser.MIN_AGGREGATION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 383;
				this.match(OData4LiteParser.MIN_AGGREGATION);
				}
				break;
			case OData4LiteParser.MAX_AGGREGATION:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 384;
				this.match(OData4LiteParser.MAX_AGGREGATION);
				}
				break;
			case OData4LiteParser.AVERAGE_AGGREGATION:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 385;
				this.match(OData4LiteParser.AVERAGE_AGGREGATION);
				}
				break;
			case OData4LiteParser.COUNTDISTINCT_AGGREGATION:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 386;
				this.match(OData4LiteParser.COUNTDISTINCT_AGGREGATION);
				}
				break;
			case OData4LiteParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 387;
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
		this.enterRule(_localctx, 76, OData4LiteParser.RULE_aggregatedProperty);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
			this.pathPrefix();
			this.state = 391;
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
		this.enterRule(_localctx, 78, OData4LiteParser.RULE_count);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 393;
			this.match(OData4LiteParser.COUNT);
			this.state = 394;
			this.match(OData4LiteParser.EQ);
			this.state = 395;
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
		this.enterRule(_localctx, 80, OData4LiteParser.RULE_orderby);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 397;
			this.match(OData4LiteParser.ORDERBY);
			this.state = 398;
			this.match(OData4LiteParser.EQ);
			this.state = 407;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 399;
				this.orderbyItem();
				}
				break;

			case 2:
				{
				this.state = 400;
				this.orderbyItem();
				this.state = 403;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 401;
					this.match(OData4LiteParser.COMMA);
					this.state = 402;
					this.orderbyItem();
					}
					}
					this.state = 405;
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
		this.enterRule(_localctx, 82, OData4LiteParser.RULE_skip);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 409;
			this.match(OData4LiteParser.SKIP_COUNT);
			this.state = 410;
			this.match(OData4LiteParser.EQ);
			this.state = 411;
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
		this.enterRule(_localctx, 84, OData4LiteParser.RULE_top);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 413;
			this.match(OData4LiteParser.TOP);
			this.state = 414;
			this.match(OData4LiteParser.EQ);
			this.state = 415;
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
		this.enterRule(_localctx, 86, OData4LiteParser.RULE_expand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 417;
			this.match(OData4LiteParser.EXPAND);
			this.state = 418;
			this.match(OData4LiteParser.EQ);
			this.state = 419;
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
		this.enterRule(_localctx, 88, OData4LiteParser.RULE_select);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 421;
			this.match(OData4LiteParser.SELECT);
			this.state = 422;
			this.match(OData4LiteParser.EQ);
			this.state = 431;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				{
				this.state = 423;
				this.match(OData4LiteParser.IDENTIFIER);
				}
				break;

			case 2:
				{
				this.state = 424;
				this.match(OData4LiteParser.IDENTIFIER);
				this.state = 427;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 425;
					this.match(OData4LiteParser.COMMA);
					this.state = 426;
					this.match(OData4LiteParser.IDENTIFIER);
					}
					}
					this.state = 429;
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
		this.enterRule(_localctx, 90, OData4LiteParser.RULE_orderbyItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 433;
			this.match(OData4LiteParser.IDENTIFIER);
			this.state = 435;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === OData4LiteParser.ASC || _la === OData4LiteParser.DESC) {
				{
				this.state = 434;
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
		this.enterRule(_localctx, 92, OData4LiteParser.RULE_expandItemList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 437;
			this.expandItem();
			this.state = 440;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === OData4LiteParser.COMMA) {
				{
				this.state = 438;
				this.match(OData4LiteParser.COMMA);
				this.state = 439;
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
		this.enterRule(_localctx, 94, OData4LiteParser.RULE_expandItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 442;
			this.match(OData4LiteParser.IDENTIFIER);
			this.state = 447;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === OData4LiteParser.LPAREN) {
				{
				this.state = 443;
				this.match(OData4LiteParser.LPAREN);
				this.state = 444;
				this.expandQueryOptions();
				this.state = 445;
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
		this.enterRule(_localctx, 96, OData4LiteParser.RULE_expandPath);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 452;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				this.state = 449;
				this.qualifiedName();
				this.state = 450;
				this.match(OData4LiteParser.FWD_SLASH);
				}
				break;
			}
			this.state = 463;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 454;
					this.property();
					this.state = 455;
					this.match(OData4LiteParser.FWD_SLASH);
					this.state = 459;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
					case 1:
						{
						this.state = 456;
						this.qualifiedName();
						this.state = 457;
						this.match(OData4LiteParser.FWD_SLASH);
						}
						break;
					}
					}
					}
				}
				this.state = 465;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			}
			this.state = 466;
			this.property();
			this.state = 469;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === OData4LiteParser.FWD_SLASH) {
				{
				this.state = 467;
				this.match(OData4LiteParser.FWD_SLASH);
				this.state = 468;
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
		this.enterRule(_localctx, 98, OData4LiteParser.RULE_expandQueryOptions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 471;
			this.expandQueryOption();
			this.state = 476;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === OData4LiteParser.SEMICOLON) {
				{
				{
				this.state = 472;
				this.match(OData4LiteParser.SEMICOLON);
				this.state = 473;
				this.expandQueryOption();
				}
				}
				this.state = 478;
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
		this.enterRule(_localctx, 100, OData4LiteParser.RULE_expandQueryOption);
		try {
			this.state = 487;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case OData4LiteParser.SEMICOLON:
			case OData4LiteParser.RPAREN:
				this.enterOuterAlt(_localctx, 1);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			case OData4LiteParser.FILTER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 480;
				this.filter();
				}
				break;
			case OData4LiteParser.COUNT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 481;
				this.count();
				}
				break;
			case OData4LiteParser.ORDERBY:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 482;
				this.orderby();
				}
				break;
			case OData4LiteParser.SKIP_COUNT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 483;
				this.skip();
				}
				break;
			case OData4LiteParser.TOP:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 484;
				this.top();
				}
				break;
			case OData4LiteParser.EXPAND:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 485;
				this.expand();
				}
				break;
			case OData4LiteParser.SELECT:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 486;
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
		let _startState: number = 102;
		this.enterRecursionRule(_localctx, 102, OData4LiteParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 507;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				{
				_localctx = new FunctionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 490;
				this.match(OData4LiteParser.IDENTIFIER);
				this.state = 491;
				this.match(OData4LiteParser.LPAREN);
				this.state = 493;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (OData4LiteParser.OP_HAS - 36)) | (1 << (OData4LiteParser.OP_NOT - 36)) | (1 << (OData4LiteParser.AT_SIGN - 36)) | (1 << (OData4LiteParser.MINUS - 36)) | (1 << (OData4LiteParser.LPAREN - 36)) | (1 << (OData4LiteParser.NULL - 36)) | (1 << (OData4LiteParser.LIT_DATETIME - 36)) | (1 << (OData4LiteParser.LIT_DATE - 36)) | (1 << (OData4LiteParser.LIT_TIME_OF_DAY - 36)) | (1 << (OData4LiteParser.LIT_DAY_TIME_DURATION - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (OData4LiteParser.LIT_BOOLEAN - 68)) | (1 << (OData4LiteParser.LIT_STRING - 68)) | (1 << (OData4LiteParser.LIT_INTEGER - 68)) | (1 << (OData4LiteParser.LIT_DOUBLE - 68)) | (1 << (OData4LiteParser.IDENTIFIER - 68)))) !== 0)) {
					{
					this.state = 492;
					this.expressionList();
					}
				}

				this.state = 495;
				this.match(OData4LiteParser.RPAREN);
				}
				break;

			case 2:
				{
				_localctx = new ParenthesisExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 496;
				this.match(OData4LiteParser.LPAREN);
				this.state = 497;
				this.expression(0);
				this.state = 498;
				this.match(OData4LiteParser.RPAREN);
				}
				break;

			case 3:
				{
				_localctx = new UnaryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 500;
				_la = this._input.LA(1);
				if (!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (OData4LiteParser.OP_HAS - 36)) | (1 << (OData4LiteParser.OP_NOT - 36)) | (1 << (OData4LiteParser.MINUS - 36)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 501;
				this.expression(12);
				}
				break;

			case 4:
				{
				_localctx = new NegativeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 502;
				this.match(OData4LiteParser.MINUS);
				this.state = 503;
				this.expression(11);
				}
				break;

			case 5:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 504;
				this.primitiveLiteral();
				}
				break;

			case 6:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 505;
				this.propertyPath();
				}
				break;

			case 7:
				{
				_localctx = new AliasExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 506;
				this.parameterAlias();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 548;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 546;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
					case 1:
						{
						_localctx = new ModulusExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, OData4LiteParser.RULE_expression);
						this.state = 509;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 510;
						this.match(OData4LiteParser.OP_MOD);
						this.state = 511;
						this.expression(10);
						}
						break;

					case 2:
						{
						_localctx = new MultiplyExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, OData4LiteParser.RULE_expression);
						this.state = 512;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 513;
						this.match(OData4LiteParser.OP_MUL);
						this.state = 514;
						this.expression(10);
						}
						break;

					case 3:
						{
						_localctx = new DivisionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, OData4LiteParser.RULE_expression);
						this.state = 515;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 516;
						this.match(OData4LiteParser.OP_DIV);
						this.state = 517;
						this.expression(9);
						}
						break;

					case 4:
						{
						_localctx = new SubtractExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, OData4LiteParser.RULE_expression);
						this.state = 518;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 519;
						this.match(OData4LiteParser.OP_SUB);
						this.state = 520;
						this.expression(8);
						}
						break;

					case 5:
						{
						_localctx = new AddExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, OData4LiteParser.RULE_expression);
						this.state = 521;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 522;
						this.match(OData4LiteParser.OP_ADD);
						this.state = 523;
						this.expression(7);
						}
						break;

					case 6:
						{
						_localctx = new BinaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, OData4LiteParser.RULE_expression);
						this.state = 524;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 525;
						_la = this._input.LA(1);
						if (!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (OData4LiteParser.OP_EQ - 30)) | (1 << (OData4LiteParser.OP_NE - 30)) | (1 << (OData4LiteParser.OP_GT - 30)) | (1 << (OData4LiteParser.OP_GE - 30)) | (1 << (OData4LiteParser.OP_LT - 30)) | (1 << (OData4LiteParser.OP_LE - 30)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 526;
						this.expression(6);
						}
						break;

					case 7:
						{
						_localctx = new LogicalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, OData4LiteParser.RULE_expression);
						this.state = 527;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 528;
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
						this.state = 529;
						this.expression(5);
						}
						break;

					case 8:
						{
						_localctx = new InExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, OData4LiteParser.RULE_expression);
						this.state = 530;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 531;
						this.match(OData4LiteParser.OP_IN);
						this.state = 532;
						this.match(OData4LiteParser.LPAREN);
						this.state = 542;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
						case 1:
							{
							this.state = 533;
							this.primitiveLiteral();
							this.state = 538;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === OData4LiteParser.COMMA) {
								{
								{
								this.state = 534;
								this.match(OData4LiteParser.COMMA);
								this.state = 535;
								this.primitiveLiteral();
								}
								}
								this.state = 540;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
							break;

						case 2:
							{
							this.state = 541;
							this.expression(0);
							}
							break;
						}
						this.state = 544;
						this.match(OData4LiteParser.RPAREN);
						}
						break;
					}
					}
				}
				this.state = 550;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
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
		this.enterRule(_localctx, 104, OData4LiteParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 551;
			this.expression(0);
			this.state = 556;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === OData4LiteParser.COMMA) {
				{
				{
				this.state = 552;
				this.match(OData4LiteParser.COMMA);
				this.state = 553;
				this.expression(0);
				}
				}
				this.state = 558;
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
	public primitiveLiteral(): PrimitiveLiteralContext {
		let _localctx: PrimitiveLiteralContext = new PrimitiveLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, OData4LiteParser.RULE_primitiveLiteral);
		try {
			this.state = 569;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case OData4LiteParser.NULL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 559;
				this.match(OData4LiteParser.NULL);
				}
				break;
			case OData4LiteParser.LIT_BOOLEAN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 560;
				this.match(OData4LiteParser.LIT_BOOLEAN);
				}
				break;
			case OData4LiteParser.LIT_DATE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 561;
				this.match(OData4LiteParser.LIT_DATE);
				}
				break;
			case OData4LiteParser.LIT_DATETIME:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 562;
				this.match(OData4LiteParser.LIT_DATETIME);
				}
				break;
			case OData4LiteParser.LIT_TIME_OF_DAY:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 563;
				this.match(OData4LiteParser.LIT_TIME_OF_DAY);
				}
				break;
			case OData4LiteParser.LIT_INTEGER:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 564;
				this.match(OData4LiteParser.LIT_INTEGER);
				}
				break;
			case OData4LiteParser.LIT_DOUBLE:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 565;
				this.match(OData4LiteParser.LIT_DOUBLE);
				}
				break;
			case OData4LiteParser.LIT_STRING:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 566;
				this.match(OData4LiteParser.LIT_STRING);
				}
				break;
			case OData4LiteParser.LIT_DAY_TIME_DURATION:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 567;
				this.match(OData4LiteParser.LIT_DAY_TIME_DURATION);
				}
				break;
			case OData4LiteParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 568;
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
		this.enterRule(_localctx, 108, OData4LiteParser.RULE_enum);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 571;
			this.qualifiedEnumTypeName();
			this.state = 572;
			this.match(OData4LiteParser.SQUOTE);
			this.state = 573;
			this.enumValues();
			this.state = 574;
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
		this.enterRule(_localctx, 110, OData4LiteParser.RULE_qualifiedEnumTypeName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 576;
			this.namespace();
			this.state = 577;
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
		this.enterRule(_localctx, 112, OData4LiteParser.RULE_enumValues);
		let _la: number;
		try {
			this.state = 587;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 579;
				this.enumValue();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 580;
				this.enumValue();
				this.state = 583;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 581;
					this.match(OData4LiteParser.COMMA);
					this.state = 582;
					this.enumValue();
					}
					}
					this.state = 585;
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
		this.enterRule(_localctx, 114, OData4LiteParser.RULE_enumValue);
		try {
			this.state = 593;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case OData4LiteParser.LIT_INTEGER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 589;
				this.match(OData4LiteParser.LIT_INTEGER);
				}
				break;
			case OData4LiteParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 590;
				this.match(OData4LiteParser.IDENTIFIER);
				this.state = 591;
				this.match(OData4LiteParser.DOT);
				this.state = 592;
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
		this.enterRule(_localctx, 116, OData4LiteParser.RULE_namespace);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 595;
			this.match(OData4LiteParser.IDENTIFIER);
			this.state = 600;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 596;
					this.match(OData4LiteParser.DOT);
					this.state = 597;
					this.match(OData4LiteParser.IDENTIFIER);
					}
					}
				}
				this.state = 602;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			}
			this.state = 603;
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
		case 51:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 10);

		case 1:
			return this.precpred(this._ctx, 9);

		case 2:
			return this.precpred(this._ctx, 8);

		case 3:
			return this.precpred(this._ctx, 7);

		case 4:
			return this.precpred(this._ctx, 6);

		case 5:
			return this.precpred(this._ctx, 5);

		case 6:
			return this.precpred(this._ctx, 4);

		case 7:
			return this.precpred(this._ctx, 13);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03K\u0260\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x03" +
		"\x02\x03\x02\x03\x02\x05\x02|\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x05\x03\x84\n\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x07\x05\x8D\n\x05\f\x05\x0E\x05\x90\v\x05\x05\x05\x92" +
		"\n\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\x9A\n\x06" +
		"\x03\x07\x03\x07\x03\b\x03\b\x05\b\xA0\n\b\x03\b\x03\b\x05\b\xA4\n\b\x03" +
		"\b\x05\b\xA7\n\b\x03\t\x03\t\x05\t\xAB\n\t\x03\t\x03\t\x03\t\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xBA\n\n\x03\v" +
		"\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x05\x0F\xC7\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\xD5\n\x11\f\x11\x0E" +
		"\x11\xD8\v\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x07\x12\xDF\n\x12" +
		"\f\x12\x0E\x12\xE2\v\x12\x03\x13\x03\x13\x05\x13\xE6\n\x13\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\xF0\n\x14" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A" +
		"\x03\x1A\x03\x1A\x07\x1A\u0106\n\x1A\f\x1A\x0E\x1A\u0109\v\x1A\x03\x1B" +
		"\x03\x1B\x03\x1B\x05\x1B\u010E\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x05\x1C\u0115\n\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x07\x1D\u011D\n\x1D\f\x1D\x0E\x1D\u0120\v\x1D\x03\x1D\x03\x1D\x03\x1E" +
		"\x03\x1E\x03\x1F\x05\x1F\u0127\n\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u012C" +
		"\n\x1F\f\x1F\x0E\x1F\u012F\v\x1F\x03\x1F\x05\x1F\u0132\n\x1F\x03 \x03" +
		" \x03 \x03 \x03 \x03 \x05 \u013A\n \x03 \x03 \x06 \u013E\n \r \x0E \u013F" +
		"\x03 \x03 \x03 \x03 \x03 \x05 \u0147\n \x03 \x03 \x07 \u014B\n \f \x0E" +
		" \u014E\v \x05 \u0150\n \x03!\x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x03" +
		"\"\x03\"\x07\"\u015C\n\"\f\"\x0E\"\u015F\v\"\x05\"\u0161\n\"\x03\"\x03" +
		"\"\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x05#\u016D\n#\x05#\u016F\n" +
		"#\x03$\x03$\x03$\x03$\x05$\u0175\n$\x03$\x03$\x05$\u0179\n$\x03%\x03%" +
		"\x03%\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u0187\n" +
		"\'\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x03*\x06" +
		"*\u0196\n*\r*\x0E*\u0197\x05*\u019A\n*\x03+\x03+\x03+\x03+\x03,\x03,\x03" +
		",\x03,\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x03.\x03.\x03.\x06.\u01AE\n" +
		".\r.\x0E.\u01AF\x05.\u01B2\n.\x03/\x03/\x05/\u01B6\n/\x030\x030\x030\x05" +
		"0\u01BB\n0\x031\x031\x031\x031\x031\x051\u01C2\n1\x032\x032\x032\x052" +
		"\u01C7\n2\x032\x032\x032\x032\x032\x052\u01CE\n2\x072\u01D0\n2\f2\x0E" +
		"2\u01D3\v2\x032\x032\x032\x052\u01D8\n2\x033\x033\x033\x073\u01DD\n3\f" +
		"3\x0E3\u01E0\v3\x034\x034\x034\x034\x034\x034\x034\x034\x054\u01EA\n4" +
		"\x035\x035\x035\x035\x055\u01F0\n5\x035\x035\x035\x035\x035\x035\x035" +
		"\x035\x035\x035\x035\x035\x055\u01FE\n5\x035\x035\x035\x035\x035\x035" +
		"\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x03" +
		"5\x035\x035\x035\x035\x035\x035\x035\x075\u021B\n5\f5\x0E5\u021E\v5\x03" +
		"5\x055\u0221\n5\x035\x035\x075\u0225\n5\f5\x0E5\u0228\v5\x036\x036\x03" +
		"6\x076\u022D\n6\f6\x0E6\u0230\v6\x037\x037\x037\x037\x037\x037\x037\x03" +
		"7\x037\x037\x057\u023C\n7\x038\x038\x038\x038\x038\x039\x039\x039\x03" +
		":\x03:\x03:\x03:\x06:\u024A\n:\r:\x0E:\u024B\x05:\u024E\n:\x03;\x03;\x03" +
		";\x03;\x05;\u0254\n;\x03<\x03<\x03<\x07<\u0259\n<\f<\x0E<\u025C\v<\x03" +
		"<\x03<\x03<\x02\x02\x03h=\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 " +
		"\x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
		"t\x02v\x02\x02\x06\x03\x02\x19\x1A\x05\x02&&--88\x03\x02 %\x03\x02+,\x02" +
		"\u0288\x02x\x03\x02\x02\x02\x04\x83\x03\x02\x02\x02\x06\x85\x03\x02\x02" +
		"\x02\b\x88\x03\x02\x02\x02\n\x95\x03\x02\x02\x02\f\x9B\x03\x02\x02\x02" +
		"\x0E\x9F\x03\x02\x02\x02\x10\xAA\x03\x02\x02\x02\x12\xB9\x03\x02\x02\x02" +
		"\x14\xBB\x03\x02\x02\x02\x16\xBD\x03\x02\x02\x02\x18\xBF\x03\x02\x02\x02" +
		"\x1A\xC1\x03\x02\x02\x02\x1C\xC6\x03\x02\x02\x02\x1E\xC8\x03\x02\x02\x02" +
		" \xCC\x03\x02\x02\x02\"\xDB\x03\x02\x02\x02$\xE5\x03\x02\x02\x02&\xEF" +
		"\x03\x02\x02\x02(\xF1\x03\x02\x02\x02*\xF5\x03\x02\x02\x02,\xF8\x03\x02" +
		"\x02\x02.\xFA\x03\x02\x02\x020\xFE\x03\x02\x02\x022\u0102\x03\x02\x02" +
		"\x024\u010D\x03\x02\x02\x026\u010F\x03\x02\x02\x028\u0118\x03\x02\x02" +
		"\x02:\u0123\x03\x02\x02\x02<\u0126\x03\x02\x02\x02>\u014F\x03\x02\x02" +
		"\x02@\u0151\x03\x02\x02\x02B\u0156\x03\x02\x02\x02D\u016E\x03\x02\x02" +
		"\x02F\u0178\x03\x02\x02\x02H\u017A\x03\x02\x02\x02J\u017D\x03\x02\x02" +
		"\x02L\u0186\x03\x02\x02\x02N\u0188\x03\x02\x02\x02P\u018B\x03\x02\x02" +
		"\x02R\u018F\x03\x02\x02\x02T\u019B\x03\x02\x02\x02V\u019F\x03\x02\x02" +
		"\x02X\u01A3\x03\x02\x02\x02Z\u01A7\x03\x02\x02\x02\\\u01B3\x03\x02\x02" +
		"\x02^\u01B7\x03\x02\x02\x02`\u01BC\x03\x02\x02\x02b\u01C6\x03\x02\x02" +
		"\x02d\u01D9\x03\x02\x02\x02f\u01E9\x03\x02\x02\x02h\u01FD\x03\x02\x02" +
		"\x02j\u0229\x03\x02\x02\x02l\u023B\x03\x02\x02\x02n\u023D\x03\x02\x02" +
		"\x02p\u0242\x03\x02\x02\x02r\u024D\x03\x02\x02\x02t\u0253\x03\x02\x02" +
		"\x02v\u0255\x03\x02\x02\x02x{\x05\x04\x03\x02yz\x07:\x02\x02z|\x05\"\x12" +
		"\x02{y\x03\x02\x02\x02{|\x03\x02\x02\x02|}\x03\x02\x02\x02}~\x07\x02\x02" +
		"\x03~\x03\x03\x02\x02\x02\x7F\x84\x07J\x02\x02\x80\x81\x07J\x02\x02\x81" +
		"\x84\x05\x10\t\x02\x82\x84\x05\x06\x04\x02\x83\x7F\x03\x02\x02\x02\x83" +
		"\x80\x03\x02\x02\x02\x83\x82\x03\x02\x02\x02\x84\x05\x03\x02\x02\x02\x85" +
		"\x86\x07J\x02\x02\x86\x87\x05\b\x05\x02\x87\x07\x03\x02\x02\x02\x88\x91" +
		"\x07@\x02\x02\x89\x8E\x05\n\x06\x02\x8A\x8B\x07>\x02\x02\x8B\x8D\x05\n" +
		"\x06\x02\x8C\x8A\x03\x02\x02\x02\x8D\x90\x03\x02\x02\x02\x8E\x8C\x03\x02" +
		"\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x92\x03\x02\x02\x02\x90\x8E\x03\x02" +
		"\x02\x02\x91\x89\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92\x93\x03\x02" +
		"\x02\x02\x93\x94\x07?\x02\x02\x94\t\x03\x02\x02\x02\x95\x96\x05\f\x07" +
		"\x02\x96\x99\x07=\x02\x02\x97\x9A\x05*\x16\x02\x98\x9A\x05l7\x02\x99\x97" +
		"\x03\x02\x02\x02\x99\x98\x03\x02\x02\x02\x9A\v\x03\x02\x02\x02\x9B\x9C" +
		"\x07J\x02\x02\x9C\r\x03\x02\x02\x02\x9D\x9E\x079\x02\x02\x9E\xA0\x05\x1A" +
		"\x0E\x02\x9F\x9D\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA6\x03\x02" +
		"\x02\x02\xA1\xA3\x05\x1C\x0F\x02\xA2\xA4\x05\x10\t\x02\xA3\xA2\x03\x02" +
		"\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA7\x03\x02\x02\x02\xA5\xA7\x05\x14" +
		"\v\x02\xA6\xA1\x03\x02\x02\x02\xA6\xA5\x03\x02\x02\x02\xA7\x0F\x03\x02" +
		"\x02\x02\xA8\xA9\x079\x02\x02\xA9\xAB\x05\x1A\x0E\x02\xAA\xA8\x03\x02" +
		"\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAD\x079" +
		"\x02\x02\xAD\xAE\x05\x12\n\x02\xAE\x11\x03\x02\x02\x02\xAF\xB0\x05\x18" +
		"\r\x02\xB0\xB1\x05\x0E\b\x02\xB1\xBA\x03\x02\x02\x02\xB2\xB3\x05\x18\r" +
		"\x02\xB3\xB4\x05\x10\t\x02\xB4\xBA\x03\x02\x02\x02\xB5\xB6\x05\x18\r\x02" +
		"\xB6\xB7\x05\x16\f\x02\xB7\xBA\x03\x02\x02\x02\xB8\xBA\x05\x18\r\x02\xB9" +
		"\xAF\x03\x02\x02\x02\xB9\xB2\x03\x02\x02\x02\xB9\xB5\x03\x02\x02\x02\xB9" +
		"\xB8\x03\x02\x02\x02\xBA\x13\x03\x02\x02\x02\xBB\xBC\x05P)\x02\xBC\x15" +
		"\x03\x02\x02\x02\xBD\xBE\x07\f\x02\x02\xBE\x17\x03\x02\x02\x02\xBF\xC0" +
		"\x07J\x02\x02\xC0\x19\x03\x02\x02\x02\xC1\xC2\x05v<\x02\xC2\xC3\x07J\x02" +
		"\x02\xC3\x1B\x03\x02\x02\x02\xC4\xC7\x05\x1E\x10\x02\xC5\xC7\x05 \x11" +
		"\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC5\x03\x02\x02\x02\xC7\x1D\x03\x02\x02" +
		"\x02\xC8\xC9\x07@\x02\x02\xC9\xCA\x07H\x02\x02\xCA\xCB\x07?\x02\x02\xCB" +
		"\x1F\x03\x02\x02\x02\xCC\xCD\x07@\x02\x02\xCD\xCE\x07J\x02\x02\xCE\xCF" +
		"\x07=\x02\x02\xCF\xD6\x05l7\x02\xD0\xD1\x07>\x02\x02\xD1\xD2\x07J\x02" +
		"\x02\xD2\xD3\x07=\x02\x02\xD3\xD5\x05l7\x02\xD4\xD0\x03\x02\x02\x02\xD5" +
		"\xD8\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7" +
		"\xD9\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD9\xDA\x07?\x02\x02\xDA" +
		"!\x03\x02\x02\x02\xDB\xE0\x05$\x13\x02\xDC\xDD\x076\x02\x02\xDD\xDF\x05" +
		"$\x13\x02\xDE\xDC\x03\x02\x02\x02\xDF\xE2\x03\x02\x02\x02\xE0\xDE\x03" +
		"\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1#\x03\x02\x02\x02\xE2\xE0\x03" +
		"\x02\x02\x02\xE3\xE6\x05&\x14\x02\xE4\xE6\x05(\x15\x02\xE5\xE3\x03\x02" +
		"\x02\x02\xE5\xE4\x03\x02\x02\x02\xE6%\x03\x02\x02\x02\xE7\xF0\x05.\x18" +
		"\x02\xE8\xF0\x05P)\x02\xE9\xF0\x05V,\x02\xEA\xF0\x05T+\x02\xEB\xF0\x05" +
		"R*\x02\xEC\xF0\x05X-\x02\xED\xF0\x05Z.\x02\xEE\xF0\x050\x19\x02\xEF\xE7" +
		"\x03\x02\x02\x02\xEF\xE8\x03\x02\x02\x02\xEF\xE9\x03\x02\x02\x02\xEF\xEA" +
		"\x03\x02\x02\x02\xEF\xEB\x03\x02\x02\x02\xEF\xEC\x03\x02\x02\x02\xEF\xED" +
		"\x03\x02\x02\x02\xEF\xEE\x03\x02\x02\x02\xF0\'\x03\x02\x02\x02\xF1\xF2" +
		"\x05*\x16\x02\xF2\xF3\x07=\x02\x02\xF3\xF4\x05,\x17\x02\xF4)\x03\x02\x02" +
		"\x02\xF5\xF6\x073\x02\x02\xF6\xF7\x07J\x02\x02\xF7+\x03\x02\x02\x02\xF8" +
		"\xF9\x05l7\x02\xF9-\x03\x02\x02\x02\xFA\xFB\x07\x06\x02\x02\xFB\xFC\x07" +
		"=\x02\x02\xFC\xFD\x05h5\x02\xFD/\x03\x02\x02\x02\xFE\xFF\x07\x04\x02\x02" +
		"\xFF\u0100\x07=\x02\x02\u0100\u0101\x052\x1A\x02\u01011\x03\x02\x02\x02" +
		"\u0102\u0107\x054\x1B\x02\u0103\u0104\x079\x02\x02\u0104\u0106\x054\x1B" +
		"\x02\u0105\u0103\x03\x02\x02\x02\u0106\u0109\x03\x02\x02\x02\u0107\u0105" +
		"\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u01083\x03\x02\x02\x02\u0109" +
		"\u0107\x03\x02\x02\x02\u010A\u010E\x056\x1C\x02\u010B\u010E\x05B\"\x02" +
		"\u010C\u010E\x05@!\x02\u010D\u010A\x03\x02\x02\x02\u010D\u010B\x03\x02" +
		"\x02\x02\u010D\u010C\x03\x02\x02\x02\u010E5\x03\x02\x02\x02\u010F\u0110" +
		"\x07\x16\x02\x02\u0110\u0111\x07@\x02\x02\u0111\u0114\x058\x1D\x02\u0112" +
		"\u0113\x07>\x02\x02\u0113\u0115\x052\x1A\x02\u0114\u0112\x03\x02\x02\x02" +
		"\u0114\u0115\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116\u0117\x07" +
		"?\x02\x02\u01177\x03\x02\x02\x02\u0118\u0119\x07@\x02\x02\u0119\u011E" +
		"\x05:\x1E\x02\u011A\u011B\x07>\x02\x02\u011B\u011D\x05:\x1E\x02\u011C" +
		"\u011A\x03\x02\x02\x02\u011D\u0120\x03\x02\x02\x02\u011E\u011C\x03\x02" +
		"\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\u0121\x03\x02\x02\x02\u0120" +
		"\u011E\x03\x02\x02\x02\u0121\u0122\x07?\x02\x02\u01229\x03\x02\x02\x02" +
		"\u0123\u0124\x05<\x1F\x02\u0124;\x03\x02\x02\x02\u0125\u0127\x05> \x02" +
		"\u0126\u0125\x03\x02\x02\x02\u0126\u0127\x03\x02\x02\x02\u0127\u0131\x03" +
		"\x02\x02\x02\u0128\u012D\x05\x18\r\x02\u0129\u012A\x079\x02\x02\u012A" +
		"\u012C\x05\x1A\x0E\x02\u012B\u0129\x03\x02\x02\x02\u012C\u012F\x03\x02" +
		"\x02\x02\u012D\u012B\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E" +
		"\u0132\x03\x02\x02\x02\u012F\u012D\x03\x02\x02\x02\u0130\u0132\x05\x18" +
		"\r\x02\u0131\u0128\x03\x02\x02\x02\u0131\u0130\x03\x02\x02\x02\u0132=" +
		"\x03\x02\x02\x02\u0133\u0134\x05\x1A\x0E\x02\u0134\u0135\x079\x02\x02" +
		"\u0135\u0150\x03\x02\x02\x02\u0136\u0139\x05\x18\r\x02\u0137\u0138\x07" +
		"9\x02\x02\u0138\u013A\x05\x1A\x0E\x02\u0139\u0137\x03\x02\x02\x02\u0139" +
		"\u013A\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u013C\x079\x02" +
		"\x02\u013C\u013E\x03\x02\x02\x02\u013D\u0136\x03\x02\x02\x02\u013E\u013F" +
		"\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02" +
		"\u0140\u0150\x03\x02\x02\x02\u0141\u0142\x05\x1A\x0E\x02\u0142\u014C\x07" +
		"9\x02\x02\u0143\u0146\x05\x18\r\x02\u0144\u0145\x079\x02\x02\u0145\u0147" +
		"\x05\x1A\x0E\x02\u0146\u0144\x03\x02\x02\x02\u0146\u0147\x03\x02\x02\x02" +
		"\u0147\u0148\x03\x02\x02\x02\u0148\u0149\x079\x02\x02\u0149\u014B\x03" +
		"\x02\x02\x02\u014A\u0143\x03\x02\x02\x02\u014B\u014E\x03\x02\x02\x02\u014C" +
		"\u014A\x03\x02\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D\u0150\x03\x02" +
		"\x02\x02\u014E\u014C\x03\x02\x02\x02\u014F\u0133\x03\x02\x02\x02\u014F" +
		"\u013D\x03\x02\x02\x02\u014F\u0141\x03\x02\x02\x02\u0150?\x03\x02\x02" +
		"\x02\u0151\u0152\x07\x17\x02\x02\u0152\u0153\x07@\x02\x02\u0153\u0154" +
		"\x05h5\x02\u0154\u0155\x07?\x02\x02\u0155A\x03\x02\x02\x02\u0156\u0157" +
		"\x07\r\x02\x02\u0157\u0160\x07@\x02\x02\u0158\u015D\x05D#\x02\u0159\u015A" +
		"\x07>\x02\x02\u015A\u015C\x05D#\x02\u015B\u0159\x03\x02\x02\x02\u015C" +
		"\u015F\x03\x02\x02\x02\u015D\u015B\x03\x02\x02\x02\u015D\u015E\x03\x02" +
		"\x02\x02\u015E\u0161\x03\x02\x02\x02\u015F\u015D\x03\x02\x02\x02\u0160" +
		"\u0158\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161\u0162\x03\x02" +
		"\x02\x02\u0162\u0163\x07?\x02\x02\u0163C\x03\x02\x02\x02\u0164\u0165\x05" +
		"b2\x02\u0165\u0166\x07@\x02\x02\u0166\u0167\x05F$\x02\u0167\u0168\x07" +
		"?\x02\x02\u0168\u016F\x03\x02\x02\x02\u0169\u016F\x05F$\x02\u016A\u016C" +
		"\x05N(\x02\u016B\u016D\x05J&\x02\u016C\u016B\x03\x02\x02\x02\u016C\u016D" +
		"\x03\x02\x02\x02\u016D\u016F\x03\x02\x02\x02\u016E\u0164\x03\x02\x02\x02" +
		"\u016E\u0169\x03\x02\x02\x02\u016E\u016A\x03\x02\x02\x02\u016FE\x03\x02" +
		"\x02\x02\u0170\u0171\x07\t\x02\x02\u0171\u0179\x05H%\x02\u0172\u0174\x05" +
		"h5\x02\u0173\u0175\x05J&\x02\u0174\u0173\x03\x02\x02\x02\u0174\u0175\x03" +
		"\x02\x02\x02\u0175\u0176\x03\x02\x02\x02\u0176\u0177\x05H%\x02\u0177\u0179" +
		"\x03\x02\x02\x02\u0178\u0170\x03\x02\x02\x02\u0178\u0172\x03\x02\x02\x02" +
		"\u0179G\x03\x02\x02\x02\u017A\u017B\x07\'\x02\x02\u017B\u017C\x07J\x02" +
		"\x02\u017CI\x03\x02\x02\x02\u017D\u017E\x07(\x02\x02\u017E\u017F\x05L" +
		"\'\x02\u017FK\x03\x02\x02\x02\u0180\u0187\x07\x1B\x02\x02\u0181\u0187" +
		"\x07\x1C\x02\x02\u0182\u0187\x07\x1D\x02\x02\u0183\u0187\x07\x1E\x02\x02" +
		"\u0184\u0187\x07\x1F\x02\x02\u0185\u0187\x05\x1A\x0E\x02\u0186\u0180\x03" +
		"\x02\x02\x02\u0186\u0181\x03\x02\x02\x02\u0186\u0182\x03\x02\x02\x02\u0186" +
		"\u0183\x03\x02\x02\x02\u0186\u0184\x03\x02\x02\x02\u0186\u0185\x03\x02" +
		"\x02\x02\u0187M\x03\x02\x02\x02\u0188\u0189\x05> \x02\u0189\u018A\x05" +
		"\x18\r\x02\u018AO\x03\x02\x02\x02\u018B\u018C\x07\t\x02\x02\u018C\u018D" +
		"\x07=\x02\x02\u018D\u018E\x07F\x02\x02\u018EQ\x03\x02\x02\x02\u018F\u0190" +
		"\x07\n\x02\x02\u0190\u0199\x07=\x02\x02\u0191\u019A\x05\\/\x02\u0192\u0195" +
		"\x05\\/\x02\u0193\u0194\x07>\x02\x02\u0194\u0196\x05\\/\x02\u0195\u0193" +
		"\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\u0195\x03\x02\x02\x02" +
		"\u0197\u0198\x03\x02\x02\x02\u0198\u019A\x03\x02\x02\x02\u0199\u0191\x03" +
		"\x02\x02\x02\u0199\u0192\x03\x02\x02\x02\u019AS\x03\x02\x02\x02\u019B" +
		"\u019C\x07\b\x02\x02\u019C\u019D\x07=\x02\x02\u019D\u019E\x07H\x02\x02" +
		"\u019EU\x03\x02\x02\x02\u019F\u01A0\x07\x07\x02\x02\u01A0\u01A1\x07=\x02" +
		"\x02\u01A1\u01A2\x07H\x02\x02\u01A2W\x03\x02\x02\x02\u01A3\u01A4\x07\x05" +
		"\x02\x02\u01A4\u01A5\x07=\x02\x02\u01A5\u01A6\x05^0\x02\u01A6Y\x03\x02" +
		"\x02\x02\u01A7\u01A8\x07\x03\x02\x02\u01A8\u01B1\x07=\x02\x02\u01A9\u01B2" +
		"\x07J\x02\x02\u01AA\u01AD\x07J\x02\x02\u01AB\u01AC\x07>\x02\x02\u01AC" +
		"\u01AE\x07J\x02\x02\u01AD\u01AB\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02" +
		"\x02\u01AF\u01AD\x03\x02\x02\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0\u01B2" +
		"\x03\x02\x02\x02\u01B1\u01A9\x03\x02\x02\x02\u01B1\u01AA\x03\x02\x02\x02" +
		"\u01B2[\x03\x02\x02\x02\u01B3\u01B5\x07J\x02\x02\u01B4\u01B6\t\x02\x02" +
		"\x02\u01B5\u01B4\x03\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6]\x03" +
		"\x02\x02\x02\u01B7\u01BA\x05`1\x02\u01B8\u01B9\x07>\x02\x02\u01B9\u01BB" +
		"\x05`1\x02\u01BA\u01B8\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB" +
		"_\x03\x02\x02\x02\u01BC\u01C1\x07J\x02\x02\u01BD\u01BE\x07@\x02\x02\u01BE" +
		"\u01BF\x05d3\x02\u01BF\u01C0\x07?\x02\x02\u01C0\u01C2\x03\x02\x02\x02" +
		"\u01C1\u01BD\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2a\x03\x02" +
		"\x02\x02\u01C3\u01C4\x05\x1A\x0E\x02\u01C4\u01C5\x079\x02\x02\u01C5\u01C7" +
		"\x03\x02\x02\x02\u01C6\u01C3\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02" +
		"\u01C7\u01D1\x03\x02\x02\x02\u01C8\u01C9\x05\x18\r\x02\u01C9\u01CD\x07" +
		"9\x02\x02\u01CA\u01CB\x05\x1A\x0E\x02\u01CB\u01CC\x079\x02\x02\u01CC\u01CE" +
		"\x03\x02\x02\x02\u01CD\u01CA\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02" +
		"\u01CE\u01D0\x03\x02\x02\x02\u01CF\u01C8\x03\x02\x02\x02\u01D0\u01D3\x03" +
		"\x02\x02\x02\u01D1\u01CF\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2" +
		"\u01D4\x03\x02\x02\x02\u01D3\u01D1\x03\x02\x02\x02\u01D4\u01D7\x05\x18" +
		"\r\x02\u01D5\u01D6\x079\x02\x02\u01D6\u01D8\x05\x1A\x0E\x02\u01D7\u01D5" +
		"\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8c\x03\x02\x02\x02\u01D9" +
		"\u01DE\x05f4\x02\u01DA\u01DB\x077\x02\x02\u01DB\u01DD\x05f4\x02\u01DC" +
		"\u01DA\x03\x02\x02\x02\u01DD\u01E0\x03\x02\x02\x02\u01DE\u01DC\x03\x02" +
		"\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DFe\x03\x02\x02\x02\u01E0\u01DE" +
		"\x03\x02\x02\x02\u01E1\u01EA\x03\x02\x02\x02\u01E2\u01EA\x05.\x18\x02" +
		"\u01E3\u01EA\x05P)\x02\u01E4\u01EA\x05R*\x02\u01E5\u01EA\x05T+\x02\u01E6" +
		"\u01EA\x05V,\x02\u01E7\u01EA\x05X-\x02\u01E8\u01EA\x05Z.\x02\u01E9\u01E1" +
		"\x03\x02\x02\x02\u01E9\u01E2\x03\x02\x02\x02\u01E9\u01E3\x03\x02\x02\x02" +
		"\u01E9\u01E4\x03\x02\x02\x02\u01E9\u01E5\x03\x02\x02\x02\u01E9\u01E6\x03" +
		"\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01E9\u01E8\x03\x02\x02\x02\u01EA" +
		"g\x03\x02\x02\x02\u01EB\u01EC\b5\x01\x02\u01EC\u01ED\x07J\x02\x02\u01ED" +
		"\u01EF\x07@\x02\x02\u01EE\u01F0\x05j6\x02\u01EF\u01EE\x03\x02\x02\x02" +
		"\u01EF\u01F0\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01FE\x07" +
		"?\x02\x02\u01F2\u01F3\x07@\x02\x02\u01F3\u01F4\x05h5\x02\u01F4\u01F5\x07" +
		"?\x02\x02\u01F5\u01FE\x03\x02\x02\x02\u01F6\u01F7\t\x03\x02\x02\u01F7" +
		"\u01FE\x05h5\x0E\u01F8\u01F9\x078\x02\x02\u01F9\u01FE\x05h5\r\u01FA\u01FE" +
		"\x05l7\x02\u01FB\u01FE\x05\x12\n\x02\u01FC\u01FE\x05*\x16\x02\u01FD\u01EB" +
		"\x03\x02\x02\x02\u01FD\u01F2\x03\x02\x02\x02\u01FD\u01F6\x03\x02\x02\x02" +
		"\u01FD\u01F8\x03\x02\x02\x02\u01FD\u01FA\x03\x02\x02\x02\u01FD\u01FB\x03" +
		"\x02\x02\x02\u01FD\u01FC\x03\x02\x02\x02\u01FE\u0226\x03\x02\x02\x02\u01FF" +
		"\u0200\f\f\x02\x02\u0200\u0201\x072\x02\x02\u0201\u0225\x05h5\f\u0202" +
		"\u0203\f\v\x02\x02\u0203\u0204\x071\x02\x02\u0204\u0225\x05h5\f\u0205" +
		"\u0206\f\n\x02\x02\u0206\u0207\x070\x02\x02\u0207\u0225\x05h5\v\u0208" +
		"\u0209\f\t\x02\x02\u0209\u020A\x07/\x02\x02\u020A\u0225\x05h5\n\u020B" +
		"\u020C\f\b\x02\x02\u020C\u020D\x07.\x02\x02\u020D\u0225\x05h5\t\u020E" +
		"\u020F\f\x07\x02\x02\u020F\u0210\t\x04\x02\x02\u0210\u0225\x05h5\b\u0211" +
		"\u0212\f\x06\x02\x02\u0212\u0213\t\x05\x02\x02\u0213\u0225\x05h5\x07\u0214" +
		"\u0215\f\x0F\x02\x02\u0215\u0216\x07*\x02\x02\u0216\u0220\x07@\x02\x02" +
		"\u0217\u021C\x05l7\x02\u0218\u0219\x07>\x02\x02\u0219\u021B\x05l7\x02" +
		"\u021A\u0218\x03\x02\x02\x02\u021B\u021E\x03\x02\x02\x02\u021C\u021A\x03" +
		"\x02\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D\u0221\x03\x02\x02\x02\u021E" +
		"\u021C\x03\x02\x02\x02\u021F\u0221\x05h5\x02\u0220\u0217\x03\x02\x02\x02" +
		"\u0220\u021F\x03\x02\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222\u0223\x07" +
		"?\x02\x02\u0223\u0225\x03\x02\x02\x02\u0224\u01FF\x03\x02\x02\x02\u0224" +
		"\u0202\x03\x02\x02\x02\u0224\u0205\x03\x02\x02\x02\u0224\u0208\x03\x02" +
		"\x02\x02\u0224\u020B\x03\x02\x02\x02\u0224\u020E\x03\x02\x02\x02\u0224" +
		"\u0211\x03\x02\x02\x02\u0224\u0214\x03\x02\x02\x02\u0225\u0228\x03\x02" +
		"\x02\x02\u0226\u0224\x03\x02\x02\x02\u0226\u0227\x03\x02\x02\x02\u0227" +
		"i\x03\x02\x02\x02\u0228\u0226\x03\x02\x02\x02\u0229\u022E\x05h5\x02\u022A" +
		"\u022B\x07>\x02\x02\u022B\u022D\x05h5\x02\u022C\u022A\x03\x02\x02\x02" +
		"\u022D\u0230\x03\x02\x02\x02\u022E\u022C\x03\x02\x02\x02\u022E\u022F\x03" +
		"\x02\x02\x02\u022Fk\x03\x02\x02\x02\u0230\u022E\x03\x02\x02\x02\u0231" +
		"\u023C\x07A\x02\x02\u0232\u023C\x07F\x02\x02\u0233\u023C\x07C\x02\x02" +
		"\u0234\u023C\x07B\x02\x02\u0235\u023C\x07D\x02\x02\u0236";
	private static readonly _serializedATNSegment1: string =
		"\u023C\x07H\x02\x02\u0237\u023C\x07I\x02\x02\u0238\u023C\x07G\x02\x02" +
		"\u0239\u023C\x07E\x02\x02\u023A\u023C\x05n8\x02\u023B\u0231\x03\x02\x02" +
		"\x02\u023B\u0232\x03\x02\x02\x02\u023B\u0233\x03\x02\x02\x02\u023B\u0234" +
		"\x03\x02\x02\x02\u023B\u0235\x03\x02\x02\x02\u023B\u0236\x03\x02\x02\x02" +
		"\u023B\u0237\x03\x02\x02\x02\u023B\u0238\x03\x02\x02\x02\u023B\u0239\x03" +
		"\x02\x02\x02\u023B\u023A\x03\x02\x02\x02\u023Cm\x03\x02\x02\x02\u023D" +
		"\u023E\x05p9\x02\u023E\u023F\x07;\x02\x02\u023F\u0240\x05r:\x02\u0240" +
		"\u0241\x07;\x02\x02\u0241o\x03\x02\x02\x02\u0242\u0243\x05v<\x02\u0243" +
		"\u0244\x07J\x02\x02\u0244q\x03\x02\x02\x02\u0245\u024E\x05t;\x02\u0246" +
		"\u0249\x05t;\x02\u0247\u0248\x07>\x02\x02\u0248\u024A\x05t;\x02\u0249" +
		"\u0247\x03\x02\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B\u0249\x03\x02" +
		"\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C\u024E\x03\x02\x02\x02\u024D" +
		"\u0245\x03\x02\x02\x02\u024D\u0246\x03\x02\x02\x02\u024Es\x03\x02\x02" +
		"\x02\u024F\u0254\x07H\x02\x02\u0250\u0251\x07J\x02\x02\u0251\u0252\x07" +
		"4\x02\x02\u0252\u0254\x07J\x02\x02\u0253\u024F\x03\x02\x02\x02\u0253\u0250" +
		"\x03\x02\x02\x02\u0254u\x03\x02\x02\x02\u0255\u025A\x07J\x02\x02\u0256" +
		"\u0257\x074\x02\x02\u0257\u0259\x07J\x02\x02\u0258\u0256\x03\x02\x02\x02" +
		"\u0259\u025C\x03\x02\x02\x02\u025A\u0258\x03\x02\x02\x02\u025A\u025B\x03" +
		"\x02\x02\x02\u025B\u025D\x03\x02\x02\x02\u025C\u025A\x03\x02\x02\x02\u025D" +
		"\u025E\x074\x02\x02\u025Ew\x03\x02\x02\x02={\x83\x8E\x91\x99\x9F\xA3\xA6" +
		"\xAA\xB9\xC6\xD6\xE0\xE5\xEF\u0107\u010D\u0114\u011E\u0126\u012D\u0131" +
		"\u0139\u013F\u0146\u014C\u014F\u015D\u0160\u016C\u016E\u0174\u0178\u0186" +
		"\u0197\u0199\u01AF\u01B1\u01B5\u01BA\u01C1\u01C6\u01CD\u01D1\u01D7\u01DE" +
		"\u01E9\u01EF\u01FD\u021C\u0220\u0224\u0226\u022E\u023B\u024B\u024D\u0253" +
		"\u025A";
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
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.IDENTIFIER, 0); }
	public singleNavigation(): SingleNavigationContext | undefined {
		return this.tryGetRuleContext(0, SingleNavigationContext);
	}
	public functionImportCall(): FunctionImportCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionImportCallContext);
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
	public IDENTIFIER(): TerminalNode { return this.getToken(OData4LiteParser.IDENTIFIER, 0); }
	public functionParameters(): FunctionParametersContext {
		return this.getRuleContext(0, FunctionParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
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


export class CollectionNavigationExprContext extends ParserRuleContext {
	public keyPredicate(): KeyPredicateContext | undefined {
		return this.tryGetRuleContext(0, KeyPredicateContext);
	}
	public collectionPath(): CollectionPathContext | undefined {
		return this.tryGetRuleContext(0, CollectionPathContext);
	}
	public FWD_SLASH(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.FWD_SLASH, 0); }
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
	public collectionNavigationExpr(): CollectionNavigationExprContext | undefined {
		return this.tryGetRuleContext(0, CollectionNavigationExprContext);
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
	public VALUE(): TerminalNode { return this.getToken(OData4LiteParser.VALUE, 0); }
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
	public LIT_INTEGER(): TerminalNode { return this.getToken(OData4LiteParser.LIT_INTEGER, 0); }
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
	public FILTER(): TerminalNode { return this.getToken(OData4LiteParser.FILTER, 0); }
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
	public APPLY(): TerminalNode { return this.getToken(OData4LiteParser.APPLY, 0); }
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


export class GroupbyTrafoContext extends ParserRuleContext {
	public GROUPBY_TRANS(): TerminalNode { return this.getToken(OData4LiteParser.GROUPBY_TRANS, 0); }
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
	public FILTER_TRANS(): TerminalNode { return this.getToken(OData4LiteParser.FILTER_TRANS, 0); }
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
	public AGGREGATE_TRANS(): TerminalNode { return this.getToken(OData4LiteParser.AGGREGATE_TRANS, 0); }
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
	public COUNT(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.COUNT, 0); }
	public aggregateAs(): AggregateAsContext | undefined {
		return this.tryGetRuleContext(0, AggregateAsContext);
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


export class AggregateAsContext extends ParserRuleContext {
	public OP_AS(): TerminalNode { return this.getToken(OData4LiteParser.OP_AS, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(OData4LiteParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OData4LiteParser.RULE_aggregateAs; }
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterAggregateAs) {
			listener.enterAggregateAs(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitAggregateAs) {
			listener.exitAggregateAs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitAggregateAs) {
			return visitor.visitAggregateAs(this);
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
	public COUNT(): TerminalNode { return this.getToken(OData4LiteParser.COUNT, 0); }
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
	public ORDERBY(): TerminalNode { return this.getToken(OData4LiteParser.ORDERBY, 0); }
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
	public TOP(): TerminalNode { return this.getToken(OData4LiteParser.TOP, 0); }
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
	public EXPAND(): TerminalNode { return this.getToken(OData4LiteParser.EXPAND, 0); }
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
	public SELECT(): TerminalNode { return this.getToken(OData4LiteParser.SELECT, 0); }
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
	public IDENTIFIER(): TerminalNode { return this.getToken(OData4LiteParser.IDENTIFIER, 0); }
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
	public IDENTIFIER(): TerminalNode { return this.getToken(OData4LiteParser.IDENTIFIER, 0); }
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
export class InExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public OP_IN(): TerminalNode { return this.getToken(OData4LiteParser.OP_IN, 0); }
	public LPAREN(): TerminalNode { return this.getToken(OData4LiteParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(OData4LiteParser.RPAREN, 0); }
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
export class IdExpressionContext extends ExpressionContext {
	public propertyPath(): PropertyPathContext {
		return this.getRuleContext(0, PropertyPathContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: OData4LiteListener): void {
		if (listener.enterIdExpression) {
			listener.enterIdExpression(this);
		}
	}
	// @Override
	public exitRule(listener: OData4LiteListener): void {
		if (listener.exitIdExpression) {
			listener.exitIdExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OData4LiteVisitor<Result>): Result {
		if (visitor.visitIdExpression) {
			return visitor.visitIdExpression(this);
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


