
import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { SKILLS, EDUCATION, TOOLS } from '../constants';
import { Award, ExternalLink, Presentation, Maximize2 } from 'lucide-react';
import Modal from './Modal';

interface CapstoneData {
  title: string;
  description: string;
  slides: {
    description: string;
    image?: string;
    video?: string;
    colors?: {
      name: string;
      hex: string;
    }[];
  }[];
}

const About: React.FC = () => {
  const [activeCertificate, setActiveCertificate] = useState<'branding' | 'google_ads' | 'hubspot' | 'google_analytics' | null>(null);
  const [selectedCapstone, setSelectedCapstone] = useState<CapstoneData | null>(null);

  const getYoutubeEmbedUrl = (url: string) => {
    // Basic extraction for YouTube URLs
    let videoId = '';
    if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('youtube.com/watch')) {
        const urlParams = new URLSearchParams(url.split('?')[1]);
        videoId = urlParams.get('v') || '';
    }
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <section id="about" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Bio */}
          <div className="lg:col-span-5">
            <SectionTitle title="About" subtitle="Designing with purpose." />
            <div className="text-gray-600 font-light leading-relaxed space-y-6 text-lg">
              <p>
                I am a passionate <strong>Human-Centered Design thinker</strong> with a strong foundation in digital marketing, visual communication and digital media design. I leverage human psychology to build compelling branding and marketing strategies.
              </p>
              <p>
                My academic journey at <strong>Al Akhawayn University</strong> and practical experience in diverse industries have equipped me with a unique blend of creative and analytical skills.
              </p>
              
              <div className="pt-6 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Certifications</h4>
                <div className="flex flex-col gap-4">
                  <button 
                    onClick={() => setActiveCertificate('branding')}
                    className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 border border-gray-100 hover:border-brand-yellow/30 transition-all rounded-sm cursor-pointer text-left w-full focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 group"
                    aria-label="View Branding & UX Design Certificate"
                  >
                    <Award className="text-brand-yellow shrink-0 group-hover:scale-110 transition-transform duration-300" size={22} />
                    <div>
                      <p className="font-medium text-black text-sm group-hover:underline transition-colors leading-tight">Branding & UX Design</p>
                      <p className="text-xs text-gray-400 mt-1">Jan 2020</p>
                    </div>
                  </button>

                  <button 
                    onClick={() => setActiveCertificate('google_ads')}
                    className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 border border-gray-100 hover:border-brand-yellow/30 transition-all rounded-sm cursor-pointer text-left w-full focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 group"
                    aria-label="View Google Ads Measurement Certification"
                  >
                    <Award className="text-brand-yellow shrink-0 group-hover:scale-110 transition-transform duration-300" size={22} />
                    <div>
                      <p className="font-medium text-black text-sm group-hover:underline transition-colors leading-tight">Google Ads Measurement</p>
                      <p className="text-xs text-gray-400 mt-1">Certified Google Ads Expert</p>
                    </div>
                  </button>

                  <button 
                    onClick={() => setActiveCertificate('hubspot')}
                    className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 border border-gray-100 hover:border-brand-yellow/30 transition-all rounded-sm cursor-pointer text-left w-full focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 group"
                    aria-label="View HubSpot Marketing Hub Software Certification"
                  >
                    <Award className="text-brand-yellow shrink-0 group-hover:scale-110 transition-transform duration-300" size={22} />
                    <div>
                      <p className="font-medium text-black text-sm group-hover:underline transition-colors leading-tight">HubSpot Marketing Hub</p>
                      <p className="text-xs text-gray-400 mt-1">Certified Software Expert</p>
                    </div>
                  </button>

                  <button 
                    onClick={() => setActiveCertificate('google_analytics')}
                    className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 border border-gray-100 hover:border-brand-yellow/30 transition-all rounded-sm cursor-pointer text-left w-full focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 group"
                    aria-label="View Google Analytics Certification"
                  >
                    <Award className="text-brand-yellow shrink-0 group-hover:scale-110 transition-transform duration-300" size={22} />
                    <div>
                      <p className="font-medium text-black text-sm group-hover:underline transition-colors leading-tight">Google Analytics</p>
                      <p className="text-xs text-gray-400 mt-1">Certified Analytics Expert</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Skills & Education */}
          <div className="lg:col-span-7 space-y-16 mt-8 lg:mt-0">
            
            {/* Skills */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-8 text-gray-400">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-white border border-gray-200 text-sm text-gray-600 hover:bg-brand-yellow hover:border-brand-yellow hover:text-black transition-colors rounded-sm cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-8 text-gray-400">Education</h3>
              <div className="space-y-8 border-l border-gray-100 pl-8">
                {EDUCATION.map((edu, index) => (
                  <div key={index} className="relative">
                    <span className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-brand-yellow"></span>
                    <h4 className="text-lg font-bold text-black">{edu.degree}</h4>
                    <p className="text-gray-600 mb-1">{edu.institution}</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">{edu.date}</p>
                    {edu.concentration && (
                      <p className="text-sm text-gray-500">Concentration: {edu.concentration}</p>
                    )}
                    {edu.minor && (
                      <p className="text-sm text-gray-500">Minor: {edu.minor}</p>
                    )}

                    {/* Thesis Sub-section */}
                    {edu.thesis && (
                      <div className="mt-4 pt-4 border-t border-gray-50">
                          <a 
                            href={edu.thesis.link}
                            target="_blank"
                            rel="noreferrer"
                            className="group block"
                          >
                             <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow mb-1 block">Research Thesis</span>
                             <h5 className="font-bold text-black group-hover:text-brand-yellow transition-colors">{edu.thesis.title}</h5>
                             <p className="text-sm text-gray-500 mt-1 mb-2 font-light">{edu.thesis.description}</p>
                             <span className="inline-flex items-center gap-1 text-xs font-bold border-b border-brand-yellow pb-0.5 group-hover:border-transparent transition-all">
                               Access Thesis <ExternalLink size={12} />
                             </span>
                          </a>
                      </div>
                    )}

                    {/* Capstone Sub-section */}
                    {edu.capstone && (
                      <div className="mt-8 pt-6 border-t border-gray-50">
                          <button 
                            onClick={() => setSelectedCapstone(edu.capstone || null)}
                            className="group block text-left w-full focus:outline-none"
                          >
                             <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                               <div className="md:col-span-12">
                                 <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow mb-1 block">Capstone Design Project</span>
                                 <h5 className="font-bold text-black group-hover:text-brand-yellow transition-colors text-lg mb-4">{edu.capstone.title}</h5>
                               </div>
                               
                               <div className="md:col-span-12">
                                  <div className="relative h-48 md:h-64 rounded-sm overflow-hidden bg-gray-100 group/box">
                                      {/* Find first image in slides */}
                                      {(() => {
                                        const firstImageSlide = edu.capstone.slides.find(s => s.image);
                                        const imageCount = edu.capstone.slides.filter(s => s.image).length;
                                        
                                        if (firstImageSlide && firstImageSlide.image) {
                                          return (
                                            <div className="w-full h-full relative">
                                                <img 
                                                  src={firstImageSlide.image} 
                                                  alt={edu.capstone.title} 
                                                  className="w-full h-full object-cover transition-transform duration-700 group-hover/box:scale-110" 
                                                />
                                                {imageCount > 1 && (
                                                  <div className="absolute top-2 right-2">
                                                      <div className="bg-black/60 text-brand-yellow p-1.5 rounded-full backdrop-blur-sm group-hover/box:scale-110 transition-transform duration-300">
                                                          <Maximize2 size={12} />
                                                      </div>
                                                  </div>
                                                )}
                                            </div>
                                          );
                                        }
                                        return (
                                          <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-gray-200">
                                              <p className="text-gray-400 text-sm font-medium">Click to view project details</p>
                                          </div>
                                        );
                                      })()}

                                      {/* Overlay on hover */}
                                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/box:opacity-100 transition-opacity flex items-center justify-center">
                                          <div className="text-center transform translate-y-4 group-hover/box:translate-y-0 transition-transform duration-300">
                                              <p className="text-white font-bold uppercase tracking-widest text-xs mb-2">View Visuals & Branding Strategy</p>
                                              <div className="h-1 w-12 bg-brand-yellow mx-auto"></div>
                                          </div>
                                      </div>
                                  </div>
                               </div>
                             </div>
                          </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Tools Slider */}
        <div className="mt-32 border-t border-gray-50 pt-16">
           <p className="text-sm font-bold uppercase tracking-widest mb-12 text-gray-400 text-center">Platforms & Tools</p>
           
           <div className="relative w-full overflow-hidden mask-gradient">
              <div className="flex w-max animate-scroll hover:pause">
                {/* Double the list for seamless loop */}
                {[...TOOLS, ...TOOLS].map((tool, index) => (
                  <div key={index} className="flex flex-col items-center justify-center mx-10 w-24 group">
                    <div className="w-12 h-12 mb-4 opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 flex items-center justify-center">
                      <img 
                        src={`${tool.icon}/000000`} 
                        alt={tool.name} 
                        className="max-w-full max-h-full object-contain" 
                        onError={(e) => {
                          // Fallback to default if colored/black version fails
                          (e.currentTarget as HTMLImageElement).src = tool.icon;
                        }}
                      />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-medium">
                        {tool.name}
                    </span>
                  </div>
                ))}
              </div>
           </div>
        </div>

      </div>

      {/* Certificate Modal */}
      <Modal 
        isOpen={activeCertificate !== null} 
        onClose={() => setActiveCertificate(null)}
        title={
          activeCertificate === 'branding' 
            ? "Branding & UX Design Certificate" 
            : activeCertificate === 'google_ads' 
            ? "Google Ads Measurement Certification" 
            : activeCertificate === 'hubspot'
            ? "HubSpot Marketing Hub Software Certification"
            : "Google Analytics Certification"
        }
      >
         <div className="flex justify-center items-center bg-gray-50 p-4 sm:p-8 rounded-sm overflow-x-hidden">
            {activeCertificate === 'branding' ? (
              <img 
                src="https://i.ibb.co/tprrh4fb/Document-2.jpg" 
                alt="Certificate in Branding & UX Design" 
                className="max-w-full max-h-[70vh] w-auto h-auto object-contain shadow-lg rounded-sm"
                referrerPolicy="no-referrer"
              />
            ) : activeCertificate === 'google_ads' ? (
              <div className="bg-white p-3 sm:p-5 rounded-sm border border-gray-100 max-w-2xl w-full text-center relative overflow-hidden select-none shadow-md">
                
                {/* Embed Image */}
                <div className="flex justify-center mb-6 bg-gray-50 p-2 sm:p-4 rounded-sm border border-gray-100">
                  <img 
                    src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/183350269" 
                    alt="Google Ads Measurement Certification"
                    className="max-w-full max-h-[60vh] w-auto h-auto object-contain shadow-sm rounded-sm"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Certificate footer details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left border-t border-gray-100 pt-5 mt-5">
                  <div className="space-y-1 font-mono text-[11px] text-gray-400">
                    <p><span className="font-sans font-semibold text-gray-500">Issuer:</span> Google Professional Academy</p>
                    <p><span className="font-sans font-semibold text-gray-500">Credential ID:</span> 183350269</p>
                    <p><span className="font-sans font-semibold text-gray-500">Verified Platform:</span> Accredible</p>
                  </div>
                  
                  {/* Verified Link */}
                  <div className="flex sm:justify-end items-end">
                    <a 
                      href="https://credential.net/183350269" 
                      target="_blank" 
                      rel="noreferrer"
                      referrerPolicy="no-referrer"
                      className="flex items-center gap-2 border border-gray-100 hover:border-brand-yellow/30 px-4 py-2 rounded bg-gray-50 hover:bg-gray-100 transition-colors w-full sm:w-auto justify-center text-center group"
                    >
                      <div className="text-[10px] text-left font-mono text-gray-500">
                        <span className="block font-bold text-black font-sans uppercase tracking-widest leading-none mb-0.5 group-hover:text-brand-yellow transition-colors">Verify</span>
                        Accredible Portal
                      </div>
                      <ExternalLink size={12} className="text-gray-400 group-hover:text-black transition-colors" />
                    </a>
                  </div>
                </div>

              </div>
            ) : activeCertificate === 'hubspot' ? (
              <div className="bg-white p-6 sm:p-10 rounded-sm border border-gray-100 max-w-xl w-full text-center relative overflow-hidden select-none shadow-md">
                
                {/* HubSpot Badge */}
                <div className="flex justify-center mb-8">
                  <a 
                    href="https://app-eu1.hubspot.com/academy/achievements/rppyf6b4/en/1/kadrif-zineb/hubspot-marketing-hub-software-certified" 
                    target="_blank" 
                    rel="noreferrer"
                    className="block group cursor-pointer transition-transform duration-300 hover:scale-105"
                    referrerPolicy="no-referrer"
                    title="Verify HubSpot Marketing Hub Software Certified"
                  >
                    <img 
                      src="https://hubspot-credentials-na1.s3.amazonaws.com/prod/badges/user/55597afd98454720b4c004dc2d912409.png" 
                      alt="HubSpot Marketing Hub Software Certified"
                      className="w-40 h-40 object-contain mx-auto"
                      referrerPolicy="no-referrer"
                    />
                  </a>
                </div>

                {/* Certificate content */}
                <p className="text-gray-400 text-xs font-light uppercase tracking-[0.2em] mb-3">This acknowledges that</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-4 font-sans">Kadrif Zineb</h3>
                
                <p className="text-gray-400 text-xs font-light uppercase tracking-[0.2em] mb-3">has successfully completed and is certified in</p>
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 tracking-tight mb-8">HubSpot Marketing Hub Software</h4>

                {/* Certificate footer details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left border-t border-gray-100 pt-6 mt-8">
                  <div className="space-y-1 font-mono text-[11px] text-gray-400">
                    <p><span className="font-sans font-semibold text-gray-500">Issuer:</span> HubSpot Academy</p>
                    <p><span className="font-sans font-semibold text-gray-500">Verification Link:</span> <span className="text-brand-yellow hover:underline break-all">App-eu1.hubspot.com</span></p>
                  </div>
                  
                  {/* Verified Badge / Link button */}
                  <div className="flex sm:justify-end items-end">
                    <a 
                      href="https://app-eu1.hubspot.com/academy/achievements/rppyf6b4/en/1/kadrif-zineb/hubspot-marketing-hub-software-certified"
                      target="_blank"
                      rel="noreferrer"
                      referrerPolicy="no-referrer"
                      className="flex items-center gap-2 border border-gray-100 hover:border-brand-yellow/30 px-4 py-2 rounded bg-gray-50 hover:bg-gray-100 transition-colors w-full sm:w-auto justify-center text-center group"
                    >
                      <div className="text-[10px] text-left font-mono text-gray-500">
                        <span className="block font-bold text-black font-sans uppercase tracking-widest leading-none mb-0.5 group-hover:text-brand-yellow transition-colors">Verify</span>
                        HubSpot Academy
                      </div>
                      <ExternalLink size={12} className="text-gray-400 group-hover:text-black transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white p-3 sm:p-5 rounded-sm border border-gray-100 max-w-2xl w-full text-center relative overflow-hidden select-none shadow-md">
                
                {/* Embed Image */}
                <div className="flex justify-center mb-6 bg-gray-50 p-2 sm:p-4 rounded-sm border border-gray-100">
                  <img 
                    src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/183308840" 
                    alt="Google Analytics Certification"
                    className="max-w-full max-h-[60vh] w-auto h-auto object-contain shadow-sm rounded-sm"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Certificate footer details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left border-t border-gray-100 pt-5 mt-5">
                  <div className="space-y-1 font-mono text-[11px] text-gray-400">
                    <p><span className="font-sans font-semibold text-gray-500">Issuer:</span> Google Professional Academy</p>
                    <p><span className="font-sans font-semibold text-gray-500">Credential ID:</span> 183308840</p>
                    <p><span className="font-sans font-semibold text-gray-500">Verified Platform:</span> Accredible</p>
                  </div>
                  
                  {/* Verified Link */}
                  <div className="flex sm:justify-end items-end">
                    <a 
                      href="https://credential.net/183308840" 
                      target="_blank" 
                      rel="noreferrer"
                      referrerPolicy="no-referrer"
                      className="flex items-center gap-2 border border-gray-100 hover:border-brand-yellow/30 px-4 py-2 rounded bg-gray-50 hover:bg-gray-100 transition-colors w-full sm:w-auto justify-center text-center group"
                    >
                      <div className="text-[10px] text-left font-mono text-gray-500">
                        <span className="block font-bold text-black font-sans uppercase tracking-widest leading-none mb-0.5 group-hover:text-brand-yellow transition-colors">Verify</span>
                        Accredible Portal
                      </div>
                      <ExternalLink size={12} className="text-gray-400 group-hover:text-black transition-colors" />
                    </a>
                  </div>
                </div>

              </div>
            )}
         </div>
      </Modal>

      {/* Capstone Presentation Modal */}
      <Modal 
        isOpen={!!selectedCapstone} 
        onClose={() => setSelectedCapstone(null)}
        title="Capstone Project"
      >
        {selectedCapstone && (
          <div className="space-y-8">
            <div className="border-b border-gray-100 pb-6">
                <h3 className="text-2xl font-bold mb-2 text-black">{selectedCapstone.title}</h3>
                <div 
                  className="text-gray-600 font-light leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: selectedCapstone.description }}
                />
            </div>
            
            <div className="space-y-12">
               {selectedCapstone.slides.map((slide, idx) => (
                  <div key={idx} className="space-y-3">
                     <p 
                       className="font-medium text-black text-lg border-l-4 border-brand-yellow pl-3"
                       dangerouslySetInnerHTML={{ __html: slide.description }}
                     />
                     
                     {/* Render Image Slide */}
                     {slide.image && (
                       <div className="bg-gray-50 rounded-sm shadow-sm overflow-hidden border border-gray-100">
                          <img 
                            src={slide.image} 
                            alt={`Capstone Presentation Slide ${idx + 1}`} 
                            className="w-full h-auto" 
                          />
                       </div>
                     )}

                     {/* Render Video Slide */}
                     {slide.video && (
                       <div className="bg-black rounded-sm shadow-sm overflow-hidden border border-gray-100 aspect-video">
                          {slide.video.includes('youtu') ? (
                             <iframe 
                               width="100%" 
                               height="100%" 
                               src={getYoutubeEmbedUrl(slide.video)}
                               title="Capstone Video" 
                               frameBorder="0" 
                               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                               allowFullScreen
                             ></iframe>
                          ) : (
                             <video controls className="w-full h-full">
                                <source src={slide.video} type="video/mp4" />
                             </video>
                          )}
                       </div>
                     )}

                     {/* Render Color Palette Slide */}
                     {slide.colors && (
                       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                          {slide.colors.map((color, cIdx) => (
                             <div key={cIdx} className="space-y-2">
                                <div 
                                  className="w-full h-32 rounded-sm shadow-sm border border-gray-200" 
                                  style={{ backgroundColor: color.hex }}
                                ></div>
                                <div className="text-center">
                                  <p className="font-bold text-sm text-black">{color.name}</p>
                                  <p className="text-xs text-gray-500 uppercase font-mono">{color.hex}</p>
                                </div>
                             </div>
                          ))}
                       </div>
                     )}
                  </div>
               ))}
            </div>
          </div>
        )}
      </Modal>

    </section>
  );
};

export default About;