import React from 'react';
import Logo from '../../assets/icons/Logo.inline.svg';
import { AnimatedWaveContainer } from './AnimatedWave.styles';
import { AnimatedWaveProps } from './AnimatedWave.types';

const AnimatedWave: React.FC<AnimatedWaveProps> = ({
    animate,
    waveSrc,
    withLogo = false,
}) => {
    return (
        <AnimatedWaveContainer animate={animate}>
            <img src={waveSrc} alt="" />
            {withLogo ? (
                <div>
                    <Logo />
                </div>
            ) : null}
        </AnimatedWaveContainer>
    );
};

export default AnimatedWave;
