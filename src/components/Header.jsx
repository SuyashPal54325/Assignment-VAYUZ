import React from 'react'
import logoVayu from '../assets/VAYUZ_Main-Logo_Ver_201612111-300x70-300x70.png'
export default function Header() {
  return (
    <header className="bg-zinc-900 text-white w-64 min-h-screen sticky top-0 flex flex-col justify-between p-6 border-r-2 border-gray-500">
      {/* Top section */}
      <div>
        {/* Logo */}
        <img
          src={logoVayu} // replace with your VAYUZ logo path
          alt="VAYUZ"
          className="w-28"
        />

        {/* Contact Us Button */}
        <div className="mt-6">



          <button className="relative px-6 py-2 rounded-full text-white font-semibold bg-black">
            {/* Gradient Border Layer */}
            <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-green-500 via-yellow-500 to-blue-500">
              <span className="block h-full w-full rounded-full bg-black"></span>
            </span>
            {/* Button Text */}
            <span className="relative z-10">CONTACT US</span>
          </button>

        </div>

        {/* Nav Links */}
        <nav className="mt-8 space-y-6 text-sm">
          <a href="#appdev" className="block hover:text-gray-300">
            App Development
          </a>
          <a href="#challenges" className="block hover:text-gray-300">
            Challenges
          </a>
          <a href="#hiredev" className="block hover:text-gray-300">
            Hire Developer
          </a>
          <a href="#community" className="block hover:text-gray-300">
            Community
          </a>
        </nav>

        {/* Bottom Image + Text */}
        <div className="mt-40">
          <img
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // replace with your image path
            alt="Workspace"
            className="rounded-lg mb-4"
          />
          <p className="text-xs leading-relaxed text-gray-300">
            Lorem ipsum dolor sit amet consectetur. Enim tempor posuere rutrum.
          </p>
        </div>

      </div>



    </header>
  )
}
