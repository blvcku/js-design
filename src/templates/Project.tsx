import { graphql } from 'gatsby';
export { default, Head } from '@/features/project-template';

export const query = graphql`
    query Project($slug: String) {
        contentfulProject(slug: { eq: $slug }) {
            title
            slug
            description
            keywords
            thumb {
                gatsbyImageData
            }
            banner {
                gatsbyImageData
            }
            content {
                ...ContentfulColors
                ...ContentfulTypography
                ...ContentfulRichText
                ...ContentfulAccordion
            }
        }
    }
`;
