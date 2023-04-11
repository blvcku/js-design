import { StaticImage } from 'gatsby-plugin-image';
import HeaderSocialLinks from './header-social-links/HeaderSocialLinks';
import { HeaderContainer, HeaderImageWrapper } from './Header.styles';

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <h1>
                Hello, <span>its me</span>
            </h1>
            <HeaderImageWrapper>
                <StaticImage
                    loading="eager"
                    quality={100}
                    layout="fullWidth"
                    src="../../../../assets/images/header.png"
                    alt="Jacek Szczypior"
                />
            </HeaderImageWrapper>
            <h2>
                Graphic <span>Designer</span>
            </h2>
            <h3>
                JS <span>Design</span>
            </h3>
            <HeaderSocialLinks />
        </HeaderContainer>
    );
};

export default Header;
