import React, { useState } from 'react';
import { motion } from 'motion/react';

interface Tab {
    id: string;
    label: string;
    content: React.ReactNode;
}

interface DSTabsProps {
    tabs: Tab[];
    defaultTabId?: string;
    className?: string;
}

export const DSTabs: React.FC<DSTabsProps> = ({
    tabs,
    defaultTabId,
    className = '',
}) => {
    const [activeTabId, setActiveTabId] = useState(defaultTabId || tabs[0]?.id);

    return (
        <div className={className}>
            <div className="flex space-x-1 border-b border-gray-200 mb-6 overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => {
                    const isActive = activeTabId === tab.id;

                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTabId(tab.id)}
                            className={`
                relative px-6 py-3 text-sm font-medium transition-colors duration-200 whitespace-nowrap
                ${isActive ? 'text-[#D1A65E]' : 'text-gray-500 hover:text-gray-700'}
              `}
                            role="tab"
                            aria-selected={isActive}
                        >
                            {tab.label}
                            {isActive && (
                                <motion.div
                                    layoutId="activeTabIndicator"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D1A65E]"
                                    initial={false}
                                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                />
                            )}
                        </button>
                    );
                })}
            </div>

            <div className="mt-4">
                {tabs.map((tab) => (
                    activeTabId === tab.id ? (
                        <motion.div
                            key={tab.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            role="tabpanel"
                        >
                            {tab.content}
                        </motion.div>
                    ) : null
                ))}
            </div>
        </div>
    );
};
