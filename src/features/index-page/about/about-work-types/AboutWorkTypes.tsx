import React from 'react';
import UiDesignIcon from '../../../../assets/icons/UiDesign.inline.svg';
import BannersIcon from '../../../../assets/icons/Banners.inline.svg';
import LogoIcon from '../../../../assets/icons/LogoIcon.inline.svg';
import {
    AboutWorkTypesContainer,
    AboutWorkTypesList,
    AboutWorkType,
} from './AboutWorkTypes.styles';

const AboutWorkTypes: React.FC = () => {
    return (
        <AboutWorkTypesContainer>
            <h2>I create...</h2>
            <AboutWorkTypesList>
                <AboutWorkType>
                    <UiDesignIcon />
                    <h3>UI Design</h3>
                </AboutWorkType>
                <AboutWorkType>
                    <BannersIcon />
                    <h3>Banners, Leaflets</h3>
                </AboutWorkType>
                <AboutWorkType>
                    <LogoIcon />
                    <h3>Logo</h3>
                </AboutWorkType>
            </AboutWorkTypesList>
        </AboutWorkTypesContainer>
    );
};

export default AboutWorkTypes;
