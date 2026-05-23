
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const WhatsAppFab: React.FC = () => {
  return (
    <a
      href={SOCIAL_LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[90] flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group animate-bounce-subtle"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip */}
      <span className="absolute right-full mr-4 px-3 py-1.5 bg-black text-white text-xs font-bold rounded-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none uppercase tracking-widest">
        Chat with me
      </span>
      
      <MessageCircle size={32} fill="white" />
      
      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }
      `}</style>
    </a>
  );
};

export default WhatsAppFab;
