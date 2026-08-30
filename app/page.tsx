import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Brand Logo */}
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20">
              BM
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-tight text-white">
                BRIDGE MEDIA
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-cyan-400 border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 rounded-full uppercase">
                Ethiopia
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-400 font-medium">
            <a href="#demo" className="hover:text-cyan-400 transition">
              Demo
            </a>
            <a href="#why-us" className="hover:text-cyan-400 transition">
              Why Us
            </a>
            <a href="#industries" className="hover:text-cyan-400 transition">
              Industries
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-semibold rounded-lg bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition shadow-md shadow-cyan-500/20"
          >
            Book a Free Pilot
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-full mb-6">
              Ethiopia's Omnichannel Lead Platform
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-white">
              Your Ads Are Talking. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                We Make Them Sell.
              </span>
            </h1>
            <p className="text-slate-400 text-lg mb-8 max-w-xl leading-relaxed">
              Turn every TV commercial, Instagram post, and SMS campaign into real-time verified buyer leads on a single dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:opacity-90 transition shadow-lg shadow-cyan-500/25 text-center"
              >
                Start Your Free Pilot — Zero Risk →
              </a>
              <a
                href="#demo"
                className="px-6 py-3.5 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 transition text-center text-slate-300 font-medium"
              >
                Explore Dashboard Preview
              </a>
            </div>
          </div>

          {/* Hero Dashboard Preview Card (Fixed Trust Framing) */}
          <div id="demo" className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 mb-6 gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                    CAMPAIGN DASHBOARD PREVIEW
                  </span>
                  <span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-400 border border-blue-500/20">
                    Interactive Demo
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Illustrative campaign view — see real-time lead telemetry in action.
                </p>
              </div>
            </div>

            {/* Metrics Display */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <p className="text-xs text-slate-400 mb-1">Total TV & Digital Scans</p>
                <p className="text-2xl font-bold text-white">1,420</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <p className="text-xs text-slate-400 mb-1">Verified Site Visits</p>
                <p className="text-2xl font-bold text-cyan-400">384</p>
              </div>
            </div>
            
            <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/10 text-xs text-slate-300 flex justify-between items-center">
              <span>Primary Attribution: TV Broadcast (EBC) + Telegram</span>
              <span className="text-cyan-400 font-mono flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
                Live Sync
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Reconciled Metrics Bar */}
      <section className="py-12 border-y border-slate-800/80 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-extrabold text-white mb-1">54M+</p>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">Telebirr Users Ready</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-white mb-1">98%</p>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">TV Household Reach</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-white mb-1">7M+</p>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">Active Social Reach</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-white mb-1">3</p>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">Unified Channels (TV, Social, SMS)</p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Ethiopian Brands Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">Ethiopian Market Mastery</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Built specifically to capture mobile intent across local TV, Telegram, and Telebirr ecosystems.</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">Lightning Fast Setup</h3>
            <p className="text-slate-400 text-sm leading-relaxed">We deploy your trackable QR overlays, SMS shortcodes, and web flows in under 24 hours without reshooting ad creatives.</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">Real Results, Guaranteed</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Zero upfront risk pilots tied directly to confirmed buyer lead conversions and site visits.</p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
        <h2 className="text-3xl font-bold mb-12 text-white">Target Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-b from-cyan-500/10 to-slate-900 border border-cyan-500/30">
            <span className="text-[10px] uppercase text-cyan-400 font-bold tracking-widest">Flagship Partner</span>
            <h3 className="text-xl font-bold mt-2 mb-2 text-white">Real Estate</h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">Capture apartment buyers straight from evening TV ads into booked site visits.</p>
            <a href="#contact" className="text-xs font-semibold text-cyan-400 hover:text-cyan-300">Inquire for Real Estate →</a>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h3 className="text-xl font-bold mt-6 mb-2 text-white">Automotive</h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">Direct vehicle inquiries to instant phone verification and showroom bookings.</p>
            <a href="#contact" className="text-xs font-semibold text-cyan-400 hover:text-cyan-300">Inquire for Automotive →</a>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h3 className="text-xl font-bold mt-6 mb-2 text-white">Hospitality</h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">Turn promotional social reels into instant room and event reservations.</p>
            <a href="#contact" className="text-xs font-semibold text-cyan-400 hover:text-cyan-300">Inquire for Hospitality →</a>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h3 className="text-xl font-bold mt-6 mb-2 text-white">Healthcare</h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">Streamline patient consultation bookings from broadcast public notices.</p>
            <a href="#contact" className="text-xs font-semibold text-cyan-400 hover:text-cyan-300">Inquire for Healthcare →</a>
          </div>
        </div>
      </section>

      {/* Contact & Interactive Action Section */}
      <section id="contact" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800 text-center relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">Ready to Turn Your Ads Into Sales?</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
            Book your risk-free pilot campaign today. We build your unified lead capture system with zero upfront setup fees.
          </p>

          {/* Working Interactive Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            {/* WhatsApp Direct Link */}
            <a
              href="https://wa.me/251979492729?text=Hello%20Bridge%20Media%2C%20I%20would%20like%20to%20learn%20more%20about%20a%20free%20pilot."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition shadow-lg shadow-emerald-600/20"
            >
              Message Us on WhatsApp
            </a>

            {/* Email Direct mailto: Link */}
            <a
              href="mailto:bridgemediaethiopia@gmail.com?subject=Bridge%20Media%20Pilot%20Inquiry"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition border border-slate-700"
            >
              Email Us Directly
            </a>
          </div>

          <div className="text-xs text-slate-500 flex flex-col md:flex-row items-center justify-center gap-4">
            <span>Direct Phone: <a href="tel:+251979492729" className="text-slate-300 hover:underline">+251 979 492 729</a></span>
            <span className="hidden md:inline">•</span>
            <span>Addis Ababa, Ethiopia</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800/80 text-center text-xs text-slate-500">
        <p>© 2026 Bridge Media Ethiopia. All rights reserved.</p>
      </footer>
    </div>
  );
}