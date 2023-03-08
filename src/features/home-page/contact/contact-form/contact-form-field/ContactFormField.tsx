import React from "react";
import {
    ContactFormFieldContainer,
    ContactFormFieldElement,
    ContactFormFieldError,
} from "./ContactFormField.styles";
import { ContactFormFieldProps } from "./ContactFormField.types";

const ContactFormField: React.FC<ContactFormFieldProps> = (props) => {
    const { onChange, value, errorMessage, showError, ...fieldProps } = props;

    return (
        <ContactFormFieldContainer>
            <ContactFormFieldElement
                showError={showError}
                onChange={onChange}
                value={value}
                {...fieldProps}
            />
            <ContactFormFieldError role="alert">
                {errorMessage}
            </ContactFormFieldError>
        </ContactFormFieldContainer>
    );
};

export default ContactFormField;
