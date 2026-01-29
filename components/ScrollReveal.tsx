import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, Variant } from 'framer-motion';

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    width?: 'fit-content' | '100%';
    delay?: number;
    duration?: number;
    variant?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right';
    className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    width = 'fit-content',
    delay = 0,
    duration = 0.8,
    variant = 'fade-up',
    className = "",
    ...props
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const variants: Record<string, { hidden: Variant; visible: Variant }> = {
        'fade-up': {
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
        },
        'fade-in': {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        },
        'slide-left': {
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 },
        },
        'slide-right': {
            hidden: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0 },
        },
    };

    const selectedVariant = variants[variant] || variants['fade-up'];

    return (
        <div ref={ref} style={{ position: 'relative', width }} className={className} {...props}>
            <motion.div
                variants={selectedVariant}
                initial="hidden"
                animate={mainControls}
                transition={{ duration, delay, ease: "easeOut" }}
                className="h-full w-full"
            >
                {children}
            </motion.div>
        </div>
    );
};
