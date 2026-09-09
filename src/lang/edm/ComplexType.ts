import {Property} from "./Property.js";
import {Schema} from "./Schema.js";

export class ComplexType {
    public Name!: string;
    public Properties?: Property[];
    public Schema!: Schema;
}
