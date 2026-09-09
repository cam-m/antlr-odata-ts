import {EntitySet} from "./EntitySet.js";

export class EntityContainer {
    public Name!: string;
    public EntitySetImports?: EntitySet[];
    public FunctionImports?: Function[];
}
