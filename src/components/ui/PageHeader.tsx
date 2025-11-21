import { motion } from "motion/react";

interface PageHeaderProps {
    title: string;
    highlight?: string;
    subtitle?: string;
    backgroundImage?: string;
}

export const PageHeader = ({ title, highlight, subtitle, backgroundImage }: PageHeaderProps) => {
    return (
        <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-[#F9FAFB]">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D1A65E]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#10b981]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* H1 - Visible by default for instant LCP */}
                    <motion.h1
                        className="text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] mb-6"
                        style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                        initial={{ opacity: 1, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {title} {highlight && <span className="text-[#D1A65E]">{highlight}</span>}
                    </motion.h1>

                    {/* Subtitle - Visible by default */}
                    {subtitle && (
                        <motion.p
                            className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto mb-8"
                            initial={{ opacity: 1, y: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </div>
            </div>
        </section>
    );
};
