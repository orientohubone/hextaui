
import React from 'react';
import { Button } from '../../ui/Button';
import { 
  LayoutDashboard, PieChart, Users, Settings, Bell, Search, 
  ArrowUpRight, ArrowDownRight, MoreHorizontal, Globe, Eye 
} from 'lucide-react';

export const AnalyticsDashboard = () => {
  return (
    <div className="flex h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800/50 bg-slate-950 hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-800/50">
           <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold mr-3">A</div>
           <span className="font-bold text-lg">Analytics<span className="text-blue-500">Pro</span></span>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
           <div className="px-3 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">Dashboards</div>
           {['Overview', 'Real-time', 'Audiences', 'Attribution'].map((item, i) => (
             <button key={i} className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${i === 0 ? 'bg-blue-600/10 text-blue-400' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'}`}>
                <LayoutDashboard className="w-4 h-4" />
                {item}
             </button>
           ))}
           
           <div className="px-3 mt-6 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">Reports</div>
           {['Behavior', 'Conversions', 'Events'].map((item, i) => (
             <button key={i} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-900 transition-colors">
                <PieChart className="w-4 h-4" />
                {item}
             </button>
           ))}
        </div>

        <div className="p-4 border-t border-slate-800/50">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold">JD</div>
                <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">John Doe</div>
                    <div className="text-xs text-slate-500 truncate">john@analytics.com</div>
                </div>
                <Settings className="w-4 h-4 text-slate-500 cursor-pointer hover:text-slate-300" />
            </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 border-b border-slate-800/50 bg-slate-950/50 flex items-center justify-between px-6 backdrop-blur-sm z-10">
            <div className="flex items-center gap-4 flex-1">
                <Search className="w-4 h-4 text-slate-500" />
                <input type="text" placeholder="Search data..." className="bg-transparent border-none outline-none text-sm text-slate-300 placeholder-slate-600 w-full max-w-md" />
            </div>
            <div className="flex items-center gap-4">
                <button className="relative text-slate-400 hover:text-slate-200">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full"></span>
                </button>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-500 text-white border-none">Export Report</Button>
            </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 scrollbar-thin scrollbar-thumb-slate-800">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-white mb-2">Overview</h1>
                    <p className="text-slate-400">Welcome back, here's what's happening today.</p>
                </div>
                <div className="flex bg-slate-900 rounded-lg p-1 border border-slate-800">
                    {['12M', '30D', '7D', '24H'].map((t, i) => (
                        <button key={i} className={`px-3 py-1 rounded text-xs font-medium ${i === 2 ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}>{t}</button>
                    ))}
                </div>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                    { label: "Total Views", val: "2.4M", change: "+12.5%", isUp: true },
                    { label: "Unique Visitors", val: "842K", change: "+8.2%", isUp: true },
                    { label: "Bounce Rate", val: "42.3%", change: "-2.1%", isUp: true }, // 'Good' negative
                    { label: "Avg. Session", val: "4m 12s", change: "-4.5%", isUp: false },
                ].map((kpi, i) => (
                    <div key={i} className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-slate-500 text-sm font-medium">{kpi.label}</span>
                            <span className={`flex items-center text-xs font-bold ${kpi.isUp ? 'text-green-400' : 'text-red-400'}`}>
                                {kpi.change}
                                {kpi.isUp ? <ArrowUpRight className="w-3 h-3 ml-1" /> : <ArrowDownRight className="w-3 h-3 ml-1" />}
                            </span>
                        </div>
                        <div className="text-3xl font-bold text-white">{kpi.val}</div>
                    </div>
                ))}
            </div>

            {/* Main Charts Area */}
            <div className="grid lg:grid-cols-3 gap-8 mb-8">
                {/* Simulated Area Chart */}
                <div className="lg:col-span-2 p-6 rounded-xl bg-slate-900/50 border border-slate-800">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-semibold text-white">Traffic Overview</h3>
                        <MoreHorizontal className="w-5 h-5 text-slate-500 cursor-pointer" />
                    </div>
                    
                    {/* CSS Only Bar Chart Simulation */}
                    <div className="h-64 flex items-end justify-between gap-2">
                        {[40, 65, 45, 80, 55, 70, 40, 60, 75, 50, 85, 95].map((h, i) => (
                            <div key={i} className="w-full bg-blue-500/10 rounded-t-sm relative group">
                                <div 
                                    className="absolute bottom-0 left-0 right-0 bg-blue-600 rounded-t-sm transition-all duration-500 group-hover:bg-blue-400" 
                                    style={{ height: `${h}%` }} 
                                />
                                <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded pointer-events-none transition-opacity">
                                    {h * 100}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 text-xs text-slate-500">
                        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                        <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                    </div>
                </div>

                {/* Simulated Donut Chart / Top Sources */}
                <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
                     <h3 className="font-semibold text-white mb-6">Traffic Sources</h3>
                     <div className="space-y-6">
                        {[
                            { name: "Direct", val: 45, col: "bg-blue-500" },
                            { name: "Social", val: 32, col: "bg-cyan-500" },
                            { name: "Referral", val: 15, col: "bg-indigo-500" },
                            { name: "Organic", val: 8, col: "bg-slate-600" },
                        ].map((item, i) => (
                            <div key={i}>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-slate-300">{item.name}</span>
                                    <span className="text-slate-500">{item.val}%</span>
                                </div>
                                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <div className={`h-full ${item.col}`} style={{ width: `${item.val}%` }}></div>
                                </div>
                            </div>
                        ))}
                     </div>
                </div>
            </div>

            {/* Recent Pages Table */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden">
                <div className="p-6 border-b border-slate-800 flex justify-between items-center">
                    <h3 className="font-semibold text-white">Top Pages</h3>
                    <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">View All</Button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-950/50 text-slate-400 font-medium">
                            <tr>
                                <th className="p-4 pl-6">Page Name</th>
                                <th className="p-4">Visitors</th>
                                <th className="p-4">Unique</th>
                                <th className="p-4">Bounce Rate</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800 text-slate-300">
                            {[
                                { page: "/home", visitors: "45,231", unique: "34,102", bounce: "42%" },
                                { page: "/pricing", visitors: "21,405", unique: "18,200", bounce: "25%" },
                                { page: "/blog/new-features", visitors: "15,932", unique: "12,400", bounce: "55%" },
                                { page: "/contact", visitors: "8,200", unique: "7,100", bounce: "30%" },
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-slate-800/50 transition-colors">
                                    <td className="p-4 pl-6 flex items-center gap-2">
                                        <Globe className="w-4 h-4 text-slate-500" />
                                        {row.page}
                                    </td>
                                    <td className="p-4">{row.visitors}</td>
                                    <td className="p-4">{row.unique}</td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-blue-500" style={{ width: row.bounce }}></div>
                                            </div>
                                            <span className="text-xs">{row.bounce}</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};
