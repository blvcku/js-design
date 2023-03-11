import { ContactFormField } from './contact-form-field/ContactFormField.types';
import { ContactFormFinalPageMessages } from './contact-form-final-page/ContactFormFinalPage.types';

export type ContactFormFields<MessageFields> = Array<
    Array<ContactFormField<MessageFields>>
>;

export interface ContactFormProps<MessageFields>
    extends ContactFormFinalPageMessages {
    fields: ContactFormFields<MessageFields>;
    sendMessage: (data: MessageFields) => Promise<void>;
}

export interface ContactFormAnswers {
    [key: string]: string;
}
