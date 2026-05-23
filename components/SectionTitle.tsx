import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, alignment = 'left' }) => {
  const alignClass = alignment === 'center' ? 'text-center items-center' : alignment === 'right' ? 'text-right items-end' : 'text-left items-start';
  
  return (
    <div className={`flex flex-col mb-16 ${alignClass}`}>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-black mb-3">
        {title}<span className="text-brand-yellow">.</span>
      </h2>
      {subtitle && (
        <p className="text-gray-500 max-w-xl font-light text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;