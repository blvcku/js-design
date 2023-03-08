import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root{
        --color-primary-100: #FFFFFF;
        --color-primary-200: #EBF2F2;

        --color-secondary-100: #397374;
        --color-secondary-200: #2c3e40;
        --color-secondary-300: #10403B;

        --color-tertiary-100: #051917;

        --color-error: #b91c1c;

        --fs-sm:.9rem;
        --fs-base:1.1rem;
        --fs-md:1.4rem;
        --fs-lg:clamp(1.5rem, 5vw, 2rem);
        --fs-xl:clamp(1.8rem, 6vw, 2.4rem);
        --fs-2xl:clamp(2.2rem, 7vw, 3rem);
        --fs-3xl:clamp(2.5rem, 9vw, 4rem);

        --shadow-1: 0px 3px 6px #00000029;
        --shadow-2: inset 0px 3px 6px #0000005E;
        --shadow-3: inset 0px 3px 6px #00000029;
        --shadow-4: inset 0px 3px 6px #00000010;

        font-family: 'Montserrat', sans-serif;
        font-size:100%;
        color:var(--color-tertiary-100);
    }

    *, *::before, *::after{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        font-size:100%;
    }

    body{
        background:var(--color-primary-200);
    }

    h1,h2,h3,h4,h5,h6{
        font-weight:700;
    }

    ul, ol{
        list-style:none;
    }

    button{
        cursor:pointer;
    }

    input{
        color:var(--color-tertiary-100);
    }
`;
