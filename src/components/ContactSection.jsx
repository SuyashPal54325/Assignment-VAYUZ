import React from "react";

export default function ContactSection() {
  return (
    <section className="bg-zinc-900 text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Column */}
        <div className="flex-1 flex flex-col justify-between">
          {/* Top Nav */}
          <nav className="flex flex-wrap gap-6 text-sm mb-12">
            <a href="#" className="hover:text-gray-300">Events</a>
            <a href="#" className="hover:text-gray-300">Gen AI</a>
            <a href="#" className="hover:text-gray-300">Careers</a>
            <a href="#" className="hover:text-gray-300">Case study</a>
            <a href="#" className="hover:text-gray-300">SME Talks</a>
          </nav>

          {/* Main Text */}
          <div>
            <p className="text-2xl leading-snug max-w-md mb-4">
              For any collaborative projects or enquiries feel free to connect
              with us.
            </p>
            <p className="text-xl font-semibold">vayuz.com</p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-6 text-sm mt-12">
            <a href="#" className="hover:text-gray-300">About</a>
            <a href="#" className="hover:text-gray-300">Insights</a>
            <a href="#" className="hover:text-gray-300">Community</a>
            <a href="#" className="hover:text-gray-300">Privacy & Policies</a>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-6 lg:mb-8">Connect With Us</h2>
          <form className="space-y-6 max-w-md">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2"
              />
            </div>
            <div>
              <button
                type="submit"
                className="px-6 sm:px-8 py-2 rounded-full bg-cyan-600 hover:bg-cyan-500 transition font-semibold"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
