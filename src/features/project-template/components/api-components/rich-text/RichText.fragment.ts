import { graphql } from 'gatsby';

export const RichTextFragment = graphql`
    fragment ContentfulRichText on ContentfulRichText {
        __typename
        marginTop
        text {
            raw
        }
    }
`;

export default RichTextFragment;
