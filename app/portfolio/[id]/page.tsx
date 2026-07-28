import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, MoveUpRight, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { projectsData } from "@/data/siteData";

export async function generateStaticParams() {
  return projectsData.map((p) => ({
    id: p.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectsData.find((p) => p.slug === id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Focus Urban Interiors Concept Showcase`,
    description: project.shortDesc,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectsData.find((p) => p.slug === id);

  if (!project) {
    notFound();
  }

  const otherProjects = projectsData.filter((p) => p.id !== project.id);

  return (
    <main className="bg-canvas text-copy min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-ink text-white pt-36 pb-20 px-5 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1500px]">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60 hover:text-ember transition-colors mb-6"
          >
            <ArrowLeft size={14} /> Back to Portfolio Gallery
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[10px] uppercase tracking-[0.28em] text-ember font-semibold">
              {project.category} · {project.location}
            </span>
            <span className="rounded bg-white/10 px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-white/70 backdrop-blur-md border border-white/10">
              Spatial Concept
            </span>
          </div>

          <h1 className="display text-balance text-4xl sm:text-6xl lg:text-[6rem]">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-8 text-white/80">
            {project.shortDesc}
          </p>
        </div>
      </section>

      {/* FEATURED MAIN IMAGE */}
      <section className="px-5 md:px-10 lg:px-14 -mt-10 max-w-[1500px] mx-auto">
        <div className="relative h-[450px] sm:h-[600px] lg:h-[700px] w-full overflow-hidden border border-ink/10 rounded-sm shadow-xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute top-4 right-4 bg-ink/80 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-md">
            Concept Render
          </div>
        </div>
      </section>

      {/* PROJECT SPECS & OVERVIEW */}
      <section className="py-20 px-5 md:px-10 lg:px-14 max-w-[1500px] mx-auto">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          {/* Main Story & Details */}
          <div className="space-y-10">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-ember font-semibold">
                Project Narrative
              </span>
              <h2 className="display text-3xl sm:text-4xl text-ink mt-2">
                Spatial Concept & Architecture
              </h2>
              <p className="mt-4 text-sm leading-8 text-muted">
                {project.overview}
              </p>
            </div>

            <div className="bg-white p-6 border border-ink/10 rounded-sm">
              <p className="text-xs text-ink/80 leading-7">
                <span className="font-semibold text-ember mr-2">Demonstration Note:</span>
                {project.conceptNote}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="display text-2xl text-ink mb-4">Key Architectural Features</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-xs leading-6 text-muted bg-white p-4 border border-ink/10 rounded-sm">
                    <CheckCircle2 size={15} className="text-ember shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Material Palette */}
            <div>
              <h3 className="display text-2xl text-ink mb-4">Curated Material Palette</h3>
              <div className="flex flex-wrap gap-2">
                {project.materials.map((mat) => (
                  <span
                    key={mat}
                    className="bg-ink/5 border border-ink/10 px-4 py-2 text-xs text-ink font-medium rounded-sm"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Specifications */}
          <div className="bg-white p-8 border border-ink/10 rounded-sm h-fit space-y-6 shadow-sm">
            <h3 className="display text-2xl text-ink border-b border-ink/10 pb-4">
              Specifications
            </h3>

            <div className="space-y-4 text-xs">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted block">Location</span>
                <span className="font-semibold text-ink text-sm">{project.location}</span>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted block">Project Scope</span>
                <span className="font-semibold text-ink text-sm">{project.category} Interior Architecture</span>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted block">Target Footprint</span>
                <span className="font-semibold text-ink text-sm">{project.area}</span>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted block">Concept Status</span>
                <span className="font-semibold text-ember text-sm">{project.year}</span>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted block">Estimated Timeline</span>
                <span className="font-semibold text-ink text-sm">{project.duration}</span>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted block">Target Client</span>
                <span className="font-semibold text-ink text-sm">{project.clientType}</span>
              </div>
            </div>

            <div className="pt-6 border-t border-ink/10">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-ember py-4 text-xs uppercase tracking-[0.2em] text-white hover:bg-ember/90 transition-colors"
              >
                Inquire for Similar Project <MoveUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE AND AFTER TRANSFORMATION SECTION */}
      {project.beforeImage && project.afterImage && (
        <section className="bg-ink/5 py-20 px-5 md:px-10 lg:px-14 border-y border-ink/10">
          <div className="max-w-[1500px] mx-auto">
            <BeforeAfterSlider
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
              beforeLabel="Raw Site Condition"
              afterLabel="Completed Architectural Concept"
              title={`${project.title} — Transformation Concept`}
            />
          </div>
        </section>
      )}

      {/* DEMO TESTIMONIAL / QUOTE */}
      {project.testimonialDemo && (
        <section className="bg-ink text-white py-20 px-5 md:px-10 lg:px-14">
          <div className="max-w-[1500px] mx-auto">
            <Quote className="mb-6 text-ember" size={36} strokeWidth={1} />
            <blockquote className="display text-2xl sm:text-4xl text-white max-w-4xl leading-tight">
              “{project.testimonialDemo.quote}”
            </blockquote>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-white/60">
              {project.testimonialDemo.author} — {project.testimonialDemo.role}
            </p>
          </div>
        </section>
      )}

      {/* NEXT PROJECTS NAV */}
      <section className="py-20 px-5 md:px-10 lg:px-14 max-w-[1500px] mx-auto">
        <h3 className="display text-3xl text-ink mb-8">Explore Other Concept Projects</h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.slice(0, 3).map((item) => (
            <Link
              key={item.id}
              href={`/portfolio/${item.slug}`}
              className="group bg-white border border-ink/10 overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-ember font-semibold">
                  {item.category}
                </span>
                <h4 className="display text-2xl text-ink group-hover:text-ember transition-colors mt-1">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs text-muted line-clamp-2">{item.shortDesc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
