import styled from 'styled-components';
import { ContactFormFieldElementProps } from './ContactFormField.types';

export const ContactFormFieldContainer = styled.label`
    --padding-horizontal: 0;
    margin-bottom: 1.3rem;
    padding-inline: var(--padding-horizontal);
    position: relative;
    display: block;
    margin-top: 1.5rem;
    &:has(input) {
        --padding-horizontal: 11%;
    }
    &:nth-of-type(1) {
        margin-top: 2.8rem;
    }
`;

export const ContactFormFieldElement = styled.input<ContactFormFieldElementProps>`
    font-size: var(--fs-base);
    font-weight: 400;
    box-shadow: var(--shadow-4);
    border: 1px solid var(--color-secondary-300);
    background: var(--color-primary-100);
    border-radius: 12px;
    padding: 0.8rem 1.2rem;
    width: 100%;
    &::placeholder {
        color: var(--color-secondary-300);
        opacity: 0.5;
    }
    &:is(textarea) {
        resize: none;
        height: 12rem;
    }
    ${({ showError }) =>
        showError
            ? `
        &:invalid{
            border:1px solid var(--color-error);
            & ~ p{
                display:block;
            }
        }
    `
            : null}
`;

export const ContactFormFieldError = styled.p`
    display: none;
    font-size: var(--fs-sm);
    padding-inline: var(--padding-horizontal);
    position: absolute;
    top: calc(100% + 0.2rem);
    left: 0;
    color: var(--color-error);
`;
