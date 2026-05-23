
import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { PROJECTS, EXPERIENCES, LOVED_DESIGNS } from '../constants';
import { Project, Experience, GalleryItem } from '../types';
import Modal from './Modal';
import { Play, ExternalLink, ArrowUpRight, Instagram, Facebook, Video, Globe, ChevronLeft, ChevronRight, Construction, Maximize2 } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [selectedDesign, setSelectedDesign] = useState<GalleryItem | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeGalleryTab, setActiveGalleryTab] = useState<'all' | 'photography' | 'visual-design' | 'visual-narrative'>('all');

  const getPlatformIcon = (platform: string) => {
    const p = platform.toLowerCase();
    if (p.includes('instagram')) return <Instagram size={14} />;
    if (p.includes('facebook')) return <Facebook size={14} />;
    if (p.includes('tiktok')) return <Video size={14} />;
    return <Globe size={14} />;
  };

  const getYoutubeEmbedUrl = (url: string) => {
    let videoId = '';
    if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('youtube.com/watch')) {
        const urlParams = new URLSearchParams(url.split('?')[1]);
        videoId = urlParams.get('v') || '';
    }
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const nextSlide = () => {
    if (selectedProject?.sliderSlides) {
        setCurrentSlide((prev) => (prev + 1) % selectedProject.sliderSlides!.length);
    }
  };

  const prevSlide = () => {
    if (selectedProject?.sliderSlides) {
        setCurrentSlide((prev) => (prev - 1 + selectedProject.sliderSlides!.length) % selectedProject.sliderSlides!.length);
    }
  };

  const filteredGallery = activeGalleryTab === 'all' 
    ? LOVED_DESIGNS 
    : LOVED_DESIGNS.filter(item => item.category === activeGalleryTab);

  const galleryTabs = [
    { id: 'all', label: 'All' },
    { id: 'photography', label: 'Photography' },
    { id: 'visual-design', label: 'Visual Designs' },
    { id: 'visual-narrative', label: 'Visual Narratives' }
  ] as const;

  return (
    <section className="bg-gray-50 py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Experience Highlight */}
        <div id="experience" className="mb-24 scroll-mt-24">
             <SectionTitle title="Experience" subtitle="Professional timeline." />
             <div className="space-y-8">
                {EXPERIENCES.map((exp) => (
                    <div 
                        key={exp.id} 
                        className="group flex flex-col md:flex-row gap-6 md:gap-12 border-b border-gray-200 pb-8 last:border-0 hover:bg-white hover:p-6 transition-all duration-300 rounded-sm cursor-pointer relative"
                        onClick={() => setSelectedExperience(exp)}
                    >
                         {/* Hover indicator */}
                        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowUpRight size={20} className="text-brand-yellow" />
                        </div>

                        <div className="md:w-1/3">
                            <span className="text-sm text-gray-400 font-mono mb-2 block">{exp.date}</span>
                            <h3 className="text-xl font-bold text-black">{exp.company}</h3>
                            <p className="text-brand-yellow font-medium">{exp.role}</p>
                        </div>
                        <div className="md:w-2/3">
                            <div className="relative h-48 md:h-64 rounded-sm overflow-hidden bg-gray-100 group/box">
                                {exp.images && exp.images.length > 0 ? (
                                    <div className="flex w-full h-full">
                                        <div className="w-full h-full relative overflow-hidden">
                                            <img 
                                                src={exp.images[0].url} 
                                                alt={exp.company} 
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover/box:scale-110" 
                                            />
                                            {exp.images.length > 1 && (
                                                <div className="absolute top-2 right-2">
                                                    <div className="bg-black/60 text-brand-yellow p-1.5 rounded-full backdrop-blur-sm group-hover/box:scale-110 transition-transform duration-300">
                                                        <Maximize2 size={12} />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-gray-200">
                                        <p className="text-gray-400 text-sm font-medium">Click to view experience details</p>
                                    </div>
                                )}
                                
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/box:opacity-100 transition-opacity flex items-center justify-center">
                                    <div className="text-center transform translate-y-4 group-hover/box:translate-y-0 transition-transform duration-300">
                                        <p className="text-white font-bold uppercase tracking-widest text-xs mb-2">View Visuals & Case Study</p>
                                        <div className="h-1 w-12 bg-brand-yellow mx-auto"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
             </div>
        </div>

        <div id="projects" className="pt-10 scroll-mt-24">
            <SectionTitle title="Work" subtitle="Selected projects." />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {PROJECTS.map((project) => (
                <div 
                  key={project.id} 
                  className="group cursor-pointer"
                  onClick={() => {
                      setSelectedProject(project);
                      setCurrentSlide(0);
                  }}
                >
                <div className="aspect-[4/3] overflow-hidden mb-6 relative">
                    <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-3 right-3">
                        <div className="bg-black/60 text-brand-yellow p-1.5 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                            <Maximize2 size={14} />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between items-baseline mb-2">
                         <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow">{project.role}</span>
                         <span className="text-xs text-gray-400">{project.date.split('-')[1]?.trim() || project.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-black group-hover:text-brand-yellow transition-colors flex items-center gap-2">
                        {project.title}
                        <ArrowUpRight size={16} className="opacity-0 -translate-y-1 -translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </h3>
                    
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                        {project.description}
                    </p>
                </div>
                </div>
            ))}
            </div>

            {/* In Progress Section */}
            <div className="mt-20 py-16 border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center text-center bg-white/50 group hover:border-brand-yellow transition-colors duration-500">
                <div className="p-4 bg-gray-50 rounded-full mb-6 group-hover:bg-brand-yellow transition-colors duration-500">
                    <Construction className="text-gray-400 group-hover:text-black transition-colors" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-black mb-3 tracking-tight">Website Experience in Progress</h3>
                <p className="text-gray-500 font-light max-w-md mx-auto px-6">
                    I'm currently curating more projects and refining this digital space. Stay tuned for a deeper dive into my creative process and new case studies.
                </p>
                <div className="mt-8 flex gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-yellow animate-bounce"></span>
                    <span className="w-2 h-2 rounded-full bg-brand-yellow animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 rounded-full bg-brand-yellow animate-bounce [animation-delay:-0.3s]"></span>
                </div>
            </div>
        </div>

        {/* Gallery Section */}
        <div id="gallery" className="pt-24 scroll-mt-24">
            <SectionTitle title="Gallery" subtitle="Because I love my designs." />
            
            {/* Gallery Tabs */}
            <div className="flex flex-wrap gap-4 mb-10 border-b border-gray-200">
                {galleryTabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveGalleryTab(tab.id as any)}
                        className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all relative ${
                            activeGalleryTab === tab.id 
                            ? 'text-black' 
                            : 'text-gray-400 hover:text-black'
                        }`}
                    >
                        {tab.label}
                        {activeGalleryTab === tab.id && (
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-yellow animate-in fade-in slide-in-from-left-2 duration-300"></span>
                        )}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-500">
                {filteredGallery.map((item) => (
                    <div 
                        key={item.id} 
                        className="group relative aspect-square overflow-hidden bg-gray-100 rounded-sm cursor-pointer animate-in fade-in zoom-in duration-500"
                        onClick={() => setSelectedDesign(item)}
                    >
                        <img 
                            src={item.imageUrl} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                            <div className="text-center">
                                <span className="text-white font-bold tracking-widest uppercase text-xs block mb-1">
                                    {item.title}
                                </span>
                                <span className="text-brand-yellow font-bold uppercase text-[10px] tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                    {item.category.replace('-', ' ')}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>

      {/* Project Modal */}
      <Modal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
      >
        {selectedProject && (
          selectedProject.layout === 'report' ? (
             <div className="max-w-3xl mx-auto">
                <div className="mb-12 border-b border-gray-100 pb-8">
                     <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                         <div>
                             <h2 className="text-3xl font-bold text-black mb-2">{selectedProject.title}</h2>
                             <div className="flex items-center gap-3 text-sm">
                                 <span className="font-bold text-brand-yellow uppercase tracking-wider">{selectedProject.role}</span>
                                 <span className="text-gray-300">•</span>
                                 <span className="text-gray-500">{selectedProject.date}</span>
                             </div>
                         </div>
                         {selectedProject.demoUrl && (
                             <a href={selectedProject.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white hover:bg-brand-yellow hover:text-black transition-colors rounded-sm font-medium text-sm self-start">
                                 View Live <ExternalLink size={14} />
                             </a>
                         )}
                     </div>

                     {selectedProject.reportTitle && (
                       <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 leading-tight">
                         {selectedProject.reportTitle}
                       </h3>
                     )}

                     <p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
                        {selectedProject.fullDescription || selectedProject.description}
                     </p>

                     <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-gray-100 text-xs text-gray-600 rounded-full">
                                {tag}
                            </span>
                        ))}
                     </div>
                </div>

                <div className="space-y-16">
                    {selectedProject.sliderSlides?.map((slide, idx) => (
                        <div key={idx} className="space-y-6">
                            {slide.description && (
                                <div 
                                    className="prose prose-lg text-gray-800 font-light leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: slide.description }}
                                />
                            )}
                            
                            {slide.videoUrl && (
                                <div className="rounded-sm overflow-hidden bg-black aspect-video relative border border-gray-100 shadow-sm">
                                    <iframe 
                                       width="100%" 
                                       height="100%" 
                                       src={getYoutubeEmbedUrl(slide.videoUrl)}
                                       title={`Project Video ${idx}`}
                                       frameBorder="0" 
                                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                       allowFullScreen
                                    ></iframe>
                                </div>
                            )}

                            {slide.imageUrl && (
                                <div className={`overflow-hidden ${slide.imageSize === 'small' ? 'max-w-sm mx-auto' : 'w-full'}`}>
                                    <img 
                                        src={slide.imageUrl} 
                                        alt={`Project detail ${idx + 1}`} 
                                        className="w-full h-auto object-cover" 
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
             </div>
          ) : (
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6 flex flex-col group w-full">
                  {selectedProject.sliderSlides ? (
                    <div className="relative w-full flex flex-col items-center">
                        <div className="relative w-full flex justify-center items-start mb-6">
                            <img 
                                src={selectedProject.sliderSlides[currentSlide].imageUrl || ''} 
                                alt={`Slide ${currentSlide + 1}`} 
                                className="max-w-full max-h-[70vh] w-auto h-auto object-contain" 
                            />
                            
                            <button 
                                onClick={prevSlide} 
                                className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center hover:bg-black/5 rounded-full transition-colors opacity-0 group-hover:opacity-100 z-10"
                            >
                                <ChevronLeft size={24} className="text-black" />
                            </button>
                            <button 
                                onClick={nextSlide} 
                                className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center hover:bg-black/5 rounded-full transition-colors opacity-0 group-hover:opacity-100 z-10"
                            >
                                <ChevronRight size={24} className="text-black" />
                            </button>
                        </div>

                        <div className="flex justify-center gap-2">
                            {selectedProject.sliderSlides.map((_, idx) => (
                                <button 
                                    key={idx} 
                                    onClick={() => setCurrentSlide(idx)}
                                    className={`w-2 h-2 rounded-full transition-colors shadow-sm ${idx === currentSlide ? 'bg-brand-yellow' : 'bg-gray-300 hover:bg-brand-yellow/50'}`}
                                />
                            ))}
                        </div>
                    </div>
                  ) : selectedProject.videoUrl ? (
                    <div className="w-full aspect-video bg-black rounded-sm overflow-hidden">
                      <video controls className="w-full h-full object-cover">
                        <source src={selectedProject.videoUrl} type="video/mp4" />
                      </video>
                    </div>
                  ) : (
                    <div className="w-full aspect-square md:aspect-video overflow-hidden">
                        <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  
                  <div className="flex gap-4 w-full justify-center lg:justify-start">
                    {selectedProject.demoUrl && (
                        <a href={selectedProject.demoUrl} target="_blank" rel="noreferrer" className="px-6 py-3 bg-brand-yellow text-black font-medium text-sm hover:bg-black hover:text-white transition-colors flex items-center gap-2 rounded-sm">
                            <ExternalLink size={16} /> Live Demo
                        </a>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Overview</h4>
                  <div className="text-gray-800 leading-relaxed mb-8 text-lg font-light">
                    {selectedProject.sliderSlides ? (
                        <div dangerouslySetInnerHTML={{ __html: selectedProject.sliderSlides[currentSlide].description }} />
                    ) : (
                        <p>{selectedProject.fullDescription || selectedProject.description}</p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 text-xs text-gray-600 rounded-full">
                            {tag}
                        </span>
                    ))}
                  </div>

                  <div className="border-t border-gray-100 pt-6 grid grid-cols-2 gap-6 text-sm">
                        <div>
                            <span className="block text-gray-400 mb-1">Role</span>
                            <span className="font-medium text-black">{selectedProject.role}</span>
                        </div>
                        <div>
                            <span className="block text-gray-400 mb-1">Timeline</span>
                            <span className="font-medium text-black">{selectedProject.date}</span>
                        </div>
                  </div>
                </div>
             </div>
          )
        )}
      </Modal>

      <Modal
        isOpen={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
        title={selectedExperience?.company}
        maxWidth="max-w-7xl"
      >
        {selectedExperience && (
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                 <div className="lg:w-1/4 lg:shrink-0">
                     <div className="lg:sticky lg:top-0 space-y-6">
                         <div>
                             <h4 className="text-3xl font-bold text-black leading-tight mb-2">{selectedExperience.role}</h4>
                             <p className="text-brand-yellow font-medium text-lg">{selectedExperience.date}</p>
                         </div>
                         
                         <div className="w-12 h-1 bg-black rounded-full"></div>

                         <ul className="space-y-4 text-gray-600 font-light text-sm leading-relaxed">
                            {selectedExperience.description.map((item, i) => (
                                <li key={i} className="flex gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-brand-yellow rounded-full shrink-0"></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        {selectedExperience.relatedLinks && selectedExperience.relatedLinks.length > 0 && (
                             <div className="pt-6 mt-2 border-t border-gray-100 space-y-5">
                                {selectedExperience.relatedLinks.map((group, gIdx) => (
                                    <div key={gIdx}>
                                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                                            {group.groupName}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {group.links.map((link, lIdx) => (
                                                <a 
                                                    key={lIdx}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-xs font-medium text-black hover:text-white hover:bg-brand-yellow transition-all duration-300 bg-gray-50 px-3 py-1.5 rounded-sm border border-gray-100"
                                                >
                                                    {getPlatformIcon(link.platform)} {link.platform}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                             </div>
                        )}
                     </div>
                </div>
                
                {selectedExperience.images && selectedExperience.images.length > 0 && (
                    <div className="lg:w-3/4 space-y-12">
                        {selectedExperience.images.map((imgItem, idx) => {
                            const isContained = true; 
                            const isZoomed = idx === 0;

                            return (
                                <div key={idx} className="group relative">
                                    {imgItem.link ? (
                                        <a href={imgItem.link} target="_blank" rel="noreferrer" className="block relative">
                                            <img 
                                                src={imgItem.url} 
                                                alt={imgItem.alt || `Project Visual ${idx + 1}`} 
                                                className={`w-full h-auto ${isContained ? 'object-contain' : 'object-cover'} ${isZoomed ? 'scale-110' : ''}`} 
                                            />
                                            
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center pointer-events-none">
                                                <div className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                                                    View Document <ExternalLink size={14} />
                                                </div>
                                            </div>
                                        </a>
                                    ) : (
                                        <img 
                                            src={imgItem.url} 
                                            alt={imgItem.alt || `Project Visual ${idx + 1}`} 
                                            className={`w-full h-auto ${isContained ? 'object-contain' : 'object-cover'} ${isZoomed ? 'scale-110' : ''}`} 
                                        />
                                    )}
                                    
                                    {imgItem.alt && (
                                        <div className="mt-2 text-center px-4 py-2">
                                            <p className="text-xs text-gray-400 font-mono">{imgItem.alt}</p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        )}
      </Modal>

      {/* Gallery Modal */}
      <Modal
        isOpen={!!selectedDesign}
        onClose={() => setSelectedDesign(null)}
        title={selectedDesign?.category.replace('-', ' ')}
      >
        {selectedDesign && (
            <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
                <div className="w-full lg:w-3/5 flex items-center justify-center bg-gray-50 rounded-sm overflow-hidden border border-gray-100">
                    <img 
                        src={selectedDesign.imageUrl} 
                        alt={selectedDesign.title} 
                        className="max-w-full max-h-[75vh] object-contain"
                    />
                </div>
                <div className="w-full lg:w-2/5 space-y-6">
                    <div className="inline-block px-3 py-1 bg-brand-yellow/10 text-brand-yellow font-bold uppercase tracking-widest text-xs rounded-full">
                        {selectedDesign.category.replace('-', ' ')}
                    </div>
                    <h3 className="text-3xl font-bold text-black">{selectedDesign.title}</h3>
                    <div className="w-12 h-1 bg-black rounded-full"></div>
                    <p className="text-gray-600 font-light leading-relaxed text-lg">
                        {selectedDesign.description}
                    </p>
                    <div className="pt-6 border-t border-gray-100">
                        <p className="text-xs text-gray-400 font-mono uppercase tracking-widest">Collection: {selectedDesign.category}</p>
                    </div>
                </div>
            </div>
        )}
      </Modal>

    </section>
  );
};

export default Projects;
