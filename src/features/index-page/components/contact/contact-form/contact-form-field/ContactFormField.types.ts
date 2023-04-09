export enum ContactFormFieldVariant {
    INPUT = `input`,
    TEXT_AREA = `textarea`,
}

export interface ContactFormInput<FieldNames extends string>
    extends React.InputHTMLAttributes<HTMLInputElement> {
    name: FieldNames;
    type: React.HTMLInputTypeAttribute;
    placeholder: string;
    errorMessage: string;
    maxLength: number;
    as: ContactFormFieldVariant.INPUT;
}

export interface ContactFormTextArea<FieldNames extends string>
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: FieldNames;
    placeholder: string;
    errorMessage: string;
    maxLength: number;
    as: ContactFormFieldVariant.TEXT_AREA;
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
