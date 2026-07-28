import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { journalArticlesData } from "@/data/siteData";

export async function generateStaticParams() {
  return journalArticlesData.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = journalArticlesData.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} | Focus Urban Interiors Journal`,
    description: article.excerpt,
  };
}

export default async function JournalArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = journalArticlesData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const otherArticles = journalArticlesData.filter((a) => a.slug !== article.slug);

  return (
    <main className="bg-canvas text-copy min-h-screen">
      <Navbar />

      {/* HEADER HERO */}
      <section className="bg-ink text-white pt-36 pb-20 px-5 md:px-10 lg:px-14">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60 hover:text-ember transition-colors mb-6"
          >
            <ArrowLeft size={14} /> Back to Journal
          </Link>

          <div className="flex items-center gap-4 text-xs text-white/60 mb-3">
            <span className="text-ember font-semibold uppercase tracking-[0.2em]">
              {article.category}
            </span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>

          <h1 className="display text-balance text-4xl sm:text-6xl text-white">
            {article.title}
          </h1>

          <p className="mt-4 text-xs uppercase tracking-[0.18em] text-white/50">
            By {article.author}
          </p>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="px-5 md:px-10 lg:px-14 -mt-10 max-w-4xl mx-auto">
        <div className="relative h-[400px] sm:h-[500px] w-full overflow-hidden border border-ink/10 rounded-sm shadow-lg">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 800px"
            className="object-cover"
          />
        </div>
      </section>

      {/* ARTICLE BODY */}
      <article className="py-16 px-5 max-w-3xl mx-auto space-y-6 text-sm leading-8 text-muted">
        {article.content.map((paragraph, index) => (
          <p key={index} className="text-base leading-8 text-copy/80">
            {paragraph}
          </p>
        ))}
      </article>

      {/* OTHER ESSAYS */}
      <section className="py-16 px-5 md:px-10 lg:px-14 max-w-[1500px] mx-auto border-t border-ink/15">
        <h3 className="display text-3xl text-ink mb-8">More Editorial Essays</h3>
        <div className="grid gap-8 sm:grid-cols-2">
          {otherArticles.map((item) => (
            <Link
              key={item.slug}
              href={`/journal/${item.slug}`}
              className="group bg-white p-6 border border-ink/10 rounded-sm hover:shadow-md transition-shadow"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-ember font-semibold">
                {item.category}
              </span>
              <h4 className="display text-2xl text-ink group-hover:text-ember transition-colors mt-1">
                {item.title}
              </h4>
              <p className="mt-2 text-xs text-muted line-clamp-2">{item.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
