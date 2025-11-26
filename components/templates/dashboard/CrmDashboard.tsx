
import React from 'react';
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
                    <div key={i} className={`w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer transition-all group relative ${item.active ? 'bg-orange-500/10 text-orange-500' : 'text-zinc-500 hover:bg-zinc-800 hover:text-zinc-200'}`}>
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
                 <div className="ml-auto flex items-center gap-2">
                     <span className="text-xs text-zinc-500">Last updated: Just now</span>
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
                                        <div className={`w-2 h-2 rounded-full ${col.color}`}></div>
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
};
