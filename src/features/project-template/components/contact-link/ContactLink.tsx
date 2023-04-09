import {
    ContactLinkContainer,
    ContactLinkHeader,
    ContactLinkElement,
} from './ContactLink.styles';

const ContactLink: React.FC = () => {
    return (
        <ContactLinkContainer>
            <ContactLinkHeader>Like my work?</ContactLinkHeader>
            <ContactLinkElement to="/#contact">Contact me!</ContactLinkElement>
        </ContactLinkContainer>
    );
};

export default ContactLink;
