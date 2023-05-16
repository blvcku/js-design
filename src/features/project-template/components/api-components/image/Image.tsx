import { ImageContainer } from './Image.styles';
import ImageRenderer from '@/components/unstyled-components/image-renderer/ImageRenderer';

const Image: React.FC<Queries.ContentfulImageFragment> = ({
    marginTop,
    roundedCorners,
    image,
}) => {
    return (
        <ImageContainer marginTop={marginTop} roundedCorners={roundedCorners}>
            <ImageRenderer image={image} />
        </ImageContainer>
    );
};

export default Image;
