import type { ContactFormField } from './contact-form-field/ContactFormField.types';
import type { ContactFormPageProps } from './contact-form-page/ContactFormPage.types';

export type ContactFormFields<T> = ContactFormField<T>[][];

export interface ContactFormProps<MessageFields> extends ContactFormPageProps {
    fields: ContactFormFields<MessageFields>;
    submitCallback: (data: MessageFields) => Promise<void>;
}

export interface ContactFormAnswers {
    [key: string]: string;
}
