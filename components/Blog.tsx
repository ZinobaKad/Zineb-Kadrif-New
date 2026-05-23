
import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';
import Modal from './Modal';
import { ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <SectionTitle title="Blog" subtitle="Insights and research." />
            <a href="#" className="hidden md:block text-sm font-medium hover:text-brand-yellow transition-colors mb-4">View All Archive</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {BLOG_POSTS.map((post) => (
            <article 
                key={post.id} 
                className="group cursor-pointer flex flex-col h-full"
                onClick={() => setSelectedPost(post)}
            >
              <div className="aspect-[3/2] overflow-hidden bg-gray-100 mb-6 rounded-sm">
                  <img 
                    src={post.imageUrl || `https://picsum.photos/seed/${post.id}/600/400`} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
              </div>

              <div className="flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3 uppercase tracking-wide">
                    <span className="text-brand-yellow font-bold">{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-black group-hover:text-brand-yellow transition-colors leading-tight">
                    {post.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 font-light">
                    {post.excerpt}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-sm font-medium text-black group-hover:text-brand-yellow transition-colors">
                    Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Blog Modal */}
      <Modal 
        isOpen={!!selectedPost} 
        onClose={() => setSelectedPost(null)}
        title={selectedPost?.category}
      >
        {selectedPost && (
            <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-brand-yellow">
                <div className="mb-8 pb-8 border-b border-gray-100">
                    <h1 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">{selectedPost.title}</h1>
                    <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <span>{selectedPost.date}</span>
                        <span>•</span>
                        <span>{selectedPost.readTime}</span>
                    </div>
                </div>
                
                {selectedPost.imageUrl && (
                    <div className="w-full aspect-video mb-10 overflow-hidden bg-gray-100 rounded-sm">
                        <img 
                            src={selectedPost.imageUrl} 
                            alt={selectedPost.title} 
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                <div 
                    className="text-gray-700 font-light leading-relaxed space-y-6"
                    dangerouslySetInnerHTML={{ __html: selectedPost.content }} 
                />
            </div>
        )}
      </Modal>

    </section>
  );
};

export default Blog;
