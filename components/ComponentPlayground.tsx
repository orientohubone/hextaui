
import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Copy, Check, Info, AlertCircle, CheckCircle2, User, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BorderBeam } from './ui/BorderBeam';

// Definição dos componentes disponíveis no playground
const components = {
  button: {
    name: 'Button',
    variants: ['primary', 'secondary', 'ghost', 'glow', 'outline'],
    sizes: ['sm', 'md', 'lg'],
    render: (props: any) => <Button {...props}>Clique aqui</Button>,
    code: (variant: string, size: string) => `<Button variant="${variant}" size="${size}">Clique aqui</Button>`
  },
  badge: {
    name: 'Badge',
    variants: ['default', 'outline', 'destructive', 'success'],
    sizes: ['sm', 'md'],
    render: (props: any) => {
      const colors: any = {
        default: 'bg-purple-500/20 text-purple-200 border-purple-500/50',
        outline: 'border-white/20 text-gray-300',
        destructive: 'bg-red-500/20 text-red-300 border-red-500/50',
        success: 'bg-green-500/20 text-green-300 border-green-500/50'
      };
      return (
        <span className={`inline-flex items-center rounded-full border font-medium ${
          props.size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'
        } ${colors[props.variant] || colors.default}`}>
          Status
        </span>
      );
    },
    code: (variant: string, size: string) => `<Badge variant="${variant}" size="${size}">Status</Badge>`
  },
  input: {
    name: 'Input',
    variants: ['default', 'filled'],
    sizes: ['md', 'lg'],
    render: (props: any) => (
      <input 
        type="text" 
        placeholder="Digite algo..." 
        className={`w-64 rounded-md text-sm outline-none transition-all ${
          props.size === 'md' ? 'h-10 px-3' : 'h-12 px-4 text-base'
        } ${
          props.variant === 'default' 
          ? 'bg-[#0c0414] border border-white/10 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500' 
          : 'bg-white/5 border border-transparent text-white focus:bg-white/10 focus:border-white/20'
        }`} 
      />
    ),
    code: (variant: string, size: string) => `<Input variant="${variant}" size="${size}" placeholder="Digite algo..." />`
  },
  alert: {
    name: 'Alert',
    variants: ['info', 'destructive', 'success'],
    sizes: ['md'],
    render: (props: any) => {
      const styles: any = {
        info: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-200', icon: <Info className="w-4 h-4 text-blue-400" /> },
        destructive: { bg: 'bg-red-500/10', border: 'border-red-500/20', text: 'text-red-200', icon: <AlertCircle className="w-4 h-4 text-red-400" /> },
        success: { bg: 'bg-green-500/10', border: 'border-green-500/20', text: 'text-green-200', icon: <CheckCircle2 className="w-4 h-4 text-green-400" /> }
      };
      const style = styles[props.variant] || styles.info;
      return (
        <div className={`flex w-80 items-start gap-3 rounded-lg border p-4 ${style.bg} ${style.border}`}>
           <div className="mt-0.5">{style.icon}</div>
           <div className="flex-1">
             <h5 className={`font-medium leading-none tracking-tight ${style.text} mb-1`}>Atenção</h5>
             <div className="text-sm opacity-90 text-gray-400">Esta é uma mensagem de alerta.</div>
           </div>
        </div>
      );
    },
    code: (variant: string) => `<Alert variant="${variant}">\n  <AlertTitle>Atenção</AlertTitle>\n  <AlertDescription>Esta é uma mensagem de alerta.</AlertDescription>\n</Alert>`
  },
  avatar: {
    name: 'Avatar',
    variants: ['circle', 'rounded'],
    sizes: ['sm', 'md', 'lg', 'xl'],
    render: (props: any) => {
        const sizeClasses: any = { sm: 'w-8 h-8', md: 'w-10 h-10', lg: 'w-14 h-14', xl: 'w-20 h-20' };
        return (
            <div className={`relative overflow-hidden bg-white/10 flex items-center justify-center shrink-0 border border-white/10 ${
                props.variant === 'circle' ? 'rounded-full' : 'rounded-md'
            } ${sizeClasses[props.size]}`}>
                <User className="text-gray-400 w-1/2 h-1/2" />
            </div>
        )
    },
    code: (variant: string, size: string) => `<Avatar variant="${variant}" size="${size}" src="..." />`
  },
  switch: {
    name: 'Switch',
    variants: ['on', 'off'],
    sizes: ['sm', 'md'],
    render: (props: any) => {
        const isOn = props.variant === 'on';
        return (
            <div className={`rounded-full transition-colors duration-200 cursor-pointer relative ${
                isOn ? 'bg-purple-600' : 'bg-white/20'
            } ${props.size === 'sm' ? 'w-8 h-5' : 'w-11 h-6'}`}>
                <div className={`absolute top-0.5 bottom-0.5 bg-white rounded-full transition-transform duration-200 shadow-sm ${
                    props.size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'
                } ${isOn ? (props.size === 'sm' ? 'translate-x-3.5' : 'translate-x-5') : 'translate-x-0.5'}`} />
            </div>
        )
    },
    code: (variant: string) => `<Switch checked={${variant === 'on'}} />`
  },
  textarea: {
    name: 'Textarea',
    variants: ['default'],
    sizes: ['md'],
    render: (props: any) => (
        <textarea 
            className="flex min-h-[80px] w-80 rounded-md border border-white/10 bg-[#0c0414] px-3 py-2 text-sm text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 disabled:cursor-not-allowed disabled:opacity-50" 
            placeholder="Escreva sua mensagem aqui..."
        />
    ),
    code: () => `<Textarea placeholder="Escreva sua mensagem aqui..." />`
  }
};

