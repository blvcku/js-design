import {
    NavigationHamburgerContainer,
    NavigationHamburgerWrapper,
    NavigationHamburgerLine,
} from './NavigationHamburger.styles';
import { NavigationHamburgerProps } from './NavigationHamburger.types';

const NavigationHamburger: React.FC<NavigationHamburgerProps> = ({
    handleExpand,
}) => {
    return (
        <NavigationHamburgerContainer
            aria-label="Open navigation"
            onClick={handleExpand}
        >
            <NavigationHamburgerWrapper>
                <NavigationHamburgerLine />
                <NavigationHamburgerLine />
                <NavigationHamburgerLine />
            </NavigationHamburgerWrapper>
        </NavigationHamburgerContainer>
    );
};

export default NavigationHamburger;
