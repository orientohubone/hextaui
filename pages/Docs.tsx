
import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { sidebarData, docPages, componentExamples } from '../data/docsData';
import { ComponentViewer } from '../components/docs/ComponentViewer';
import { Menu, X } from 'lucide-react';

export const Docs = () => {
  const [activeSlug, setActiveSlug] = useState('introduction');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Obtém os dados da página ativa
  const activePage = docPages[activeSlug] || docPages['introduction'];
  
  // Verifica se é um componente para buscar o exemplo
  const example = activePage.type === 'component' 
    ? componentExamples[activeSlug as keyof typeof componentExamples] 
    : null;

  const handleNavClick = (slug: string) => {
    setActiveSlug(slug);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-16 flex flex-col md:flex-row max-w-7xl mx-auto relative">
      
      {/* Mobile Sidebar Toggle */}
      <div className="md:hidden fixed top-20 right-4 z-40">
        <Button 
            size="sm" 
            variant="secondary" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="shadow-lg"
        >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4 mr-2" />}
            Menu
        </Button>
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-30 w-72 bg-[#0c0414] border-r border-white/10 pt-20 pb-10 px-6 overflow-y-auto transform transition-transform duration-300 md:translate-x-0 md:static md:h-[calc(100vh-4rem)] md:w-64 md:border-r md:bg-transparent md:pt-6
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="space-y-8">
          {sidebarData.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-white mb-3 px-2 tracking-wider uppercase opacity-80">{section.title}</h4>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.slug}>
                    {item.disabled ? (
                        <span className="flex items-center justify-between w-full px-2 py-1.5 text-sm text-gray-600 cursor-not-allowed">
                            {item.label}
                            <span className="text-[10px] bg-white/5 px-1.5 py-0.5 rounded text-gray-500">Em breve</span>
                        </span>
                    ) : (
                        <button 
                            onClick={() => handleNavClick(item.slug)}
                            className={`w-full text-left px-2 py-1.5 text-sm rounded-md transition-all duration-200 ${
                            activeSlug === item.slug
                                ? 'bg-purple-500/10 text-purple-300 font-medium border border-purple-500/20'
                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                            }`}
                        >
                            {item.label}
                        </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full px-6 py-10 md:py-8 overflow-x-hidden min-h-[80vh]">
        <div className="max-w-3xl mx-auto space-y-10 animate-fade-in">
          
          {/* Header */}
          <div className="space-y-4 border-b border-white/10 pb-6">
            <h1 className="text-4xl font-bold text-white tracking-tight">{activePage.title}</h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              {activePage.description}
            </p>
          </div>

          {/* Content Rendering */}
          <div className="space-y-8">
            
            {/* Se for componente, mostra o Preview/Usage */}
            {activePage.type === 'component' && example && (
                <>
                    <ComponentViewer 
                        title="Preview" 
                        code={example.code}
                    >
                        {example.render()}
                    </ComponentViewer>

                    <div className="space-y-4 pt-8">
                        <h3 className="text-2xl font-semibold text-white">Instalação</h3>
                        <div className="bg-[#0f0716] border border-white/10 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                            <span className="text-purple-400">npx</span> axionui@latest add <span className="text-yellow-300">{activeSlug}</span>
                        </div>
                    </div>
                </>
            )}

            {/* Renderiza conteúdo adicional (Guias ou Código Fonte Manual de Componentes) */}
            {activePage.content && (
                <div className="pt-4">
                    {activePage.content}
                </div>
            )}
          </div>
          
          {/* Footer Navigation (Next/Prev) */}
          <div className="pt-10 border-t border-white/10 flex justify-between">
             <div className="text-sm text-gray-500">
                Está página foi útil?
             </div>
             <div className="text-sm text-gray-500 hover:text-white cursor-pointer">
                Editar no GitHub
             </div>
          </div>

        </div>
      </main>
    </div>
  );
};
