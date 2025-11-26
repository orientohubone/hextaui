
import React from 'react';
import { Button } from '../../ui/Button';
import { 
  Wallet, PieChart, ArrowUpRight, ArrowDownLeft, CreditCard, 
  Send, Plus, MoreHorizontal, History
} from 'lucide-react';

export const FinanceDashboard = () => {
  return (
    <div className="flex h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-zinc-700/30 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-20 md:w-64 border-r border-zinc-900 bg-[#0c0c0c] flex flex-col">
            <div className="h-20 flex items-center justify-center md:justify-start md:px-8 border-b border-zinc-900">
                <div className="w-8 h-8 bg-zinc-100 rounded-full flex items-center justify-center text-black">
                    <Wallet className="w-4 h-4 fill-current" />
                </div>
                <span className="hidden md:block ml-3 font-bold text-white text-lg tracking-tight">Mono<span className="text-zinc-500">Bank</span></span>
            </div>
            
            <div className="flex-1 py-8 px-4 space-y-2">
                {[
                    { icon: PieChart, label: "Overview", active: true },
                    { icon: CreditCard, label: "Cards", active: false },
                    { icon: History, label: "Transactions", active: false },
                    { icon: Send, label: "Transfers", active: false },
                ].map((item, i) => (
                    <button key={i} className={`w-full flex items-center justify-center md:justify-start p-3 rounded-xl transition-all ${item.active ? 'bg-zinc-100 text-black shadow-lg shadow-white/10' : 'text-zinc-500 hover:text-white hover:bg-zinc-900'}`}>
                        <item.icon className="w-5 h-5" />
                        <span className="hidden md:block ml-3 font-medium">{item.label}</span>
                    </button>
                ))}
            </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col min-w-0 p-8 overflow-y-auto">
            <header className="flex justify-between items-center mb-12">
                <div>
                    <h1 className="text-3xl font-bold text-white">Financial Overview</h1>
                    <p className="text-zinc-500">Good evening, Alexander.</p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-white">Add Funds</Button>
                    <Button className="bg-white text-black hover:bg-zinc-200 border-none">Send Money</Button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                {/* Balance Card */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Virtual Card */}
                        <div className="aspect-[1.586/1] rounded-2xl bg-gradient-to-br from-zinc-800 to-black border border-zinc-800 p-6 flex flex-col justify-between relative overflow-hidden group">
                             {/* Noise Texture & Shine */}
                             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                             <div className="relative z-10 flex justify-between items-start">
                                 <div className="w-12 h-8 rounded bg-zinc-700/50 flex items-center px-2 gap-1">
                                     <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                     <div className="w-3 h-3 rounded-full bg-yellow-500/80 -ml-1.5 mix-blend-screen"></div>
                                 </div>
                                 <span className="font-mono text-zinc-500 text-lg">Debit</span>
                             </div>

                             <div className="relative z-10">
                                 <div className="font-mono text-2xl tracking-widest text-zinc-300 mb-2 group-hover:text-white transition-colors">4920 •••• •••• 1029</div>
                                 <div className="flex justify-between items-end">
                                     <div className="text-xs text-zinc-500 uppercase">Card Holder<br/><span className="text-zinc-300 text-sm normal-case font-bold">Alexander Doe</span></div>
                                     <div className="text-xs text-zinc-500 uppercase">Expires<br/><span className="text-zinc-300 text-sm normal-case font-bold">12/26</span></div>
                                 </div>
                             </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="space-y-4">
                             <div className="bg-zinc-900/50 rounded-2xl p-6 border border-zinc-800">
                                 <div className="text-zinc-500 text-sm mb-2">Total Balance</div>
                                 <div className="text-4xl font-bold text-white mb-2">$124,500.00</div>
                                 <div className="inline-flex items-center text-green-400 text-sm bg-green-400/10 px-2 py-1 rounded">
                                     <ArrowUpRight className="w-3 h-3 mr-1" /> +2.5%
                                 </div>
                             </div>
                             <div className="bg-zinc-900/50 rounded-2xl p-6 border border-zinc-800 flex justify-between items-center">
                                 <div>
                                     <div className="text-zinc-500 text-sm">Monthly Spend Limit</div>
                                     <div className="text-xl font-bold text-white">$8,240 / $10k</div>
                                 </div>
                                 <div className="w-16 h-16 rounded-full border-4 border-zinc-800 border-t-white flex items-center justify-center text-xs font-bold">82%</div>
                             </div>
                        </div>
                    </div>

                    {/* Chart Area */}
                    <div className="bg-zinc-900/30 rounded-2xl p-8 border border-zinc-800 h-80 flex flex-col">
                        <div className="flex justify-between mb-8">
                             <h3 className="font-bold text-white">Income vs Expense</h3>
                             <div className="flex gap-2">
                                 <div className="flex items-center gap-2 text-sm text-zinc-400"><div className="w-2 h-2 rounded-full bg-white"></div> Income</div>
                                 <div className="flex items-center gap-2 text-sm text-zinc-400"><div className="w-2 h-2 rounded-full bg-zinc-700"></div> Expense</div>
                             </div>
                        </div>
                        {/* CSS Bar Chart */}
                        <div className="flex-1 flex items-end justify-between gap-4">
                            {[60, 40, 75, 50, 90, 30, 80].map((h, i) => (
                                <div key={i} className="w-full flex gap-2 h-full items-end justify-center">
                                    <div className="w-3 bg-white rounded-t-sm" style={{ height: `${h}%` }}></div>
                                    <div className="w-3 bg-zinc-800 rounded-t-sm" style={{ height: `${h * 0.6}%` }}></div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-4 text-xs text-zinc-600 uppercase font-bold tracking-wider">
                            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                        </div>
                    </div>
                </div>

                {/* Right Column (Transactions) */}
                <div className="bg-zinc-900/30 rounded-2xl border border-zinc-800 flex flex-col">
                    <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
                         <h3 className="font-bold text-white">Transactions</h3>
                         <button className="text-zinc-500 hover:text-white"><MoreHorizontal className="w-5 h-5" /></button>
                    </div>
                    <div className="flex-1 overflow-auto p-4 space-y-1">
                        {[
                            { name: "Apple Store", cat: "Electronics", amount: "-$1,299.00", date: "Today", icon: "A" },
                            { name: "Uber", cat: "Transport", amount: "-$24.50", date: "Today", icon: "U" },
                            { name: "Salary Deposit", cat: "Income", amount: "+$4,500.00", date: "Yesterday", icon: "$", positive: true },
                            { name: "Starbucks", cat: "Food", amount: "-$12.40", date: "Yesterday", icon: "S" },
                            { name: "Netflix", cat: "Subscription", amount: "-$15.99", date: "Oct 24", icon: "N" },
                            { name: "Spotify", cat: "Subscription", amount: "-$9.99", date: "Oct 24", icon: "S" },
                        ].map((tx, i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-800/50 transition-colors group cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-zinc-400 group-hover:bg-white group-hover:text-black transition-colors">{tx.icon}</div>
                                    <div>
                                        <div className="font-bold text-zinc-200">{tx.name}</div>
                                        <div className="text-xs text-zinc-500">{tx.cat} • {tx.date}</div>
                                    </div>
                                </div>
                                <div className={`font-mono text-sm font-bold ${tx.positive ? 'text-green-500' : 'text-zinc-300'}`}>
                                    {tx.amount}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 border-t border-zinc-800">
                        <Button variant="outline" className="w-full border-zinc-800 hover:bg-zinc-800 text-zinc-400">View All History</Button>
                    </div>
                </div>
            </div>
        </main>
    </div>
  );
};
