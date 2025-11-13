// src/components/RiveAnimation.tsx
import React, { useEffect } from 'react';
import { useRive } from '@rive-app/react-canvas';
import type { UseRiveParameters } from '@rive-app/react-canvas';

interface RiveAnimationProps {
  src: string; // Path to the .riv file
  className?: string; // For styling the container
  stateMachine?: string; // Optional state machine name
  autoplay?: boolean; // Optional autoplay
}

const RiveAnimation: React.FC<RiveAnimationProps> = ({
  src,
  className,
  stateMachine,
  autoplay = true,
}) => {
  const params: UseRiveParameters = {
    src: src,
    autoplay: autoplay,
    // Only specify state machine if provided, otherwise use animations
    ...(stateMachine && { stateMachines: stateMachine }),
    onLoad: () => {
      console.log('✓ Rive file loaded successfully:', src);
    },
    onLoadError: (error) => {
      console.error('✗ Rive load error:', src, error);
    },
  };

  const { RiveComponent } = useRive(params);

  useEffect(() => {
    console.log('RiveAnimation mounted with src:', src);
  }, [src]);

  return (
    <div className={className} style={{ width: '100%', height: '100%' }}>
      <RiveComponent />
    </div>
  );
};

export default RiveAnimation;
