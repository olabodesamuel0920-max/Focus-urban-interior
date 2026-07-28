"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Check if intro has already been shown in this session
    const hasSeenIntro = sessionStorage.getItem("focus_urban_intro_seen");
    if (hasSeenIntro) {
      setShow(false);
      return;
    }

    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("focus_urban_intro_seen", "true");
    }, 1350);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[120] grid place-items-center bg-ink text-white"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex flex-col items-center gap-8 px-6 text-center">
            <div className="relative h-16 w-56 sm:h-20 sm:w-64">
              <Image
                src="/images/focus-logo.png"
                alt="Focus Urban Interiors"
                fill
                priority
                className="object-contain brightness-0 invert"
              />
            </div>
            <div className="h-px w-56 overflow-hidden bg-white/20">
              <motion.div
                className="h-full bg-ember"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 1.15, ease: "easeInOut" }}
              />
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">
              Interior Architecture · Lagos
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
