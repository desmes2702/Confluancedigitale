// src/react-components/ui/DSDrawer.tsx
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface DSDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  position?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showCloseButton?: boolean;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  className?: string;
}

export function DSDrawer({
  isOpen,
  onClose,
  title,
  children,
  position = 'right',
  size = 'md',
  showCloseButton = true,
  closeOnBackdrop = true,
  closeOnEscape = true,
  className = '',
}: DSDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Gestion de la fermeture avec ESC
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeOnEscape, onClose]);

  // Bloquer le scroll du body quand le drawer est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Focus sur le drawer à l'ouverture
  useEffect(() => {
    if (isOpen && drawerRef.current) {
      drawerRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const sizes = {
    sm: 'max-w-xs',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-2xl',
  };

  const positions = {
    left: {
      container: 'left-0',
      translate: isOpen ? 'translate-x-0' : '-translate-x-full',
    },
    right: {
      container: 'right-0',
      translate: isOpen ? 'translate-x-0' : 'translate-x-full',
    },
  };

  const positionStyles = positions[position];

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (closeOnBackdrop && e.target === e.currentTarget) {
      onClose();
    }
  };

  const drawerContent = (
    <div
      className="fixed inset-0 z-50"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'drawer-title' : undefined}
    >
      {/* Backdrop */}
      <div
        className={`
          fixed inset-0 bg-black transition-opacity duration-300
          ${isOpen ? 'bg-opacity-50' : 'bg-opacity-0'}
        `}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div
        ref={drawerRef}
        tabIndex={-1}
        className={`
          fixed top-0 ${positionStyles.container} h-full
          bg-white w-full ${sizes[size]}
          transform transition-transform duration-300 ease-in-out
          ${positionStyles.translate}
          flex flex-col
          ${className}
        `}
        style={{ boxShadow: '0 0 40px rgba(0, 0, 0, 0.2)' }}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between px-6 py-4 border-b-2 border-gray-100 flex-shrink-0">
            {title && (
              <h2
                id="drawer-title"
                className="text-2xl text-[#1A1A1A]"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
              >
                {title}
              </h2>
            )}

            {showCloseButton && (
              <button
                onClick={onClose}
                className="
                  ml-auto p-2 rounded-lg
                  text-gray-400 hover:text-[#1A1A1A] hover:bg-[#F9FAFB]
                  transition-all duration-300
                "
                aria-label="Fermer"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div
          className="px-6 py-6 overflow-y-auto flex-1"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {children}
        </div>
      </div>
    </div>
  );

  // Utiliser un portal pour monter le drawer à la racine du DOM
  if (typeof document !== 'undefined') {
    return createPortal(drawerContent, document.body);
  }

  return null;
}
