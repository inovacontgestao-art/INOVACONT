
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'white' | 'dark' | 'icon-only';
}

export const BrandIcon: React.FC<{ className?: string, color?: string }> = ({ className, color = "currentColor" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Forma Superior - Inspirada no ícone oficial fornecido */}
    <path 
      d="M54 2C40 18 35 48 45 68L60 58C62 40 60 15 54 2Z" 
      fill={color}
    />
    {/* Forma Inferior - Espelhamento assimétrico para formar o 'S' abstrato */}
    <path 
      d="M46 98C60 82 65 52 55 32L40 42C38 60 40 85 46 98Z" 
      fill={color}
    />
  </svg>
);

export const BrandLogo: React.FC<LogoProps> = ({ className = "h-8", variant = 'dark' }) => {
  const color = variant === 'white' ? '#FFFFFF' : '#3B0764';
  
  if (variant === 'icon-only') {
    return <BrandIcon className={className} color={color} />;
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <BrandIcon className="h-full w-auto" color={color} />
      <span 
        className="font-black tracking-tighter text-2xl uppercase" 
        style={{ color, fontFamily: 'Inter, sans-serif' }}
      >
        Inovacont
      </span>
    </div>
  );
};
