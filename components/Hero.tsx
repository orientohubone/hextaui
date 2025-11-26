import React from "react";
import { Paperclip, Sparkles, Command, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative pt-20 overflow-hidden min-h-[90vh] flex flex-col items-center justify-center">
      {/* Background Gradients (Fixed skew/rotate logic) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-blob" />
        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-4000" />
        
        {/* Neon lines adapted from request */}
         <div className="hidden lg:flex gap-[5rem] rotate-[-20deg] absolute top-[-10rem] right-[-20rem] z-[0] blur-[3rem] opacity-30 pointer-events-none">
            <div className="w-[8rem] h-[40rem] bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"></div>
            <div className="w-[8rem] h-[40rem] bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"></div>
         </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
        {/* Badge */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium text-gray-300 hover:bg-white/10 transition-colors cursor-pointer group">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-500/20 text-purple-300">
               <Sparkles className="w-3 h-3" />
            </span>
            <span>HextaUI v2.0 já está disponível</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]"
        >
          Crie sites deslumbrantes <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            sem esforço.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
        >
          HextaUI fornece um conjunto abrangente de componentes acessíveis, prontos para copiar e colar, gerados para aplicações web modernas. Desenvolvido por IA, projetado para humanos.
        </motion.p>

        {/* Interactive Search Bar (Visual Only) */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative max-w-2xl mx-auto w-full group"
        >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-[#1c1528] rounded-full p-2 pl-4 flex items-center shadow-2xl ring-1 ring-white/10">
              <Command className="w-5 h-5 text-gray-500 mr-3" />
              <input
                type="text"
                placeholder="Peça ao Hexta para criar uma landing page..."
                className="bg-transparent flex-1 outline-none text-gray-200 placeholder-gray-600 h-10"
              />
              <div className="flex gap-2">
                 <button className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                    <Paperclip className="w-4 h-4" />
                 </button>
                 <button className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all">
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
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 pt-4"
        >
           {['Landing Page', 'Dashboard', 'Formulários de Auth', 'E-commerce'].map((tag) => (
             <button key={tag} className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-sm text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
               {tag}
             </button>
           ))}
        </motion.div>
      </div>
    </div>
  );
};