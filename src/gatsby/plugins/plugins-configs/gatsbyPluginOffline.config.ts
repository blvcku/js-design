const gatsbyPluginOffline = {
    resolve: `gatsby-plugin-offline`,
    options: {
        workboxConfig: {
            runtimeCaching: [
                {
                    urlPattern: /(\.js$|\.css$|static\/)/,
                    handler: `CacheFirst`,
                },
                {
                    urlPattern: /^https?:.*\/page-data\/.*\.json/,
                    handler: `NetworkFirst`,
                    options: {
                        networkTimeoutSeconds: 3,
                    },
                },
                {
                    urlPattern:
                        /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
                    handler: `StaleWhileRevalidate`,
                },
                {
                    urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
                    handler: `StaleWhileRevalidate`,
                },
                {
                    urlPattern: /\/$/,
                    handler: `NetworkFirst`,
                    options: {
                        networkTimeoutSeconds: 3,
                    },
                },
            ],
        },
    },
};

export default gatsbyPluginOffline;
