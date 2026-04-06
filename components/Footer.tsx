"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] pt-24 pb-8 overflow-hidden border-t border-white/5">
      {/* Background texture/glow */}
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Address Column */}
          <div>
            <h4 className="text-white font-medium mb-6">Address</h4>
            <address className="text-gray-400 not-italic text-sm space-y-1">
              <p>5900 BALCONES DRIVE SUITE 100</p>
              <p>AUSTIN, TX 78731</p>
            </address>
          </div>

          {/* Phone Column */}
          <div>
            <h4 className="text-white font-medium mb-6">Phone</h4>
            <div className="text-gray-400 text-sm space-y-2">
              <p>+1 505 500 1244</p>
              <p>+91 9310266326</p>
              <p>+91 8766207465</p>
            </div>
          </div>

          {/* Reach Us Column */}
          <div>
            <h4 className="text-white font-medium mb-6">Reach Us</h4>
            <div className="text-gray-400 text-sm">
              <a href="mailto:info@techsnitch.co" className="hover:text-neon transition-colors">info@techsnitch.co</a>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-sm text-gray-500">
          <div>
            <h4 className="text-white font-medium mb-4">Privacy Policy</h4>
            <p className="leading-relaxed">
              We collect basic information like name, email, and usage data to improve our
              <br/><br/>
              Your data is never sold. For requests, contact info@techsnitch.co
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Terms & Conditions</h4>
            <p className="leading-relaxed">
              Use of this site means you accept our terms. All content is owned by TechSnitch and cannot be reused without permission.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-500">
          <div className="hidden md:block"></div>
          <div>© 2024 Tech Snitch | All Rights Reserved.</div>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Cookies Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
