import ArrowIcon from '@/assets/icons/Arrow.inline.svg';
import { ContactFormButtonsWrapper } from './ContactFormButtons.styles';
import Button from '@/components/buttons/button/Button';
import {
    ButtonSizeVariants,
    ButtonColorVariants,
} from '@/components/buttons/button/Button.types';
import { ContactFormButtonsProps } from './ContactFormButtons.types';

const ContactFormButtons: React.FC<ContactFormButtonsProps> = ({
    currentPage,
    setCurrentPage,
    numberOfPages,
    loading,
    formRef,
    setShowErrors,
}) => {
    const validateForm = () => {
        const formValidity = formRef.current?.reportValidity();
        setShowErrors(!formValidity);
        return formValidity;
    };

    const handleSubmitClick: React.MouseEventHandler<HTMLButtonElement> = (
        e,
    ) => {
        if (!validateForm()) return e.preventDefault();
    };

    const handleNextPage: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setCurrentPage((prev) => prev + 1);
    };

    const handlePrevPage: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        setCurrentPage((prev) => prev - 1);
    };

    return (
        <ContactFormButtonsWrapper>
            {currentPage && currentPage !== numberOfPages ? (
                <Button
                    aria-label="Previous"
                    type="button"
                    onClick={handlePrevPage}
                    colorVariant={ButtonColorVariants.dark}
                    sizeVariant={ButtonSizeVariants.thin}
                >
                    <ArrowIcon />
                </Button>
            ) : null}
            {currentPage < numberOfPages - 1 ? (
                <Button
                    type="button"
                    onClick={handleNextPage}
                    colorVariant={ButtonColorVariants.dark}
                >
                    Next
                </Button>
            ) : null}
            {currentPage === numberOfPages - 1 ? (
                <Button
                    type="submit"
                    onClick={handleSubmitClick}
                    colorVariant={ButtonColorVariants.dark}
                    disabled={loading}
                >
                    Send
                </Button>
            ) : null}
        </ContactFormButtonsWrapper>
    );
};

export default ContactFormButtons;
