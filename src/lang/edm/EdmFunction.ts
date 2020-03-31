import { ReturnType } from "./ReturnType";
import {Parameter} from "./Parameter";
import {Schema} from "./Schema";

export class EdmFunction {
    public Schema: Schema;
    public Name: string;
    public Parameters: Parameter[];
    public ReturnType: ReturnType;
}
