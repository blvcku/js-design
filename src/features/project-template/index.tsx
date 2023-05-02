import React from 'react';
import { PageProps, HeadProps } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import {
    ProjectTemplateContentContainer,
    ProjectTemplateArticle,
} from './styles/index.styles';
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
            <ProjectTemplateContentContainer>
                <ProjectTemplateArticle>
                    <ComponentMap content={content} />
                </ProjectTemplateArticle>
                <ContactLink />
            </ProjectTemplateContentContainer>
        </>
    );
};

export const Head: React.FC<HeadProps<Queries.ProjectQuery>> = ({
    data,
    location,
}) => {
    const { title, description, keywords, banner } =
        data.contentfulProject || {};
    const imgSrc = banner && getSrc(banner);
    return (
        <SEO
            title={title}
            description={description}
            keywords={keywords}
            img={imgSrc}
            pathname={location.pathname}
            type={PageType.ARTICLE}
        />
    );
};

export default Project;
