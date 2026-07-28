import Link from "next/link";
import { Clock, Instagram, Linkedin, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";
import { siteConfig } from "@/data/siteData";

export const metadata = {
  title: "Contact & Consultations | Focus Urban Interiors",
  description: "Book an interior architecture consultation with Focus Urban Interiors in Lagos, Nigeria.",
};

export default function ContactPage() {
  return (
    <main className="bg-canvas text-copy min-h-screen">
      <Navbar />

      {/* HEADER HERO */}
      <section className="bg-ink text-white pt-36 pb-20 px-5 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1500px]">
          <span className="text-[10px] uppercase tracking-[0.3em] text-ember font-semibold">
            06 · Begin a Project
          </span>
          <h1 className="display text-balance text-5xl sm:text-7xl lg:text-[6.5rem] mt-3">
            Spatial Consultations.
          </h1>
          <p className="mt-6 max-w-2xl text-sm sm:text-base leading-8 text-white/70">
            Tell us about your residential, commercial, or hospitality space. Our team will review your brief and respond with next steps for your design consultation.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT & FORM SECTION */}
      <section className="py-20 px-5 md:px-10 lg:px-14 max-w-[1500px] mx-auto">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Contact Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-ember font-semibold">
                Direct Channels
              </span>
              <h2 className="display text-3xl sm:text-4xl text-ink mt-2">
                Studio Reachability
              </h2>
              <p className="mt-3 text-xs text-muted leading-6">
                Our design team is available for in-person appointments in Lagos and virtual consultations globally.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <div className="bg-white p-6 border border-ink/10 rounded-sm flex items-start gap-4 shadow-sm">
                <MapPin className="text-ember shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="display text-lg text-ink">Studio Location</h3>
                  <p className="text-xs text-ink font-semibold mt-1">{siteConfig.location}</p>
                  <p className="text-xs text-muted mt-0.5">{siteConfig.locationNote}</p>
                </div>
              </div>

              <div className="bg-white p-6 border border-ink/10 rounded-sm flex items-start gap-4 shadow-sm">
                <Mail className="text-ember shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="display text-lg text-ink">Electronic Correspondence</h3>
                  <p className="text-xs text-muted mt-1">Direct Inquiries:</p>
                  <a
                    href={`mailto:${siteConfig.emailPlaceholder}`}
                    className="text-xs font-semibold text-ink hover:text-ember transition-colors underline decoration-ink/30 underline-offset-4"
                  >
                    {siteConfig.emailPlaceholder}
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 border border-ink/10 rounded-sm flex items-start gap-4 shadow-sm">
                <Phone className="text-ember shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="display text-lg text-ink">Telephone & WhatsApp</h3>
                  <p className="text-xs text-muted mt-1">Direct Line:</p>
                  <p className="text-xs font-semibold text-ink mt-0.5">{siteConfig.phonePlaceholder}</p>
                  <a
                    href={siteConfig.whatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 rounded bg-ember/10 px-3 py-1.5 text-xs text-ember font-semibold hover:bg-ember hover:text-white transition-colors"
                  >
                    <MessageSquare size={14} /> Open WhatsApp Chat
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 border border-ink/10 rounded-sm flex items-start gap-4 shadow-sm">
                <Clock className="text-ember shrink-0 mt-1" size={20} />
                <div className="w-full">
                  <h3 className="display text-lg text-ink mb-2">Business Hours</h3>
                  <div className="space-y-1 text-xs text-muted">
                    {siteConfig.businessHours.map((item) => (
                      <div key={item.days} className="flex justify-between border-b border-ink/5 pb-1">
                        <span>{item.days}:</span>
                        <span className="font-semibold text-ink">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-ink text-white p-6 rounded-sm">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-3">
                Social Channels
              </p>
              <div className="flex gap-3">
                {siteConfig.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 text-xs text-white/80 hover:bg-white hover:text-ink transition-colors rounded-sm"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Interactive Form */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
