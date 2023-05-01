import { graphql } from 'gatsby';
// export default
export { default, Head } from '@/features/project-template';

export const query = graphql`
    query Project($slug: String) {
        contentfulProject(slug: { eq: $slug }) {
            title
            slug
            description
            keywords
            banner {
                gatsbyImageData
                url
            }
            content {
                ...ContentfulContentWrapper
                ...ContentfulImage
                ...ContentfulIdea
                ...ContentfulColors
                ...ContentfulTypography
                ...ContentfulRichText
                ...ContentfulAccordion
            }
        }
    }
`;
