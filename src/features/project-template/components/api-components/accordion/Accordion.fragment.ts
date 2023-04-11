import { graphql } from 'gatsby';

export const AccordionFragment = graphql`
    fragment ContentfulAccordion on ContentfulAccordion {
        __typename
        title
        marginTop
        contentBottomMargin
        content {
            ...ContentfulContentWrapper
            ...ContentfulImage
            ...ContentfulIdea
            ...ContentfulColors
            ...ContentfulTypography
            ...ContentfulRichText
        }
    }
`;

export default AccordionFragment;
