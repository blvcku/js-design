export interface NavButtonContainerProps {
    active: boolean;
}

export interface NavButtonProps
    extends NavButtonContainerProps,
        React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
