import { createGlobalStyle } from 'styled-components';

export const globalFontSizePercentage = 100;

const GlobalStyle = createGlobalStyle`
    :root{
        --color-primary-100: #FFFFFF;
        --color-primary-200: #EBF2F2;

        --color-secondary-100: #397374;
        --color-secondary-200: #127369;
        --color-secondary-300: #2c3e40;
        --color-secondary-400: #10403B;

        --color-tertiary-100: #051917;

        --color-error: #b91c1c;

        --fs-xs: .9rem;
        --fs-sm: 1.1rem;
        --fs-base: 1.4rem;
        --fs-md: clamp(1.5rem, 4.5vw, 1.85rem);
        --fs-lg: clamp(1.5rem, 5vw, 2.1rem);
        --fs-xl: clamp(1.8rem, 6vw, 2.4rem);
        --fs-2xl: clamp(2.2rem, 7vw, 3rem);
        --fs-3xl: clamp(2.5rem, 9vw, 4rem);

        --shadow-1: 0px 3px 6px #00000029;
        --shadow-2: inset 0px 3px 6px #0000005E;
        --shadow-3: inset 0px 3px 6px #00000029;
        --shadow-4: inset 0px 3px 6px #00000010;
        --shadow-5: 0px 3px 6px #0000007A;

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
