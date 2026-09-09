import xpath, {type SelectReturnType, type XPathSelect} from "xpath";
import {EntitySet} from "./EntitySet.js";
import {EntityContainer} from "./EntityContainer.js";
import {Schema} from "./Schema.js";
import {NavigationPropertyBinding} from "./NavigationPropertyBinding.js";
import {EntityType} from "./EntityType.js";
import {ComplexType} from "./ComplexType.js";
import {EdmFunction} from "./EdmFunction.js";
import {Property} from "./Property.js";
import {Parameter} from "./Parameter.js";
import {ReturnType} from "./ReturnType.js";
import {NavigationProperty} from "./NavigationProperty.js";
import {ReferentialConstraint} from "./ReferentialConstraint.js";
import {Type} from "./Type.js";
import {Annotations} from "./Annotations.js";
import {Annotation} from "./Annotation.js";

export class MetadataSymbols {
    private _schemas: Schema[];
    public schemaLookupMap: Map<string, Schema> = new Map<string, Schema>();

    private select: XPathSelect = xpath.useNamespaces({
        'edmx': 'http://docs.oasis-open.org/odata/ns/edmx',
        'edm': 'http://docs.oasis-open.org/odata/ns/edm'
    });

    private toNodeArray(result: SelectReturnType): Element[] {
        if (Array.isArray(result)) return result.filter(xpath.isElement);
        return xpath.isElement(result) ? [result] : [];
    }

    private requiredAttribute(element: Element, attributeName: string): string {
        const value = element.getAttributeNode(attributeName)?.nodeValue;
        if (value === null || value === undefined) {
            throw new Error(`Missing required '${attributeName}' attribute`);
        }
        return value;
    }

    /**
     * tracks the current schema during parsing.
     *
     * Should add checks to prevent use once parse is complete.
     */
    private currentSchema?: Schema;

    constructor(private metadataXmlDom: Document) {
        this._schemas = this.parseSchemas(metadataXmlDom);
    }
    
    public get defaultSchema(): Schema {
        return this._schemas[0];
    };
    
    get schemas(): Schema[] {
        return [...this._schemas];
    }

    public schemaByName(name: string): Schema | undefined {
        return this.schemaLookupMap.get(name);
    }

