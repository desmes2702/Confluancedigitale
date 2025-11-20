// src/react-components/ui/DSDialog.tsx
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface DSDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  showCloseButton?: boolean;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  className?: string;
}

export function DSDialog({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
  closeOnBackdrop = true,
  closeOnEscape = true,
  className = '',
}: DSDialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

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

  // Bloquer le scroll du body quand le modal est ouvert
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

  // Focus sur le modal à l'ouverture
  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-full mx-4',
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (closeOnBackdrop && e.target === e.currentTarget) {
      onClose();
    }
  };

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'dialog-title' : undefined}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Dialog Container */}
      <div
        ref={dialogRef}
        tabIndex={-1}
        className={`
          relative bg-white rounded-2xl w-full ${sizes[size]}
          transform transition-all duration-300
          ${className}
        `}
        style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)' }}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between px-6 py-4 border-b-2 border-gray-100">
            {title && (
              <h2
                id="dialog-title"
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
          className="px-6 py-6 max-h-[70vh] overflow-y-auto"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {children}
        </div>
      </div>
    </div>
  );

  // Utiliser un portal pour monter le modal à la racine du DOM
  if (typeof document !== 'undefined') {
    return createPortal(modalContent, document.body);
  }

  return null;
}
