import { useState } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Logo from '@/assets/icons/Logo.inline.svg';
import LogoThick from '@/assets/icons/LogoThick.inline.svg';
import NavigationHamburger from './navigation-hamburger/NavigationHamburger';
import NavigationCollapseButton from './navigation-collapse-button/NavigationCollapseButton';
import {
    NavigationContainer,
    NavigationLogoContainer,
    NavigationExpandableContent,
    NavigationLinksContainer,
    NavigationLinkWrapper,
} from './Navigation.styles';
import { NavigationLinks } from './Navigation.types';

const navigationLinks: NavigationLinks = [
    {
        name: `Contact`,
        to: `/#contact`,
    },
    {
        name: `Projects`,
        to: `/#projects`,
    },
    {
        name: `Home Page`,
        to: `/`,
    },
];

const Navigation: React.FC = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpand: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        setExpanded(true);
    };

    const handleCollapse: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        setExpanded(false);
    };

    return (
        <NavigationContainer>
            <NavigationLogoContainer>
                <LogoThick />
            </NavigationLogoContainer>
            <nav aria-expanded={expanded}>
                <NavigationHamburger handleExpand={handleExpand} />
                <NavigationExpandableContent expanded={expanded}>
                    <NavigationCollapseButton handleCollapse={handleCollapse} />
                    <NavigationLinksContainer>
                        {navigationLinks.map(({ name, to }) => (
                            <NavigationLinkWrapper key={name}>
                                <AnchorLink to={to}>{name}</AnchorLink>
                            </NavigationLinkWrapper>
                        ))}
                    </NavigationLinksContainer>
                    <Logo />
                </NavigationExpandableContent>
            </nav>
        </NavigationContainer>
    );
};

export default Navigation;
