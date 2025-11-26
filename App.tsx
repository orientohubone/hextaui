import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ShowcaseGrid } from './components/ShowcaseGrid';
import { ComponentPlayground } from './components/ComponentPlayground';
import { Footer } from './components/Footer';
import { Docs } from './pages/Docs';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="min-h-screen bg-[#0c0414] text-slate-200 font-sans selection:bg-purple-500/30 selection:text-purple-200">
      <Navbar onNavigate={setPage} currentPage={page} />
      
      <main>
        {page === 'home' && (
          <>
            <Hero />
            <ShowcaseGrid />
            <div id="showcase">
                <ComponentPlayground />
            </div>
            {/* CTA Section */}
            <section className="py-24 px-6 text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                    <h2 className="text-4xl font-bold text-white">Pronto para construir?</h2>
                    <p className="text-gray-400">Junte-se a milhares de desenvolvedores construindo o futuro com HextaUI.</p>
                    <div className="flex justify-center gap-4">
                        <button 
                            onClick={() => setPage('docs')}
                            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
                        >
                            Começar
                        </button>
                        <button className="px-8 py-3 rounded-full bg-transparent border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors">
                            Ver no Github
                        </button>
                    </div>
                </div>
            </section>
          </>
        )}

        {page === 'docs' && <Docs />}
        
        {/* Placeholder for other pages */}
        {page === 'showcase' && (
            <div className="pt-32 pb-20 text-center">
                <h1 className="text-3xl">Galeria de Vitrine</h1>
                <p className="text-gray-500 mt-4">Em breve.</p>
                <button onClick={() => setPage('home')} className="mt-8 text-purple-400 hover:underline">Voltar ao Início</button>
            </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;