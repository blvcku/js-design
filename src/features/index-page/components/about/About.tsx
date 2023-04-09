import FirstWave from '@/assets/images/wave-1.inline.svg';
import SecondWave from '@/assets/images/wave-2.inline.svg';
import Logo from '@/assets/icons/logo.inline.svg';
import AboutDescription from './about-description/AboutDescription';
import AboutBadges from './about-badges/AboutBadges';
import AboutWorkTypes from './about-work-types/AboutWorkTypes';
import {
    AboutContainer,
    AboutContentContainer,
    AboutWaveContainer,
    AboutAnimatedWaveContainer,
    AboutLogoContainer,
} from './About.styles';

const About: React.FC = () => {
    return (
        <AboutContainer>
            <AboutWaveContainer>
                <AboutLogoContainer>
                    <Logo />
                </AboutLogoContainer>
                <FirstWave />
            </AboutWaveContainer>
            <AboutContentContainer>
                <AboutDescription />
                <AboutBadges />
                <AboutWorkTypes />
            </AboutContentContainer>
            <AboutAnimatedWaveContainer>
                <SecondWave />
            </AboutAnimatedWaveContainer>
        </AboutContainer>
    );
};

export default About;
