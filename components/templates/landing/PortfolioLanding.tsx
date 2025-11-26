
import React from 'react';
import { ArrowUpRight, Instagram, Twitter, Mail, Dribbble, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '../../ui/Button';

export const PortfolioLanding = () => {
  return (
    <div className="min-h-screen bg-[#0f0518] text-white font-sans selection:bg-pink-500/30">
      
      {/* Abstract Background */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-pink-600/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-600/20 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex justify-between items-center mb-24">
          <span className="font-bold text-xl tracking-tighter">ALEX<span className="text-pink-500">.DESIGN</span></span>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
              <a href="#work" className="hover:text-white transition-colors">Work</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
          </nav>
          <Button variant="ghost" className="rounded-full border border-white/10 hover:bg-white/10">Let's Talk</Button>
        </header>

        {/* Hero */}
        <section className="mb-32">
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9] mb-8">
            DIGITAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">EXPERIENCE</span> <br />
            DESIGNER
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
             <p className="max-w-md text-xl text-gray-400 leading-relaxed">
               I craft interfaces that blend aesthetics with functionality, creating memorable digital journeys for forward-thinking brands.
             </p>
             <div className="flex gap-4">
                {[Twitter, Instagram, Dribbble].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                        <Icon className="w-5 h-5" />
                    </a>
                ))}
             </div>
          </div>
        </section>

        {/* Selected Work */}
        <section id="work" className="mb-32">
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-4xl font-bold">Selected Work</h2>
                <span className="text-gray-500">(2023 - 2024)</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                    { title: "Neon Dreams", cat: "Brand Identity", color: "bg-pink-500/10 border-pink-500/20", height: "h-[400px]" },
                    { title: "Future UI", cat: "Web Design", color: "bg-purple-500/10 border-purple-500/20", height: "h-[300px] md:mt-20" },
                    { title: "Dark Mode", cat: "Mobile App", color: "bg-blue-500/10 border-blue-500/20", height: "h-[350px]" },
                    { title: "Glass Effect", cat: "Art Direction", color: "bg-orange-500/10 border-orange-500/20", height: "h-[450px] md:-mt-20" },
                ].map((item, i) => (
                    <div key={i} className={`relative group ${item.height} rounded-2xl border ${item.color} overflow-hidden cursor-pointer`}>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-60 transition-opacity" />
                        <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">{item.cat}</p>
                            <h3 className="text-3xl font-bold flex items-center gap-2">
                                {item.title}
                                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <Button variant="outline" className="rounded-full border-white/10 px-8">View All Projects</Button>
            </div>
        </section>

        {/* Services */}
        <section id="services" className="mb-32 py-12 border-t border-white/10">
            <h2 className="text-4xl font-bold mb-16">Expertise</h2>
            <div className="grid md:grid-cols-3 gap-12">
                {[
                    { title: "Product Design", desc: "End-to-end product design from user research to final UI handover." },
                    { title: "Brand Identity", desc: "Creating distinct visual systems that help brands stand out." },
                    { title: "Development", desc: "Bringing designs to life with clean, performant React & Tailwind code." },
                ].map((s, i) => (
                    <div key={i} className="group">
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all">
                            {i + 1}
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Clients */}
        <section className="mb-32 text-center">
             <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-12">Worked with industry leaders</p>
             <div className="flex flex-wrap justify-center items-center gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                 {/* Mock Logos */}
                 <span className="text-2xl font-black tracking-tighter">NIKE</span>
                 <span className="text-2xl font-black tracking-tighter">APPLE</span>
                 <span className="text-2xl font-black tracking-tighter">SPOTIFY</span>
                 <span className="text-2xl font-black tracking-tighter">LINEAR</span>
             </div>
        </section>

        {/* Footer / Contact */}
        <footer id="contact" className="border-t border-white/10 pt-24 pb-12">
            <div className="flex flex-col md:flex-row justify-between gap-12 mb-24">
                <div>
                    <h2 className="text-5xl font-bold mb-6">Let's build something <br /> amazing together.</h2>
                    <a href="mailto:hello@alex.design" className="text-3xl text-pink-500 hover:text-white underline decoration-pink-500/30 underline-offset-8 transition-colors">
                        hello@alex.design
                    </a>
                </div>
                <div className="space-y-4 text-gray-400">
                    <p>Open for new opportunities <br /> starting March 2024.</p>
                    <div className="flex gap-4 pt-4">
                        <a href="#" className="hover:text-white">LinkedIn</a>
                        <a href="#" className="hover:text-white">Twitter</a>
                        <a href="#" className="hover:text-white">Instagram</a>
                    </div>
                </div>
            </div>
            
            <div className="flex justify-between items-center text-sm text-gray-600">
                <p>© 2024 Alex Design. All rights reserved.</p>
                <div className="flex gap-8">
                    <span>Terms</span>
                    <span>Privacy</span>
                </div>
            </div>
        </footer>

      </div>
    </div>
  );
};
