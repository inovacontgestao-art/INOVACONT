
import React from 'react';
import { 
  FileText, 
  Briefcase, 
  TrendingUp, 
  ShieldCheck, 
  Cpu, 
  UserCheck, 
  Activity, 
  Scale, 
  Rocket,
  BarChart3,
  Globe,
  Users,
  ShieldAlert
} from 'lucide-react';
import { ServiceCardProps, DifferentialProps } from './types';

// Imagem que representa Contabilidade Digital e BPO Financeiro (Dashboard, Tech, Professionalismo)
export const AUREA_IMAGE_URL = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000";

export const COLORS = {
  darkPurple: '#3B0764', // Tom do blazer da Áurea
  brandPurple: '#5B21B6',
  lightPurple: '#F5F3FF',
  white: '#FFFFFF',
};

export const DIFFERENTIALS: DifferentialProps[] = [
  {
    icon: <Activity />,
    title: "Otimização Fiscal e Contábil",
    description: "Atuação estratégica para reduzir riscos, corrigir falhas e otimizar tributos dentro da legalidade."
  },
  {
    icon: <ShieldCheck />,
    title: "Compliance como Base",
    description: "Conformidade fiscal, contábil e empresarial como pilar de qualquer crescimento sólido."
  },
  {
    icon: <Briefcase />,
    title: "Gestão e Organização Empresarial",
    description: "Estruturação de processos, rotinas financeiras e controle gerencial."
  },
  {
    icon: <Cpu />,
    title: "Atendimento Consultivo e Digital",
    description: "Tecnologia aliada à proximidade e clareza no atendimento."
  }
];

export const SERVICES: ServiceCardProps[] = [
  {
    id: "bpo-financeiro",
    icon: <BarChart3 className="w-6 h-6" />,
    title: "BPO Financeiro (Gestão Terceirizada)",
    description: "Terceirização completa do seu financeiro. Gerenciamos contas a pagar, receber e conciliação bancária, entregando relatórios de fluxo de caixa em tempo real.",
    buttonText: "Modernizar meu financeiro"
  },
  {
    id: "contabil",
    icon: <FileText className="w-6 h-6" />,
    title: "Assessoria Contábil para Empresas",
    description: "Contabilidade fiscal, gerencial e estratégica para empresas que buscam segurança jurídica e eficiência tributária máxima.",
    buttonText: "Solicitar diagnóstico empresarial"
  },
  {
    id: "financeiro",
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Consultoria Financeira e Empresarial",
    description: "Apoio especializado na tomada de decisões estratégicas, análise de rentabilidade e estruturação de novos modelos de negócio.",
    buttonText: "Solicitar consultoria"
  },
  {
    id: "irpf",
    icon: <UserCheck className="w-6 h-6" />,
    title: "Imposto de Renda – Pessoa Física",
    description: "Declaração completa, análise detalhada de rendimentos e acompanhamento preventivo junto à Receita Federal.",
    buttonText: "Preencher formulário de IRPF"
  },
  {
    id: "regularizacao",
    icon: <Scale className="w-6 h-6" />,
    title: "Apuração e Regularização Fiscal",
    description: "Correção de pendências, recuperação de créditos tributários e garantia de conformidade plena perante os órgãos reguladores.",
    buttonText: "Solicitar análise fiscal"
  },
  {
    id: "abertura",
    icon: <Rocket className="w-6 h-6" />,
    title: "Abertura e Organização de Empresas",
    description: "Processo ágil e seguro de constituição empresarial, desde a escolha do regime tributário até o registro final.",
    buttonText: "Iniciar abertura de empresa"
  }
];

export const PARTNERS = [
  { 
    name: "Áurea.tech", 
    icon: <Globe className="w-8 h-8" />,
    description: "Especialista em certificados digitais PF e PJ, sistemas personalizados e suporte a integrações de terceiros.",
    highlight: "Tecnologia & Certificação"
  },
  { 
    name: "Áurea Security", 
    icon: <ShieldAlert className="w-8 h-8" />,
    description: "Unidade especializada em Segurança do Trabalho e conformidade legal (SST). Proteção técnica e jurídica com validade de assinatura em laudos e programas obrigatórios.",
    highlight: "SST & Compliance Técnico"
  },
  { 
    name: "ACPROBEC", 
    icon: <Users className="w-8 h-8" />,
    description: "Associação de Profissionais Liberais e do Comércio. Benefícios exclusivos em convênios de saúde (HGU) e networking estratégico para associados.",
    highlight: "Benefícios & Convênios"
  }
];
