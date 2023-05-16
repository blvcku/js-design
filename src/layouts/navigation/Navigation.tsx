import { useState } from 'react';
import NavigationHamburger from './navigation-hamburger/NavigationHamburger';
import NavigationCollapseButton from './navigation-collapse-button/NavigationCollapseButton';
import {
    NavigationContainer,
    NavigationLogoContainer,
    NavigationExpandableContent,
    NavigationLinksStyled,
    NavigationLogoSmall,
    NavigationLogo,
} from './Navigation.styles';

const navigationLinks = [
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

    const handleCollapse: React.MouseEventHandler<
        HTMLButtonElement | HTMLAnchorElement
    > = () => {
        setExpanded(false);
    };

    return (
        <NavigationContainer>
            <NavigationLogoContainer to="/">
                <NavigationLogoSmall />
            </NavigationLogoContainer>
            <nav>
                <NavigationHamburger
                    expanded={expanded}
                    handleExpand={handleExpand}
                />
                <NavigationExpandableContent expanded={expanded}>
                    <NavigationCollapseButton handleCollapse={handleCollapse} />
                    <NavigationLinksStyled links={navigationLinks} />
                    <NavigationLogo />
                </NavigationExpandableContent>
            </nav>
        </NavigationContainer>
    );
};

export default Navigation;
