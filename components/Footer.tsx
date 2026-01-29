
import React from 'react';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

const Footer: React.FC = () => {
  return (
    <footer className="brand-pattern text-white pt-24 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-10 bg-[#1A0044] p-12 rounded-[40px] border border-white/5 shadow-2xl">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-black mb-4">Pronto para o próximo nível?</h2>
            <p className="text-violet-200 text-xl font-medium">Organização, compliance e estratégia para o seu crescimento.</p>
          </div>
          <a 
            href="#contato" 
            className="bg-white text-[#1A0044] px-12 py-6 rounded-2xl font-black text-xl hover:bg-violet-50 transition-all transform hover:scale-105 shadow-2xl hover:shadow-white/20 whitespace-nowrap"
          >
            👉 Falar com a Inovacont
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <BrandLogo className="h-10" variant="white" />
            <p className="text-violet-100/70 leading-relaxed font-medium">
              Contabilidade inteligente e consultoria estratégica para empresas e pessoas que buscam crescimento sólido e segurança absoluta.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all border border-white/10">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all border border-white/10">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-black uppercase tracking-widest mb-8 text-violet-300">Navegação</h3>
            <ul className="space-y-4 text-violet-100/80 font-bold">
              <li><a href="#hero" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Soluções</a></li>
              <li><a href="#parcerias" className="hover:text-white transition-colors">Parceiros</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-black uppercase tracking-widest mb-8 text-violet-300">Soluções</h3>
            <ul className="space-y-4 text-violet-100/80 font-bold">
              <li><a href="#contato" className="hover:text-white transition-colors">Imposto de Renda</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Assessoria Contábil</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Gestão Financeira</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Abertura de CNPJ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-black uppercase tracking-widest mb-8 text-violet-300">Fale Conosco</h3>
            <ul className="space-y-5 text-violet-100/80 font-bold">
              <li className="flex items-start gap-4">
                <div className="mt-1"><Mail className="w-5 h-5 text-violet-400" /></div>
                <span>contato@inovacont.com.br</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1"><Phone className="w-5 h-5 text-violet-400" /></div>
                <span>(00) 00000-0000</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1"><MapPin className="w-5 h-5 text-violet-400" /></div>
                <span>São Paulo - SP<br/><span className="text-xs font-normal opacity-50 uppercase tracking-tighter">Atendimento em todo Brasil</span></span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-violet-400/60 text-xs font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Inovacont. Gestão e Estratégia.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
