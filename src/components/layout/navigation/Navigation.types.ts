export interface NavigationLink {
    name: string;
    to: string;
}

export type NavigationLinks = Array<NavigationLink>;

export interface NavigationExpandableContentProps {
    expanded: boolean;
}
