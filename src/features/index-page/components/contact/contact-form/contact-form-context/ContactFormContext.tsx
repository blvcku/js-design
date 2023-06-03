import React, { useReducer } from 'react';
import type {
    ContactFormChangeAnswerHandler,
    ContactFormContextData,
    ContactFormProviderProps,
} from './ContactFormContext.types';
import type { ContactFormAnswers } from '../ContactForm.types';

export const ContactFormContext = React.createContext<
    ContactFormContextData<ContactFormAnswers> | undefined
>(undefined);

const ContactFormProvider = <T extends ContactFormAnswers>({
    numberOfPages,
    submitCallback,
    fields,
    formRef,
    children,
}: ContactFormProviderProps<T>) => {
    const initialContactFormState = {
        currentPage: 0,
        loading: false,
        error: false,
        showInputErrors: false,
        answers: fields.reduce((acc, fieldsPage) => {
            fieldsPage.forEach(({ name }) => (acc = { ...acc, [name]: `` }));
            return acc;
        }, {}) as T,
    };
    const [contactFormState, updateContactFormState] = useReducer(
        (
            state: typeof initialContactFormState,
            action: Partial<typeof initialContactFormState>,
        ) => {
            const newState = { ...state, ...action };
            if (newState.currentPage < 0) newState.currentPage = 0;
            if (newState.currentPage > numberOfPages)
                newState.currentPage = numberOfPages;
            return newState;
        },
        initialContactFormState,
    );
    const { answers, currentPage } = contactFormState;

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        updateContactFormState({ loading: true });
        try {
            await submitCallback(answers);
        } catch (error) {
            updateContactFormState({ error: true });
        } finally {
            updateContactFormState({
                currentPage: numberOfPages,
            });
        }
    };

    const validateForm = () => {
        const formValidity = formRef.current?.reportValidity();
        updateContactFormState({ showInputErrors: !formValidity });
        return formValidity;
    };

    const handleNextPage: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        updateContactFormState({
            currentPage: currentPage + 1,
        });
    };

    const handlePrevPage: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        updateContactFormState({
            currentPage: currentPage - 1,
        });
    };

    const handleChangeAnswer: ContactFormChangeAnswerHandler = (e, name) => {
        e.preventDefault();
        updateContactFormState({
            answers: { ...answers, [name]: e.target.value },
        });
    };

    const value = {
        ...contactFormState,
        numberOfPages,
        fields,
        handleSubmit,
        handleNextPage,
        handlePrevPage,
        handleChangeAnswer,
    };

    return (
        <ContactFormContext.Provider value={value}>
            {children}
        </ContactFormContext.Provider>
    );
};

export default ContactFormProvider;
