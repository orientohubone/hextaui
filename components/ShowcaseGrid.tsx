
import React from 'react';
import { Zap, Shield, Palette, Smartphone, Code2, ArrowDown } from 'lucide-react';
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
      {/* Connector Line from Hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-purple-500/0 via-purple-500/20 to-purple-500/50">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center relative">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Por que AxionUI?</h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Tudo o que você precisa para construir aplicações de classe mundial. Projetado para escalar com sua criatividade.
                </p>
            </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.5, type: "spring", bounce: 0.3 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`p-8 rounded-3xl border backdrop-blur-sm relative group overflow-hidden ${feature.className} shadow-lg`}
            >
              {/* Internal Glow */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 shadow-inner border border-white/5">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};