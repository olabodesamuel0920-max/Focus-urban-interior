import Link from "next/link";
import { ArrowRight, CheckCircle2, MoveUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { servicesData, siteConfig } from "@/data/siteData";

export const metadata = {
  title: "Services & Specializations | Focus Urban Interiors",
  description: "Explore the 12 spatial architecture and design services offered by Focus Urban Interiors in Lagos, Nigeria.",
};

export default function ServicesPage() {
  return (
    <main className="bg-canvas text-copy min-h-screen">
      <Navbar />

      {/* HEADER HERO */}
      <section className="bg-ink text-white pt-36 pb-20 px-5 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1500px]">
          <span className="text-[10px] uppercase tracking-[0.3em] text-ember font-semibold">
            02 · Studio Capabilities
          </span>
          <h1 className="display text-balance text-5xl sm:text-7xl lg:text-[6.5rem] mt-3">
            12 Integrated Specializations.
          </h1>
          <p className="mt-6 max-w-2xl text-sm sm:text-base leading-8 text-white/70">
            From initial spatial concept and technical drawings to photorealistic 3D visualization, custom joinery, and complete turnkey project delivery.
          </p>
        </div>
      </section>

      {/* SERVICES LISTING GRID */}
      <section className="py-20 px-5 md:px-10 lg:px-14 max-w-[1500px] mx-auto">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-white p-8 border border-ink/10 rounded-sm flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-semibold text-ember">
                    0{index + 1}
                  </span>
                  <span className="rounded bg-canvas px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-muted font-medium">
                    {service.category}
                  </span>
                </div>

                <h2 className="display text-3xl text-ink group-hover:text-ember transition-colors">
                  {service.title}
                </h2>
                <p className="mt-2 text-xs font-medium text-ink/80 italic">
                  “{service.tagline}”
                </p>
                <p className="mt-4 text-xs text-muted leading-6">
                  {service.description}
                </p>

                <div className="mt-6 pt-6 border-t border-ink/10 space-y-2">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-ink font-semibold mb-3">
                    Key Deliverables:
                  </p>
                  {service.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs text-muted">
                      <CheckCircle2 size={13} className="text-ember shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-ink/10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-ink font-semibold group-hover:text-ember transition-colors"
                >
                  <span>Inquire for {service.title}</span>
                  <MoveUpRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE BANNER */}
      <section className="overflow-hidden border-y border-ink/10 bg-ink py-6 text-white">
        <div className="flex w-max items-center whitespace-nowrap animate-marquee">
          {[...servicesData, ...servicesData].map((s, idx) => (
            <span key={`${s.id}-${idx}`} className="display flex items-center text-4xl sm:text-6xl text-white/20">
              <span className="mx-6 h-2 w-2 rounded-full bg-ember" />
              {s.title}
            </span>
          ))}
        </div>
      </section>

      {/* CONSULTATION BANNER */}
      <section className="bg-canvas py-20 px-5 md:px-10 lg:px-14">
        <div className="max-w-[1500px] mx-auto bg-white p-8 sm:p-12 border border-ink/10 rounded-sm flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-ember font-semibold">
              Project Matching
            </span>
            <h3 className="display text-3xl sm:text-4xl text-ink mt-2">
              Need a multi-service turnkey package?
            </h3>
            <p className="mt-2 text-xs text-muted max-w-xl leading-6">
              Our studio combines space planning, 3D visualization, furniture selection, and site management into unified single-point contracts for seamless execution in Lagos.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-ember px-8 py-4 text-xs uppercase tracking-[0.2em] text-white hover:bg-ember/90 transition-colors shrink-0"
          >
            Request Custom Proposal <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
