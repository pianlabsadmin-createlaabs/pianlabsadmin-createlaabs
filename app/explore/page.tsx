import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ExploreTools from "@/components/ExploreTools";

export default function ExplorePage() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
        <div className="container mx-auto px-6 lg:px-16 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/pian logo _no_bg_jt92ibbn.png"
              alt="PIAN Logo"
              width={80}
              height={30}
              priority
              style={{ width: "auto", height: "auto" }}
              className="object-contain"
            />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-gray-200 hover:border-[#5EFC0B]/50 hover:text-white transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="min-h-screen bg-black text-white pt-20 selection:bg-[#5EFC0B]/30 selection:text-white">
        <ExploreTools />
      </main>
    </>
  );
}
