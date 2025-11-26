import React from 'react';
import { Github, Menu, X, Hexagon } from 'lucide-react';
import { Button } from './ui/Button';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const links = [
    { label: 'Recursos', value: 'home' },
    { label: 'Componentes', value: 'docs' },
    { label: 'Vitrine', value: 'showcase' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0c0414]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="relative">
               <Hexagon className="w-8 h-8 text-purple-500 fill-purple-500/20 group-hover:fill-purple-500/40 transition-all" />
               <div className="absolute inset-0 bg-purple-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
            </div>
            <span className="font-bold text-lg tracking-tight">Hexta<span className="text-purple-400">UI</span></span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => onNavigate(link.value)}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  currentPage === link.value ? 'text-white' : 'text-gray-400'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <Button variant="secondary" size="sm" onClick={() => onNavigate('docs')}>
              Documentação
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0c0414] border-b border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  onNavigate(link.value);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 flex items-center gap-4 px-3">
              <Button variant="glow" className="w-full">Começar</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};