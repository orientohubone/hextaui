
import React from 'react';
import { SaasLanding } from '../components/templates/landing/SaasLanding';
import { PortfolioLanding } from '../components/templates/landing/PortfolioLanding';
import { MobileLanding } from '../components/templates/landing/MobileLanding';
import { CryptoLanding } from '../components/templates/landing/CryptoLanding';
import { EventLanding } from '../components/templates/landing/EventLanding';

import { AnalyticsDashboard } from '../components/templates/dashboard/AnalyticsDashboard';
import { EcommerceDashboard } from '../components/templates/dashboard/EcommerceDashboard';
import { CrmDashboard } from '../components/templates/dashboard/CrmDashboard';
import { ProjectDashboard } from '../components/templates/dashboard/ProjectDashboard';
import { FinanceDashboard } from '../components/templates/dashboard/FinanceDashboard';

export interface TemplateEntry {
  component: React.ComponentType;
  code: string;
}

const saasCode = `import React from 'react';
import { Button } from '../../ui/Button';
import { CheckCircle2, BarChart3, Globe, Shield, ArrowRight, Menu, Zap, MessageSquare, HelpCircle } from 'lucide-react';

export const SaasLanding = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30">
      {/* Navbar */}
      <nav className="border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              S
            </div>
            <span>SaaS<span className="text-blue-500">Flow</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-slate-300 hover:text-white hidden sm:block">Log in</button>
            <Button className="bg-blue-600 hover:bg-blue-500 text-white border-none">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-xs font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            v2.0 is now live
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            Manage your team <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              with total confidence.
            </span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            The all-in-one platform designed to streamline your workflow, boost productivity, 
            and help you scale without the chaos.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white h-12 px-8 text-base">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base border-slate-700 hover:bg-slate-800">
              <span className="flex items-center gap-2">View Demo <ArrowRight className="w-4 h-4" /></span>
            </Button>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-20 relative mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-2 shadow-2xl shadow-blue-900/20">
              <div className="rounded-lg bg-slate-950 border border-slate-800 aspect-[16/9] flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-10 border-b border-slate-800 bg-slate-900 flex items-center px-4 gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <BarChart3 className="w-16 h-16 text-slate-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 border-y border-slate-800 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-sm font-semibold text-slate-500 mb-8 uppercase tracking-wider">Trusted by innovative teams</p>
            <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-50 hover:opacity-100 transition-opacity duration-500">
                <div className="flex items-center gap-2 font-bold text-xl"><div className="w-6 h-6 bg-white rounded-full"></div> ACME Corp</div>
                <div className="flex items-center gap-2 font-bold text-xl"><div className="w-6 h-6 bg-white rounded-md rotate-45"></div> Globex</div>
            </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything you need</h2>
            <p className="text-slate-400">Powerful features to help you grow your business.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Global Scale", desc: "Deploy your app in seconds to over 30 regions worldwide." },
              { icon: Shield, title: "Enterprise Security", desc: "Bank-grade security standards to keep your data safe." },
              { icon: BarChart3, title: "Real-time Analytics", desc: "Gain insights into your users with powerful dashboarding." },
            ].map((f, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-colors group">
                <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                <p className="text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Simple pricing</h2>
                <p className="text-slate-400">Start free, upgrade when you love it.</p>
            </div>
            {/* Pricing cards... */}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 bg-slate-950 text-sm">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-500">
            <p>© 2024 SaaSFlow Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};`;

