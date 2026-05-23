
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Blogs', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-3 group">
              {/* Logo Icon */}
              <div className="relative w-8 h-8 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                {/* Yellow Triangle: Top Left */}
                <div 
                   className="absolute inset-0 bg-brand-yellow transition-transform duration-300" 
                   style={{ 
                     clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                     transform: 'translate(-16%, 6%) scale(0.9)' 
                   }}
                ></div>
                
                {/* Black Triangle: Bottom Right */}
                <div 
                   className="absolute inset-0 bg-black transition-transform duration-300" 
                   style={{ 
                     clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                     transform: 'translate(16%, -6%) scale(0.9)'
                   }}
                ></div>
              </div>

              <span className="font-bold text-lg tracking-tight text-black group-hover:opacity-70 transition-opacity">ZINEB KADRIF</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-black hover:text-brand-yellow transition-colors duration-300 tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-xl font-medium text-black hover:text-brand-yellow transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;