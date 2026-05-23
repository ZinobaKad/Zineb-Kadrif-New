
import React from 'react';
import { ArrowDown, Linkedin, RotateCw } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-white min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-gray-400">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-yellow"></span>
              </span>
              <span>Available for new challenges</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter text-black">
              Human<br />
              Centered<br />
              Design<span className="text-brand-yellow">.</span>
            </h1>
            
            <p className="text-xl text-gray-500 max-w-lg font-light leading-relaxed">
              I'm <strong>Zineb Kadrif</strong>, Specializing in <strong>Digital Strategies</strong> and <strong>Data Marketing</strong>, Visual Communication and branding, and the psychology behind user experience (UX).
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <a 
                href="#projects" 
                onClick={scrollToProjects}
                className="px-6 py-3 bg-black text-white font-medium text-sm tracking-wide hover:bg-brand-yellow hover:text-black transition-all duration-300 rounded-sm"
              >
                View Work
              </a>
              <a 
                href={SOCIAL_LINKS.linkedin}
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3 bg-transparent text-black border border-gray-200 font-medium text-sm tracking-wide hover:border-black transition-all duration-300 flex items-center gap-2 rounded-sm"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative h-[500px] w-full flex items-center justify-center lg:justify-end">
            {/* Card Wrapper: Handles sizing, perspective and hover group */}
            <div className="group relative w-full max-w-md aspect-[4/5] perspective-1000">
                {/* Flipper: Handles the rotation */}
                <div className="relative w-full h-full transition-all duration-700 transform-style-3d group-hover:[transform:rotateY(180deg)] shadow-xl lg:shadow-none">
                    
                    {/* Front Side - Logo (CSS Construction) */}
                    <div className="absolute inset-0 w-full h-full backface-hidden bg-white flex items-center justify-center border border-gray-100">
                       <div className="relative w-48 h-48">
                          {/* Yellow Triangle: Top Left */}
                          <div 
                             className="absolute inset-0 bg-brand-yellow" 
                             style={{ 
                               clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                               transform: 'translate(-16%, 6%) scale(0.9)' 
                             }}
                          ></div>
                          
                          {/* Black Triangle: Bottom Right */}
                          <div 
                             className="absolute inset-0 bg-black" 
                             style={{ 
                               clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                               transform: 'translate(16%, -6%) scale(0.9)'
                             }}
                          ></div>
                       </div>

                       {/* Flippable Hint Indicator */}
                       <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black text-brand-yellow text-[9px] font-extrabold tracking-[0.15em] uppercase py-1.5 px-3 rounded-full shadow-sm z-10 transition-all duration-500 group-hover:bg-brand-yellow group-hover:text-black">
                         <span>Flip</span>
                         <RotateCw size={11} className="transition-transform duration-1000 ease-out group-hover:rotate-[360deg]" />
                       </div>
                    </div>

                    {/* Back Side - Photo */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gray-100 overflow-hidden">
                        <img 
                            src="https://i.ibb.co/GQX95XqH/DSC-0058-2.jpg" 
                            alt="Zineb Kadrif" 
                            className="w-full h-full object-cover object-top grayscale"
                        />
                        {/* Flippable Hint Indicator */}
                        <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/70 backdrop-blur-sm text-brand-yellow text-[9px] font-extrabold tracking-[0.15em] uppercase py-1.5 px-3 rounded-full shadow-sm z-10 transition-all duration-500">
                          <span>Flip</span>
                          <RotateCw size={11} className="transition-transform duration-1000 ease-out group-hover:rotate-[360deg]" />
                        </div>
                    </div>

                </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse">
        <a href="#about" className="text-gray-400 hover:text-black transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
