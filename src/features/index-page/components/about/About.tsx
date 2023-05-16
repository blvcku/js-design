import FirstWave from '@/assets/images/wave-1.inline.svg';
import SecondWave from '@/assets/images/wave-2.inline.svg';
import AboutDescription from './about-description/AboutDescription';
import AboutBadges from './about-badges/AboutBadges';
import AboutWorkTypes from './about-work-types/AboutWorkTypes';
import {
    AboutContainer,
    AboutContentContainer,
    AboutWave,
    AboutWaveWrapper,
} from './About.styles';
import AboutLogo from './about-logo/AboutLogo';

const About: React.FC = () => {
    return (
        <AboutContainer>
            <AboutWaveWrapper>
                <AboutLogo />
                <AboutWave as={FirstWave} />
            </AboutWaveWrapper>
            <AboutContentContainer>
                <AboutDescription />
                <AboutBadges />
                <AboutWorkTypes />
            </AboutContentContainer>
            <AboutWave as={SecondWave} />
        </AboutContainer>
    );
};

export default About;
