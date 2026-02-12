
import React from 'react';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { BrandLogo } from './BrandLogo.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="text-white pt-32 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-12 glass-card p-12 md:p-16 rounded-[48px] border border-white/10 shadow-2xl">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">Pronto para o próximo nível?</h2>
            <p className="text-violet-300 text-xl font-medium">Organização, compliance e estratégia para o seu crescimento.</p>
          </div>
          <a href="#contato" className="bg-white text-black px-12 py-6 rounded-2xl font-black text-xl hover:bg-violet-600 hover:text-white transition-all transform hover:scale-105 shadow-2xl hover:shadow-violet-500/20 whitespace-nowrap">
            👉 Falar com a Inovacont
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <BrandLogo className="h-8" variant="white" />
            <p className="text-gray-500 leading-relaxed font-medium">
              A Inovacont redefine a gestão financeira e contábil com inteligência estratégica e precisão tecnológica. Somos a aceleração do seu negócio.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center hover:bg-white/10 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center hover:bg-white/10 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-10 text-violet-500">Navegação</h3>
            <ul className="space-y-5 text-gray-400 font-bold text-sm">
              <li><a href="#hero" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#diferenciais" className="hover:text-white transition-colors">DNA Tecnológico</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Sistemas</a></li>
              <li><a href="#parcerias" className="hover:text-white transition-colors">Parceiros</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-10 text-violet-500">Serviços</h3>
            <ul className="space-y-5 text-gray-400 font-bold text-sm">
              <li><a href="#contato" className="hover:text-white transition-colors">BPO Financeiro</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Assessoria Contábil</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Consultoria</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Abertura de CNPJ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-10 text-violet-500">Terminal de Contato</h3>
            <ul className="space-y-6 text-gray-400 font-bold text-sm">
              <li className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-white/5 rounded-lg"><Mail className="w-4 h-4 text-violet-400" /></div>
                <span className="break-all">inovacont.gestao@gmail.com</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-white/5 rounded-lg"><Phone className="w-4 h-4 text-violet-400" /></div>
                <span>(74) 99969-7652</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-white/5 rounded-lg"><MapPin className="w-4 h-4 text-violet-400" /></div>
                <span>Juazeiro - BA<br/><span className="text-[10px] font-normal opacity-50 uppercase tracking-widest">Atendimento Digital em todo Brasil</span></span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 text-[10px] font-black uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Inovacont. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
