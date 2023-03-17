import type { GatsbyNode } from 'gatsby';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
// import path from "path";

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
    actions,
}) => {
    actions.setWebpackConfig({
        resolve: {
            plugins: [new TsconfigPathsPlugin()],
        },
    });
};

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] =
    ({ actions }) => {
        actions.createTypes(`
            type Site {
                siteMetadata: SiteMetadata!
            }
            
            type SiteMetadata {
                title: String!
                siteURL: String!
                description: String!
                keywords: String!
                facebook: SiteMetadataSocial!
                instagram: SiteMetadataSocial!
                behance: SiteMetadataSocial!
            }

            type SiteMetadataSocial {
                url: String!
                name: String!
            }
        `);
    };
// export const createPages: GatsbyNode["createPages"] = async ({
//     graphql,
//     actions,
// }) => {
//     const {
//         data: {
//             allContentfulProjects: { projectsList },
//         },
//     } = await graphql<Queries.ProjectsQuery>(`
//         query Projects {
//             allContentfulProjects {
//                 projectsList: nodes {
//                     slug
//                 }
//             }
//         }
//     `);
//     projectsList.forEach(({ slug }) => {
//         actions.createPage({
//             path: `/projects/${slug}`,
//             component: path.resolve("./src/templates/Project.tsx"),
//             context: { slug: slug },
//         });
//     });
// };
