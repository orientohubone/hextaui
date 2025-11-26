
import React, { useRef } from "react";
import { Paperclip, Sparkles, Command, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroProps {
  onNavigate: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scaleText = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const quickActions = [
    { label: 'Landing Page', slug: 'landing-page' },
    { label: 'Dashboard', slug: 'dashboard' },
    { label: 'Formulários de Auth', slug: 'auth-forms' },
    { label: 'E-commerce', slug: 'ecommerce' }
  ];

  return (
    <div ref={targetRef} className="relative pt-20 overflow-hidden min-h-[95vh] flex flex-col items-center justify-center perspective-1000">
      {/* Background Gradients with Parallax */}
      <motion.div 
        style={{ y: yBg, opacity: opacityBg }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none"
      >
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-blob" />
        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-4000" />
        
        {/* Neon lines */}
         <div className="hidden lg:flex gap-[5rem] rotate-[-20deg] absolute top-[-10rem] right-[-20rem] z-[0] blur-[3rem] opacity-30 pointer-events-none">
            <div className="w-[8rem] h-[40rem] bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"></div>
            <div className="w-[8rem] h-[40rem] bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"></div>
         </div>
      </motion.div>

      <motion.div 
        style={{ scale: scaleText }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8"
      >
        {/* Badge */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium text-gray-300 hover:bg-white/10 transition-colors cursor-pointer group hover:border-purple-500/50 shadow-[0_0_0_1px_rgba(0,0,0,0)] hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-500/20 text-purple-300 relative overflow-hidden">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
               />
               <Sparkles className="w-3 h-3 relative z-10" />
            </span>
            <span>AxionUI v2.0 já está disponível</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]"
        >
          Crie sites deslumbrantes <br className="hidden md:block" />
          <span className="relative inline-block">
             <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-50"></span>
             <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-sm">
                sem esforço.
             </span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          AxionUI fornece um conjunto abrangente de componentes acessíveis, prontos para copiar e colar, gerados para aplicações web modernas. Desenvolvido por IA, projetado para humanos.
        </motion.p>

        {/* Interactive Search Bar (Visual Only) */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative max-w-2xl mx-auto w-full group"
        >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative bg-[#0c0414] rounded-full p-2 pl-4 flex items-center shadow-2xl ring-1 ring-white/10 group-hover:ring-purple-500/50 transition-all">
              <Command className="w-5 h-5 text-gray-500 mr-3 group-focus-within:text-purple-400 transition-colors" />
              <input
                type="text"
                placeholder="Peça ao Axion para criar uma landing page..."
                className="bg-transparent flex-1 outline-none text-gray-200 placeholder-gray-600 h-10"
              />
              <div className="flex gap-2">
                 <button className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                    <Paperclip className="w-4 h-4" />
                 </button>
                 <button className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-purple-900/20 hover:shadow-purple-700/40">
                    <Sparkles className="w-4 h-4" />
                    <span>Gerar</span>
                 </button>
              </div>
            </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 pt-4"
        >
           {quickActions.map((action, i) => (
             <motion.button 
                key={action.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                onClick={() => onNavigate(action.slug)}
                className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-sm text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all active:scale-95 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]"
             >
               {action.label}
             </motion.button>
           ))}
        </motion.div>
      </motion.div>
    </div>
  );
};