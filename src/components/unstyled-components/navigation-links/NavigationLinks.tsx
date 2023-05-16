import {
    NavigationLink,
    NavigationLinkContainer,
    NavigationLinksContainer,
} from './NavigationLinks.styles';
import { NavigationLinksProps } from './NavigationLinks.types';

const NavigationLinks: React.FC<NavigationLinksProps> = ({
    links,
    ...containerProps
}) => {
    return (
        <NavigationLinksContainer {...containerProps}>
            {links.map(({ name, to }) => (
                <NavigationLinkContainer key={name}>
                    <NavigationLink to={to}>{name}</NavigationLink>
                </NavigationLinkContainer>
            ))}
        </NavigationLinksContainer>
    );
};

export default NavigationLinks;
