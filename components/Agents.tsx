"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

// ── Typewriter triggered when element enters view ──
function Typewriter({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState("");
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let i = 0;
          const id = setInterval(() => {
            i++;
            setDisplayed(text.slice(0, i));
            if (i >= text.length) clearInterval(id);
          }, 60); // 60ms makes it fast and snappy
        }
      },
      { threshold: 0.1 } // Triggers much earlier when scrolling
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [text]);

  return (
    <span ref={ref} className="inline-block relative">
      <style>{`
        @keyframes customBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
      {displayed}
      <span
        className="inline-block w-[3px] h-[0.85em] bg-yellow-400 ml-1 align-baseline"
        style={{ animation: "customBlink 0.8s step-end infinite" }}
      />
    </span>
  );
}

// ── Floating green random orbs (Optimized) ──
function FloatingOrb({ style, delay }: { style: React.CSSProperties; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        background: "radial-gradient(circle, rgba(94,252,11,0.8) 0%, rgba(94,252,11,0.1) 70%, transparent 100%)",
        filter: "blur(6px)",
        willChange: "transform",
        ...style,
      }}
      animate={{
        x: [0, 40, -30, 0],
        y: [0, -60, 40, 0],
      }}
      transition={{
        duration: 15 + delay,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
    />
  );
}

// ── Floating neon pill bar ──
function NeonBar({ width, style, delay = 0, dir = "right" }: {
  width: string; style?: React.CSSProperties; delay?: number; dir?: "left" | "right";
}) {
  return (
    <motion.div
      className="absolute h-[7px] neon-pill pointer-events-none"
      style={{ width, ...style }}
      animate={{ x: dir === "right" ? [0, 24, 0] : [0, -24, 0], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

export default function Agents() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yEnvelope = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yCompass = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const rot = useTransform(scrollYProgress, [0, 1], [0, 30]);

  const agentCards = [
    { label: "Connect Systems", img: "/braiin on hand baby voilet.png", bg: "#7C3AED" },
    { label: "Make decisions",  img: "/thinking man red.png",            bg: "#BE185D" },
    { label: "Execute tasks",   img: "/writing on paper blue.png",       bg: "#0284C7" },
  ];

  return (
    <section id="about" ref={containerRef} className="relative overflow-hidden bg-black" style={{ position: "relative" }}>

      {/* ══════════════════════════════════════════
          TOP BAND: "it's a multi-agent …" + 3 cards
         ══════════════════════════════════════════ */}
      <div className="relative py-20 px-6 lg:px-20 text-center overflow-hidden">
        {/* Subtle dark grid squares bg (like in the reference screenshot) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto"
        >
          it&apos;s a multi-agent execution platform where intelligent agents:
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6 relative z-10">
          {agentCards.map(({ label, img, bg }, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.7 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="relative glass-panel rounded-3xl p-8 flex flex-col items-center gap-6 cursor-default w-full max-w-[360px]"
              style={{
                border: `2px solid ${bg}44`,
                boxShadow: `0 0 50px ${bg}22`,
              }}
            >
              {/* Blurred square ghost behind card – matches reference squares */}
              <div
                className="absolute -inset-3 rounded-3xl blur-xl pointer-events-none"
                style={{ background: `${bg}18` }}
              />
              <div
                className="relative w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0"
                style={{ background: `${bg}33` }}
              >
                <Image src={img} alt={label} fill className="object-contain p-4" sizes="200px" />
              </div>
              <span className="text-xl md:text-2xl font-semibold text-white text-center leading-tight relative z-10 mt-2">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          BOTTOM BAND: big headline + 3D objects
         ══════════════════════════════════════════ */}
      <div className="relative min-h-[90vh] flex flex-col lg:flex-row items-center overflow-hidden pt-16 lg:pt-0">

        {/* Glowing yellow-green ribbon / aurora behind the objects */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 55% 60%, rgba(180,255,20,0.18) 0%, rgba(94,252,11,0.1) 30%, transparent 65%)",
          }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Random floating green orbs */}
        <FloatingOrb style={{ width: 80, height: 80, top: "10%", left: "45%" }} delay={0} />
        <FloatingOrb style={{ width: 48, height: 48, top: "70%", left: "30%" }} delay={2} />
        <FloatingOrb style={{ width: 32, height: 32, top: "30%", left: "70%" }} delay={1} />
        <FloatingOrb style={{ width: 60, height: 60, bottom: "15%", right: "15%" }} delay={3} />
        <FloatingOrb style={{ width: 24, height: 24, top: "55%", left: "55%" }} delay={1.5} />
        <FloatingOrb style={{ width: 40, height: 40, top: "20%", right: "30%" }} delay={4} />

        {/* Neon bars */}
        <NeonBar width="180px" style={{ top: "22%", left: "3%" }} delay={0} />
        <NeonBar width="110px" style={{ top: "58%", left: "4%" }} delay={1.8} dir="left" />
        <NeonBar width="210px" style={{ bottom: "20%", left: "1%" }} delay={3} />
        <NeonBar width="140px" style={{ top: "38%", right: "2%" }} delay={0.8} dir="left" />
        <NeonBar width="90px"  style={{ bottom: "28%", right: "5%" }} delay={2.2} />

        {/* Left: Text copy */}
        <div className="relative z-20 flex-1 w-full lg:w-1/2 px-8 lg:px-20 py-10 lg:py-20 text-center lg:text-left flex flex-col items-center lg:items-start">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight text-white mt-8 lg:mt-0"
          >
            Choose from
            <br />
            <span style={{ color: "#5EFC0B", textShadow: "0 0 25px rgba(94,252,11,0.55)" }}>300+ AI</span>
            <br />
            Agents
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 text-2xl md:text-3xl font-semibold flex items-center gap-3"
          >
            <span className="text-white">Built for</span>
            <span
              className="text-yellow-400 font-black text-3xl md:text-4xl"
              style={{ textShadow: "0 0 18px rgba(253,224,71,0.7)" }}
            >
              <Typewriter text="INDUSTRY" />
            </span>
          </motion.div>
        </div>

        {/* Right: Floating 3D objects */}
        <div className="relative lg:absolute right-0 top-0 w-full lg:w-1/2 h-[60vh] lg:h-full pointer-events-none mt-10 lg:mt-0 overflow-visible">

          {/* Globe – center */}
          <motion.div
            animate={{ y: [0, -28, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[28%] left-[28%] w-72 h-72 md:w-80 md:h-80 z-10"
          >
            <Image
              src="/black globe_no_bg_lcv34550.png"
              alt="Globe"
              fill
              className="object-contain"
              sizes="320px"
              style={{ filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.9))" }}
            />
          </motion.div>

          {/* Envelope – top-left of objects panel */}
          <motion.div style={{ y: yEnvelope }} className="absolute top-[5%] left-0 w-56 h-56 z-20">
            <Image src="/black letter_no_bg_1rou5q0a.png" alt="Envelope" fill className="object-contain drop-shadow-2xl" sizes="250px" />
          </motion.div>

          {/* Compass – top-right */}
          <motion.div style={{ y: yCompass, rotate: rot }} className="absolute top-[5%] right-4 w-28 h-28">
            <Image src="/black compus_no_bg_zfohnmpz.png" alt="Compass" fill className="object-contain drop-shadow-xl" sizes="150px" />
          </motion.div>

          {/* Phone – bottom-left */}
          <motion.div
            animate={{ y: [0, 18, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[12%] left-[5%] w-44 h-44"
          >
            <Image src="/black phone_no_bg_y3qfgusg.png" alt="Phone" fill className="object-contain drop-shadow-2xl" sizes="200px" />
          </motion.div>

          {/* Location pin – bottom-right */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-[18%] right-[8%] w-28 h-28"
          >
            <Image src="/black location_no_bg_r86moo2l.png" alt="Location" fill className="object-contain drop-shadow-xl" sizes="150px" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
