
import React from 'react';
import { DIFFERENTIALS } from '../constants';
import ScrollReveal from './ScrollReveal';

const Differentials: React.FC = () => {
  return (
    <section id="diferenciais" className="py-24 bg-white brand-pattern-light">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-block mb-4 py-1 px-3 bg-[#1A0044] text-white text-[10px] font-black uppercase tracking-widest rounded-md">
              Excelência Operacional
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A0044] mb-6">
              Por que escolher a Inovacont?
            </h2>
            <div className="h-2 w-20 bg-violet-600 mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DIFFERENTIALS.map((diff, index) => (
            <ScrollReveal key={index} delay={index * 100} className="h-full">
              <div 
                className="p-10 bg-[#1A0044]/95 backdrop-blur-md rounded-[32px] border border-white/10 shadow-2xl transition-all group hover:-translate-y-2 relative overflow-hidden h-full"
              >
                {/* Efeito visual de brilho no hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="mb-8 relative z-10 inline-block p-5 bg-white/10 rounded-2xl text-white group-hover:bg-violet-600 group-hover:scale-110 transition-all duration-500 shadow-inner border border-white/5">
                  {React.cloneElement(diff.icon as React.ReactElement<any>, { className: "w-8 h-8 transition-colors" })}
                </div>
                
                <h3 className="text-2xl font-black text-white mb-5 relative z-10 leading-tight">
                  {diff.title}
                </h3>
                
                <p className="text-violet-100/70 font-medium leading-relaxed relative z-10">
                  {diff.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
