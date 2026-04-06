"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
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
        <Link href="#contact" className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-[#5EFC0B]/50 hover:text-white transition-all hover:shadow-[0_0_15px_rgba(94,252,11,0.15)]" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
          Contact Us
        </Link>
      </div>
    </motion.nav>
  );
}