const portfolioCode = `import React from 'react';
import { ArrowUpRight, Instagram, Twitter, Mail, Dribbble } from 'lucide-react';
import { Button } from '../../ui/Button';

export const PortfolioLanding = () => {
  return (
    <div className="min-h-screen bg-[#0f0518] text-white font-sans selection:bg-pink-500/30">
      <header className="flex justify-between items-center px-6 py-12 max-w-6xl mx-auto">
          <span className="font-bold text-xl tracking-tighter">ALEX.DESIGN</span>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
              <a href="#work">Work</a><a href="#services">Services</a>
          </nav>
      </header>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <section className="mb-32">
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9] mb-8">
            DIGITAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">EXPERIENCE</span>
          </h1>
        </section>

        <section id="work" className="mb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Work Items */}
            </div>
        </section>

        <footer id="contact" className="border-t border-white/10 pt-24 pb-12">
            <h2 className="text-5xl font-bold mb-6">Let's build something amazing.</h2>
            <a href="mailto:hello@alex.design" className="text-3xl text-pink-500 underline">hello@alex.design</a>
        </footer>
      </div>
    </div>
  );
};`;

const mobileCode = `import React from 'react';
import { Smartphone, Download, Star, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '../../ui/Button';

export const MobileLanding = () => {
  return (
    <div className="min-h-screen bg-[#051108] text-white overflow-hidden">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-20">
            <div className="flex items-center gap-2 font-bold text-xl">SwiftPay</div>
            <Button className="bg-white text-black hover:bg-gray-100 rounded-full">Get App</Button>
        </nav>

        <div className="max-w-7xl mx-auto px-6 pt-12 pb-24 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">Banking for the New Generation.</h1>
                    <div className="flex gap-4">
                        <button className="bg-white text-black px-6 py-3 rounded-xl">App Store</button>
                    </div>
                </div>
                {/* Phone Mockup */}
            </div>
        </div>

        <section className="py-24 bg-[#08180d]">
             <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-4 text-center">Simplicity at its core</h2>
             </div>
        </section>
    </div>
  );
};`;

const cryptoCode = `import React from 'react';
import { Button } from '../../ui/Button';
import { Wallet, TrendingUp, Lock, Globe, Activity } from 'lucide-react';

export const CryptoLanding = () => {
  return (
    <div className="min-h-screen bg-[#090014] text-white overflow-hidden relative">
      <header className="relative z-20 border-b border-white/5 bg-[#090014]/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
             <div className="font-mono text-2xl font-bold tracking-widest text-violet-400">NEXUSCHAIN</div>
             <Button className="bg-violet-600 hover:bg-violet-500 text-white border-none">Connect Wallet</Button>
        </div>
      </header>

      <main className="relative z-10 pt-20 pb-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8">NEXT GEN TRADING</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
                {/* Stats */}
            </div>
        </div>
      </main>

      <section className="py-24 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">Market Trends</h2>
            {/* Market Table */}
        </div>
      </section>
    </div>
  );
};`;

const eventCode = `import React from 'react';
import { Button } from '../../ui/Button';
import { Calendar, Clock, MapPin, Users, Mic, Play, ArrowRight, CheckCircle2, Star } from 'lucide-react';

export const EventLanding = () => {
  return (
    <div className="min-h-screen bg-[#0a0505] text-white font-sans selection:bg-orange-500/30 overflow-hidden">
      
      {/* Navbar */}
      <nav className="border-b border-white/5 bg-[#0a0505]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white">
              E
            </div>
            <span>ELEVATE<span className="text-orange-500">24</span></span>
          </div>
          <Button className="bg-orange-600 hover:bg-orange-500 text-white rounded-full px-6">
            Register Now
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* ... */}
      </section>
    </div>
  );
};
`;

const analyticsCode = `import React from 'react';
import { Button } from '../../ui/Button';
import { LayoutDashboard, PieChart, Users, Settings, Bell, Search, ArrowUpRight, ArrowDownRight, MoreHorizontal, Globe } from 'lucide-react';

export const AnalyticsDashboard = () => {
  return (
    <div className="flex h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800/50 bg-slate-950 hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-800/50">
           <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold mr-3">A</div>
           <span className="font-bold text-lg">Analytics<span className="text-blue-500">Pro</span></span>
        </div>
        {/* Nav Items */}
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 border-b border-slate-800/50 bg-slate-950/50 flex items-center justify-between px-6 backdrop-blur-sm z-10">
            {/* Header content */}
        </header>

        <div className="flex-1 overflow-y-auto p-6 md:p-8 scrollbar-thin scrollbar-thumb-slate-800">
            <h1 className="text-2xl font-bold text-white mb-8">Overview</h1>
            
            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Cards */}
            </div>

            {/* Charts Area */}
            <div className="grid lg:grid-cols-3 gap-8 mb-8">
                {/* Main Chart */}
            </div>
        </div>
      </main>
    </div>
  );
};`;

