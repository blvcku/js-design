import { StaticImage } from 'gatsby-plugin-image';
import {
    HeaderContainer,
    HeaderHeading,
    HeaderSecondHeading,
    HeaderThirdHeading,
    HeaderImageContainer,
    HeaderSocialLinks,
} from './Header.styles';

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <HeaderHeading>
                Hello, <span>its me</span>
            </HeaderHeading>
            <HeaderImageContainer>
                <StaticImage
                    loading="eager"
                    quality={100}
                    layout="fullWidth"
                    src="../../../../assets/images/header.png"
                    alt="Jacek Szczypior"
                />
            </HeaderImageContainer>
            <HeaderSecondHeading>
                Graphic <span>Designer</span>
            </HeaderSecondHeading>
            <HeaderThirdHeading>
                JS <span>Design</span>
            </HeaderThirdHeading>
            <HeaderSocialLinks displayName={false} />
        </HeaderContainer>
    );
};

export default Header;
