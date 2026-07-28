"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MoveUpRight, X } from "lucide-react";
import { siteConfig } from "@/data/siteData";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Process", href: "/process" },
  { name: "Journal", href: "/journal" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isLightNav = scrolled || pathname !== "/";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isLightNav
            ? "bg-canvas/90 py-3 shadow-[0_1px_0_rgba(0,0,0,0.08)] backdrop-blur-xl"
            : "py-5 md:py-7"
        }`}
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 md:px-10 lg:px-14">
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-90"
            aria-label="Focus Urban Interiors Home"
          >
            <div className="relative h-9 w-32 md:h-11 md:w-44">
              <Image
                src="/images/focus-logo.png"
                alt="Focus Urban Interiors"
                fill
                priority
                sizes="(max-width: 768px) 128px, 176px"
                className={`object-contain object-left ${
                  !isLightNav ? "brightness-0 invert" : ""
                }`}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className={`hidden items-center gap-7 text-[11px] uppercase tracking-[0.2em] font-medium lg:flex ${
              isLightNav ? "text-ink" : "text-white"
            }`}
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group relative py-2 transition-colors ${
                    isActive
                      ? "text-ember font-semibold"
                      : "hover:text-ember"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-ember transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}

            <Link
              href="/contact"
              className={`ml-3 inline-flex items-center gap-2 border px-5 py-3 transition-all duration-300 ${
                isLightNav
                  ? "border-ink text-ink hover:bg-ink hover:text-white"
                  : "border-white/50 text-white hover:bg-white hover:text-ink"
              }`}
            >
              Book Consultation <MoveUpRight size={13} />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`grid h-11 w-11 place-items-center rounded-full border lg:hidden transition-colors ${
              isLightNav
                ? "border-ink/20 text-ink hover:bg-ink/5"
                : "border-white/30 text-white hover:bg-white/10"
            }`}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[110] flex flex-col bg-ink text-white"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <div className="relative h-9 w-36">
                  <Image
                    src="/images/focus-logo.png"
                    alt="Focus Urban Interiors"
                    fill
                    className="object-contain object-left brightness-0 invert"
                  />
                </div>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 hover:border-ember text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-between px-6 py-10 overflow-y-auto">
              <nav className="flex flex-col gap-5">
                {navLinks.map((link, index) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 25 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`display flex items-center justify-between border-b border-white/10 pb-4 text-4xl sm:text-5xl ${
                          isActive ? "text-ember" : "text-white/90 hover:text-white"
                        }`}
                      >
                        <span>{link.name}</span>
                        {isActive && <span className="h-2 w-2 rounded-full bg-ember" />}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-10 border-t border-white/15 pt-8">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-2">
                  {siteConfig.location} · {siteConfig.locationNote}
                </p>
                <p className="text-xs text-white/70 mb-6">{siteConfig.emailPlaceholder}</p>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-3 bg-ember py-4 text-xs uppercase tracking-[0.2em] text-white font-medium hover:bg-ember/90 transition-colors"
                >
                  Book Consultation <MoveUpRight size={15} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
