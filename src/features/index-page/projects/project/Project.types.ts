import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface ProjectProps {
    slug: string | null;
    title: string | null;
    thumb: {
        gatsbyImageData: IGatsbyImageData | null;
    } | null;
}
