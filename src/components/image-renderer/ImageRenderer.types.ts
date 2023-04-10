import { IGatsbyImageData, GatsbyImageProps } from 'gatsby-plugin-image';

export interface ImageRendererPropsWithAlt
    extends Omit<GatsbyImageProps, `image` | `alt`> {
    image: {
        gatsbyImageData: Nullable<IGatsbyImageData>;
        url: Nullable<string>;
    };
    alt: string;
}

export interface ImageRendererPropsWithoutAlt
    extends Omit<GatsbyImageProps, `image` | `alt`> {
    image: {
        gatsbyImageData: Nullable<IGatsbyImageData>;
        url: Nullable<string>;
        title: Nullable<string>;
        description: Nullable<string>;
    };
}

export type ImageRendererProps =
    | ImageRendererPropsWithAlt
    | ImageRendererPropsWithoutAlt;
