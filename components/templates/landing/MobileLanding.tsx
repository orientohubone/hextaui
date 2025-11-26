
import React from 'react';
import { Smartphone, Download, Star, ShieldCheck, Zap, ChevronRight, User } from 'lucide-react';
import { Button } from '../../ui/Button';

export const MobileLanding = () => {
  return (
    <div className="min-h-screen bg-[#051108] text-white font-sans selection:bg-green-500/30 overflow-hidden">
        
        {/* Navigation */}
        <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-20">
            <div className="flex items-center gap-2 font-bold text-xl">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-black fill-black" />
                </div>
                Swift<span className="text-green-500">Pay</span>
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
                <a href="#" className="hover:text-white">Features</a>
                <a href="#" className="hover:text-white">Security</a>
                <a href="#" className="hover:text-white">Support</a>
            </div>
            <Button className="bg-white text-black hover:bg-gray-100 rounded-full">Get App</Button>
        </nav>

        {/* Hero */}
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-24 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Text Content */}
                <div className="space-y-8">
                    <div className="inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
                        #1 Finance App of 2024
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        Banking for the <br />
                        <span className="text-green-500">New Generation.</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                        Send, receive, and manage your money with zero fees and lightning fast transactions. Join 5 million users today.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors">
                            <Download className="w-6 h-6" />
                            <div className="text-left leading-tight">
                                <div className="text-[10px] font-semibold uppercase opacity-60">Download on the</div>
                                <div className="text-sm font-bold">App Store</div>
                            </div>
                        </button>
                        <button className="flex items-center gap-3 bg-white/10 text-white border border-white/10 px-6 py-3 rounded-xl hover:bg-white/20 transition-colors">
                            <Download className="w-6 h-6" />
                            <div className="text-left leading-tight">
                                <div className="text-[10px] font-semibold uppercase opacity-60">Get it on</div>
                                <div className="text-sm font-bold">Google Play</div>
                            </div>
                        </button>
                    </div>

                    <div className="flex items-center gap-4 pt-8 text-sm text-gray-500">
                        <div className="flex -space-x-2">
                            {[1,2,3,4].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#051108]"></div>
                            ))}
                        </div>
                        <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span className="text-white font-bold">4.9</span>
                            <span>(12k Reviews)</span>
                        </div>
                    </div>
                </div>

                {/* Phone Mockup */}
                <div className="relative flex justify-center lg:justify-end">
                    {/* Background blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-600/20 blur-[80px] rounded-full pointer-events-none" />
                    
                    {/* Phone Body */}
                    <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-8 border-gray-900 shadow-2xl z-10 overflow-hidden">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20" />
                        
                        {/* Screen Content */}
                        <div className="w-full h-full bg-[#0c1a10] pt-12 px-6 pb-6 flex flex-col">
                            <div className="flex justify-between items-center mb-8">
                                <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                                <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                            </div>
                            
                            <div className="text-center mb-8">
                                <div className="text-gray-400 text-sm mb-1">Total Balance</div>
                                <div className="text-4xl font-bold text-white">$12,450.00</div>
                                <div className="inline-block mt-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">+2.4% this week</div>
                            </div>

                            <div className="flex gap-4 mb-8">
                                <div className="flex-1 bg-green-600 rounded-2xl h-12 flex items-center justify-center font-bold">Send</div>
                                <div className="flex-1 bg-white/10 rounded-2xl h-12 flex items-center justify-center font-bold">Request</div>
                            </div>

                            <div className="bg-white/5 rounded-2xl p-4 flex-1">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="font-bold">Transactions</div>
                                    <div className="text-xs text-green-400">View All</div>
                                </div>
                                <div className="space-y-4">
                                    {[1,2,3].map(i => (
                                        <div key={i} className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-white/10"></div>
                                                <div>
                                                    <div className="text-sm font-bold">Netflix</div>
                                                    <div className="text-xs text-gray-500">Subscription</div>
                                                </div>
                                            </div>
                                            <div className="text-sm font-bold">-$12.99</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-20 -left-10 bg-[#0c1a10] border border-green-500/30 p-4 rounded-xl shadow-xl z-20 animate-bounce duration-[3000ms]">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                                <ShieldCheck className="w-6 h-6 text-black" />
                            </div>
                            <div>
                                <div className="text-xs text-gray-400">Security</div>
                                <div className="text-sm font-bold">100% Secure</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* How it Works */}
        <section className="py-24 bg-[#08180d]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Simplicity at its core</h2>
                    <p className="text-gray-400">Manage your money in 3 easy steps.</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Download App", desc: "Get SwiftPay from your favorite store in seconds." },
                        { title: "Create Account", desc: "Sign up with your email and verify identity instantly." },
                        { title: "Start Sending", desc: "Add funds and start transacting immediately." },
                    ].map((step, i) => (
                        <div key={i} className="relative p-8 rounded-3xl bg-white/5 border border-white/5">
                            <div className="text-6xl font-black text-white/5 absolute top-4 right-4">{i + 1}</div>
                            <h3 className="text-xl font-bold mb-4 relative z-10">{step.title}</h3>
                            <p className="text-gray-400 relative z-10">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Reviews */}
        <section className="py-24">
             <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center">Loved by millions</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[1,2,3].map(i => (
                        <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5">
                            <div className="flex gap-1 text-yellow-500 mb-4">
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                            </div>
                            <p className="text-gray-300 mb-6">"This app completely changed how I manage my finances. The speed is incredible and the UI is gorgeous."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gray-700"></div>
                                <div>
                                    <div className="text-sm font-bold">Sarah Doe</div>
                                    <div className="text-xs text-gray-500">Freelancer</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/10 text-center">
            <div className="max-w-7xl mx-auto px-6">
                 <div className="flex items-center justify-center gap-2 font-bold text-2xl mb-8">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-black fill-black" />
                    </div>
                    Swift<span className="text-green-500">Pay</span>
                </div>
                <div className="flex justify-center gap-8 mb-8 text-gray-400 font-medium">
                    <a href="#" className="hover:text-white">Features</a>
                    <a href="#" className="hover:text-white">Security</a>
                    <a href="#" className="hover:text-white">Careers</a>
                    <a href="#" className="hover:text-white">Contact</a>
                </div>
                <div className="text-gray-600 text-sm">
                    © 2024 SwiftPay Inc. All rights reserved. Banking services provided by partner banks.
                </div>
            </div>
        </footer>

    </div>
  );
};
