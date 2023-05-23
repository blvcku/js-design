import { GatsbyLinkProps } from 'gatsby';

export type NavigationLinksContainerProps =
    React.HTMLAttributes<HTMLUListElement>;

export interface NavigationLink {
    name: string;
    to: string;
}

export type NavigationLinks = NavigationLink[];

export interface NavigationLinksProps extends NavigationLinksContainerProps {
    links: NavigationLinks;
    linkProps?: Omit<GatsbyLinkProps<{}>, 'ref' | 'to'>;
}
