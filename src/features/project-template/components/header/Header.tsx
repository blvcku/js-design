import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import {
    HeaderContainer,
    HeaderImageWrapper,
    HeaderTitle,
} from './Header.styles';
import { HeaderProps } from './Header.types';

const Header: React.FC<HeaderProps> = ({ banner, title }) => {
    const img = getImage(banner);
    if (!img) return null;
    return (
        <HeaderContainer>
            <HeaderImageWrapper>
                <GatsbyImage
                    loading="eager"
                    objectFit="contain"
                    objectPosition="center center"
                    image={img}
                    alt={title}
                />
            </HeaderImageWrapper>
            <HeaderTitle>{title}</HeaderTitle>
        </HeaderContainer>
    );
};

export default Header;
