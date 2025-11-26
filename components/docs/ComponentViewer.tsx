import React, { useState } from 'react';
import { Check, Copy, Eye, Code2 } from 'lucide-react';

interface ComponentViewerProps {
  title: string;
  description?: string;
  code: string;
  children?: React.ReactNode;
}

export const ComponentViewer: React.FC<ComponentViewerProps> = ({ title, description, code, children }) => {
  const [view, setView] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="text-lg font-medium text-white">{title}</h3>
        {description && <p className="text-gray-400">{description}</p>}
      </div>

      <div className="rounded-xl border border-white/10 bg-[#130d1d] overflow-hidden shadow-xl">
        {/* Toolbar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#1c1528]">
          <div className="flex space-x-1 bg-[#0c0414] p-1 rounded-lg border border-white/5">
            <button
              onClick={() => setView('preview')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                view === 'preview' 
                  ? 'bg-surface text-white shadow-sm' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Eye className="w-4 h-4" />
              Visualizar
            </button>
            <button
              onClick={() => setView('code')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                view === 'code' 
                  ? 'bg-surface text-white shadow-sm' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Code2 className="w-4 h-4" />
              Código
            </button>
          </div>
          
          {view === 'code' && (
            <button
              onClick={handleCopy}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors"
              title="Copiar código"
            >
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            </button>
          )}
        </div>

        {/* Content Area */}
        <div className="relative min-h-[350px] flex items-center justify-center p-12 bg-[#150f21] border-t border-white/5">
           {/* Fundo sólido roxo escuro (#150f21) para melhor contraste e visual limpo */}
           
           {view === 'preview' ? (
             <div className="w-full flex items-center justify-center">
                {children}
             </div>
           ) : (
             <div className="absolute inset-0 overflow-auto bg-[#0c0414] p-6 text-left">
               <pre className="text-sm font-mono text-blue-300 leading-relaxed">
                 <code>{code}</code>
               </pre>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};