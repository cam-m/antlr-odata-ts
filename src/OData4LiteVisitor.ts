
import { AbstractParseTreeVisitor } from "antlr4ng";


// @ts-nocheck
import { Schema } from './lang/edm/Schema';
import { CharStream, TokenStream } from "antlr4ng";


import { OdataRelativeURIContext } from "./OData4LiteParser.js";
import { ResourcePathContext } from "./OData4LiteParser.js";
import { FunctionImportCallContext } from "./OData4LiteParser.js";
import { FunctionParametersContext } from "./OData4LiteParser.js";
import { FunctionParameterContext } from "./OData4LiteParser.js";
import { FunctionParameterNameContext } from "./OData4LiteParser.js";
import { CollectionNavigationContext } from "./OData4LiteParser.js";
import { SingleNavigationContext } from "./OData4LiteParser.js";
import { PropertyPathContext } from "./OData4LiteParser.js";
import { CollectionPathContext } from "./OData4LiteParser.js";
import { SinglePathContext } from "./OData4LiteParser.js";
import { PropertyContext } from "./OData4LiteParser.js";
import { QualifiedNameContext } from "./OData4LiteParser.js";
import { KeyPredicateContext } from "./OData4LiteParser.js";
import { SimpleKeyContext } from "./OData4LiteParser.js";
import { CompoundKeyContext } from "./OData4LiteParser.js";
import { QueryOptionsContext } from "./OData4LiteParser.js";
import { QueryOptionContext } from "./OData4LiteParser.js";
import { SystemQueryOptionContext } from "./OData4LiteParser.js";
import { DynamicPropertyAssignmentContext } from "./OData4LiteParser.js";
import { AliasAndValueContext } from "./OData4LiteParser.js";
import { ParameterAliasContext } from "./OData4LiteParser.js";
import { ParameterValueContext } from "./OData4LiteParser.js";
import { FilterContext } from "./OData4LiteParser.js";
import { ApplyContext } from "./OData4LiteParser.js";
import { ApplyExpressionContext } from "./OData4LiteParser.js";
import { ApplyTrafoContext } from "./OData4LiteParser.js";
import { ComputeTrafoContext } from "./OData4LiteParser.js";
import { ComputeExpressionContext } from "./OData4LiteParser.js";
import { ConcatTrafoContext } from "./OData4LiteParser.js";
import { GroupbyTrafoContext } from "./OData4LiteParser.js";
import { GroupByListContext } from "./OData4LiteParser.js";
import { GroupbyElementContext } from "./OData4LiteParser.js";
import { GroupingPropertyContext } from "./OData4LiteParser.js";
import { PathPrefixContext } from "./OData4LiteParser.js";
import { FilterTrafoContext } from "./OData4LiteParser.js";
import { AggregateTrafoContext } from "./OData4LiteParser.js";
import { AggregationParamContext } from "./OData4LiteParser.js";
import { AggregationExprContext } from "./OData4LiteParser.js";
import { AggregateWithContext } from "./OData4LiteParser.js";
import { AggregateMethodContext } from "./OData4LiteParser.js";
import { AggregatedPropertyContext } from "./OData4LiteParser.js";
import { CountContext } from "./OData4LiteParser.js";
import { OrderbyContext } from "./OData4LiteParser.js";
import { SkipContext } from "./OData4LiteParser.js";
import { TopContext } from "./OData4LiteParser.js";
import { ExpandContext } from "./OData4LiteParser.js";
import { SelectContext } from "./OData4LiteParser.js";
import { OrderbyItemContext } from "./OData4LiteParser.js";
import { ExpandItemListContext } from "./OData4LiteParser.js";
import { ExpandItemContext } from "./OData4LiteParser.js";
import { ExpandPathContext } from "./OData4LiteParser.js";
import { ExpandQueryOptionsContext } from "./OData4LiteParser.js";
import { ExpandQueryOptionContext } from "./OData4LiteParser.js";
import { FunctionExpressionContext } from "./OData4LiteParser.js";
import { ParenthesisExpressionContext } from "./OData4LiteParser.js";
import { UnaryExpressionContext } from "./OData4LiteParser.js";
import { NegativeExpressionContext } from "./OData4LiteParser.js";
import { LiteralExpressionContext } from "./OData4LiteParser.js";
import { LiteralCollectionExpressionContext } from "./OData4LiteParser.js";
import { FirstMemberExpressionContext } from "./OData4LiteParser.js";
import { AliasExpressionContext } from "./OData4LiteParser.js";
import { ModulusExpressionContext } from "./OData4LiteParser.js";
import { MultiplyExpressionContext } from "./OData4LiteParser.js";
import { DivisionExpressionContext } from "./OData4LiteParser.js";
import { SubtractExpressionContext } from "./OData4LiteParser.js";
import { AddExpressionContext } from "./OData4LiteParser.js";
import { BinaryExpressionContext } from "./OData4LiteParser.js";
import { LogicalExpressionContext } from "./OData4LiteParser.js";
import { InExpressionContext } from "./OData4LiteParser.js";
import { ExpressionListContext } from "./OData4LiteParser.js";
import { FunctionNameContext } from "./OData4LiteParser.js";
import { FirstMemberExprContext } from "./OData4LiteParser.js";
import { LambdaPredicatePrefixExprContext } from "./OData4LiteParser.js";
import { MemberExprContext } from "./OData4LiteParser.js";
import { PropertyPathExprContext } from "./OData4LiteParser.js";
import { CollectionNavigationExprContext } from "./OData4LiteParser.js";
import { SingleNavigationExprContext } from "./OData4LiteParser.js";
import { CollectionPathExprContext } from "./OData4LiteParser.js";
import { AnyExprContext } from "./OData4LiteParser.js";
import { AllExprContext } from "./OData4LiteParser.js";
import { LambdaParameterIdentifierContext } from "./OData4LiteParser.js";
import { PrimitiveLiteralCollectionContext } from "./OData4LiteParser.js";
import { PrimitiveLiteralContext } from "./OData4LiteParser.js";
import { EnumContext } from "./OData4LiteParser.js";
import { QualifiedEnumTypeNameContext } from "./OData4LiteParser.js";
import { EnumValuesContext } from "./OData4LiteParser.js";
import { EnumValueContext } from "./OData4LiteParser.js";
import { NamespaceContext } from "./OData4LiteParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `OData4LiteParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class OData4LiteVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `OData4LiteParser.odataRelativeURI`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOdataRelativeURI?: (ctx: OdataRelativeURIContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.resourcePath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResourcePath?: (ctx: ResourcePathContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.functionImportCall`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionImportCall?: (ctx: FunctionImportCallContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.functionParameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionParameters?: (ctx: FunctionParametersContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.functionParameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionParameter?: (ctx: FunctionParameterContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.functionParameterName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionParameterName?: (ctx: FunctionParameterNameContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.collectionNavigation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCollectionNavigation?: (ctx: CollectionNavigationContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.singleNavigation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleNavigation?: (ctx: SingleNavigationContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.propertyPath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyPath?: (ctx: PropertyPathContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.collectionPath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCollectionPath?: (ctx: CollectionPathContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.singlePath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSinglePath?: (ctx: SinglePathContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProperty?: (ctx: PropertyContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.qualifiedName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedName?: (ctx: QualifiedNameContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.keyPredicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKeyPredicate?: (ctx: KeyPredicateContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.simpleKey`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleKey?: (ctx: SimpleKeyContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.compoundKey`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompoundKey?: (ctx: CompoundKeyContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.queryOptions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryOptions?: (ctx: QueryOptionsContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.queryOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryOption?: (ctx: QueryOptionContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.systemQueryOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSystemQueryOption?: (ctx: SystemQueryOptionContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.dynamicPropertyAssignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDynamicPropertyAssignment?: (ctx: DynamicPropertyAssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.aliasAndValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAliasAndValue?: (ctx: AliasAndValueContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.parameterAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameterAlias?: (ctx: ParameterAliasContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.parameterValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameterValue?: (ctx: ParameterValueContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.filter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFilter?: (ctx: FilterContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.apply`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitApply?: (ctx: ApplyContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.applyExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitApplyExpression?: (ctx: ApplyExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.applyTrafo`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitApplyTrafo?: (ctx: ApplyTrafoContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.computeTrafo`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComputeTrafo?: (ctx: ComputeTrafoContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.computeExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComputeExpression?: (ctx: ComputeExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.concatTrafo`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConcatTrafo?: (ctx: ConcatTrafoContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.groupbyTrafo`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupbyTrafo?: (ctx: GroupbyTrafoContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.groupByList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupByList?: (ctx: GroupByListContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.groupbyElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupbyElement?: (ctx: GroupbyElementContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.groupingProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingProperty?: (ctx: GroupingPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.pathPrefix`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPathPrefix?: (ctx: PathPrefixContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.filterTrafo`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFilterTrafo?: (ctx: FilterTrafoContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.aggregateTrafo`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregateTrafo?: (ctx: AggregateTrafoContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.aggregationParam`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregationParam?: (ctx: AggregationParamContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.aggregationExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregationExpr?: (ctx: AggregationExprContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.aggregateWith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregateWith?: (ctx: AggregateWithContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.aggregateMethod`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregateMethod?: (ctx: AggregateMethodContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.aggregatedProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregatedProperty?: (ctx: AggregatedPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.count`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCount?: (ctx: CountContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.orderby`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderby?: (ctx: OrderbyContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.skip`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSkip?: (ctx: SkipContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.top`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTop?: (ctx: TopContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.expand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpand?: (ctx: ExpandContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.select`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect?: (ctx: SelectContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.orderbyItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderbyItem?: (ctx: OrderbyItemContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.expandItemList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpandItemList?: (ctx: ExpandItemListContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.expandItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpandItem?: (ctx: ExpandItemContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.expandPath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpandPath?: (ctx: ExpandPathContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.expandQueryOptions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpandQueryOptions?: (ctx: ExpandQueryOptionsContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.expandQueryOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpandQueryOption?: (ctx: ExpandQueryOptionContext) => Result;
    /**
     * Visit a parse tree produced by the `functionExpression`
     * labeled alternative in `OData4LiteParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionExpression?: (ctx: FunctionExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `parenthesisExpression`
     * labeled alternative in `OData4LiteParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParenthesisExpression?: (ctx: ParenthesisExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `unaryExpression`
     * labeled alternative in `OData4LiteParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `negativeExpression`
     * labeled alternative in `OData4LiteParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNegativeExpression?: (ctx: NegativeExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `literalExpression`
     * labeled alternative in `OData4LiteParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteralExpression?: (ctx: LiteralExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `literalCollectionExpression`
     * labeled alternative in `OData4LiteParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteralCollectionExpression?: (ctx: LiteralCollectionExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `firstMemberExpression`
     * labeled alternative in `OData4LiteParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFirstMemberExpression?: (ctx: FirstMemberExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `aliasExpression`
     * labeled alternative in `OData4LiteParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAliasExpression?: (ctx: AliasExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `modulusExpression`
     * labeled alternative in `OData4LiteParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModulusExpression?: (ctx: ModulusExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `multiplyExpression`
     * labeled alternative in `OData4LiteParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiplyExpression?: (ctx: MultiplyExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `divisionExpression`
     * labeled alternative in `OData4LiteParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDivisionExpression?: (ctx: DivisionExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `subtractExpression`
     * labeled alternative in `OData4LiteParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubtractExpression?: (ctx: SubtractExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `addExpression`
     * labeled alternative in `OData4LiteParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddExpression?: (ctx: AddExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `binaryExpression`
     * labeled alternative in `OData4LiteParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBinaryExpression?: (ctx: BinaryExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `logicalExpression`
     * labeled alternative in `OData4LiteParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalExpression?: (ctx: LogicalExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `inExpression`
     * labeled alternative in `OData4LiteParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInExpression?: (ctx: InExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.expressionList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionList?: (ctx: ExpressionListContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.functionName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionName?: (ctx: FunctionNameContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.firstMemberExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFirstMemberExpr?: (ctx: FirstMemberExprContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.lambdaPredicatePrefixExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLambdaPredicatePrefixExpr?: (ctx: LambdaPredicatePrefixExprContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.memberExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMemberExpr?: (ctx: MemberExprContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.propertyPathExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyPathExpr?: (ctx: PropertyPathExprContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.collectionNavigationExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCollectionNavigationExpr?: (ctx: CollectionNavigationExprContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.singleNavigationExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleNavigationExpr?: (ctx: SingleNavigationExprContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.collectionPathExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCollectionPathExpr?: (ctx: CollectionPathExprContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.anyExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnyExpr?: (ctx: AnyExprContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.allExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAllExpr?: (ctx: AllExprContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.lambdaParameterIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLambdaParameterIdentifier?: (ctx: LambdaParameterIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.primitiveLiteralCollection`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimitiveLiteralCollection?: (ctx: PrimitiveLiteralCollectionContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.primitiveLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimitiveLiteral?: (ctx: PrimitiveLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.enum`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnum?: (ctx: EnumContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.qualifiedEnumTypeName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedEnumTypeName?: (ctx: QualifiedEnumTypeNameContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.enumValues`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumValues?: (ctx: EnumValuesContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.enumValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumValue?: (ctx: EnumValueContext) => Result;
    /**
     * Visit a parse tree produced by `OData4LiteParser.namespace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamespace?: (ctx: NamespaceContext) => Result;
}

