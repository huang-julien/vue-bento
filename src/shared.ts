export const enum VServerComponentType {
    Element,
    Component,
    Text,
    Fragment
}

export interface VServerComponentElement {
    type: VServerComponentType.Element;
    tag: string;
    props?: Record<string, any>;
    children?: VServerComponent[] | VServerComponent ;
}

export interface VServerComponentFragment {
    type: VServerComponentType.Fragment;
    children?: VServerComponent[] | VServerComponent ;
}

export interface VServerComponentComponent {
    type: VServerComponentType.Component;
    props?: Record<string, any>;
    children?: VServerComponent[] | VServerComponent ;
    slot?: VServerComponent[];
}

export interface VServerComponentText {
    type: VServerComponentType.Text;
    text: string;
}

export type VServerComponent = VServerComponentElement | VServerComponentComponent | VServerComponentText | VServerComponentFragment    ;