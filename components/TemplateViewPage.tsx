
import React, { useState } from 'react';
import { ArrowLeft, Eye, Code2, Smartphone, Monitor, Tablet } from 'lucide-react';
import { Button } from './ui/Button';
import { templateRegistry } from '../data/templateRegistry';

interface TemplateViewPageProps {
  templateId: string;
  onBack: () => void;
}

export const TemplateViewPage: React.FC<TemplateViewPageProps> = ({ templateId, onBack }) => {
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const template = templateRegistry[templateId];

  if (!template) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-2xl font-bold mb-4">Template não encontrado</h2>
        <Button onClick={onBack}>Voltar</Button>
      </div>
    );
  }

  const Component = template.component;

  return (
    <div className="min-h-screen bg-[#0c0414] flex flex-col">
      {/* Top Bar */}
      <header className="h-16 border-b border-white/10 bg-[#130d1d] flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="h-6 w-[1px] bg-white/10"></div>
          <span className="font-medium text-white text-sm">Template Preview</span>
        </div>

        {/* View Controls */}
        <div className="flex bg-[#0c0414] p-1 rounded-lg border border-white/5">
            <button 
                onClick={() => setViewMode('preview')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-medium transition-all ${
                    viewMode === 'preview' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'
                }`}
            >
                <Eye className="w-3.5 h-3.5" /> Preview
            </button>
            <button 
                onClick={() => setViewMode('code')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-medium transition-all ${
                    viewMode === 'code' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'
                }`}
            >
                <Code2 className="w-3.5 h-3.5" /> Código
            </button>
        </div>

        {/* Viewport Controls (Only for Preview) */}
        <div className="flex items-center gap-2">
            {viewMode === 'preview' && (
                <div className="hidden md:flex bg-[#0c0414] p-1 rounded-lg border border-white/5 mr-4">
                    <button onClick={() => setViewport('desktop')} className={`p-1.5 rounded ${viewport === 'desktop' ? 'text-white bg-white/10' : 'text-gray-500'}`}><Monitor className="w-4 h-4" /></button>
                    <button onClick={() => setViewport('tablet')} className={`p-1.5 rounded ${viewport === 'tablet' ? 'text-white bg-white/10' : 'text-gray-500'}`}><Tablet className="w-4 h-4" /></button>
                    <button onClick={() => setViewport('mobile')} className={`p-1.5 rounded ${viewport === 'mobile' ? 'text-white bg-white/10' : 'text-gray-500'}`}><Smartphone className="w-4 h-4" /></button>
                </div>
            )}
            <Button size="sm" className="bg-white text-black hover:bg-gray-200">Usar Template</Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden relative bg-[#08020d]">
        {viewMode === 'preview' ? (
            <div className="w-full h-full overflow-y-auto overflow-x-hidden flex justify-center bg-[#08020d] p-0 md:p-8">
                <div 
                    className={`bg-white transition-all duration-300 shadow-2xl overflow-hidden ${
                        viewport === 'desktop' ? 'w-full h-full md:rounded-lg' : 
                        viewport === 'tablet' ? 'w-[768px] h-[90%] my-auto rounded-xl border-[10px] border-[#1c1c1e]' : 
                        'w-[375px] h-[80%] my-auto rounded-[2rem] border-[10px] border-[#1c1c1e]'
                    }`}
                >
                     <div className="w-full h-full overflow-y-auto bg-white">
                        <Component />
                     </div>
                </div>
            </div>
        ) : (
            <div className="w-full h-full overflow-auto p-8">
                <div className="max-w-4xl mx-auto bg-[#130d1d] border border-white/10 rounded-xl p-6 shadow-2xl">
                    <pre className="font-mono text-sm text-blue-300 whitespace-pre-wrap">
                        {template.code}
                    </pre>
                </div>
            </div>
        )}
      </main>
    </div>
  );
};
