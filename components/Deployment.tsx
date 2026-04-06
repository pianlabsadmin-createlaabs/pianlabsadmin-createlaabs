"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// Floating neon pill
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

export default function Deployment() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "submitting") return;
    setStatus("submitting");
    try {
      // Server action / API route would go here. Email destination: PRANLabsAdmin@gmail.com
      await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, to: "PRANLabsAdmin@gmail.com" }),
      });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Top neon line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#5EFC0B]/40 to-transparent" />

      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, #000 0%, #050f00 50%, #000 100%)" }}
      />

      {/* Left ambient glow blob */}
      <motion.div
        className="absolute top-1/2 left-[15%] -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(94,252,11,0.1) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating neon bars */}
      <NeonBar width="150px" style={{ top: "20%", right: "5%" }} delay={0} driftDir="left" />
      <NeonBar width="200px" style={{ top: "55%", right: "8%" }} delay={1.5} />
      <NeonBar width="100px" style={{ bottom: "20%", right: "3%" }} delay={3} driftDir="left" />
      <NeonBar width="120px" style={{ top: "35%", left: "2%" }} delay={0.5} />

      <div className="container mx-auto px-6 lg:px-16 relative z-10 flex flex-col lg:flex-row items-center gap-16">

        {/* Left: Glossy icons cluster */}
        <div className="flex-1 relative w-full lg:h-[600px] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-[540px] aspect-square"
          >
            <Image
              src="/5 rectangles in circle.png"
              alt="5 rectangles in circle"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.8))" }}
            />
          </motion.div>
        </div>

        {/* Right: Copy + form + metrics */}
        <div className="flex-1 max-w-xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight"
          >
            <span style={{ color: "#5EFC0B", textShadow: "0 0 20px rgba(94,252,11,0.5)" }}>PIAN</span> Deploys Across<br />
            Every{" "}
            <span style={{ color: "#5EFC0B" }}>Enterprise</span>
            <br />
            <span style={{ color: "#5EFC0B" }}>Function</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mb-10 text-base md:text-lg leading-relaxed"
          >
            PIAN enables seamless deployment across HR, Finance, Legal, Support, and IT Operations — ensuring consistent,
            efficient performance through AI agents that work autonomously at enterprise scale.
          </motion.p>

          {/* Email form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 mb-14"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email..."
              disabled={status === "submitting" || status === "success"}
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#5EFC0B]/60 focus:ring-1 focus:ring-[#5EFC0B]/40 transition-all disabled:opacity-60"
            />
            <motion.button
              type="submit"
              disabled={status === "submitting" || status === "success"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-bold px-10 py-4 rounded-xl transition-all disabled:opacity-70"
              style={{
                background: status === "success" ? "#1a4a00" : "#5EFC0B",
                color: "#000",
                boxShadow: "0 0 20px rgba(94,252,11,0.4)",
              }}
            >
              {status === "submitting" ? "Sending…" : status === "success" ? "✓ Subscribed!" : "Sign Up"}
            </motion.button>
          </motion.form>

          {status === "error" && (
            <p className="text-red-400 text-sm mb-8">Something went wrong. Please try again.</p>
          )}

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex gap-12"
          >
            <div>
              <div className="text-5xl md:text-6xl font-light mb-2" style={{ color: "#fff" }}>
                200<span style={{ color: "#5EFC0B" }}>+</span>
              </div>
              <div className="text-sm text-gray-500 leading-tight max-w-[130px]">Deployments Across Industries</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-light mb-2" style={{ color: "#fff" }}>
                5<span style={{ color: "#5EFC0B" }}>x</span>
              </div>
              <div className="text-sm text-gray-500 leading-tight max-w-[130px]">More Efficient Operations</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom neon separator */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#5EFC0B]/30 to-transparent" />
    </section>
  );
}
