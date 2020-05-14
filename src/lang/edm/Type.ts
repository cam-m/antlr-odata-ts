import {EntityType} from "./EntityType";
import {ComplexType} from "./ComplexType";

export enum TypeClass {
    /**
     * One of the predefined OData primitive types
     */
    Primitive,
    /**
     * A reference to an EntityType or ComplexType or a Collection of either.
     */
    Reference
}

export class Type {
    private namespaceArr: string[];
    private static collectionPrefix = 'Collection(';
    private static nsSeparator = '.';
    private static edm = 'Edm';
    private static collectionPrefixLen = Type.collectionPrefix.length;
    public fullName: string;
    public name: string;
    public typeClass: TypeClass;
    public primitiveType: PrimitiveType;
    public isCollection;

    get namespace(): string {
        return this.namespaceArr.join(Type.nsSeparator);
    }
    
    /**
     * Only available after reference phase complete
     */
    public referencedType: EntityType | ComplexType;

    constructor(public rawType: string) {
        if (!rawType) {
            throw new Error('Type construction requires a non empty string');
        }
        this.isCollection = rawType.startsWith(Type.collectionPrefix);
        this.fullName = this.isCollection ? rawType.substr(Type.collectionPrefixLen, rawType.length - (Type.collectionPrefixLen + 1)) : rawType;
        const namespacedNameArr: string[] = this.fullName.split(Type.nsSeparator);
        if (namespacedNameArr.length === 1) {
            this.name = namespacedNameArr[0];
        } else {
            this.namespaceArr = namespacedNameArr.splice(0, namespacedNameArr.length - 1);
            this.name = namespacedNameArr[0];
        }
        if (this.namespace === Type.edm) {
            this.primitiveType = PrimitiveType[this.name];
        }
        this.typeClass = this.primitiveType ? TypeClass.Primitive : TypeClass.Reference;
    }
}

export enum AbstractType {
    PrimitiveType = 'Edm.PrimitiveType',
    ComplexType = 'Edm.ComplexType',
    EntityType = 'Edm.EntityType',
    Untyped = 'Edm.Untyped'
}

/**
 * These will actually be namespaced in metatata Edm.<PrimitiveType>
 */
export enum PrimitiveType {
   Binary = 'Binary',
   Boolean = 'Boolean',
   Byte = 'Byte',
   Date = 'Date',
   DateTimeOffset = 'DateTimeOffset',
   Decimal = 'Decimal',
   Double = 'Double',
   Duration = 'Duration',
   Guid = 'Guid',
   Int16 = 'Int16',
   Int32 = 'Int32',
   Int64 = 'Int64',
   SByte = 'SByte',
   Single = 'Single',
   Stream = 'Stream',
   String = 'String',
   TimeOfDay = 'TimeOfDay',
   Geography = 'Geography',
   GeographyPoint = 'GeographyPoint',
   GeographyLineString = 'GeographyLineString',
   GeographyPolygon = 'GeographyPolygon',
   GeographyMultiPoint = 'GeographyMultiPoint',
   GeographyMultiLineString = 'GeographyMultiLineString',
   GeographyMultiPolygon = 'GeographyMultiPolygon',
   GeographyCollection = 'GeographyCollection',
   Geometry = 'Geometry',
   GeometryPoint = 'GeometryPoint',
   GeometryLineString = 'GeometryLineString',
   GeometryPolygon = 'GeometryPolygon',
   GeometryMultiPoint = 'GeometryMultiPoint',
   GeometryMultiLineString = 'GeometryMultiLineString',
   GeometryMultiPolygon = 'GeometryMultiPolygon',
   GeometryCollection = 'GeometryCollection'
}
