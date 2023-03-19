import { NavButtonContainer } from './NavButton.styles';
import { NavButtonProps } from './NavButton.types';

const NavButton: React.FC<NavButtonProps> = (props) => {
    const { children, active, onClick, ...buttonProps } = props;

    return (
        <NavButtonContainer
            aria-selected={active}
            onClick={onClick}
            active={active}
            {...buttonProps}
        >
            {children}
            <span data-active-indicator></span>
        </NavButtonContainer>
    );
};

export default NavButton;
