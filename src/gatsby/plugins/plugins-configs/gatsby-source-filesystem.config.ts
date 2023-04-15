import path from 'path';

const gatsbySourceFilesystem = {
    resolve: `gatsby-source-filesystem`,
    options: {
        name: `images`,
        path: path.join(process.cwd(), `./src/assets/images/`),
    },
};

export default gatsbySourceFilesystem;
