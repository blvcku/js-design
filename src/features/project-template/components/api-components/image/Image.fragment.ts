import { graphql } from 'gatsby';

export const ImageFragment = graphql`
    fragment ContentfulImage on ContentfulImage {
        __typename
        marginTop
        roundedCorners
        image {
            gatsbyImageData
            url
            title
            description
        }
    }
`;

export default ImageFragment;
