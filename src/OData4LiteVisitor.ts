// Generated from src/grammar/OData4Lite.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { FunctionExpressionContext } from "./OData4LiteParser";
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
import { IdExpressionContext } from "./OData4LiteParser";
import { OdataRelativeURIContext } from "./OData4LiteParser";
import { ResourcePathContext } from "./OData4LiteParser";
import { CollectionNavigationContext } from "./OData4LiteParser";
import { CollectionNavPathContext } from "./OData4LiteParser";
import { SingleNavigationContext } from "./OData4LiteParser";
import { PropertyPathContext } from "./OData4LiteParser";
import { CollectionPathContext } from "./OData4LiteParser";
import { SinglePathContext } from "./OData4LiteParser";
import { NavigationPropertyContext } from "./OData4LiteParser";
import { QualifiedNameContext } from "./OData4LiteParser";
import { KeyPredicateContext } from "./OData4LiteParser";
import { SimpleKeyContext } from "./OData4LiteParser";
import { CompoundKeyContext } from "./OData4LiteParser";
import { QueryOptionsContext } from "./OData4LiteParser";
import { QueryOptionContext } from "./OData4LiteParser";
import { FilterContext } from "./OData4LiteParser";
import { CountContext } from "./OData4LiteParser";
import { TopContext } from "./OData4LiteParser";
import { ExpandContext } from "./OData4LiteParser";
import { SelectContext } from "./OData4LiteParser";
import { ExpandItemListContext } from "./OData4LiteParser";
import { ExpandItemContext } from "./OData4LiteParser";
import { ExpandQueryOptionsContext } from "./OData4LiteParser";
import { ExpandQueryOptionContext } from "./OData4LiteParser";
import { ExpressionContext } from "./OData4LiteParser";
import { ExpressionListContext } from "./OData4LiteParser";
import { PrimitiveLiteralContext } from "./OData4LiteParser";
import { EnumContext } from "./OData4LiteParser";
import { QualifiedEnumTypeNameContext } from "./OData4LiteParser";
import { EnumValuesContext } from "./OData4LiteParser";
import { EnumValueContext } from "./OData4LiteParser";
import { NamespaceContext } from "./OData4LiteParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `OData4LiteParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface OData4LiteVisitor<Result> extends ParseTreeVisitor<Result> {
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
	 * Visit a parse tree produced by the `literalExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExpression?: (ctx: LiteralExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `idExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdExpression?: (ctx: IdExpressionContext) => Result;

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
	 * Visit a parse tree produced by `OData4LiteParser.collectionNavigation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollectionNavigation?: (ctx: CollectionNavigationContext) => Result;

	/**
	 * Visit a parse tree produced by `OData4LiteParser.collectionNavPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollectionNavPath?: (ctx: CollectionNavPathContext) => Result;

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
	 * Visit a parse tree produced by `OData4LiteParser.navigationProperty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNavigationProperty?: (ctx: NavigationPropertyContext) => Result;

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
	 * Visit a parse tree produced by `OData4LiteParser.filter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilter?: (ctx: FilterContext) => Result;

	/**
	 * Visit a parse tree produced by `OData4LiteParser.count`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCount?: (ctx: CountContext) => Result;

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
	 * Visit a parse tree produced by `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `OData4LiteParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

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

