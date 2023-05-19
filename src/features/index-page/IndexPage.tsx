import { PageProps, HeadProps } from 'gatsby';
import { IndexPageContentContainer } from './styles/IndexPage.styles';
import SEO from '@/components/seo/SEO';
import Header from './components/header/Header';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <Header />
            <IndexPageContentContainer>
                <About />
                <Projects />
                <Contact />
            </IndexPageContentContainer>
        </>
    );
};

export const Head: React.FC<HeadProps> = () => {
    return <SEO />;
};

export default IndexPage;
