import {ReferentialConstraint} from './ReferentialConstraint';
import {Type} from "./Type";
import {OnDelete} from "./OnDelete";

export class NavigationProperty {
    public Name!: string;
    public Type!: Type;
    public Nullable = true;
    public ContainsTarget = false;
    public Partner?: string;
    public ReferentialConstraints?: ReferentialConstraint[];
    public OnDelete?: OnDelete;
}
