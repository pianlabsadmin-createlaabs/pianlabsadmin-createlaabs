"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingIntro() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 second loading sequence
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          <motion.div
            initial={{ opacity: 0.2, scale: 0.9, filter: "brightness(0.5)" }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              filter: "brightness(1) drop-shadow(0 0 20px rgba(94, 252, 11, 0.8))" 
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="relative"
          >
            <Image 
              src="/pian logo _no_bg_jt92ibbn.png" 
              alt="PIAN power on" 
              width={600} 
              height={240} 
              priority
              style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
