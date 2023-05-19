const gatsbyPluginReactSvg = {
    resolve: `gatsby-plugin-react-svg`,
    options: {
        rule: {
            include: /\.inline\.svg$/,
            omitKeys: [
                `xmlnsDc`,
                `xmlnsCc`,
                `xmlnsRd`,
                `xmlnsSvg`,
                `xmlnsSodipodi`,
                `xmlnsInkscape`,
            ],
        },
    },
};

export default gatsbyPluginReactSvg;
