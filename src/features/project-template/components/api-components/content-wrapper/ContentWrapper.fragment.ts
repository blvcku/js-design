import { graphql } from 'gatsby';

export const ContentWrapperFragment = graphql`
    fragment ContentfulContentWrapper on ContentfulContentWrapper {
        __typename
        contentHorizontalMargin
        contentAlignInline
        contentAlignInlineBreakpoint
        contentHorizontalGap
        contentMarginTop
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
