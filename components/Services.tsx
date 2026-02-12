
import React from 'react';
import { SERVICES } from '../constants.tsx';
import { ArrowUpRight, Hexagon } from 'lucide-react';
import ScrollReveal from './ScrollReveal.tsx';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-32 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="mb-24 flex flex-col md:flex-row items-baseline gap-6">
            <h2 className="text-7xl md:text-9xl font-black text-white tracking-tighter opacity-10 select-none uppercase">Sistemas</h2>
            <div className="md:-ml-32 relative z-10">
              <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-4">
                Soluções <span className="text-violet-500">Integradas</span>.
              </h3>
              <p className="text-xl text-gray-400 font-medium max-w-xl leading-relaxed">
                Nossas unidades de serviço operam de forma integrada, garantindo que cada bit de dado financeiro impulsione sua estratégia.
              </p>
            </div>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {SERVICES.map((service, index) => {
            // Criando variação de tamanho para o bento grid
            const isLarge = index === 0 || index === 3;
            return (
              <ScrollReveal 
                key={service.id} 
                delay={index * 100} 
                className={isLarge ? "md:col-span-8" : "md:col-span-4"}
              >
                <div className="glass-card p-10 rounded-[40px] group flex flex-col h-full relative overflow-hidden bento-item">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                    <Hexagon className="w-24 h-24 text-white" strokeWidth={0.5} />
                  </div>

                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-violet-400 mb-10 border border-white/10 group-hover:bg-violet-600 group-hover:text-white transition-all duration-700">
                    {service.icon}
                  </div>
                  
                  <div className="flex-grow">
                    <h4 className="text-3xl font-black text-white mb-6 tracking-tight group-hover:text-violet-400 transition-colors">
                      {service.title}
                    </h4>
                    <p className={`text-gray-400 font-medium leading-relaxed mb-10 ${isLarge ? 'max-w-xl' : ''}`}>
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-8 border-t border-white/5">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Núcleo de Serviço v2.0</span>
                    <a 
                      href="#contato"
                      className="w-12 h-12 rounded-full glass-card border-white/10 flex items-center justify-center text-white hover:bg-violet-600 hover:scale-110 transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
