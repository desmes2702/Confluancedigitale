// src/react-components/ui/DSAccordion.tsx
import React, { useState } from 'react';

export interface DSAccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface DSAccordionProps {
  items: DSAccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: string[];
  className?: string;
}

export function DSAccordion({
  items,
  allowMultiple = false,
  defaultOpen = [],
  className = '',
}: DSAccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => {
      const isOpen = prev.includes(itemId);

      if (allowMultiple) {
        return isOpen
          ? prev.filter((id) => id !== itemId)
          : [...prev, itemId];
      } else {
        return isOpen ? [] : [itemId];
      }
    });
  };

  return (
    <div className={`w-full space-y-2 ${className}`}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);

        return (
          <div
            key={item.id}
            className="border-2 border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-[#F9FAFB] transition-all duration-300"
              aria-expanded={isOpen}
            >
              <span
                className="font-medium text-[#1A1A1A]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {item.title}
              </span>

              {/* Chevron Icon (SVG inline) */}
              <svg
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Accordion Content */}
            <div
              className={`
                overflow-hidden transition-all duration-300
                ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}
              `}
            >
              <div
                className="px-6 py-4 bg-[#F9FAFB] text-[#1A1A1A]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
