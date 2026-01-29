
import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';

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
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <BrandLogo className="h-9" variant="dark" />
        
        <nav className="hidden md:flex gap-10 items-center">
          <a href="#diferenciais" className="text-[#1A0044] hover:opacity-70 font-bold text-sm uppercase tracking-wider transition-all">Diferenciais</a>
          <a href="#servicos" className="text-[#1A0044] hover:opacity-70 font-bold text-sm uppercase tracking-wider transition-all">Serviços</a>
          <a href="#parcerias" className="text-[#1A0044] hover:opacity-70 font-bold text-sm uppercase tracking-wider transition-all">Parceiros</a>
          <a 
            href="#contato" 
            className="bg-[#1A0044] text-white px-7 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-violet-900 transition-all transform hover:scale-105 shadow-md"
          >
            Falar com Especialista
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
