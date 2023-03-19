import { StaticImage } from 'gatsby-plugin-image';
import HeaderSocialLinks from './header-social-links/HeaderSocialLinks';
import {
    HeaderContainer,
    HeaderContentContainer,
    HeaderImageWrapper,
} from './Header.styles';

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <HeaderContentContainer>
                <h1>
                    Hello, <span>its me</span>
                </h1>
                <HeaderImageWrapper>
                    <StaticImage
                        quality={100}
                        layout="fullWidth"
                        placeholder="blurred"
                        src="../../../assets/images/Header.png"
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
            </HeaderContentContainer>
        </HeaderContainer>
    );
};

export default Header;
