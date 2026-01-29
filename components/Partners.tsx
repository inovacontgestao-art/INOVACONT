
import React from 'react';
import { PARTNERS } from '../constants.tsx';
import ScrollReveal from './ScrollReveal.tsx';
import { ArrowUpRight } from 'lucide-react';

const Partners: React.FC = () => {
  return (
    <section id="parcerias" className="py-24 bg-white brand-pattern-light">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4 py-1 px-3 bg-[#1A0044] text-white text-[10px] font-black uppercase tracking-widest rounded-md">
              Ecossistema Inovacont
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A0044] mb-6">Alianças Estratégicas</h2>
            <p className="text-gray-600 text-lg font-medium leading-relaxed">
              Conectamos nossos clientes a um ecossistema de elite que garante proteção técnica, inovação digital e benefícios exclusivos.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {PARTNERS.map((partner, index) => (
            <ScrollReveal key={index} delay={index * 150} className="h-full">
              <div className="group relative bg-white p-8 rounded-[32px] border border-violet-100 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-violet-50 rounded-bl-full -z-0 opacity-50 group-hover:bg-violet-600 group-hover:opacity-10 transition-all duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3.5 bg-violet-100 rounded-xl text-[#1A0044] group-hover:bg-[#1A0044] group-hover:text-white transition-colors duration-500 shadow-inner">
                      {partner.icon}
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-violet-500 py-1 px-2.5 bg-violet-50 rounded-full border border-violet-100/50">
                      {partner.highlight}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-black text-[#1A0044] mb-3 flex items-center gap-2">
                    {partner.name}
                  </h3>
                  
                  <p className="text-gray-600 text-base font-medium leading-relaxed mb-6 flex-grow">
                    {partner.description}
                  </p>
                  
                  <div className="pt-5 border-t border-gray-50 flex items-center justify-between mt-auto">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-violet-600 transition-colors">
                      Unidade de Elite
                    </span>
                    <div className="w-8 h-8 rounded-full border border-violet-100 flex items-center justify-center group-hover:border-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
