"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-2 bg-black/50 backdrop-blur-md border-b border-white/5"
    >
      <div className="flex items-center gap-2 relative">
        <Image src="/pian logo _no_bg_jt92ibbn.png" alt="PIAN Logo" width={80} height={30} priority style={{ width: 'auto', height: 'auto' }} className="object-contain" />
      </div>
      
      <div className="hidden md:flex items-center gap-4 text-sm font-medium text-gray-300">
        <Link href="#home" className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-[#5EFC0B]/50 hover:text-white transition-all hover:shadow-[0_0_15px_rgba(94,252,11,0.15)]" onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }}>
          Home
        </Link>
        <Link href="#about" className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-[#5EFC0B]/50 hover:text-white transition-all hover:shadow-[0_0_15px_rgba(94,252,11,0.15)]" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>
          About
        </Link>
        <Link href="#features" className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-[#5EFC0B]/50 hover:text-white transition-all hover:shadow-[0_0_15px_rgba(94,252,11,0.15)]" onClick={(e) => { e.preventDefault(); document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); }}>
          Features
        </Link>
        <Link href="/explore" className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-[#5EFC0B]/50 hover:text-white transition-all hover:shadow-[0_0_15px_rgba(94,252,11,0.15)]">
          Explore
        </Link>
        <Link href="#contact" className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-[#5EFC0B]/50 hover:text-white transition-all hover:shadow-[0_0_15px_rgba(94,252,11,0.15)]" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-[#5EFC0B] transition-colors">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full mt-2 px-4 py-6 bg-black/80 backdrop-blur-2xl border-y border-white/10 flex flex-col gap-4 shadow-2xl md:hidden z-50 rounded-b-2xl"
          >
            <Link href="#home" className="block text-center text-lg font-medium text-gray-200 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-[#5EFC0B] transition-all" onClick={(e) => { setIsOpen(false); e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }}>Home</Link>
            <Link href="#about" className="block text-center text-lg font-medium text-gray-200 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-[#5EFC0B] transition-all" onClick={(e) => { setIsOpen(false); e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>About</Link>
            <Link href="#features" className="block text-center text-lg font-medium text-gray-200 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-[#5EFC0B] transition-all" onClick={(e) => { setIsOpen(false); e.preventDefault(); document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); }}>Features</Link>
            <Link href="/explore" className="block text-center text-lg font-medium text-gray-200 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-[#5EFC0B] transition-all" onClick={() => { setIsOpen(false); }}>Explore</Link>
            <Link href="#contact" className="block text-center text-lg font-medium text-gray-200 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-[#5EFC0B] transition-all" onClick={(e) => { setIsOpen(false); e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Contact Us</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
