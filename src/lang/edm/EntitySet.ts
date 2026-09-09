import {NavigationPropertyBinding} from "./NavigationPropertyBinding.js";
import {Schema} from "./Schema.js";

export class EntitySet {
    public EntityType!: string;
    public Name!: string;

    public NavigationPropertyBindings: NavigationPropertyBinding[] = [];
    Schema!: Schema;

    constructor() {
    }
}
