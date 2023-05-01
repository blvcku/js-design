import ProfessionalServiceIcon from '@/assets/icons/professional-service.inline.svg';
import QuickCompletitionTimeIcon from '@/assets/icons/quick-completition-time.inline.svg';
import {
    AboutBadgesContainer,
    AboutBadgesList,
    AboutBadge,
} from './AboutBadges.styles';

const AboutBadges: React.FC = () => {
    return (
        <AboutBadgesContainer>
            <AboutBadgesList>
                <AboutBadge>
                    <h2>
                        <span>3+ </span>Years experience
                    </h2>
                </AboutBadge>
                <AboutBadge>
                    <ProfessionalServiceIcon />
                    <h2>Professional service</h2>
                </AboutBadge>
                <AboutBadge>
                    <QuickCompletitionTimeIcon />
                    <h2>Quick completition time</h2>
                </AboutBadge>
            </AboutBadgesList>
        </AboutBadgesContainer>
    );
};

export default AboutBadges;
