import {
    ContactFormFinalPageContainer,
    ContactFormFinalPageMessage,
} from './ContactFormFinalPage.styles';
import { ContactFormFinalPageProps } from './ContactFormFinalPage.types';

const ContactFormFinalPage: React.FC<ContactFormFinalPageProps> = ({
    succesMessage,
    errorMessage,
    error,
}) => {
    const message = error ? errorMessage : succesMessage;

    return (
        <ContactFormFinalPageContainer>
            <ContactFormFinalPageMessage>{message}</ContactFormFinalPageMessage>
        </ContactFormFinalPageContainer>
    );
};

export default ContactFormFinalPage;
