import * as xpath from "xpath";
import {XPathSelect} from "xpath";
import {EntitySet} from "./EntitySet";
import {EntityContainer} from "./EntityContainer";
import {Schema} from "./Schema";
import {NavigationPropertyBinding} from "./NavigationPropertyBinding";
import {EntityType} from "./EntityType";
import {ComplexType} from "./ComplexType";
import {EdmFunction} from "./EdmFunction";
import {Property} from "./Property";
import {Parameter} from "./Parameter";
import {ReturnType} from "./ReturnType";
import {NavigationProperty} from "./NavigationProperty";
import {ReferentialConstraint} from "./ReferentialConstraint";
import {Type} from "./Type";
import canonicalize = Mocha.utils.canonicalize;
import {Annotations} from "./Annotations";
import {Annotation} from "./Annotation";

export class MetadataSymbols {
    private _schemas: Schema[];
    public schemaLookupMap: Map<string, Schema> = new Map<string, Schema>();

    private select: XPathSelect = xpath.useNamespaces({
        'edmx': 'http://docs.oasis-open.org/odata/ns/edmx',
        'edm': 'http://docs.oasis-open.org/odata/ns/edm'
    });

    /**
     * tracks the current schema during parsing.
     *
     * Should add checks to prevent use once parse is complete.
     */
    private currentSchema: Schema;

    constructor(private metadataXmlDom) {
        this._schemas = this.parseSchemas(metadataXmlDom);
    }
    
    public get defaultSchema(): Schema {
        return this._schemas[0];
    };
    
    get schemas(): Schema[] {
        return [...this._schemas];
    }

    public schemaByName(name: string): Schema | null {
        return this.schemaLookupMap.get(name);
    }

    private parseSchemas(metadataXmlDom: any): Schema[] {
        var nodes = this.select('//edmx:Edmx/edmx:DataServices/edm:Schema', metadataXmlDom);

        return nodes.map((schemaElement: Element) => {
            const schema: Schema = new Schema();
            this.currentSchema = schema;
            schema.Namespace = <string>xpath.select('string(@Namespace)', schemaElement, true);
            schema.EntityContainers = this.parseEntityContainers(schemaElement);
            schema.ComplexTypes = this.parseComplexTypes(schemaElement);
            schema.Functions = this.parseFunctions(schemaElement);
            schema.EntityTypes = this.parseEntityTypes(schemaElement);
            schema.Annotations = this.parseAnnotations(schemaElement);
            // index it
            this.schemaLookupMap.set(schema.Namespace, schema);

            return schema
        });
    }

    private parseEntityContainers(schema: Node): EntityContainer[] {
        const entityContainers = this.select('//edm:EntityContainer', schema);
        return entityContainers.map((entityContainerElement: Element) => {
            const entityContainer = new EntityContainer();
            entityContainer.Name = <string>xpath.select('string(@Name)', entityContainerElement, true);
            entityContainer.EntitySetImports = this.parseEntitySets(entityContainerElement);
            return entityContainer;
        })
    }

    private parseEntitySets(entityContainer: Element) {
        const entitySetElements = this.select('./edm:EntitySet', entityContainer);
        return entitySetElements.map((entitySetNode: Element) => {
            const es: EntitySet = new EntitySet();
            es.Schema = this.currentSchema;
            es.Name = entitySetNode.getAttributeNode('Name').nodeValue;
            es.EntityType = entitySetNode.getAttributeNode('EntityType').nodeValue;
            es.NavigationPropertyBindings = this.parseNavigationPropertyBindings(entitySetNode);
            this.currentSchema.addEntitySetToIndex(es);

            return es;
        });
    }

    private parseComplexTypes(schemaElement: Node) {
        const complexTypeElements = this.select('./edm:ComplexType', schemaElement);
        return complexTypeElements.map((complexTypeElement: Element) => {
            const complexType: ComplexType = new ComplexType();
            complexType.Schema = this.currentSchema;
            complexType.Name = complexTypeElement.getAttributeNode('Name').nodeValue;
            complexType.Properties = this.parseProperties(complexTypeElement);
            this.currentSchema.addComplexTypesToIndex(complexType);
            return complexType;
        });
    }

    private parseFunctions(schemaElement: Node) {
        const functions = this.select('./edm:Function', schemaElement);
        return functions.map((functionElement: Element) => {
            const edmFunction: EdmFunction = new EdmFunction();
            edmFunction.Schema = this.currentSchema;
            edmFunction.Name = functionElement.getAttributeNode('Name').nodeValue;
            edmFunction.ReturnType = MetadataSymbols.parseReturnType(functionElement);
            edmFunction.Parameters = this.parseParameters(functionElement);
            this.currentSchema.addFunctionToIndex(edmFunction);
            return edmFunction;
        });
    }

