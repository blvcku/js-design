import dotenv from 'dotenv';

dotenv.config();

const siteMetadata: Queries.SiteMetadata = {
    title: `JS Design`,
    siteUrl: process.env.SITE_URL || ``,
    description: `JS Design portfolio website. Jacek Szczypior Graphic Designer.`,
    keywords: [
        `JS Design`,
        `Graphic Designer`,
        `Logo`,
        `Logo Designer`,
        `Web Designer`,
        `Leaflet`,
        `Mockup`,
    ],
    facebook: {
        url: `https://www.facebook.com/jacek.szczypior.77`,
        name: `Jacek Szczypior`,
    },
    instagram: {
        url: `https://www.instagram.com/js_design004/`,
        name: `js_design004`,
    },
    behance: {
        url: `https://www.behance.net/JSDsgn`,
        name: `JSDsgn`,
    },
};

export default siteMetadata;
