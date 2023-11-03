import {Annotation} from "./Annotation";

export class Annotations {
    Target: string;
    AnnotationList: Annotation[];
    AnnotationsByTerm: Map<string, Annotation>;
}