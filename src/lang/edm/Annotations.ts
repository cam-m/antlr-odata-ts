import {Annotation} from "./Annotation.js";

export class Annotations {
    Target!: string;
    AnnotationList?: Annotation[];
    AnnotationsByTerm?: Map<string, Annotation>;
}
