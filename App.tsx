
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Differentials from './components/Differentials';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Partners from './components/Partners';
import Footer from './components/Footer';
import AureaChat from './components/AureaChat';
import ScrollReveal from './components/ScrollReveal';
import { AUREA_IMAGE_URL } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div id="hero">
          <Hero />
        </div>
        
        <Differentials />
        
        <Services />
        
        {/* Intro Áurea Section */}
        <section className="py-24 bg-[#1A0044] text-white relative overflow-hidden">
          <div className="absolute inset-0 brand-pattern opacity-10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
              <div className="md:w-2/5">
                <ScrollReveal>
                  <div className="relative">
                    <div className="absolute -inset-10 bg-violet-600/30 blur-[100px] rounded-full"></div>
                    <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[40px] overflow-hidden border-8 border-white/10 shadow-2xl">
                      <img 
                        src={AUREA_IMAGE_URL} 
                        alt="Áurea" 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </ScrollReveal>
              </div>
              <div className="md:w-3/5 space-y-8">
                <ScrollReveal delay={200}>
                  <div className="inline-block py-1 px-4 bg-white/10 border border-white/20 rounded-full text-violet-300 font-black text-xs uppercase tracking-widest">
                    Inovação no DNA
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black leading-tight">
                    Áurea: Sua Porta de Entrada para a <span className="text-violet-400">Eficiência</span>
                  </h2>
                  <p className="text-violet-100 text-xl leading-relaxed font-medium">
                    Nossa assistente virtual utiliza inteligência estratégica para garantir que seu primeiro contato seja rápido, preciso e focado no que importa: a saúde do seu negócio.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      "Triagem Inteligente",
                      "Disponibilidade Total",
                      "Agendamento Instantâneo",
                      "Dados em Tempo Real"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                        <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
                        <span className="font-bold text-sm uppercase tracking-wider">{item}</span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />
        <Partners />
      </main>
      <Footer />
      
      {/* Smart Virtual Assistant Widget */}
      <AureaChat />
    </div>
  );
};

export default App;