const ecommerceCode = `import React from 'react';
import { Button } from '../../ui/Button';
import { ShoppingBag, Package, Users, Truck, Search, MoreVertical, CheckCircle, AlertCircle, Clock } from 'lucide-react';

export const EcommerceDashboard = () => {
  return (
    <div className="flex h-screen bg-[#020c06] text-emerald-50 font-sans selection:bg-emerald-500/30 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-20 lg:w-64 border-r border-emerald-900/30 bg-[#05140a] flex flex-col transition-all duration-300">
         {/* ... */}
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col min-w-0">
         <header className="h-20 bg-[#05140a]/50 border-b border-emerald-900/30 backdrop-blur-md flex items-center justify-between px-8">
            <h2 className="text-2xl font-bold text-white">Dashboard</h2>
         </header>

         <div className="flex-1 overflow-y-auto p-8 scrollbar-thin scrollbar-thumb-emerald-900">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {/* Stat Cards */}
            </div>

            {/* Recent Orders Table */}
            <div className="bg-[#05140a] rounded-2xl border border-emerald-900/30 overflow-hidden shadow-xl shadow-black/20">
                {/* Table */}
            </div>
         </div>
      </main>
    </div>
  );
};`;

const crmCode = `import React from 'react';
import { Button } from '../../ui/Button';
import { 
  Trello, Search, Plus, MoreHorizontal, Calendar, 
  Paperclip, MessageSquare, GripVertical, Filter,
  ArrowUpRight, DollarSign, User
} from 'lucide-react';

export const CrmDashboard = () => {
  return (
    <div className="flex h-screen bg-[#09090b] text-zinc-200 font-sans selection:bg-orange-500/30 overflow-hidden">
        {/* Sidebar Mini */}
        <aside className="w-16 bg-[#0c0c0e] border-r border-white/5 flex flex-col items-center py-6 gap-6 z-20">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-900/20">
                <Trello className="w-5 h-5" />
            </div>
            {/* Nav Icons */}
            <div className="flex flex-col gap-4 w-full px-2 mt-4">
                {[
                    { active: true, icon: Trello },
                    { active: false, icon: Calendar },
                    { active: false, icon: MessageSquare },
                    { active: false, icon: User },
                ].map((item, i) => (
                    <div key={i} className={\`w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer transition-all group relative \${item.active ? 'bg-orange-500/10 text-orange-500' : 'text-zinc-500 hover:bg-zinc-800 hover:text-zinc-200'}\`}>
                        <item.icon className="w-5 h-5" />
                        {item.active && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-orange-500 rounded-r-full"></div>}
                    </div>
                ))}
            </div>
            <div className="mt-auto">
                 <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-xs font-bold text-zinc-400">JD</div>
            </div>
        </aside>

        <main className="flex-1 flex flex-col min-w-0">
            {/* Header */}
            <header className="h-16 border-b border-white/5 bg-[#09090b]/50 backdrop-blur-md flex items-center justify-between px-6 z-10">
                <div className="flex items-center gap-6">
                    <h2 className="text-lg font-bold text-white tracking-tight">Sales Pipeline</h2>
                    <div className="h-6 w-[1px] bg-white/10"></div>
                    <div className="flex items-center gap-2 bg-zinc-900/50 p-1 rounded-lg border border-white/5">
                        <button className="px-3 py-1 bg-zinc-800 rounded-md text-xs font-medium text-white shadow-sm">Board</button>
                        <button className="px-3 py-1 text-xs font-medium text-zinc-500 hover:text-white transition-colors">List</button>
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="hidden md:flex items-center bg-zinc-900 rounded-md px-3 border border-white/5 w-64">
                        <Search className="w-4 h-4 text-zinc-500" />
                        <input className="bg-transparent border-none outline-none text-sm ml-2 w-full text-zinc-300 placeholder-zinc-600" placeholder="Search deals..." />
                    </div>
                    <Button variant="outline" size="sm" className="border-white/10 text-zinc-400 hover:bg-zinc-900 hover:text-white gap-2">
                        <Filter className="w-3.5 h-3.5" /> Filter
                    </Button>
                    <Button size="sm" className="bg-orange-600 hover:bg-orange-500 text-white border-none gap-2 shadow-lg shadow-orange-900/20">
                        <Plus className="w-4 h-4" /> New Deal
                    </Button>
                </div>
            </header>

            {/* Board Controls / Summary */}
            <div className="h-14 border-b border-white/5 bg-[#09090b] flex items-center px-6 gap-6 overflow-x-auto no-scrollbar">
                 <div className="flex items-center gap-2 text-sm">
                    <span className="text-zinc-500">Total Pipeline:</span>
                    <span className="text-white font-bold font-mono">$2.4M</span>
                 </div>
                 <div className="flex items-center gap-2 text-sm">
                    <span className="text-zinc-500">Avg. Deal Size:</span>
                    <span className="text-white font-bold font-mono">$42k</span>
                 </div>
            </div>

            {/* Kanban Board Area */}
            <div className="flex-1 overflow-x-auto overflow-y-hidden p-6 bg-[#09090b]">
                <div className="flex h-full gap-6 min-w-[1200px]">
                    {[
                        { title: "Lead In", count: 8, value: "$120k", color: "bg-blue-500" },
                        { title: "Contact Made", count: 4, value: "$85k", color: "bg-yellow-500" },
                        { title: "Proposal Sent", count: 5, value: "$450k", color: "bg-orange-500" },
                        { title: "Negotiation", count: 2, value: "$210k", color: "bg-purple-500" },
                        { title: "Closed Won", count: 12, value: "$1.2M", color: "bg-green-500" },
                    ].map((col, i) => (
                        <div key={i} className="flex-1 flex flex-col min-w-[280px] max-w-[320px] group/col">
                            {/* Column Header */}
                            <div className="flex justify-between items-start mb-4 px-1">
                                <div>
                                    <h3 className="font-bold text-sm text-zinc-200 flex items-center gap-2 mb-1">
                                        <div className={\`w-2 h-2 rounded-full \${col.color}\`}></div>
                                        {col.title}
                                    </h3>
                                    <div className="text-xs text-zinc-500 font-mono">{col.value}</div>
                                </div>
                                <span className="text-xs font-bold text-zinc-500 bg-zinc-900 border border-white/5 px-2 py-0.5 rounded-full">{col.count}</span>
                            </div>
                            
                            {/* Cards Container */}
                            <div className="flex-1 bg-zinc-900/30 rounded-xl border border-white/5 p-2 space-y-3 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800">
                                {/* Simulated Cards */}
                                {[...Array(col.count > 3 ? 3 : col.count)].map((_, idx) => (
                                    <div key={idx} className="bg-[#0f0f11] p-4 rounded-lg border border-white/5 hover:border-orange-500/30 shadow-sm cursor-grab active:cursor-grabbing group transition-all hover:-translate-y-1 hover:shadow-lg relative">
                                        {/* Drag Handle Hover */}
                                        <div className="absolute left-2 top-1/2 -translate-y-1/2 text-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <GripVertical className="w-4 h-4" />
                                        </div>

                                        <div className="pl-2">
                                            <div className="flex justify-between items-start mb-2">
                                                <div className="flex gap-2 flex-wrap">
                                                    {idx === 0 && <span className="px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20 text-[10px] font-bold uppercase tracking-wide">Hot</span>}
                                                    <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-white/5 text-[10px] font-bold uppercase tracking-wide">SaaS</span>
                                                </div>
                                                <button className="text-zinc-600 hover:text-white transition-colors">
                                                    <MoreHorizontal className="w-4 h-4" />
                                                </button>
                                            </div>
                                            
                                            <h4 className="font-bold text-zinc-200 text-sm mb-1 group-hover:text-orange-400 transition-colors">Enterprise License</h4>
                                            <div className="text-sm font-bold text-white mb-3">$24,000</div>
                                            
                                            <div className="flex justify-between items-center pt-3 border-t border-white/5">
                                                <div className="text-xs text-zinc-500">Acme Corp</div>
                                                <div className="w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[10px] text-zinc-300">JD</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <button className="w-full py-2 flex items-center justify-center gap-2 text-zinc-500 hover:text-orange-400 hover:bg-orange-500/5 rounded-lg text-sm transition-colors border border-dashed border-zinc-800 hover:border-orange-500/30">
                                    <Plus className="w-4 h-4" /> Add Deal
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    </div>
  );
};`;

