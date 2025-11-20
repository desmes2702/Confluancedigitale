import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface AccordionItem {
    id: string;
    title: string;
    content: React.ReactNode;
}

interface DSAccordionProps {
    items: AccordionItem[];
    allowMultiple?: boolean;
    className?: string;
}

export const DSAccordion: React.FC<DSAccordionProps> = ({
    items,
    allowMultiple = false,
    className = '',
}) => {
    const [openIds, setOpenIds] = useState<string[]>([]);

    const toggleItem = (id: string) => {
        if (allowMultiple) {
            setOpenIds(prev =>
                prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
            );
        } else {
            setOpenIds(prev =>
                prev.includes(id) ? [] : [id]
            );
        }
    };

    return (
        <div className={`space-y-4 ${className}`}>
            {items.map((item) => {
                const isOpen = openIds.includes(item.id);

                return (
                    <div
                        key={item.id}
                        className={`border border-gray-200 rounded-xl overflow-hidden bg-white transition-all duration-300 ${isOpen ? 'shadow-elevated border-transparent' : ''}`}
                    >
                        <button
                            onClick={() => toggleItem(item.id)}
                            className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
                            aria-expanded={isOpen}
                        >
                            <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-[#D1A65E]' : 'text-[#1A1A1A]'}`}>
                                {item.title}
                            </span>
                            <span className={`ml-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </button>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial="collapsed"
                                    animate="open"
                                    exit="collapsed"
                                    variants={{
                                        open: { opacity: 1, height: 'auto' },
                                        collapsed: { opacity: 0, height: 0 }
                                    }}
                                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                >
                                    <div className="px-6 pb-6 pt-0 text-gray-600 border-t border-gray-100 mt-2">
                                        <div className="pt-4">
                                            {item.content}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
};
