import React, { useEffect, useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface LottieAnimationProps {
    src: string; // Path to the Lottie JSON or .lottie file
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
    const isDotLottieFile = src.endsWith('.lottie');

    useEffect(() => {
        // For .json files, use lottie-web
        if (!isDotLottieFile && containerRef.current) {
            const loadLottie = async () => {
                const lottie = await import('lottie-web');

                if (containerRef.current) {
                    // Clear previous animation if exists
                    if (lottieRef.current) {
                        lottieRef.current.destroy();
                    }

                    try {
                        // Fetch JSON animation data
                        const response = await fetch(src);
                        const animationData = await response.json();

                        // Load and play animation
                        lottieRef.current = lottie.default.loadAnimation({
                            container: containerRef.current,
                            renderer: 'canvas',
                            loop: loop,
                            autoplay: autoplay,
                            animationData: animationData,
                        });

                        console.log('✓ Lottie JSON animation loaded successfully:', src);
                    } catch (error) {
                        console.error('✗ Error loading Lottie JSON animation:', src, error);
                    }
                }
            };

            loadLottie();

            return () => {
                if (lottieRef.current) {
                    lottieRef.current.destroy();
                }
            };
        }
    }, [src, autoplay, loop, isDotLottieFile]);

    // For .lottie files, use DotLottieReact component
    if (isDotLottieFile) {
        return (
            <div
                ref={containerRef}
                className={className}
                style={{ width: '100%', height: '100%' }}
            >
                <DotLottieReact
                    src={src}
                    autoplay={autoplay}
                    loop={loop}
                    style={{ width: '100%', height: '100%' }}
                    dotLottieRefCallback={(dotLottie) => {
                        lottieRef.current = dotLottie;
                        console.log('✓ dotLottie animation loaded successfully:', src);
                    }}
                />
            </div>
        );
    }

    // For .json files, return canvas container
    return (
        <div
            ref={containerRef}
            className={className}
            style={{ width: '100%', height: '100%' }}
        />
    );
};

export default LottieAnimation;
