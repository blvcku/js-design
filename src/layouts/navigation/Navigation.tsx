import { useState } from 'react';
import Logo from '@/assets/icons/Logo.inline.svg';
import LogoThick from '@/assets/icons/LogoThick.inline.svg';
import NavigationHamburger from './navigation-hamburger/NavigationHamburger';
import NavigationCollapseButton from './navigation-collapse-button/NavigationCollapseButton';
import {
    NavigationContainer,
    NavigationLogoContainer,
    NavigationExpandableContent,
    NavigationLinksContainer,
    NavigationLink,
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
            <NavigationLogoContainer to="/">
                <LogoThick />
            </NavigationLogoContainer>
            <nav>
                <NavigationHamburger handleExpand={handleExpand} />
                <NavigationExpandableContent expanded={expanded}>
                    <NavigationCollapseButton handleCollapse={handleCollapse} />
                    <NavigationLinksContainer>
                        {navigationLinks.map(({ name, to }) => (
                            <li key={name}>
                                <NavigationLink to={to}>{name}</NavigationLink>
                            </li>
                        ))}
                    </NavigationLinksContainer>
                    <Logo />
                </NavigationExpandableContent>
            </nav>
        </NavigationContainer>
    );
};

export default Navigation;
