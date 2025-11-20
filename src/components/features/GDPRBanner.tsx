import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DSButton } from '../ui/DSButton';

export const GDPRBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('confluence-gdpr-consent');
        if (!consent) {
            // Show banner after a small delay
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        const consentData = {
            timestamp: new Date().toISOString(),
            analytics: true,
            performance: true
        };
        localStorage.setItem('confluence-gdpr-consent', JSON.stringify(consentData));
        setIsVisible(false);
        // Here we would initialize analytics
    };

    const handleDecline = () => {
        const consentData = {
            timestamp: new Date().toISOString(),
            analytics: false,
            performance: false
        };
        localStorage.setItem('confluence-gdpr-consent', JSON.stringify(consentData));
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                    className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50"
                >
                    <div className="bg-white rounded-xl shadow-elevated p-6 border border-gray-100">
                        <h3 className="text-lg font-playfair font-medium mb-2">Respect de votre vie privée</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic.
                        </p>
                        <div className="flex space-x-3">
                            <DSButton variant="primary" size="sm" onClick={handleAccept} className="flex-1">
                                Accepter
                            </DSButton>
                            <DSButton variant="ghost" size="sm" onClick={handleDecline} className="flex-1">
                                Refuser
                            </DSButton>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
