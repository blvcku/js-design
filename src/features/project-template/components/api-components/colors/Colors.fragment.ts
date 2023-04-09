import { graphql } from 'gatsby';

export const ColorsFragment = graphql`
    fragment ContentfulColors on ContentfulColors {
        __typename
        marginTop
        colors
    }
`;

export default ColorsFragment;
