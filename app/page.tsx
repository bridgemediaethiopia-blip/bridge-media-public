import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl tracking-tight text-white">
              BRIDGE MEDIA
            </span>
            <span className="text-xs text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 rounded-full">
              ETHIOPIA
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#demo" className="hover:text-white transition">
              Demo
            </a>
            <a href="#why-us" className="hover:text-white transition">
              Why Us
            </a>
            <a href="#industries" className="hover:text-white transition">
              Industries
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-medium rounded-lg bg-white text-black hover:bg-gray-200 transition"
          >
            Book a Free Pilot
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full mb-6">
              Ethiopia's Omnichannel Lead Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Your Ads Are Talking. <br />
              <span className="text-emerald-400">We Make Them Sell.</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-xl">
              Turn every TV commercial, Instagram post, and SMS campaign into real-time verified buyer leads on a single dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition text-center"
              >
                Start Your Free Pilot — Zero Risk →
              </a>
              <a
                href="#demo"
                className="px-6 py-3.5 rounded-xl border border-white/20 hover:bg-white/5 transition text-center text-gray-300"
              >
                Explore Dashboard Preview
              </a>
            </div>
          </div>

          {/* Hero Dashboard Preview Card */}
          <div id="demo" className="p-6 rounded-2xl bg-zinc-900/90 border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                    CAMPAIGN DASHBOARD PREVIEW
                  </span>
                  <span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-400 border border-blue-500/20">
                    Interactive Demo
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Illustrative campaign view — see real-time lead telemetry in action.
                </p>
              </div>
            </div>

            {/* Metrics Display */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-zinc-800/50 border border-white/5">
                <p className="text-xs text-gray-400 mb-1">Total TV & Digital Scans</p>
                <p className="text-2xl font-bold text-white">1,420</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-800/50 border border-white/5">
                <p className="text-xs text-gray-400 mb-1">Verified Site Visits</p>
                <p className="text-2xl font-bold text-emerald-400">384</p>
              </div>
            </div>
            
            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 text-xs text-gray-300 flex justify-between items-center">
              <span>Primary Attribution: TV Broadcast (EBC) + Telegram</span>
              <span className="text-emerald-400 font-mono">Live Sync</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reconciled Stats Bar */}
      <section className="py-12 border-y border-white/10 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-extrabold text-white mb-1">54M+</p>
            <p className="text-xs text-gray-400 uppercase tracking-wider">Telebirr Users Ready</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-white mb-1">98%</p>
            <p className="text-xs text-gray-400 uppercase tracking-wider">TV Household Reach</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-white mb-1">7M+</p>
            <p className="text-xs text-gray-400 uppercase tracking-wider">Active Social Reach</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-white mb-1">3</p>
            <p className="text-xs text-gray-400 uppercase tracking-wider">Unified Channels (TV, Social, SMS)</p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Ethiopian Brands Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-zinc-900 border border-white/10">
            <h3 className="text-xl font-semibold mb-3 text-emerald-400">Ethiopian Market Mastery</h3>
            <p className="text-gray-400 text-sm">Built specifically to capture mobile intent across local TV, Telegram, and Telebirr ecosystems.</p>
          </div>
          <div className="p-6 rounded-xl bg-zinc-900 border border-white/10">
            <h3 className="text-xl font-semibold mb-3 text-emerald-400">Lightning Fast Setup</h3>
            <p className="text-gray-400 text-sm">We deploy your trackable QR overlays, SMS shortcodes, and web flows in under 24 hours without reshooting ad creatives.</p>
          </div>
          <div className="p-6 rounded-xl bg-zinc-900 border border-white/10">
            <h3 className="text-xl font-semibold mb-3 text-emerald-400">Real Results, Guaranteed</h3>
            <p className="text-gray-400 text-sm">Zero upfront risk pilots tied directly to confirmed buyer lead conversions and site visits.</p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 px-6 max-w-7xl mx-auto border-t border-white/10">
        <h2 className="text-3xl font-bold mb-12">Target Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-gradient-to-b from-emerald-500/10 to-zinc-900 border border-emerald-500/40">
            <span className="text-xs uppercase text-emerald-400 font-semibold">Flagship Partner</span>
            <h3 className="text-xl font-bold mt-2 mb-2">Real Estate</h3>
            <p className="text-xs text-gray-400 mb-4">Capture apartment buyers straight from evening TV ads into booked site visits.</p>
            <a href="#contact" className="text-xs text-emerald-400 hover:underline">Inquire for Real Estate →</a>
          </div>
          <div className="p-6 rounded-xl bg-zinc-900 border border-white/10">
            <h3 className="text-xl font-bold mt-6 mb-2">Automotive</h3>
            <p className="text-xs text-gray-400 mb-4">Direct vehicle inquiries to instant phone verification and showroom bookings.</p>
            <a href="#contact" className="text-xs text-emerald-400 hover:underline">Inquire for Automotive →</a>
          </div>
          <div className="p-6 rounded-xl bg-zinc-900 border border-white/10">
            <h3 className="text-xl font-bold mt-6 mb-2">Hospitality</h3>
            <p className="text-xs text-gray-400 mb-4">Turn promotional social reels into instant room and event reservations.</p>
            <a href="#contact" className="text-xs text-emerald-400 hover:underline">Inquire for Hospitality →</a>
          </div>
          <div className="p-6 rounded-xl bg-zinc-900 border border-white/10">
            <h3 className="text-xl font-bold mt-6 mb-2">Healthcare</h3>
            <p className="text-xs text-gray-400 mb-4">Streamline patient consultation bookings from broadcast public notices.</p>
            <a href="#contact" className="text-xs text-emerald-400 hover:underline">Inquire for Healthcare →</a>
          </div>
        </div>
      </section>

      {/* Contact & Action Section */}
      <section id="contact" className="py-20 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="bg-zinc-900 rounded-3xl p-8 md:p-12 border border-white/10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Turn Your Ads Into Sales?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Book your risk-free pilot campaign today. We build your unified lead capture system with zero upfront setup fees.
          </p>

          {/* Interactive Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a
              href="https://wa.me/251979492729?text=Hello%20Bridge%20Media%2C%20I%20would%20like%20to%20learn%20more%20about%20a%20free%20pilot."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition"
            >
              Message Us on WhatsApp
            </a>
            <a
              href="mailto:bridgemediaethiopia@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition border border-white/10"
            >
              Email Us Directly
            </a>
          </div>

          <div className="text-xs text-gray-500 flex flex-col md:flex-row items-center justify-center gap-4">
            <span>Direct Phone: <a href="tel:+251979492729" className="text-gray-300 hover:underline">+251 979 492 729</a></span>
            <span className="hidden md:inline">•</span>
            <span>Addis Ababa, Ethiopia</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10 text-center text-xs text-gray-500">
        <p>© 2026 Bridge Media Ethiopia. All rights reserved.</p>
      </footer>
    </main>
  );
}

