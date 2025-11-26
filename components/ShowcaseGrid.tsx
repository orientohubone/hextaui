import React from 'react';
import { Zap, Shield, Palette, Smartphone, Code2, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Ultra Rápido",
    description: "Otimizado para velocidade com zero overhead em tempo de execução.",
    icon: Zap,
    className: "md:col-span-2 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/20"
  },
  {
    title: "Type Safe",
    description: "Construído com TypeScript para uma experiência de desenvolvimento robusta.",
    icon: Shield,
    className: "md:col-span-1 bg-surface border-white/5"
  },
  {
    title: "Customizável",
    description: "Personalize cada token com variáveis CSS.",
    icon: Palette,
    className: "md:col-span-1 bg-surface border-white/5"
  },
  {
    title: "Responsivo",
    description: "Abordagem mobile-first para todos os componentes.",
    icon: Smartphone,
    className: "md:col-span-2 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20"
  },
  {
    title: "Código Limpo",
    description: "Arquitetura copie-e-cole. Você é dono do código.",
    icon: Code2,
    className: "md:col-span-3 bg-[#130d1d] border-white/5"
  }
];

export const ShowcaseGrid = () => {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Por que HextaUI?</h2>
            <p className="text-gray-400">Tudo o que você precisa para construir aplicações de classe mundial.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-6 rounded-3xl border backdrop-blur-sm relative group overflow-hidden ${feature.className}`}
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};