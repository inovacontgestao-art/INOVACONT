
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'white' | 'dark' | 'icon-only';
}

export const BrandIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M20 20L50 80L80 20" 
      stroke="white" 
      strokeWidth="12" 
      strokeLinecap="square"
      className="group-hover:stroke-violet-500 transition-colors"
    />
    <path 
      d="M35 20L50 50L65 20" 
      stroke="rgba(139,92,246,0.6)" 
      strokeWidth="8"
      strokeLinecap="square"
    />
  </svg>
);

export const BrandLogo: React.FC<LogoProps> = ({ className = "h-8", variant = 'dark' }) => {
  const textColor = variant === 'white' ? '#FFFFFF' : '#0F172A';
  
  if (variant === 'icon-only') {
    return <BrandIcon className={className} />;
  }

  return (
    <div className={`flex items-center gap-4 group cursor-pointer ${className}`}>
      <div className="h-full py-1">
        <BrandIcon className="h-full w-auto" />
      </div>
      <span 
        className="font-[900] tracking-[-0.08em] text-2xl uppercase" 
        style={{ color: textColor, fontFamily: 'Inter, sans-serif' }}
      >
        INOVA<span className="text-violet-500">CONT</span>
      </span>
    </div>
  );
};
