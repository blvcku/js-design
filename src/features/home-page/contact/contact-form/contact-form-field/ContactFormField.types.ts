export enum ContactFormFieldVariants {
    input = "input",
    textarea = "textarea",
}

export interface ContactFormInput<FieldsNames extends string>
    extends React.InputHTMLAttributes<HTMLInputElement> {
    name: FieldsNames;
    type: React.HTMLInputTypeAttribute;
    placeholder: string;
    errorMessage: string;
    maxLength: number;
    as: ContactFormFieldVariants.input;
}

export interface ContactFormTextArea<FieldsNames extends string>
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: FieldsNames;
    placeholder: string;
    errorMessage: string;
    maxLength: number;
    as: ContactFormFieldVariants.textarea;
}

export type ContactFormField<MessageFields> =
    | ContactFormInput<Extract<keyof MessageFields, string>>
    | ContactFormTextArea<Extract<keyof MessageFields, string>>;

export type ContactFormFieldChangeEvent = React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement
>;

export interface ContactFormFieldElementProps {
    showError: boolean;
}

export type ContactFormFieldProps = ContactFormField<any> &
    ContactFormFieldElementProps & {
        onChange: (e: ContactFormFieldChangeEvent) => void;
        value: string;
    };
