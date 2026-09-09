import {ReferentialConstraint} from './ReferentialConstraint.js';
import {Type} from "./Type.js";
import {OnDelete} from "./OnDelete.js";

export class NavigationProperty {
    public Name!: string;
    public Type!: Type;
    public Nullable = true;
    public ContainsTarget = false;
    public Partner?: string;
    public ReferentialConstraints?: ReferentialConstraint[];
    public OnDelete?: OnDelete;
}
