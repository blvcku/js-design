import ProfessionalServiceIcon from '@/assets/icons/professional-service.inline.svg';
import QuickCompletitionTimeIcon from '@/assets/icons/quick-completition-time.inline.svg';
import {
    AboutBadgesContainer,
    AboutBadgesList,
    AboutBadge,
    AboutBadgeHeading,
    AboutBadgeIcon,
    AboutBadgeHeadingSpan,
} from './AboutBadges.styles';

const AboutBadges: React.FC = () => {
    return (
        <AboutBadgesContainer>
            <AboutBadgesList>
                <AboutBadge>
                    <AboutBadgeHeading>
                        <AboutBadgeHeadingSpan>3+</AboutBadgeHeadingSpan>Years
                        experience
                    </AboutBadgeHeading>
                </AboutBadge>
                <AboutBadge>
                    <AboutBadgeIcon as={ProfessionalServiceIcon} />
                    <AboutBadgeHeading>Professional service</AboutBadgeHeading>
                </AboutBadge>
                <AboutBadge>
                    <AboutBadgeIcon as={QuickCompletitionTimeIcon} />
                    <AboutBadgeHeading>Quick completion time</AboutBadgeHeading>
                </AboutBadge>
            </AboutBadgesList>
        </AboutBadgesContainer>
    );
};

export default AboutBadges;
