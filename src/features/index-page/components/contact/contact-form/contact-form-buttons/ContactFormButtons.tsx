import ArrowIcon from '@/assets/icons/arrow-horizontal.inline.svg';
import {
    ContactFormButtonsWrapper,
    ContactFormButtonsButton,
    ContactFormButtonsButtonNarrow,
} from './ContactFormButtons.styles';
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
                <ContactFormButtonsButtonNarrow
                    aria-label="Previous"
                    type="button"
                    onClick={handlePrevPage}
                >
                    <ArrowIcon />
                </ContactFormButtonsButtonNarrow>
            ) : null}
            {currentPage < numberOfPages - 1 ? (
                <ContactFormButtonsButton
                    type="button"
                    onClick={handleNextPage}
                >
                    Next
                </ContactFormButtonsButton>
            ) : null}
            {currentPage === numberOfPages - 1 ? (
                <ContactFormButtonsButton
                    type="submit"
                    onClick={handleSubmitClick}
                    disabled={loading}
                >
                    Send
                </ContactFormButtonsButton>
            ) : null}
        </ContactFormButtonsWrapper>
    );
};

export default ContactFormButtons;
