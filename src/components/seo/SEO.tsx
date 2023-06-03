import SEOImg from '@/assets/images/seo-image.jpg';
import useSiteMetadata from '@/contexts/site-metadata-context/useSiteMetadata';
import type { SEOProps } from './SEO.types';
import { PageType } from './SEO.types';
import colors from '@/styles/colors';

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords,
    img,
    pathname,
    type,
    children,
}) => {
    const {
        title: defaultTitle,
        description: defaultDescription,
        keywords: defaultKeywords,
        siteUrl,
    } = useSiteMetadata();

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        keywords: keywords?.toString() || defaultKeywords.toString(),
        image: img || SEOImg,
        url: `${siteUrl}${pathname || ``}`,
        type: type || PageType.WEBSITE,
    };

    return (
        <>
            <html lang="en" />
            <title>{title}</title>
            <meta name="description" content={seo.description} />
            <meta name="keywords" content={seo.keywords} />
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta name="theme-color" content={colors.primary[200]} />
            <meta name="color-scheme" content="light" />
            <meta property="og:title" content={seo.title} />
            <meta property="og:type" content={seo.type} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:url" content={seo.url} />
            <link rel="canonical" href={seo.url} />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
            />
            {children}
        </>
    );
};

export default SEO;
