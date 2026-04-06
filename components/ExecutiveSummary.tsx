"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ExecutiveSummary() {
  return (
    <section className="relative py-16 w-full overflow-hidden">
      {/* Section top neon line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#5EFC0B]/50 to-transparent" />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(94,252,11,0.05) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          whileHover={{ scale: 1.02, boxShadow: "0 0 100px rgba(94,252,11,0.25)" }}
          className="relative w-full rounded-2xl overflow-hidden cursor-default"
          style={{
            border: "1px solid rgba(94,252,11,0.25)",
            boxShadow: "0 0 60px rgba(94,252,11,0.1), 0 0 120px rgba(94,252,11,0.05)",
          }}
        >
          {/* Corner accent lines */}
          <div className="absolute top-0 left-0 w-16 h-[2px] bg-[#5EFC0B]" />
          <div className="absolute top-0 left-0 w-[2px] h-16 bg-[#5EFC0B]" />
          <div className="absolute bottom-0 right-0 w-16 h-[2px] bg-[#5EFC0B]" />
          <div className="absolute bottom-0 right-0 w-[2px] h-16 bg-[#5EFC0B]" />

          {/* 50% bigger: was aspect-[21/9], now use a fixed max-height of ~800px */}
          <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
            <Image
              src="/executive summery page.png"
              alt="Executive Summary – PIAN Addresses a Structural Gap in Enterprise Execution"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </motion.div>
      </div>

      {/* Section bottom neon line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#5EFC0B]/30 to-transparent" />
    </section>
  );
}
