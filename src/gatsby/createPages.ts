// export const createPages: GatsbyNode["createPages"] = async ({
//     graphql,
//     actions,
// }) => {
//     const {
//         data: {
//             allContentfulProjects: { projectsList },
//         },
//     } = await graphql<Queries.ProjectsQuery>(`
//         query AllProjects {
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
