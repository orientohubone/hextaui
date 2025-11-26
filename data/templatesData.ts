
import { Layout, Lock, ShoppingBag, BarChart3, Rocket, User, CreditCard, Layers } from 'lucide-react';

export interface TemplateItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
}

export interface CategoryData {
  title: string;
  description: string;
  items: TemplateItem[];
}

export const templatesData: Record<string, CategoryData> = {
  'landing-page': {
    title: 'Landing Pages',
    description: 'Páginas de alta conversão projetadas para capturar leads e apresentar produtos.',
    items: [
      {
        id: 'lp-1',
        title: 'SaaS Moderno',
        description: 'Template focado em conversão para startups de software com seções de features e pricing.',
        tags: ['SaaS', 'Dark Mode', 'Conversion'],
        gradient: 'from-blue-600 to-indigo-600'
      },
      {
        id: 'lp-2',
        title: 'Portfólio Criativo',
        description: 'Layout minimalista baseado em grid para designers e agências.',
        tags: ['Portfolio', 'Minimal', 'Gallery'],
        gradient: 'from-purple-600 to-pink-600'
      },
      {
        id: 'lp-3',
        title: 'App Mobile Launch',
        description: 'Destaque para screenshots de mobile com links para lojas de aplicativos.',
        tags: ['Mobile', 'App', 'Store'],
        gradient: 'from-green-500 to-emerald-700'
      },
      {
        id: 'lp-4',
        title: 'Crypto & Web3',
        description: 'Estética futurista com glassmorphism e efeitos neon para projetos blockchain.',
        tags: ['Web3', 'Crypto', 'Neon'],
        gradient: 'from-violet-600 to-fuchsia-600'
      },
      {
        id: 'lp-5',
        title: 'Evento & Webinar',
        description: 'Focado em contagem regressiva e registro de participantes.',
        tags: ['Event', 'Lead Gen', 'Date'],
        gradient: 'from-orange-500 to-red-600'
      }
    ]
  },
  'dashboard': {
    title: 'Dashboards',
    description: 'Interfaces administrativas complexas com gráficos e tabelas de dados.',
    items: [
      {
        id: 'dash-1',
        title: 'Analytics Pro',
        description: 'Visão geral de métricas com gráficos de área e KPIs em tempo real.',
        tags: ['Analytics', 'Charts', 'Data'],
        gradient: 'from-cyan-600 to-blue-700'
      },
      {
        id: 'dash-2',
        title: 'E-commerce Admin',
        description: 'Gestão de pedidos, inventário e clientes para lojas online.',
        tags: ['Shop', 'Admin', 'Orders'],
        gradient: 'from-emerald-600 to-teal-600'
      },
      {
        id: 'dash-3',
        title: 'CRM Pipeline',
        description: 'Visualização Kanban para gestão de vendas e leads.',
        tags: ['CRM', 'Kanban', 'Sales'],
        gradient: 'from-amber-600 to-orange-600'
      },
      {
        id: 'dash-4',
        title: 'Project Manager',
        description: 'Lista de tarefas, cronogramas e colaboração de equipe.',
        tags: ['Project', 'Team', 'Tasks'],
        gradient: 'from-indigo-600 to-violet-600'
      },
      {
        id: 'dash-5',
        title: 'Finanças & Wallet',
        description: 'Controle de transações, saldo e cartões virtuais.',
        tags: ['Finance', 'Wallet', 'Money'],
        gradient: 'from-slate-600 to-slate-800'
      }
    ]
  },
  'auth-forms': {
    title: 'Autenticação',
    description: 'Fluxos de login, registro e recuperação de senha seguros e bonitos.',
    items: [
      {
        id: 'auth-1',
        title: 'Split Screen Login',
        description: 'Imagem de marca à esquerda, formulário limpo à direita.',
        tags: ['Split', 'Login', 'Modern'],
        gradient: 'from-rose-600 to-pink-600'
      },
      {
        id: 'auth-2',
        title: 'Card Centralizado',
        description: 'Modal flutuante com suporte a login social.',
        tags: ['Card', 'Simple', 'Social'],
        gradient: 'from-blue-600 to-cyan-600'
      },
      {
        id: 'auth-3',
        title: 'Multi-step Register',
        description: 'Wizard de cadastro passo-a-passo com barra de progresso.',
        tags: ['Wizard', 'Steps', 'Onboarding'],
        gradient: 'from-violet-600 to-purple-600'
      },
      {
        id: 'auth-4',
        title: 'Glassmorphism Auth',
        description: 'Fundo desfocado com inputs translúcidos para sites artísticos.',
        tags: ['Glass', 'Blur', 'Artistic'],
        gradient: 'from-fuchsia-600 to-pink-600'
      },
      {
        id: 'auth-5',
        title: 'Passwordless Magic Link',
        description: 'Focado em email e envio de link mágico.',
        tags: ['Secure', 'Email', 'Minimal'],
        gradient: 'from-emerald-600 to-green-600'
      }
    ]
  },
  'ecommerce': {
    title: 'E-commerce',
    description: 'Componentes de loja virtual focados em experiência de compra.',
    items: [
      {
        id: 'ecom-1',
        title: 'Product Grid',
        description: 'Grade de produtos com filtros avançados e ordenação.',
        tags: ['Grid', 'Filter', 'Shop'],
        gradient: 'from-orange-500 to-amber-500'
      },
      {
        id: 'ecom-2',
        title: 'Product Detail',
        description: 'Galeria de imagens, seleção de variante e reviews.',
        tags: ['Details', 'Gallery', 'Reviews'],
        gradient: 'from-blue-500 to-indigo-500'
      },
      {
        id: 'ecom-3',
        title: 'Shopping Cart Slide',
        description: 'Carrinho lateral (drawer) que não interrompe a navegação.',
        tags: ['Cart', 'Drawer', 'UX'],
        gradient: 'from-teal-500 to-emerald-500'
      },
      {
        id: 'ecom-4',
        title: 'Checkout Flow',
        description: 'Checkout otimizado em 3 passos com resumo de pedido.',
        tags: ['Checkout', 'Payment', 'Conversion'],
        gradient: 'from-indigo-500 to-purple-500'
      },
      {
        id: 'ecom-5',
        title: 'Storefront Hero',
        description: 'Banner principal de loja com call-to-action promocional.',
        tags: ['Hero', 'Promo', 'Banner'],
        gradient: 'from-pink-500 to-rose-500'
      }
    ]
  }
};
