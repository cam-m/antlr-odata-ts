import {EntityContainer} from "./EntityContainer";
import {EntityType} from "./EntityType";
import {ComplexType} from "./ComplexType";
import {EdmFunction} from "./EdmFunction";
import {EntitySet} from "./EntitySet";
import Trie from "trie-prefix-tree";
import {Annotations} from "./Annotations";
import canonicalize = Mocha.utils.canonicalize;

/**
 * Represents a single EDM Schema, and contains helper methods for querying the various
 * elements of a schema.
 */
export class Schema {
    private entityTypesByName: Map<string, EntityType> = new Map<string, EntityType>();
    private entityTypesByNameExact: Map<string, EntityType> = new Map<string, EntityType>();
    private entityTypeTrie = Trie([]);

    private entitySetsByName: Map<string, EntitySet> = new Map<string, EntitySet>();
    private entitySetsByNameExact: Map<string, EntitySet> = new Map<string, EntitySet>();
    private entitySetTrie = Trie([]);

    private complexTypesByName: Map<string, ComplexType> = new Map<string, ComplexType>();
    private complexTypesByNameExact: Map<string, ComplexType> = new Map<string, ComplexType>();
    private complexTypesByPrefixTrie = Trie([]);

    private functionsByName: Map<string, EdmFunction> = new Map<string, EdmFunction>();
    private functionsByNameExact: Map<string, EdmFunction> = new Map<string, EdmFunction>();
    private functionsByPrefixTrie = Trie([]);

    private annotationsByTargetEntityType: Map<string, Annotations> = new Map<string, Annotations>();
    private annotationsByNameExact: Map<string, Annotations> = new Map<string, Annotations>();
    private annotationsByPrefixTrie = Trie([]);

    public Namespace: string;
    public EntityContainers: EntityContainer[] = [];

    public Functions: EdmFunction[] = [];
    public EntityTypes: EntityType[] = [];
    public ComplexTypes: ComplexType[] = [];
    public EntitySets: EntitySet[] = [];
    public Annotations: Annotations[] =[]

    public addEntitySetToIndex(entitySet: EntitySet): void {
        this.entitySetsByName.set(entitySet.Name.toLocaleLowerCase(), entitySet);
        this.entitySetsByNameExact.set(entitySet.Name, entitySet);
        this.entitySetTrie.addWord(entitySet.Name.toLocaleLowerCase());
        this.EntitySets.push(entitySet);
    }

    public addEntityTypeToIndex(entityType: EntityType): void {
        this.entityTypesByName.set(entityType.Name.toLocaleLowerCase(), entityType);
        this.entityTypesByNameExact.set(entityType.Name, entityType);
        this.entityTypeTrie.addWord(entityType.Name.toLocaleLowerCase());
        this.EntityTypes.push(entityType);
    }

    public addFunctionToIndex(edmFunction: EdmFunction): void {
        this.functionsByName.set(edmFunction.Name.toLocaleLowerCase(), edmFunction);
        this.functionsByNameExact.set(edmFunction.Name, edmFunction);
        this.functionsByPrefixTrie.addWord(edmFunction.Name.toLocaleLowerCase());
        this.Functions.push(edmFunction);
    }

    public addComplexTypesToIndex(complexType: ComplexType): void {
        this.complexTypesByName.set(complexType.Name.toLocaleLowerCase(), complexType);
        this.complexTypesByNameExact.set(complexType.Name, complexType);
        this.complexTypesByPrefixTrie.addWord(complexType.Name.toLocaleLowerCase());
        this.ComplexTypes.push(complexType);
    }

    public addAnnotationsToIndex(annotations: Annotations): void {
        this.annotationsByTargetEntityType.set(annotations.Target.toLocaleLowerCase(), annotations);
        this.annotationsByNameExact.set(annotations.Target, annotations);
        this.Annotations.push(annotations);
    }

    /**
     * Gets an EntitySet by Name (ignores case).
     * @param name
     */
    public entitySetByName(name: string): EntitySet {
        return this.entitySetsByName.get(name.toLocaleLowerCase());
    }

    /**
     * Gets EntitySet names (in lowercase) with the requested prefix.
     * @param prefix
     */
    public entitySetsWithPrefix(prefix: string): EntitySet[] {
        return this.entitySetTrie.getPrefix(prefix.toLocaleLowerCase(), true)
            .map(name => this.entitySetsByName.get(name));
    }

    /**
     * Gets an EntityType by Name (ignores case).
     * @param name
     */
    public entityTypeByName(name: string): EntityType {
        return this.entityTypesByName.get(name.toLocaleLowerCase());
    }

    /**
     * Gets EntityType names (in lowercase) with the requested prefix.
     * @param prefix
     */
    public entityTypesWithPrefix(prefix: string): EntityType[] {
        return this.entityTypeTrie.getPrefix(prefix.toLocaleLowerCase(), true)
            .map(name => this.entityTypesByName.get(name));
    }

    /**
     * Gets a Function by Name (ignores case).
     * @param name
     */
    public functionByName(name: string): EdmFunction {
        return this.functionsByName.get(name.toLocaleLowerCase());
    }

    /**
     * Gets a Function by Name (ignores case).
     * @param name
     */
    public functionByNameExact(name: string): EdmFunction {
        return this.functionsByName.get(name.toLocaleLowerCase());
    }

    /**
     * Gets function names (in lowercase) with the requested prefix
     * @param prefix
     */
    public functionsWithPrefix(prefix: string): EdmFunction[] {
        return this.functionsByPrefixTrie.getPrefix(prefix.toLocaleLowerCase(), true)
            .map(name => this.functionsByName.get(name));
    }


    /**
     * Gets a Function by Name (ignores case).
     * @param name
     */
    public complexTypeByName(name: string): ComplexType {
        return this.complexTypesByName.get(name.toLocaleLowerCase());
    }

    /**
     * Gets complexType names (in lowercase) with the requested prefix
     * @param prefix
     */
    public complexTypesWithPrefix(prefix: string): ComplexType[] {
        return this.complexTypesByPrefixTrie.getPrefix(prefix.toLocaleLowerCase(), true)
            .map(name => this.complexTypesByName.get(name));
    }


    /**
     * Gets an Annotation by Name (ignores case).
     * @param name
     */
    public annotationsByName(name: string): Annotations {
        return this.annotationsByTargetEntityType.get(name.toLocaleLowerCase());
    }
}


