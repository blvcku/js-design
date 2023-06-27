import { useState, useRef } from 'react';
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
import navigationLinks from './Navigation.config';
import useClickOutside from '@/hooks/useClickOutside';

const Navigation: React.FC = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpand: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        setExpanded(true);
    };

    const handleCollapse = () => {
        setExpanded(false);
    };

    const elementRef = useRef<HTMLDivElement>(null);
    useClickOutside(elementRef, handleCollapse);

    return (
        <NavigationContainer>
            <NavigationLogoContainer to="/">
                <NavigationLogoSmall />
            </NavigationLogoContainer>
            <NavigationHamburger
                expanded={expanded}
                handleExpand={handleExpand}
            />
            <NavigationExpandableContent
                data-testid="navigation-expandable-content"
                ref={elementRef}
                expanded={expanded}
            >
                <NavigationCollapseButton handleCollapse={handleCollapse} />
                <NavigationLinksStyled
                    linkProps={{
                        tabIndex: expanded ? 0 : -1,
                        onClick: handleCollapse,
                    }}
                    links={navigationLinks}
                />
                <NavigationLogo />
            </NavigationExpandableContent>
        </NavigationContainer>
    );
};

export default Navigation;
