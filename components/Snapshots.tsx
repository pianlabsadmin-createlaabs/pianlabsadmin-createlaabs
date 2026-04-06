"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const SCREENSHOTS = [
  "/screenshots/Screenshot 2026-04-05 123358.png",
  "/screenshots/Screenshot 2026-04-05 123446.png",
  "/screenshots/Screenshot 2026-04-05 123454.png",
  "/screenshots/Screenshot 2026-04-05 123509.png",
  "/screenshots/Screenshot 2026-04-05 123525.png",
  "/screenshots/Screenshot 2026-04-05 123533.png",
  "/screenshots/Screenshot 2026-04-05 123550.png",
  "/screenshots/Screenshot 2026-04-05 123602.png",
  "/screenshots/Screenshot 2026-04-05 123624.png",
  "/screenshots/Screenshot 2026-04-05 123642.png",
  "/screenshots/Screenshot 2026-04-05 123701.png",
  "/screenshots/Screenshot 2026-04-05 123708.png",
  "/screenshots/Screenshot 2026-04-05 123826.png",
  "/screenshots/Screenshot 2026-04-05 123846.png",
];

export default function Snapshots() {
  const [current, setCurrent] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const total = SCREENSHOTS.length;

  const goNext = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const goPrev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  // Autoplay – pause-free, resets when user interacts
  useEffect(() => {
    const id = setInterval(goNext, 4500);
    return () => clearInterval(id);
  }, [goNext]);

  const prevIdx = (current - 1 + total) % total;
  const nextIdx = (current + 1) % total;

  return (
    <section id="features" className="relative py-24 overflow-visible">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ background: "radial-gradient(ellipse at bottom right, rgba(94,252,11,0.1) 0%, transparent 60%)" }}
      />
      {/* Top neon separator */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#5EFC0B]/50 to-transparent" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">SNAPSHOTS</h2>
          <p className="text-gray-400 text-lg">
            A quick look at how PIAN works across real tasks and workflows.
          </p>
        </motion.div>

        {/* ── Carousel wrapper: arrows sit OUTSIDE overflow-hidden band ── */}
        <div className="relative flex items-center gap-4">

          {/* Left Arrow – outside the slide band */}
          <motion.button
            type="button"
            onClick={goPrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex-shrink-0 z-30 p-3 rounded-full glass-panel hover:bg-white/10 transition-all"
            style={{ border: "1px solid rgba(94,252,11,0.35)" }}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </motion.button>

          {/* Three-panel row – prev peek | center | next peek */}
          <div className="flex-1 flex items-center justify-center gap-4 overflow-hidden w-full">

            {/* Prev peek */}
            <div
              className="hidden md:block flex-shrink-0 relative cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-black/40"
              style={{ width: "15%", aspectRatio: "16/9", opacity: 0.45 }}
              onClick={goPrev}
            >
              <Image src={SCREENSHOTS[prevIdx]} alt="" fill className="object-cover" sizes="20vw" priority />
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Active center */}
            <div className="flex-[3] relative overflow-hidden rounded-2xl border-2 z-10 w-full"
              style={{
                borderColor: "rgba(94,252,11,0.5)",
                boxShadow: "0 0 40px rgba(94,252,11,0.2), 0 0 80px rgba(94,252,11,0.07)",
                aspectRatio: "16/9",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  className="absolute inset-0 cursor-pointer"
                  onClick={() => setIsLightboxOpen(true)}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative w-full h-full bg-[#0a0a0a]">
                    <Image
                      src={SCREENSHOTS[current]}
                      alt={`Snapshot ${current + 1}`}
                      fill
                      className="object-cover md:object-contain"
                      sizes="(max-width: 1280px) 80vw, 900px"
                      priority
                    />
                  </div>
                  {/* Corner glints */}
                  <div className="absolute top-0 left-0 w-12 h-12 bg-[#5EFC0B]/20 blur-xl pointer-events-none" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 bg-[#5EFC0B]/20 blur-xl pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next peek */}
            <div
              className="hidden md:block flex-shrink-0 relative cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-black/40"
              style={{ width: "15%", aspectRatio: "16/9", opacity: 0.45 }}
              onClick={goNext}
            >
              <Image src={SCREENSHOTS[nextIdx]} alt="" fill className="object-cover" sizes="20vw" priority />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </div>

          {/* Right Arrow – outside */}
          <motion.button
            type="button"
            onClick={goNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex-shrink-0 z-30 p-3 rounded-full glass-panel hover:bg-white/10 transition-all"
            style={{ border: "1px solid rgba(94,252,11,0.35)" }}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </motion.button>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {SCREENSHOTS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === current ? 28 : 10,
                height: 10,
                borderRadius: 9999,
                background: i === current ? "#5EFC0B" : "rgba(255,255,255,0.25)",
                boxShadow: i === current ? "0 0 14px rgba(94,252,11,0.7)" : "none",
                transition: "all 0.3s ease",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom neon separator */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#5EFC0B]/30 to-transparent" />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-md"
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-7xl max-h-[90vh] aspect-[4/3] md:aspect-video lg:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              style={{
                boxShadow: "0 0 100px rgba(94,252,11,0.15)",
                border: "1px solid rgba(94,252,11,0.3)",
              }}
            >
              <button
                className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-[#5EFC0B]/20 text-white rounded-full transition-all backdrop-blur-md"
                onClick={() => setIsLightboxOpen(false)}
              >
                <X size={24} />
              </button>
              <Image
                src={SCREENSHOTS[current]}
                alt={`Snapshot ${current + 1} Full`}
                fill
                className="object-contain bg-[#050505]"
                quality={100}
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
