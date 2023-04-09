export enum PageType {
    WEBSITE = `website`,
    ARTICLE = `article`,
}

export interface SEOProps {
    title?: Nullable<string>;
    description?: Nullable<string>;
    keywords?: Nullable<ReadonlyArray<Nullable<string>>>;
    img?: Nullable<string>;
    pathname?: Nullable<string>;
    type?: PageType;
    children?: React.ReactNode;
}
