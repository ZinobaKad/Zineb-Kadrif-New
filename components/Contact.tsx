
import React from 'react';
import SectionTitle from './SectionTitle';
import { SOCIAL_LINKS } from '../constants';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    const subject = encodeURIComponent(`New Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}`
    );
    
    window.location.href = `mailto:${SOCIAL_LINKS.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Let's work together<span className="text-brand-yellow">.</span></h2>
            <p className="text-xl text-gray-500 font-light mb-12">
                Available for freelance projects and full-time opportunities.
            </p>

            <form className="space-y-6 max-w-lg mx-auto text-left" onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text" 
                        name="name"
                        required
                        className="w-full bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-brand-yellow transition-colors placeholder-gray-400 text-black" 
                        placeholder="Your Name"
                    />
                </div>
                <div>
                    <input 
                        type="email" 
                        name="email"
                        required
                        className="w-full bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-brand-yellow transition-colors placeholder-gray-400 text-black" 
                        placeholder="Your Email"
                    />
                </div>
                <div>
                    <textarea 
                        rows={4}
                        name="message"
                        required
                        className="w-full bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-brand-yellow transition-colors placeholder-gray-400 resize-none text-black" 
                        placeholder="Tell me about your project..."
                    ></textarea>
                </div>
                
                <div className="pt-8 text-center">
                    <button 
                        type="submit" 
                        className="px-10 py-4 bg-black text-white font-medium hover:bg-brand-yellow hover:text-black transition-all duration-300 rounded-sm inline-flex items-center gap-2"
                    >
                        Send Message <Send size={16} />
                    </button>
                </div>
            </form>

            <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-12 text-sm text-gray-500">
                <div className="flex flex-col items-center">
                    <span className="font-bold text-black mb-1 uppercase tracking-widest text-[10px]">Email</span>
                    <a href={`mailto:${SOCIAL_LINKS.email}`} className="hover:text-brand-yellow transition-colors font-medium text-gray-600">{SOCIAL_LINKS.email}</a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Contact;
