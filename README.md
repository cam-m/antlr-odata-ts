# antlr-odata [![Build Status](https://travis-ci.com/cam-m/antlr-odata.svg?branch=master)](https://travis-ci.com/cam-m/antlr-odata)
## Lite Grammar
The OData Lite grammar is a work in progress. It only supports the features of OData that I (the author) has 
found personally useful. E.g. 
 - Resource based queries and their respective query options (expand, select, top, filter, count, etc...)

## Full Grammar
The full odata 4.0 Antlr grammar from here:

https://tools.oasis-open.org/version-control/browse/wsvn/odata/trunk/4.01%20spec/grammar/ANTLR/ODataLexer.g4

...has been copied to this project, however it will need refactoring to be of practical use. In its current state
it will not build.

## Releases
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
  
