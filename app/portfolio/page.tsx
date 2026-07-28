"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/data/siteData";

const categories = ["All", "Residential", "Commercial", "Hospitality", "Office"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <main className="bg-canvas text-copy min-h-screen">
      <Navbar />

      {/* HEADER HERO */}
      <section className="bg-ink text-white pt-36 pb-20 px-5 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1500px]">
          <span className="text-[10px] uppercase tracking-[0.3em] text-ember font-semibold">
            03 · Concept Portfolio
          </span>
          <h1 className="display text-balance text-5xl sm:text-7xl lg:text-[6.5rem] mt-3">
            Spatial Concept Gallery.
          </h1>
          <p className="mt-6 max-w-2xl text-sm sm:text-base leading-8 text-white/70">
            A curated showcase of residential suites, waterfront villas, executive offices, and hospitality venues designed to demonstrate spatial proportions, custom joinery, and lighting schemes.
          </p>

          <div className="mt-8 rounded bg-white/5 border border-white/10 px-4 py-2.5 inline-block text-xs text-white/60">
            <span className="text-ember font-semibold mr-2">Note:</span>
            All portfolio items are conceptual demonstration projects prepared for client review.
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-20 px-5 md:px-10 lg:px-14 max-w-[1500px] mx-auto">
        {/* Category Filters */}
        <div className="mb-12 flex flex-wrap items-center gap-3 border-b border-ink/15 pb-6">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted font-semibold mr-4">
            Filter Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs uppercase tracking-[0.18em] transition-all rounded-sm ${
                activeCategory === cat
                  ? "bg-ink text-white font-semibold"
                  : "bg-white text-ink border border-ink/15 hover:border-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              aspectOverride="h-[480px] sm:h-[540px]"
              index={index}
            />
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-ink text-white py-16 px-5 md:px-10 lg:px-14">
        <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="display text-3xl text-white">Have a specific spatial vision in mind?</h3>
            <p className="text-xs text-white/60 mt-1">We create 3D photorealistic renderings and customized spatial concepts for every brief.</p>
          </div>
          <Link
            href="/contact"
            className="bg-ember px-8 py-4 text-xs uppercase tracking-[0.2em] text-white hover:bg-ember/90 transition-colors shrink-0"
          >
            Start Your Concept Brief
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
