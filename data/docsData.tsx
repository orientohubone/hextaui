
import React from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { Alert, AlertTitle, AlertDescription } from '../components/ui/Alert';
import { AlertCircle, CheckCircle2, Info, Plus, Settings, User, CreditCard, LogOut, Keyboard, UserPlus, Mail, MessageSquare, PlusCircle } from 'lucide-react';
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
          { label: 'Glass Card', slug: 'glass-card' },
          { label: 'Phone Mockup', slug: 'phone-mockup' },
      ]
  }
];

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
};

// Exemplos de Código
export const componentExamples: Record<string, { code: string, render: () => React.ReactNode }> = {
  button: {
    code: `import { Button } from "axionui"

export function ButtonDemo() {
  return (
    <div className="flex gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="glow">Glow Effect</Button>
    </div>
  )
}`,
    render: () => <div className="flex gap-4 flex-wrap justify-center items-center">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="glow">Glow</Button>
    </div>
  },
  'kpi-card': {
    code: `import { KpiCard } from "axionui"

export function KpiCardDemo() {
  return (
    <div className="grid gap-4 w-full max-w-sm">
      <KpiCard label="Receita Total" value="$45,231.89" change="+20.1% vs mês anterior" trend="up" />
      <KpiCard label="Taxa de Rejeição" value="12.5%" change="-2.5% vs semana anterior" trend="down" />
    </div>
  )
}`,
    render: () => (
      <div className="grid gap-4 w-full max-w-sm">
        <KpiCard label="Receita Total" value="$45,231.89" change="+20.1% vs mês anterior" trend="up" />
        <KpiCard label="Taxa de Rejeição" value="12.5%" change="-2.5% vs semana anterior" trend="down" />
      </div>
    )
  },
  'pricing-card': {
    code: `import { PricingCard } from "axionui"

export function PricingCardDemo() {
  return (
    <div className="flex gap-6 flex-wrap justify-center">
      <PricingCard 
        title="Pro" 
        price="$29" 
        features={['Usuários Ilimitados', '20GB Armazenamento', 'Suporte Prioritário']}
        isPopular={true}
      />
    </div>
  )
}`,
    render: () => (
      <div className="w-[300px]">
        <PricingCard 
          title="Pro" 
          price="$29" 
          features={['Usuários Ilimitados', '20GB Armazenamento', 'Suporte Prioritário', 'API Access']}
          isPopular={true}
        />
      </div>
    )
  },
  timeline: {
    code: `import { Timeline } from "axionui"

const items = [
  { date: "Q1 2024", title: "Project Kickoff", description: "Initial planning and team assembly.", active: true },
  { date: "Q2 2024", title: "Design Phase", description: "Mockups and prototyping.", active: false },
  { date: "Q3 2024", title: "Development", description: "Core features implementation.", active: false },
]

export function TimelineDemo() {
  return <Timeline items={items} />
}`,
    render: () => (
      <div className="w-full max-w-md">
        <Timeline items={[
          { date: "Q1 2024", title: "Project Kickoff", description: "Initial planning and team assembly.", active: true },
          { date: "Q2 2024", title: "Design Phase", description: "Mockups and prototyping.", active: false },
          { date: "Q3 2024", title: "Development", description: "Core features implementation.", active: false },
        ]} />
      </div>
    )
  },
  'glass-card': {
    code: `import { GlassCard } from "axionui"

export function GlassCardDemo() {
  return (
    <div className="relative p-10 bg-gradient-to-tr from-purple-500/50 to-blue-500/50 rounded-xl">
      <GlassCard intensity="high">
        <h3 className="text-xl font-bold text-white">Glass Effect</h3>
        <p className="text-gray-200 mt-2">Este conteúdo está flutuando sobre um fundo desfocado.</p>
      </GlassCard>
    </div>
  )
}`,
    render: () => (
      <div className="relative p-12 bg-gradient-to-tr from-purple-600/50 via-pink-600/30 to-blue-600/50 rounded-xl overflow-hidden w-full max-w-md">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
         <GlassCard intensity="high">
            <h3 className="text-xl font-bold text-white">Glass Effect</h3>
            <p className="text-gray-200 mt-2">Este conteúdo está flutuando sobre um fundo desfocado.</p>
         </GlassCard>
      </div>
    )
  },
  'phone-mockup': {
    code: `import { PhoneMockup } from "axionui"

export function PhoneMockupDemo() {
  return (
    <PhoneMockup>
      <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-indigo-500 to-purple-600 p-6 text-center">
        <h2 className="text-2xl font-bold text-white">Your App</h2>
        <p className="text-white/80 mt-2">Looks great on mobile.</p>
      </div>
    </PhoneMockup>
  )
}`,
    render: () => (
      <div className="scale-75 origin-top">
        <PhoneMockup>
            <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-indigo-500 to-purple-600 p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl mb-4 backdrop-blur-md"></div>
                <h2 className="text-2xl font-bold text-white">Your App</h2>
                <p className="text-white/80 mt-2">Looks great on mobile.</p>
            </div>
        </PhoneMockup>
      </div>
    )
  },
  'grid-pattern': {
    code: `import { GridPattern } from "axionui"

export function GridPatternDemo() {
  return (
    <div className="relative w-full h-[300px] bg-[#0c0414] border border-white/10 rounded-lg overflow-hidden">
      <GridPattern size={30} strokeColor="rgba(168, 85, 247, 0.2)" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="bg-black/50 px-4 py-2 rounded text-white backdrop-blur">Background Content</span>
      </div>
    </div>
  )
}`,
    render: () => (
      <div className="relative w-full h-[300px] bg-[#0c0414] border border-white/10 rounded-lg overflow-hidden">
        <GridPattern size={30} strokeColor="rgba(168, 85, 247, 0.2)" />
        <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-black/50 px-4 py-2 rounded text-white backdrop-blur border border-white/10">Background Content</span>
        </div>
      </div>
    )
  },
  'aspect-ratio': {
    code: `<AspectRatio ratio={16 / 9} className="bg-white/5 rounded-md">
  <div className="flex items-center justify-center h-full text-gray-400">
    16:9 Aspect Ratio
  </div>
</AspectRatio>`,
    render: () => (
      <div className="w-[300px]">
        <AspectRatio ratio={16 / 9} className="bg-white/5 rounded-md border border-white/10">
          <div className="flex items-center justify-center h-full text-gray-400">
            16:9 Aspect Ratio
          </div>
        </AspectRatio>
      </div>
    )
  },
  collapsible: {
    code: `<Collapsible>
  <CollapsibleTrigger>Toggle</CollapsibleTrigger>
  <CollapsibleContent>Content</CollapsibleContent>
</Collapsible>`,
    render: () => (
      <Collapsible className="w-[300px] space-y-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold text-white">@peduarte starred 3 repositories</h4>
          <CollapsibleTrigger className="rounded-md p-1 hover:bg-white/10">
            <div className="h-4 w-4"><Plus className="h-4 w-4" /></div>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border border-white/10 px-4 py-2 font-mono text-sm shadow-sm text-gray-400">
          @radix-ui/primitives
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border border-white/10 px-4 py-2 font-mono text-sm shadow-sm text-gray-400">
            @radix-ui/colors
          </div>
          <div className="rounded-md border border-white/10 px-4 py-2 font-mono text-sm shadow-sm text-gray-400">
            @stitches/react
          </div>
        </CollapsibleContent>
      </Collapsible>
    )
  },
  'hover-card': {
    code: `<HoverCard>
  <HoverCardTrigger>Hover me</HoverCardTrigger>
  <HoverCardContent>Content</HoverCardContent>
</HoverCard>`,
    render: () => (
      <HoverCard>
        <HoverCardTrigger>
            <Button variant="outline">Hover me</Button>
        </HoverCardTrigger>
        <HoverCardContent>
            <div className="flex justify-between space-x-4">
                <Avatar fallback="VC" />
                <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-white">@nextjs</h4>
                    <p className="text-sm text-gray-400">The React Framework – created and maintained by @vercel.</p>
                </div>
            </div>
        </HoverCardContent>
      </HoverCard>
    )
  },
  toggle: {
    code: `<Toggle aria-label="Toggle italic">
  <Bold className="h-4 w-4" />
</Toggle>`,
    render: () => (
      <Toggle aria-label="Toggle italic">
        <div className="h-4 w-4 font-bold text-center">B</div>
      </Toggle>
    )
  },
  'toggle-group': {
    code: `<ToggleGroup type="single">
  <ToggleGroupItem value="a">A</ToggleGroupItem>
  <ToggleGroupItem value="b">B</ToggleGroupItem>
</ToggleGroup>`,
    render: () => (
      <ToggleGroup type="single">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <div className="h-4 w-4 font-bold text-center">B</div>
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <div className="h-4 w-4 italic text-center">I</div>
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <div className="h-4 w-4 underline text-center">U</div>
        </ToggleGroupItem>
      </ToggleGroup>
    )
  },
  'dropdown-menu': {
    code: `<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
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
  'context-menu': {
    code: `<ContextMenu>
  <ContextMenuTrigger>Right click here</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Profile</ContextMenuItem>
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
        </ContextMenuContent>
      </ContextMenu>
    )
  },
  menubar: {
    code: `<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab</MenubarItem>
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
  <NavigationMenuItem title="Getting started">
    <NavigationMenuLink href="/docs">Introduction</NavigationMenuLink>
  </NavigationMenuItem>
</NavigationMenu>`,
    render: () => (
      <NavigationMenu>
        <NavigationMenuItem title="Getting started">
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                    <NavigationMenuLink href="/" title="AxionUI">
                        <div className="mb-2 mt-4 text-lg font-medium text-white">
                        AxionUI
                        </div>
                        <p className="text-sm leading-tight text-gray-400">
                        Beautifully designed components built with Radix UI and Tailwind CSS.
                        </p>
                    </NavigationMenuLink>
                </li>
                <li><NavigationMenuLink href="/docs" title="Introduction">Re-usable components.</NavigationMenuLink></li>
                <li><NavigationMenuLink href="/docs/installation" title="Installation">How to install dependencies.</NavigationMenuLink></li>
                <li><NavigationMenuLink href="/docs/theming" title="Theming">How to customize.</NavigationMenuLink></li>
            </ul>
        </NavigationMenuItem>
        <NavigationMenuItem title="Components">
             <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                <li><NavigationMenuLink href="/docs/alert" title="Alert">Displays a callout for user attention.</NavigationMenuLink></li>
                <li><NavigationMenuLink href="/docs/hover-card" title="Hover Card">For sighted users to preview content.</NavigationMenuLink></li>
                <li><NavigationMenuLink href="/docs/progress" title="Progress">Displays an indicator showing completion.</NavigationMenuLink></li>
                <li><NavigationMenuLink href="/docs/scroll-area" title="Scroll-area">Visually or semantically separates content.</NavigationMenuLink></li>
             </ul>
        </NavigationMenuItem>
      </NavigationMenu>
    )
  },
  command: {
    code: `<Command>
  <CommandInput placeholder="Type a command..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
    render: () => (
      <Command className="rounded-lg border border-white/10 shadow-md md:min-w-[450px]">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
                <CommandItem>Calendar</CommandItem>
                <CommandItem>Search Emoji</CommandItem>
                <CommandItem>Calculator</CommandItem>
            </CommandGroup>
            <CommandGroup heading="Settings">
                <CommandItem>Profile</CommandItem>
                <CommandItem>Billing</CommandItem>
                <CommandItem>Settings</CommandItem>
            </CommandGroup>
        </CommandList>
      </Command>
    )
  },
  card: {
    code: `<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Create project</CardTitle>
    <CardDescription>Deploy your new project in one-click.</CardDescription>
  </CardHeader>
  <CardContent>
    ...
  </CardContent>
  <CardFooter>
    ...
  </CardFooter>
</Card>`,
    render: () => (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Name of your project" />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="framework">Framework</Label>
                    <Select id="framework">
                        <option value="next">Next.js</option>
                        <option value="svelte">SvelteKit</option>
                        <option value="astro">Astro</option>
                    </Select>
                </div>
            </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="ghost">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    )
  },
  input: {
    code: `<Input type="email" placeholder="Email" />`,
    render: () => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
        </div>
    )
  },
  badge: {
    code: `<Badge>Badge</Badge>`,
    render: () => <div className="flex gap-2"><Badge>Default</Badge><Badge variant="secondary">Secondary</Badge><Badge variant="destructive">Destructive</Badge><Badge variant="outline">Outline</Badge></div>
  },
  skeleton: {
    code: `<Skeleton className="w-[100px] h-[20px] rounded-full" />`,
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
  table: {
    code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>INV001</TableCell>
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
                    { invoice: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
                    { invoice: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
                    { invoice: "INV003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
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
  'scroll-area': {
    code: `<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
  Jokester began sneaking into the castle in the middle of the night...
</ScrollArea>`,
    render: () => (
        <ScrollArea className="h-[200px] w-[350px] rounded-md border border-white/10 p-4">
            <div className="text-sm text-gray-400">
                Jokester began sneaking into the castle in the middle of the night and leaving
                jokes all over the place: under the king's pillow, in his soup, even in the
                royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                then, one day, the people of the kingdom discovered that the jokes were
                actually funny, and they started laughing. And then they started laughing at
                the king.
            </div>
        </ScrollArea>
    )
  },
  alert: {
    code: `<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>`,
    render: () => (
        <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
                You can add components to your app using the cli.
            </AlertDescription>
        </Alert>
    )
  },
  progress: {
    code: `<Progress value={33} />`,
    render: () => <Progress value={33} className="w-[60%]" />
  },
  tabs: {
    code: `<Tabs defaultValue="account">
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
  accordion: {
    code: `<Accordion>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
  </AccordionItem>
</Accordion>`,
    render: () => (
        <Accordion className="w-[400px]">
            <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                    Yes. It comes with default styles that matches the other components&apos; aesthetic.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it if you prefer.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
  },
  sheet: {
    code: `<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>Make changes to your profile here.</SheetDescription>
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
                        <Input id="name" value="Pedro Duarte" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">Username</Label>
                        <Input id="username" value="@peduarte" className="col-span-3" />
                    </div>
                </div>
                <SheetFooter>
                    <Button type="submit">Save changes</Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
  },
  dialog: {
    code: `<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>Make changes to your profile here.</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`,
    render: () => (
        <Dialog>
            <DialogTrigger>
                <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">Name</Label>
                        <Input id="name" value="Pedro Duarte" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">Username</Label>
                        <Input id="username" value="@peduarte" className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
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
  slider: {
    code: `<Slider defaultValue={[50]} max={100} step={1} />`,
    render: () => <Slider value={[50]} max={100} step={1} className="w-[60%]" />
  },
  breadcrumb: {
    code: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Components</BreadcrumbPage>
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
                    <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
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
  label: {
    code: `<Label htmlFor="email">Your email address</Label>`,
    render: () => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email-2">Email</Label>
            <Input type="email" id="email-2" placeholder="Email" />
        </div>
    )
  },
  switch: {
    code: `<Switch />`,
    render: () => (
        <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
    )
  },
  checkbox: {
    code: `<Checkbox />`,
    render: () => (
        <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
    )
  },
  select: {
    code: `<Select>
  <option value="light">Light</option>
  <option value="dark">Dark</option>
  <option value="system">System</option>
</Select>`,
    render: () => (
        <Select>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
        </Select>
    )
  },
  textarea: {
    code: `<Textarea placeholder="Type your message here." />`,
    render: () => <Textarea placeholder="Type your message here." />
  },
  avatar: {
    code: `<Avatar src="https://github.com/shadcn.png" alt="@shadcn" />`,
    render: () => <Avatar src="https://github.com/shadcn.png" alt="@shadcn" fallback="CN" />
  },
  tooltip: {
    code: `<Tooltip content="Add to library">
  <Button variant="outline">Hover</Button>
</Tooltip>`,
    render: () => (
        <Tooltip content="Add to library">
            <Button variant="outline">Hover</Button>
        </Tooltip>
    )
  },
};