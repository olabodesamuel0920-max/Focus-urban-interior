import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { journalArticlesData } from "@/data/siteData";

export const metadata = {
  title: "Architectural Journal | Focus Urban Interiors",
  description: "Editorial essays and insights on tropical warm minimalism, materials, and lighting design in Lagos, Nigeria.",
};

export default function JournalPage() {
  return (
    <main className="bg-canvas text-copy min-h-screen">
      <Navbar />

      {/* HEADER HERO */}
      <section className="bg-ink text-white pt-36 pb-20 px-5 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1500px]">
          <span className="text-[10px] uppercase tracking-[0.3em] text-ember font-semibold">
            05 · Studio Journal
          </span>
          <h1 className="display text-balance text-5xl sm:text-7xl lg:text-[6.5rem] mt-3">
            Editorial Perspectives.
          </h1>
          <p className="mt-6 max-w-2xl text-sm sm:text-base leading-8 text-white/70">
            Explorations into material tactility, climate-responsive tropical minimalism, and architectural lighting in contemporary West African spaces.
          </p>
        </div>
      </section>

      {/* JOURNAL ARTICLES GRID */}
      <section className="py-20 px-5 md:px-10 lg:px-14 max-w-[1500px] mx-auto">
        <div className="grid gap-10 md:grid-cols-3">
          {journalArticlesData.map((article) => (
            <article
              key={article.slug}
              className="bg-white p-6 border border-ink/10 rounded-sm flex flex-col justify-between shadow-sm group hover:shadow-md transition-shadow"
            >
              <div>
                <div className="relative h-[260px] w-full overflow-hidden mb-6 rounded-sm">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-ember font-semibold mb-2">
                  <span>{article.category}</span>
                  <span className="text-muted font-normal">{article.readTime}</span>
                </div>

                <h2 className="display text-2xl text-ink group-hover:text-ember transition-colors">
                  {article.title}
                </h2>
                <p className="mt-3 text-xs text-muted leading-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-ink/10 flex items-center justify-between">
                <span className="text-[10px] text-muted">{article.date}</span>
                <Link
                  href={`/journal/${article.slug}`}
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-ink font-semibold group-hover:text-ember transition-colors"
                >
                  <span>Read Essay</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
