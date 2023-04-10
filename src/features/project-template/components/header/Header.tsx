import {
    HeaderContainer,
    HeaderImageWrapper,
    HeaderTitle,
} from './Header.styles';
import { HeaderProps } from './Header.types';
import ImageRenderer from '@/components/image-renderer/ImageRenderer';

const Header: React.FC<HeaderProps> = ({ banner, title }) => {
    return (
        <HeaderContainer>
            <HeaderImageWrapper>
                <ImageRenderer
                    image={banner}
                    alt={title}
                    loading="eager"
                    objectFit="contain"
                    objectPosition="center center"
                />
            </HeaderImageWrapper>
            <HeaderTitle>{title}</HeaderTitle>
        </HeaderContainer>
    );
};

export default Header;
