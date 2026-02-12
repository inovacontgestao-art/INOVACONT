
import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal.tsx';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <section id="contato" className="py-32 scroll-mt-20">
        <div className="container mx-auto px-6 max-w-2xl text-center py-24 glass-card rounded-[48px] border border-violet-500/30">
          <div className="mb-8 inline-block p-6 bg-violet-600/20 text-violet-400 rounded-full shadow-[0_0_30px_rgba(139,92,246,0.3)]">
            <CheckCircle2 className="w-16 h-16" />
          </div>
          <h2 className="text-4xl font-black text-white mb-6 tracking-tighter">Conexão Estabelecida!</h2>
          <p className="text-gray-400 mb-10 text-xl font-medium leading-relaxed">
            Nossos consultores já receberam seus dados. Em breve, a Inovacont entrará em contato para iniciar sua transformação.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-violet-400 font-black uppercase tracking-widest hover:text-white transition-colors"
          >
            Nova Solicitação
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="py-32 scroll-mt-20">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row glass-card rounded-[48px] overflow-hidden border border-white/10 shadow-2xl">
            <div className="md:w-1/3 bg-white/5 p-12 md:p-16 border-r border-white/5 flex flex-col justify-center relative">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-violet-600/20 rounded-2xl flex items-center justify-center mb-10 border border-violet-500/30">
                  <Sparkles className="w-8 h-8 text-violet-400" />
                </div>
                <h2 className="text-4xl font-black mb-6 leading-[1.1] tracking-tighter text-white">Acione seu Diagnóstico.</h2>
                <p className="text-gray-400 text-lg mb-12 leading-relaxed font-medium">
                  Sincronize sua empresa com o futuro. Nossos especialistas estão prontos para analisar seu cenário.
                </p>
                <div className="space-y-6">
                  {[
                    "Dados Criptografados",
                    "Análise Estratégica",
                    "Retorno em < 24h"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-xl bg-violet-600/10 flex items-center justify-center text-xs font-black text-violet-400 border border-violet-500/20">
                        {i + 1}
                      </div>
                      <span className="font-black text-xs uppercase tracking-widest text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 p-12 md:p-16">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-500">Nome ou Empresa</label>
                    <input required type="text" placeholder="Identifique-se" className="w-full px-6 py-5 bg-white/5 border-2 border-transparent rounded-2xl focus:outline-none focus:border-violet-600 focus:bg-white/10 text-white transition-all font-medium placeholder:text-gray-700" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-500">WhatsApp</label>
                    <input required type="tel" placeholder="(74) 00000-0000" className="w-full px-6 py-5 bg-white/5 border-2 border-transparent rounded-2xl focus:outline-none focus:border-violet-600 focus:bg-white/10 text-white transition-all font-medium placeholder:text-gray-700" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-500">E-mail para Contato</label>
                  <input required type="email" placeholder="contato@exemplo.com" className="w-full px-6 py-5 bg-white/5 border-2 border-transparent rounded-2xl focus:outline-none focus:border-violet-600 focus:bg-white/10 text-white transition-all font-medium placeholder:text-gray-700" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-500">Serviço de Interesse</label>
                  <select id="servico-select" className="w-full px-6 py-5 bg-white/5 border-2 border-transparent rounded-2xl focus:outline-none focus:border-violet-600 focus:bg-white/10 text-white transition-all font-medium cursor-pointer appearance-none">
                    <option value="" className="bg-slate-950">Selecione o Sistema</option>
                    <option value="bpo-financeiro" className="bg-slate-950">BPO Financeiro</option>
                    <option value="contabil" className="bg-slate-950">Assessoria Contábil</option>
                    <option value="financeiro" className="bg-slate-950">Consultoria Financeira</option>
                    <option value="abertura" className="bg-slate-950">Abertura de Empresa</option>
                    <option value="irpf" className="bg-slate-950">Declaração IRPF</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-500">Breve Briefing</label>
                  <textarea rows={3} placeholder="Como podemos impulsionar seu negócio hoje?" className="w-full px-6 py-5 bg-white/5 border-2 border-transparent rounded-2xl focus:outline-none focus:border-violet-600 focus:bg-white/10 text-white transition-all resize-none font-medium placeholder:text-gray-700"></textarea>
                </div>
                <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-4 py-6 bg-white text-black rounded-2xl font-black text-lg hover:bg-violet-600 hover:text-white transition-all duration-500 disabled:opacity-50 shadow-xl shadow-white/5 transform hover:-translate-y-1">
                  {loading ? 'SINCRONIZANDO...' : 'ACIONAR CONSULTORIA'} <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactForm;
