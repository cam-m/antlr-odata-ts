// Generated from src/grammar/OData4Lite.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `OData4LiteParser`.
 */
export interface OData4LiteListener extends ParseTreeListener {
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
	 * Enter a parse tree produced by the `idExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	enterIdExpression?: (ctx: IdExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `idExpression`
	 * labeled alternative in `OData4LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	exitIdExpression?: (ctx: IdExpressionContext) => void;

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
	 * Enter a parse tree produced by `OData4LiteParser.collectionNavPath`.
	 * @param ctx the parse tree
	 */
	enterCollectionNavPath?: (ctx: CollectionNavPathContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.collectionNavPath`.
	 * @param ctx the parse tree
	 */
	exitCollectionNavPath?: (ctx: CollectionNavPathContext) => void;

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
	 * Enter a parse tree produced by `OData4LiteParser.navigationProperty`.
	 * @param ctx the parse tree
	 */
	enterNavigationProperty?: (ctx: NavigationPropertyContext) => void;
	/**
	 * Exit a parse tree produced by `OData4LiteParser.navigationProperty`.
	 * @param ctx the parse tree
	 */
	exitNavigationProperty?: (ctx: NavigationPropertyContext) => void;

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

