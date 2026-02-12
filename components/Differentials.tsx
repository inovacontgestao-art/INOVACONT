
import React from 'react';
import { DIFFERENTIALS } from '../constants.tsx';
import ScrollReveal from './ScrollReveal.tsx';

const Differentials: React.FC = () => {
  return (
    <section id="diferenciais" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-24">
            <div className="inline-block mb-6 py-1.5 px-4 bg-violet-600/10 text-violet-400 text-[9px] font-black uppercase tracking-[0.5em] rounded-md border border-violet-600/20">
              DNA Tecnológico
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
              A INFRAESTRUTURA <br/> DO <span className="text-violet-500 italic">SUCESSO</span>.
            </h2>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIALS.map((diff, index) => (
            <ScrollReveal key={index} delay={index * 100} className="h-full">
              <div 
                className="p-12 glass-card rounded-[40px] border border-white/5 group hover:border-violet-500/50 transition-all duration-700 relative h-full flex flex-col"
              >
                <div className="mb-10 text-violet-400 group-hover:scale-110 group-hover:text-white transition-all duration-500">
                  {React.cloneElement(diff.icon as React.ReactElement<any>, { className: "w-10 h-10", strokeWidth: 1.5 })}
                </div>
                
                <h3 className="text-2xl font-black text-white mb-6 leading-tight tracking-tight">
                  {diff.title}
                </h3>
                
                <p className="text-gray-500 font-medium leading-relaxed group-hover:text-gray-300 transition-colors">
                  {diff.description}
                </p>

                <div className="mt-10 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-black uppercase tracking-widest text-violet-500">Recurso Core #0{index + 1}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
