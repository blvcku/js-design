import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import {
    ImageRendererProps,
    ImageRendererPropsWithAlt,
} from './ImageRenderer.types';

const hasAlt = (
    params: ImageRendererProps,
): params is ImageRendererPropsWithAlt =>
    (params as ImageRendererPropsWithAlt).alt !== undefined;

const ImageRenderer: React.FC<ImageRendererProps> = (props) => {
    const { image, ...imageProps } = props;
    const { gatsbyImageData, url } = image;

    const altText = hasAlt(props)
        ? props.alt
        : props.image.title || props.image.description || ``;

    if (!gatsbyImageData) {
        if (!url) return null;
        return <img src={url} alt={altText} />;
    }

    const imageData = getImage(gatsbyImageData);

    if (!imageData) return null;

    return <GatsbyImage {...imageProps} image={imageData} alt={altText} />;
};

export default ImageRenderer;
