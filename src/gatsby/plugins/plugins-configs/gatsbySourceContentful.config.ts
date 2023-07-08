import dotenv from 'dotenv';

dotenv.config();

const gatsbySourceContentful = {
    resolve: `gatsby-source-contentful`,
    options: {
        accessToken: process.env.CONTENTFUL_DELIVERY_API_KEY,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
    },
};

export default gatsbySourceContentful;
