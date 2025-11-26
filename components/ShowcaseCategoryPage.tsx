
import React from 'react';
import { ArrowLeft, ExternalLink, Code2, Layout } from 'lucide-react';
import { Button } from './ui/Button';
import { CategoryData, TemplateItem } from '../data/templatesData';

interface ShowcaseCategoryPageProps {
  categoryKey: string;
  data: CategoryData;
  onBack: () => void;
  onSelectTemplate?: (templateId: string) => void;
}

export const ShowcaseCategoryPage: React.FC<ShowcaseCategoryPageProps> = ({ data, onBack, onSelectTemplate }) => {
  return (
    <div className="min-h-screen pt-24 px-6 pb-12 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <button 
            onClick={onBack}
            className="flex items-center text-gray-400 hover:text-white mb-6 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Voltar para Início
          </button>
          
          <div className="flex items-center gap-3 mb-4">
             <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <Layout className="w-6 h-6 text-purple-400" />
             </div>
             <h1 className="text-4xl font-bold text-white">{data.title}</h1>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl">{data.description}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((item: TemplateItem, index) => (
            <div 
                key={item.id} 
                className="group rounded-2xl border border-white/10 bg-[#130d1d] overflow-hidden hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/10 flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Fake Preview / Thumbnail */}
              <div className={`h-48 w-full bg-gradient-to-br ${item.gradient} opacity-20 group-hover:opacity-30 transition-opacity relative overflow-hidden`}>
                  {/* Abstract shapes representing UI */}
                  <div className="absolute top-8 left-8 right-8 bottom-0 bg-[#0c0414] rounded-t-lg shadow-2xl border-t border-l border-r border-white/10 opacity-80 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 p-4">
                      <div className="w-1/3 h-2 bg-white/10 rounded mb-4"></div>
                      <div className="w-1/2 h-8 bg-white/5 rounded mb-4"></div>
                      <div className="grid grid-cols-2 gap-2">
                          <div className="h-16 bg-white/5 rounded"></div>
                          <div className="h-16 bg-white/5 rounded"></div>
                      </div>
                  </div>
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
                      <Button size="sm" variant="secondary" onClick={() => onSelectTemplate && onSelectTemplate(item.id)}>
                         <ExternalLink className="w-3 h-3 mr-2" />
                         Demo
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => onSelectTemplate && onSelectTemplate(item.id)}>
                         <Code2 className="w-3 h-3 mr-2" />
                         Código
                      </Button>
                  </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex gap-2 mb-3">
                    {item.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">{item.description}</p>
                
                <Button 
                    className="w-full mt-auto" 
                    variant="ghost" 
                    onClick={() => onSelectTemplate && onSelectTemplate(item.id)}
                >
                    Visualizar Template
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
