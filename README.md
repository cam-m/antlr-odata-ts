# antlr-odata [![Build Status](https://travis-ci.com/cam-m/antlr-odata.svg?branch=master)](https://travis-ci.com/cam-m/antlr-odata)
This project provides an antlr generated lexer and parser for OData Queries.

Note this project depends on antlr4ts ^0.5.0-alpha.3 - use in production code at your own risk.

## Dependencies
 - antlr4ts (Alpha).

## Usage (ts)
The main useful classes exported by this library are `ODataLiteLexer` and `ODataLiteParser`. Here's how you can use these...

``` typescript
import { CharStreams, CodePointCharStream, CommonTokenStream } from 'antlr4ts';
import { ParseTree, ParseTreeWalker } from 'antlr4ts/tree';

const odataQuery = 'MyEntity?$select=Property1&$expand=NavProperty1($select=Property2;$expand=NavProperty2)$filter=Property1 eq @MyAlias&@MyAlias=1';

const codePointCharStream: CodePointCharStream = CharStreams.fromString(odataQuery);
const lexer = new OData4LiteLexer(codePointCharStream);
const tokens: CommonTokenStream = new CommonTokenStream(lexer);

// Alternative 1: Context unaware parser - fine if you a) don't have metadata, or do not support unbound functions.
const parser: OData4LiteParser = new OData4LiteParser(tokens);

// Alternative 2 (from version 0.0.12): Context aware parser
// A metadata sybmbol table has been provided with an api for querying EntitySet, EntityType and UnboundFunction symbols.
// The user can select a desired Schema and provide it to the parser, which can then distinguish between urls /EntitySet(1) and /UnBoundFunction(1) by querying the symbol table.

const metaDataSymbol: MetadataSymbols = new MetadataSymbols(xml);
const schema: Schema = metaDataSymbol.defaultSchema;
const parser: OData4LiteParser = OData4LiteParser.buildOData4LiteParser(tokens, schema);

const tree: ParseTree = parser.odataRelativeURI();
// Now we have a parse tree we can use like this...

// Whats a list of all the aliases in the query string?
const walker: ParseTreeWalker = new ParseTreeWalker();
const aliasResolver: ODataAliasResolver = new ODataAliasResolver();

aliasResolver.forEach(alias => console.log(`${alias} `)); 
// output: MyAlias

export class ODataAliasResolver implements OData4LiteListener {
    aliases: string[] = [];

    constructor() {}

    enterParameterAlias: (ctx: ParameterAliasContext) => void = ctx => {
        if (ctx.parent instanceof AliasAndValueContext) {
            return;
        }
        this.aliases.push(ctx.IDENTIFIER().text);
    }
}    
```

## Lite Grammar
The Lite grammar can match the following OData Query features:
 - EntitySet Queries - $expand, $select, $top, $filter, $count, $apply + groupby + aggregate
 - Unbound Functions
 - Aliases
 

## Full Grammar
This library currently doesn't support the full odata 4.0 grammar. An full Antlr OData grammar has been defined here:

https://tools.oasis-open.org/version-control/browse/wsvn/odata/trunk/4.01%20spec/grammar/ANTLR/ODataLexer.g4

...has been copied to this project purely for my reference. In its current state it will not build with antlr4ts.

## Releases
### Version 0.0.12
- fixed precendence of firstMemberExpression Context so IDENTIFIER is matched if its only a simple property

### Version 0.0.11
#### Features:
- support for any/all lambda functions
- initial support for $it, $ref

#### Breaking Changes
  - null token incorrectly defined as 'ull'
  - fixed definition of Alias's and collection literals
  - renamed collectionNavigationExpr to collectionNavigation to enable inclusion of actual collectionNavigationExpr rule (see abnf grammar for differences).
  - replaced simple ID Expression rule with more complete FirstMemberExpr rule which includes collection navigation.

### Version 0.0.10
do not use

### Version 0.0.9
#### New features
 - support collection navigations: Entity(x)

#### Breaking change
 - functionImportCall no longer included IDENTIFIER - instead its available in the parent context 'resourcePath' 
 
### Version 0.0.8
#### New features
- $apply=compute()
#### Breaking change
- renamed aggregateAs rule to dynamicPropertyAssignment

### Version 0.0.7
#### New features
- Add support for $orderby desc and asc
- Added support for $apply filter transformation

### Version 0.0.6
#### New features
- Add support for $orderby
- Fixed IDENTIFIER definition to allow digits

### Version 0.0.5
#### New features
- Add support for $skip

### Version 0.0.4
#### New features
- Fixed FunctionExpression should start with an Identifier 
 
### Version 0.0.3
#### New features
- Added partial support for $apply. Supported operations include: groupby & aggregate
- Added support for 'in' expressions. E.g. PropertyName in (1,2,3)

Breaking Changes:
- replaced expression rule for IDENTIFIER with propertyPath (which effectively includes IDENTIFIER).
- renamed rule navigationProperty to property (non-normative). property replaced several rules including the abnf rule called navigationProperty.
- renamed collectionNavigation to collectionNavigationExpr in line with abnf grammar
  
#### Breaking changes  
  
### Version 0.0.2
- Added support for Unbound Function Import with primitiveLiterals and alias's as parameters
- Removed support (temporary) for collectionNavigation in a resource path due to ambiguity.

### Version 0.0.1
First release.
Supports $filter, $expand, $select 
  
