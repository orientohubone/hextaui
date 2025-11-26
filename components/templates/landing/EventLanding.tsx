
import React from 'react';
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
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#speakers" className="hover:text-white transition-colors">Speakers</a>
            <a href="#agenda" className="hover:text-white transition-colors">Agenda</a>
            <a href="#pricing" className="hover:text-white transition-colors">Tickets</a>
          </div>
          <Button className="bg-orange-600 hover:bg-orange-500 text-white rounded-full px-6">
            Register Now
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-orange-400 text-sm font-semibold uppercase tracking-wider">
               <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
               Live on Dec 12-14, 2024
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-[0.95] text-white">
              BUILD THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-orange-400">
                FUTURE OF TECH
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
              Join 5,000+ developers, designers, and founders for 3 days of innovation, networking, and growth.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="w-5 h-5 text-orange-500" />
                    <span>Dec 12-14, 2024</span>
                </div>
                <div className="w-[1px] h-6 bg-white/20 hidden sm:block"></div>
                <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    <span>San Francisco, CA</span>
                </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-500 text-white h-14 px-8 text-lg rounded-full shadow-[0_0_30px_rgba(234,88,12,0.4)] hover:shadow-[0_0_50px_rgba(234,88,12,0.6)] transition-all">
                Get Your Ticket
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/20 hover:bg-white/10 flex items-center gap-2">
                <Play className="w-4 h-4 fill-current" /> Watch Trailer
              </Button>
            </div>
          </div>

          {/* Countdown & Card */}
          <div className="relative">
             <div className="bg-[#120a0a] border border-white/10 rounded-3xl p-8 shadow-2xl relative z-10">
                <div className="grid grid-cols-4 gap-4 mb-8 text-center">
                    {[
                        { label: "Days", val: "14" },
                        { label: "Hours", val: "08" },
                        { label: "Mins", val: "45" },
                        { label: "Secs", val: "12" },
                    ].map((time, i) => (
                        <div key={i} className="bg-white/5 rounded-xl p-3 border border-white/5">
                            <div className="text-3xl font-bold font-mono text-white mb-1">{time.val}</div>
                            <div className="text-[10px] uppercase tracking-widest text-gray-500">{time.label}</div>
                        </div>
                    ))}
                </div>
                
                <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                        <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                            <Star className="w-5 h-5 text-white fill-white" />
                        </div>
                        <div>
                            <div className="font-bold text-white">Early Bird Ending Soon</div>
                            <div className="text-sm text-orange-200">Save 40% when you register today.</div>
                        </div>
                    </div>
                    <div className="flex -space-x-3 items-center pt-4 justify-center">
                        {[1,2,3,4,5].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-[#120a0a] bg-gray-700"></div>
                        ))}
                        <div className="pl-4 text-sm text-gray-500 font-medium">+2k registered</div>
                    </div>
                </div>
             </div>
             {/* Decorative Elements */}
             <div className="absolute -top-10 -right-10 w-24 h-24 bg-striped opacity-20"></div>
             <div className="absolute -bottom-5 -left-5 w-full h-full border border-orange-500/20 rounded-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section id="speakers" className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">World Class Speakers</h2>
                <p className="text-gray-400 text-lg">Learn from the visionaries shaping the industry.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
                {[
                    { name: "Elena Rostova", role: "VP of Design, Acme", img: "bg-blue-500" },
                    { name: "Marcus Chen", role: "Founder, TechFlow", img: "bg-purple-500" },
                    { name: "Sarah Connor", role: "AI Research Lead", img: "bg-green-500" },
                    { name: "David Kim", role: "Product Director", img: "bg-yellow-500" },
                ].map((s, i) => (
                    <div key={i} className="group text-center">
                        <div className="relative mb-6 inline-block">
                            <div className={`w-40 h-40 rounded-full ${s.img} mx-auto grayscale group-hover:grayscale-0 transition-all duration-300 ring-4 ring-transparent group-hover:ring-orange-500/50`}></div>
                            <div className="absolute bottom-0 right-0 bg-orange-600 rounded-full p-2 border-4 border-[#0a0505]">
                                <Mic className="w-4 h-4 text-white" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">{s.name}</h3>
                        <p className="text-sm text-gray-500">{s.role}</p>
                    </div>
                ))}
            </div>
            
            <div className="text-center mt-12">
                <Button variant="outline" className="border-white/10 hover:bg-white/5">View All 40+ Speakers</Button>
            </div>
        </div>
      </section>

      {/* Agenda */}
      <section id="agenda" className="py-24">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12">Agenda Highlights</h2>
            
            <div className="space-y-6">
                {[
                    { time: "09:00 AM", title: "Opening Keynote: The Future of AI", speaker: "Elena Rostova", track: "Main Stage" },
                    { time: "10:30 AM", title: "Scaling Design Systems", speaker: "David Kim", track: "Workshop A" },
                    { time: "12:00 PM", title: "Networking Lunch", speaker: "", track: "Lounge" },
                    { time: "01:30 PM", title: "Building for Billions", speaker: "Marcus Chen", track: "Main Stage" },
                    { time: "03:00 PM", title: "Ethical Tech Panel", speaker: "Sarah Connor & Guests", track: "Auditorium" },
                ].map((item, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group">
                        <div className="min-w-[100px] text-orange-500 font-mono font-bold pt-1">{item.time}</div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                {item.speaker && <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {item.speaker}</span>}
                                <span className="px-2 py-0.5 rounded bg-white/10 text-gray-300 text-xs">{item.track}</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-orange-600 group-hover:border-orange-600 transition-all">
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-orange-600">
        <div className="max-w-7xl mx-auto px-6">
             <div className="text-center mb-16 text-white">
                <h2 className="text-4xl font-bold mb-4">Get your ticket</h2>
                <p className="opacity-80 text-lg">Choose the perfect pass for your experience.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Virtual */}
                <div className="bg-[#0a0505] rounded-3xl p-8 border border-transparent hover:scale-105 transition-transform">
                    <div className="text-gray-400 font-bold mb-4 uppercase tracking-wider text-sm">Virtual Pass</div>
                    <div className="text-4xl font-bold text-white mb-2">$99</div>
                    <p className="text-gray-500 text-sm mb-8">Perfect for joining remotely.</p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex gap-3 text-sm text-gray-300"><CheckCircle2 className="w-5 h-5 text-gray-600" /> Live Stream Access</li>
                        <li className="flex gap-3 text-sm text-gray-300"><CheckCircle2 className="w-5 h-5 text-gray-600" /> Digital Swag Bag</li>
                        <li className="flex gap-3 text-sm text-gray-300"><CheckCircle2 className="w-5 h-5 text-gray-600" /> Q&A Participation</li>
                    </ul>
                    <Button variant="outline" className="w-full border-white/10 text-white">Select Pass</Button>
                </div>

                {/* General */}
                <div className="bg-white rounded-3xl p-8 border border-transparent scale-105 shadow-2xl relative">
                    <div className="absolute top-0 right-0 bg-black text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-2xl">POPULAR</div>
                    <div className="text-orange-600 font-bold mb-4 uppercase tracking-wider text-sm">General Attendee</div>
                    <div className="text-4xl font-bold text-black mb-2">$299</div>
                    <p className="text-gray-500 text-sm mb-8">Full in-person experience.</p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex gap-3 text-sm text-gray-800"><CheckCircle2 className="w-5 h-5 text-orange-600" /> All Sessions Access</li>
                        <li className="flex gap-3 text-sm text-gray-800"><CheckCircle2 className="w-5 h-5 text-orange-600" /> Networking Lunch</li>
                        <li className="flex gap-3 text-sm text-gray-800"><CheckCircle2 className="w-5 h-5 text-orange-600" /> Workshop Access</li>
                        <li className="flex gap-3 text-sm text-gray-800"><CheckCircle2 className="w-5 h-5 text-orange-600" /> Physical Swag Pack</li>
                    </ul>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">Select Pass</Button>
                </div>

                {/* VIP */}
                <div className="bg-[#0a0505] rounded-3xl p-8 border border-transparent hover:scale-105 transition-transform">
                    <div className="text-orange-400 font-bold mb-4 uppercase tracking-wider text-sm">VIP Access</div>
                    <div className="text-4xl font-bold text-white mb-2">$599</div>
                    <p className="text-gray-500 text-sm mb-8">For the ultimate experience.</p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex gap-3 text-sm text-gray-300"><CheckCircle2 className="w-5 h-5 text-orange-500" /> Everything in General</li>
                        <li className="flex gap-3 text-sm text-gray-300"><CheckCircle2 className="w-5 h-5 text-orange-500" /> Speaker Dinner</li>
                        <li className="flex gap-3 text-sm text-gray-300"><CheckCircle2 className="w-5 h-5 text-orange-500" /> VIP Lounge Access</li>
                        <li className="flex gap-3 text-sm text-gray-300"><CheckCircle2 className="w-5 h-5 text-orange-500" /> Front Row Seating</li>
                    </ul>
                    <Button variant="outline" className="w-full border-white/10 text-white">Select Pass</Button>
                </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#050202] text-center border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
            <div className="font-bold text-2xl tracking-tighter text-white mb-8">
                ELEVATE<span className="text-orange-500">24</span>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-8 text-gray-500 text-sm">
                <a href="#" className="hover:text-white">Code of Conduct</a>
                <a href="#" className="hover:text-white">Venue Info</a>
                <a href="#" className="hover:text-white">Sponsorship</a>
                <a href="#" className="hover:text-white">Contact Us</a>
            </div>
            <div className="text-gray-700 text-xs">
                © 2024 Elevate Events. All rights reserved.
            </div>
        </div>
      </footer>

    </div>
  );
};
