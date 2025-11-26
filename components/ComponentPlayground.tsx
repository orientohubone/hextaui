import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Copy, Check, RefreshCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const components = {
  button: {
    name: 'Button',
    variants: ['primary', 'secondary', 'ghost', 'glow'],
    sizes: ['sm', 'md', 'lg'],
    render: (props: any) => <Button {...props}>Clique aqui</Button>,
    code: (variant: string, size: string) => `<Button variant="${variant}" size="${size}">Clique aqui</Button>`
  },
  badge: {
    name: 'Badge',
    variants: ['default', 'outline', 'destructive'],
    sizes: ['sm', 'md'],
    render: (props: any) => (
      <span className={`inline-flex items-center rounded-full font-medium ${
        props.size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'
      } ${
        props.variant === 'default' ? 'bg-purple-500/20 text-purple-200 border border-purple-500/50' :
        props.variant === 'outline' ? 'border border-white/20 text-gray-300' :
        'bg-red-500/20 text-red-300 border border-red-500/50'
      }`}>
        Novidade
      </span>
    ),
    code: (variant: string, size: string) => `<Badge variant="${variant}" size="${size}">Novidade</Badge>`
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
    setVariant(components[key].variants[0]);
    setSize(components[key].sizes[1]);
  };

  const handleCopy = () => {
    const code = components[activeComponent].code(variant, size);
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-6 bg-[#08020d]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Controls */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Playground</h2>
              <p className="text-gray-400">Ajuste, visualize e copie.</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Componente</label>
                <div className="flex gap-2">
                  {Object.keys(components).map((key) => (
                    <button
                      key={key}
                      onClick={() => handleComponentChange(key as any)}
                      className={`px-4 py-2 rounded-lg text-sm transition-all ${
                        activeComponent === key 
                        ? 'bg-white text-black font-medium' 
                        : 'bg-surface text-gray-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {components[key as keyof typeof components].name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Variante</label>
                <div className="flex flex-wrap gap-2">
                  {components[activeComponent].variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setVariant(v)}
                      className={`px-3 py-1.5 rounded-md text-xs border transition-all ${
                        variant === v 
                        ? 'border-purple-500 text-purple-400 bg-purple-500/10' 
                        : 'border-white/10 text-gray-400 hover:border-white/30'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Tamanho</label>
                <div className="flex gap-2">
                  {components[activeComponent].sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`px-3 py-1.5 rounded-md text-xs border transition-all ${
                        size === s 
                        ? 'border-purple-500 text-purple-400 bg-purple-500/10' 
                        : 'border-white/10 text-gray-400 hover:border-white/30'
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
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-white/10 bg-[#130d1d] overflow-hidden flex flex-col h-[500px]">
              
              {/* Toolbar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#1c1528]/50">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <button onClick={handleCopy} className="text-gray-400 hover:text-white transition-colors">
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Canvas */}
              <div className="flex-1 flex items-center justify-center relative bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-90">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-blue-500/5 pointer-events-none" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeComponent}-${variant}-${size}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {components[activeComponent].render({ variant, size })}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Code Snippet */}
              <div className="bg-[#0c0414] p-4 border-t border-white/10 font-mono text-sm overflow-x-auto">
                <span className="text-purple-400">import</span> <span className="text-yellow-200">{`{ ${components[activeComponent].name} }`}</span> <span className="text-purple-400">from</span> <span className="text-green-300">'@hextaui/react'</span>;
                <br />
                <br />
                <span className="text-gray-500">{'// Uso'}</span>
                <br />
                <span className="text-blue-300">{`<${components[activeComponent].name}`}</span>
                <span className="text-purple-300">{variant !== 'default' && ` variant="${variant}"`}</span>
                <span className="text-purple-300">{size !== 'md' && ` size="${size}"`}</span>
                <span className="text-blue-300">{'>'}</span>
                <span className="text-gray-300">{activeComponent === 'button' ? 'Clique aqui' : 'Novidade'}</span>
                <span className="text-blue-300">{`</${components[activeComponent].name}>`}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};