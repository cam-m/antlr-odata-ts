import { describe } from 'mocha'
import {
    BinaryExpressionContext,
    ExpressionContext,
    FilterContext,
    LogicalExpressionContext,
    OData4LiteLexer
} from "../src";
import { OData4LiteParser } from "../src";
import {CharStreams, CodePointCharStream, CommonTokenStream, ParserRuleContext} from "antlr4ts";
import { ParseTree } from "antlr4ts/tree";
import * as assert from "assert";

describe('OData Parser and Lexer Tests', function() {
    describe('Functional Test', function() {
        it('Should support creating a lexer from a string, parsing the tokens from the lexer into a tree, and walking the tree.', function() {
            const codePointCharStream: CodePointCharStream = CharStreams.fromString(
                `Incident?$select=Name,CreatedDate&$expand=Issue&$filter=Name eq 'John'`
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
                        assert.equal(t.type, OData4LiteLexer.AND);
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
                        assert.equal(t.type, OData4LiteLexer.AND);
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
    })
});
