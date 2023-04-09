import { graphql } from 'gatsby';

export const TypographyFragment = graphql`
    fragment ContentfulFontWeight on ContentfulAsset {
        url
    }

    fragment ContentfulFont on ContentfulFont {
        name
        style
        thin {
            ...ContentfulFontWeight
        }
        extraLight {
            ...ContentfulFontWeight
        }
        light {
            ...ContentfulFontWeight
        }
        regular {
            ...ContentfulFontWeight
        }
        medium {
            ...ContentfulFontWeight
        }
        semiBold {
            ...ContentfulFontWeight
        }
        bold {
            ...ContentfulFontWeight
        }
        extraBold {
            ...ContentfulFontWeight
        }
        black {
            ...ContentfulFontWeight
        }
    }

    fragment ContentfulTypography on ContentfulTypography {
        __typename
        marginTop
        weights
        font {
            ...ContentfulFont
        }
    }
`;

export default TypographyFragment;
