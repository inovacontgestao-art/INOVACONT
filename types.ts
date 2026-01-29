// Add missing React import
import React from 'react';

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  id: string;
}

export interface DifferentialProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FormData {
  nome: string;
  whatsapp: string;
  email: string;
  servico: string;
  mensagem: string;
}