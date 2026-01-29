
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
      <section id="contato" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-6 max-w-xl text-center py-20 bg-purple-light rounded-3xl border border-violet-200">
          <div className="mb-6 inline-block p-4 bg-green-100 text-green-600 rounded-full">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-bold text-[#1A0044] mb-4">Inovacont recebeu seus dados!</h2>
          <p className="text-gray-600 mb-8 font-medium">
            Obrigado! Nossa equipe já está analisando sua solicitação. Em breve entraremos em contato.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-[#1A0044] font-bold hover:underline"
          >
            Enviar outra mensagem
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row bg-purple-light rounded-[40px] overflow-hidden shadow-2xl border border-violet-100">
            <div className="md:w-1/3 bg-[#1A0044] p-12 text-white flex flex-col justify-center relative">
              <div className="absolute top-0 left-0 w-full h-full brand-pattern opacity-10 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/20">
                  <Sparkles className="w-8 h-8 text-violet-400" />
                </div>
                <h2 className="text-3xl font-black mb-6 leading-tight">Agilize seu diagnóstico.</h2>
                <p className="text-violet-200 text-lg mb-10 leading-relaxed font-medium">
                  Deixe seus dados para que nossa equipe organize suas informações e nossos consultores falem diretamente sobre o que você precisa.
                </p>
                <div className="space-y-6">
                  {[
                    "Seus dados protegidos",
                    "Análise em tempo real",
                    "Sem burocracia inicial"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-violet-800 flex items-center justify-center text-xs font-bold">
                        {i + 1}
                      </div>
                      <span className="font-bold text-sm text-violet-100">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 p-12 bg-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-[#1A0044]">Nome completo</label>
                    <input required type="text" placeholder="João Silva" className="w-full px-5 py-4 bg-purple-light/50 border-2 border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1A0044] focus:bg-white transition-all font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-[#1A0044]">WhatsApp</label>
                    <input required type="tel" placeholder="(00) 00000-0000" className="w-full px-5 py-4 bg-purple-light/50 border-2 border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1A0044] focus:bg-white transition-all font-medium" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-[#1A0044]">E-mail Corporativo</label>
                  <input required type="email" placeholder="seu@empresa.com" className="w-full px-5 py-4 bg-purple-light/50 border-2 border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1A0044] focus:bg-white transition-all font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-[#1A0044]">Serviço Desejado</label>
                  <select id="servico-select" className="w-full px-5 py-4 bg-purple-light/50 border-2 border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1A0044] focus:bg-white transition-all font-medium cursor-pointer">
                    <option value="">O que você busca hoje?</option>
                    <option value="bpo-financeiro">BPO Financeiro (Terceirização)</option>
                    <option value="irpf">Imposto de Renda (IRPF)</option>
                    <option value="contabil">Assessoria Contábil para Empresas</option>
                    <option value="financeiro">Consultoria Financeira</option>
                    <option value="regularizacao">Regularização Fiscal</option>
                    <option value="abertura">Abertura de Empresa</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-[#1A0044]">Mensagem (Opcional)</label>
                  <textarea rows={3} placeholder="Conte-nos um pouco sobre seu desafio atual..." className="w-full px-5 py-4 bg-purple-light/50 border-2 border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1A0044] focus:bg-white transition-all resize-none font-medium"></textarea>
                </div>
                <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-3 py-5 bg-[#1A0044] text-white rounded-2xl font-black text-lg hover:bg-violet-900 transition-all disabled:opacity-70 shadow-xl shadow-violet-100 transform hover:-translate-y-1">
                  {loading ? 'Sincronizando...' : 'Enviar Mensagem'} <Send className="w-5 h-5" />
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
