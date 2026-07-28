import Link from "next/link";
import { ArrowRight, CheckCircle2, MoveUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { processStagesData, siteConfig } from "@/data/siteData";

export const metadata = {
  title: "Our Process | Focus Urban Interiors",
  description: "Learn about the six-stage interior architecture methodology at Focus Urban Interiors, Lagos, Nigeria.",
};

export default function ProcessPage() {
  return (
    <main className="bg-canvas text-copy min-h-screen">
      <Navbar />

      {/* HEADER HERO */}
      <section className="bg-ink text-white pt-36 pb-20 px-5 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1500px]">
          <span className="text-[10px] uppercase tracking-[0.3em] text-ember font-semibold">
            04 · Studio Methodology
          </span>
          <h1 className="display text-balance text-5xl sm:text-7xl lg:text-[6.5rem] mt-3">
            The 6-Stage Process.
          </h1>
          <p className="mt-6 max-w-2xl text-sm sm:text-base leading-8 text-white/70">
            A structured, transparent architectural journey designed to take your spatial vision from initial discovery brief to white-glove turnkey handover.
          </p>
        </div>
      </section>

      {/* DETAILED PROCESS STAGES */}
      <section className="py-20 px-5 md:px-10 lg:px-14 max-w-[1500px] mx-auto space-y-16">
        {processStagesData.map((stage, index) => (
          <div
            key={stage.title}
            className="bg-white p-8 sm:p-12 border border-ink/10 rounded-sm grid gap-10 lg:grid-cols-12 items-start shadow-sm"
          >
            {/* Step Number & Title */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-mono font-bold text-ember">{stage.step}</span>
                <span className="rounded bg-canvas px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted font-medium">
                  Stage 0{index + 1} of 06
                </span>
              </div>
              <h2 className="display text-4xl sm:text-5xl text-ink">{stage.title}</h2>
              <p className="text-sm font-semibold text-ember">{stage.subtitle}</p>
              <p className="text-xs sm:text-sm text-muted leading-7">{stage.description}</p>
            </div>

            {/* Activities & Deliverables */}
            <div className="lg:col-span-7 bg-canvas p-6 sm:p-8 border border-ink/10 rounded-sm space-y-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-ink font-semibold mb-4">
                  Key Stage Activities:
                </p>
                <div className="space-y-3">
                  {stage.keyActivities.map((act) => (
                    <div key={act} className="flex items-start gap-3 text-xs text-muted">
                      <CheckCircle2 size={15} className="text-ember shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-ink/15">
                <span className="text-[10px] uppercase tracking-[0.2em] text-ember font-semibold block mb-1">
                  Key Stage Milestone & Deliverable:
                </span>
                <p className="text-xs font-semibold text-ink">{stage.deliverable}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-ink text-white py-20 px-5 md:px-10 lg:px-14">
        <div className="max-w-[1500px] mx-auto text-center flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.28em] text-ember font-semibold">
            Begin Stage 01
          </span>
          <h2 className="display text-4xl sm:text-6xl text-white max-w-3xl mt-3">
            Ready for your initial Consultation & Brief?
          </h2>
          <p className="mt-4 max-w-md text-xs sm:text-sm text-white/70 leading-7">
            Schedule a consultation meeting with our design lead to map out your spatial requirements, budget parameters, and target timeline.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 bg-ember px-8 py-4 text-xs uppercase tracking-[0.2em] text-white hover:bg-ember/90 transition-colors"
          >
            Schedule Consultation Meeting <MoveUpRight size={14} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
