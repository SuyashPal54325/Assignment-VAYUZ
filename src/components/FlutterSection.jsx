import React from "react";
import { motion } from "framer-motion";


// Lightweight inline icon to avoid external dependency
const ArrowUpRight = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

export default function FlutterSection() {
  return (
    <section className="bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl">
      

        {/* Top Hero Row */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
          {/* Left text */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold leading-tight">
              Unlock the Potential of Flutter
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Your Premier Partner for Cross-Platform App Excellence!
            </p>
            <button className="mt-6 px-6 py-3 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              UPGRADE YOUR TECH
            </button>
          </div>

          {/* Right image */}
          <div className="flex-1 relative">
            <img
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <motion.img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Snippet 1"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute top-8 right-0 w-64 rounded-lg shadow-lg"
            />
            <motion.img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Snippet 2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-6 right-0 w-64 rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Divider spacing */}
        <div className="my-16 border-t border-gray-800"></div>

        {/* History Row */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Title */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold">Flutter&apos;s Dawn</h2>
            <p className="text-lg text-gray-400">History of flutter</p>
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <p className="text-gray-300 leading-relaxed">
              Uncover the fascinating story of Flutter in &apos;Flutter’s Dawn:
              History of Flutter.&apos; From humble origins to global acclaim,
              delve into its captivating narrative. Explore milestones,
              triumphs, and challenges. Whether tech enthusiast or curious
              mind, join us on this captivating journey!{" "}
              <a href="#start" className="text-cyan-500 hover:underline">
                Click to begin!
              </a>
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-6 flex items-center gap-2 px-6 py-3 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition"
            >
              BEGIN <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
