import React from "react";
import ProfessionalServiceIcon from "../../../../assets/icons/ProfessionalService.inline.svg";
import QuickCompletitionTimeIcon from "../../../../assets/icons/QuickCompletitionTime.inline.svg";
import { AboutBadgesContainer, AboutBadge } from "./AboutBadges.styles";

const AboutBadges: React.FC = () => {
    return (
        <AboutBadgesContainer>
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
        </AboutBadgesContainer>
    );
};

export default AboutBadges;
