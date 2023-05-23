import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export const globalFontSizePercentage = 100;

const GlobalStyle = createGlobalStyle`
    :root{
        --color-primary-100: ${colors.primary[100]};
        --color-primary-200: ${colors.primary[200]};
        --color-secondary-100: ${colors.secondary[100]};
        --color-secondary-200: ${colors.secondary[200]};
        --color-secondary-300: ${colors.secondary[300]};
        --color-secondary-400: ${colors.secondary[400]};
        --color-tertiary-100: ${colors.tertiary[100]};
        --color-error-100: ${colors.error[100]};

        --fs-xs: .9rem;
        --fs-sm: 1.1rem;
        --fs-base: 1.4rem;
        --fs-md: clamp(1.4rem, 4.5vw, 1.85rem);
        --fs-lg: clamp(1.4rem, 5vw, 2.1rem);
        --fs-xl: clamp(1.8rem, 6vw, 2.4rem);
        --fs-2xl: clamp(2.2rem, 7vw, 3rem);
        --fs-3xl: clamp(2.3rem, 9vw, 4rem);

        --shadow-1: 0px 3px 6px #00000029;
        --shadow-2: inset 0px 3px 6px #0000005E;
        --shadow-3: inset 0px 3px 6px #00000029;
        --shadow-4: inset 0px 3px 6px #00000010;
        --shadow-5: 0px 3px 6px #0000007A;

        --z-index-navigation: 100;
        --z-index-page-transition: 200;

        font-family: 'Montserrat', sans-serif;
        font-size: ${globalFontSizePercentage}%;
        color:var(--color-tertiary-100);
    }

    *, *::before, *::after{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    body{
        background:var(--color-primary-200);
    }

    ul, ol{
        list-style:none;
    }

    button:not(:disabled){
        cursor:pointer;
    }

    input{
        color:var(--color-tertiary-100);
    }
`;

export default GlobalStyle;
