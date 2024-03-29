const gatsbyOmniFontLoader = {
    resolve: `gatsby-omni-font-loader`,
    options: {
        mode: `async`,
        enableListener: true,
        preconnect: [`https://fonts.gstatic.com`],
        web: [
            {
                name: `Montserrat`,
                file: `https://fonts.googleapis.com/css2?family=Montserrat`,
            },
        ],
    },
};

export default gatsbyOmniFontLoader;
