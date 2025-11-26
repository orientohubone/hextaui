
import React from 'react';
import { Button } from '../../ui/Button';
import { 
  CheckCircle2, Circle, Clock, MoreHorizontal, Plus, 
  Search, Sidebar, Filter, Layers, Calendar
} from 'lucide-react';

export const ProjectDashboard = () => {
  return (
    <div className="flex h-screen bg-[#0f0518] text-purple-50 font-sans selection:bg-purple-500/30 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-[#160824] border-r border-purple-900/20 flex flex-col">
            <div className="h-14 flex items-center px-4 border-b border-purple-900/20">
                <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center text-white mr-2">
                    <Layers className="w-4 h-4" />
                </div>
                <span className="font-bold">Taskify</span>
            </div>
            
            <div className="p-4 space-y-6">
                <div>
                    <div className="text-xs font-bold text-purple-400/50 uppercase tracking-wider mb-2 px-2">Workspace</div>
                    <div className="space-y-1">
                        {['My Tasks', 'Inbox', 'Goals', 'Portfolios'].map((item, i) => (
                            <button key={i} className={`w-full text-left px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${i === 0 ? 'bg-purple-500/10 text-purple-300' : 'text-purple-300/60 hover:text-purple-200 hover:bg-purple-900/20'}`}>
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="text-xs font-bold text-purple-400/50 uppercase tracking-wider mb-2 px-2">Projects</div>
                    <div className="space-y-1">
                        {['Q4 Marketing Launch', 'Mobile App Redesign', 'Website Refresh'].map((item, i) => (
                             <button key={i} className="w-full text-left px-3 py-1.5 rounded-md text-sm font-medium text-purple-300/60 hover:text-purple-200 hover:bg-purple-900/20 flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-pink-500' : i === 1 ? 'bg-blue-500' : 'bg-green-500'}`}></div>
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </aside>

        {/* Main View */}
        <main className="flex-1 flex flex-col min-w-0">
            {/* Header */}
            <header className="h-16 border-b border-purple-900/20 flex items-center justify-between px-6 bg-[#0f0518]/50 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded bg-pink-500 flex items-center justify-center text-white font-bold text-sm">M</div>
                    <div>
                        <h2 className="font-bold text-white leading-none">Q4 Marketing Launch</h2>
                        <div className="text-xs text-purple-400 mt-1 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span> On Track
                        </div>
                    </div>
                </div>
                
                <div className="flex items-center gap-3">
                    <div className="flex -space-x-2 mr-4">
                        {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0f0518] bg-purple-800"></div>)}
                    </div>
                    <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-200">Share</Button>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-500 text-white border-none">Customize</Button>
                </div>
            </header>

            {/* Content (Task List) */}
            <div className="flex-1 overflow-auto p-6">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex gap-1 bg-purple-900/20 p-1 rounded-lg">
                        {['List', 'Board', 'Timeline', 'Calendar'].map((t, i) => (
                            <button key={i} className={`px-4 py-1.5 rounded text-sm font-medium transition-colors ${i === 0 ? 'bg-purple-600 text-white shadow' : 'text-purple-400 hover:text-purple-200'}`}>
                                {t}
                            </button>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="border-purple-900/40 text-purple-400 hover:bg-purple-900/20 gap-2"><Filter className="w-3 h-3" /> Filter</Button>
                        <Button variant="outline" size="sm" className="border-purple-900/40 text-purple-400 hover:bg-purple-900/20 gap-2"><Search className="w-3 h-3" /> Search</Button>
                    </div>
                </div>

                {/* Task Sections */}
                {['To Do', 'In Progress', 'Review'].map((section, sIdx) => (
                    <div key={sIdx} className="mb-8">
                        <div className="flex items-center gap-2 mb-3 group">
                             <div className="w-6 h-6 rounded flex items-center justify-center hover:bg-purple-900/30 cursor-pointer text-purple-500">
                                 <Layers className="w-4 h-4" />
                             </div>
                             <h3 className="font-bold text-white">{section}</h3>
                             <span className="text-xs text-purple-500 font-mono">3</span>
                             <div className="flex-1 h-[1px] bg-purple-900/20 group-hover:bg-purple-900/40 transition-colors ml-2"></div>
                             <Plus className="w-4 h-4 text-purple-500 opacity-0 group-hover:opacity-100 cursor-pointer" />
                        </div>

                        <div className="space-y-1">
                            {[1, 2, 3].map((task, tIdx) => (
                                <div key={tIdx} className="group flex items-center gap-4 p-3 rounded-lg border border-transparent hover:bg-[#1a0c2e] hover:border-purple-900/30 transition-all cursor-default">
                                    <button className="text-purple-800 hover:text-purple-400 transition-colors">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </button>
                                    <div className="flex-1">
                                        <span className="text-purple-100 font-medium">Create social media assets for Week {task}</span>
                                    </div>
                                    
                                    <div className="flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="flex items-center gap-2 text-xs text-purple-400 bg-purple-900/20 px-2 py-1 rounded">
                                            <Calendar className="w-3 h-3" /> Oct {12 + tIdx}
                                        </div>
                                        <div className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${tIdx === 0 ? 'bg-red-500/20 text-red-300' : 'bg-blue-500/20 text-blue-300'}`}>
                                            {tIdx === 0 ? 'High' : 'Medium'}
                                        </div>
                                        <div className="w-6 h-6 rounded-full bg-purple-700 text-[10px] flex items-center justify-center text-white border border-purple-900">AB</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    </div>
  );
};
