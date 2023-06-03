import {
    NavigationLink,
    NavigationLinkContainer,
    NavigationLinksContainer,
} from './NavigationLinks.styles';
import type { NavigationLinksProps } from './NavigationLinks.types';

const NavigationLinks: React.FC<NavigationLinksProps> = ({
    links,
    linkProps,
    ...containerProps
}) => {
    return (
        <NavigationLinksContainer {...containerProps}>
            {links.map(({ name, to }) => (
                <NavigationLinkContainer key={name}>
                    <NavigationLink {...linkProps} to={to}>
                        {name}
                    </NavigationLink>
                </NavigationLinkContainer>
            ))}
        </NavigationLinksContainer>
    );
};

export default NavigationLinks;
