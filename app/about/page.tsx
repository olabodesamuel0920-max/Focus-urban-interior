import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, MoveUpRight, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig, studioPhilosophy } from "@/data/siteData";

export const metadata = {
  title: "About Studio | Focus Urban Interiors",
  description: "Learn about Focus Urban Interiors, an interior architecture studio in Lagos, Nigeria creating warm, minimal spatial environments.",
};

export default function AboutPage() {
  return (
    <main className="bg-canvas text-copy min-h-screen">
      <Navbar />

      {/* HEADER HERO */}
      <section className="bg-ink text-white pt-36 pb-20 px-5 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1500px]">
          <span className="text-[10px] uppercase tracking-[0.3em] text-ember font-semibold">
            01 · About Our Studio
          </span>
          <h1 className="display text-balance text-5xl sm:text-7xl lg:text-[6.5rem] mt-3">
            Spatial warmth. Architectural discipline.
          </h1>
          <p className="mt-6 max-w-2xl text-sm sm:text-base leading-8 text-white/70">
            Focus Urban Interiors is an interior architecture and spatial design studio based in Lagos, Nigeria. We create refined, quiet, and enduring environments for living, working, and hospitality.
          </p>
        </div>
      </section>

      {/* STORY & PHILOSOPHY */}
      <section className="py-20 px-5 md:px-10 lg:px-14 max-w-[1500px] mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[500px] sm:min-h-[600px] overflow-hidden border border-ink/10 rounded-sm">
            <Image
              src="/images/brand-scene.webp"
              alt="Focus Urban Interiors studio design scene"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-canvas/90 p-5 backdrop-blur-md border border-ink/10">
              <span className="text-[10px] uppercase tracking-[0.2em] text-ember font-semibold block mb-1">
                Studio Context
              </span>
              <p className="text-xs text-ink font-medium">
                {siteConfig.location} · {siteConfig.locationNote}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-ember font-semibold">
              Design Approach
            </span>
            <h2 className="display text-4xl sm:text-5xl text-ink">
              {studioPhilosophy.headline}
            </h2>
            <p className="text-sm leading-8 text-muted">
              {studioPhilosophy.intro}
            </p>
            <p className="text-sm leading-8 text-muted">
              {studioPhilosophy.paragraphs[0]}
            </p>
            <p className="text-sm leading-8 text-muted">
              {studioPhilosophy.paragraphs[1]}
            </p>

            <div className="pt-4 border-t border-ink/15 grid grid-cols-2 gap-4">
              <div>
                <span className="display block text-3xl text-ember">360°</span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-muted">
                  Concept to Final Handover
                </span>
              </div>
              <div>
                <span className="display block text-3xl text-ember">100%</span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-muted">
                  Bespoke Architectural Joinery
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER / CREATIVE DIRECTOR PLACEHOLDER NOTE */}
      <section className="bg-ink/5 py-20 px-5 md:px-10 lg:px-14 border-y border-ink/10">
        <div className="max-w-[1500px] mx-auto grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-4">
            <div className="relative h-[400px] w-full overflow-hidden rounded-sm border border-ink/10">
              <Image
                src="/images/process-detail.webp"
                alt="Founder & Creative Director placeholder"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-ember font-semibold">
              Leadership & Vision
            </span>
            <h3 className="display text-3xl sm:text-4xl text-ink">
              Founder / Creative Director Statement
            </h3>
            <p className="text-sm leading-8 text-muted italic">
              “Our ambition is simple: to create interiors that feel deeply calm, functional, and restorative. We measure success not by transient trends, but by how effortlessly a space supports the daily rituals of the people who occupy it.”
            </p>
            <div className="pt-4 border-t border-ink/15">
              <p className="text-sm font-semibold text-ink">
                Founder / Creative Director
              </p>
              <p className="text-xs text-muted">Focus Urban Interiors Studio Lead</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE DESIGN PILLARS */}
      <section className="py-20 px-5 md:px-10 lg:px-14 max-w-[1500px] mx-auto">
        <div className="mb-14">
          <span className="text-[10px] uppercase tracking-[0.28em] text-ember font-semibold">
            Our Standards
          </span>
          <h2 className="display text-4xl sm:text-6xl text-ink mt-2">
            Four Pillars of Excellence.
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {studioPhilosophy.pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="bg-white p-8 border border-ink/10 rounded-sm space-y-4 shadow-sm"
            >
              <span className="text-xs font-mono font-semibold text-ember">0{i + 1}</span>
              <h3 className="display text-2xl text-ink">{pillar.title}</h3>
              <p className="text-xs leading-6 text-muted">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-ink text-white py-20 px-5 md:px-10 lg:px-14">
        <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-ember font-semibold">
              Spatial Consultation
            </span>
            <h2 className="display text-3xl sm:text-5xl text-white mt-2">
              Ready to discuss your project?
            </h2>
            <p className="text-xs text-white/60 mt-2 max-w-lg">
              Explore our 12 specializations or book an initial design brief consultation with our team.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-white/30 px-6 py-4 text-xs uppercase tracking-[0.2em] text-white hover:bg-white hover:text-ink transition-colors"
            >
              View Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-ember px-6 py-4 text-xs uppercase tracking-[0.2em] text-white hover:bg-ember/90 transition-colors"
            >
              Book Consultation <MoveUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
