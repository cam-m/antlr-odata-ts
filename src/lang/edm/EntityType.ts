import {Key} from "./Key.js";
import {Property} from "./Property.js";
import {NavigationProperty} from "./NavigationProperty.js";
import {Schema} from "./Schema.js";

export class EntityType {
    public Schema!: Schema;
    public Name!: string;
    public Key?: Key;
    public Properties?: Property[];
    public NavigationProperties?: NavigationProperty[];
}
