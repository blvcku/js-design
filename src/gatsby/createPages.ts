import { GatsbyNode } from 'gatsby';
import path from 'path';

const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
    const { data } = await graphql<Queries.AllProjectsQuery>(`
        query AllProjects {
            allContentfulProject {
                projectsList: nodes {
                    slug
                }
            }
        }
    `);
    data?.allContentfulProject.projectsList.forEach(({ slug }) => {
        if (!slug) return;
        actions.createPage({
            path: `/projects/${slug}`,
            component: path.resolve(`./src/templates/Project.tsx`),
            context: { slug },
        });
    });
};

export default createPages;
