import styled, { css } from 'styled-components';
import { ContactFormFieldElementProps } from './ContactFormField.types';
import { media } from '@/styles/mixins';

export const ContactFormFieldContainer = styled.label`
    --contact-form-field-padding-horizontal: 0;
    margin-bottom: 1.3rem;
    padding-inline: var(--contact-form-field-padding-horizontal);
    position: relative;
    display: block;
    margin-top: 1.5rem;
    &:has(input) {
        --contact-form-field-padding-horizontal: 9.5%;
        ${media.md} {
            --contact-form-field-padding-horizontal: 11%;
        }
    }
    &:nth-of-type(1) {
        margin-top: 2.8rem;
    }
`;

export const ContactFormFieldElement = styled.input<ContactFormFieldElementProps>`
    font-size: var(--fs-sm);
    font-weight: 400;
    box-shadow: var(--shadow-4);
    border: 1px solid var(--color-secondary-400);
    background: var(--color-primary-100);
    border-radius: 12px;
    padding: 0.8rem 1.2rem;
    width: 100%;
    &::placeholder {
        color: var(--color-secondary-400);
        opacity: 0.5;
    }
    &:is(textarea) {
        resize: none;
        height: 12rem;
    }
    ${({ showInputError }) =>
        showInputError
            ? css`
                  &:invalid {
                      border: 1px solid var(--color-error-100);
                      & ~ p {
                          display: block;
                      }
                  }
              `
            : null}
`;

export const ContactFormFieldError = styled.p`
    display: none;
    font-size: var(--fs-xs);
    padding-inline: var(--contact-form-field-padding-horizontal);
    position: absolute;
    top: calc(100% + 0.2rem);
    left: 0;
    color: var(--color-error-100);
`;
