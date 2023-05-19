import { PageProps, HeadProps } from 'gatsby';
import SEO from '@/components/seo/SEO';
import { PageType } from '@/components/seo/SEO.types';
import {
    NotFoundPageContentContainer,
    NotFoundPageDescription,
    NotFoundPageSubTitle,
    NotFoundPageTitle,
    NotFoundPageLink,
} from './styles/404Page.styles';

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

export const Head: React.FC<HeadProps> = ({ location }) => {
    return (
        <SEO
            title="Not Found"
            description="Sorry, the page you're looking for doesn't exist."
            keywords={[`404`, `404 Page`, `Not found`, `Not found page`]}
            pathname={location.pathname}
            type={PageType.WEBSITE}
        />
    );
};

export default NotFoundPage;