    private parseEntityTypes(schemaElement: Element) {
        const entityTypeElements = this.select('./edm:EntityType', schemaElement);
        return entityTypeElements.map((entityTypeElement: Element) => {
            const entityType = new EntityType();
            entityType.Schema = this.currentSchema;
            entityType.Name = <string>xpath.select('string(@Name)', entityTypeElement, true);
            entityType.Properties = this.parseProperties(entityTypeElement);
            entityType.NavigationProperties = this.parseNavigationProperties(entityTypeElement);
            this.currentSchema.addEntityTypeToIndex(entityType);
            return entityType;
        });
    }

    private parseAnnotations(schemaElement: Element): Annotations[] {
        const annotationsElements = this.select('./edm:Annotations', schemaElement);
        return annotationsElements.map((annotationElement: Element) => {
            const annotations: Annotations = new Annotations();
            annotations.Target = <string>xpath.select('string(@Target)', annotationElement, true);
            annotations.AnnotationList = this.parseAnnotationList(annotationElement);
            annotations.AnnotationsByTerm = annotations.AnnotationList.reduce((agg, next) => {
                agg.set(next.Term, next);
                return agg;
            }, new Map<string, Annotation>());
            this.currentSchema.addAnnotationsToIndex(annotations);
            return annotations;
        })
    }

    private parseAnnotationList(annotationsElement: Element) {
        const annotationElements = this.select('./edm:Annotation', annotationsElement);
        const annotations: Annotation[] = annotationElements.map((annotationElement: Element) => {
            const annotation = new Annotation();
            annotation.String = annotationElement?.getAttributeNode('String')?.nodeValue;
            annotation.Term = annotationElement?.getAttributeNode('Term')?.nodeValue;
            return annotation;
        });
        return annotations;
    }

    private parseNavigationPropertyBindings(entitySetNode: Element) {
        const navigationPropertyBindingElements = this.select('./edm:NavigationPropertyBinding', entitySetNode);
        return navigationPropertyBindingElements.map((navPropertyNode: Element) => {
            const navPropBinding = new NavigationPropertyBinding();
            navPropBinding.Path = navPropertyNode?.getAttributeNode('Path')?.nodeValue;
            navPropBinding.Target = navPropertyNode?.getAttributeNode('Target')?.nodeValue;
            return navPropBinding;
        });
    }

    private parseProperties(parentElement: Element) {
        const propertyElements = this.select('./edm:Property', parentElement);
        return propertyElements.map((propertyElement: Element) => {
            const property: Property = new Property();
            property.Name = propertyElement.getAttributeNode('Name').nodeValue;
            property.Type = new Type(propertyElement.getAttributeNode('Type').nodeValue);
            property.Nullable = propertyElement.hasAttribute('Nullable') ? Boolean(propertyElement.getAttributeNode('Nullable').nodeValue) : true;
            return property;
        });
    }

    private parseParameters(functionElement: Element) {
        const parameterElements = this.select('./edm:Parameter', functionElement);
        return parameterElements.map((parameterElement: Element) => {
            const parameter: Parameter = new Parameter();
            parameter.Name = parameterElement.getAttributeNode('Name').nodeValue;
            parameter.Type = new Type(parameterElement.getAttributeNode('Type').nodeValue);
            return parameter;
        });
    }

    private static parseReturnType(functionElement: Element) {
        const returnTypeElementsCollection: HTMLCollectionOf<Element> = functionElement.getElementsByTagName('ReturnType');
        if (returnTypeElementsCollection && returnTypeElementsCollection.length === 1) {
            const returnType: ReturnType = new ReturnType();
            returnType.Type = new Type(returnTypeElementsCollection.item(0).getAttributeNode('Type')?.nodeValue);
            return returnType;
        }
        return undefined;
    }

    private parseNavigationProperties(parentElement: Element) {
        const navigationPropertyElements = this.select('./edm:NavigationProperty', parentElement);
        return navigationPropertyElements.map((navigationPropertyElement: Element) => {
            const navigationProperty: NavigationProperty = new NavigationProperty();
            navigationProperty.Name = navigationPropertyElement.getAttributeNode('Name').nodeValue;
            navigationProperty.Type = new Type(navigationPropertyElement.getAttributeNode('Type').nodeValue);
            navigationProperty.ReferentialConstraints = this.parseReferentialConstraints(navigationPropertyElement);
            return navigationProperty;
        });
    }

    private parseReferentialConstraints(navigationPropertyElement: Element) {
        const referentialConstraintElements = this.select('./edm:ReferentialConstraint', navigationPropertyElement);
        return referentialConstraintElements.map((referentialConstraintElement: Element) => {
            const referentialConstraint: ReferentialConstraint = new ReferentialConstraint();
            referentialConstraint.Property = referentialConstraintElement.getAttributeNode('Property')?.nodeValue;
            referentialConstraint.ReferencedProperty = referentialConstraintElement.getAttributeNode('ReferencedProperty')?.nodeValue;
            return referentialConstraint;
        });
    }
    
    private resolveSchema(schemaName?: string): Schema {
        let schema: Schema;
        if (schemaName) {
            schema = this.schemaLookupMap.get(schemaName);
        } else {
            schema = this.defaultSchema;
        }
        if(!schema) {
            throw new Error('No Schemas loaded')
        }
        return schema;
    }
}
