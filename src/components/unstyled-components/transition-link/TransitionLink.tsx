import { Link } from 'gatsby';
import { TransitionLinkProps } from './TransitionLink.types';
import usePageTransition from '@/hooks/usePageTransition';

const TransitionLink: React.FC<TransitionLinkProps> = ({
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

export default TransitionLink;
