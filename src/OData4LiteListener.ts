// Generated from src/grammar/OData4Lite.g4 by ANTLR 4.9.0-SNAPSHOT


// @ts-nocheck
import { Schema } from './lang/edm/Schema';


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { LiteralCollectionExpressionContext } from "./OData4LiteParser";
import { InExpressionContext } from "./OData4LiteParser";
import { ParenthesisExpressionContext } from "./OData4LiteParser";
import { UnaryExpressionContext } from "./OData4LiteParser";
import { NegativeExpressionContext } from "./OData4LiteParser";
import { ModulusExpressionContext } from "./OData4LiteParser";
import { MultiplyExpressionContext } from "./OData4LiteParser";
import { DivisionExpressionContext } from "./OData4LiteParser";
import { SubtractExpressionContext } from "./OData4LiteParser";
import { AddExpressionContext } from "./OData4LiteParser";
import { BinaryExpressionContext } from "./OData4LiteParser";
import { LogicalExpressionContext } from "./OData4LiteParser";
import { LiteralExpressionContext } from "./OData4LiteParser";
import { FirstMemberExpressionContext } from "./OData4LiteParser";
import { AliasExpressionContext } from "./OData4LiteParser";
import { FunctionExpressionContext } from "./OData4LiteParser";
import { OdataRelativeURIContext } from "./OData4LiteParser";
import { ResourcePathContext } from "./OData4LiteParser";
import { FunctionImportCallContext } from "./OData4LiteParser";
import { FunctionParametersContext } from "./OData4LiteParser";
import { FunctionParameterContext } from "./OData4LiteParser";
import { FunctionParameterNameContext } from "./OData4LiteParser";
import { CollectionNavigationContext } from "./OData4LiteParser";
import { SingleNavigationContext } from "./OData4LiteParser";
import { PropertyPathContext } from "./OData4LiteParser";
import { CollectionPathContext } from "./OData4LiteParser";
import { SinglePathContext } from "./OData4LiteParser";
import { PropertyContext } from "./OData4LiteParser";
import { QualifiedNameContext } from "./OData4LiteParser";
import { KeyPredicateContext } from "./OData4LiteParser";
import { SimpleKeyContext } from "./OData4LiteParser";
import { CompoundKeyContext } from "./OData4LiteParser";
import { QueryOptionsContext } from "./OData4LiteParser";
import { QueryOptionContext } from "./OData4LiteParser";
import { SystemQueryOptionContext } from "./OData4LiteParser";
import { DynamicPropertyAssignmentContext } from "./OData4LiteParser";
import { AliasAndValueContext } from "./OData4LiteParser";
import { ParameterAliasContext } from "./OData4LiteParser";
import { ParameterValueContext } from "./OData4LiteParser";
import { FilterContext } from "./OData4LiteParser";
import { ApplyContext } from "./OData4LiteParser";
import { ApplyExpressionContext } from "./OData4LiteParser";
import { ApplyTrafoContext } from "./OData4LiteParser";
import { ComputeTrafoContext } from "./OData4LiteParser";
import { ComputeExpressionContext } from "./OData4LiteParser";
import { GroupbyTrafoContext } from "./OData4LiteParser";
import { GroupByListContext } from "./OData4LiteParser";
import { GroupbyElementContext } from "./OData4LiteParser";
import { GroupingPropertyContext } from "./OData4LiteParser";
import { PathPrefixContext } from "./OData4LiteParser";
import { FilterTrafoContext } from "./OData4LiteParser";
import { AggregateTrafoContext } from "./OData4LiteParser";
import { AggregationParamContext } from "./OData4LiteParser";
import { AggregationExprContext } from "./OData4LiteParser";
import { AggregateWithContext } from "./OData4LiteParser";
import { AggregateMethodContext } from "./OData4LiteParser";
import { AggregatedPropertyContext } from "./OData4LiteParser";
import { CountContext } from "./OData4LiteParser";
import { OrderbyContext } from "./OData4LiteParser";
import { SkipContext } from "./OData4LiteParser";
import { TopContext } from "./OData4LiteParser";
import { ExpandContext } from "./OData4LiteParser";
import { SelectContext } from "./OData4LiteParser";
import { OrderbyItemContext } from "./OData4LiteParser";
import { ExpandItemListContext } from "./OData4LiteParser";
import { ExpandItemContext } from "./OData4LiteParser";
import { ExpandPathContext } from "./OData4LiteParser";
import { ExpandQueryOptionsContext } from "./OData4LiteParser";
import { ExpandQueryOptionContext } from "./OData4LiteParser";
import { ExpressionContext } from "./OData4LiteParser";
import { ExpressionListContext } from "./OData4LiteParser";
import { FirstMemberExprContext } from "./OData4LiteParser";
import { LambdaPredicatePrefixExprContext } from "./OData4LiteParser";
import { MemberExprContext } from "./OData4LiteParser";
import { PropertyPathExprContext } from "./OData4LiteParser";
import { CollectionNavigationExprContext } from "./OData4LiteParser";
import { SingleNavigationExprContext } from "./OData4LiteParser";
import { CollectionPathExprContext } from "./OData4LiteParser";
import { AnyExprContext } from "./OData4LiteParser";
import { AllExprContext } from "./OData4LiteParser";
import { LambdaParameterIdentifierContext } from "./OData4LiteParser";
import { PrimitiveLiteralCollectionContext } from "./OData4LiteParser";
import { PrimitiveLiteralContext } from "./OData4LiteParser";
import { EnumContext } from "./OData4LiteParser";
import { QualifiedEnumTypeNameContext } from "./OData4LiteParser";
import { EnumValuesContext } from "./OData4LiteParser";
import { EnumValueContext } from "./OData4LiteParser";
import { NamespaceContext } from "./OData4LiteParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `OData4LiteParser`.
 */
