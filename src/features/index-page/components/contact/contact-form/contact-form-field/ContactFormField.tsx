import {
    ContactFormFieldContainer,
    ContactFormFieldElement,
    ContactFormFieldError,
} from './ContactFormField.styles';
import type {
    ContactFormFieldChangeEvent,
    ContactFormFieldProps,
} from './ContactFormField.types';
import useContactForm from '../contact-form-context/useContactForm';
import type { ContactFormAnswers } from '../ContactForm.types';

const ContactFormField = <T extends ContactFormAnswers>({
    errorMessage,
    name,
    ...fieldProps
}: ContactFormFieldProps<T>) => {
    const { showInputErrors, handleChangeAnswer, answers } = useContactForm();

    const handleChangeEvent = (e: ContactFormFieldChangeEvent) => {
        handleChangeAnswer(e, name);
    };

    return (
        <ContactFormFieldContainer>
            <ContactFormFieldElement
                showInputError={showInputErrors}
                onChange={handleChangeEvent}
                value={answers[name]}
                name={name}
                {...fieldProps}
            />
            {showInputErrors ? (
                <ContactFormFieldError role="alert">
                    {errorMessage}
                </ContactFormFieldError>
            ) : null}
        </ContactFormFieldContainer>
    );
};

export default ContactFormField;
