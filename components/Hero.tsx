"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Floating random blob (Optimized)
function RandomBlob({ className }: { className: string }) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{ filter: "blur(80px)", willChange: "transform" }}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -50, 20, 0],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

// Floating neon pill/bar
function NeonBar({ width, top, left, right, delay = 0, driftDir = "right" }: {
  width: string; top?: string; left?: string; right?: string; delay?: number; driftDir?: "left" | "right";
}) {
  return (
    <motion.div
      className="absolute h-[6px] neon-pill pointer-events-none"
      style={{ width, top, left, right }}
      animate={{
        x: driftDir === "right" ? [0, 20, 0] : [0, -20, 0],
        opacity: [0.6, 1, 0.6],
      }}
      transition={{
        duration: 4 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100vh] w-full flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Random motion blobs */}
      <RandomBlob className="w-[500px] h-[500px] bg-[#5EFC0B]/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <RandomBlob className="w-[300px] h-[300px] bg-blue-500/10 top-[20%] right-[10%]" />
      <RandomBlob className="w-[400px] h-[400px] bg-[#5EFC0B]/10 bottom-[20%] left-[5%]" />

      {/* Vertical light columns on the right (from screenshot) */}
      <div className="absolute right-0 top-0 h-full w-[200px] pointer-events-none">
        {[0, 30, 60, 90, 120, 150].map((left, i) => (
          <motion.div
            key={i}
            className="absolute top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#5EFC0B]/30 to-transparent"
            style={{ left }}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </div>

      {/* Bottom neon line only (no top line across COMING SOON) */}
      <div className="absolute bottom-[12%] left-0 w-full neon-line pointer-events-none opacity-40" />

      {/* Floating neon pills / green bars */}
      <NeonBar width="200px" top="30%" left="5%" delay={0} />
      <NeonBar width="120px" top="60%" left="8%" delay={1.5} driftDir="left" />
      <NeonBar width="80px" top="45%" right="25%" delay={0.5} />
      <NeonBar width="160px" top="75%" right="15%" delay={2} driftDir="left" />

      {/* Absolute COMING SOON - ghost watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-[12%] left-0 w-full text-center pointer-events-none select-none z-0 flex justify-center"
      >
        <h1 className="text-[14vw] md:text-[175px] font-black tracking-tighter text-white whitespace-nowrap pt-4 leading-none">
          COMING SOON...
        </h1>
      </motion.div>

      <div className="container relative z-10 mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-left">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-4 text-white"
          >
            Revolutionize Your <br />
            Workflow with <br />
            <span className="neon-text font-black text-6xl md:text-7xl lg:text-8xl">PIAN.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 group cursor-pointer inline-flex items-center gap-2 backdrop-blur-md bg-white/5 px-8 py-4 rounded-full border border-white/10 hover:border-[#5EFC0B]/50 transition-all hover:shadow-[0_0_30px_rgba(94,252,11,0.2)]"
          >
            <span className="text-base font-medium">Coming soon...</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#5EFC0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </motion.div>
        </div>

        <div className="flex-1 relative flex items-center justify-center">
          {/* Floating green squares around the icon */}
          {[
            { top: "10%", left: "55%", size: 32, delay: 0 },
            { top: "25%", left: "80%", size: 20, delay: 0.7 },
            { top: "60%", left: "20%", size: 28, delay: 1.2 },
            { top: "75%", left: "70%", size: 16, delay: 0.4 },
            { top: "40%", left: "5%", size: 24, delay: 1.8 },
          ].map((sq, i) => (
            <motion.div
              key={i}
              className="absolute rounded-sm bg-[#5EFC0B]/80 shadow-[0_0_10px_rgba(94,252,11,0.8)]"
              style={{ top: sq.top, left: sq.left, width: sq.size, height: sq.size }}
              animate={{ y: [0, -15, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3 + sq.delay, repeat: Infinity, delay: sq.delay, ease: "easeInOut" }}
            />
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative w-[350px] h-[350px] md:w-[550px] md:h-[550px]"
          >
            <Image
              src="/Glowing app icon in hand.png"
              alt="Glowing P in hand"
              fill
              className="object-contain drop-shadow-[0_0_60px_rgba(94,252,11,0.4)]"
              sizes="(max-width: 768px) 350px, 550px"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Experience line at bottom */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-0 w-full text-center text-sm md:text-base text-gray-400 px-6 z-10"
      >
        Experience cutting-edge solutions designed to elevate productivity and deliver results like never before.
      </motion.p>
    </section>
  );
}