const projectCode = `import React from 'react';
import { Button } from '../../ui/Button';
import { CheckCircle2, Circle, Clock, MoreHorizontal, Plus, Search, Sidebar, Filter, Layers, Calendar } from 'lucide-react';

export const ProjectDashboard = () => {
  return (
    <div className="flex h-screen bg-[#0f0518] text-purple-50 font-sans selection:bg-purple-500/30 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-[#160824] border-r border-purple-900/20 flex flex-col">
            <div className="h-14 flex items-center px-4 border-b border-purple-900/20">
                <span className="font-bold">Taskify</span>
            </div>
            {/* Nav */}
        </aside>

        {/* Main View */}
        <main className="flex-1 flex flex-col min-w-0">
            {/* Header */}
            <header className="h-16 border-b border-purple-900/20 flex items-center justify-between px-6 bg-[#0f0518]/50 backdrop-blur-sm">
                <h2 className="font-bold text-white leading-none">Q4 Marketing Launch</h2>
            </header>

            {/* Content (Task List) */}
            <div className="flex-1 overflow-auto p-6">
                {/* Tasks */}
            </div>
        </main>
    </div>
  );
};`;

const financeCode = `import React from 'react';
import { Button } from '../../ui/Button';
import { Wallet, PieChart, ArrowUpRight, ArrowDownLeft, CreditCard, Send, Plus, MoreHorizontal, History } from 'lucide-react';

export const FinanceDashboard = () => {
  return (
    <div className="flex h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-zinc-700/30 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-20 md:w-64 border-r border-zinc-900 bg-[#0c0c0c] flex flex-col">
            {/* Nav */}
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col min-w-0 p-8 overflow-y-auto">
            <header className="flex justify-between items-center mb-12">
                <h1 className="text-3xl font-bold text-white">Financial Overview</h1>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                {/* Balance Card & Virtual Card */}
                {/* Transactions List */}
            </div>
        </main>
    </div>
  );
};`;

export const templateRegistry: Record<string, TemplateEntry> = {
  // Landing Pages
  'lp-1': { component: SaasLanding, code: saasCode },
  'lp-2': { component: PortfolioLanding, code: portfolioCode },
  'lp-3': { component: MobileLanding, code: mobileCode },
  'lp-4': { component: CryptoLanding, code: cryptoCode },
  'lp-5': { component: EventLanding, code: eventCode },
  
  // Dashboards
  'dash-1': { component: AnalyticsDashboard, code: analyticsCode },
  'dash-2': { component: EcommerceDashboard, code: ecommerceCode },
  'dash-3': { component: CrmDashboard, code: crmCode },
  'dash-4': { component: ProjectDashboard, code: projectCode },
  'dash-5': { component: FinanceDashboard, code: financeCode },
};
