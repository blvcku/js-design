import { graphql } from 'gatsby';

export const IdeaFragment = graphql`
    fragment ContentfulIdea on ContentfulIdea {
        __typename
        marginTop
        firstImage {
            gatsbyImageData(placeholder: NONE)
            url
            title
            description
        }
        secondImage {
            gatsbyImageData(placeholder: NONE)
            url
            title
            description
        }
        equalToImage {
            gatsbyImageData(placeholder: NONE)
            url
            title
            description
        }
    }
`;

export default IdeaFragment;
