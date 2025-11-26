
import React from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { Alert, AlertTitle, AlertDescription } from '../components/ui/Alert';
import { AlertCircle, CheckCircle2, Info, Plus, Settings, User, CreditCard, LogOut, Keyboard, UserPlus, Mail, MessageSquare, PlusCircle, Rocket } from 'lucide-react';
import { Avatar } from '../components/ui/Avatar';
import { Switch } from '../components/ui/Switch';
import { Textarea } from '../components/ui/Textarea';
import { Checkbox } from '../components/ui/Checkbox';
import { Skeleton } from '../components/ui/Skeleton';
import { Select } from '../components/ui/Select';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/Accordion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs';
import { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogContent, DialogTrigger } from '../components/ui/Dialog';
import { Sheet, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetContent, SheetTrigger } from '../components/ui/Sheet';
import { Progress } from '../components/ui/Progress';
import { Separator } from '../components/ui/Separator';
import { Tooltip } from '../components/ui/Tooltip';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../components/ui/Table';
import { Label } from '../components/ui/Label';
import { RadioGroup, RadioGroupItem } from '../components/ui/RadioGroup';
import { Slider } from '../components/ui/Slider';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../components/ui/Breadcrumb';
import { ScrollArea } from '../components/ui/ScrollArea';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/Popover';
import { AspectRatio } from '../components/ui/AspectRatio';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../components/ui/Collapsible';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '../components/ui/HoverCard';
import { Toggle } from '../components/ui/Toggle';
import { ToggleGroup, ToggleGroupItem } from '../components/ui/ToggleGroup';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '../components/ui/DropdownMenu';
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from '../components/ui/ContextMenu';
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator } from '../components/ui/Menubar';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from '../components/ui/NavigationMenu';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '../components/ui/Command';

// New Imports
import { KpiCard } from '../components/ui/KpiCard';
import { PricingCard } from '../components/ui/PricingCard';
import { Timeline } from '../components/ui/Timeline';
import { GlassCard } from '../components/ui/GlassCard';
import { PhoneMockup } from '../components/ui/PhoneMockup';
import { GridPattern } from '../components/ui/GridPattern';
import { BorderBeam } from '../components/ui/BorderBeam';
import { AnimatedBadge } from '../components/ui/AnimatedBadge';
import { 
    AxionAtom, AxionHex, AxionCircuit, AxionPulse, AxionShield, AxionSpark,
    AxMenu, AxClose, AxChevronDown, AxArrowRight, AxHome, AxSearch, AxPlus, AxTrash,
    AxCheck, AxAlert, AxInfo, AxError, AxLoader, AxSettings, AxMaximize, AxMinimize, AxPin, AxLogin, AxBookmark,
    AxUser, AxHeart, AxStar, AxEye, AxDownload, AxCopy,
    AxSidebar, AxGrid, AxList, AxExternal, AxRefresh, AxLock, AxLogout,
    AxMail, AxMessage, AxSend, AxBell, AxShare, AxLink, AxThumbsUp, AxPhone, AxVideo, AxCamera, AxMic,
    AxFile, AxFileText, AxFolder, AxFolderOpen, AxCloud, AxImage, AxFileCode, AxFilePdf, AxArchive,
    AxCart, AxShoppingBag, AxCreditCard, AxDollar, AxTag, AxGift, AxTrendingUp, AxBarChart, AxPieChart, AxPackage,
    AxWifi, AxBattery, AxBluetooth, AxVolume, AxBrightness, AxMonitor, AxSmartphone, AxKeyboard, AxDatabase, AxPower,
    AxCalendar, AxClock, AxTimer, AxHistory, AxSun, AxMoon,
    AxPlay, AxPause, AxStop, AxSkipForward, AxSkipBack, AxMusic, AxHeadphones,
    AxMapPin, AxGlobe,
    AxUsers, AxUserPlus, AxUserMinus, AxUserCheck, AxTeam, AxCrown, AxAward, AxBadgeIcon,
    AxEdit, AxSave, AxUndo, AxRedo, AxBold, AxItalic, AxQuote, AxFilter, AxSort, AxMoreHorizontal, AxMoreVertical
} from '../components/ui/Icons';

// Tipos para a estrutura da documentação
export interface DocPage {
  title: string;
  description: string;
  content: React.ReactNode;
  type: 'component' | 'guide';
}

export interface SidebarCategory {
  title: string;
  items: { label: string; slug: string; disabled?: boolean }[];
}

