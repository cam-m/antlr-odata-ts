import { ReturnType } from "./ReturnType.js";
import {Parameter} from "./Parameter.js";
import {Schema} from "./Schema.js";

export class EdmFunction {
    public Schema!: Schema;
    public Name!: string;
    public Parameters?: Parameter[];
    public ReturnType!: ReturnType;
}
