import React, { useEffect, useRef } from 'react';

interface LottieAnimationProps {
    src: string; // Path to the Lottie JSON file
    className?: string; // For styling the container
    autoplay?: boolean; // Whether to autoplay
    loop?: boolean; // Whether to loop
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
    src,
    className,
    autoplay = true,
    loop = true,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lottieRef = useRef<any>(null);

    useEffect(() => {
        const loadLottie = async () => {
            // Dynamically import lottie-web
            const lottie = await import('lottie-web');

            if (containerRef.current) {
                // Clear previous animation if exists
                if (lottieRef.current) {
                    lottieRef.current.destroy();
                }

                // Load and play animation
                lottieRef.current = lottie.default.loadAnimation({
                    container: containerRef.current,
                    renderer: 'canvas',
                    loop: loop,
                    autoplay: autoplay,
                    path: src,
                });

                console.log('✓ Lottie animation loaded successfully:', src);
            }
        };

        loadLottie().catch((error) => {
            console.error('✗ Lottie load error:', src, error);
        });

        return () => {
            if (lottieRef.current) {
                lottieRef.current.destroy();
            }
        };
    }, [src, autoplay, loop]);

    return (
        <div
            ref={containerRef}
            className={className}
            style={{ width: '100%', height: '100%' }}
        />
    );
};

export default LottieAnimation;