export interface OData4LiteListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `literalCollectionExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLiteralCollectionExpression?: (ctx: LiteralCollectionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `literalCollectionExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLiteralCollectionExpression?: (ctx: LiteralCollectionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `inExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	enterInExpression?: (ctx: InExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `inExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	exitInExpression?: (ctx: InExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `parenthesisExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	enterParenthesisExpression?: (ctx: ParenthesisExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesisExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	exitParenthesisExpression?: (ctx: ParenthesisExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `unaryExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `negativeExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNegativeExpression?: (ctx: NegativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `negativeExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNegativeExpression?: (ctx: NegativeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `modulusExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	enterModulusExpression?: (ctx: ModulusExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `modulusExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	exitModulusExpression?: (ctx: ModulusExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `multiplyExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMultiplyExpression?: (ctx: MultiplyExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `multiplyExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMultiplyExpression?: (ctx: MultiplyExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `divisionExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	enterDivisionExpression?: (ctx: DivisionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `divisionExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	exitDivisionExpression?: (ctx: DivisionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `subtractExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSubtractExpression?: (ctx: SubtractExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `subtractExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSubtractExpression?: (ctx: SubtractExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `addExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAddExpression?: (ctx: AddExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `addExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAddExpression?: (ctx: AddExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `binaryExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBinaryExpression?: (ctx: BinaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `binaryExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBinaryExpression?: (ctx: BinaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLogicalExpression?: (ctx: LogicalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLogicalExpression?: (ctx: LogicalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `literalExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLiteralExpression?: (ctx: LiteralExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `literalExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLiteralExpression?: (ctx: LiteralExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `firstMemberExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	enterFirstMemberExpression?: (ctx: FirstMemberExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `firstMemberExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	exitFirstMemberExpression?: (ctx: FirstMemberExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `aliasExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAliasExpression?: (ctx: AliasExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `aliasExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAliasExpression?: (ctx: AliasExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `functionExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	enterFunctionExpression?: (ctx: FunctionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `functionExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	exitFunctionExpression?: (ctx: FunctionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.odataRelativeURI`.
	 * @param ctx the parse tree
	 */
	enterOdataRelativeURI?: (ctx: OdataRelativeURIContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.odataRelativeURI`.
	 * @param ctx the parse tree
	 */
	exitOdataRelativeURI?: (ctx: OdataRelativeURIContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.resourcePath`.
	 * @param ctx the parse tree
	 */
	enterResourcePath?: (ctx: ResourcePathContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.resourcePath`.
	 * @param ctx the parse tree
	 */
	exitResourcePath?: (ctx: ResourcePathContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.functionImportCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionImportCall?: (ctx: FunctionImportCallContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.functionImportCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionImportCall?: (ctx: FunctionImportCallContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.functionParameters`.
	 * @param ctx the parse tree
	 */
	enterFunctionParameters?: (ctx: FunctionParametersContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.functionParameters`.
	 * @param ctx the parse tree
	 */
	exitFunctionParameters?: (ctx: FunctionParametersContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.functionParameter`.
	 * @param ctx the parse tree
	 */
	enterFunctionParameter?: (ctx: FunctionParameterContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.functionParameter`.
	 * @param ctx the parse tree
	 */
	exitFunctionParameter?: (ctx: FunctionParameterContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.functionParameterName`.
	 * @param ctx the parse tree
	 */
	enterFunctionParameterName?: (ctx: FunctionParameterNameContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.functionParameterName`.
	 * @param ctx the parse tree
	 */
	exitFunctionParameterName?: (ctx: FunctionParameterNameContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.collectionNavigation`.
	 * @param ctx the parse tree
	 */
	enterCollectionNavigation?: (ctx: CollectionNavigationContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.collectionNavigation`.
	 * @param ctx the parse tree
	 */
	exitCollectionNavigation?: (ctx: CollectionNavigationContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.singleNavigation`.
	 * @param ctx the parse tree
	 */
	enterSingleNavigation?: (ctx: SingleNavigationContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.singleNavigation`.
	 * @param ctx the parse tree
	 */
	exitSingleNavigation?: (ctx: SingleNavigationContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.propertyPath`.
	 * @param ctx the parse tree
	 */
	enterPropertyPath?: (ctx: PropertyPathContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.propertyPath`.
	 * @param ctx the parse tree
	 */
	exitPropertyPath?: (ctx: PropertyPathContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.collectionPath`.
	 * @param ctx the parse tree
	 */
	enterCollectionPath?: (ctx: CollectionPathContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.collectionPath`.
	 * @param ctx the parse tree
	 */
	exitCollectionPath?: (ctx: CollectionPathContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.singlePath`.
	 * @param ctx the parse tree
	 */
	enterSinglePath?: (ctx: SinglePathContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.singlePath`.
	 * @param ctx the parse tree
	 */
	exitSinglePath?: (ctx: SinglePathContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.property`.
	 * @param ctx the parse tree
	 */
	enterProperty?: (ctx: PropertyContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.property`.
	 * @param ctx the parse tree
	 */
	exitProperty?: (ctx: PropertyContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedName?: (ctx: QualifiedNameContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.keyPredicate`.
	 * @param ctx the parse tree
	 */
	enterKeyPredicate?: (ctx: KeyPredicateContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.keyPredicate`.
	 * @param ctx the parse tree
	 */
	exitKeyPredicate?: (ctx: KeyPredicateContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.simpleKey`.
	 * @param ctx the parse tree
	 */
	enterSimpleKey?: (ctx: SimpleKeyContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.simpleKey`.
	 * @param ctx the parse tree
	 */
	exitSimpleKey?: (ctx: SimpleKeyContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.compoundKey`.
	 * @param ctx the parse tree
	 */
	enterCompoundKey?: (ctx: CompoundKeyContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.compoundKey`.
	 * @param ctx the parse tree
	 */
	exitCompoundKey?: (ctx: CompoundKeyContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.queryOptions`.
	 * @param ctx the parse tree
	 */
	enterQueryOptions?: (ctx: QueryOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.queryOptions`.
	 * @param ctx the parse tree
	 */
	exitQueryOptions?: (ctx: QueryOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.queryOption`.
	 * @param ctx the parse tree
	 */
	enterQueryOption?: (ctx: QueryOptionContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.queryOption`.
	 * @param ctx the parse tree
	 */
	exitQueryOption?: (ctx: QueryOptionContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.systemQueryOption`.
	 * @param ctx the parse tree
	 */
	enterSystemQueryOption?: (ctx: SystemQueryOptionContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.systemQueryOption`.
	 * @param ctx the parse tree
	 */
	exitSystemQueryOption?: (ctx: SystemQueryOptionContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.dynamicPropertyAssignment`.
	 * @param ctx the parse tree
	 */
	enterDynamicPropertyAssignment?: (ctx: DynamicPropertyAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.dynamicPropertyAssignment`.
	 * @param ctx the parse tree
	 */
	exitDynamicPropertyAssignment?: (ctx: DynamicPropertyAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.aliasAndValue`.
	 * @param ctx the parse tree
	 */
	enterAliasAndValue?: (ctx: AliasAndValueContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.aliasAndValue`.
	 * @param ctx the parse tree
	 */
	exitAliasAndValue?: (ctx: AliasAndValueContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.parameterAlias`.
	 * @param ctx the parse tree
	 */
	enterParameterAlias?: (ctx: ParameterAliasContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.parameterAlias`.
	 * @param ctx the parse tree
	 */
	exitParameterAlias?: (ctx: ParameterAliasContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.parameterValue`.
	 * @param ctx the parse tree
	 */
	enterParameterValue?: (ctx: ParameterValueContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.parameterValue`.
	 * @param ctx the parse tree
	 */
	exitParameterValue?: (ctx: ParameterValueContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.filter`.
	 * @param ctx the parse tree
	 */
	enterFilter?: (ctx: FilterContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.filter`.
	 * @param ctx the parse tree
	 */
	exitFilter?: (ctx: FilterContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.apply`.
	 * @param ctx the parse tree
	 */
	enterApply?: (ctx: ApplyContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.apply`.
	 * @param ctx the parse tree
	 */
	exitApply?: (ctx: ApplyContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.applyExpression`.
	 * @param ctx the parse tree
	 */
	enterApplyExpression?: (ctx: ApplyExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.applyExpression`.
	 * @param ctx the parse tree
	 */
	exitApplyExpression?: (ctx: ApplyExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.applyTrafo`.
	 * @param ctx the parse tree
	 */
	enterApplyTrafo?: (ctx: ApplyTrafoContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.applyTrafo`.
	 * @param ctx the parse tree
	 */
	exitApplyTrafo?: (ctx: ApplyTrafoContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.computeTrafo`.
	 * @param ctx the parse tree
	 */
	enterComputeTrafo?: (ctx: ComputeTrafoContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.computeTrafo`.
	 * @param ctx the parse tree
	 */
	exitComputeTrafo?: (ctx: ComputeTrafoContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.computeExpression`.
	 * @param ctx the parse tree
	 */
	enterComputeExpression?: (ctx: ComputeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.computeExpression`.
	 * @param ctx the parse tree
	 */
	exitComputeExpression?: (ctx: ComputeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.groupbyTrafo`.
	 * @param ctx the parse tree
	 */
	enterGroupbyTrafo?: (ctx: GroupbyTrafoContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.groupbyTrafo`.
	 * @param ctx the parse tree
	 */
	exitGroupbyTrafo?: (ctx: GroupbyTrafoContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.groupByList`.
	 * @param ctx the parse tree
	 */
	enterGroupByList?: (ctx: GroupByListContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.groupByList`.
	 * @param ctx the parse tree
	 */
	exitGroupByList?: (ctx: GroupByListContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.groupbyElement`.
	 * @param ctx the parse tree
	 */
	enterGroupbyElement?: (ctx: GroupbyElementContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.groupbyElement`.
	 * @param ctx the parse tree
	 */
	exitGroupbyElement?: (ctx: GroupbyElementContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.groupingProperty`.
	 * @param ctx the parse tree
	 */
	enterGroupingProperty?: (ctx: GroupingPropertyContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.groupingProperty`.
	 * @param ctx the parse tree
	 */
	exitGroupingProperty?: (ctx: GroupingPropertyContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.pathPrefix`.
	 * @param ctx the parse tree
	 */
	enterPathPrefix?: (ctx: PathPrefixContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.pathPrefix`.
	 * @param ctx the parse tree
	 */
	exitPathPrefix?: (ctx: PathPrefixContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.filterTrafo`.
	 * @param ctx the parse tree
	 */
	enterFilterTrafo?: (ctx: FilterTrafoContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.filterTrafo`.
	 * @param ctx the parse tree
	 */
	exitFilterTrafo?: (ctx: FilterTrafoContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.aggregateTrafo`.
	 * @param ctx the parse tree
	 */
	enterAggregateTrafo?: (ctx: AggregateTrafoContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.aggregateTrafo`.
	 * @param ctx the parse tree
	 */
	exitAggregateTrafo?: (ctx: AggregateTrafoContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.aggregationParam`.
	 * @param ctx the parse tree
	 */
	enterAggregationParam?: (ctx: AggregationParamContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.aggregationParam`.
	 * @param ctx the parse tree
	 */
	exitAggregationParam?: (ctx: AggregationParamContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.aggregationExpr`.
	 * @param ctx the parse tree
	 */
	enterAggregationExpr?: (ctx: AggregationExprContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.aggregationExpr`.
	 * @param ctx the parse tree
	 */
	exitAggregationExpr?: (ctx: AggregationExprContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.aggregateWith`.
	 * @param ctx the parse tree
	 */
	enterAggregateWith?: (ctx: AggregateWithContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.aggregateWith`.
	 * @param ctx the parse tree
	 */
	exitAggregateWith?: (ctx: AggregateWithContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.aggregateMethod`.
	 * @param ctx the parse tree
	 */
	enterAggregateMethod?: (ctx: AggregateMethodContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.aggregateMethod`.
	 * @param ctx the parse tree
	 */
	exitAggregateMethod?: (ctx: AggregateMethodContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.aggregatedProperty`.
	 * @param ctx the parse tree
	 */
	enterAggregatedProperty?: (ctx: AggregatedPropertyContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.aggregatedProperty`.
	 * @param ctx the parse tree
	 */
	exitAggregatedProperty?: (ctx: AggregatedPropertyContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.count`.
	 * @param ctx the parse tree
	 */
	enterCount?: (ctx: CountContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.count`.
	 * @param ctx the parse tree
	 */
	exitCount?: (ctx: CountContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.orderby`.
	 * @param ctx the parse tree
	 */
	enterOrderby?: (ctx: OrderbyContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.orderby`.
	 * @param ctx the parse tree
	 */
	exitOrderby?: (ctx: OrderbyContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.skip`.
	 * @param ctx the parse tree
	 */
	enterSkip?: (ctx: SkipContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.skip`.
	 * @param ctx the parse tree
	 */
	exitSkip?: (ctx: SkipContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.top`.
	 * @param ctx the parse tree
	 */
	enterTop?: (ctx: TopContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.top`.
	 * @param ctx the parse tree
	 */
	exitTop?: (ctx: TopContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.expand`.
	 * @param ctx the parse tree
	 */
	enterExpand?: (ctx: ExpandContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.expand`.
	 * @param ctx the parse tree
	 */
	exitExpand?: (ctx: ExpandContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.select`.
	 * @param ctx the parse tree
	 */
	enterSelect?: (ctx: SelectContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.select`.
	 * @param ctx the parse tree
	 */
	exitSelect?: (ctx: SelectContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.orderbyItem`.
	 * @param ctx the parse tree
	 */
	enterOrderbyItem?: (ctx: OrderbyItemContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.orderbyItem`.
	 * @param ctx the parse tree
	 */
	exitOrderbyItem?: (ctx: OrderbyItemContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.expandItemList`.
	 * @param ctx the parse tree
	 */
	enterExpandItemList?: (ctx: ExpandItemListContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.expandItemList`.
	 * @param ctx the parse tree
	 */
	exitExpandItemList?: (ctx: ExpandItemListContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.expandItem`.
	 * @param ctx the parse tree
	 */
	enterExpandItem?: (ctx: ExpandItemContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.expandItem`.
	 * @param ctx the parse tree
	 */
	exitExpandItem?: (ctx: ExpandItemContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.expandPath`.
	 * @param ctx the parse tree
	 */
	enterExpandPath?: (ctx: ExpandPathContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.expandPath`.
	 * @param ctx the parse tree
	 */
	exitExpandPath?: (ctx: ExpandPathContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.expandQueryOptions`.
	 * @param ctx the parse tree
	 */
	enterExpandQueryOptions?: (ctx: ExpandQueryOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.expandQueryOptions`.
	 * @param ctx the parse tree
	 */
	exitExpandQueryOptions?: (ctx: ExpandQueryOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.expandQueryOption`.
	 * @param ctx the parse tree
	 */
	enterExpandQueryOption?: (ctx: ExpandQueryOptionContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.expandQueryOption`.
	 * @param ctx the parse tree
	 */
	exitExpandQueryOption?: (ctx: ExpandQueryOptionContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.firstMemberExpr`.
	 * @param ctx the parse tree
	 */
	enterFirstMemberExpr?: (ctx: FirstMemberExprContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.firstMemberExpr`.
	 * @param ctx the parse tree
	 */
	exitFirstMemberExpr?: (ctx: FirstMemberExprContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.lambdaPredicatePrefixExpr`.
	 * @param ctx the parse tree
	 */
	enterLambdaPredicatePrefixExpr?: (ctx: LambdaPredicatePrefixExprContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.lambdaPredicatePrefixExpr`.
	 * @param ctx the parse tree
	 */
	exitLambdaPredicatePrefixExpr?: (ctx: LambdaPredicatePrefixExprContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.memberExpr`.
	 * @param ctx the parse tree
	 */
	enterMemberExpr?: (ctx: MemberExprContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.memberExpr`.
	 * @param ctx the parse tree
	 */
	exitMemberExpr?: (ctx: MemberExprContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.propertyPathExpr`.
	 * @param ctx the parse tree
	 */
	enterPropertyPathExpr?: (ctx: PropertyPathExprContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.propertyPathExpr`.
	 * @param ctx the parse tree
	 */
	exitPropertyPathExpr?: (ctx: PropertyPathExprContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.collectionNavigationExpr`.
	 * @param ctx the parse tree
	 */
	enterCollectionNavigationExpr?: (ctx: CollectionNavigationExprContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.collectionNavigationExpr`.
	 * @param ctx the parse tree
	 */
	exitCollectionNavigationExpr?: (ctx: CollectionNavigationExprContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.singleNavigationExpr`.
	 * @param ctx the parse tree
	 */
	enterSingleNavigationExpr?: (ctx: SingleNavigationExprContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.singleNavigationExpr`.
	 * @param ctx the parse tree
	 */
	exitSingleNavigationExpr?: (ctx: SingleNavigationExprContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.collectionPathExpr`.
	 * @param ctx the parse tree
	 */
	enterCollectionPathExpr?: (ctx: CollectionPathExprContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.collectionPathExpr`.
	 * @param ctx the parse tree
	 */
	exitCollectionPathExpr?: (ctx: CollectionPathExprContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.anyExpr`.
	 * @param ctx the parse tree
	 */
	enterAnyExpr?: (ctx: AnyExprContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.anyExpr`.
	 * @param ctx the parse tree
	 */
	exitAnyExpr?: (ctx: AnyExprContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.allExpr`.
	 * @param ctx the parse tree
	 */
	enterAllExpr?: (ctx: AllExprContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.allExpr`.
	 * @param ctx the parse tree
	 */
	exitAllExpr?: (ctx: AllExprContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.lambdaParameterIdentifier`.
	 * @param ctx the parse tree
	 */
	enterLambdaParameterIdentifier?: (ctx: LambdaParameterIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.lambdaParameterIdentifier`.
	 * @param ctx the parse tree
	 */
	exitLambdaParameterIdentifier?: (ctx: LambdaParameterIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.primitiveLiteralCollection`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveLiteralCollection?: (ctx: PrimitiveLiteralCollectionContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.primitiveLiteralCollection`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveLiteralCollection?: (ctx: PrimitiveLiteralCollectionContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.primitiveLiteral`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveLiteral?: (ctx: PrimitiveLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.primitiveLiteral`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveLiteral?: (ctx: PrimitiveLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.enum`.
	 * @param ctx the parse tree
	 */
	enterEnum?: (ctx: EnumContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.enum`.
	 * @param ctx the parse tree
	 */
	exitEnum?: (ctx: EnumContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.qualifiedEnumTypeName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedEnumTypeName?: (ctx: QualifiedEnumTypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.qualifiedEnumTypeName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedEnumTypeName?: (ctx: QualifiedEnumTypeNameContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.enumValues`.
	 * @param ctx the parse tree
	 */
	enterEnumValues?: (ctx: EnumValuesContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.enumValues`.
	 * @param ctx the parse tree
	 */
	exitEnumValues?: (ctx: EnumValuesContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.enumValue`.
	 * @param ctx the parse tree
	 */
	enterEnumValue?: (ctx: EnumValueContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.enumValue`.
	 * @param ctx the parse tree
	 */
	exitEnumValue?: (ctx: EnumValueContext) => void;

	/**
	 * Enter a parse tree produced by `OData4LiteParser.namespace`.
	 * @param ctx the parse tree
	 */
	enterNamespace?: (ctx: NamespaceContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.namespace`.
	 * @param ctx the parse tree
	 */
	exitNamespace?: (ctx: NamespaceContext) => void;
}

