
import React from 'react';
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
                {/* Mock UI */}
                <div className="absolute top-0 left-0 right-0 h-10 border-b border-slate-800 bg-slate-900 flex items-center px-4 gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="grid grid-cols-4 gap-4 p-8 pt-16 w-full h-full opacity-50">
                   <div className="col-span-1 bg-slate-800/50 rounded-lg h-full"></div>
                   <div className="col-span-3 grid grid-rows-3 gap-4">
                      <div className="row-span-1 bg-slate-800/50 rounded-lg"></div>
                      <div className="row-span-2 bg-slate-800/50 rounded-lg"></div>
                   </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <BarChart3 className="w-16 h-16 text-slate-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners / Social Proof */}
      <section className="py-12 border-y border-slate-800 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-sm font-semibold text-slate-500 mb-8 uppercase tracking-wider">Trusted by innovative teams</p>
            <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-50 hover:opacity-100 transition-opacity duration-500">
                {/* Mock Logos */}
                <div className="flex items-center gap-2 font-bold text-xl"><div className="w-6 h-6 bg-white rounded-full"></div> ACME Corp</div>
                <div className="flex items-center gap-2 font-bold text-xl"><div className="w-6 h-6 bg-white rounded-md rotate-45"></div> Globex</div>
                <div className="flex items-center gap-2 font-bold text-xl"><div className="w-6 h-6 border-2 border-white rounded-full"></div> Sooli</div>
                <div className="flex items-center gap-2 font-bold text-xl"><div className="w-6 h-6 bg-white rounded-tr-xl"></div> Infinite</div>
            </div>
        </div>
      </section>

      {/* Features Grid */}
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
              { icon: Zap, title: "Lightning Fast", desc: "Optimized for speed, ensuring your users never wait." },
              { icon: MessageSquare, title: "Team Chat", desc: "Built-in collaboration tools to keep everyone aligned." },
              { icon: CheckCircle2, title: "Automated Workflows", desc: "Set it and forget it with our powerful automation engine." },
            ].map((f, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform">
                  <f.icon className="w-6 h-6" />
                </div>
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

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Free */}
                <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/20">
                    <h3 className="text-lg font-semibold text-slate-300">Starter</h3>
                    <div className="mt-4 mb-6">
                        <span className="text-4xl font-bold">$0</span>
                        <span className="text-slate-500">/month</span>
                    </div>
                    <ul className="space-y-4 mb-8 text-sm text-slate-400">
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Up to 5 users</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Basic analytics</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> 1GB storage</li>
                    </ul>
                    <Button variant="outline" className="w-full border-slate-700 hover:bg-slate-800">Get Started</Button>
                </div>

                {/* Pro */}
                <div className="p-8 rounded-2xl border border-blue-500/50 bg-blue-900/10 relative">
                    <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
                    <h3 className="text-lg font-semibold text-white">Pro</h3>
                    <div className="mt-4 mb-6">
                        <span className="text-4xl font-bold">$29</span>
                        <span className="text-slate-500">/month</span>
                    </div>
                    <ul className="space-y-4 mb-8 text-sm text-slate-300">
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Up to 20 users</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Advanced analytics</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400" /> 20GB storage</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Priority support</li>
                    </ul>
                    <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white border-none">Start Free Trial</Button>
                </div>

                {/* Enterprise */}
                <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/20">
                    <h3 className="text-lg font-semibold text-slate-300">Enterprise</h3>
                    <div className="mt-4 mb-6">
                        <span className="text-4xl font-bold">$99</span>
                        <span className="text-slate-500">/month</span>
                    </div>
                    <ul className="space-y-4 mb-8 text-sm text-slate-400">
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Unlimited users</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Custom reporting</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Unlimited storage</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> 24/7 dedicated support</li>
                    </ul>
                    <Button variant="outline" className="w-full border-slate-700 hover:bg-slate-800">Contact Sales</Button>
                </div>
            </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-slate-900/20">
         <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently asked questions</h2>
            <div className="space-y-4">
                {[
                    "Can I cancel my subscription at any time?",
                    "Do you offer a discount for non-profits?",
                    "How secure is my data on SaaSFlow?",
                    "Can I import data from other tools?"
                ].map((q, i) => (
                    <div key={i} className="border border-slate-800 rounded-lg p-4 bg-slate-950 hover:bg-slate-900 transition-colors cursor-pointer">
                        <div className="flex justify-between items-center">
                            <span className="font-medium text-slate-200">{q}</span>
                            <HelpCircle className="w-5 h-5 text-slate-500" />
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to scale your business?</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Join over 10,000 teams using SaaSFlow to build better products, faster.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button className="bg-white text-blue-600 hover:bg-blue-50 border-none h-12 px-8">Get Started Now</Button>
                        <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 h-12 px-8">Talk to Sales</Button>
                    </div>
                </div>
                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 bg-slate-950 text-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
                <div className="flex items-center gap-2 font-bold text-xl tracking-tight mb-4">
                    <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm">S</div>
                    <span>SaaS<span className="text-blue-500">Flow</span></span>
                </div>
                <p className="text-slate-500 max-w-xs">Making the world more productive, one task at a time.</p>
            </div>
            <div>
                <h4 className="font-bold mb-4 text-white">Product</h4>
                <ul className="space-y-2 text-slate-500">
                    <li><a href="#" className="hover:text-white">Features</a></li>
                    <li><a href="#" className="hover:text-white">Pricing</a></li>
                    <li><a href="#" className="hover:text-white">Integrations</a></li>
                    <li><a href="#" className="hover:text-white">Changelog</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-4 text-white">Company</h4>
                <ul className="space-y-2 text-slate-500">
                    <li><a href="#" className="hover:text-white">About</a></li>
                    <li><a href="#" className="hover:text-white">Blog</a></li>
                    <li><a href="#" className="hover:text-white">Careers</a></li>
                    <li><a href="#" className="hover:text-white">Legal</a></li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800 text-center text-slate-500">
            <p>© 2024 SaaSFlow Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
