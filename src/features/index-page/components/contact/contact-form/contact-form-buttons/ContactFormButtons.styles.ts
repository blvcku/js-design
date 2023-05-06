import styled from 'styled-components';
import Button from '@/components/buttons/button/Button';

export const ContactFormButtonsWrapper = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: end;
    margin-top: 0.8rem;
    height: 100%;
    flex-grow: 1;
`;

export const ContactFormButtonsButton = styled(Button)`
    --button-background-color: var(--color-secondary-400);
`;

export const ContactFormButtonsButtonNarrow = styled(ContactFormButtonsButton)`
    --button-padding-inline: 1.4rem;
`;
