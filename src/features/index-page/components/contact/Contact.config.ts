import { ContactFormFields } from './contact-form/ContactForm.types';
import { ContactFormFieldVariant } from './contact-form/contact-form-field/ContactFormField.types';
import { ContactMessage } from './Contact.types';

const contactFields: ContactFormFields<ContactMessage> = [
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
];

export default contactFields;