    private parseSchemas(metadataXmlDom: any): Schema[] {
        const nodes = this.toNodeArray(this.select('//edmx:Edmx/edmx:DataServices/edm:Schema', metadataXmlDom));
        return nodes.map((schemaElement: Element) => {
            const schema: Schema = new Schema();
            this.currentSchema = schema;
            schema.Namespace = this.requiredAttribute(schemaElement, 'Namespace');
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
        const entityContainers = this.toNodeArray(this.select('//edm:EntityContainer', schema));
        return entityContainers.map((entityContainerElement: Element) => {
            const entityContainer = new EntityContainer();
            entityContainer.Name = this.requiredAttribute(entityContainerElement, 'Name');
            entityContainer.EntitySetImports = this.parseEntitySets(entityContainerElement);
            return entityContainer;
        })
    }

    private parseEntitySets(entityContainer: Element) {
        const entitySetElements = this.toNodeArray(this.select('./edm:EntitySet', entityContainer));
        return entitySetElements.map((entitySetNode: Element) => {
            const es: EntitySet = new EntitySet();
            es.Schema = this.currentSchema!;
            es.Name = this.requiredAttribute(entitySetNode, 'Name');
            es.EntityType = this.requiredAttribute(entitySetNode, 'EntityType');
            es.NavigationPropertyBindings = this.parseNavigationPropertyBindings(entitySetNode);
            this.currentSchema!.addEntitySetToIndex(es);

            return es;
        });
    }

    private parseComplexTypes(schemaElement: Node) {
        const complexTypeElements = this.toNodeArray(this.select('./edm:ComplexType', schemaElement));
        return complexTypeElements.map((complexTypeElement: Element) => {
            const complexType: ComplexType = new ComplexType();
            complexType.Schema = this.currentSchema!;
            complexType.Name = this.requiredAttribute(complexTypeElement, 'Name');
            complexType.Properties = this.parseProperties(complexTypeElement);
            this.currentSchema!.addComplexTypesToIndex(complexType);
            return complexType;
        });
    }

    private parseFunctions(schemaElement: Node) {
        const functions = this.toNodeArray(this.select('./edm:Function', schemaElement));
        return functions.map((functionElement: Element) => {
            const edmFunction: EdmFunction = new EdmFunction();
            edmFunction.Schema = this.currentSchema!;
            edmFunction.Name = this.requiredAttribute(functionElement, 'Name');
            edmFunction.ReturnType = this.parseReturnType(functionElement);
            edmFunction.Parameters = this.parseParameters(functionElement);
            this.currentSchema!.addFunctionToIndex(edmFunction);
            return edmFunction;
        });
    }

    private parseEntityTypes(schemaElement: Element) {
        const entityTypeElements = this.toNodeArray(this.select('./edm:EntityType', schemaElement));
        return entityTypeElements.map((entityTypeElement: Element) => {
            const entityType = new EntityType();
            entityType.Schema = this.currentSchema!;
            entityType.Name = this.requiredAttribute(entityTypeElement, 'Name');
            entityType.Properties = this.parseProperties(entityTypeElement);
            entityType.NavigationProperties = this.parseNavigationProperties(entityTypeElement);
            this.currentSchema!.addEntityTypeToIndex(entityType);
            return entityType;
        });
    }

    private parseAnnotations(schemaElement: Element): Annotations[] {
        const annotationsElements = this.toNodeArray(this.select('./edm:Annotations', schemaElement));
        return annotationsElements.map((annotationElement: Element) => {
            const annotations: Annotations = new Annotations();
            annotations.Target = this.requiredAttribute(annotationElement, 'Target');
            annotations.AnnotationList = this.parseAnnotationList(annotationElement);
            annotations.AnnotationsByTerm = annotations.AnnotationList.reduce((agg, next) => {
                agg.set(next.Term, next);
                return agg;
            }, new Map<string, Annotation>());
            this.currentSchema!.addAnnotationsToIndex(annotations);
            return annotations;
        })
    }

    private parseAnnotationList(annotationsElement: Element) {
        const annotationElements = this.toNodeArray(this.select('./edm:Annotation', annotationsElement));
        const annotations: Annotation[] = annotationElements.map((annotationElement: Element) => {
            const annotation = new Annotation();
            annotation.String = annotationElement.getAttributeNode('String')?.nodeValue ?? undefined;
            annotation.Term = this.requiredAttribute(annotationElement, 'Term');
            return annotation;
        });
        return annotations;
    }

    private parseNavigationPropertyBindings(entitySetNode: Element) {
        const navigationPropertyBindingElements = this.toNodeArray(this.select('./edm:NavigationPropertyBinding', entitySetNode));
        return navigationPropertyBindingElements.map((navPropertyNode: Element) => {
            const navPropBinding = new NavigationPropertyBinding();
            navPropBinding.Path = this.requiredAttribute(navPropertyNode, 'Path');
            navPropBinding.Target = this.requiredAttribute(navPropertyNode, 'Target');
            return navPropBinding;
        });
    }

    private parseProperties(parentElement: Element) {
        const propertyElements = this.toNodeArray(this.select('./edm:Property', parentElement));
        return propertyElements.map((propertyElement: Element) => {
            const property: Property = new Property();
            property.Name = this.requiredAttribute(propertyElement, 'Name');
            property.Type = new Type(this.requiredAttribute(propertyElement, 'Type'));
            const nullable = propertyElement.getAttributeNode('Nullable')?.nodeValue;
            if (nullable !== null && nullable !== undefined) {
                property.Nullable = nullable === 'true' || nullable === '1';
            }
            return property;
        });
    }

    private parseParameters(functionElement: Element) {
        const parameterElements = this.toNodeArray(this.select('./edm:Parameter', functionElement));
        return parameterElements.map((parameterElement: Element) => {
            const parameter: Parameter = new Parameter();
            parameter.Name = this.requiredAttribute(parameterElement, 'Name');
            parameter.Type = new Type(this.requiredAttribute(parameterElement, 'Type'));
            return parameter;
        });
    }

    private parseReturnType(functionElement: Element): ReturnType {
        const returnTypeElementsCollection: HTMLCollectionOf<Element> = functionElement.getElementsByTagName('ReturnType');
        const returnTypeElement = returnTypeElementsCollection.item(0);
        if (returnTypeElementsCollection.length !== 1 || returnTypeElement === null) {
            throw new Error('Function requires exactly one ReturnType element');
        }
        const returnType = new ReturnType();
        returnType.Type = new Type(this.requiredAttribute(returnTypeElement, 'Type'));
        return returnType;
    }

    private parseNavigationProperties(parentElement: Element) {
        const navigationPropertyElements = this.toNodeArray(this.select('./edm:NavigationProperty', parentElement));
        return navigationPropertyElements.map((navigationPropertyElement: Element) => {
            const navigationProperty: NavigationProperty = new NavigationProperty();
            navigationProperty.Name = this.requiredAttribute(navigationPropertyElement, 'Name');
            navigationProperty.Type = new Type(this.requiredAttribute(navigationPropertyElement, 'Type'));
            navigationProperty.ReferentialConstraints = this.parseReferentialConstraints(navigationPropertyElement);
            return navigationProperty;
        });
    }

    private parseReferentialConstraints(navigationPropertyElement: Element) {
        const referentialConstraintElements = this.toNodeArray(this.select('./edm:ReferentialConstraint', navigationPropertyElement));
        return referentialConstraintElements.map((referentialConstraintElement: Element) => {
            const referentialConstraint: ReferentialConstraint = new ReferentialConstraint();
            referentialConstraint.Property = this.requiredAttribute(referentialConstraintElement, 'Property');
            referentialConstraint.ReferencedProperty = this.requiredAttribute(referentialConstraintElement, 'ReferencedProperty');
            return referentialConstraint;
        });
    }
    
    private resolveSchema(schemaName?: string): Schema {
        let schema: Schema | undefined;
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
