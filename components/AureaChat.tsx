
import React, { useState, useEffect } from 'react';
import { X, Send, Zap } from 'lucide-react';
import { AUREA_IMAGE_URL } from '../constants.tsx';

const AureaChat: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setShowBubble(true), 2000);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-6">
      {showBubble && (
        <div className="glass-card p-8 rounded-[40px] shadow-[0_0_100px_rgba(139,92,246,0.1)] border border-white/10 max-w-[360px] animate-fadeIn relative mb-4">
          <button 
            onClick={() => setShowBubble(false)}
            className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-[24px] overflow-hidden border-2 border-violet-500 shadow-[0_0_30px_rgba(139,92,246,0.4)]">
                   <img src={AUREA_IMAGE_URL} className="w-full h-full object-cover object-top" alt="Áurea AI" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-violet-600 rounded-lg p-1.5 shadow-xl">
                  <Zap className="w-3 h-3 text-white fill-current" />
                </div>
              </div>
              <div>
                <h5 className="text-white font-black text-xl tracking-tight">Núcleo Áurea</h5>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-green-500">Online e Pronta</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-400 font-medium text-sm leading-relaxed">
              "Protocolo de excelência ativado. Como posso otimizar seu fluxo tributário e financeiro hoje?"
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 p-3 rounded-2xl border border-white/5 text-center">
                <div className="text-[8px] font-black uppercase tracking-widest text-gray-500 mb-1">Tempo de Resposta</div>
                <div className="text-xs font-black text-white">&lt; 2s</div>
              </div>
              <div className="bg-white/5 p-3 rounded-2xl border border-white/5 text-center">
                <div className="text-[8px] font-black uppercase tracking-widest text-gray-500 mb-1">Precisão</div>
                <div className="text-xs font-black text-white">99.9%</div>
              </div>
            </div>
            
            <a 
              href="https://wa.me/5574999697652" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-5 bg-white text-black rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-violet-600 hover:text-white transition-all duration-500 shadow-xl"
            >
              INICIAR ATENDIMENTO <Send className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
      
      <button 
        onClick={() => setShowBubble(!showBubble)}
        className="group relative focus:outline-none"
      >
        <div className="absolute inset-0 bg-violet-600 rounded-[30px] animate-ping opacity-10 group-hover:opacity-0 transition-opacity"></div>
        <div className="glass-card w-24 h-24 rounded-[35px] shadow-2xl transition-all transform hover:scale-110 border-2 border-white/10 overflow-hidden flex items-center justify-center relative z-10 p-1">
           <img 
            src={AUREA_IMAGE_URL} 
            alt="Áurea AI"
            className="w-full h-full object-cover object-top rounded-[28px] scale-110 group-hover:scale-125 transition-transform duration-700"
          />
        </div>
      </button>
    </div>
  );
};

export default AureaChat;
