import { StaticImage } from 'gatsby-plugin-image';
import {
    ContactContainer,
    ContactFormContainer,
    ContactHeading,
    ContactSubHeading,
    ContactImageContainer,
} from './Contact.styles';
import ContactForm from './contact-form/ContactForm';
import { ContactFormFields } from './contact-form/ContactForm.types';
import { ContactFormFieldVariant } from './contact-form/contact-form-field/ContactFormField.types';
import { sendMessage } from './Contact.service';
import { ContactMessage } from './Contact.types';

const fields: ContactFormFields<ContactMessage> = [
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

const Contact: React.FC = () => {
    return (
        <ContactContainer id="contact">
            <ContactFormContainer>
                <ContactHeading>Lets talk!</ContactHeading>
                <ContactSubHeading>
                    Don&apos;t wait till tomorrow!
                    <br /> Contact me today.
                </ContactSubHeading>
                <ContactForm
                    fields={fields}
                    succesMessage="Message sent successfully!"
                    errorMessage="Failed to send your message, try again later."
                    sendMessage={sendMessage}
                />
            </ContactFormContainer>
            <ContactImageContainer>
                <StaticImage
                    layout="fullWidth"
                    placeholder="blurred"
                    src="../../../../assets/images/contact.png"
                    alt=""
                />
            </ContactImageContainer>
        </ContactContainer>
    );
};

export default Contact;
