import React from "react";
import { graphql, PageProps } from "gatsby";
import SEO from "../components/seo/SEO";
import Header from "../features/home-page/header/Header";
import About from "../features/home-page/about/About";
import Contact from "../features/home-page/contact/Contact";
import Projects from "../features/home-page/projects/Projects";
import { ProjectsProps } from "../features/home-page/projects/Projects.types";

type QueryData = {
    allContentfulProjects: ProjectsProps;
};

const IndexPage: React.FC<PageProps<QueryData>> = ({ data }) => {
    const {
        allContentfulProjects: { projectsList },
    } = data;

    return (
        <>
            <Header />
            <main>
                <About />
                <Projects projectsList={projectsList} />
                <Contact />
            </main>
        </>
    );
};

export const Head = () => {
    return <SEO />;
};

export const query = graphql`
    query IndexPage {
        allContentfulProjects(
            sort: { fields: createdAt, order: DESC }
            limit: 18
        ) {
            projectsList: nodes {
                category
                slug
                thumb {
                    gatsbyImageData(width: 600)
                }
                title
            }
        }
    }
`;

export default IndexPage;
