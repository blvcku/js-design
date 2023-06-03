import type { ContactFormFields } from '../ContactForm.types';
import type { ContactFormFieldChangeEvent } from '../contact-form-field/ContactFormField.types';

export type ContactFormChangeAnswerHandler = (
    e: ContactFormFieldChangeEvent,
    name: string,
) => void;

export interface ContactFormProviderProps<T> extends React.PropsWithChildren {
    numberOfPages: number;
    submitCallback: (data: T) => Promise<void>;
    fields: ContactFormFields<T>;
    formRef: React.RefObject<HTMLFormElement>;
}

export interface ContactFormContextData<T>
    extends Omit<
        ContactFormProviderProps<T>,
        'children' | 'submitCallback' | 'formRef'
    > {
    currentPage: number;
    loading: boolean;
    error: boolean;
    showInputErrors: boolean;
    answers: T;
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
    handleNextPage: React.MouseEventHandler<HTMLButtonElement>;
    handlePrevPage: React.MouseEventHandler<HTMLButtonElement>;
    handleChangeAnswer: ContactFormChangeAnswerHandler;
}
