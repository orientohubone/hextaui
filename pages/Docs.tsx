import React from 'react';
import { Button } from '../components/ui/Button';

const sidebarItems = [
  { title: 'Começando', items: ['Introdução', 'Instalação', 'Temas'] },
  { title: 'Componentes', items: ['Botão', 'Badge', 'Card', 'Input', 'Diálogo', 'Dropdown'] },
  { title: 'Layout', items: ['Container', 'Grid', 'Flex'] },
];

export const Docs = () => {
  return (
    <div className="min-h-screen pt-20 flex max-w-7xl mx-auto">
      {/* Sidebar */}
      <aside className="w-64 fixed h-[calc(100vh-5rem)] overflow-y-auto hidden md:block border-r border-white/10 pr-6">
        <div className="space-y-8 py-6">
          {sidebarItems.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-white mb-3 px-2">{section.title}</h4>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item}>
                    <button className="w-full text-left px-2 py-1.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:pl-72 px-6 py-8">
        <div className="max-w-3xl space-y-10">
          
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-white">Instalação</h1>
            <p className="text-lg text-gray-400">
              Comece com HextaUI executando um único comando.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">CLI</h2>
            <p className="text-gray-400">Execute o comando init para configurar o projeto.</p>
            <div className="bg-[#1c1528] rounded-xl border border-white/10 p-4 font-mono text-sm flex items-center justify-between">
              <code className="text-purple-300">npx hextaui@latest init</code>
              <Button variant="ghost" size="sm"><span className="sr-only">Copiar</span>Copiar</Button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Instalação Manual</h2>
            <p className="text-gray-400">Ou instale as dependências manualmente.</p>
            <div className="bg-[#1c1528] rounded-xl border border-white/10 p-4 font-mono text-sm">
              <code className="text-blue-300">npm install</code> <code className="text-gray-300">clsx tailwind-merge framer-motion lucide-react</code>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};