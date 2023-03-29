import { useState, useRef } from 'react';
import { ContactFormContainer } from './ContactForm.styles';
import { ContactFormProps, ContactFormAnswers } from './ContactForm.types';
import { ContactFormFieldChangeEvent } from './contact-form-field/ContactFormField.types';
import ProgressBar from '@/components/progress-bar/ProgressBar';
import ContactFormButtons from './contact-form-buttons/ContactFormButtons';
import ContactFormField from './contact-form-field/ContactFormField';
import ContactFormFinalPage from './contact-form-final-page/ContactFormFinalPage';

const ContactForm = <MessageFields extends ContactFormAnswers>({
    succesMessage,
    errorMessage,
    fields,
    sendMessage,
}: ContactFormProps<MessageFields>) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [showErrors, setShowErrors] = useState(false);
    const [answers, setAnswers] = useState(
        fields.reduce((acc, fieldsPage) => {
            fieldsPage.forEach(({ name }) => (acc = { ...acc, [name]: `` }));
            return acc;
        }, {}) as MessageFields,
    );
    const formRef = useRef<HTMLFormElement>(null);
    const numberOfPages = fields.length;
    const currentPageFields = fields[currentPage];

    const handleChangeAnswer = (
        e: ContactFormFieldChangeEvent,
        name: string,
    ) => {
        e.preventDefault();
        setAnswers((prev) => ({ ...prev, [name]: e.target.value }));
    };

    const handleSendMessage: React.FormEventHandler<HTMLFormElement> = async (
        e,
    ) => {
        e.preventDefault();
        setLoading(true);
        try {
            await sendMessage(answers);
        } catch (error) {
            setError(true);
        } finally {
            setCurrentPage(numberOfPages);
            setLoading(false);
        }
    };

    return (
        <ContactFormContainer
            noValidate
            onInvalid={(e) => e.preventDefault()}
            onSubmit={handleSendMessage}
            ref={formRef}
        >
            <ProgressBar
                currentPage={currentPage}
                numberOfPages={numberOfPages}
            />
            {currentPage === numberOfPages ? (
                <ContactFormFinalPage
                    succesMessage={succesMessage}
                    errorMessage={errorMessage}
                    error={error}
                />
            ) : (
                <>
                    {currentPageFields.map((field) => {
                        const { name } = field;
                        return (
                            <ContactFormField
                                key={name}
                                {...field}
                                value={answers[name]}
                                onChange={(e: ContactFormFieldChangeEvent) =>
                                    handleChangeAnswer(e, name)
                                }
                                showError={showErrors}
                            />
                        );
                    })}
                    <ContactFormButtons
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        numberOfPages={numberOfPages}
                        loading={loading}
                        formRef={formRef}
                        setShowErrors={setShowErrors}
                    />
                </>
            )}
        </ContactFormContainer>
    );
};

export default ContactForm;
