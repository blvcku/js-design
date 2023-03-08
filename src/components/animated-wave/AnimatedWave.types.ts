export interface AnimatedWaveContainerProps {
    animate: boolean;
}

export interface AnimatedWaveProps extends AnimatedWaveContainerProps {
    waveSrc: string;
    withLogo?: boolean;
}
