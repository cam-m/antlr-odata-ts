import {Type} from "./Type.js";

export class Property {
    public Name!: string;
    public Type!: Type;
    public Nullable = true;
}
