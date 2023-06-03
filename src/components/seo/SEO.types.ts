export enum PageType {
    WEBSITE = `website`,
    ARTICLE = `article`,
}

export interface SEOProps extends React.PropsWithChildren {
    title?: Nullable<string>;
    description?: Nullable<string>;
    keywords?: Nullable<ReadonlyArray<Nullable<string>>>;
    img?: Nullable<string>;
    pathname?: Nullable<string>;
    type?: PageType;
}
