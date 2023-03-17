import { ContactFormFinalPageContainer } from './ContactFormFinalPage.styles';
import { ContactFormFinalPageProps } from './ContactFormFinalPage.types';

const ContactFormFinalPage: React.FC<ContactFormFinalPageProps> = ({
    succesMessage,
    errorMessage,
    error,
}) => {
    const message = error ? errorMessage : succesMessage;

    return (
        <ContactFormFinalPageContainer>
            <p>{message}</p>
        </ContactFormFinalPageContainer>
    );
};

export default ContactFormFinalPage;
