import {describe} from 'mocha'
import {
    AggregateAsContext,
    BinaryExpressionContext,
    ExpressionContext,
    FilterContext,
    FunctionImportCallContext, IdExpressionContext,
    LogicalExpressionContext,
    OData4LiteLexer,
    OData4LiteParser,
    OdataRelativeURIContext
} from "../src";
import {CharStreams, CodePointCharStream, CommonTokenStream} from "antlr4ts";
import {ParseTree} from "antlr4ts/tree";
import * as assert from "assert";

export const getODataLiteParser = (odataUrl: string): OData4LiteParser => {
    const codePointCharStream: CodePointCharStream = CharStreams.fromString(odataUrl);
    const lexer = new OData4LiteLexer(codePointCharStream);
    const tokens: CommonTokenStream  = new CommonTokenStream(lexer);
    return new OData4LiteParser(tokens);
};


describe('OData Parser and Lexer Tests', function() {
    describe('Functional Test', function() {
        it('Should support creating a lexer from a string, parsing the tokens from the lexer into a tree, and walking the tree.', function() {
            const codePointCharStream: CodePointCharStream = CharStreams.fromString(
                `Incident?$select=Name,CreatedDate&$expand=Issue&$filter=Name eq 'John' and Field2 eq 0`
            );
            const lexer = new OData4LiteLexer(codePointCharStream);
            const tokens: CommonTokenStream  = new CommonTokenStream(lexer);
            tokens.fill();
            const tokenList = tokens.getTokens();

            tokenList.forEach((t, i) => {
                switch (i) {
                    case 0:
                        assert.equal(t.text, 'Incident');
                        assert.equal(t.type, OData4LiteLexer.IDENTIFIER);
                        break;
                    case 1:
                        assert.equal(t.text, '?');
                        assert.equal(t.type, OData4LiteLexer.QUESTION);
                        break;
                    case 2:
                        assert.equal(t.text, '$select');
                        assert.equal(t.type, OData4LiteLexer.SELECT);
                        break;
                    case 3:
                        assert.equal(t.text, '=');
                        assert.equal(t.type, OData4LiteLexer.EQ);
                        break;
                    case 4:
                        assert.equal(t.text, 'Name');
                        assert.equal(t.type, OData4LiteLexer.IDENTIFIER);
                        break;
                    case 5:
                        assert.equal(t.text, ',');
                        assert.equal(t.type, OData4LiteLexer.COMMA);
                        break;
                    case 6:
                        assert.equal(t.text, 'CreatedDate');
                        assert.equal(t.type, OData4LiteLexer.IDENTIFIER);
                        break;
                    case 7:
                        assert.equal(t.text, '&');
                        assert.equal(t.type, OData4LiteLexer.AMPERSAND);
                        break;
                    case 8:
                        assert.equal(t.text, '$expand');
                        assert.equal(t.type, OData4LiteLexer.EXPAND);
                        break;
                    case 9:
                        assert.equal(t.text, '=');
                        assert.equal(t.type, OData4LiteLexer.EQ);
                        break;
                    case 10:
                        assert.equal(t.text, 'Issue');
                        assert.equal(t.type, OData4LiteLexer.IDENTIFIER);
                        break;
                    case 11:
                        assert.equal(t.text, '&');
                        assert.equal(t.type, OData4LiteLexer.AMPERSAND);
                        break;
                    case 12:
                        assert.equal(t.text, '$filter');
                        assert.equal(t.type, OData4LiteLexer.FILTER);
                        break;
                    case 13:
                        assert.equal(t.text, '=');
                        assert.equal(t.type, OData4LiteLexer.EQ);
                        break;
                    case 14:
                        assert.equal(t.text, 'Name');
                        assert.equal(t.type, OData4LiteLexer.IDENTIFIER);
                        break;
                    case 15:
                        assert.equal(t.text, ' eq ');
                        assert.equal(t.type, OData4LiteLexer.OP_EQ);
                        break;
                    case 16:
                        assert.equal(t.text, '\'John\'');
                        assert.equal(t.type, OData4LiteLexer.LIT_STRING);
                        break;
                    case 17:
                        assert.equal(t.text, ' and ');
                        assert.equal(t.type, OData4LiteLexer.OP_AND);
                        break;
                    case 18:
                        assert.equal(t.text, 'Field2');
                        assert.equal(t.type, OData4LiteLexer.IDENTIFIER);
                        break;
                    case 19:
                        assert.equal(t.text, ' eq ');
                        assert.equal(t.type, OData4LiteLexer.OP_EQ);
                        break;
                    case 20:
                        assert.equal(t.text, '0');
                        assert.equal(t.type, OData4LiteLexer.LIT_INTEGER);
                        break;
                    case 21:
                        assert.equal(t.text, '<EOF>');
                        assert.equal(t.type, OData4LiteLexer.EOF);
                        break;
                    default:
                        break;
                }
            });

            const parser: OData4LiteParser = new OData4LiteParser(tokens);
            const tree: ParseTree = parser.odataRelativeURI();
            assert.ok(tree, 'tree returned');
        });

        it('Should match true as a literal boolean, not an identifier.', function() {
            const codePointCharStream: CodePointCharStream = CharStreams.fromString(
                `Incident?$count=true`
            );
            const lexer = new OData4LiteLexer(codePointCharStream);
            const tokens: CommonTokenStream  = new CommonTokenStream(lexer);
            tokens.fill();
            const tokenList = tokens.getTokens();
            tokenList.forEach((t, i) => {
                switch (i) {
                    case 4:
                        assert.equal(t.text, 'true');
                        assert.equal(t.type, OData4LiteLexer.LIT_BOOLEAN);
                        break;
                    default:
                        break;
                }
            });
        });
    });

    describe('Lexer Tests', function() {
        describe('Test $Select Query Options', function() {
        });
    });


    describe('Parser Testings', function() {
        describe('Test expression associativity', function() {
            it('Should create the nodes with the correct associativity for the pattern "a eq b and c eq d"', function () {
                const codePointCharStream: CodePointCharStream = CharStreams.fromString(
                    `$filter=Name eq 'John' and IssueId eq 1`
                );
                const lexer = new OData4LiteLexer(codePointCharStream);
                const tokens: CommonTokenStream  = new CommonTokenStream(lexer);
                const parser: OData4LiteParser = new OData4LiteParser(tokens);
                const tree: FilterContext = parser.filter();
                const expression: ExpressionContext = tree.expression();

                assert.equal(expression.constructor, LogicalExpressionContext);

                if (expression instanceof LogicalExpressionContext) {
                    assert.notEqual(expression.OP_AND(), undefined);
                    assert.equal(expression.expression()[0].constructor, BinaryExpressionContext);
                    assert.equal(expression.expression()[1].constructor, BinaryExpressionContext);
                }
           })
        })

        describe('Unbound Function tests', function() {
            it('Should parse an unbound function with no arguments', function () {
                const tree: OdataRelativeURIContext = getODataLiteParser(`MyDummyFunction()`).odataRelativeURI();
                assert.equal(tree.resourcePath().functionImportCall().IDENTIFIER().text, 'MyDummyFunction');
                assert.equal(tree.resourcePath().functionImportCall().functionParameters().LPAREN().text, '(');
                assert.equal(tree.resourcePath().functionImportCall().functionParameters().RPAREN().text, ')');
            });

            it('Should correctly parse an unbound function with 1 literal argument', function () {
                const tree: OdataRelativeURIContext = getODataLiteParser(`MyDummyFunction(EnvironmentIdList='1,2,3')`).odataRelativeURI();
                assert.equal(tree.resourcePath().functionImportCall().IDENTIFIER().text, 'MyDummyFunction');
                assert.equal(tree.resourcePath().functionImportCall().functionParameters().LPAREN().text, '(');
                assert.equal(tree.resourcePath().functionImportCall().functionParameters().functionParameter()[0].functionParameterName().text, 'EnvironmentIdList');
                assert.equal(tree.resourcePath().functionImportCall().functionParameters().functionParameter()[0].primitiveLiteral().text, '\'1,2,3\'');
                assert.equal(tree.resourcePath().functionImportCall().functionParameters().RPAREN().text, ')');
            });

            it('Should correctly parse an unbound function with 1 alias argument', function () {
                const tree: OdataRelativeURIContext = getODataLiteParser(`MyDummyFunction(EnvironmentIdList=@EnvironmentIdList)`).odataRelativeURI();
                assert.equal(tree.resourcePath().functionImportCall().IDENTIFIER().text, 'MyDummyFunction');
                assert.equal(tree.resourcePath().functionImportCall().functionParameters().LPAREN().text, '(');
                assert.equal(tree.resourcePath().functionImportCall().functionParameters().functionParameter()[0].functionParameterName().text, 'EnvironmentIdList');
                assert.equal(tree.resourcePath().functionImportCall().functionParameters().functionParameter()[0].parameterAlias().text, '@EnvironmentIdList');
                assert.equal(tree.resourcePath().functionImportCall().functionParameters().RPAREN().text, ')');
            });

            it('Should correctly parse an unbound function with 2 alias argument', function () {
                const tree: OdataRelativeURIContext = getODataLiteParser(`MyDummyFunction(EnvironmentIdList=@EnvironmentIdList,AnotherOne=@AnotherOne)`).odataRelativeURI();
                assert.equal(tree.resourcePath().functionImportCall().IDENTIFIER().text, 'MyDummyFunction');
                assert.equal(tree.resourcePath().functionImportCall().functionParameters().LPAREN().text, '(');
                assert.equal(tree.resourcePath().functionImportCall().functionParameters().functionParameter()[0].functionParameterName().text, 'EnvironmentIdList');
                assert.equal(tree.resourcePath().functionImportCall().functionParameters().functionParameter()[0].parameterAlias().text, '@EnvironmentIdList');
                assert.equal(tree.resourcePath().functionImportCall().functionParameters().functionParameter()[1].functionParameterName().text, 'AnotherOne');
                assert.equal(tree.resourcePath().functionImportCall().functionParameters().functionParameter()[1].parameterAlias().text, '@AnotherOne');
                assert.equal(tree.resourcePath().functionImportCall().functionParameters().RPAREN().text, ')');
            });

        })

        describe('Test skip system query', function () {
            it('should parse $skip query options', function () {
                const tree: OdataRelativeURIContext = getODataLiteParser('SomeResource?$count=true&$skip=50&$top=50').odataRelativeURI();
                assert.equal(tree.resourcePath().IDENTIFIER().text, 'SomeResource');
                const skip = tree.queryOptions().queryOption()[1].systemQueryOption().skip();
                assert.equal(skip.LIT_INTEGER().text, '50');
                assert.equal(skip.SKIP_COUNT(), '$skip');

                const count = tree.queryOptions().queryOption()[0].systemQueryOption().count();
                assert.equal(count.LIT_BOOLEAN().text, 'true');
                assert.equal(count.COUNT(), '$count');

                const top = tree.queryOptions().queryOption()[2].systemQueryOption().top();
                assert.equal(top.LIT_INTEGER().text, '50');
                assert.equal(top.TOP().text, '$top');

            })
        });

        describe('Test orderby system query', function () {
            it('should parse a simple $orderby query option', function () {
                const tree: OdataRelativeURIContext = getODataLiteParser('SomeResource?$orderby=Field').odataRelativeURI();
                assert.equal(tree.resourcePath().IDENTIFIER().text, 'SomeResource');
                const orderby = tree.queryOptions().queryOption()[0].systemQueryOption().orderby();
                assert.equal(orderby.orderbyItem()[0].IDENTIFIER().text, 'Field');
            });

            it('should parse a multi column $orderby query option', function () {
                const url = 'SomeResource?$orderby=Field1,Field2,Field3';
                const tree: OdataRelativeURIContext = getODataLiteParser(url).odataRelativeURI();
                assert.equal(tree.resourcePath().IDENTIFIER().text, 'SomeResource');
                const orderby = tree.queryOptions().queryOption()[0].systemQueryOption().orderby();
                assert.equal(orderby.orderbyItem()[0].IDENTIFIER().text, 'Field1');
                assert.equal(orderby.orderbyItem()[1].IDENTIFIER().text, 'Field2');
                assert.equal(orderby.orderbyItem()[2].IDENTIFIER().text, 'Field3');
            });

            it('should parse a multi column $orderby query option with asc or desc specified', function () {
                const url = 'SomeResource?$orderby=Field1 desc,Field2,Field3 asc';
                const tree: OdataRelativeURIContext = getODataLiteParser(url).odataRelativeURI();
                assert.equal(tree.resourcePath().IDENTIFIER().text, 'SomeResource');
                const orderby = tree.queryOptions().queryOption()[0].systemQueryOption().orderby();
                assert.equal(orderby.orderbyItem()[0].IDENTIFIER().text, 'Field1');
                assert.equal(orderby.orderbyItem()[0].DESC().text, ' desc');
                assert.equal(orderby.orderbyItem()[1].IDENTIFIER().text, 'Field2');
                assert.equal(orderby.orderbyItem()[2].IDENTIFIER().text, 'Field3');
                assert.equal(orderby.orderbyItem()[2].ASC().text, ' asc');
            });
        });

        describe('$apply transformations', function () {
            it('should correctly parse an $apply groupby tranformation', function () {
                const tree: OdataRelativeURIContext = getODataLiteParser('SomeResource?$apply=groupby((SimpleProperty,NavigationPropertyRoot/Property),aggregate(NavigationPropertyRoot/Property with countdistinct as PropertyCount))&$filter=NavigationPropertyRoot/Property eq 1 and SimpleProperty in (1,2) and AssignedTo eq @AssignedTo').odataRelativeURI();
                assert.equal(tree.resourcePath().IDENTIFIER().text, 'SomeResource');
                assert.notEqual(tree.queryOptions().queryOption()[0].systemQueryOption().apply(), null);
                const apply = tree.queryOptions().queryOption()[0].systemQueryOption().apply();
                assert.notEqual(apply, null);
                const groupByTransformation = apply.applyExpression().applyTrafo()[0].groupbyTrafo();
                assert.notEqual(groupByTransformation, null);
                assert.equal(groupByTransformation.groupByList().groupbyElement().length, 2 );
                assert.notEqual(groupByTransformation.applyExpression(), null);
                const aggregateTransformation = groupByTransformation.applyExpression().applyTrafo()[0].aggregateTrafo().aggregationParam()[0];
                assert.notEqual(aggregateTransformation, null);
                const aggregateExpression = aggregateTransformation.aggregationExpr().expression();

                assert.equal(aggregateExpression.constructor, IdExpressionContext);
                assert.equal(aggregateExpression.text, 'NavigationPropertyRoot/Property');
                const aggregateAs = aggregateTransformation.aggregationExpr().aggregateAs();
                assert.equal(aggregateAs.text, ' as PropertyCount');
                const aggregateWith = aggregateTransformation.aggregationExpr().aggregateWith();
                assert.equal(aggregateWith.text, ' with countdistinct');

                const filter = tree.queryOptions().queryOption()[1].systemQueryOption().filter();
                assert.equal(filter.FILTER(), '$filter');
                // Not testing the filter here..
            })
        })
    })
});
