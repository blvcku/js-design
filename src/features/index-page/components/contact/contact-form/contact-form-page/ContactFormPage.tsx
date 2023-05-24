import ContactFormField from '../contact-form-field/ContactFormField';
import {
    ContactFormPageContainer,
    ContactFormPageMessage,
} from './ContactFormPage.styles';
import useContactForm from '../contact-form-context/useContactForm';
import { ContactFormPageProps } from './ContactFormPage.types';

const ContactFormPage: React.FC<ContactFormPageProps> = ({
    errorMessage,
    successMessage,
}) => {
    const { fields, currentPage, error, numberOfPages } = useContactForm();
    const message = error ? errorMessage : successMessage;
    const currentPageFields = fields[currentPage];

    if (currentPage === numberOfPages)
        return (
            <ContactFormPageContainer>
                <ContactFormPageMessage>{message}</ContactFormPageMessage>
            </ContactFormPageContainer>
        );

    return (
        <>
            {currentPageFields.map((field) => {
                const { name } = field;
                return <ContactFormField key={name} {...field} />;
            })}
        </>
    );
};

export default ContactFormPage;
