const contentfulSchema = `
    type ContentfulAsset {
        url: String
        title: String 
        description: String
    }

    union ContentfulProjectContent = 
        ContentfulTypography | 
        ContentfulRichText | 
        ContentfulAccordion | 
        ContentfulColors | 
        ContentfulIdea |
        ContentfulImage |
        ContentfulContentWrapper

    type ContentfulProject {
        createdAt: Date!
        title: String!
        slug: String!
        category: String!
        description: String
        keywords: [String!]
        thumb: ContentfulAsset @link(by: "id", from: "thumb___NODE")
        banner: ContentfulAsset @link(by: "id", from: "banner___NODE")
        content: [ContentfulProjectContent!] @link(by: "id", from: "content___NODE")
    }

    union ContentfulAccordionContent = 
        ContentfulTypography | 
        ContentfulRichText | 
        ContentfulColors | 
        ContentfulIdea |
        ContentfulImage |
        ContentfulContentWrapper

    type ContentfulAccordion {
        title: String!
        marginTop: Int
        contentBottomMargin: Int
        content: [ContentfulAccordionContent!] @link(by: "id", from: "content___NODE")
    }

    union ContentfulContentWrapperContent = 
        ContentfulTypography |
        ContentfulRichText |
        ContentfulColors |
        ContentfulIdea |
        ContentfulImage

    type ContentfulContentWrapper {
        contentHorizontalMargin: Int
        contentAlignInline: Boolean
        contentAlignInlineBreakpoint: Int
        contentHorizontalGap: Int
        contentMarginTop: Int
        content: [ContentfulContentWrapperContent!] @link(by: "id", from: "content___NODE")
    }

    enum ContentfulTypographyWeight {
        thin
        extraLight
        light
        regular
        medium
        semiBold
        bold
        extraBold
        black
    }

    type ContentfulTypography {
        marginTop: Int
        weights: [ContentfulTypographyWeight!]
        font: ContentfulFont @link(by: "id", from: "font___NODE")
    }

    type ContentfulFont {
        name: String!
        style: String!
        thin: ContentfulAsset @link(by: "id", from: "thin___NODE")
        extraLight: ContentfulAsset @link(by: "id", from: "extraLight___NODE")
        light: ContentfulAsset @link(by: "id", from: "light___NODE")
        regular: ContentfulAsset @link(by: "id", from: "regular___NODE")
        medium: ContentfulAsset @link(by: "id", from: "medium___NODE")
        semiBold: ContentfulAsset @link(by: "id", from: "semiBold___NODE")
        bold: ContentfulAsset @link(by: "id", from: "bold___NODE")
        extraBold: ContentfulAsset @link(by: "id", from: "extraBold___NODE")
        black: ContentfulAsset @link(by: "id", from: "black___NODE")
    }

    type ContentfulRichText {
        marginTop: Int
        text: ContentfulRichTextContent!
    }

    type ContentfulRichTextContent {
        raw: String!
    }

    type ContentfulColors {
        marginTop: Int
        colors: [String!]
    }

    type ContentfulIdea {
        marginTop: Int
        firstImage: ContentfulAsset @link(by: "id", from: "firstImage___NODE")
        secondImage: ContentfulAsset @link(by: "id", from: "secondImage___NODE")
        equalToImage: ContentfulAsset @link(by: "id", from: "equalToImage___NODE")
    }

    type ContentfulImage {
        marginTop: Int
        roundedCorners: Boolean
        image: ContentfulAsset @link(by: "id", from: "image___NODE")
    }
`;

export default contentfulSchema;
