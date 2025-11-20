import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { createPortal } from 'react-dom';

interface DSDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    position?: 'left' | 'right';
}

export const DSDrawer: React.FC<DSDrawerProps> = ({
    isOpen,
    onClose,
    title,
    children,
    position = 'right',
}) => {
    const drawerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    const variants = {
        left: {
            hidden: { x: '-100%' },
            visible: { x: 0 },
        },
        right: {
            hidden: { x: '100%' },
            visible: { x: 0 },
        },
    };

    const positionClasses = {
        left: 'left-0 top-0 bottom-0 border-r',
        right: 'right-0 top-0 bottom-0 border-l',
    };

    if (typeof document === 'undefined') return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={handleBackdropClick}
                    />

                    <motion.div
                        ref={drawerRef}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={variants[position]}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className={`absolute ${positionClasses[position]} w-full max-w-md bg-white shadow-2xl flex flex-col`}
                    >
                        {title && (
                            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-white z-10">
                                <h3 className="text-xl font-playfair font-medium text-[#1A1A1A]">{title}</h3>
                                <button
                                    onClick={onClose}
                                    className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100"
                                    aria-label="Fermer"
                                >
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        )}

                        <div className="flex-1 overflow-y-auto p-6">
                            {children}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
};
