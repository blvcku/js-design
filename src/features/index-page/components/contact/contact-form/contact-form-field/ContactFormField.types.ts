export enum ContactFormFieldVariant {
    INPUT = `input`,
    TEXT_AREA = `textarea`,
}

export interface ContactFormInput<TName extends string>
    extends React.InputHTMLAttributes<HTMLInputElement> {
    name: TName;
    type: React.HTMLInputTypeAttribute;
    placeholder: string;
    errorMessage: string;
    maxLength: number;
    as: ContactFormFieldVariant.INPUT;
}

export interface ContactFormTextArea<TName extends string>
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: TName;
    placeholder: string;
    errorMessage: string;
    maxLength: number;
    as: ContactFormFieldVariant.TEXT_AREA;
}

export type ContactFormField<T> =
    | ContactFormInput<Extract<keyof T, string>>
    | ContactFormTextArea<Extract<keyof T, string>>;

export type ContactFormFieldChangeEvent = React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement
>;

export interface ContactFormFieldElementProps {
    showInputError: boolean;
}

export type ContactFormFieldProps<T> = ContactFormField<T>;
