export enum ButtonSizeVariants {
    wide = `
        padding-inline:3.6rem;
    `,
    thin = `
        padding-inline:1.4rem;
    `,
}

export enum ButtonColorVariants {
    light = `
        --bg-color: var(--color-secondary-100);
    `,
    dark = `
        --bg-color:var(--color-secondary-300);
    `,
}

export interface ButtonContainerProps {
    sizeVariant?: ButtonSizeVariants;
    colorVariant?: ButtonColorVariants;
}

export interface ButtonProps
    extends ButtonContainerProps,
        React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
