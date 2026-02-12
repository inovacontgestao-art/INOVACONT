
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

// Imagem que representa Contabilidade Digital e BPO Financeiro
export const AUREA_IMAGE_URL = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000";

export const DIFFERENTIALS: DifferentialProps[] = [
  {
    icon: <Activity />,
    title: "Engenharia Fiscal",
    description: "Atuação estratégica para reduzir riscos e otimizar tributos no limite máximo da legalidade."
  },
  {
    icon: <ShieldCheck />,
    title: "Compliance 360º",
    description: "Conformidade total como pilar de crescimento. Segurança jurídica para o seu próximo salto."
  },
  {
    icon: <Briefcase />,
    title: "Gestão Ágil",
    description: "Estruturação de processos e rotinas financeiras com foco em escalabilidade de mercado."
  },
  {
    icon: <Cpu />,
    title: "DNA Digital",
    description: "Atendimento consultivo potencializado por tecnologia de ponta e clareza absoluta."
  }
];

export const SERVICES: ServiceCardProps[] = [
  {
    id: "bpo-financeiro",
    icon: <BarChart3 className="w-6 h-6" />,
    title: "BPO Financeiro de Elite",
    description: "Terceirização completa. Gerenciamos contas a pagar, receber e conciliação bancária com relatórios em tempo real.",
    buttonText: "Acionar Gestão"
  },
  {
    id: "contabil",
    icon: <FileText className="w-6 h-6" />,
    title: "Assessoria Contábil Digital",
    description: "Contabilidade fiscal e gerencial estratégica para empresas que buscam eficiência tributária máxima.",
    buttonText: "Solicitar Diagnóstico"
  },
  {
    id: "financeiro",
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Consultoria Estratégica",
    description: "Apoio especializado na tomada de decisões, análise de rentabilidade e novos modelos de negócio.",
    buttonText: "Consultar Especialista"
  },
  {
    id: "irpf",
    icon: <UserCheck className="w-6 h-6" />,
    title: "IRPF de Alta Performance",
    description: "Declaração completa e análise detalhada de rendimentos com acompanhamento preventivo.",
    buttonText: "Regularizar IRPF"
  },
  {
    id: "regularizacao",
    icon: <Scale className="w-6 h-6" />,
    title: "Blindagem e Regularização",
    description: "Correção de pendências e recuperação de créditos tributários com conformidade plena.",
    buttonText: "Análise de Riscos"
  },
  {
    id: "abertura",
    icon: <Rocket className="w-6 h-6" />,
    title: "Abertura de Empresas Tech",
    description: "Processo ágil e seguro de constituição empresarial com foco no melhor regime tributário.",
    buttonText: "Lançar Empresa"
  }
];

export const PARTNERS = [
  { 
    name: "Áurea.tech", 
    icon: <Globe className="w-8 h-8" />,
    description: "Especialista em certificados digitais e sistemas personalizados para integração contábil.",
    highlight: "Tecnologia & Certificação"
  },
  { 
    name: "Áurea Security", 
    icon: <ShieldAlert className="w-8 h-8" />,
    description: "Unidade de Segurança do Trabalho (SST). Proteção jurídica com validade técnica absoluta.",
    highlight: "SST & Compliance"
  },
  { 
    name: "ACPROBEC", 
    icon: <Users className="w-8 h-8" />,
    description: "Networking estratégico e convênios exclusivos de saúde para parceiros Inovacont.",
    highlight: "Ecossistema de Benefícios"
  }
];
