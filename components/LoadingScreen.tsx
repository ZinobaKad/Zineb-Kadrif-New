
import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Sequence:
    // 0-1.2s: Triangles animate in
    // 1.2s-2.5s: Text visible
    // 2.5s: Start exit fade out
    // 3.2s: Complete
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 700); // Wait for fade out transition
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${isExiting ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="relative w-32 h-32 mb-10">
        {/* Yellow Triangle: Top Left - Animated */}
        <div 
           className="absolute inset-0 bg-brand-yellow" 
           style={{ 
             clipPath: 'polygon(0 0, 100% 0, 0 100%)',
             animation: 'tumbleInTL 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
           }}
        ></div>
        
        {/* Black Triangle: Bottom Right - Animated */}
        <div 
           className="absolute inset-0 bg-black" 
           style={{ 
             clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
             animation: 'tumbleInBR 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
           }}
        ></div>
      </div>

      <h1 
        className="text-lg md:text-xl font-light tracking-[0.3em] uppercase text-black opacity-0" 
        style={{ animation: 'fadeInUp 0.8s ease-out 1.2s forwards' }}
      >
        Welcome to my creative space
      </h1>
      
      <style>{`
        @keyframes tumbleInTL {
          0% { transform: translate(-150%, -150%) rotate(-45deg) scale(0.5); opacity: 0; }
          60% { transform: translate(10%, 10%) rotate(5deg) scale(1.1); opacity: 1; }
          100% { transform: translate(-16%, 6%) rotate(0) scale(0.9); } /* Ends offset DOWN-LEFT with scale 0.9 */
        }
        @keyframes tumbleInBR {
          0% { transform: translate(150%, 150%) rotate(45deg) scale(0.5); opacity: 0; }
          60% { transform: translate(-10%, -10%) rotate(-5deg) scale(1.1); opacity: 1; }
          100% { transform: translate(16%, -6%) rotate(0) scale(0.9); } /* Ends offset UP-RIGHT with scale 0.9 */
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;