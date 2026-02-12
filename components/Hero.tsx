
import React from 'react';
import { ArrowRight, Cpu, Layers } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Elementos de Tecnologia ao Fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-violet-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-10">
            
            <div className="inline-flex items-center gap-3 py-2 px-5 glass-card rounded-full border border-white/10 animate-fadeIn">
              <span className="flex h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_10px_#06B6D4]"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400">O Novo Padrão da Contabilidade</span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-[900] leading-[0.85] tracking-tighter text-neon-gradient">
              NÃO É APENAS <br/> CONTABILIDADE. <br/> É <span className="italic">ENGENHARIA</span>.
            </h1>
            
            <div className="flex flex-col lg:flex-row items-center lg:items-end gap-12 w-full">
              <div className="lg:w-1/2">
                <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-xl">
                  Eliminamos o arcaico. Injetamos inteligência. <br/> A <span className="text-white font-bold">Inovacont</span> é a plataforma de aceleração para empresas que ignoram limites.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-10 justify-center lg:justify-start">
                  <a 
                    href="#contato" 
                    className="group relative flex items-center gap-4 bg-white text-black px-10 py-6 rounded-2xl font-black text-xl hover:bg-violet-500 hover:text-white transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                  >
                    ACIONAR MOTORES <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </a>
                  <a 
                    href="#servicos" 
                    className="glass-card flex items-center gap-3 text-white px-10 py-6 rounded-2xl font-black text-xl hover:bg-white/10 transition-all"
                  >
                    ECOSSISTEMA
                  </a>
                </div>
              </div>

              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                  {[
                    { label: 'Disponibilidade', val: '99.9%', icon: <Cpu className="w-4 h-4" /> },
                    { label: 'Crescimento', val: '+42%', icon: <Layers className="w-4 h-4" /> }
                  ].map((stat, i) => (
                    <div key={i} className="glass-card p-6 rounded-3xl border-white/5">
                      <div className="text-cyan-500 mb-2">{stat.icon}</div>
                      <div className="text-3xl font-black text-white">{stat.val}</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30">
        <span className="text-[10px] font-black uppercase tracking-widest">Explorar</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
