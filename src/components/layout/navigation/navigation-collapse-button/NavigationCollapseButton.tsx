import React from 'react';
import {
    NavigationCollapseButtonContainer,
    NavigationCollapseButtonLine,
} from './NavigationCollapseButton.styles';
import { NavigationCollapseButtonProps } from './NavigationCollapseButton.types';

const NavigationCollapseButton: React.FC<NavigationCollapseButtonProps> = ({
    handleCollapse,
}) => {
    return (
        <NavigationCollapseButtonContainer
            aria-label="Close navigation"
            onClick={handleCollapse}
        >
            <NavigationCollapseButtonLine />
            <NavigationCollapseButtonLine />
        </NavigationCollapseButtonContainer>
    );
};

export default NavigationCollapseButton;
