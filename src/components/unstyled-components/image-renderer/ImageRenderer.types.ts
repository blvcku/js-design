import type { IGatsbyImageData, GatsbyImageProps } from 'gatsby-plugin-image';

export interface ImageRendererImage {
    gatsbyImageData: Nullable<IGatsbyImageData>;
    url: Nullable<string>;
}

export interface ImageRendererPropsWithAlt
    extends Omit<GatsbyImageProps, `image` | `alt`> {
    image: Nullable<ImageRendererImage>;
    alt: string;
}

export interface ImageRendererPropsWithoutAlt
    extends Omit<GatsbyImageProps, `image` | `alt`> {
    image: Nullable<
        ImageRendererImage & {
            title: Nullable<string>;
            description: Nullable<string>;
        }
    >;
}

export type ImageRendererProps =
    | ImageRendererPropsWithAlt
    | ImageRendererPropsWithoutAlt;
