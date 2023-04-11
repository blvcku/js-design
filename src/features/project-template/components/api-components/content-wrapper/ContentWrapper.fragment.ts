import { graphql } from 'gatsby';

export const ContentWrapperFragment = graphql`
    fragment ContentfulContentWrapper on ContentfulContentWrapper {
        __typename
        contentHorizontalMargin
        contentAlignInline
        contentAlignInlineBreakpoint
        contentHorizontalGap
        content {
            ...ContentfulImage
            ...ContentfulIdea
            ...ContentfulColors
            ...ContentfulTypography
            ...ContentfulRichText
        }
    }
`;

export default ContentWrapperFragment;
