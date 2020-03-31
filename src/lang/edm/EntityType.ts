import {Key} from "./Key";
import {Property} from "./Property";
import {NavigationProperty} from "./NavigationProperty";
import {Schema} from "./Schema";

export class EntityType {
    public Schema: Schema;
    public Name: string;
    public Key: Key;
    public Properties: Property[];
    public NavigationProperties: NavigationProperty[];
}
