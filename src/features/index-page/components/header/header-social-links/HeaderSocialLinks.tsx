import FacebookLogo from '@/assets/icons/FacebookLogo.inline.svg';
import InstagramLogo from '@/assets/icons/InstagramLogo.inline.svg';
import BehanceLogo from '@/assets/icons/BehanceLogo.inline.svg';
import useSiteMetadata from '@/hooks/useSiteMetadata';
import { HeaderSocialLinksContainer } from './HeaderSocialLinks.styles';

const HeaderSocialLinks: React.FC = () => {
    const { facebook, instagram, behance } = useSiteMetadata();

    return (
        <HeaderSocialLinksContainer>
            <li>
                <a
                    aria-label="My facebook"
                    rel="noopener noreferrer"
                    target="_blank"
                    href={facebook.url}
                >
                    <FacebookLogo />
                </a>
            </li>
            <li>
                <a
                    aria-label="My instagram"
                    rel="noopener noreferrer"
                    target="_blank"
                    href={instagram.url}
                >
                    <InstagramLogo />
                </a>
            </li>
            <li>
                <a
                    aria-label="My behance"
                    rel="noopener noreferrer"
                    target="_blank"
                    href={behance.url}
                >
                    <BehanceLogo />
                </a>
            </li>
        </HeaderSocialLinksContainer>
    );
};

export default HeaderSocialLinks;
