import React from "react";
import { motion, type Variants } from "motion/react";

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%" | "auto";
    variants?: Variants;
    delay?: number;
    duration?: number;
    className?: string;
}

export const Reveal = ({
    children,
    width = "fit-content",
    variants, // Laisse vide pour utiliser le défaut interne
    delay = 0.25,
    duration = 0.5,
    className,
}: RevealProps) => {

    // Variantes par défaut robustes (FadeInUp)
    const defaultVariants = {
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div style={{ width, position: "relative", overflow: "visible" }} className={className}>
            <motion.div
                variants={variants || defaultVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }} // Déclenche l'anim plus tôt
                transition={{ duration, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
};
