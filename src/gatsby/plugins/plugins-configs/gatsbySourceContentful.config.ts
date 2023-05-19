import dotenv from 'dotenv';

dotenv.config({
    path: `.env.${process.env.NODE_ENV}`,
});

const gatsbySourceContentful = {
    resolve: `gatsby-source-contentful`,
    options: {
        accessToken: process.env.CONTENTFUL_API_KEY,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
    },
};

export default gatsbySourceContentful;
