"use client";

import { useState } from "react";

export default function Home() {
  const [pilotModalOpen, setPilotModalOpen] = useState(false);
  const [howModalOpen, setHowModalOpen] = useState(false);
  const [industryModal, setIndustryModal] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* ---------- NAVIGATION ---------- */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Custom Logo Image / SVG Placeholder */}
            <img 
              src="/logo.svg" 
              alt="Bridge Media Logo" 
              className="h-8 w-auto object-contain"
              onError={(e) => {
                // Fallback graphic if /public/logo.svg isn't added yet
                e.currentTarget.style.display = 'none';
              }} 
            />
            <span className="text-xl font-bold tracking-tight text-white">
              Bridge Media <span className="text-amber-400">Ethiopia</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#how" className="hover:text-amber-400 transition-colors">How It Works</a>
            <a href="#industries" className="hover:text-amber-400 transition-colors">Industries</a>
            <a href="#why" className="hover:text-amber-400 transition-colors">Why Us</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>

          <button
            onClick={() => setPilotModalOpen(true)}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm px-5 py-2.5 rounded-lg transition-all"
          >
            Book a Demo
          </button>
        </div>
      </nav>

      {/* ---------- HERO SECTION ---------- */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              Ethiopia's Omnichannel Lead Platform
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-white">
              Your ads are reaching thousands. <em className="italic text-amber-300 font-normal">We make them convert.</em>
            </h1>

            <p className="text-slate-400 text-lg font-light leading-relaxed">
              We turn viewers across TV, Telegram, Instagram, and social media into verified, trackable leads — with scannable QR codes, instant link overlays, and Telebirr-ready checkout.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setPilotModalOpen(true)}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-6 py-3.5 rounded-lg transition-all shadow-lg shadow-amber-500/20"
              >
                Book a Free Pilot →
              </button>
              <button
                onClick={() => setHowModalOpen(true)}
                className="border border-slate-800 hover:border-amber-400 hover:bg-amber-500/10 text-white font-medium px-6 py-3.5 rounded-lg transition-all"
              >
                See How It Works
              </button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
              <div>
                <div className="text-2xl font-bold text-white">54M+</div>
                <div className="text-xs text-slate-400">Telebirr Users</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">Omni</div>
                <div className="text-xs text-slate-400">TV & Digital Reach</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">24h</div>
                <div className="text-xs text-slate-400">Setup to Live</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">0</div>
                <div className="text-xs text-slate-400">Upfront Risk</div>
              </div>
            </div>
          </div>

          {/* Hero Visual Mockup */}
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 shadow-2xl">
            <div className="text-xs font-semibold tracking-wider text-amber-400 uppercase mb-4">LIVE CAMPAIGN DEMO</div>
            <div className="space-y-4">
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-white">Luxury Apartment Launch</div>
                  <div className="text-xs text-slate-400">TV Broadcast + Telegram Ads</div>
                </div>
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs px-2.5 py-1 rounded-full">Active</span>
              </div>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Scans / Clicks</span>
                  <span className="text-amber-400 font-bold">1,420</span>
                </div>
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Verified Site Visits</span>
                  <span className="text-emerald-400 font-bold">384</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section id="how" className="py-20 px-6 border-t border-slate-800/80 bg-slate-900/40">
        <div className="max-w-6xl mx-auto space-y-12">
          <div>
            <div className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-2">How It Works</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">From broadcast & social to booked lead.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 space-y-3">
              <div className="text-amber-400 font-bold text-2xl">01</div>
              <h3 className="text-xl font-bold text-white">We Build Your Bridge</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                A custom QR code, shortcode, and branded mobile landing page — deployed across your TV slots and social channels within 24 hours.
              </p>
            </div>
            <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 space-y-3">
              <div className="text-amber-400 font-bold text-2xl">02</div>
              <h3 className="text-xl font-bold text-white">Viewers Scan & Act</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether watching TV or scrolling Telegram/Instagram, users scan or tap, land on your page, and submit details in under 30 seconds.
              </p>
            </div>
            <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 space-y-3">
              <div className="text-amber-400 font-bold text-2xl">03</div>
              <h3 className="text-xl font-bold text-white">Leads Land Instantly</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Your sales team gets notified instantly with lead details, channel origin, and property interest directly in your dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- INDUSTRIES ---------- */}
      <section id="industries" className="py-20 px-6 border-t border-slate-800/80">
        <div className="max-w-6xl mx-auto space-y-12">
          <div>
            <div className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-2">Industries We Serve</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Built for real estate. Scalable everywhere.</h2>
          </div>

          <div className="p-8 bg-gradient-to-r from-slate-900 to-slate-950 border border-amber-500/30 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">Flagship Vertical</span>
              <h3 className="text-2xl font-bold text-white">🏢 Real Estate Developers</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Turn broadcast ads, Telegram property tours, and Instagram reels into verified site-visit bookings and unit reservations instantly.
              </p>
            </div>
            <button
              onClick={() => setIndustryModal("Real Estate")}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-5 py-2.5 rounded-lg text-sm shrink-0"
            >
              Explore Solutions
            </button>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Healthcare", icon: "🏥", desc: "Appointment booking flows for clinics and specialists." },
              { title: "Hospitality", icon: "🏨", desc: "Event & wedding inquiry capture straight from ads." },
              { title: "Education", icon: "🎓", desc: "Enrollment flows for universities & training centers." },
              { title: "Automotive", icon: "🚗", desc: "Test-drive bookings for dealership campaigns." },
            ].map((ind, i) => (
              <div 
                key={i} 
                onClick={() => setIndustryModal(ind.title)}
                className="p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-amber-400/50 cursor-pointer transition-all space-y-2"
              >
                <div className="text-2xl">{ind.icon}</div>
                <h4 className="font-bold text-white">{ind.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{ind.desc}</p>
                <span className="text-[10px] font-bold text-amber-400 tracking-wider uppercase block pt-2">Learn More →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer id="contact" className="py-12 px-6 border-t border-slate-800 bg-slate-950 text-xs text-slate-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-2">
            <div className="text-white font-bold text-sm">Bridge Media Ethiopia</div>
            <p className="max-w-xs">Ethiopia's conversion-first media company — from broadcast and digital to bought.</p>
          </div>
          <div className="space-y-1">
            <div className="text-white font-bold mb-1">Contact</div>
            <div>+251 979 492 729</div>
            <div>bridgemediaethiopia@gmail.com</div>
            <div>Addis Ababa, Ethiopia</div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto border-t border-slate-900 mt-8 pt-6 text-center md:text-left">
          © 2026 Bridge Media Ethiopia. All rights reserved.
        </div>
      </footer>

      {/* ---------- PILOT / DEMO MODAL ---------- */}
      {pilotModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 max-w-md w-full relative shadow-2xl">
            <button
              onClick={() => setPilotModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold text-white mb-2">Claim Your Pilot Campaign</h3>
            <p className="text-slate-400 text-sm mb-6">Launch a zero-risk pilot campaign across your TV & social channels.</p>

            <form onSubmit={(e) => { e.preventDefault(); alert("Request submitted! Our team will contact you shortly."); setPilotModalOpen(false); }} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Company / Developer Name</label>
                <input required type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-amber-400" placeholder="e.g. Zafro Real Estate" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Phone Number / WhatsApp</label>
                <input required type="tel" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-amber-400" placeholder="+251 9..." />
              </div>
              <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold py-3 rounded-lg transition-all mt-2">
                Submit Pilot Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ---------- HOW IT WORKS MODAL ---------- */}
      {howModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 max-w-lg w-full relative shadow-2xl space-y-4">
            <button onClick={() => setHowModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white">✕</button>
            <h3 className="text-2xl font-bold text-white">How Bridge Media Works</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              We bridge the gap between broadcast/social media reach and real sales. By adding scannable QR codes and instant digital link overlays to your ads, interested viewers can scan or click to book site visits, request unit pricing, or submit inquiries in under 30 seconds.
            </p>
            <button onClick={() => setHowModalOpen(false)} className="bg-amber-500 text-slate-950 font-semibold px-6 py-2.5 rounded-lg text-sm">
              Got It
            </button>
          </div>
        </div>
      )}

      {/* ---------- INDUSTRY MODAL ---------- */}
      {industryModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 max-w-md w-full relative shadow-2xl space-y-4">
            <button onClick={() => setIndustryModal(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white">✕</button>
            <h3 className="text-2xl font-bold text-white">{industryModal} Solutions</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Customized lead generation and instant conversion funnels tailored specifically for {industryModal} campaigns across Ethiopia.
            </p>
            <button onClick={() => { setIndustryModal(null); setPilotModalOpen(true); }} className="bg-amber-500 text-slate-950 font-semibold px-6 py-2.5 rounded-lg text-sm w-full">
              Request {industryModal} Demo →
            </button>
          </div>
        </div>
      )}
    </main>
  );
}