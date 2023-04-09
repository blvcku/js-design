export interface ComponentMapProps {
    content: Exclude<
        Queries.ProjectQuery['contentfulProject'],
        null
    >['content'];
}
