import { PageProps } from 'gatsby';
import SEO from '@/components/seo/SEO';
import Header from '@/features/index-page/header/Header';
import About from '@/features/index-page/about/About';
import Contact from '@/features/index-page/contact/Contact';
import Projects from '@/features/index-page/projects/Projects';

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <Header />
            <main>
                <About />
                <Projects />
                <Contact />
            </main>
        </>
    );
};

export const Head = () => {
    return <SEO />;
};

export default IndexPage;
