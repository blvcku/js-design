import { PageProps } from 'gatsby';
import SEO from '@/components/seo/SEO';
import Header from '@/features/index-page/components/header/Header';
import About from '@/features/index-page/components/about/About';
import Contact from '@/features/index-page/components/contact/Contact';
import Projects from '@/features/index-page/components/projects/Projects';

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
