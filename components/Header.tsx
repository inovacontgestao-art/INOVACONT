
import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo.tsx';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-700 ${isScrolled ? 'py-4' : 'py-10'}`}>
      <div className="container mx-auto px-6">
        <div className={`flex justify-between items-center px-10 py-4 rounded-[24px] transition-all duration-700 ${isScrolled ? 'glass-card border-white/10 shadow-2xl' : 'bg-transparent border-transparent'}`}>
          <BrandLogo className="h-7" variant="white" />
          
          <nav className="hidden lg:flex gap-12 items-center">
            {['Diferenciais', 'Serviços', 'Parceiros'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-gray-500 hover:text-white font-black text-[10px] uppercase tracking-[0.4em] transition-all relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-violet-500 group-hover:w-full transition-all"></span>
              </a>
            ))}
            <a 
              href="#contato" 
              className="bg-white text-black px-8 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-violet-600 hover:text-white transition-all shadow-xl hover:shadow-violet-500/20"
            >
              COMEÇAR AGORA
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
