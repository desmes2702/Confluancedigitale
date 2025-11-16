// src/react-components/ui/DSTabs.tsx
import React, { useState } from 'react';

export interface DSTab {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

interface DSTabsProps {
  tabs: DSTab[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
  className?: string;
}

export function DSTabs({
  tabs,
  defaultTab,
  onChange,
  className = '',
}: DSTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabClick = (tabId: string, disabled?: boolean) => {
    if (disabled) return;
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className={`w-full ${className}`}>
      {/* Tab Headers */}
      <div 
        className="flex border-b-2 border-gray-200"
        role="tablist"
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              disabled={tab.disabled}
              onClick={() => handleTabClick(tab.id, tab.disabled)}
              className={`
                px-6 py-3 
                text-sm font-medium
                border-b-2 -mb-0.5
                transition-all duration-300
                ${
                  isActive
                    ? 'border-[#10B981] text-[#10B981]'
                    : 'border-transparent text-gray-500 hover:text-[#1A1A1A] hover:border-gray-300'
                }
                ${tab.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
              `}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div
        role="tabpanel"
        id={`panel-${activeTab}`}
        className="py-6"
      >
        {activeContent}
      </div>
    </div>
  );
}
