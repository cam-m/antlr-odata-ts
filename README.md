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
const parser: OData4LiteParser = new OData4LiteParser(tokens);
const tree: ParseTree = parser.odataRelativeURI();

// Now we have a parse tree we can do stuff like this...

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
  
