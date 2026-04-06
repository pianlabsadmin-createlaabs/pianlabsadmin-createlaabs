"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Floating neon pill helper
function NeonBar({ width, style, delay = 0, driftDir = "right" }: {
  width: string;
  style?: React.CSSProperties;
  delay?: number;
  driftDir?: "left" | "right";
}) {
  return (
    <motion.div
      className="absolute h-[7px] neon-pill pointer-events-none"
      style={{ width, ...style }}
      animate={{ x: driftDir === "right" ? [0, 20, 0] : [0, -20, 0], opacity: [0.5, 0.9, 0.5] }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

export default function Architecture() {
  const cards = [
    {
      title: "Integration Layer",
      desc: "Connects disparate systems and data sources seamlessly across your enterprise stack",
    },
    {
      title: "AI Execution Layer",
      desc: "Processes data and executes intelligent automated tasks with zero human handoffs",
    },
    {
      title: "Optimization Layer",
      desc: "Continuously refines performance and enhances overall system efficiency over time",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Top neon separator */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#5EFC0B]/40 to-transparent" />

      {/* Ambient right glow */}
      <div
        className="absolute top-1/2 right-[-15%] -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(94,252,11,0.12) 0%, transparent 70%)" }}
      />

      {/* Floating neon bars scattered */}
      <NeonBar width="200px" style={{ top: "20%", left: "2%" }} delay={0} />
      <NeonBar width="120px" style={{ top: "50%", left: "4%" }} delay={1.5} driftDir="left" />
      <NeonBar width="160px" style={{ bottom: "18%", left: "1%" }} delay={2.5} />
      <NeonBar width="100px" style={{ top: "30%", right: "2%" }} delay={0.7} driftDir="left" />
      <NeonBar width="180px" style={{ bottom: "25%", right: "3%" }} delay={2} />

      <div className="container mx-auto px-6 lg:px-16 relative z-10 flex flex-col lg:flex-row items-center gap-16">

        {/* Left: Text content */}
        <div className="flex-1 w-full max-w-xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 leading-tight"
          >
            <span style={{ color: "#5EFC0B", textShadow: "0 0 20px rgba(94,252,11,0.5)" }}>PIAN</span> Introduces a<br />
            Three-Layer<br />
            Execution Architecture
          </motion.h2>

          <div className="space-y-6">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.03, x: 10 }}
                className="relative group"
              >
                <div
                  className="glass-panel p-6 rounded-xl hover:bg-white/8 transition-all cursor-default"
                  style={{ borderLeft: "4px solid #5EFC0B" }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold mb-1 text-white group-hover:text-[#5EFC0B] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-sm text-gray-400">{card.desc}</p>
                    </div>
                    {/* Arrow connector */}
                    <div className="hidden lg:flex items-center ml-4">
                      <div className="w-8 h-[2px] bg-[#5EFC0B]/60" />
                      <div className="border-[6px] border-transparent border-l-[#5EFC0B]/60" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: 3D stacked glass layers */}
        <div className="flex-1 relative w-full lg:h-[700px] flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            animate={{ y: [0, -15, 0] }}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            style={{} as any}
            className="relative w-full max-w-[600px] aspect-square"
          >
            <Image
              src="/3 green layer rectangles_no_bg_4rz06ueu.png"
              alt="Three Layer Architecture"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ filter: "drop-shadow(0 20px 60px rgba(94,252,11,0.35))" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom neon separator */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#5EFC0B]/30 to-transparent" />
    </section>
  );
}
