import { graphql } from 'gatsby';

export const AccordionFragment = graphql`
    fragment ContentfulAccordion on ContentfulAccordion {
        __typename
        title
        marginTop
        contentBottomMargin
        contentHorizontalMargin
        body {
            ...ContentfulColors
            ...ContentfulTypography
            ...ContentfulRichText
        }
    }
`;

export default AccordionFragment;
