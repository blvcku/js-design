import {
    AboutDescriptionContainer,
    AboutDescriptionParagraph,
} from './AboutDescription.styles';

const AboutDescription: React.FC = () => {
    return (
        <AboutDescriptionContainer>
            <AboutDescriptionParagraph>
                I&apos;m a beginner graphic designer, it&apos;s also my hobby
                and something I enjoy doing!
            </AboutDescriptionParagraph>
            <AboutDescriptionParagraph>
                I&apos;ll be posting my designs here! Check them out
            </AboutDescriptionParagraph>
        </AboutDescriptionContainer>
    );
};

export default AboutDescription;
