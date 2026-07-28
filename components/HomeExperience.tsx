"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ChevronRight, MoveUpRight, Quote } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingIntro from "@/components/LoadingIntro";
import ProjectCard from "@/components/ProjectCard";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import {
  demoTestimonials,
  journalArticlesData,
  processStagesData,
  projectsData,
  servicesData,
  siteConfig,
  studioPhilosophy,
} from "@/data/siteData";

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function HomeExperience() {
  const reduce = useReducedMotion();
  const { scrollYProgress, scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 900], [0, 160]);
  const heroScale = useTransform(scrollY, [0, 900], [1.02, 1.12]);
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <main className="overflow-hidden bg-canvas text-copy">
      <LoadingIntro />
      <Navbar />

      {/* Progress Line */}
      <motion.div
        className="fixed left-0 top-0 z-[90] h-[2px] w-full origin-left bg-ember"
        style={{ scaleX: progress }}
      />

      {/* HERO SECTION */}
      <section id="top" className="relative min-h-[100svh] bg-ink text-white">
        <motion.div
          className="absolute inset-0"
          style={reduce ? undefined : { y: heroY, scale: heroScale }}
        >
          <Image
            src="/images/hero-chair.webp"
            alt="Focus Urban Interiors living space concept"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/50 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-black/30" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-[1500px] flex-col justify-end px-5 pb-10 pt-28 md:px-10 md:pb-14 lg:px-14 lg:pb-16">
          <div className="mb-auto flex flex-wrap items-center justify-between gap-4 pt-20 text-[10px] uppercase tracking-[0.28em] text-white/70 md:text-xs">
            <span className="flex items-center gap-2 font-medium">
              <span className="h-2 w-2 rounded-full bg-ember animate-ping" />
              Interior Architecture & Spatial Design · {siteConfig.location}
            </span>
            <span className="rounded bg-white/10 px-3 py-1 text-[9px] uppercase tracking-[0.2em] backdrop-blur-md">
              Spatial Architecture Studio
            </span>
          </div>

          <div className="grid items-end gap-10 lg:grid-cols-[1fr_360px]">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-ember"
              >
                {siteConfig.tagline}
              </motion.p>
              <h1 className="display text-balance max-w-[1050px] text-[15vw] leading-[0.82] sm:text-[13vw] lg:text-[8.5vw] xl:text-[7.8rem]">
                <span className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    Spaces with soul.
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span
                    className="block text-white/90"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.52, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    Crafted for living.
                  </motion.span>
                </span>
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="border-l border-white/30 pl-6 lg:mb-2"
            >
              <p className="max-w-sm text-sm leading-7 text-white/80">
                We shape refined residential, commercial, and hospitality environments tailored around spatial warmth, material texture, and contemporary West African living.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-3 bg-ember px-6 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-transform hover:-translate-y-1"
                >
                  Explore Portfolio <ArrowRight size={15} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 border border-white/40 px-6 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-ink"
                >
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-white/20 pt-6 text-[10px] uppercase tracking-[0.24em] text-white/60">
            <span>Scroll to discover studio work</span>
            <ArrowDown size={15} className="animate-bounce text-ember" />
          </div>
        </div>
      </section>

      {/* STUDIO PHILOSOPHY SECTION */}
      <section className="px-5 py-20 md:px-10 md:py-32 lg:px-14 lg:py-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[200px_1fr]">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.28em] text-muted font-semibold">
                01 · Studio Philosophy
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="display text-balance max-w-[1200px] text-[10vw] leading-[0.98] tracking-editorial sm:text-[7vw] lg:text-[4.8rem]">
                We believe the most luxurious spaces are not only seen —{" "}
                <span className="text-ember">they are felt.</span>
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-10 border-t border-ink/15 pt-12 md:grid-cols-2 lg:ml-[200px] lg:grid-cols-3">
            <Reveal>
              <p className="text-base leading-8 text-muted">
                {studioPhilosophy.intro}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-base leading-8 text-muted">
                {studioPhilosophy.paragraphs[0]}
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="rounded bg-white p-6 shadow-sm border border-ink/10">
                <span className="text-[10px] uppercase tracking-[0.2em] text-ember font-semibold block mb-2">
                  Integrated Approach
                </span>
                <span className="display block text-4xl text-ink">360° Vision</span>
                <p className="mt-2 text-xs leading-6 text-muted">
                  From architectural layout and millwork design to white-glove turnkey installation.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Philosophy Pillars */}
          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:ml-[200px]">
            {studioPhilosophy.pillars.map((pillar, idx) => (
              <Reveal key={pillar.title} delay={idx * 0.05}>
                <div className="h-full border-l-2 border-ember/40 pl-5 py-2">
                  <h3 className="display text-xl text-ink">{pillar.title}</h3>
                  <p className="mt-2 text-xs leading-6 text-muted">{pillar.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED CONCEPT PROJECTS SECTION */}
      <section className="bg-ink px-5 py-20 text-white md:px-10 md:py-32 lg:px-14 lg:py-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <Reveal>
              <div>
                <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-white/50 font-semibold">
                  02 · Selected Portfolio
                </p>
                <h2 className="display text-5xl sm:text-7xl lg:text-[6.5rem]">
                  Concept Projects.
                </h2>
                <p className="mt-3 text-xs text-white/60 max-w-md">
                  Demonstration concepts showcasing spatial layouts, lighting schemes, and material compositions.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-white hover:text-ember transition-colors"
              >
                <span>View Full Portfolio Gallery</span>
                <span className="grid h-11 w-11 place-items-center rounded-full border border-white/25 transition-all group-hover:border-ember group-hover:bg-ember">
                  <ArrowRight size={15} />
                </span>
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-12">
            {projectsData.slice(0, 4).map((project, index) => (
              <Reveal
                key={project.id}
                className={project.aspectRatio}
                delay={(index % 2) * 0.08}
              >
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW SECTION */}
      <section className="border-b border-ink/10 bg-canvas py-20 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10 lg:px-14">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-muted font-semibold">
                  03 · Capabilities & Services
                </p>
                <h2 className="display text-5xl sm:text-7xl">
                  12 Specializations.
                </h2>
                <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
                  From initial spatial planning and photorealistic 3D visualization to turnkey project execution and interior styling.
                </p>
                <Link
                  href="/services"
                  className="mt-8 inline-flex items-center gap-3 bg-ink px-6 py-3 text-xs uppercase tracking-[0.2em] text-white hover:bg-ember transition-colors"
                >
                  Explore All Services <MoveUpRight size={14} />
                </Link>
              </div>
            </Reveal>

            <div className="divide-y divide-ink/15 border-t border-ink/15">
              {servicesData.slice(0, 6).map((service, index) => (
                <Reveal key={service.id} delay={Math.min(index * 0.04, 0.2)}>
                  <Link
                    href="/services"
                    className="group flex items-center justify-between py-6 md:py-8 transition-colors hover:pl-2"
                  >
                    <div className="flex items-center gap-6 md:gap-10">
                      <span className="text-xs text-muted font-mono">0{index + 1}</span>
                      <div>
                        <h3 className="display text-3xl sm:text-5xl transition-transform duration-300 group-hover:translate-x-2 group-hover:text-ember">
                          {service.title}
                        </h3>
                        <p className="mt-1 text-xs text-muted max-w-md hidden sm:block">
                          {service.tagline}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="text-muted transition-transform duration-300 group-hover:translate-x-2 group-hover:text-ember shrink-0" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER SPATIAL TRANSFORMATION SECTION */}
      <section className="bg-ink/5 border-b border-ink/10 px-5 py-20 md:px-10 md:py-32 lg:px-14">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.28em] text-ember font-semibold">
              04 · Before & After Concept
            </span>
            <h2 className="display text-4xl sm:text-6xl text-ink mt-2">
              Transforming Raw Spaces.
            </h2>
            <p className="mt-3 text-sm text-muted leading-7">
              Experience how our studio reimagines shell structures into light-filled, warm architectural environments through precise space planning and bespoke joinery.
            </p>
          </div>

          <Reveal>
            <BeforeAfterSlider
              beforeImage="/images/process-detail.webp"
              afterImage="/images/project-bedroom.webp"
              beforeLabel="Raw Site Preparation"
              afterLabel="Curated Luxury Bedroom Suite"
              title="Lekki Residential Suite Concept Transformation"
            />
          </Reveal>
        </div>
      </section>

      {/* SIX-STEP PROCESS SECTION */}
      <section className="bg-canvas px-5 py-20 md:px-10 md:py-32 lg:px-14 lg:py-40">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-muted font-semibold mb-2">
                  05 · Our Process
                </p>
                <h2 className="display text-[11vw] sm:text-7xl lg:text-[6.5rem]">
                  Clarity at Every Step.
                </h2>
              </div>
              <Link
                href="/process"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink hover:text-ember transition-colors"
              >
                <span>View Full 6-Stage Process Guide</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>

          <div className="grid border-l border-t border-ink/15 md:grid-cols-2 lg:grid-cols-3">
            {processStagesData.map((stage, index) => (
              <Reveal key={stage.title} delay={(index % 3) * 0.05}>
                <article className="group min-h-[320px] border-b border-r border-ink/15 p-7 transition-colors duration-500 hover:bg-ink hover:text-white md:p-9">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-semibold text-ember">{stage.step}</span>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-muted group-hover:text-white/50">
                      Stage {index + 1}
                    </span>
                  </div>
                  <h3 className="display mt-16 text-3xl sm:text-4xl">{stage.title}</h3>
                  <p className="mt-2 text-xs font-medium text-ember group-hover:text-ember">
                    {stage.subtitle}
                  </p>
                  <p className="mt-4 text-xs leading-6 text-muted group-hover:text-white/70">
                    {stage.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO TESTIMONIALS & TRUST SECTION */}
      <section className="relative min-h-[70vh] overflow-hidden bg-ink text-white">
        <Image
          src="/images/hallway.webp"
          alt="Architectural hallway concept"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/75" />

        <div className="relative mx-auto flex min-h-[70vh] max-w-[1500px] items-center px-5 py-20 md:px-10 lg:px-14">
          <Reveal className="max-w-4xl">
            <Quote className="mb-8 text-ember" size={42} strokeWidth={1} />
            <blockquote className="display text-balance text-4xl leading-[1.05] sm:text-6xl lg:text-[4.8rem]">
              “{demoTestimonials[0].quote}”
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-12 bg-ember" />
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/90">
                  {demoTestimonials[0].author}
                </p>
                <p className="text-[10px] text-white/50 uppercase tracking-[0.18em]">
                  {demoTestimonials[0].role}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* JOURNAL PREVIEW SECTION */}
      <section className="bg-canvas px-5 py-20 md:px-10 md:py-32 lg:px-14 lg:py-40">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <div className="mb-14 flex items-end justify-between gap-8">
              <div>
                <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-muted font-semibold">
                  06 · Architectural Journal
                </p>
                <h2 className="display text-5xl sm:text-7xl">Editorial Insights.</h2>
              </div>
              <Link
                href="/journal"
                className="hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-ink hover:text-ember transition-colors md:flex"
              >
                <span>Read All Articles</span> <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {journalArticlesData.map((article, index) => (
              <Reveal key={article.slug} delay={index * 0.07}>
                <article className="group h-full flex flex-col justify-between bg-white p-6 border border-ink/10 rounded-sm">
                  <div>
                    <div className="relative h-[280px] overflow-hidden mb-6">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-ember font-semibold mb-2">
                      <span>{article.category}</span>
                      <span className="text-muted font-normal">{article.readTime}</span>
                    </div>
                    <h3 className="display text-2xl text-ink group-hover:text-ember transition-colors">
                      {article.title}
                    </h3>
                    <p className="mt-3 text-xs text-muted leading-6 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <Link
                    href={`/journal/${article.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-ink font-semibold group-hover:text-ember transition-colors"
                  >
                    <span>Read Article</span> <ArrowRight size={13} />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION BANNER */}
      <section className="relative bg-ember px-5 py-20 text-white md:px-10 md:py-32 lg:px-14">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/80 font-semibold">
              Begin a Spatial Project
            </span>
            <h2 className="display text-balance max-w-[1300px] text-[12vw] leading-[0.85] sm:text-[9vw] lg:text-[7rem] mt-3">
              Let’s create a space you’ll love coming home to.
            </h2>
          </Reveal>

          <div className="mt-14 flex flex-col justify-between gap-8 border-t border-white/30 pt-10 md:flex-row md:items-end">
            <Reveal>
              <div>
                <p className="max-w-lg text-sm leading-7 text-white/85">
                  Share your spatial vision, location, and project schedule with us. Our studio will prepare a tailored consultation proposal.
                </p>
                <p className="mt-4 text-xs font-mono text-white/70">
                  Direct Email: {siteConfig.emailPlaceholder}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 rounded-full bg-white px-8 py-5 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-transform hover:scale-105"
              >
                <span>Book Design Consultation</span>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition-transform group-hover:rotate-45">
                  <MoveUpRight size={16} />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