// Estrutura da Sidebar
export const sidebarData: SidebarCategory[] = [
  {
    title: 'Começando',
    items: [
      { label: 'Introdução', slug: 'introduction' },
      { label: 'Instalação', slug: 'installation' },
      { label: 'Publicando no NPM', slug: 'publishing' },
      { label: 'Temas', slug: 'theming' },
    ],
  },
  {
    title: 'Layout',
    items: [
        { label: 'AspectRatio', slug: 'aspect-ratio' },
        { label: 'Card', slug: 'card' },
        { label: 'Collapsible', slug: 'collapsible' },
        { label: 'Scroll Area', slug: 'scroll-area' },
        { label: 'Separator', slug: 'separator' },
        { label: 'Accordion', slug: 'accordion' },
        { label: 'Grid Pattern', slug: 'grid-pattern' },
    ]
  },
  {
    title: 'Elementos Básicos',
    items: [
      { label: 'Animated Badge', slug: 'animated-badge' },
      { label: 'Button', slug: 'button' },
      { label: 'Badge', slug: 'badge' },
      { label: 'Avatar', slug: 'avatar' },
      { label: 'Skeleton', slug: 'skeleton' },
      { label: 'Toggle', slug: 'toggle' },
      { label: 'Toggle Group', slug: 'toggle-group' },
    ],
  },
  {
    title: 'Formulários',
    items: [
      { label: 'Input', slug: 'input' },
      { label: 'Label', slug: 'label' },
      { label: 'Textarea', slug: 'textarea' },
      { label: 'Select', slug: 'select' },
      { label: 'Checkbox', slug: 'checkbox' },
      { label: 'Radio Group', slug: 'radio-group' },
      { label: 'Switch', slug: 'switch' },
      { label: 'Slider', slug: 'slider' },
      { label: 'Command', slug: 'command' },
    ],
  },
  {
    title: 'Navegação',
    items: [
        { label: 'Breadcrumb', slug: 'breadcrumb' },
        { label: 'Dropdown Menu', slug: 'dropdown-menu' },
        { label: 'Menubar', slug: 'menubar' },
        { label: 'Navigation Menu', slug: 'navigation-menu' },
        { label: 'Tabs', slug: 'tabs' },
    ]
  },
  {
    title: 'Sobreposição (Overlay)',
    items: [
        { label: 'Dialog (Modal)', slug: 'dialog' },
        { label: 'Sheet (Drawer)', slug: 'sheet' },
        { label: 'Popover', slug: 'popover' },
        { label: 'Hover Card', slug: 'hover-card' },
        { label: 'Context Menu', slug: 'context-menu' },
        { label: 'Tooltip', slug: 'tooltip' },
    ]
  },
  {
    title: 'Dados & Feedback',
    items: [
        { label: 'Table', slug: 'table' },
        { label: 'Alert', slug: 'alert' },
        { label: 'Progress', slug: 'progress' },
        { label: 'Timeline', slug: 'timeline' },
        { label: 'KPI Card', slug: 'kpi-card' },
        { label: 'Pricing Card', slug: 'pricing-card' },
    ]
  },
  {
      title: 'Efeitos Visuais',
      items: [
          { label: 'Border Beam', slug: 'border-beam' },
          { label: 'Glass Card', slug: 'glass-card' },
          { label: 'Phone Mockup', slug: 'phone-mockup' },
      ]
  },
  {
      title: 'Mídia & Ícones',
      items: [
          { label: 'Axion Icons', slug: 'axion-icons' },
      ]
  }
];

// Strings de Código Fonte Manual
const animatedBadgeSource = `import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface AnimatedBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  icon?: React.ReactNode;
  className?: string;
}

export const AnimatedBadge = ({ text, icon, className = "", ...props }: AnimatedBadgeProps) => {
  return (
    <div
      className={\`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium text-gray-300 hover:bg-white/10 transition-colors cursor-pointer group hover:border-purple-500/50 shadow-[0_0_0_1px_rgba(0,0,0,0)] hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] \${className}\`}
      {...props}
    >
      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-500/20 text-purple-300 relative overflow-hidden">
         <motion.div
           animate={{ rotate: 360 }}
           transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
           className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
         />
         {icon || <Sparkles className="w-3 h-3 relative z-10" />}
      </span>
      <span>{text}</span>
      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
    </div>
  );
};`;

