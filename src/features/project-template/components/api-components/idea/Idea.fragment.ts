import { graphql } from 'gatsby';

export const IdeaFragment = graphql`
    fragment ContentfulIdea on ContentfulIdea {
        __typename
        marginTop
        firstImage {
            gatsbyImageData
            url
            title
            description
        }
        secondImage {
            gatsbyImageData
            url
            title
            description
        }
        equalToImage {
            gatsbyImageData
            url
            title
            description
        }
    }
`;

export default IdeaFragment;
