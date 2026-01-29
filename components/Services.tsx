
import React from 'react';
import { SERVICES } from '../constants.tsx';
import { ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal.tsx';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 bg-purple-light/30">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E1065] mb-4">
              Soluções da Inovacont
            </h2>
            <p className="text-gray-600 text-lg">
              Atendimento especializado para transformar sua gestão financeira e tributária.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100} className="h-full">
              <div 
                className="bg-white p-8 rounded-3xl shadow-sm border border-purple-light hover:shadow-2xl transition-all flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-purple-light rounded-2xl flex items-center justify-center text-[#2E1065] mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2E1065] mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <a 
                  href="#contato"
                  onClick={() => {
                    const select = document.getElementById('servico-select') as HTMLSelectElement;
                    if (select) select.value = service.id;
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#2E1065] text-white rounded-xl font-bold hover:bg-violet-800 transition-colors shadow-lg shadow-violet-100"
                >
                  {service.buttonText} <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