// Conteúdo das páginas (Mapeamento Slug -> Conteúdo)
export const docPages: Record<string, DocPage> = {
  // GUIAS
  introduction: {
    title: 'Introdução',
    description: 'Componentes modernos, acessíveis e prontos para produção.',
    type: 'guide',
    content: (
      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p>
          AxionUI é uma biblioteca de componentes opinativa projetada para velocidade e consistência.
          Diferente de outras bibliotecas, oferecemos flexibilidade total: use como um pacote NPM ou copie o código fonte.
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Acessibilidade garantida.</li>
            <li>Estilização via Tailwind CSS.</li>
            <li>Modo escuro nativo.</li>
            <li>Animações fluídas com Framer Motion.</li>
        </ul>
      </div>
    )
  },
  installation: {
    title: 'Instalação',
    description: 'Adicione a AxionUI ao seu projeto React.',
    type: 'guide',
    content: (
        <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">1. Instale o pacote</h3>
            <div className="p-4 border border-white/10 rounded-lg bg-[#0c0414]">
                <p className="font-mono text-sm text-purple-400">npm install axionui framer-motion lucide-react</p>
            </div>
            
            <h3 className="text-xl font-semibold text-white">2. Importe o CSS (Opcional)</h3>
            <p className="text-gray-400">Se você não estiver usando Tailwind, importe nosso CSS base no seu `main.tsx`.</p>
            <div className="p-4 border border-white/10 rounded-lg bg-[#0c0414]">
                <p className="font-mono text-sm text-blue-300">import <span className="text-green-300">'axionui/dist/style.css'</span>;</p>
            </div>
        </div>
    )
  },
  publishing: {
      title: 'Como Distribuir via NPM',
      description: 'Guia passo-a-passo para transformar seus componentes em uma biblioteca pública.',
      type: 'guide',
      content: (
          <div className="space-y-8 text-gray-300">
              <p>Para distribuir sua própria versão da biblioteca, siga estes passos:</p>
              <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Configuração do package.json</h3>
                  <div className="p-4 border border-white/10 rounded-lg bg-[#0c0414] overflow-x-auto">
                    <pre className="font-mono text-sm">{`{
  "name": "axionui",
  "version": "1.0.0",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts"
}`}</pre>
                  </div>
              </div>
          </div>
      )
  },
  theming: {
      title: 'Temas',
      description: 'Customizando a aparência através de tokens CSS.',
      type: 'guide',
      content: (
          <div className="space-y-4">
              <p className="text-gray-400">A AxionUI utiliza variáveis CSS para definir cores.</p>
              <div className="p-4 border border-white/10 rounded-lg bg-[#0c0414]">
                <pre className="font-mono text-sm text-blue-300">:root {'{'} --primary: 139 92 246; {'}'}</pre>
              </div>
          </div>
      )
  },

  // COMPONENTES EXISTENTES
  'animated-badge': { 
      title: 'Animated Badge', 
      description: 'Um badge interativo com brilho e animação de hover.', 
      type: 'component', 
      content: (
        <div className="space-y-4 mt-8">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Código Fonte Manual</h3>
                <span className="text-xs text-gray-500">components/ui/AnimatedBadge.tsx</span>
            </div>
            <div className="rounded-lg border border-white/10 bg-[#0c0414] p-4 overflow-x-auto relative group">
                <pre className="text-sm font-mono text-blue-300 whitespace-pre-wrap">
                    {animatedBadgeSource}
                </pre>
            </div>
        </div>
      )
  },
  button: { title: 'Button', description: 'Dispara uma ação ou evento.', type: 'component', content: null },
  badge: { title: 'Badge', description: 'Exibe um status ou uma etiqueta informativa.', type: 'component', content: null },
  card: { title: 'Card', description: 'Um contêiner flexível para agrupar conteúdo.', type: 'component', content: null },
  input: { title: 'Input', description: 'Campo de entrada de texto.', type: 'component', content: null },
  textarea: { title: 'Textarea', description: 'Campo de texto multilinhas.', type: 'component', content: null },
  select: { title: 'Select', description: 'Exibe uma lista de opções para o usuário escolher.', type: 'component', content: null },
  checkbox: { title: 'Checkbox', description: 'Um controle que permite ao usuário selecionar opções.', type: 'component', content: null },
  switch: { title: 'Switch', description: 'Um controle que permite ao usuário alternar entre verificado e não verificado.', type: 'component', content: null },
  avatar: { title: 'Avatar', description: 'Um elemento de imagem com fallback para representar o usuário.', type: 'component', content: null },
  alert: { title: 'Alert', description: 'Exibe uma chamada de atenção para informações do usuário.', type: 'component', content: null },
  skeleton: { title: 'Skeleton', description: 'Use para mostrar um estado de carregamento enquanto o conteúdo é carregado.', type: 'component', content: null },
  accordion: { title: 'Accordion', description: 'Um componente de acordeão verticalmente empilhado.', type: 'component', content: null },
  tabs: { title: 'Tabs', description: 'Um conjunto de seções de conteúdo em camadas.', type: 'component', content: null },
  dialog: { title: 'Dialog', description: 'Uma janela modal sobreposta ao conteúdo principal.', type: 'component', content: null },
  sheet: { title: 'Sheet', description: 'Estende o Dialog para fornecer conteúdo lateral.', type: 'component', content: null },
  progress: { title: 'Progress', description: 'Exibe um indicador mostrando o progresso da conclusão de uma tarefa.', type: 'component', content: null },
  separator: { title: 'Separator', description: 'Separa visualmente o conteúdo.', type: 'component', content: null },
  tooltip: { title: 'Tooltip', description: 'Um popup que exibe informações relacionadas a um elemento.', type: 'component', content: null },
  table: { title: 'Table', description: 'Tabela responsiva para exibição de dados.', type: 'component', content: null },
  label: { title: 'Label', description: 'Renderiza uma legenda acessível associada a controles.', type: 'component', content: null },
  'radio-group': { title: 'Radio Group', description: 'Um conjunto de botões de rádio verificáveis.', type: 'component', content: null },
  slider: { title: 'Slider', description: 'Um input onde o usuário seleciona um valor em um intervalo.', type: 'component', content: null },
  breadcrumb: { title: 'Breadcrumb', description: 'Exibe o caminho para o recurso atual.', type: 'component', content: null },
  'scroll-area': { title: 'Scroll Area', description: 'Melhora o componente de rolagem nativo para ser consistente entre navegadores.', type: 'component', content: null },
  popover: { title: 'Popover', description: 'Exibe conteúdo rico em um portal, acionado por um botão.', type: 'component', content: null },
  'aspect-ratio': { title: 'AspectRatio', description: 'Exibe conteúdo dentro de uma proporção desejada.', type: 'component', content: null },
  collapsible: { title: 'Collapsible', description: 'Um elemento interativo que expande/retrai um painel.', type: 'component', content: null },
  'hover-card': { title: 'Hover Card', description: 'Para usuários visuais visualizarem conteúdo disponível atrás de um link.', type: 'component', content: null },
  toggle: { title: 'Toggle', description: 'Um botão de dois estados que pode ser ativado ou desativado.', type: 'component', content: null },
  'toggle-group': { title: 'Toggle Group', description: 'Um conjunto de botões de dois estados que podem ser alternados.', type: 'component', content: null },
  'dropdown-menu': { title: 'Dropdown Menu', description: 'Exibe um menu para o usuário — como um conjunto de ações ou funções.', type: 'component', content: null },
  'context-menu': { title: 'Context Menu', description: 'Exibe um menu ao clicar com o botão direito do mouse.', type: 'component', content: null },
  menubar: { title: 'Menubar', description: 'Um menu de nível superior visualmente persistente.', type: 'component', content: null },
  'navigation-menu': { title: 'Navigation Menu', description: 'Uma coleção de links para navegar em sites.', type: 'component', content: null },
  command: { title: 'Command', description: 'Interface de paleta de comando rápida e combinável.', type: 'component', content: null },

  // NOVOS COMPONENTES
  'kpi-card': { title: 'KPI Card', description: 'Cartão para exibir métricas importantes e tendências.', type: 'component', content: null },
  'pricing-card': { title: 'Pricing Card', description: 'Cartão destacando planos de preços e recursos.', type: 'component', content: null },
  timeline: { title: 'Timeline', description: 'Visualização cronológica de eventos.', type: 'component', content: null },
  'glass-card': { title: 'Glass Card', description: 'Contêiner com efeito de vidro fosco (glassmorphism).', type: 'component', content: null },
  'phone-mockup': { title: 'Phone Mockup', description: 'Frame de celular CSS-only para exibir screenshots.', type: 'component', content: null },
  'grid-pattern': { title: 'Grid Pattern', description: 'Padrão de fundo em grade animável ou estático.', type: 'component', content: null },
  'border-beam': { title: 'Border Beam', description: 'Um feixe de luz animado que percorre a borda de um contêiner.', type: 'component', content: null },
  'axion-icons': { title: 'Axion Icons', description: 'Biblioteca de ícones exclusivos com identidade futurista.', type: 'component', content: null },
};

