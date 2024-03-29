import { StaticImage } from 'gatsby-plugin-image';
import {
    ContactContainer,
    ContactFormContainer,
    ContactHeading,
    ContactSubHeading,
    ContactImageContainer,
} from './Contact.styles';
import ContactForm from './contact-form/ContactForm';
import { sendMessage } from './Contact.service';
import contactConfig from './Contact.config';

const { successMessage, errorMessage, contactFields } = contactConfig;

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
                    fields={contactFields}
                    successMessage={successMessage}
                    errorMessage={errorMessage}
                    submitCallback={sendMessage}
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
