// import { GatsbyNode } from "gatsby";
// import path from "path";

// export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
//     ({ actions }) => {
//     actions.createTypes(`
//         type SiteSiteMetadata{
//             title: String
//         }
//   `);
// };

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
