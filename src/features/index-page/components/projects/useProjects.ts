import { useState, useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const useProjects = () => {
    const {
        allContentfulProject: { groupedProjects, categories },
    } = useStaticQuery<Queries.ProjectsQuery>(query);

    const [activeCategory, setActiveCategory] = useState(categories[0]);

    const activeCategoryProjectsGroup = useMemo(
        () =>
            groupedProjects.find(({ category }) => category === activeCategory),
        [activeCategory, groupedProjects],
    );

    const projects = activeCategoryProjectsGroup?.projects || [];

    return { categories, activeCategory, setActiveCategory, projects };
};

const query = graphql`
    query Projects {
        allContentfulProject(sort: { createdAt: ASC }) {
            groupedProjects: group(limit: 6, field: { category: SELECT }) {
                category: fieldValue
                projects: nodes {
                    slug
                    title
                    thumb {
                        gatsbyImageData(placeholder: NONE, width: 600)
                        url
                    }
                }
            }
            categories: distinct(field: { category: SELECT })
        }
    }
`;

export default useProjects;
