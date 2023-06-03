import type { ContactFormFields } from './contact-form/ContactForm.types';

export type ContactMessage = {
    name: string;
    email: string;
    message: string;
};

export interface ContactConfig {
    contactFields: ContactFormFields<ContactMessage>;
    successMessage: string;
    errorMessage: string;
}

export type ContactSendMessage = (data: ContactMessage) => Promise<void>;
