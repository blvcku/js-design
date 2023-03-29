import FirstWave from '@/assets/images/Wave1.inline.svg';
import SecondWave from '@/assets/images/Wave2.inline.svg';
import Logo from '@/assets/icons/Logo.inline.svg';
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
                <p>
                    I&apos;m a beginner graphic designer, it&apos;s also my
                    hobby and something I enjoy doing!
                </p>
                <p>I&apos;ll be posting my designs here! Check them out</p>
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
