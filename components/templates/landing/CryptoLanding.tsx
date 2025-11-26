
import React from 'react';
import { Button } from '../../ui/Button';
import { Wallet, TrendingUp, Lock, Globe, ArrowRight, Shield, Zap, Activity } from 'lucide-react';

export const CryptoLanding = () => {
  return (
    <div className="min-h-screen bg-[#090014] text-white font-sans selection:bg-violet-500/30 overflow-hidden relative">
      
      {/* Grid Background */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)] pointer-events-none"
      />

      {/* Header */}
      <header className="relative z-20 border-b border-white/5 bg-[#090014]/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
             <div className="font-mono text-2xl font-bold tracking-widest text-violet-400">
                NEXUS<span className="text-white">CHAIN</span>
             </div>
             <div className="flex items-center gap-6">
                <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
                    <a href="#" className="hover:text-violet-400 transition-colors">Exchange</a>
                    <a href="#" className="hover:text-violet-400 transition-colors">NFTs</a>
                    <a href="#" className="hover:text-violet-400 transition-colors">Token</a>
                </nav>
                <Button className="bg-violet-600 hover:bg-violet-500 text-white border-none rounded-none px-6 clip-path-polygon">
                    Connect Wallet
                </Button>
             </div>
        </div>
      </header>

      {/* Hero */}
      <main className="relative z-10 pt-20 pb-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-900/20 border border-violet-500/30 rounded-full mb-8">
                <span className="text-violet-400 text-xs font-mono uppercase">Decentralized Future</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">NEXT GEN</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-500 to-white drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                    TRADING
                </span>
            </h1>

            <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                Experience the fastest, most secure decentralized exchange built on the Nexus Protocol. Zero gas fees, instant finality.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-lg h-14 px-8 text-lg font-bold">
                    Start Trading
                </Button>
                <Button size="lg" variant="outline" className="border-violet-500/50 text-violet-300 hover:bg-violet-500/10 rounded-lg h-14 px-8 text-lg font-bold">
                    Read Whitepaper
                </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
                {[
                    { label: "Total Volume", val: "$42B+", icon: TrendingUp },
                    { label: "Active Wallets", val: "2.5M+", icon: Wallet },
                    { label: "Avg. Latency", val: "<0.4s", icon: Globe },
                ].map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm hover:border-violet-500/50 transition-colors group">
                        <stat.icon className="w-8 h-8 text-violet-500 mb-4 group-hover:scale-110 transition-transform" />
                        <div className="text-3xl font-bold text-white mb-1">{stat.val}</div>
                        <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
      </main>

      {/* Market Table */}
      <section className="py-24 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                <Activity className="text-violet-500" /> Market Trends
            </h2>
            <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-left">
                    <thead className="bg-white/5 text-gray-400 text-sm uppercase">
                        <tr>
                            <th className="p-6">Asset</th>
                            <th className="p-6">Price</th>
                            <th className="p-6">Change (24h)</th>
                            <th className="p-6 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {[
                            { name: "Bitcoin", symbol: "BTC", price: "$64,230.00", change: "+2.4%", positive: true },
                            { name: "Ethereum", symbol: "ETH", price: "$3,450.00", change: "-1.2%", positive: false },
                            { name: "Solana", symbol: "SOL", price: "$145.00", change: "+5.6%", positive: true },
                            { name: "Nexus", symbol: "NXS", price: "$12.40", change: "+12.4%", positive: true },
                        ].map((coin, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                                <td className="p-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500"></div>
                                        <div>
                                            <div className="font-bold">{coin.name}</div>
                                            <div className="text-xs text-gray-500">{coin.symbol}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-6 font-mono">{coin.price}</td>
                                <td className={`p-6 font-mono ${coin.positive ? 'text-green-400' : 'text-red-400'}`}>{coin.change}</td>
                                <td className="p-6 text-right">
                                    <Button size="sm" variant="outline" className="border-white/10 hover:bg-violet-500 hover:border-violet-500 hover:text-white">Trade</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <h2 className="text-4xl font-bold leading-tight">Iron-clad security for <br /> your digital assets.</h2>
                    <p className="text-gray-400 text-lg">We utilize multi-signature cold storage and real-time threat monitoring to ensure your funds are never compromised.</p>
                    
                    <div className="space-y-6">
                        {[
                            { title: "Audited Smart Contracts", desc: "Triple audited by leading security firms." },
                            { title: "Insurance Fund", desc: "$500M user protection fund." },
                            { title: "Privacy First", desc: "No KYC required for decentralized trading." },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center shrink-0">
                                    <Shield className="w-6 h-6 text-violet-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                                    <p className="text-gray-500">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                     <div className="absolute inset-0 bg-violet-600/20 blur-[100px] rounded-full"></div>
                     <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
                        <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                            <span className="font-mono text-violet-300">SECURITY AUDIT</span>
                            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold">PASSED</span>
                        </div>
                        <div className="space-y-4 font-mono text-sm text-gray-400">
                            <div className="flex justify-between"><span>Contract Integrity</span> <span className="text-white">100%</span></div>
                            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden"><div className="w-full h-full bg-green-500"></div></div>
                            
                            <div className="flex justify-between pt-4"><span>Access Control</span> <span className="text-white">100%</span></div>
                            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden"><div className="w-full h-full bg-green-500"></div></div>
                            
                            <div className="flex justify-between pt-4"><span>Solvency Proof</span> <span className="text-white">Verified</span></div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-16 text-center">Roadmap</h2>
            <div className="relative border-l border-white/10 pl-8 ml-4 md:ml-0 space-y-12">
                {[
                    { q: "Q1 2024", title: "Platform Launch", desc: "Initial beta release with basic swap functionality.", done: true },
                    { q: "Q2 2024", title: "Staking & Farming", desc: "Earn yields on your idle assets.", done: true },
                    { q: "Q3 2024", title: "NFT Marketplace", desc: "Trade digital collectibles with zero fees.", done: false },
                    { q: "Q4 2024", title: "Mobile App", desc: "iOS and Android native applications.", done: false },
                ].map((item, i) => (
                    <div key={i} className="relative">
                        <div className={`absolute -left-[39px] w-5 h-5 rounded-full border-4 border-[#090014] ${item.done ? 'bg-violet-500' : 'bg-gray-700'}`}></div>
                        <div className="text-sm text-violet-400 font-mono mb-2">{item.q}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center">
            <div className="font-mono text-2xl font-bold tracking-widest text-violet-400 mb-8">
                NEXUS<span className="text-white">CHAIN</span>
            </div>
            <div className="flex justify-center gap-8 mb-8 text-gray-400 font-medium">
                <a href="#" className="hover:text-white">Whitepaper</a>
                <a href="#" className="hover:text-white">Community</a>
                <a href="#" className="hover:text-white">GitHub</a>
                <a href="#" className="hover:text-white">Terms</a>
            </div>
            <div className="text-gray-600 text-sm">
                © 2024 NexusChain Foundation. All rights reserved.
            </div>
      </footer>
    </div>
  );
};
