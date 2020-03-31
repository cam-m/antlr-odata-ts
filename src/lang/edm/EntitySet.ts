import {NavigationPropertyBinding} from "./NavigationPropertyBinding";
import {Schema} from "./Schema";

export class EntitySet {
    public EntityType: string;
    public Name: string;

    public NavigationPropertyBindings: NavigationPropertyBinding[] = [];
    Schema: Schema;

    constructor() {
    }
}
