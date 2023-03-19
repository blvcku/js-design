export enum SEOPageTypes {
    website = `website`,
    article = `article`,
}

export interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    img?: string;
    siteURL?: string;
    type?: SEOPageTypes;
    children?: React.ReactNode;
}
