import styled from 'styled-components';
import Button from '@/components/styled-components/button/Button';

export const ContactFormNavigationContainer = styled.nav`
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: end;
    margin-top: 0.8rem;
    height: 100%;
    flex-grow: 1;
`;

export const ContactFormNavigationButton = styled(Button)`
    --button-background-color: var(--color-secondary-400);
`;

export const ContactFormNavigationButtonNarrow = styled(
    ContactFormNavigationButton,
)`
    --button-padding-inline: 1.4rem;
`;
