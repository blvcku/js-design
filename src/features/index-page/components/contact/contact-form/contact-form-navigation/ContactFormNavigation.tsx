import ArrowIcon from '@/assets/icons/arrow-horizontal.inline.svg';
import {
    ContactFormNavigationContainer,
    ContactFormNavigationButton,
    ContactFormNavigationButtonNarrow,
} from './ContactFormNavigation.styles';
import useContactForm from '../contact-form-context/useContactForm';

const ContactFormButtons: React.FC = () => {
    const {
        currentPage,
        numberOfPages,
        loading,
        handleNextPage,
        handlePrevPage,
    } = useContactForm();

    if (currentPage === numberOfPages) return null;

    return (
        <ContactFormNavigationContainer>
            {currentPage && currentPage !== numberOfPages ? (
                <ContactFormNavigationButtonNarrow
                    aria-label="Previous"
                    type="button"
                    onClick={handlePrevPage}
                >
                    <ArrowIcon />
                </ContactFormNavigationButtonNarrow>
            ) : null}
            {currentPage < numberOfPages - 1 ? (
                <ContactFormNavigationButton
                    type="button"
                    onClick={handleNextPage}
                >
                    Next
                </ContactFormNavigationButton>
            ) : null}
            {currentPage === numberOfPages - 1 ? (
                <ContactFormNavigationButton type="submit" disabled={loading}>
                    Send
                </ContactFormNavigationButton>
            ) : null}
        </ContactFormNavigationContainer>
    );
};

export default ContactFormButtons;
