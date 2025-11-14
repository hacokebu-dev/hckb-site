import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LottieAnimation: React.FC<{ src: string; autoplay?: boolean; loop?: boolean; className?: string }> = ({
    src,
    autoplay = true,
    loop = true,
    className,
}) => (
    <DotLottieReact
        src={src}
        autoplay={autoplay}
        loop={loop}
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        className={className}
        stateMachineId='StateMachine1'
    />
);

export default LottieAnimation;
