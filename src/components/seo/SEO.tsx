import React from 'react';
import Img from '../../assets/images/Header.png';
import useSiteMetadata from '../../hooks/useSiteMetadata';
import { SEOProps, SEOPageTypes } from './SEO.types';

const SEO: React.FC<SEOProps> = (props) => {
    const {
        title: baseTitle,
        description: baseDescription,
        keywords: baseKeywords,
        siteURL: baseSiteURL,
    } = useSiteMetadata();

    const {
        title = baseTitle,
        description = baseDescription,
        keywords = baseKeywords,
        img = Img,
        siteURL = baseSiteURL,
        type = SEOPageTypes.website,
        children,
    } = props;

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta name="theme-color" content="var(--color-primary-200)" />
            <meta name="color-scheme" content="light" />
            <meta property="og:title" content={title} />
            <meta property="og:type" content={type} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={img} />
            <meta property="og:locale" content="pl-PL" />
            <meta property="og:url" content={siteURL} />
            <link rel="canonical" href={siteURL} />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="true"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
                rel="stylesheet"
            />
            {children}
        </>
    );
};

export default SEO;
