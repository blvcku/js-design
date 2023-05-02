import { PageProps, HeadProps } from 'gatsby';
import SEO from '@/components/seo/SEO';
import {
    NotFoundPageContentContainer,
    NotFoundPageDescription,
    NotFoundPageSubTitle,
    NotFoundPageTitle,
    NotFoundPageLink,
} from './styles/index.styles';

const NotFoundPage: React.FC<PageProps> = () => {
    return (
        <NotFoundPageContentContainer>
            <NotFoundPageTitle>404</NotFoundPageTitle>
            <NotFoundPageSubTitle>Page not found</NotFoundPageSubTitle>
            <NotFoundPageDescription>
                Sorry, the page you&apos;re looking for doesn&apos;t exist.
            </NotFoundPageDescription>
            <NotFoundPageLink to="/">Back to home page</NotFoundPageLink>
        </NotFoundPageContentContainer>
    );
};

export const Head: React.FC<HeadProps> = () => {
    return <SEO />;
};

export default NotFoundPage;
