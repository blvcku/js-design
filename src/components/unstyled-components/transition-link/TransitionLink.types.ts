import { GatsbyLinkProps } from 'gatsby';

export interface TransitionLinkProps extends Omit<GatsbyLinkProps<{}>, 'ref'> {
    children: React.ReactNode;
}