// Exemplos de Código
export const componentExamples: Record<string, { code: string, render: () => React.ReactNode }> = {
  'animated-badge': {
      code: `<AnimatedBadge text="Novo recurso disponível" />
<AnimatedBadge text="Launch" icon={<Rocket className="w-3 h-3" />} />`,
      render: () => (
          <div className="flex flex-col gap-4 items-center">
              <AnimatedBadge text="Novo recurso disponível" />
              <AnimatedBadge text="Launch" icon={<Rocket className="w-3 h-3 text-purple-300 relative z-10" />} />
          </div>
      )
  },
  'axion-icons': {
    code: `import { 
  AxMenu, AxClose, AxHome, AxSearch, 
  AxCheck, AxAlert, AxLoader, 
  AxUser, AxHeart, AxStar 
} from "axionui/icons"

export function IconsDemo() {
  return (
    <div className="flex gap-4">
      <AxHome size={24} />
      <AxUser size={24} />
      <AxHeart size={24} className="text-pink-500" />
      <AxCheck size={24} className="text-green-500" />
    </div>
  )
}`,
    render: () => (
      <div className="w-full space-y-12">
        {/* Navigation & Interface */}
        <div>
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">Navigation & Interface</h4>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-8">
                {[
                    { icon: AxMenu, label: "Menu" }, { icon: AxClose, label: "Close" },
                    { icon: AxSidebar, label: "Sidebar" }, { icon: AxGrid, label: "Grid" },
                    { icon: AxList, label: "List" }, { icon: AxFilter, label: "Filter" },
                    { icon: AxSort, label: "Sort" }, { icon: AxMaximize, label: "Maximize" },
                    { icon: AxMinimize, label: "Minimize" }, { icon: AxPin, label: "Pin" },
                    { icon: AxBookmark, label: "Bookmark" }, { icon: AxLogin, label: "Login" },
                    { icon: AxLogout, label: "Logout" }, { icon: AxExternal, label: "External" },
                    { icon: AxRefresh, label: "Refresh" }, { icon: AxLock, label: "Lock" },
                    { icon: AxHome, label: "Home" }, { icon: AxSearch, label: "Search" },
                    { icon: AxPlus, label: "Plus" }, { icon: AxTrash, label: "Trash" },
                    { icon: AxMoreVertical, label: "More Vert" }, { icon: AxMoreHorizontal, label: "More Horiz" },
                    { icon: AxSettings, label: "Settings" }, { icon: AxLoader, label: "Loader" },
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-3 group cursor-pointer">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                            <item.icon size={24} className="text-gray-300 group-hover:text-white" />
                        </div>
                        <span className="text-[10px] text-gray-500 truncate w-full text-center">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Communication */}
        <div>
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">Communication & Social</h4>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-8">
                {[
                    { icon: AxMail, label: "Mail" }, { icon: AxMessage, label: "Message" },
                    { icon: AxSend, label: "Send" }, { icon: AxBell, label: "Bell" },
                    { icon: AxShare, label: "Share" }, { icon: AxLink, label: "Link" },
                    { icon: AxThumbsUp, label: "Like" }, { icon: AxPhone, label: "Phone" },
                    { icon: AxVideo, label: "Video" }, { icon: AxCamera, label: "Camera" },
                    { icon: AxMic, label: "Mic" },
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-3 group cursor-pointer">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                            <item.icon size={24} className="text-gray-300 group-hover:text-white" />
                        </div>
                        <span className="text-[10px] text-gray-500 truncate w-full text-center">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Files & Docs */}
        <div>
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">Files & Documents</h4>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-8">
                {[
                    { icon: AxFile, label: "File" }, { icon: AxFileText, label: "Text" },
                    { icon: AxFolder, label: "Folder" }, { icon: AxFolderOpen, label: "Open" },
                    { icon: AxImage, label: "Image" }, { icon: AxFileCode, label: "Code" },
                    { icon: AxFilePdf, label: "PDF" }, { icon: AxArchive, label: "Archive" },
                    { icon: AxCloud, label: "Cloud" },
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-3 group cursor-pointer">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                            <item.icon size={24} className="text-gray-300 group-hover:text-white" />
                        </div>
                        <span className="text-[10px] text-gray-500 truncate w-full text-center">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Editing */}
        <div>
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">Editing & Formatting</h4>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-8">
                {[
                    { icon: AxEdit, label: "Edit" }, { icon: AxSave, label: "Save" },
                    { icon: AxCopy, label: "Copy" }, { icon: AxDownload, label: "Download" },
                    { icon: AxUndo, label: "Undo" }, { icon: AxRedo, label: "Redo" },
                    { icon: AxBold, label: "Bold" }, { icon: AxItalic, label: "Italic" },
                    { icon: AxQuote, label: "Quote" },
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-3 group cursor-pointer">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                            <item.icon size={24} className="text-gray-300 group-hover:text-white" />
                        </div>
                        <span className="text-[10px] text-gray-500 truncate w-full text-center">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Commerce */}
        <div>
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">Commerce & Business</h4>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-8">
                {[
                    { icon: AxCart, label: "Cart" }, { icon: AxShoppingBag, label: "Bag" },
                    { icon: AxCreditCard, label: "Card" }, { icon: AxDollar, label: "Dollar" },
                    { icon: AxTag, label: "Tag" }, { icon: AxGift, label: "Gift" },
                    { icon: AxTrendingUp, label: "Trend" }, { icon: AxBarChart, label: "Bar" },
                    { icon: AxPieChart, label: "Pie" }, { icon: AxPackage, label: "Pack" },
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-3 group cursor-pointer">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                            <item.icon size={24} className="text-gray-300 group-hover:text-white" />
                        </div>
                        <span className="text-[10px] text-gray-500 truncate w-full text-center">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* System */}
        <div>
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">System & Devices</h4>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-8">
                {[
                    { icon: AxWifi, label: "Wifi" }, { icon: AxBluetooth, label: "BT" },
                    { icon: AxBattery, label: "Battery" }, { icon: AxVolume, label: "Volume" },
                    { icon: AxBrightness, label: "Bright" }, { icon: AxMonitor, label: "PC" },
                    { icon: AxSmartphone, label: "Phone" }, { icon: AxKeyboard, label: "Keys" },
                    { icon: AxDatabase, label: "DB" }, { icon: AxPower, label: "Power" },
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-3 group cursor-pointer">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                            <item.icon size={24} className="text-gray-300 group-hover:text-white" />
                        </div>
                        <span className="text-[10px] text-gray-500 truncate w-full text-center">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Time & Media */}
        <div>
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">Time, Media & Location</h4>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-8">
                {[
                    { icon: AxPlay, label: "Play" }, { icon: AxPause, label: "Pause" },
                    { icon: AxStop, label: "Stop" }, { icon: AxSkipForward, label: "Next" },
                    { icon: AxSkipBack, label: "Prev" }, { icon: AxMusic, label: "Music" },
                    { icon: AxHeadphones, label: "Audio" }, { icon: AxMapPin, label: "Pin" },
                    { icon: AxGlobe, label: "Globe" }, { icon: AxCalendar, label: "Date" },
                    { icon: AxClock, label: "Time" }, { icon: AxTimer, label: "Timer" },
                    { icon: AxHistory, label: "History" }, { icon: AxSun, label: "Sun" },
                    { icon: AxMoon, label: "Moon" },
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-3 group cursor-pointer">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                            <item.icon size={24} className="text-gray-300 group-hover:text-white" />
                        </div>
                        <span className="text-[10px] text-gray-500 truncate w-full text-center">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* People */}
        <div>
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">People & Organization</h4>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-8">
                {[
                    { icon: AxUsers, label: "Users" }, { icon: AxUserPlus, label: "Add User" },
                    { icon: AxUserMinus, label: "Rem User" }, { icon: AxUserCheck, label: "Verified" },
                    { icon: AxTeam, label: "Team" }, { icon: AxUser, label: "Profile" },
                    { icon: AxHeart, label: "Heart" }, { icon: AxStar, label: "Star" },
                    { icon: AxCrown, label: "Crown" }, { icon: AxAward, label: "Award" },
                    { icon: AxBadgeIcon, label: "Badge" }, { icon: AxCheck, label: "Check" },
                    { icon: AxAlert, label: "Alert" }, { icon: AxInfo, label: "Info" },
                    { icon: AxError, label: "Error" },
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-3 group cursor-pointer">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                            <item.icon size={24} className="text-gray-300 group-hover:text-white" />
                        </div>
                        <span className="text-[10px] text-gray-500 truncate w-full text-center">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    )
  },

  // Basic Elements
  button: {
    code: `<Button>Click me</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="glow">Glow</Button>`,
    render: () => (
      <div className="flex flex-wrap gap-4">
        <Button>Click me</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="glow">Glow</Button>
      </div>
    )
  },
  badge: {
    code: `<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="success">Success</Badge>`,
    render: () => (
      <div className="flex gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="success">Success</Badge>
      </div>
    )
  },
  avatar: {
      code: `<Avatar fallback="JD" />
<Avatar src="https://github.com/shadcn.png" alt="@shadcn" />`,
      render: () => (
          <div className="flex gap-4">
              <Avatar fallback="JD" />
              <Avatar src="https://github.com/shadcn.png" alt="@shadcn" />
          </div>
      )
  },
  skeleton: {
      code: `<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`,
      render: () => (
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      )
  },
  toggle: {
      code: `<Toggle aria-label="Toggle italic">
  <AxBold className="h-4 w-4" />
</Toggle>`,
      render: () => (
          <Toggle aria-label="Toggle italic">
            <AxBold className="h-4 w-4" />
          </Toggle>
      )
  },
  'toggle-group': {
      code: `<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <AxBold className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <AxItalic className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Toggle underline">
    <div className="underline">U</div>
  </ToggleGroupItem>
</ToggleGroup>`,
      render: () => (
        <ToggleGroup type="multiple">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <AxBold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <AxItalic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <div className="underline font-bold text-sm h-4 w-4 flex items-center justify-center">U</div>
          </ToggleGroupItem>
        </ToggleGroup>
      )
  },

  // Form Elements
  input: {
      code: `<Input type="email" placeholder="Email" />`,
      render: () => <div className="max-w-sm"><Input type="email" placeholder="Email" /></div>
  },
  textarea: {
      code: `<Textarea placeholder="Type your message here." />`,
      render: () => <div className="max-w-sm"><Textarea placeholder="Type your message here." /></div>
  },
  select: {
      code: `<Select>
  <option value="light">Light</option>
  <option value="dark">Dark</option>
  <option value="system">System</option>
</Select>`,
      render: () => (
          <div className="max-w-sm">
            <Select>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
            </Select>
          </div>
      )
  },
  checkbox: {
      code: `<Checkbox id="terms" label="Accept terms and conditions" />`,
      render: () => <Checkbox id="terms" label="Accept terms and conditions" />
  },
  'radio-group': {
      code: `<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>`,
      render: () => (
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Option Two</Label>
          </div>
        </RadioGroup>
      )
  },
  switch: {
      code: `<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`,
      render: () => (
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      )
  },
  slider: {
      code: `<Slider defaultValue={[50]} max={100} step={1} />`,
      render: () => <div className="w-[60%]"><Slider value={[50]} max={100} step={1} /></div>
  },
  label: {
      code: `<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>`,
      render: () => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email-label-demo">Email</Label>
          <Input type="email" id="email-label-demo" placeholder="Email" />
        </div>
      )
  },
  command: {
      code: `<Command>
  <CommandInput placeholder="Type a command..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
      <CommandItem>Calculator</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
      render: () => (
        <div className="max-w-[450px]">
            <Command>
            <CommandInput placeholder="Type a command..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                <CommandItem>Calendar</CommandItem>
                <CommandItem>Search Emoji</CommandItem>
                <CommandItem>Calculator</CommandItem>
                </CommandGroup>
            </CommandList>
            </Command>
        </div>
      )
  },

  // Layout
  card: {
      code: `<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Create project</CardTitle>
    <CardDescription>Deploy your new project in one-click.</CardDescription>
  </CardHeader>
  <CardContent>
    <form>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Name of your project" />
        </div>
      </div>
    </form>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Deploy</Button>
  </CardFooter>
</Card>`,
      render: () => (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Name of your project" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      )
  },
  accordion: {
      code: `<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
  </AccordionItem>
</Accordion>`,
      render: () => (
        <Accordion className="w-full max-w-[400px]">
            <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>Yes. It comes with default styles that matches the other components.</AccordionContent>
            </AccordionItem>
        </Accordion>
      )
  },
  'aspect-ratio': {
      code: `<div className="w-[450px]">
  <AspectRatio ratio={16 / 9}>
    <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd" alt="Image" className="rounded-md object-cover" />
  </AspectRatio>
</div>`,
      render: () => (
        <div className="w-[300px] md:w-[450px]">
          <AspectRatio ratio={16 / 9}>
            <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&q=80" alt="Image" className="rounded-md object-cover" />
          </AspectRatio>
        </div>
      )
  },
  collapsible: {
      code: `<Collapsible>
  <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
  <CollapsibleContent>Yes. Free to use for personal and commercial projects.</CollapsibleContent>
</Collapsible>`,
      render: () => (
          <Collapsible className="w-[350px] space-y-2">
            <div className="flex items-center justify-between space-x-4 px-4 py-2 border border-white/10 rounded-md">
                <h4 className="text-sm font-semibold text-white">
                    @peduarte starred 3 repositories
                </h4>
                <CollapsibleTrigger className="p-2 rounded-md hover:bg-white/10">
                    <AxMoreVertical className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                </CollapsibleTrigger>
            </div>
            <div className="rounded-md border border-white/10 px-4 py-3 font-mono text-sm text-gray-400">
                @radix-ui/primitives
            </div>
            <CollapsibleContent className="space-y-2">
                <div className="rounded-md border border-white/10 px-4 py-3 font-mono text-sm text-gray-400">
                    @radix-ui/colors
                </div>
                <div className="rounded-md border border-white/10 px-4 py-3 font-mono text-sm text-gray-400">
                    @stitches/react
                </div>
            </CollapsibleContent>
          </Collapsible>
      )
  },
  'scroll-area': {
      code: `<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
  Jokester began sneaking into the castle in the middle of the night...
</ScrollArea>`,
      render: () => (
        <ScrollArea className="h-[200px] w-[350px] rounded-md border border-white/10 p-4">
            <h4 className="mb-4 text-sm font-medium leading-none text-white">Tags</h4>
            {Array.from({ length: 50 }).map((_, i, a) => (
            <div key={i} className="text-sm text-gray-400">
                v1.2.0-beta.{a.length - i}
                <div className="my-2 border-b border-white/5" />
            </div>
            ))}
        </ScrollArea>
      )
  },
  
  // Navigation
  breadcrumb: {
      code: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
      render: () => (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      )
  },
  'dropdown-menu': {
      code: `<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
      render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="outline">Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
      )
  },
  menubar: {
      code: `<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab</MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`,
      render: () => (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>New Tab</MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Share</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Print</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>Undo</MenubarItem>
                    <MenubarItem>Redo</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
      )
  },
  'navigation-menu': {
      code: `<NavigationMenu>
  <NavigationMenuItem title="Getting Started">
    <NavigationMenuLink href="#" title="Introduction">
      Re-usable components built using Radix UI and Tailwind CSS.
    </NavigationMenuLink>
    <NavigationMenuLink href="#" title="Installation">
      How to install dependencies and structure your app.
    </NavigationMenuLink>
  </NavigationMenuItem>
  <NavigationMenuItem title="Components">
    <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
       ...
    </div>
  </NavigationMenuItem>
</NavigationMenu>`,
      render: () => (
        <NavigationMenu>
            <NavigationMenuItem title="Getting Started">
                <NavigationMenuLink href="#" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
                </NavigationMenuLink>
                <NavigationMenuLink href="#" title="Installation">
                How to install dependencies and structure your app.
                </NavigationMenuLink>
                <NavigationMenuLink href="#" title="Typography">
                Styles for headings, paragraphs, lists...
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem title="Components">
                <NavigationMenuLink href="#" title="Alert Dialog">
                    A modal dialog that interrupts the user.
                </NavigationMenuLink>
                <NavigationMenuLink href="#" title="Hover Card">
                    For sighted users to preview content available behind a link.
                </NavigationMenuLink>
            </NavigationMenuItem>
        </NavigationMenu>
      )
  },
  tabs: {
      code: `<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>`,
      render: () => (
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you're done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@peduarte" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      )
  },

  // Overlays
  dialog: {
      code: `<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`,
      render: () => (
        <Dialog>
          <DialogTrigger>
            <Button variant="outline">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">Username</Label>
                <Input id="username" defaultValue="@peduarte" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )
  },
  sheet: {
      code: `<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`,
      render: () => (
        <Sheet>
          <SheetTrigger>
            <Button variant="outline">Open Sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">Username</Label>
                <Input id="username" defaultValue="@peduarte" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <Button type="submit">Save changes</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      )
  },
  popover: {
      code: `<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>Place content for the popover here.</PopoverContent>
</Popover>`,
      render: () => (
        <Popover>
          <PopoverTrigger>
             <Button variant="outline">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
             <div className="grid gap-4">
                <div className="space-y-2">
                    <h4 className="font-medium leading-none text-white">Dimensions</h4>
                    <p className="text-sm text-gray-400">Set the dimensions for the layer.</p>
                </div>
                <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="width">Width</Label>
                        <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="maxWidth">Max. width</Label>
                        <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
                    </div>
                </div>
             </div>
          </PopoverContent>
        </Popover>
      )
  },
  'hover-card': {
      code: `<HoverCard>
  <HoverCardTrigger>Hover</HoverCardTrigger>
  <HoverCardContent>
    The React Framework – created and maintained by @vercel.
  </HoverCardContent>
</HoverCard>`,
      render: () => (
        <HoverCard>
            <HoverCardTrigger>
                <Button variant="ghost">@nextjs</Button>
            </HoverCardTrigger>
            <HoverCardContent>
                <div className="flex justify-between space-x-4">
                    <Avatar fallback="VC" />
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold text-white">@nextjs</h4>
                        <p className="text-sm text-gray-400">
                            The React Framework – created and maintained by @vercel.
                        </p>
                        <div className="flex items-center pt-2">
                            <span className="text-xs text-gray-500">Joined December 2021</span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
      )
  },
  'context-menu': {
      code: `<ContextMenu>
  <ContextMenuTrigger>Right click here</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Profile</ContextMenuItem>
    <ContextMenuItem>Billing</ContextMenuItem>
    <ContextMenuItem>Team</ContextMenuItem>
    <ContextMenuItem>Subscription</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,
      render: () => (
          <ContextMenu>
            <ContextMenuTrigger>
                <div className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed border-white/20 text-sm text-gray-400">
                    Right click here
                </div>
            </ContextMenuTrigger>
            <ContextMenuContent>
                <ContextMenuItem>Back</ContextMenuItem>
                <ContextMenuItem>Forward</ContextMenuItem>
                <ContextMenuItem>Reload</ContextMenuItem>
                <div className="h-[1px] bg-white/10 my-1" />
                <ContextMenuItem>Save As...</ContextMenuItem>
                <ContextMenuItem>Print...</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
      )
  },
  tooltip: {
      code: `<Tooltip content="Add to library">
  <Button variant="outline">Hover me</Button>
</Tooltip>`,
      render: () => (
        <Tooltip content="Add to library">
          <Button variant="outline">Hover me</Button>
        </Tooltip>
      )
  },

  // Feedback & Data
  alert: {
      code: `<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>`,
      render: () => (
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert>
      )
  },
  progress: {
      code: `<Progress value={33} />`,
      render: () => <div className="w-[60%]"><Progress value={33} /></div>
  },
  table: {
      code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV-001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
      render: () => (
        <Table>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {[
                    { invoice: "INV-001", status: "Paid", method: "Credit Card", amount: "$250.00" },
                    { invoice: "INV-002", status: "Pending", method: "PayPal", amount: "$150.00" },
                    { invoice: "INV-003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
                ].map((invoice) => (
                    <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                    <TableCell>{invoice.status}</TableCell>
                    <TableCell>{invoice.method}</TableCell>
                    <TableCell className="text-right">{invoice.amount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
      )
  },

  // New Components
  'kpi-card': {
      code: `<KpiCard 
  label="Total Revenue" 
  value="$45,231.89" 
  change="+20.1%" 
  trend="up" 
/>`,
      render: () => (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <KpiCard label="Total Revenue" value="$45,231.89" change="+20.1%" trend="up" />
            <KpiCard label="Subscriptions" value="+2350" change="+180.1%" trend="up" />
          </div>
      )
  },
  'pricing-card': {
      code: `<PricingCard
  title="Pro"
  price="$29"
  features={['Unlimited projects', 'Analytics', '24/7 Support']}
  isPopular={true}
/>`,
      render: () => (
          <div className="max-w-sm">
            <PricingCard
                title="Pro"
                price="$29"
                features={['Unlimited projects', 'Advanced Analytics', '24/7 Priority Support', 'Custom Domain']}
                isPopular={true}
            />
          </div>
      )
  },
  timeline: {
      code: `<Timeline items={[
  { date: 'Aug 2024', title: 'v2.0 Release', description: 'Major update with new features.' },
  { date: 'July 2024', title: 'Beta Testing', description: 'Closed beta for selected users.' },
]} />`,
      render: () => (
          <Timeline items={[
            { date: 'Aug 2024', title: 'v2.0 Release', description: 'Major update with new features and improved performance.', active: true },
            { date: 'July 2024', title: 'Beta Testing', description: 'Closed beta for selected users to test stability.' },
            { date: 'May 2024', title: 'Concept', description: 'Initial design and prototyping phase.' },
          ]} />
      )
  },
  'glass-card': {
      code: `<GlassCard intensity="high">
  <h3 className="text-xl font-bold text-white">Glassmorphism</h3>
  <p className="text-gray-300">Blurry background effect.</p>
</GlassCard>`,
      render: () => (
          <div className="relative w-full h-[300px] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80')] bg-cover rounded-xl overflow-hidden">
             <GlassCard intensity="high" className="max-w-xs text-center">
                <h3 className="text-xl font-bold text-white mb-2">Glassmorphism</h3>
                <p className="text-gray-200 text-sm">A modern UI trend that uses background blur to create a frosted glass effect.</p>
             </GlassCard>
          </div>
      )
  },
  'phone-mockup': {
      code: `<PhoneMockup>
  <div className="h-full w-full bg-white p-4">
    App Content
  </div>
</PhoneMockup>`,
      render: () => (
          <div className="scale-75 origin-top">
            <PhoneMockup>
                <div className="h-full w-full bg-[#0c0414] p-6 text-white flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-2xl mb-4"></div>
                    <h3 className="text-2xl font-bold">Axion App</h3>
                </div>
            </PhoneMockup>
          </div>
      )
  },
  'grid-pattern': {
      code: `<div className="relative h-[200px] w-full overflow-hidden bg-black">
  <GridPattern size={30} />
</div>`,
      render: () => (
        <div className="relative h-[300px] w-full overflow-hidden bg-[#0c0414] rounded-lg border border-white/10">
          <GridPattern size={40} />
          <div className="absolute inset-0 flex items-center justify-center">
             <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Grid Background</h3>
          </div>
        </div>
      )
  },
  'border-beam': {
      code: `<div className="relative h-48 w-full max-w-sm rounded-xl overflow-hidden bg-[#0c0414]">
  <BorderBeam size={300} duration={10} />
  <div className="absolute inset-[1px] rounded-[11px] bg-[#130d1d] flex items-center justify-center">
    <span className="text-white font-bold">Border Beam</span>
  </div>
</div>`,
      render: () => (
        <div className="relative h-48 w-full max-w-sm rounded-xl overflow-hidden bg-[#0c0414] shadow-xl">
            <BorderBeam size={400} duration={8} />
            <div className="absolute inset-[1px] rounded-[11px] bg-[#130d1d] flex items-center justify-center z-10">
                <span className="text-white font-bold">Border Beam</span>
            </div>
        </div>
      )
  },
};
