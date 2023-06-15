import { Link } from 'gatsby';
import type { PageTransitionLinkProps } from './PageTransitionLink.types';
import usePageTransition from '@/contexts/page-transition-context/usePageTransition';
import pageTransitionConfig from '@/layouts/page-transition/PageTransition.config';

const PageTransitionLink: React.FC<PageTransitionLinkProps> = ({
    children,
    to,
    ...linkProps
}) => {
    const { startTransition } = usePageTransition();

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        startTransition(to, pageTransitionConfig);
    };

    return (
        <Link {...linkProps} to={to} onClick={handleLinkClick}>
            {children}
        </Link>
    );
};

export default PageTransitionLink;
