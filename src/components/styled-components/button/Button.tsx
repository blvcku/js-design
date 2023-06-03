import { ButtonContainer, ButtonLoadingWheel } from './Button.styles';
import type { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = (props) => {
    const { children, disabled, onClick, ...buttonProps } = props;

    return (
        <ButtonContainer onClick={onClick} disabled={disabled} {...buttonProps}>
            {children}
            {disabled ? <ButtonLoadingWheel data-loading-wheel /> : null}
        </ButtonContainer>
    );
};

export default Button;
