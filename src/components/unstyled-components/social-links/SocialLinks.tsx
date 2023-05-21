import FacebookLogo from '@/assets/icons/facebook-logo.inline.svg';
import InstagramLogo from '@/assets/icons/instagram-logo.inline.svg';
import BehanceLogo from '@/assets/icons/behance-logo.inline.svg';
import useSiteMetadata from '@/contexts/site-metadata-context/useSiteMetadata';
import {
    SocialLink,
    SocialLinkContainer,
    SocialLinkName,
    SocialLinkIcon,
    SocialLinksContainer,
} from './SocialLinks.styles';
import { SocialLinkObjects, SocialLinkProps } from './SocialLinks.types';

const SocialLinks: React.FC<SocialLinkProps> = ({
    displayName,
    ...containerProps
}) => {
    const { facebook, instagram, behance } = useSiteMetadata();

    const links: SocialLinkObjects = [
        {
            ...facebook,
            label: `My facebook`,
            icon: FacebookLogo,
        },
        {
            ...instagram,
            label: `My instagram`,
            icon: InstagramLogo,
        },
        {
            ...behance,
            label: `My behance`,
            icon: BehanceLogo,
        },
    ];

    return (
        <SocialLinksContainer {...containerProps}>
            {links.map(({ url, name, label, icon }) => (
                <SocialLinkContainer key={url}>
                    <SocialLink
                        aria-label={label}
                        rel="noopener noreferrer"
                        target="_blank"
                        href={url}
                    >
                        <SocialLinkIcon as={icon} />
                        {displayName ? (
                            <SocialLinkName>{name}</SocialLinkName>
                        ) : null}
                    </SocialLink>
                </SocialLinkContainer>
            ))}
        </SocialLinksContainer>
    );
};

export default SocialLinks;
