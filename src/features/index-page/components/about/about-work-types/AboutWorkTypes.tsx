import UiDesignIcon from '@/assets/icons/ui-design.inline.svg';
import BannersIcon from '@/assets/icons/banners.inline.svg';
import LogoIcon from '@/assets/icons/logo-icon.inline.svg';
import {
    AboutWorkTypesContainer,
    AboutWorkTypesList,
    AboutWorkType,
    AboutWorkTypesHeading,
    AboutWorkTypeHeading,
    AboutWorkTypeIcon,
} from './AboutWorkTypes.styles';

const AboutWorkTypes: React.FC = () => {
    return (
        <AboutWorkTypesContainer id="i-create">
            <AboutWorkTypesHeading>I create...</AboutWorkTypesHeading>
            <AboutWorkTypesList>
                <AboutWorkType>
                    <AboutWorkTypeIcon as={UiDesignIcon} />
                    <AboutWorkTypeHeading>UI Design</AboutWorkTypeHeading>
                </AboutWorkType>
                <AboutWorkType>
                    <AboutWorkTypeIcon as={BannersIcon} />
                    <AboutWorkTypeHeading>
                        Banners, Leaflets
                    </AboutWorkTypeHeading>
                </AboutWorkType>
                <AboutWorkType>
                    <AboutWorkTypeIcon as={LogoIcon} />
                    <AboutWorkTypeHeading>Logo</AboutWorkTypeHeading>
                </AboutWorkType>
            </AboutWorkTypesList>
        </AboutWorkTypesContainer>
    );
};

export default AboutWorkTypes;
