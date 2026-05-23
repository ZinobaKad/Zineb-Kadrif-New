import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  maxWidth?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title, maxWidth = 'max-w-4xl' }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-white/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className={`relative w-full ${maxWidth} max-h-[90vh] overflow-y-auto bg-white shadow-2xl flex flex-col animate-in fade-in zoom-in duration-300 rounded-sm`}>
        
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-6 bg-white border-b border-gray-100">
          <h3 className="text-lg font-bold uppercase tracking-wide truncate pr-4 text-black">
            {title || 'Details'}
          </h3>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          {children}
        </div>
        
      </div>
    </div>
  );
};

export default Modal;