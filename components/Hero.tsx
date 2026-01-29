
import React from 'react';
import { ArrowRight, CheckCircle2, Activity } from 'lucide-react';
import { AUREA_IMAGE_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full bg-[#1A0044] -z-10 clip-path-hero">
        <div className="absolute inset-0 brand-pattern opacity-20"></div>
        {/* Glow behind Áurea */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/30 blur-[120px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-10 animate-fadeIn">
            <div className="inline-flex items-center gap-3 py-2 px-5 bg-violet-50 text-[#1A0044] font-black text-xs uppercase tracking-[0.3em] rounded-full border border-violet-100 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600"></span>
              </span>
              Gestão Consultiva & Compliance
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-[#1A0044] leading-[1.05] tracking-tighter">
              Contabilidade Estratégica e <span className="text-violet-600">Gestão Financeira</span> para Decisões Inteligentes.
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed font-medium max-w-xl">
              Segurança, controle e crescimento para o seu negócio. Unimos contabilidade consultiva e <strong>BPO Financeiro</strong> à agilidade da <strong>Áurea</strong> para garantir conformidade e lucro real.
            </p>
            
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row gap-5">
                <a 
                  href="#contato" 
                  className="inline-flex items-center justify-center gap-3 bg-[#1A0044] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-[#2D054B] transition-all shadow-2xl hover:shadow-violet-200 transform hover:-translate-y-1"
                >
                  Falar com um Especialista <ArrowRight className="w-6 h-6" />
                </a>
                <a 
                  href="#contato" 
                  className="inline-flex items-center justify-center gap-3 bg-white border-2 border-[#1A0044] text-[#1A0044] px-10 py-5 rounded-2xl font-black text-lg hover:bg-violet-50 transition-all"
                >
                  Diagnóstico Estratégico
                </a>
              </div>

              {/* Elemento de Ancoragem (Pilares) */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2">
                {[
                  "Contabilidade Estratégica",
                  "BPO Financeiro",
                  "Planejamento Tributário",
                  "Especialistas em Saúde"
                ].map((pilar, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[#1A0044] font-bold text-xs uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    {pilar}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-8 pt-6 border-t border-gray-100">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest leading-tight">
                Empresa líder em <br/><span className="text-[#1A0044]">BPO Financeiro e Contabilidade Consultiva</span>
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative group">
              {/* Photo Frame */}
              <div className="relative z-10 w-full aspect-[4/5] max-w-[550px] mx-auto overflow-hidden rounded-[60px] border-[12px] border-white shadow-2xl transition-all duration-1000 group-hover:shadow-violet-500/20">
                <img 
                  src={AUREA_IMAGE_URL} 
                  alt="Áurea - Inovacont Virtual Specialist" 
                  className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-[2s]"
                />
                
                {/* Overlay Name Tag */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A0044] via-[#1A0044]/40 to-transparent p-12 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-[2px] bg-violet-400"></div>
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-violet-200">Diferencial Tecnológico</span>
                  </div>
                  <h2 className="text-6xl font-black tracking-tighter">Áurea</h2>
                  <p className="text-violet-100/80 font-bold text-sm mt-1 uppercase tracking-widest italic">Suporte em Agilidade & Dados</p>
                </div>
              </div>

              {/* Status Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-[32px] shadow-2xl z-20 border border-violet-50 animate-bounce-slow">
                <div className="flex items-center gap-5">
                   <div className="relative">
                      <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center text-[#1A0044]">
                        <Activity className="w-8 h-8" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                   </div>
                   <div>
                      <p className="text-[#1A0044] font-black text-xl">Monitoramento</p>
                      <p className="text-gray-400 font-bold text-xs uppercase tracking-tighter">Análise em Tempo Real</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .clip-path-hero {
          clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
        @media (max-width: 1024px) {
          .clip-path-hero { display: none; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