export const ComponentPlayground = () => {
  const [activeComponent, setActiveComponent] = useState<keyof typeof components>('button');
  const [variant, setVariant] = useState(components['button'].variants[0]);
  const [size, setSize] = useState(components['button'].sizes[1]);
  const [copied, setCopied] = useState(false);

  // Reset when switching components
  const handleComponentChange = (key: keyof typeof components) => {
    setActiveComponent(key);
    // Safety check if variants/sizes exist for new component, otherwise default to first available
    const newComp = components[key];
    setVariant(newComp.variants[0]);
    setSize(newComp.sizes[0]);
  };

  const handleCopy = () => {
    const code = components[activeComponent].code(variant, size);
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-6 bg-[#08020d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Controls */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Playground</h2>
              <p className="text-gray-400">Explore, customize e integre nossos componentes.</p>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <label className="text-xs font-bold text-purple-400 uppercase tracking-widest">Componente</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {Object.keys(components).map((key) => (
                    <button
                      key={key}
                      onClick={() => handleComponentChange(key as any)}
                      className={`px-3 py-2 rounded-lg text-sm text-left transition-all border ${
                        activeComponent === key 
                        ? 'bg-purple-500/20 border-purple-500/50 text-white font-medium shadow-[0_0_15px_rgba(168,85,247,0.15)]' 
                        : 'bg-surface border-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/10'
                      }`}
                    >
                      {components[key as keyof typeof components].name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Variante</label>
                <div className="flex flex-wrap gap-2">
                  {components[activeComponent].variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setVariant(v)}
                      className={`px-3 py-1.5 rounded-md text-xs border transition-all capitalize ${
                        variant === v 
                        ? 'border-purple-500 text-purple-300 bg-purple-500/10' 
                        : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Tamanho</label>
                <div className="flex flex-wrap gap-2">
                  {components[activeComponent].sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`px-3 py-1.5 rounded-md text-xs border transition-all uppercase ${
                        size === s 
                        ? 'border-purple-500 text-purple-300 bg-purple-500/10' 
                        : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Preview Area */}
          <div className="lg:col-span-8 relative group">
            
            {/* Container with Border Beam */}
            <div className="relative rounded-3xl overflow-hidden h-[600px] shadow-2xl shadow-purple-900/20 bg-[#0c0414] border border-white/5">
                
                {/* 1. The Moving Light (Background) - Large size to cover diagonal */}
                <BorderBeam size={1200} duration={8} delay={0} colorFrom="#d8b4fe" colorTo="#8b5cf6" />
                
                {/* 2. The Content (Foreground) - Has margin to reveal 1px of background */}
                <div className="absolute inset-[1px] rounded-[23px] bg-[#130d1d] flex flex-col overflow-hidden z-10">
                    
                    {/* Toolbar */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#1c1528]/80 backdrop-blur-sm relative z-20">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-xs text-gray-500 font-mono hidden sm:block">
                                {activeComponent}.tsx
                            </div>
                            <div className="h-4 w-[1px] bg-white/10 hidden sm:block"></div>
                            <button onClick={handleCopy} className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors group">
                            {copied ? (
                                <>
                                    <Check className="w-3.5 h-3.5 text-green-400" />
                                    <span className="text-green-400">Copiado!</span>
                                </>
                            ) : (
                                <>
                                    <Copy className="w-3.5 h-3.5 group-hover:text-purple-300" />
                                    <span>Copiar JSX</span>
                                </>
                            )}
                            </button>
                        </div>
                    </div>

                    {/* Canvas */}
                    <div className="flex-1 flex items-center justify-center relative bg-[#150f21]">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)] pointer-events-none" />
                        
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`${activeComponent}-${variant}-${size}`}
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            >
                                {components[activeComponent].render({ variant, size })}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Code Snippet */}
                    <div className="bg-[#0c0414] p-6 border-t border-white/10 font-mono text-sm overflow-x-auto relative group/code z-20">
                        <div className="absolute top-0 left-0 w-1 h-full bg-purple-600/50"></div>
                        <div className="flex flex-col gap-2 opacity-80 group-hover/code:opacity-100 transition-opacity">
                            <div>
                                <span className="text-purple-400">import</span> <span className="text-yellow-200">{`{ ${components[activeComponent].name} }`}</span> <span className="text-purple-400">from</span> <span className="text-green-300">"axionui"</span>
                            </div>
                            <div>
                                <span className="text-gray-500">{'// Exemplo de uso'}</span>
                            </div>
                            <div>
                                <span className="text-blue-300">{`<${components[activeComponent].name}`}</span>
                                {variant !== 'default' && (
                                    <>
                                        <span className="text-purple-300"> variant</span>
                                        <span className="text-white">=</span>
                                        <span className="text-green-300">"{variant}"</span>
                                    </>
                                )}
                                {size !== 'md' && (
                                    <>
                                        <span className="text-purple-300"> size</span>
                                        <span className="text-white">=</span>
                                        <span className="text-green-300">"{size}"</span>
                                    </>
                                )}
                                {['input', 'textarea'].includes(activeComponent) ? (
                                    <span className="text-blue-300"> /></span>
                                ) : (
                                    <>
                                        <span className="text-blue-300">{'>'}</span>
                                        <span className="text-gray-300">
                                            {activeComponent === 'button' && 'Clique aqui'}
                                            {activeComponent === 'badge' && 'Status'}
                                            {activeComponent === 'switch' && ''}
                                            {activeComponent === 'avatar' && ''}
                                            {activeComponent === 'alert' && '\n  ...\n'}
                                        </span>
                                        {['button', 'badge', 'alert'].includes(activeComponent) && (
                                            <span className="text-blue-300">{`</${components[activeComponent].name}>`}</span>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
