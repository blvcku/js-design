import type { ContactConfig } from './Contact.types';
import { ContactFormFieldVariant } from './contact-form/contact-form-field/ContactFormField.types';

const contactConfig: ContactConfig = {
    contactFields: [
        [
            {
                name: `name`,
                type: `text`,
                placeholder: `Your Name...`,
                errorMessage: `This field is required!`,
                required: true,
                maxLength: 100,
                as: ContactFormFieldVariant.INPUT,
            },
            {
                name: `email`,
                type: `email`,
                placeholder: `Your Email...`,
                errorMessage: `Please, enter a valid email address!`,
                required: true,
                maxLength: 100,
                as: ContactFormFieldVariant.INPUT,
            },
        ],
        [
            {
                name: `message`,
                placeholder: `Your Text...`,
                errorMessage: `This field is required!`,
                required: true,
                maxLength: 1000,
                as: ContactFormFieldVariant.TEXT_AREA,
            },
        ],
    ],
    successMessage: `Message sent successfully!`,
    errorMessage: `Failed to send your message, try again later.`,
};

export default contactConfig;
