import React from 'react';
import { Hexagon, Twitter, Github, Disc } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0c0414] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
             <div className="flex items-center gap-2 mb-4">
               <Hexagon className="w-6 h-6 text-purple-500 fill-purple-500/20" />
               <span className="font-bold text-lg">HextaUI</span>
             </div>
             <p className="text-gray-500 text-sm mb-4">
               Construindo o futuro das interfaces web com componentes potencializados por IA.
             </p>
             <div className="flex gap-4">
               <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
               <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
               <a href="#" className="text-gray-500 hover:text-white transition-colors"><Disc className="w-5 h-5" /></a>
             </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Produto</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Componentes</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Vitrine</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Documentação</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Comunidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Termos</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} HextaAI Inc. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};