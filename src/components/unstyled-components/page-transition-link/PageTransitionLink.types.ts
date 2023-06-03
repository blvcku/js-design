import type { GatsbyLinkProps } from 'gatsby';

export interface PageTransitionLinkProps
    extends Omit<GatsbyLinkProps<{}>, 'ref'> {
    children: React.ReactNode;
}
