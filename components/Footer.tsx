import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Instagram, Linkedin, MessageSquare, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-10 lg:px-14 lg:py-20">
        <div className="grid gap-12 border-b border-white/15 pb-16 lg:grid-cols-12">
          {/* Brand Col */}
          <div className="lg:col-span-5">
            <Link href="/" aria-label="Focus Urban Interiors Home">
              <div className="relative h-12 w-48 mb-6">
                <Image
                  src="/images/focus-logo.png"
                  alt="Focus Urban Interiors"
                  fill
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
            </Link>
            <p className="max-w-md text-sm leading-7 text-white/60 mb-8">
              Focus Urban Interiors is an interior architecture and spatial design studio in Lagos, Nigeria, shaping warm, refined residential, commercial, and hospitality environments.
            </p>
            <div className="inline-flex items-center gap-3 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-[11px] text-white/50">
              <span className="h-1.5 w-1.5 rounded-full bg-ember animate-pulse" />
              <span>{siteConfig.disclaimer}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <p className="mb-6 text-[10px] uppercase tracking-[0.25em] text-white/40 font-semibold">
              Navigation
            </p>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-ember transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-ember transition-colors">
                  About & Philosophy
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-ember transition-colors">
                  Services (12 Specializations)
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-ember transition-colors">
                  Concept Portfolio
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-ember transition-colors">
                  Our 6-Step Process
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-ember transition-colors">
                  Architectural Journal
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ember transition-colors">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Business & Location */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <p className="mb-6 text-[10px] uppercase tracking-[0.25em] text-white/40 font-semibold">
                Studio & Consultations
              </p>
              <p className="text-sm font-medium text-white mb-1">{siteConfig.location}</p>
              <p className="text-xs text-white/50 mb-6">{siteConfig.locationNote}</p>

              <div className="space-y-3 text-xs text-white/70">
                <div className="flex items-center gap-3">
                  <Phone size={14} className="text-ember shrink-0" />
                  <span>{siteConfig.phonePlaceholder}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare size={14} className="text-ember shrink-0" />
                  <a
                    href={siteConfig.whatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors underline decoration-white/30 underline-offset-4"
                  >
                    WhatsApp Consultation Shortcut
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-white/40">
                Business Hours
              </p>
              <div className="space-y-1 text-xs text-white/60">
                {siteConfig.businessHours.map((item) => (
                  <div key={item.days} className="flex justify-between max-w-xs">
                    <span>{item.days}:</span>
                    <span className="text-white/80">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-10 flex flex-col justify-between gap-6 text-[10px] uppercase tracking-[0.2em] text-white/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {siteConfig.studioName}. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white transition-colors">Privacy Policy</span>
            <span className="hover:text-white transition-colors">Terms of Service</span>
            <span className="hover:text-white transition-colors">Spatial Architecture Edition</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
