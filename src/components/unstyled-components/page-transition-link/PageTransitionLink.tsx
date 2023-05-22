import { Link } from 'gatsby';
import { PageTransitionLinkProps } from './PageTransitionLink.types';
import usePageTransition from '@/contexts/page-transition-context/usePageTransition';

const PageTransitionLink: React.FC<PageTransitionLinkProps> = ({
    children,
    to,
    ...linkProps
}) => {
    const { startTransition } = usePageTransition();

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        startTransition(to);
    };

    return (
        <Link {...linkProps} to={to} onClick={handleLinkClick}>
            {children}
        </Link>
    );
};

export default PageTransitionLink;
