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
                {/* On some browsers there is a small gap between
                the wave and the content so we have to fill this
                gap by moving the element by 1 px */}
                <AboutWave as={FirstWave} style={{ top: `1px` }} />
            </AboutWaveWrapper>
            <AboutContentContainer>
                <AboutDescription />
                <AboutBadges />
                <AboutWorkTypes />
            </AboutContentContainer>
            {/* On some browsers there is a small gap between
            the wave and the content so we have to fill this
            gap by moving the element by 1 px */}
            <AboutWave as={SecondWave} style={{ bottom: `1px` }} />
        </AboutContainer>
    );
};

export default About;
