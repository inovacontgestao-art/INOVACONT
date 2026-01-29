
import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { AUREA_IMAGE_URL } from '../constants';

const AureaChat: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setShowBubble(true), 1500);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-4">
      {showBubble && (
        <div className="bg-white p-6 rounded-[30px] shadow-[0_20px_50px_rgba(59,7,100,0.15)] border border-violet-100 max-w-[320px] animate-fadeIn relative mb-3">
          <button 
            onClick={() => setShowBubble(false)}
            className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow-lg hover:text-red-500 transition-colors border border-gray-50 text-gray-400"
          >
            <X className="w-3 h-3" />
          </button>
          
          <div className="flex gap-4 items-start mb-4">
            <div className="w-12 h-12 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-violet-100 shadow-inner">
               <img src={AUREA_IMAGE_URL} className="w-full h-full object-cover object-top" alt="Áurea" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#3B0764] font-black text-sm">Áurea</span>
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              </div>
              <p className="text-gray-600 font-bold text-sm leading-relaxed">
                Olá! Sou a sua assistente virtual. Vamos destravar o crescimento da sua empresa?
              </p>
            </div>
          </div>
          
          <a 
            href="https://wa.me/550000000000" 
            className="w-full py-3 bg-[#3B0764] text-white rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-violet-900 transition-all"
          >
            Iniciar Conversa <Send className="w-3 h-3" />
          </a>
          
          <div className="absolute bottom-[-10px] right-8 w-5 h-5 bg-white border-r border-b border-violet-100 rotate-45"></div>
        </div>
      )}
      
      <button 
        onClick={() => setShowBubble(!showBubble)}
        className="group relative focus:outline-none"
      >
        <div className="absolute inset-0 bg-violet-600 rounded-full animate-ping opacity-20 group-hover:opacity-0 transition-opacity"></div>
        <div className="bg-[#3B0764] w-20 h-20 rounded-[28px] shadow-2xl transition-all transform hover:scale-110 border-4 border-white overflow-hidden flex items-center justify-center relative z-10">
           <img 
            src={AUREA_IMAGE_URL} 
            alt="Áurea Chat"
            className="w-full h-full object-cover object-top scale-125"
          />
        </div>
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 border-4 border-white rounded-full z-20 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
        </div>
      </button>
    </div>
  );
};

export default AureaChat;
