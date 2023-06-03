import { useRef } from 'react';
import { ContactFormContainer } from './ContactForm.styles';
import type { ContactFormAnswers, ContactFormProps } from './ContactForm.types';
import ProgressBar from '@/components/styled-components/progress-bar/ProgressBar';
import ContactFormNavigation from './contact-form-navigation/ContactFormNavigation';
import ContactFormProvider, {
    ContactFormContext,
} from './contact-form-context/ContactFormContext';
import ContactFormPage from './contact-form-page/ContactFormPage';

const ContactForm = <T extends ContactFormAnswers>({
    successMessage,
    errorMessage,
    fields,
    submitCallback,
}: ContactFormProps<T>) => {
    const formRef = useRef<HTMLFormElement>(null);

    return (
        <ContactFormProvider
            submitCallback={submitCallback}
            numberOfPages={fields.length}
            fields={fields}
            formRef={formRef}
        >
            <ContactFormContext.Consumer>
                {(data) => {
                    if (!data) return null;
                    const { currentPage, handleSubmit, numberOfPages } = data;
                    return (
                        <ContactFormContainer
                            noValidate
                            onInvalid={(e) => e.preventDefault()}
                            onSubmit={handleSubmit}
                            ref={formRef}
                        >
                            <ProgressBar
                                currentPage={currentPage}
                                numberOfPages={numberOfPages}
                            />
                            <ContactFormPage
                                successMessage={successMessage}
                                errorMessage={errorMessage}
                            />
                            <ContactFormNavigation />
                        </ContactFormContainer>
                    );
                }}
            </ContactFormContext.Consumer>
        </ContactFormProvider>
    );
};

export default ContactForm;
