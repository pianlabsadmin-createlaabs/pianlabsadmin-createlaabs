"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  CreditCard,
  ExternalLink,
  FileStack,
  LockKeyhole,
  MonitorCog,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Zero-Trace Rewriting",
    description:
      "100% bypass of plagiarism scanners using deep semantic restructuring.",
  },
  {
    icon: FileStack,
    title: "Military-Grade Format Retention",
    description:
      "Upload a PDF or DOCX and get back a fully rewritten document with tables, paragraphs, and headings untouched.",
  },
  {
    icon: LockKeyhole,
    title: "Encrypted Vault",
    description:
      "All processed intel is securely stored in your personal encrypted cloud vault for anytime access.",
  },
  {
    icon: CreditCard,
    title: "Credits Matrix",
    description:
      "Seamless top-ups via Razorpay to keep your neural processing pipeline fueled.",
  },
  {
    icon: MonitorCog,
    title: "Cyber-Aesthetic UI",
    description:
      "A hacker-grade interface with real-time payload tracking and terminal logs.",
  },
];

export default function ExploreTools() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 20% 30%, rgba(94,252,11,0.08) 0%, transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(0,120,255,0.08) 0%, transparent 55%)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-16 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-[#5EFC0B]/90 mb-3">
            Explore
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Other Tools by PIAN Labs
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Explore focused products built by our team.
          </p>
        </motion.div>

        <motion.a
          href="https://plagax.netlify.app/"
          whileHover={{
            scale: 1.02,
            y: -6,
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.5), 0 0 50px rgba(94,252,11,0.18)",
          }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          className="group relative block rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl overflow-hidden cursor-pointer"
        >
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#5EFC0B]/10 via-transparent to-blue-500/10 opacity-70 group-hover:opacity-100 transition-opacity" />

          <div className="relative p-4 md:p-6">
            <div
              className="relative w-full rounded-2xl border border-white/10 bg-black/45 overflow-hidden"
              style={{ aspectRatio: "1884 / 930" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#5EFC0B]/5 to-transparent pointer-events-none z-10" />
              <Image
                src="/explore/Screenshot%202026-04-10%20171937.png"
                alt="Plagax tool preview"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 1280px) 100vw, 1200px"
                priority
              />
            </div>
          </div>

          <div className="relative p-7 pt-2 md:p-10 md:pt-2">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#5EFC0B]/40 bg-[#5EFC0B]/10 text-[#5EFC0B]">
                  <ExternalLink className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-3xl font-bold leading-tight">Plagax</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                    Powered by PIANLABS
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Say goodbye to basic paraphrasing tools that ruin formatting and
                twist facts. Plagax is a state-of-the-art Zero-Trace Neural
                Array that rewrites intelligence reports, academic papers, and
                technical docs while keeping original formatting strictly locked
                in.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                Powered by Gemini 3.1 Advanced Architecture, it dismantles each
                sentence and reconstructs it with elite vocabulary, designed to
                bypass modern AI detection and plagiarism scanners.
              </p>

              <div className="mt-7 space-y-3">
                {features.map(({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="rounded-xl border border-white/10 bg-black/35 p-3 md:p-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 text-[#5EFC0B]">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm md:text-base font-semibold text-white">
                          {title}
                        </p>
                        <p className="text-xs md:text-sm text-gray-400 mt-1">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#5EFC0B]/40 bg-[#5EFC0B]/10 px-4 py-2 text-sm font-medium text-[#D9FFC4] group-hover:border-[#5EFC0B]/70 group-hover:bg-[#5EFC0B]/20 transition-all">
                Open Plagax
                <ExternalLink className="h-4 w-4" />
              </div>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
