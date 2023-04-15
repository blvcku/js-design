import React from 'react';
import { PageProps, HeadProps } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import { Main, Article } from './styles/ProjectTemplate.styles';
import SEO from '@/components/seo/SEO';
import { PageType } from '@/components/seo/SEO.types';
import Header from './components/header/Header';
import ComponentMap from './components/component-map/ComponentMap';
import ContactLink from './components/contact-link/ContactLink';

const Project: React.FC<PageProps<Queries.ProjectQuery>> = ({ data }) => {
    if (!data.contentfulProject) return null;
    const { content, banner, title } = data.contentfulProject;
    return (
        <>
            <Header banner={banner} title={title} />
            <Main>
                <Article>
                    <ComponentMap content={content} />
                </Article>
                <ContactLink />
            </Main>
        </>
    );
};

export const Head: React.FC<HeadProps<Queries.ProjectQuery>> = ({ data }) => {
    const { title, description, keywords, banner, slug } =
        data.contentfulProject || {};
    const imgSrc = banner && getSrc(banner);
    return (
        <SEO
            title={title}
            description={description}
            keywords={keywords}
            img={imgSrc}
            pathname={`/${slug}`}
            type={PageType.ARTICLE}
        />
    );
};

export default Project;
