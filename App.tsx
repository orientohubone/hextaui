
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ShowcaseGrid } from './components/ShowcaseGrid';
import { ComponentPlayground } from './components/ComponentPlayground';
import { Footer } from './components/Footer';
import { Docs } from './pages/Docs';
import { ShowcaseCategoryPage } from './components/ShowcaseCategoryPage';
import { templatesData } from './data/templatesData';
import { ScrollBeams } from './components/ui/ScrollBeams';
import { TemplateViewPage } from './components/TemplateViewPage';
import { motion } from 'framer-motion';

function App() {
  const [page, setPage] = useState('home');
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page, selectedTemplate]);

  // Check if current page is a template category
  const templateCategory = templatesData[page];

  // If a template is selected, show the viewer (Full Screen Overlay)
  if (selectedTemplate) {
      return (
          <TemplateViewPage 
            templateId={selectedTemplate} 
            onBack={() => setSelectedTemplate(null)} 
          />
      );
  }

  return (
    <div className="min-h-screen bg-[#0c0414] text-slate-200 font-sans selection:bg-purple-500/30 selection:text-purple-200 overflow-x-hidden">
      <Navbar onNavigate={setPage} currentPage={page} />
      
      {/* Background Effects visible only on Home */}
      {page === 'home' && <ScrollBeams />}

      <main className="relative z-10">
        {page === 'home' && (
          <>
            <Hero onNavigate={setPage} />
            <ShowcaseGrid />
            <div id="showcase">
                <ComponentPlayground />
            </div>
            {/* CTA Section */}
            <section className="py-32 px-6 text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
                {/* Connector Line to Footer */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-purple-500/20 to-transparent"></div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 max-w-2xl mx-auto space-y-8"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Pronto para construir?</h2>
                    <p className="text-gray-400 text-lg">Junte-se a milhares de desenvolvedores construindo o futuro com AxionUI.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button 
                            onClick={() => setPage('docs')}
                            className="px-8 py-4 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1"
                        >
                            Começar Agora
                        </button>
                        <button className="px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-bold text-sm hover:bg-white/5 transition-colors transform hover:-translate-y-1">
                            Ver no Github
                        </button>
                    </div>
                </motion.div>
            </section>
          </>
        )}

        {page === 'docs' && <Docs />}
        
        {/* Template Category Pages */}
        {templateCategory && (
            <ShowcaseCategoryPage 
                categoryKey={page}
                data={templateCategory}
                onBack={() => setPage('home')}
                onSelectTemplate={setSelectedTemplate}
            />
        )}
        
        {/* Placeholder for other pages */}
        {page === 'showcase' && (
            <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center relative">
                <ScrollBeams />
                <h1 className="text-3xl font-bold relative z-10">Galeria de Vitrine</h1>
                <p className="text-gray-500 mt-4 relative z-10">Uma galeria completa de projetos construídos com AxionUI.</p>
                <div className="mt-8 flex gap-4 relative z-10">
                     <button onClick={() => setPage('landing-page')} className="text-purple-400 hover:underline">Ver Landing Pages</button>
                     <button onClick={() => setPage('dashboard')} className="text-purple-400 hover:underline">Ver Dashboards</button>
                </div>
            </div>
        )}
      </main>

      {/* Only show main footer if NOT in Template View Mode (handled by conditional return above) */}
      <Footer />
    </div>
  );
}

export default App;