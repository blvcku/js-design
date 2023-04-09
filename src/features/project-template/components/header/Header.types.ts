export interface HeaderProps {
    banner: Exclude<Queries.ProjectQuery['contentfulProject'], null>['banner'];
    title: Exclude<Queries.ProjectQuery['contentfulProject'], null>['title'];
}
