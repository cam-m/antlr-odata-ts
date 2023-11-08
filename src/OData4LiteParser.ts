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
	public static readonly IT = 11;
	public static readonly AGGREGATE_TRANS = 12;
	public static readonly TOPCOUNT_TRANS = 13;
	public static readonly TOPSUM_TRANS = 14;
	public static readonly TOPPERCENT_TRANS = 15;
	public static readonly BOTTOMCOUNT_TRANS = 16;
	public static readonly BOTTOMSUM_TRANS = 17;
	public static readonly BOTTOMPERCENT_TRANS = 18;
	public static readonly IDENTITY_TRANS = 19;
	public static readonly CONCAT_TRANS = 20;
	public static readonly GROUPBY_TRANS = 21;
	public static readonly COMPUTE_TRANS = 22;
	public static readonly FILTER_TRANS = 23;
	public static readonly EXPAND_TRANS = 24;
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
	public static readonly AT_SIGN = 53;
	public static readonly DOT = 54;
	public static readonly DOLLAR = 55;
	public static readonly AMPERSAND = 56;
	public static readonly SEMICOLON = 57;
	public static readonly COLON = 58;
	public static readonly MINUS = 59;
	public static readonly FWD_SLASH = 60;
	public static readonly QUESTION = 61;
	public static readonly SQUOTE = 62;
	public static readonly DQUOTE = 63;
	public static readonly EQ = 64;
	public static readonly COMMA = 65;
	public static readonly RPAREN = 66;
	public static readonly LPAREN = 67;
	public static readonly RBRACKET = 68;
	public static readonly LBRACKET = 69;
	public static readonly NULL = 70;
	public static readonly LIT_DATETIME = 71;
	public static readonly LIT_DATE = 72;
	public static readonly LIT_TIME_OF_DAY = 73;
	public static readonly LIT_DAY_TIME_DURATION = 74;
	public static readonly LIT_BOOLEAN = 75;
	public static readonly LIT_STRING = 76;
	public static readonly LIT_INTEGER = 77;
	public static readonly LIT_DOUBLE = 78;
	public static readonly IDENTIFIER = 79;
	public static readonly UNEXPECTED = 80;
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
	public static readonly RULE_groupbyTrafo = 29;
	public static readonly RULE_groupByList = 30;
	public static readonly RULE_groupbyElement = 31;
	public static readonly RULE_groupingProperty = 32;
	public static readonly RULE_pathPrefix = 33;
	public static readonly RULE_filterTrafo = 34;
	public static readonly RULE_aggregateTrafo = 35;
	public static readonly RULE_aggregationParam = 36;
	public static readonly RULE_aggregationExpr = 37;
	public static readonly RULE_aggregateWith = 38;
	public static readonly RULE_aggregateMethod = 39;
	public static readonly RULE_aggregatedProperty = 40;
	public static readonly RULE_count = 41;
	public static readonly RULE_orderby = 42;
	public static readonly RULE_skip = 43;
	public static readonly RULE_top = 44;
	public static readonly RULE_expand = 45;
	public static readonly RULE_select = 46;
	public static readonly RULE_orderbyItem = 47;
	public static readonly RULE_expandItemList = 48;
	public static readonly RULE_expandItem = 49;
	public static readonly RULE_expandPath = 50;
	public static readonly RULE_expandQueryOptions = 51;
	public static readonly RULE_expandQueryOption = 52;
	public static readonly RULE_expression = 53;
	public static readonly RULE_expressionList = 54;
	public static readonly RULE_firstMemberExpr = 55;
	public static readonly RULE_lambdaPredicatePrefixExpr = 56;
	public static readonly RULE_memberExpr = 57;
	public static readonly RULE_propertyPathExpr = 58;
	public static readonly RULE_collectionNavigationExpr = 59;
	public static readonly RULE_singleNavigationExpr = 60;
	public static readonly RULE_collectionPathExpr = 61;
	public static readonly RULE_anyExpr = 62;
	public static readonly RULE_allExpr = 63;
	public static readonly RULE_lambdaParameterIdentifier = 64;
	public static readonly RULE_primitiveLiteralCollection = 65;
	public static readonly RULE_primitiveLiteral = 66;
	public static readonly RULE_enum = 67;
	public static readonly RULE_qualifiedEnumTypeName = 68;
	public static readonly RULE_enumValues = 69;
	public static readonly RULE_enumValue = 70;
	public static readonly RULE_namespace = 71;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"odataRelativeURI", "resourcePath", "functionImportCall", "functionParameters", 
		"functionParameter", "functionParameterName", "collectionNavigation", 
		"singleNavigation", "propertyPath", "collectionPath", "singlePath", "property", 
		"qualifiedName", "keyPredicate", "simpleKey", "compoundKey", "queryOptions", 
		"queryOption", "systemQueryOption", "dynamicPropertyAssignment", "aliasAndValue", 
		"parameterAlias", "parameterValue", "filter", "apply", "applyExpression", 
		"applyTrafo", "computeTrafo", "computeExpression", "groupbyTrafo", "groupByList", 
		"groupbyElement", "groupingProperty", "pathPrefix", "filterTrafo", "aggregateTrafo", 
		"aggregationParam", "aggregationExpr", "aggregateWith", "aggregateMethod", 
		"aggregatedProperty", "count", "orderby", "skip", "top", "expand", "select", 
		"orderbyItem", "expandItemList", "expandItem", "expandPath", "expandQueryOptions", 
		"expandQueryOption", "expression", "expressionList", "firstMemberExpr", 
		"lambdaPredicatePrefixExpr", "memberExpr", "propertyPathExpr", "collectionNavigationExpr", 
		"singleNavigationExpr", "collectionPathExpr", "anyExpr", "allExpr", "lambdaParameterIdentifier", 
		"primitiveLiteralCollection", "primitiveLiteral", "enum", "qualifiedEnumTypeName", 
		"enumValues", "enumValue", "namespace",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'aggregate'", 
		"'topcount'", "'topsum'", "'toppercent'", "'bottomcount'", "'bottomsum'", 
		"'bottompercent'", "'identity'", "'concat'", "'groupby'", "'compute'", 
		"'filter'", "'expand'", "'all'", "'any'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "'@'", "'.'", "'$'", "'&'", "';'", "':'", "'-'", 
		"'/'", "'?'", "'''", "'\"'", "'='", "','", "')'", "'('", "']'", "'['",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "SELECT", "APPLY", "EXPAND", "FILTER", "TOP", "SKIP_COUNT", 
		"COUNT", "ORDERBY", "REF", "VALUE", "IT", "AGGREGATE_TRANS", "TOPCOUNT_TRANS", 
		"TOPSUM_TRANS", "TOPPERCENT_TRANS", "BOTTOMCOUNT_TRANS", "BOTTOMSUM_TRANS", 
		"BOTTOMPERCENT_TRANS", "IDENTITY_TRANS", "CONCAT_TRANS", "GROUPBY_TRANS", 
		"COMPUTE_TRANS", "FILTER_TRANS", "EXPAND_TRANS", "ALL", "ANY", "ASC", 
		"DESC", "SUM_AGGREGATION", "MIN_AGGREGATION", "MAX_AGGREGATION", "AVERAGE_AGGREGATION", 
		"COUNTDISTINCT_AGGREGATION", "OP_EQ", "OP_NE", "OP_GT", "OP_GE", "OP_LT", 
		"OP_LE", "OP_HAS", "OP_AS", "OP_WITH", "OP_FROM", "OP_IN", "OP_AND", "OP_OR", 
		"OP_NOT", "OP_ADD", "OP_SUB", "OP_DIV", "OP_MUL", "OP_MOD", "AT_SIGN", 
		"DOT", "DOLLAR", "AMPERSAND", "SEMICOLON", "COLON", "MINUS", "FWD_SLASH", 
		"QUESTION", "SQUOTE", "DQUOTE", "EQ", "COMMA", "RPAREN", "LPAREN", "RBRACKET", 
		"LBRACKET", "NULL", "LIT_DATETIME", "LIT_DATE", "LIT_TIME_OF_DAY", "LIT_DAY_TIME_DURATION", 
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
			this.state = 144;
			this.resourcePath();
			this.state = 147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === OData4LiteParser.QUESTION) {
				{
				this.state = 145;
				this.match(OData4LiteParser.QUESTION);
				this.state = 146;
				this.queryOptions();
				}
			}

			this.state = 149;
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
			this.state = 151;
			_localctx._id = this.match(OData4LiteParser.IDENTIFIER);
			this.state = 155;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 152;
				this.functionImportCall((_localctx._id != null ? _localctx._id.text : undefined));
				}
				break;

			case 2:
				{
				this.state = 153;
				this.singleNavigation();
				}
				break;

			case 3:
				{
				this.state = 154;
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
			this.state = 157;
			if (!(this.isUnboundFunctionName(_localctx.identifier))) {
				throw this.createFailedPredicateException("this.isUnboundFunctionName($identifier)");
			}
			this.state = 158;
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
			this.state = 160;
			this.match(OData4LiteParser.LPAREN);
			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === OData4LiteParser.IDENTIFIER) {
				{
				this.state = 161;
				this.functionParameter();
				this.state = 166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === OData4LiteParser.COMMA) {
					{
					{
					this.state = 162;
					this.match(OData4LiteParser.COMMA);
					this.state = 163;
					this.functionParameter();
					}
					}
					this.state = 168;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 171;
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
			this.state = 173;
			this.functionParameterName();
			this.state = 174;
			this.match(OData4LiteParser.EQ);
			this.state = 177;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case OData4LiteParser.AT_SIGN:
				{
				this.state = 175;
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
				this.state = 176;
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
			this.state = 179;
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
			this.state = 183;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 181;
				this.match(OData4LiteParser.FWD_SLASH);
				this.state = 182;
				this.qualifiedName();
				}
				break;
			}
			this.state = 192;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case OData4LiteParser.LPAREN:
				{
				this.state = 185;
				this.keyPredicate();
				this.state = 187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === OData4LiteParser.FWD_SLASH) {
					{
					this.state = 186;
					this.singleNavigation();
					}
				}

				}
				break;
			case OData4LiteParser.COUNT:
				{
				this.state = 189;
				this.collectionPath();
				}
				break;
			case OData4LiteParser.FWD_SLASH:
				{
				this.state = 190;
				this.match(OData4LiteParser.FWD_SLASH);
				this.state = 191;
				this.match(OData4LiteParser.REF);
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
			this.state = 196;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 194;
				this.match(OData4LiteParser.FWD_SLASH);
				this.state = 195;
				this.qualifiedName();
				}
				break;
			}
			this.state = 204;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 198;
				this.match(OData4LiteParser.FWD_SLASH);
				this.state = 199;
				this.propertyPath();
				}
				break;

			case 2:
				{
				this.state = 200;
				this.match(OData4LiteParser.FWD_SLASH);
				this.state = 201;
				this.match(OData4LiteParser.REF);
				}
				break;

			case 3:
				{
				this.state = 202;
				this.match(OData4LiteParser.FWD_SLASH);
				this.state = 203;
				this.match(OData4LiteParser.VALUE);
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
			this.state = 216;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 206;
				this.property();
				this.state = 207;
				this.collectionNavigation();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 209;
				this.property();
				this.state = 210;
				this.singleNavigation();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 212;
				this.property();
				this.state = 213;
				this.singlePath();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 215;
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
			this.state = 218;
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
			this.state = 220;
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
			this.state = 222;
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
			this.state = 224;
			this.namespace();
			this.state = 225;
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
			this.state = 229;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 227;
				this.simpleKey();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 228;
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
			this.state = 231;
			this.match(OData4LiteParser.LPAREN);
			this.state = 232;
			this.primitiveLiteral();
			this.state = 233;
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
			this.state = 235;
			this.match(OData4LiteParser.LPAREN);
			{
			this.state = 236;
			this.match(OData4LiteParser.IDENTIFIER);
			this.state = 237;
			this.match(OData4LiteParser.EQ);
			this.state = 238;
			this.primitiveLiteral();
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === OData4LiteParser.COMMA) {
				{
				{
				this.state = 239;
				this.match(OData4LiteParser.COMMA);
				this.state = 240;
				this.match(OData4LiteParser.IDENTIFIER);
				this.state = 241;
				this.match(OData4LiteParser.EQ);
				this.state = 242;
				this.primitiveLiteral();
				}
				}
				this.state = 247;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 248;
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
			this.state = 250;
			this.queryOption();
			this.state = 255;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === OData4LiteParser.AMPERSAND) {
				{
				{
				this.state = 251;
				this.match(OData4LiteParser.AMPERSAND);
				this.state = 252;
				this.queryOption();
				}
				}
				this.state = 257;
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
			this.state = 260;
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
				this.state = 258;
				this.systemQueryOption();
				}
				break;
			case OData4LiteParser.AT_SIGN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 259;
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
			this.state = 270;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case OData4LiteParser.FILTER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 262;
				this.filter();
				}
				break;
			case OData4LiteParser.COUNT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 263;
				this.count();
				}
				break;
			case OData4LiteParser.TOP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 264;
				this.top();
				}
				break;
			case OData4LiteParser.SKIP_COUNT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 265;
				this.skip();
				}
				break;
			case OData4LiteParser.ORDERBY:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 266;
				this.orderby();
				}
				break;
			case OData4LiteParser.EXPAND:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 267;
				this.expand();
				}
				break;
			case OData4LiteParser.SELECT:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 268;
				this.select();
				}
				break;
			case OData4LiteParser.APPLY:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 269;
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
			this.state = 272;
			this.match(OData4LiteParser.OP_AS);
			this.state = 273;
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
			this.state = 275;
			this.parameterAlias();
			this.state = 276;
			this.match(OData4LiteParser.EQ);
			this.state = 277;
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
			this.state = 279;
			this.match(OData4LiteParser.AT_SIGN);
			this.state = 280;
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
			this.state = 282;
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
			this.state = 284;
			this.match(OData4LiteParser.FILTER);
			this.state = 285;
			this.match(OData4LiteParser.EQ);
			this.state = 286;
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
			this.state = 288;
			this.match(OData4LiteParser.APPLY);
			this.state = 289;
			this.match(OData4LiteParser.EQ);
			this.state = 290;
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
			this.state = 292;
			this.applyTrafo();
			this.state = 297;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === OData4LiteParser.FWD_SLASH) {
				{
				{
				this.state = 293;
				this.match(OData4LiteParser.FWD_SLASH);
				this.state = 294;
				this.applyTrafo();
				}
				}
				this.state = 299;
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
			this.state = 304;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case OData4LiteParser.COMPUTE_TRANS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 300;
				this.computeTrafo();
				}
				break;
			case OData4LiteParser.GROUPBY_TRANS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 301;
				this.groupbyTrafo();
				}
				break;
			case OData4LiteParser.AGGREGATE_TRANS:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 302;
				this.aggregateTrafo();
				}
				break;
			case OData4LiteParser.FILTER_TRANS:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 303;
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
			this.state = 306;
			this.match(OData4LiteParser.COMPUTE_TRANS);
			this.state = 307;
			this.match(OData4LiteParser.LPAREN);
			this.state = 316;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 308;
				this.computeExpression();
				}
				break;

			case 2:
				{
				this.state = 309;
				this.computeExpression();
				this.state = 312;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 310;
					this.match(OData4LiteParser.COMMA);
					this.state = 311;
					this.computeExpression();
					}
					}
					this.state = 314;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === OData4LiteParser.COMMA);
				}
				break;
			}
			this.state = 318;
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
			this.state = 320;
			this.expression(0);
			this.state = 321;
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
	public groupbyTrafo(): GroupbyTrafoContext {
		let _localctx: GroupbyTrafoContext = new GroupbyTrafoContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, OData4LiteParser.RULE_groupbyTrafo);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 323;
			this.match(OData4LiteParser.GROUPBY_TRANS);
			this.state = 324;
			this.match(OData4LiteParser.LPAREN);
			this.state = 325;
			this.groupByList();
			this.state = 328;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === OData4LiteParser.COMMA) {
				{
				this.state = 326;
				this.match(OData4LiteParser.COMMA);
				this.state = 327;
				this.applyExpression();
				}
			}

			this.state = 330;
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
		this.enterRule(_localctx, 60, OData4LiteParser.RULE_groupByList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 332;
			this.match(OData4LiteParser.LPAREN);
			this.state = 333;
			this.groupbyElement();
			this.state = 338;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === OData4LiteParser.COMMA) {
				{
				{
				this.state = 334;
				this.match(OData4LiteParser.COMMA);
				this.state = 335;
				this.groupbyElement();
				}
				}
				this.state = 340;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 341;
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
		this.enterRule(_localctx, 62, OData4LiteParser.RULE_groupbyElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 343;
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
		this.enterRule(_localctx, 64, OData4LiteParser.RULE_groupingProperty);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 346;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				this.state = 345;
				this.pathPrefix();
				}
				break;
			}
			this.state = 357;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 348;
				this.property();
				this.state = 353;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === OData4LiteParser.FWD_SLASH) {
					{
					{
					this.state = 349;
					this.match(OData4LiteParser.FWD_SLASH);
					this.state = 350;
					this.qualifiedName();
					}
					}
					this.state = 355;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				{
				this.state = 356;
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
		this.enterRule(_localctx, 66, OData4LiteParser.RULE_pathPrefix);
		try {
			let _alt: number;
			this.state = 387;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 359;
				this.qualifiedName();
				this.state = 360;
				this.match(OData4LiteParser.FWD_SLASH);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 369;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 362;
						this.property();
						this.state = 365;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
						case 1:
							{
							this.state = 363;
							this.match(OData4LiteParser.FWD_SLASH);
							this.state = 364;
							this.qualifiedName();
							}
							break;
						}
						this.state = 367;
						this.match(OData4LiteParser.FWD_SLASH);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 371;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 373;
				this.qualifiedName();
				this.state = 374;
				this.match(OData4LiteParser.FWD_SLASH);
				this.state = 384;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 375;
						this.property();
						this.state = 378;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
						case 1:
							{
							this.state = 376;
							this.match(OData4LiteParser.FWD_SLASH);
							this.state = 377;
							this.qualifiedName();
							}
							break;
						}
						this.state = 380;
						this.match(OData4LiteParser.FWD_SLASH);
						}
						}
					}
					this.state = 386;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
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
		this.enterRule(_localctx, 68, OData4LiteParser.RULE_filterTrafo);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 389;
			this.match(OData4LiteParser.FILTER_TRANS);
			this.state = 390;
			this.match(OData4LiteParser.LPAREN);
			this.state = 391;
			this.expression(0);
			this.state = 392;
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
		this.enterRule(_localctx, 70, OData4LiteParser.RULE_aggregateTrafo);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 394;
			this.match(OData4LiteParser.AGGREGATE_TRANS);
			this.state = 395;
			this.match(OData4LiteParser.LPAREN);
			this.state = 404;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === OData4LiteParser.COUNT || _la === OData4LiteParser.IT || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (OData4LiteParser.OP_HAS - 40)) | (1 << (OData4LiteParser.OP_NOT - 40)) | (1 << (OData4LiteParser.AT_SIGN - 40)) | (1 << (OData4LiteParser.MINUS - 40)) | (1 << (OData4LiteParser.LPAREN - 40)) | (1 << (OData4LiteParser.LBRACKET - 40)) | (1 << (OData4LiteParser.NULL - 40)) | (1 << (OData4LiteParser.LIT_DATETIME - 40)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (OData4LiteParser.LIT_DATE - 72)) | (1 << (OData4LiteParser.LIT_TIME_OF_DAY - 72)) | (1 << (OData4LiteParser.LIT_DAY_TIME_DURATION - 72)) | (1 << (OData4LiteParser.LIT_BOOLEAN - 72)) | (1 << (OData4LiteParser.LIT_STRING - 72)) | (1 << (OData4LiteParser.LIT_INTEGER - 72)) | (1 << (OData4LiteParser.LIT_DOUBLE - 72)) | (1 << (OData4LiteParser.IDENTIFIER - 72)))) !== 0)) {
				{
				this.state = 396;
				this.aggregationParam();
				this.state = 401;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === OData4LiteParser.COMMA) {
					{
					{
					this.state = 397;
					this.match(OData4LiteParser.COMMA);
					this.state = 398;
					this.aggregationParam();
					}
					}
					this.state = 403;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 406;
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
		this.enterRule(_localctx, 72, OData4LiteParser.RULE_aggregationParam);
		let _la: number;
		try {
			this.state = 418;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 408;
				this.expandPath();
				this.state = 409;
				this.match(OData4LiteParser.LPAREN);
				this.state = 410;
				this.aggregationExpr();
				this.state = 411;
				this.match(OData4LiteParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 413;
				this.aggregationExpr();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 414;
				this.aggregatedProperty();
				this.state = 416;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === OData4LiteParser.OP_WITH) {
					{
					this.state = 415;
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
		this.enterRule(_localctx, 74, OData4LiteParser.RULE_aggregationExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 428;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case OData4LiteParser.COUNT:
				{
				this.state = 420;
				this.match(OData4LiteParser.COUNT);
				this.state = 421;
				this.dynamicPropertyAssignment();
				}
				break;
			case OData4LiteParser.IT:
			case OData4LiteParser.OP_HAS:
			case OData4LiteParser.OP_NOT:
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
				this.state = 422;
				this.expression(0);
				this.state = 424;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === OData4LiteParser.OP_WITH) {
					{
					this.state = 423;
					this.aggregateWith();
					}
				}

				this.state = 426;
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
		this.enterRule(_localctx, 76, OData4LiteParser.RULE_aggregateWith);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 430;
			this.match(OData4LiteParser.OP_WITH);
			this.state = 431;
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
		this.enterRule(_localctx, 78, OData4LiteParser.RULE_aggregateMethod);
		try {
			this.state = 439;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case OData4LiteParser.SUM_AGGREGATION:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 433;
				this.match(OData4LiteParser.SUM_AGGREGATION);
				}
				break;
			case OData4LiteParser.MIN_AGGREGATION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 434;
				this.match(OData4LiteParser.MIN_AGGREGATION);
				}
				break;
			case OData4LiteParser.MAX_AGGREGATION:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 435;
				this.match(OData4LiteParser.MAX_AGGREGATION);
				}
				break;
			case OData4LiteParser.AVERAGE_AGGREGATION:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 436;
				this.match(OData4LiteParser.AVERAGE_AGGREGATION);
				}
				break;
			case OData4LiteParser.COUNTDISTINCT_AGGREGATION:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 437;
				this.match(OData4LiteParser.COUNTDISTINCT_AGGREGATION);
				}
				break;
			case OData4LiteParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 438;
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
		this.enterRule(_localctx, 80, OData4LiteParser.RULE_aggregatedProperty);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 441;
			this.pathPrefix();
			this.state = 442;
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
		this.enterRule(_localctx, 82, OData4LiteParser.RULE_count);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 444;
			this.match(OData4LiteParser.COUNT);
			this.state = 445;
			this.match(OData4LiteParser.EQ);
			this.state = 446;
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
		this.enterRule(_localctx, 84, OData4LiteParser.RULE_orderby);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 448;
			this.match(OData4LiteParser.ORDERBY);
			this.state = 449;
			this.match(OData4LiteParser.EQ);
			this.state = 458;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				{
				this.state = 450;
				this.orderbyItem();
				}
				break;

			case 2:
				{
				this.state = 451;
				this.orderbyItem();
				this.state = 454;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 452;
					this.match(OData4LiteParser.COMMA);
					this.state = 453;
					this.orderbyItem();
					}
					}
					this.state = 456;
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
		this.enterRule(_localctx, 86, OData4LiteParser.RULE_skip);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 460;
			this.match(OData4LiteParser.SKIP_COUNT);
			this.state = 461;
			this.match(OData4LiteParser.EQ);
			this.state = 462;
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
		this.enterRule(_localctx, 88, OData4LiteParser.RULE_top);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 464;
			this.match(OData4LiteParser.TOP);
			this.state = 465;
			this.match(OData4LiteParser.EQ);
			this.state = 466;
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
		this.enterRule(_localctx, 90, OData4LiteParser.RULE_expand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 468;
			this.match(OData4LiteParser.EXPAND);
			this.state = 469;
			this.match(OData4LiteParser.EQ);
			this.state = 470;
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
		this.enterRule(_localctx, 92, OData4LiteParser.RULE_select);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 472;
			this.match(OData4LiteParser.SELECT);
			this.state = 473;
			this.match(OData4LiteParser.EQ);
			this.state = 482;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				{
				this.state = 474;
				this.match(OData4LiteParser.IDENTIFIER);
				}
				break;

			case 2:
				{
				this.state = 475;
				this.match(OData4LiteParser.IDENTIFIER);
				this.state = 478;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 476;
					this.match(OData4LiteParser.COMMA);
					this.state = 477;
					this.match(OData4LiteParser.IDENTIFIER);
					}
					}
					this.state = 480;
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
		this.enterRule(_localctx, 94, OData4LiteParser.RULE_orderbyItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 484;
			this.expression(0);
			this.state = 486;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === OData4LiteParser.ASC || _la === OData4LiteParser.DESC) {
				{
				this.state = 485;
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
		this.enterRule(_localctx, 96, OData4LiteParser.RULE_expandItemList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 488;
			this.expandItem();
			this.state = 491;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === OData4LiteParser.COMMA) {
				{
				this.state = 489;
				this.match(OData4LiteParser.COMMA);
				this.state = 490;
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
		this.enterRule(_localctx, 98, OData4LiteParser.RULE_expandItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 493;
			this.match(OData4LiteParser.IDENTIFIER);
			this.state = 498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === OData4LiteParser.LPAREN) {
				{
				this.state = 494;
				this.match(OData4LiteParser.LPAREN);
				this.state = 495;
				this.expandQueryOptions();
				this.state = 496;
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
		this.enterRule(_localctx, 100, OData4LiteParser.RULE_expandPath);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 503;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				{
				this.state = 500;
				this.qualifiedName();
				this.state = 501;
				this.match(OData4LiteParser.FWD_SLASH);
				}
				break;
			}
			this.state = 514;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 505;
					this.property();
					this.state = 506;
					this.match(OData4LiteParser.FWD_SLASH);
					this.state = 510;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
					case 1:
						{
						this.state = 507;
						this.qualifiedName();
						this.state = 508;
						this.match(OData4LiteParser.FWD_SLASH);
						}
						break;
					}
					}
					}
				}
				this.state = 516;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			}
			this.state = 517;
			this.property();
			this.state = 520;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === OData4LiteParser.FWD_SLASH) {
				{
				this.state = 518;
				this.match(OData4LiteParser.FWD_SLASH);
				this.state = 519;
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
		this.enterRule(_localctx, 102, OData4LiteParser.RULE_expandQueryOptions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 522;
			this.expandQueryOption();
			this.state = 527;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === OData4LiteParser.SEMICOLON) {
				{
				{
				this.state = 523;
				this.match(OData4LiteParser.SEMICOLON);
				this.state = 524;
				this.expandQueryOption();
				}
				}
				this.state = 529;
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
		this.enterRule(_localctx, 104, OData4LiteParser.RULE_expandQueryOption);
		try {
			this.state = 538;
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
				this.state = 531;
				this.filter();
				}
				break;
			case OData4LiteParser.COUNT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 532;
				this.count();
				}
				break;
			case OData4LiteParser.ORDERBY:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 533;
				this.orderby();
				}
				break;
			case OData4LiteParser.SKIP_COUNT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 534;
				this.skip();
				}
				break;
			case OData4LiteParser.TOP:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 535;
				this.top();
				}
				break;
			case OData4LiteParser.EXPAND:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 536;
				this.expand();
				}
				break;
			case OData4LiteParser.SELECT:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 537;
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
		let _startState: number = 106;
		this.enterRecursionRule(_localctx, 106, OData4LiteParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 559;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				{
				_localctx = new LiteralCollectionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 541;
				this.primitiveLiteralCollection();
				}
				break;

			case 2:
				{
				_localctx = new ParenthesisExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 542;
				this.match(OData4LiteParser.LPAREN);
				this.state = 543;
				this.expression(0);
				this.state = 544;
				this.match(OData4LiteParser.RPAREN);
				}
				break;

			case 3:
				{
				_localctx = new UnaryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 546;
				_la = this._input.LA(1);
				if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (OData4LiteParser.OP_HAS - 40)) | (1 << (OData4LiteParser.OP_NOT - 40)) | (1 << (OData4LiteParser.MINUS - 40)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 547;
				this.expression(13);
				}
				break;

			case 4:
				{
				_localctx = new NegativeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 548;
				this.match(OData4LiteParser.MINUS);
				this.state = 549;
				this.expression(12);
				}
				break;

			case 5:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 550;
				this.primitiveLiteral();
				}
				break;

			case 6:
				{
				_localctx = new FirstMemberExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 551;
				this.firstMemberExpr();
				}
				break;

			case 7:
				{
				_localctx = new AliasExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 552;
				this.parameterAlias();
				}
				break;

			case 8:
				{
				_localctx = new FunctionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 553;
				this.match(OData4LiteParser.IDENTIFIER);
				this.state = 554;
				this.match(OData4LiteParser.LPAREN);
				this.state = 556;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === OData4LiteParser.IT || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (OData4LiteParser.OP_HAS - 40)) | (1 << (OData4LiteParser.OP_NOT - 40)) | (1 << (OData4LiteParser.AT_SIGN - 40)) | (1 << (OData4LiteParser.MINUS - 40)) | (1 << (OData4LiteParser.LPAREN - 40)) | (1 << (OData4LiteParser.LBRACKET - 40)) | (1 << (OData4LiteParser.NULL - 40)) | (1 << (OData4LiteParser.LIT_DATETIME - 40)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (OData4LiteParser.LIT_DATE - 72)) | (1 << (OData4LiteParser.LIT_TIME_OF_DAY - 72)) | (1 << (OData4LiteParser.LIT_DAY_TIME_DURATION - 72)) | (1 << (OData4LiteParser.LIT_BOOLEAN - 72)) | (1 << (OData4LiteParser.LIT_STRING - 72)) | (1 << (OData4LiteParser.LIT_INTEGER - 72)) | (1 << (OData4LiteParser.LIT_DOUBLE - 72)) | (1 << (OData4LiteParser.IDENTIFIER - 72)))) !== 0)) {
					{
					this.state = 555;
					this.expressionList();
					}
				}

				this.state = 558;
				this.match(OData4LiteParser.RPAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 590;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 588;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
					case 1:
						{
						_localctx = new ModulusExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, OData4LiteParser.RULE_expression);
						this.state = 561;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 562;
						this.match(OData4LiteParser.OP_MOD);
						this.state = 563;
						this.expression(11);
						}
						break;

					case 2:
						{
						_localctx = new MultiplyExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, OData4LiteParser.RULE_expression);
						this.state = 564;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 565;
						this.match(OData4LiteParser.OP_MUL);
						this.state = 566;
						this.expression(11);
						}
						break;

					case 3:
						{
						_localctx = new DivisionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, OData4LiteParser.RULE_expression);
						this.state = 567;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 568;
						this.match(OData4LiteParser.OP_DIV);
						this.state = 569;
						this.expression(10);
						}
						break;

					case 4:
						{
						_localctx = new SubtractExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, OData4LiteParser.RULE_expression);
						this.state = 570;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 571;
						this.match(OData4LiteParser.OP_SUB);
						this.state = 572;
						this.expression(9);
						}
						break;

					case 5:
						{
						_localctx = new AddExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, OData4LiteParser.RULE_expression);
						this.state = 573;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 574;
						this.match(OData4LiteParser.OP_ADD);
						this.state = 575;
						this.expression(8);
						}
						break;

					case 6:
						{
						_localctx = new BinaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, OData4LiteParser.RULE_expression);
						this.state = 576;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 577;
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
						this.state = 578;
						this.expression(7);
						}
						break;

					case 7:
						{
						_localctx = new LogicalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, OData4LiteParser.RULE_expression);
						this.state = 579;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 580;
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
						this.state = 581;
						this.expression(6);
						}
						break;

					case 8:
						{
						_localctx = new InExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, OData4LiteParser.RULE_expression);
						this.state = 582;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 583;
						this.match(OData4LiteParser.OP_IN);
						this.state = 586;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case OData4LiteParser.LBRACKET:
							{
							this.state = 584;
							this.primitiveLiteralCollection();
							}
							break;
						case OData4LiteParser.AT_SIGN:
							{
							this.state = 585;
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
				this.state = 592;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
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
		this.enterRule(_localctx, 108, OData4LiteParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 593;
			this.expression(0);
			this.state = 598;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === OData4LiteParser.COMMA) {
				{
				{
				this.state = 594;
				this.match(OData4LiteParser.COMMA);
				this.state = 595;
				this.expression(0);
				}
				}
				this.state = 600;
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
	public firstMemberExpr(): FirstMemberExprContext {
		let _localctx: FirstMemberExprContext = new FirstMemberExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, OData4LiteParser.RULE_firstMemberExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 602;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === OData4LiteParser.IT) {
				{
				this.state = 601;
				this.lambdaPredicatePrefixExpr();
				}
			}

			this.state = 604;
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
		this.enterRule(_localctx, 112, OData4LiteParser.RULE_lambdaPredicatePrefixExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 606;
			this.match(OData4LiteParser.IT);
			this.state = 607;
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
		this.enterRule(_localctx, 114, OData4LiteParser.RULE_memberExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 612;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				{
				this.state = 609;
				this.qualifiedName();
				this.state = 610;
				this.match(OData4LiteParser.FWD_SLASH);
				}
				break;
			}
			this.state = 614;
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
		this.enterRule(_localctx, 116, OData4LiteParser.RULE_propertyPathExpr);
		try {
			this.state = 623;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 616;
				this.property();
				this.state = 617;
				this.singleNavigationExpr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 619;
				this.property();
				this.state = 620;
				this.collectionPathExpr();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 622;
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
		this.enterRule(_localctx, 118, OData4LiteParser.RULE_collectionNavigationExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 627;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				{
				this.state = 625;
				this.match(OData4LiteParser.FWD_SLASH);
				this.state = 626;
				this.qualifiedName();
				}
				break;
			}
			this.state = 634;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case OData4LiteParser.LPAREN:
				{
				this.state = 629;
				this.keyPredicate();
				this.state = 631;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === OData4LiteParser.FWD_SLASH) {
					{
					this.state = 630;
					this.singleNavigationExpr();
					}
				}

				}
				break;
			case OData4LiteParser.COUNT:
			case OData4LiteParser.FWD_SLASH:
				{
				this.state = 633;
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
		this.enterRule(_localctx, 120, OData4LiteParser.RULE_singleNavigationExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 636;
			this.match(OData4LiteParser.FWD_SLASH);
			this.state = 637;
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
	public collectionPathExpr(): CollectionPathExprContext {
		let _localctx: CollectionPathExprContext = new CollectionPathExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, OData4LiteParser.RULE_collectionPathExpr);
		try {
			this.state = 644;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 639;
				this.match(OData4LiteParser.COUNT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 640;
				this.match(OData4LiteParser.FWD_SLASH);
				this.state = 641;
				this.anyExpr();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 642;
				this.match(OData4LiteParser.FWD_SLASH);
				this.state = 643;
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
		this.enterRule(_localctx, 124, OData4LiteParser.RULE_anyExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 646;
			this.match(OData4LiteParser.ANY);
			this.state = 647;
			this.match(OData4LiteParser.LPAREN);
			this.state = 652;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === OData4LiteParser.IDENTIFIER) {
				{
				this.state = 648;
				this.lambdaParameterIdentifier();
				this.state = 649;
				this.match(OData4LiteParser.COLON);
				this.state = 650;
				this.expression(0);
				}
			}

			this.state = 654;
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
		this.enterRule(_localctx, 126, OData4LiteParser.RULE_allExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 656;
			this.match(OData4LiteParser.ALL);
			this.state = 657;
			this.match(OData4LiteParser.LPAREN);
			this.state = 658;
			this.lambdaParameterIdentifier();
			this.state = 659;
			this.match(OData4LiteParser.COLON);
			this.state = 660;
			this.expression(0);
			this.state = 661;
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
		this.enterRule(_localctx, 128, OData4LiteParser.RULE_lambdaParameterIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 663;
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
		this.enterRule(_localctx, 130, OData4LiteParser.RULE_primitiveLiteralCollection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 665;
			this.match(OData4LiteParser.LBRACKET);
			this.state = 674;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (OData4LiteParser.NULL - 70)) | (1 << (OData4LiteParser.LIT_DATETIME - 70)) | (1 << (OData4LiteParser.LIT_DATE - 70)) | (1 << (OData4LiteParser.LIT_TIME_OF_DAY - 70)) | (1 << (OData4LiteParser.LIT_DAY_TIME_DURATION - 70)) | (1 << (OData4LiteParser.LIT_BOOLEAN - 70)) | (1 << (OData4LiteParser.LIT_STRING - 70)) | (1 << (OData4LiteParser.LIT_INTEGER - 70)) | (1 << (OData4LiteParser.LIT_DOUBLE - 70)) | (1 << (OData4LiteParser.IDENTIFIER - 70)))) !== 0)) {
				{
				this.state = 666;
				this.primitiveLiteral();
				this.state = 671;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === OData4LiteParser.COMMA) {
					{
					{
					this.state = 667;
					this.match(OData4LiteParser.COMMA);
					this.state = 668;
					this.primitiveLiteral();
					}
					}
					this.state = 673;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 676;
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
		this.enterRule(_localctx, 132, OData4LiteParser.RULE_primitiveLiteral);
		try {
			this.state = 688;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case OData4LiteParser.NULL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 678;
				this.match(OData4LiteParser.NULL);
				}
				break;
			case OData4LiteParser.LIT_BOOLEAN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 679;
				this.match(OData4LiteParser.LIT_BOOLEAN);
				}
				break;
			case OData4LiteParser.LIT_DATE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 680;
				this.match(OData4LiteParser.LIT_DATE);
				}
				break;
			case OData4LiteParser.LIT_DATETIME:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 681;
				this.match(OData4LiteParser.LIT_DATETIME);
				}
				break;
			case OData4LiteParser.LIT_TIME_OF_DAY:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 682;
				this.match(OData4LiteParser.LIT_TIME_OF_DAY);
				}
				break;
			case OData4LiteParser.LIT_INTEGER:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 683;
				this.match(OData4LiteParser.LIT_INTEGER);
				}
				break;
			case OData4LiteParser.LIT_DOUBLE:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 684;
				this.match(OData4LiteParser.LIT_DOUBLE);
				}
				break;
			case OData4LiteParser.LIT_STRING:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 685;
				this.match(OData4LiteParser.LIT_STRING);
				}
				break;
			case OData4LiteParser.LIT_DAY_TIME_DURATION:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 686;
				this.match(OData4LiteParser.LIT_DAY_TIME_DURATION);
				}
				break;
			case OData4LiteParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 687;
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
		this.enterRule(_localctx, 134, OData4LiteParser.RULE_enum);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 690;
			this.qualifiedEnumTypeName();
			this.state = 691;
			this.match(OData4LiteParser.SQUOTE);
			this.state = 692;
			this.enumValues();
			this.state = 693;
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
		this.enterRule(_localctx, 136, OData4LiteParser.RULE_qualifiedEnumTypeName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 695;
			this.namespace();
			this.state = 696;
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
		this.enterRule(_localctx, 138, OData4LiteParser.RULE_enumValues);
		let _la: number;
		try {
			this.state = 706;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 698;
				this.enumValue();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 699;
				this.enumValue();
				this.state = 702;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 700;
					this.match(OData4LiteParser.COMMA);
					this.state = 701;
					this.enumValue();
					}
					}
					this.state = 704;
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
		this.enterRule(_localctx, 140, OData4LiteParser.RULE_enumValue);
		try {
			this.state = 712;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case OData4LiteParser.LIT_INTEGER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 708;
				this.match(OData4LiteParser.LIT_INTEGER);
				}
				break;
			case OData4LiteParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 709;
				this.match(OData4LiteParser.IDENTIFIER);
				this.state = 710;
				this.match(OData4LiteParser.DOT);
				this.state = 711;
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
		this.enterRule(_localctx, 142, OData4LiteParser.RULE_namespace);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 714;
			this.match(OData4LiteParser.IDENTIFIER);
			this.state = 719;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 715;
					this.match(OData4LiteParser.DOT);
					this.state = 716;
					this.match(OData4LiteParser.IDENTIFIER);
					}
					}
				}
				this.state = 721;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
			}
			this.state = 722;
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

		case 53:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03R\u02D7\x04\x02" +
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
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x03\x02\x03\x02\x03\x02\x05\x02\x96\n\x02" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x9E\n\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\xA7\n\x05" +
		"\f\x05\x0E\x05\xAA\v\x05\x05\x05\xAC\n\x05\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x05\x06\xB4\n\x06\x03\x07\x03\x07\x03\b\x03\b\x05" +
		"\b\xBA\n\b\x03\b\x03\b\x05\b\xBE\n\b\x03\b\x03\b\x03\b\x05\b\xC3\n\b\x03" +
		"\t\x03\t\x05\t\xC7\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\xCF\n" +
		"\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xDB" +
		"\n\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F" +
		"\x03\x0F\x05\x0F\xE8\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\xF6\n\x11" +
		"\f\x11\x0E\x11\xF9\v\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x07\x12" +
		"\u0100\n\x12\f\x12\x0E\x12\u0103\v\x12\x03\x13\x03\x13\x05\x13\u0107\n" +
		"\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05" +
		"\x14\u0111\n\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u012A" +
		"\n\x1B\f\x1B\x0E\x1B\u012D\v\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C" +
		"\u0133\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x06\x1D\u013B" +
		"\n\x1D\r\x1D\x0E\x1D\u013C\x05\x1D\u013F\n\x1D\x03\x1D\x03\x1D\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u014B" +
		"\n\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x07 \u0153\n \f \x0E \u0156" +
		"\v \x03 \x03 \x03!\x03!\x03\"\x05\"\u015D\n\"\x03\"\x03\"\x03\"\x07\"" +
		"\u0162\n\"\f\"\x0E\"\u0165\v\"\x03\"\x05\"\u0168\n\"\x03#\x03#\x03#\x03" +
		"#\x03#\x03#\x05#\u0170\n#\x03#\x03#\x06#\u0174\n#\r#\x0E#\u0175\x03#\x03" +
		"#\x03#\x03#\x03#\x05#\u017D\n#\x03#\x03#\x07#\u0181\n#\f#\x0E#\u0184\v" +
		"#\x05#\u0186\n#\x03$\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x07" +
		"%\u0192\n%\f%\x0E%\u0195\v%\x05%\u0197\n%\x03%\x03%\x03&\x03&\x03&\x03" +
		"&\x03&\x03&\x03&\x03&\x05&\u01A3\n&\x05&\u01A5\n&\x03\'\x03\'\x03\'\x03" +
		"\'\x05\'\u01AB\n\'\x03\'\x03\'\x05\'\u01AF\n\'\x03(\x03(\x03(\x03)\x03" +
		")\x03)\x03)\x03)\x03)\x05)\u01BA\n)\x03*\x03*\x03*\x03+\x03+\x03+\x03" +
		"+\x03,\x03,\x03,\x03,\x03,\x03,\x06,\u01C9\n,\r,\x0E,\u01CA\x05,\u01CD" +
		"\n,\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x030\x03" +
		"0\x030\x030\x030\x030\x060\u01E1\n0\r0\x0E0\u01E2\x050\u01E5\n0\x031\x03" +
		"1\x051\u01E9\n1\x032\x032\x032\x052\u01EE\n2\x033\x033\x033\x033\x033" +
		"\x053\u01F5\n3\x034\x034\x034\x054\u01FA\n4\x034\x034\x034\x034\x034\x05" +
		"4\u0201\n4\x074\u0203\n4\f4\x0E4\u0206\v4\x034\x034\x034\x054\u020B\n" +
		"4\x035\x035\x035\x075\u0210\n5\f5\x0E5\u0213\v5\x036\x036\x036\x036\x03" +
		"6\x036\x036\x036\x056\u021D\n6\x037\x037\x037\x037\x037\x037\x037\x03" +
		"7\x037\x037\x037\x037\x037\x037\x037\x037\x057\u022F\n7\x037\x057\u0232" +
		"\n7\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x03" +
		"7\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x057\u024D\n" +
		"7\x077\u024F\n7\f7\x0E7\u0252\v7\x038\x038\x038\x078\u0257\n8\f8\x0E8" +
		"\u025A\v8\x039\x059\u025D\n9\x039\x039\x03:\x03:\x03:\x03;\x03;\x03;\x05" +
		";\u0267\n;\x03;\x03;\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x05<\u0272\n<" +
		"\x03=\x03=\x05=\u0276\n=\x03=\x03=\x05=\u027A\n=\x03=\x05=\u027D\n=\x03" +
		">\x03>\x03>\x03?\x03?\x03?\x03?\x03?\x05?\u0287\n?\x03@\x03@\x03@\x03" +
		"@\x03@\x03@\x05@\u028F\n@\x03@\x03@\x03A\x03A\x03A\x03A\x03A\x03A\x03" +
		"A\x03B\x03B\x03C\x03C\x03C\x03C\x07C\u02A0\nC\fC\x0EC\u02A3\vC\x05C\u02A5" +
		"\nC\x03C\x03C\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x05D\u02B3" +
		"\nD\x03E\x03E\x03E\x03E\x03E\x03F\x03F\x03F\x03G\x03G\x03G\x03G\x06G\u02C1" +
		"\nG\rG\x0EG\u02C2\x05G\u02C5\nG\x03H\x03H\x03H\x03H\x05H\u02CB\nH\x03" +
		"I\x03I\x03I\x07I\u02D0\nI\fI\x0EI\u02D3\vI\x03I\x03I\x03I\x02\x02\x03" +
		"lJ\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
		"*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
		"F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02" +
		"b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02" +
		"~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02" +
		"\x90\x02\x02\x06\x03\x02\x1D\x1E\x05\x02**11==\x03\x02$)\x03\x02/0\x02" +
		"\u0305\x02\x92\x03\x02\x02\x02\x04\x99\x03\x02\x02\x02\x06\x9F\x03\x02" +
		"\x02\x02\b\xA2\x03\x02\x02\x02\n\xAF\x03\x02\x02\x02\f\xB5\x03\x02\x02" +
		"\x02\x0E\xB9\x03\x02\x02\x02\x10\xC6\x03\x02\x02\x02\x12\xDA\x03\x02\x02" +
		"\x02\x14\xDC\x03\x02\x02\x02\x16\xDE\x03\x02\x02\x02\x18\xE0\x03\x02\x02" +
		"\x02\x1A\xE2\x03\x02\x02\x02\x1C\xE7\x03\x02\x02\x02\x1E\xE9\x03\x02\x02" +
		"\x02 \xED\x03\x02\x02\x02\"\xFC\x03\x02\x02\x02$\u0106\x03\x02\x02\x02" +
		"&\u0110\x03\x02\x02\x02(\u0112\x03\x02\x02\x02*\u0115\x03\x02\x02\x02" +
		",\u0119\x03\x02\x02\x02.\u011C\x03\x02\x02\x020\u011E\x03\x02\x02\x02" +
		"2\u0122\x03\x02\x02\x024\u0126\x03\x02\x02\x026\u0132\x03\x02\x02\x02" +
		"8\u0134\x03\x02\x02\x02:\u0142\x03\x02\x02\x02<\u0145\x03\x02\x02\x02" +
		">\u014E\x03\x02\x02\x02@\u0159\x03\x02\x02\x02B\u015C\x03\x02\x02\x02" +
		"D\u0185\x03\x02\x02\x02F\u0187\x03\x02\x02\x02H\u018C\x03\x02\x02\x02" +
		"J\u01A4\x03\x02\x02\x02L\u01AE\x03\x02\x02\x02N\u01B0\x03\x02\x02\x02" +
		"P\u01B9\x03\x02\x02\x02R\u01BB\x03\x02\x02\x02T\u01BE\x03\x02\x02\x02" +
		"V\u01C2\x03\x02\x02\x02X\u01CE\x03\x02\x02\x02Z\u01D2\x03\x02\x02\x02" +
		"\\\u01D6\x03\x02\x02\x02^\u01DA\x03\x02\x02\x02`\u01E6\x03\x02\x02\x02" +
		"b\u01EA\x03\x02\x02\x02d\u01EF\x03\x02\x02\x02f\u01F9\x03\x02\x02\x02" +
		"h\u020C\x03\x02\x02\x02j\u021C\x03\x02\x02\x02l\u0231\x03\x02\x02\x02" +
		"n\u0253\x03\x02\x02\x02p\u025C\x03\x02\x02\x02r\u0260\x03\x02\x02\x02" +
		"t\u0266\x03\x02\x02\x02v\u0271\x03\x02\x02\x02x\u0275\x03\x02\x02\x02" +
		"z\u027E\x03\x02\x02\x02|\u0286\x03\x02\x02\x02~\u0288\x03\x02\x02\x02" +
		"\x80\u0292\x03\x02\x02\x02\x82\u0299\x03\x02\x02\x02\x84\u029B\x03\x02" +
		"\x02\x02\x86\u02B2\x03\x02\x02\x02\x88\u02B4\x03\x02\x02\x02\x8A\u02B9" +
		"\x03\x02\x02\x02\x8C\u02C4\x03\x02\x02\x02\x8E\u02CA\x03\x02\x02\x02\x90" +
		"\u02CC\x03\x02\x02\x02\x92\x95\x05\x04\x03\x02\x93\x94\x07?\x02\x02\x94" +
		"\x96\x05\"\x12\x02\x95\x93\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96" +
		"\x97\x03\x02\x02\x02\x97\x98\x07\x02\x02\x03\x98\x03\x03\x02\x02\x02\x99" +
		"\x9D\x07Q\x02\x02\x9A\x9E\x05\x06\x04\x02\x9B\x9E\x05\x10\t\x02\x9C\x9E" +
		"\x05\x0E\b\x02\x9D\x9A\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9D\x9C" +
		"\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\x05\x03\x02\x02\x02\x9F\xA0" +
		"\x06\x04\x02\x03\xA0\xA1\x05\b\x05\x02\xA1\x07\x03\x02\x02\x02\xA2\xAB" +
		"\x07E\x02\x02\xA3\xA8\x05\n\x06\x02\xA4\xA5\x07C\x02\x02\xA5\xA7\x05\n" +
		"\x06\x02\xA6\xA4\x03\x02\x02\x02\xA7\xAA\x03\x02\x02\x02\xA8\xA6\x03\x02" +
		"\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xAC\x03\x02\x02\x02\xAA\xA8\x03\x02" +
		"\x02\x02\xAB\xA3\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAD\x03\x02" +
		"\x02\x02\xAD\xAE\x07D\x02\x02\xAE\t\x03\x02\x02\x02\xAF\xB0\x05\f\x07" +
		"\x02\xB0\xB3\x07B\x02\x02\xB1\xB4\x05,\x17\x02\xB2\xB4\x05\x86D\x02\xB3" +
		"\xB1\x03\x02\x02\x02\xB3\xB2\x03\x02\x02\x02\xB4\v\x03\x02\x02\x02\xB5" +
		"\xB6\x07Q\x02\x02\xB6\r\x03\x02\x02\x02\xB7\xB8\x07>\x02\x02\xB8\xBA\x05" +
		"\x1A\x0E\x02\xB9\xB7\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xC2\x03" +
		"\x02\x02\x02\xBB\xBD\x05\x1C\x0F\x02\xBC\xBE\x05\x10\t\x02\xBD\xBC\x03" +
		"\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xC3\x03\x02\x02\x02\xBF\xC3\x05" +
		"\x14\v\x02\xC0\xC1\x07>\x02\x02\xC1\xC3\x07\v\x02\x02\xC2\xBB\x03\x02" +
		"\x02\x02\xC2\xBF\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02\xC3\x0F\x03\x02" +
		"\x02\x02\xC4\xC5\x07>\x02\x02\xC5\xC7\x05\x1A\x0E\x02\xC6\xC4\x03\x02" +
		"\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xCE\x03\x02\x02\x02\xC8\xC9\x07>" +
		"\x02\x02\xC9\xCF\x05\x12\n\x02\xCA\xCB\x07>\x02\x02\xCB\xCF\x07\v\x02" +
		"\x02\xCC\xCD\x07>\x02\x02\xCD\xCF\x07\f\x02\x02\xCE\xC8\x03\x02\x02\x02" +
		"\xCE\xCA\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCF\x11\x03\x02\x02\x02" +
		"\xD0\xD1\x05\x18\r\x02\xD1\xD2\x05\x0E\b\x02\xD2\xDB\x03\x02\x02\x02\xD3" +
		"\xD4\x05\x18\r\x02\xD4\xD5\x05\x10\t\x02\xD5\xDB\x03\x02\x02\x02\xD6\xD7" +
		"\x05\x18\r\x02\xD7\xD8\x05\x16\f\x02\xD8\xDB\x03\x02\x02\x02\xD9\xDB\x05" +
		"\x18\r\x02\xDA\xD0\x03\x02\x02\x02\xDA\xD3\x03\x02\x02\x02\xDA\xD6\x03" +
		"\x02\x02\x02\xDA\xD9\x03\x02\x02\x02\xDB\x13\x03\x02\x02\x02\xDC\xDD\x05" +
		"T+\x02\xDD\x15\x03\x02\x02\x02\xDE\xDF\x07\f\x02\x02\xDF\x17\x03\x02\x02" +
		"\x02\xE0\xE1\x07Q\x02\x02\xE1\x19\x03\x02\x02\x02\xE2\xE3\x05\x90I\x02" +
		"\xE3\xE4\x07Q\x02\x02\xE4\x1B\x03\x02\x02\x02\xE5\xE8\x05\x1E\x10\x02" +
		"\xE6\xE8\x05 \x11\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE6\x03\x02\x02\x02" +
		"\xE8\x1D\x03\x02\x02\x02\xE9\xEA\x07E\x02\x02\xEA\xEB\x05\x86D\x02\xEB" +
		"\xEC\x07D\x02\x02\xEC\x1F\x03\x02\x02\x02\xED\xEE\x07E\x02\x02\xEE\xEF" +
		"\x07Q\x02\x02\xEF\xF0\x07B\x02\x02\xF0\xF7\x05\x86D\x02\xF1\xF2\x07C\x02" +
		"\x02\xF2\xF3\x07Q\x02\x02\xF3\xF4\x07B\x02\x02\xF4\xF6\x05\x86D\x02\xF5" +
		"\xF1\x03\x02\x02\x02\xF6\xF9\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF7" +
		"\xF8\x03\x02\x02\x02\xF8\xFA\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xFA" +
		"\xFB\x07D\x02\x02\xFB!\x03\x02\x02\x02\xFC\u0101\x05$\x13\x02\xFD\xFE" +
		"\x07:\x02\x02\xFE\u0100\x05$\x13\x02\xFF\xFD\x03\x02\x02\x02\u0100\u0103" +
		"\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02" +
		"\u0102#\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02\u0104\u0107\x05&\x14" +
		"\x02\u0105\u0107\x05*\x16\x02\u0106\u0104\x03\x02\x02\x02\u0106\u0105" +
		"\x03\x02\x02\x02\u0107%\x03\x02\x02\x02\u0108\u0111\x050\x19\x02\u0109" +
		"\u0111\x05T+\x02\u010A\u0111\x05Z.\x02\u010B\u0111\x05X-\x02\u010C\u0111" +
		"\x05V,\x02\u010D\u0111\x05\\/\x02\u010E\u0111\x05^0\x02\u010F\u0111\x05" +
		"2\x1A\x02\u0110\u0108\x03\x02\x02\x02\u0110\u0109\x03\x02\x02\x02\u0110" +
		"\u010A\x03\x02\x02\x02\u0110\u010B\x03\x02\x02\x02\u0110\u010C\x03\x02" +
		"\x02\x02\u0110\u010D\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0110" +
		"\u010F\x03\x02\x02\x02\u0111\'\x03\x02\x02\x02\u0112\u0113\x07+\x02\x02" +
		"\u0113\u0114\x07Q\x02\x02\u0114)\x03\x02\x02\x02\u0115\u0116\x05,\x17" +
		"\x02\u0116\u0117\x07B\x02\x02\u0117\u0118\x05.\x18\x02\u0118+\x03\x02" +
		"\x02\x02\u0119\u011A\x077\x02\x02\u011A\u011B\x07Q\x02\x02\u011B-\x03" +
		"\x02\x02\x02\u011C\u011D\x05\x86D\x02\u011D/\x03\x02\x02\x02\u011E\u011F" +
		"\x07\x06\x02\x02\u011F\u0120\x07B\x02\x02\u0120\u0121\x05l7\x02\u0121" +
		"1\x03\x02\x02\x02\u0122\u0123\x07\x04\x02\x02\u0123\u0124\x07B\x02\x02" +
		"\u0124\u0125\x054\x1B\x02\u01253\x03\x02\x02\x02\u0126\u012B\x056\x1C" +
		"\x02\u0127\u0128\x07>\x02\x02\u0128\u012A\x056\x1C\x02\u0129\u0127\x03" +
		"\x02\x02\x02\u012A\u012D\x03\x02\x02\x02\u012B\u0129\x03\x02\x02\x02\u012B" +
		"\u012C\x03\x02\x02\x02\u012C5\x03\x02\x02\x02\u012D\u012B\x03\x02\x02" +
		"\x02\u012E\u0133\x058\x1D\x02\u012F\u0133\x05<\x1F\x02\u0130\u0133\x05" +
		"H%\x02\u0131\u0133\x05F$\x02\u0132\u012E\x03\x02\x02\x02\u0132\u012F\x03" +
		"\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0132\u0131\x03\x02\x02\x02\u0133" +
		"7\x03\x02\x02\x02\u0134\u0135\x07\x18\x02\x02\u0135\u013E\x07E\x02\x02" +
		"\u0136\u013F\x05:\x1E\x02\u0137\u013A\x05:\x1E\x02\u0138\u0139\x07C\x02" +
		"\x02\u0139\u013B\x05:\x1E\x02\u013A\u0138\x03\x02\x02\x02\u013B\u013C" +
		"\x03\x02\x02\x02\u013C\u013A\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02" +
		"\u013D\u013F\x03\x02\x02\x02\u013E\u0136\x03\x02\x02\x02\u013E\u0137\x03" +
		"\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\u0141\x07D\x02\x02\u0141" +
		"9\x03\x02\x02\x02\u0142\u0143\x05l7\x02\u0143\u0144\x05(\x15\x02\u0144" +
		";\x03\x02\x02\x02\u0145\u0146\x07\x17\x02\x02\u0146\u0147\x07E\x02\x02" +
		"\u0147\u014A\x05> \x02\u0148\u0149\x07C\x02\x02\u0149\u014B\x054\x1B\x02" +
		"\u014A\u0148\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02\u014B\u014C\x03" +
		"\x02\x02\x02\u014C\u014D\x07D\x02\x02\u014D=\x03\x02\x02\x02\u014E\u014F" +
		"\x07E\x02\x02\u014F\u0154\x05@!\x02\u0150\u0151\x07C\x02\x02\u0151\u0153" +
		"\x05@!\x02\u0152\u0150\x03\x02\x02\x02\u0153\u0156\x03\x02\x02\x02\u0154" +
		"\u0152\x03\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155\u0157\x03\x02" +
		"\x02\x02\u0156\u0154\x03\x02\x02\x02\u0157\u0158\x07D\x02\x02\u0158?\x03" +
		"\x02\x02\x02\u0159\u015A\x05B\"\x02\u015AA\x03\x02\x02\x02\u015B\u015D" +
		"\x05D#\x02\u015C\u015B\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D" +
		"\u0167\x03\x02\x02\x02\u015E\u0163\x05\x18\r\x02\u015F\u0160\x07>\x02" +
		"\x02\u0160\u0162\x05\x1A\x0E\x02\u0161\u015F\x03\x02\x02\x02\u0162\u0165" +
		"\x03\x02\x02\x02\u0163\u0161\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02" +
		"\u0164\u0168\x03\x02\x02\x02\u0165\u0163\x03\x02\x02\x02\u0166\u0168\x05" +
		"\x18\r\x02\u0167\u015E\x03\x02\x02\x02\u0167\u0166\x03\x02\x02\x02\u0168" +
		"C\x03\x02\x02\x02\u0169\u016A\x05\x1A\x0E\x02\u016A\u016B\x07>\x02\x02" +
		"\u016B\u0186\x03\x02\x02\x02\u016C\u016F\x05\x18\r\x02\u016D\u016E\x07" +
		">\x02\x02\u016E\u0170\x05\x1A\x0E\x02\u016F\u016D\x03\x02\x02\x02\u016F" +
		"\u0170\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171\u0172\x07>\x02" +
		"\x02\u0172\u0174\x03\x02\x02\x02\u0173\u016C\x03\x02\x02\x02\u0174\u0175" +
		"\x03\x02\x02\x02\u0175\u0173\x03\x02\x02\x02\u0175\u0176\x03\x02\x02\x02" +
		"\u0176\u0186\x03\x02\x02\x02\u0177\u0178\x05\x1A\x0E\x02\u0178\u0182\x07" +
		">\x02\x02\u0179\u017C\x05\x18\r\x02\u017A\u017B\x07>\x02\x02\u017B\u017D" +
		"\x05\x1A\x0E\x02\u017C\u017A\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02" +
		"\u017D\u017E\x03\x02\x02\x02\u017E\u017F\x07>\x02\x02\u017F\u0181\x03" +
		"\x02\x02\x02\u0180\u0179\x03\x02\x02\x02\u0181\u0184\x03\x02\x02\x02\u0182" +
		"\u0180\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\u0186\x03\x02" +
		"\x02\x02\u0184\u0182\x03\x02\x02\x02\u0185\u0169\x03\x02\x02\x02\u0185" +
		"\u0173\x03\x02\x02\x02\u0185\u0177\x03\x02\x02\x02\u0186E\x03\x02\x02" +
		"\x02\u0187\u0188\x07\x19\x02\x02\u0188\u0189\x07E\x02\x02\u0189\u018A" +
		"\x05l7\x02\u018A\u018B\x07D\x02\x02\u018BG\x03\x02\x02\x02\u018C\u018D" +
		"\x07\x0E\x02\x02\u018D\u0196\x07E\x02\x02\u018E\u0193\x05J&\x02\u018F" +
		"\u0190\x07C\x02\x02\u0190\u0192\x05J&\x02\u0191\u018F\x03\x02\x02\x02" +
		"\u0192\u0195\x03\x02\x02\x02\u0193\u0191\x03\x02\x02\x02\u0193\u0194\x03" +
		"\x02\x02\x02\u0194\u0197\x03\x02\x02\x02\u0195\u0193\x03\x02\x02\x02\u0196" +
		"\u018E\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\u0198\x03\x02" +
		"\x02\x02\u0198\u0199\x07D\x02\x02\u0199I\x03\x02\x02\x02\u019A\u019B\x05" +
		"f4\x02\u019B\u019C\x07E\x02\x02\u019C\u019D\x05L\'\x02\u019D\u019E\x07" +
		"D\x02\x02\u019E\u01A5\x03\x02\x02\x02\u019F\u01A5\x05L\'\x02\u01A0\u01A2" +
		"\x05R*\x02\u01A1\u01A3\x05N(\x02\u01A2\u01A1\x03\x02\x02\x02\u01A2\u01A3" +
		"\x03\x02\x02\x02\u01A3\u01A5\x03\x02\x02\x02\u01A4\u019A\x03\x02\x02\x02" +
		"\u01A4\u019F\x03\x02\x02\x02\u01A4\u01A0\x03\x02\x02\x02\u01A5K\x03\x02" +
		"\x02\x02\u01A6\u01A7\x07\t\x02\x02\u01A7\u01AF\x05(\x15\x02\u01A8\u01AA" +
		"\x05l7\x02\u01A9\u01AB\x05N(\x02\u01AA\u01A9\x03\x02\x02\x02\u01AA\u01AB" +
		"\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC\u01AD\x05(\x15\x02" +
		"\u01AD\u01AF\x03\x02\x02\x02\u01AE\u01A6\x03\x02\x02\x02\u01AE\u01A8\x03" +
		"\x02\x02\x02\u01AFM\x03\x02\x02\x02\u01B0\u01B1\x07,\x02\x02\u01B1\u01B2" +
		"\x05P)\x02\u01B2O\x03\x02\x02\x02\u01B3\u01BA\x07\x1F\x02\x02\u01B4\u01BA" +
		"\x07 \x02\x02\u01B5\u01BA\x07!\x02\x02\u01B6\u01BA\x07\"\x02\x02\u01B7" +
		"\u01BA\x07#\x02\x02\u01B8\u01BA\x05\x1A\x0E\x02\u01B9\u01B3\x03\x02\x02" +
		"\x02\u01B9\u01B4\x03\x02\x02\x02\u01B9\u01B5\x03\x02\x02\x02\u01B9\u01B6" +
		"\x03\x02\x02\x02\u01B9\u01B7\x03\x02\x02\x02\u01B9\u01B8\x03\x02\x02\x02" +
		"\u01BAQ\x03\x02\x02\x02\u01BB\u01BC\x05D#\x02\u01BC\u01BD\x05\x18\r\x02" +
		"\u01BDS\x03\x02\x02\x02\u01BE\u01BF\x07\t\x02\x02\u01BF\u01C0\x07B\x02" +
		"\x02\u01C0\u01C1\x07M\x02\x02\u01C1U\x03\x02\x02\x02\u01C2\u01C3\x07\n" +
		"\x02\x02\u01C3\u01CC\x07B\x02\x02\u01C4\u01CD\x05`1\x02\u01C5\u01C8\x05" +
		"`1\x02\u01C6\u01C7\x07C\x02\x02\u01C7\u01C9\x05`1\x02\u01C8\u01C6\x03" +
		"\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01C8\x03\x02\x02\x02\u01CA" +
		"\u01CB\x03\x02\x02\x02\u01CB\u01CD\x03\x02\x02\x02\u01CC\u01C4\x03\x02" +
		"\x02\x02\u01CC\u01C5\x03\x02\x02\x02\u01CDW\x03\x02\x02\x02\u01CE\u01CF" +
		"\x07\b\x02\x02\u01CF\u01D0\x07B\x02\x02\u01D0\u01D1\x07O\x02\x02\u01D1" +
		"Y\x03\x02\x02\x02\u01D2\u01D3\x07\x07\x02\x02\u01D3\u01D4\x07B\x02\x02" +
		"\u01D4\u01D5\x07O\x02\x02\u01D5[\x03\x02\x02\x02\u01D6\u01D7\x07\x05\x02" +
		"\x02\u01D7\u01D8\x07B\x02\x02\u01D8\u01D9\x05b2\x02\u01D9]\x03\x02\x02" +
		"\x02\u01DA\u01DB\x07\x03\x02\x02\u01DB\u01E4\x07B\x02\x02\u01DC\u01E5" +
		"\x07Q\x02\x02\u01DD\u01E0\x07Q\x02\x02\u01DE\u01DF\x07C\x02\x02\u01DF" +
		"\u01E1\x07Q\x02\x02\u01E0\u01DE\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02" +
		"\x02\u01E2\u01E0\x03\x02\x02\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3\u01E5" +
		"\x03\x02\x02\x02\u01E4\u01DC\x03\x02\x02\x02\u01E4\u01DD\x03\x02\x02\x02" +
		"\u01E5_\x03\x02\x02\x02\u01E6\u01E8\x05l7\x02\u01E7\u01E9\t\x02\x02\x02" +
		"\u01E8\u01E7\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9a\x03\x02" +
		"\x02\x02\u01EA\u01ED\x05d3\x02\u01EB\u01EC\x07C\x02\x02\u01EC\u01EE\x05" +
		"d3\x02\u01ED\u01EB\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02\u01EEc" +
		"\x03\x02\x02\x02\u01EF\u01F4\x07Q\x02\x02\u01F0\u01F1\x07E\x02\x02\u01F1" +
		"\u01F2\x05h5\x02\u01F2\u01F3\x07D\x02\x02\u01F3\u01F5\x03\x02\x02\x02" +
		"\u01F4\u01F0\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5e\x03\x02" +
		"\x02\x02\u01F6\u01F7\x05\x1A\x0E\x02\u01F7\u01F8\x07>\x02\x02\u01F8\u01FA" +
		"\x03\x02\x02\x02\u01F9\u01F6\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02" +
		"\u01FA\u0204\x03\x02\x02\x02\u01FB\u01FC\x05\x18\r\x02\u01FC\u0200\x07" +
		">\x02\x02\u01FD\u01FE\x05\x1A\x0E\x02\u01FE\u01FF\x07>\x02\x02\u01FF\u0201" +
		"\x03\x02\x02\x02\u0200\u01FD\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02" +
		"\u0201\u0203\x03\x02\x02\x02\u0202\u01FB\x03\x02\x02\x02\u0203\u0206\x03" +
		"\x02\x02\x02\u0204\u0202\x03\x02\x02\x02\u0204\u0205\x03\x02\x02\x02\u0205" +
		"\u0207\x03\x02\x02\x02\u0206\u0204\x03\x02\x02\x02\u0207\u020A\x05\x18" +
		"\r\x02\u0208\u0209\x07>\x02\x02\u0209\u020B\x05\x1A\x0E\x02\u020A\u0208" +
		"\x03\x02\x02\x02\u020A\u020B\x03\x02\x02\x02\u020Bg\x03\x02\x02\x02\u020C" +
		"\u0211\x05j6\x02\u020D\u020E\x07;\x02\x02\u020E\u0210\x05j6\x02\u020F" +
		"\u020D\x03\x02\x02\x02\u0210\u0213\x03\x02\x02\x02\u0211\u020F\x03\x02" +
		"\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212i\x03\x02\x02\x02\u0213\u0211" +
		"\x03\x02\x02\x02\u0214\u021D\x03\x02\x02\x02\u0215\u021D\x050\x19\x02" +
		"\u0216\u021D\x05T+\x02\u0217\u021D\x05V,\x02\u0218\u021D\x05X-\x02\u0219" +
		"\u021D\x05Z.\x02\u021A\u021D\x05\\/\x02\u021B\u021D\x05^0\x02\u021C\u0214" +
		"\x03\x02\x02\x02\u021C\u0215\x03\x02\x02\x02\u021C\u0216\x03\x02\x02\x02" +
		"\u021C\u0217\x03\x02\x02\x02\u021C\u0218\x03\x02\x02\x02\u021C\u0219\x03" +
		"\x02\x02\x02\u021C\u021A\x03\x02\x02\x02\u021C\u021B\x03\x02\x02\x02\u021D" +
		"k\x03\x02\x02\x02\u021E\u021F\b7\x01\x02\u021F\u0232\x05\x84C\x02";
	private static readonly _serializedATNSegment1: string =
		"\u0220\u0221\x07E\x02\x02\u0221\u0222\x05l7\x02\u0222\u0223\x07D\x02\x02" +
		"\u0223\u0232\x03\x02\x02\x02\u0224\u0225\t\x03\x02\x02\u0225\u0232\x05" +
		"l7\x0F\u0226\u0227\x07=\x02\x02\u0227\u0232\x05l7\x0E\u0228\u0232\x05" +
		"\x86D\x02\u0229\u0232\x05p9\x02\u022A\u0232\x05,\x17\x02\u022B\u022C\x07" +
		"Q\x02\x02\u022C\u022E\x07E\x02\x02\u022D\u022F\x05n8\x02\u022E\u022D\x03" +
		"\x02\x02\x02\u022E\u022F\x03\x02\x02\x02\u022F\u0230\x03\x02\x02\x02\u0230" +
		"\u0232\x07D\x02\x02\u0231\u021E\x03\x02\x02\x02\u0231\u0220\x03\x02\x02" +
		"\x02\u0231\u0224\x03\x02\x02\x02\u0231\u0226\x03\x02\x02\x02\u0231\u0228" +
		"\x03\x02\x02\x02\u0231\u0229\x03\x02\x02\x02\u0231\u022A\x03\x02\x02\x02" +
		"\u0231\u022B\x03\x02\x02\x02\u0232\u0250\x03\x02\x02\x02\u0233\u0234\f" +
		"\r\x02\x02\u0234\u0235\x076\x02\x02\u0235\u024F\x05l7\r\u0236\u0237\f" +
		"\f\x02\x02\u0237\u0238\x075\x02\x02\u0238\u024F\x05l7\r\u0239\u023A\f" +
		"\v\x02\x02\u023A\u023B\x074\x02\x02\u023B\u024F\x05l7\f\u023C\u023D\f" +
		"\n\x02\x02\u023D\u023E\x073\x02\x02\u023E\u024F\x05l7\v\u023F\u0240\f" +
		"\t\x02\x02\u0240\u0241\x072\x02\x02\u0241\u024F\x05l7\n\u0242\u0243\f" +
		"\b\x02\x02\u0243\u0244\t\x04\x02\x02\u0244\u024F\x05l7\t\u0245\u0246\f" +
		"\x07\x02\x02\u0246\u0247\t\x05\x02\x02\u0247\u024F\x05l7\b\u0248\u0249" +
		"\f\x11\x02\x02\u0249\u024C\x07.\x02\x02\u024A\u024D\x05\x84C\x02\u024B" +
		"\u024D\x05,\x17\x02\u024C\u024A\x03\x02\x02\x02\u024C\u024B\x03\x02\x02" +
		"\x02\u024D\u024F\x03\x02\x02\x02\u024E\u0233\x03\x02\x02\x02\u024E\u0236" +
		"\x03\x02\x02\x02\u024E\u0239\x03\x02\x02\x02\u024E\u023C\x03\x02\x02\x02" +
		"\u024E\u023F\x03\x02\x02\x02\u024E\u0242\x03\x02\x02\x02\u024E\u0245\x03" +
		"\x02\x02\x02\u024E\u0248\x03\x02\x02\x02\u024F\u0252\x03\x02\x02\x02\u0250" +
		"\u024E\x03\x02\x02\x02\u0250\u0251\x03\x02\x02\x02\u0251m\x03\x02\x02" +
		"\x02\u0252\u0250\x03\x02\x02\x02\u0253\u0258\x05l7\x02\u0254\u0255\x07" +
		"C\x02\x02\u0255\u0257\x05l7\x02\u0256\u0254\x03\x02\x02\x02\u0257\u025A" +
		"\x03\x02\x02\x02\u0258\u0256\x03\x02\x02\x02\u0258\u0259\x03\x02\x02\x02" +
		"\u0259o\x03\x02\x02\x02\u025A\u0258\x03\x02\x02\x02\u025B\u025D\x05r:" +
		"\x02\u025C\u025B\x03\x02\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D\u025E" +
		"\x03\x02\x02\x02\u025E\u025F\x05t;\x02\u025Fq\x03\x02\x02\x02\u0260\u0261" +
		"\x07\r\x02\x02\u0261\u0262\x07>\x02\x02\u0262s\x03\x02\x02\x02\u0263\u0264" +
		"\x05\x1A\x0E\x02\u0264\u0265\x07>\x02\x02\u0265\u0267\x03\x02\x02\x02" +
		"\u0266\u0263\x03\x02\x02\x02\u0266\u0267\x03\x02\x02\x02\u0267\u0268\x03" +
		"\x02\x02\x02\u0268\u0269\x05v<\x02\u0269u\x03\x02\x02\x02\u026A\u026B" +
		"\x05\x18\r\x02\u026B\u026C\x05z>\x02\u026C\u0272\x03\x02\x02\x02\u026D" +
		"\u026E\x05\x18\r\x02\u026E\u026F\x05|?\x02\u026F\u0272\x03\x02\x02\x02" +
		"\u0270\u0272\x05\x18\r\x02\u0271\u026A\x03\x02\x02\x02\u0271\u026D\x03" +
		"\x02\x02\x02\u0271\u0270\x03\x02\x02\x02\u0272w\x03\x02\x02\x02\u0273" +
		"\u0274\x07>\x02\x02\u0274\u0276\x05\x1A\x0E\x02\u0275\u0273\x03\x02\x02" +
		"\x02\u0275\u0276\x03\x02\x02\x02\u0276\u027C\x03\x02\x02\x02\u0277\u0279" +
		"\x05\x1C\x0F\x02\u0278\u027A\x05z>\x02\u0279\u0278\x03\x02\x02\x02\u0279" +
		"\u027A\x03\x02\x02\x02\u027A\u027D\x03\x02\x02\x02\u027B\u027D\x05|?\x02" +
		"\u027C\u0277\x03\x02\x02\x02\u027C\u027B\x03\x02\x02\x02\u027Dy\x03\x02" +
		"\x02\x02\u027E\u027F\x07>\x02\x02\u027F\u0280\x05t;\x02\u0280{\x03\x02" +
		"\x02\x02\u0281\u0287\x07\t\x02\x02\u0282\u0283\x07>\x02\x02\u0283\u0287" +
		"\x05~@\x02\u0284\u0285\x07>\x02\x02\u0285\u0287\x05\x80A\x02\u0286\u0281" +
		"\x03\x02\x02\x02\u0286\u0282\x03\x02\x02\x02\u0286\u0284\x03\x02\x02\x02" +
		"\u0287}\x03\x02\x02\x02\u0288\u0289\x07\x1C\x02\x02\u0289\u028E\x07E\x02" +
		"\x02\u028A\u028B\x05\x82B\x02\u028B\u028C\x07<\x02\x02\u028C\u028D\x05" +
		"l7\x02\u028D\u028F\x03\x02\x02\x02\u028E\u028A\x03\x02\x02\x02\u028E\u028F" +
		"\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290\u0291\x07D\x02\x02" +
		"\u0291\x7F\x03\x02\x02\x02\u0292\u0293\x07\x1B\x02\x02\u0293\u0294\x07" +
		"E\x02\x02\u0294\u0295\x05\x82B\x02\u0295\u0296\x07<\x02\x02\u0296\u0297" +
		"\x05l7\x02\u0297\u0298\x07D\x02\x02\u0298\x81\x03\x02\x02\x02\u0299\u029A" +
		"\x07Q\x02\x02\u029A\x83\x03\x02\x02\x02\u029B\u02A4\x07G\x02\x02\u029C" +
		"\u02A1\x05\x86D\x02\u029D\u029E\x07C\x02\x02\u029E\u02A0\x05\x86D\x02" +
		"\u029F\u029D\x03\x02\x02\x02\u02A0\u02A3\x03\x02\x02\x02\u02A1\u029F\x03" +
		"\x02\x02\x02\u02A1\u02A2\x03\x02\x02\x02\u02A2\u02A5\x03\x02\x02\x02\u02A3" +
		"\u02A1\x03\x02\x02\x02\u02A4\u029C\x03\x02\x02\x02\u02A4\u02A5\x03\x02" +
		"\x02\x02\u02A5\u02A6\x03\x02\x02\x02\u02A6\u02A7\x07F\x02\x02\u02A7\x85" +
		"\x03\x02\x02\x02\u02A8\u02B3\x07H\x02\x02\u02A9\u02B3\x07M\x02\x02\u02AA" +
		"\u02B3\x07J\x02\x02\u02AB\u02B3\x07I\x02\x02\u02AC\u02B3\x07K\x02\x02" +
		"\u02AD\u02B3\x07O\x02\x02\u02AE\u02B3\x07P\x02\x02\u02AF\u02B3\x07N\x02" +
		"\x02\u02B0\u02B3\x07L\x02\x02\u02B1\u02B3\x05\x88E\x02\u02B2\u02A8\x03" +
		"\x02\x02\x02\u02B2\u02A9\x03\x02\x02\x02\u02B2\u02AA\x03\x02\x02\x02\u02B2" +
		"\u02AB\x03\x02\x02\x02\u02B2\u02AC\x03\x02\x02\x02\u02B2\u02AD\x03\x02" +
		"\x02\x02\u02B2\u02AE\x03\x02\x02\x02\u02B2\u02AF\x03\x02\x02\x02\u02B2" +
		"\u02B0\x03\x02\x02\x02\u02B2\u02B1\x03\x02\x02\x02\u02B3\x87\x03\x02\x02" +
		"\x02\u02B4\u02B5\x05\x8AF\x02\u02B5\u02B6\x07@\x02\x02\u02B6\u02B7\x05" +
		"\x8CG\x02\u02B7\u02B8\x07@\x02\x02\u02B8\x89\x03\x02\x02\x02\u02B9\u02BA" +
		"\x05\x90I\x02\u02BA\u02BB\x07Q\x02\x02\u02BB\x8B\x03\x02\x02\x02\u02BC" +
		"\u02C5\x05\x8EH\x02\u02BD\u02C0\x05\x8EH\x02\u02BE\u02BF\x07C\x02\x02" +
		"\u02BF\u02C1\x05\x8EH\x02\u02C0\u02BE\x03\x02\x02\x02\u02C1\u02C2\x03" +
		"\x02\x02\x02\u02C2\u02C0\x03\x02\x02\x02\u02C2\u02C3\x03\x02\x02\x02\u02C3" +
		"\u02C5\x03\x02\x02\x02\u02C4\u02BC\x03\x02\x02\x02\u02C4\u02BD\x03\x02" +
		"\x02\x02\u02C5\x8D\x03\x02\x02\x02\u02C6\u02CB\x07O\x02\x02\u02C7\u02C8" +
		"\x07Q\x02\x02\u02C8\u02C9\x078\x02\x02\u02C9\u02CB\x07Q\x02\x02\u02CA" +
		"\u02C6\x03\x02\x02\x02\u02CA\u02C7\x03\x02\x02\x02\u02CB\x8F\x03\x02\x02" +
		"\x02\u02CC\u02D1\x07Q\x02\x02\u02CD\u02CE\x078\x02\x02\u02CE\u02D0\x07" +
		"Q\x02\x02\u02CF\u02CD\x03\x02\x02\x02\u02D0\u02D3\x03\x02\x02\x02\u02D1" +
		"\u02CF\x03\x02\x02\x02\u02D1\u02D2\x03\x02\x02\x02\u02D2\u02D4\x03\x02" +
		"\x02\x02\u02D3\u02D1\x03\x02\x02\x02\u02D4\u02D5\x078\x02\x02\u02D5\x91" +
		"\x03\x02\x02\x02I\x95\x9D\xA8\xAB\xB3\xB9\xBD\xC2\xC6\xCE\xDA\xE7\xF7" +
		"\u0101\u0106\u0110\u012B\u0132\u013C\u013E\u014A\u0154\u015C\u0163\u0167" +
		"\u016F\u0175\u017C\u0182\u0185\u0193\u0196\u01A2\u01A4\u01AA\u01AE\u01B9" +
		"\u01CA\u01CC\u01E2\u01E4\u01E8\u01ED\u01F4\u01F9\u0200\u0204\u020A\u0211" +
		"\u021C\u022E\u0231\u024C\u024E\u0250\u0258\u025C\u0266\u0271\u0275\u0279" +
		"\u027C\u0286\u028E\u02A1\u02A4\u02B2\u02C2\u02C4\u02CA\u02D1";
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
	public REF(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.REF, 0); }
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
	public REF(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.REF, 0); }
	public VALUE(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.VALUE, 0); }
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
	public computeTrafo(): ComputeTrafoContext | undefined {
		return this.tryGetRuleContext(0, ComputeTrafoContext);
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
	public COMPUTE_TRANS(): TerminalNode { return this.getToken(OData4LiteParser.COMPUTE_TRANS, 0); }
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
	public IT(): TerminalNode { return this.getToken(OData4LiteParser.IT, 0); }
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
	public memberExpr(): MemberExprContext {
		return this.getRuleContext(0, MemberExprContext);
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
	public COUNT(): TerminalNode | undefined { return this.tryGetToken(OData4LiteParser.COUNT, 0); }
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
	public ALL(): TerminalNode { return this.getToken(OData4LiteParser.ALL, 0); }
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


