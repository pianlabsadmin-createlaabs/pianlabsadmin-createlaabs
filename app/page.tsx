import Navbar from "@/components/Navbar";
import LoadingIntro from "@/components/LoadingIntro";
import Hero from "@/components/Hero";
import Agents from "@/components/Agents";
import Snapshots from "@/components/Snapshots";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import Architecture from "@/components/Architecture";
import Deployment from "@/components/Deployment";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <LoadingIntro />
      <Navbar />
      <main className="relative flex min-h-screen flex-col bg-black text-white selection:bg-[#5EFC0B]/30 selection:text-white">
        {/* Global page-wide ambient background elements */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          aria-hidden="true"
          style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(94,252,11,0.03) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(0,100,255,0.03) 0%, transparent 50%)" }}
        />

        <Hero />
        <Agents />
        <Snapshots />
        <ExecutiveSummary />
        <Architecture />
        <Deployment />
      </main>
      <Footer />
    </>
  );
}
