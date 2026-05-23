
import React from 'react';
import { Facebook, Instagram, Linkedin, Music2 } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-8">
        
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-brand-yellow transition-colors">About</a>
            <a href="#experience" className="hover:text-brand-yellow transition-colors">Experience</a>
            <a href="#projects" className="hover:text-brand-yellow transition-colors">Projects</a>
            <a href="#gallery" className="hover:text-brand-yellow transition-colors">Gallery</a>
            <a href="#blog" className="hover:text-brand-yellow transition-colors">Blogs</a>
            <a href="#contact" className="hover:text-brand-yellow transition-colors">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-8">
            <a 
                href={SOCIAL_LINKS.facebook} 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-400 hover:text-brand-yellow transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
            >
                <Facebook size={22} />
            </a>
            <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-400 hover:text-brand-yellow transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
            >
                <Instagram size={22} />
            </a>
            <a 
                href={SOCIAL_LINKS.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-400 hover:text-brand-yellow transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
            >
                <Linkedin size={22} />
            </a>
            <a 
                href={SOCIAL_LINKS.tiktok} 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-400 hover:text-brand-yellow transition-all duration-300 hover:scale-110"
                aria-label="TikTok"
            >
                <Music2 size={22} />
            </a>
        </div>

        <div className="text-center text-gray-400 text-xs font-light">
           &copy; {new Date().getFullYear()} Zineb Kadrif. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
