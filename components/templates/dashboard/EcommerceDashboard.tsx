
import React from 'react';
import { Button } from '../../ui/Button';
import { 
  ShoppingBag, Package, Users, Truck, Search, 
  MoreVertical, CheckCircle, AlertCircle, Clock
} from 'lucide-react';

export const EcommerceDashboard = () => {
  return (
    <div className="flex h-screen bg-[#020c06] text-emerald-50 font-sans selection:bg-emerald-500/30 overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-20 lg:w-64 border-r border-emerald-900/30 bg-[#05140a] flex flex-col transition-all duration-300">
        <div className="h-20 flex items-center justify-center lg:justify-start lg:px-6 border-b border-emerald-900/30">
           <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-900/50">
             <ShoppingBag className="w-5 h-5" />
           </div>
           <span className="font-bold text-xl ml-3 hidden lg:block tracking-tight text-white">Shop<span className="text-emerald-500">Admin</span></span>
        </div>
        
        <div className="flex-1 py-6 space-y-2 px-3">
           {[
             { icon: ShoppingBag, label: "Overview", active: true },
             { icon: Package, label: "Products", active: false },
             { icon: Users, label: "Customers", active: false },
             { icon: Truck, label: "Orders", active: false },
           ].map((item, i) => (
             <button key={i} className={`w-full flex items-center justify-center lg:justify-start lg:px-4 py-3 rounded-xl transition-all ${
                 item.active 
                 ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/20' 
                 : 'text-emerald-400/60 hover:text-emerald-400 hover:bg-emerald-900/20'
             }`}>
                <item.icon className="w-5 h-5" />
                <span className="ml-3 hidden lg:block font-medium">{item.label}</span>
             </button>
           ))}
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col min-w-0">
         {/* Header */}
         <header className="h-20 bg-[#05140a]/50 border-b border-emerald-900/30 backdrop-blur-md flex items-center justify-between px-8">
            <h2 className="text-2xl font-bold text-white">Dashboard</h2>
            <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center bg-[#0a2012] rounded-full px-4 py-2 border border-emerald-900/30">
                    <Search className="w-4 h-4 text-emerald-500/50" />
                    <input className="bg-transparent border-none outline-none ml-2 text-sm text-emerald-100 placeholder-emerald-700/50" placeholder="Search orders..." />
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-900/30 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    JD
                </div>
            </div>
         </header>

         <div className="flex-1 overflow-y-auto p-8 scrollbar-thin scrollbar-thumb-emerald-900">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                    { label: "Total Revenue", val: "$128,430", change: "+12%", neutral: false },
                    { label: "Orders", val: "1,245", change: "+5%", neutral: false },
                    { label: "Pending", val: "43", change: "Action needed", neutral: true },
                    { label: "Customers", val: "8,920", change: "+18%", neutral: false },
                ].map((s, i) => (
                    <div key={i} className="bg-[#05140a] p-6 rounded-2xl border border-emerald-900/30 hover:border-emerald-500/30 transition-colors shadow-sm">
                        <div className="text-emerald-500/60 text-sm font-medium mb-2">{s.label}</div>
                        <div className="text-3xl font-bold text-white mb-2">{s.val}</div>
                        <div className={`text-xs font-semibold px-2 py-1 rounded-md inline-block ${s.neutral ? 'bg-orange-500/10 text-orange-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
                            {s.change}
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Orders Table */}
            <div className="bg-[#05140a] rounded-2xl border border-emerald-900/30 overflow-hidden shadow-xl shadow-black/20">
                <div className="p-6 border-b border-emerald-900/30 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-white">Recent Orders</h3>
                    <Button variant="outline" size="sm" className="border-emerald-800 text-emerald-400 hover:bg-emerald-900/30">View All</Button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-[#081c0f] text-emerald-500/70 font-semibold uppercase tracking-wider text-xs">
                            <tr>
                                <th className="p-5">Order ID</th>
                                <th className="p-5">Customer</th>
                                <th className="p-5">Product</th>
                                <th className="p-5">Status</th>
                                <th className="p-5 text-right">Amount</th>
                                <th className="p-5"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-emerald-900/30 text-emerald-100">
                            {[
                                { id: "#ORD-7234", customer: "Alex Morgan", product: "Nike Air Zoom", status: "completed", amount: "$124.00" },
                                { id: "#ORD-7233", customer: "Sarah Connor", product: "Adidas Ultraboost", status: "pending", amount: "$180.00" },
                                { id: "#ORD-7232", customer: "James Bond", product: "Puma Hoodie", status: "cancelled", amount: "$65.00" },
                                { id: "#ORD-7231", customer: "Ellen Ripley", product: "Reebok Classics", status: "completed", amount: "$90.00" },
                                { id: "#ORD-7230", customer: "Marty McFly", product: "Nike Mag", status: "completed", amount: "$4,500.00" },
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-emerald-900/10 transition-colors">
                                    <td className="p-5 font-mono text-emerald-400/80">{row.id}</td>
                                    <td className="p-5 font-medium">{row.customer}</td>
                                    <td className="p-5 text-emerald-200/70">{row.product}</td>
                                    <td className="p-5">
                                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border ${
                                            row.status === 'completed' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                                            row.status === 'pending' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' :
                                            'bg-red-500/10 text-red-400 border-red-500/20'
                                        }`}>
                                            {row.status === 'completed' && <CheckCircle className="w-3 h-3" />}
                                            {row.status === 'pending' && <Clock className="w-3 h-3" />}
                                            {row.status === 'cancelled' && <AlertCircle className="w-3 h-3" />}
                                            <span className="capitalize">{row.status}</span>
                                        </div>
                                    </td>
                                    <td className="p-5 text-right font-bold">{row.amount}</td>
                                    <td className="p-5 text-right">
                                        <button className="p-1 hover:bg-emerald-900/30 rounded text-emerald-500/50 hover:text-white transition-colors">
                                            <MoreVertical className="w-4 h-4" />
                                        </button>
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
