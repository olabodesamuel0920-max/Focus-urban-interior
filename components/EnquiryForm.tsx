"use client";

import { useState } from "react";
import { CheckCircle2, MessageSquare, MoveRight, Send } from "lucide-react";
import { siteConfig } from "@/data/siteData";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Residential",
    location: "Lekki Phase 1",
    budget: "₦30M – ₦75M Target Range",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full bg-white p-7 sm:p-10 md:p-12 shadow-xl border border-ink/10 rounded-sm">
      <div className="mb-8">
        <span className="text-[10px] uppercase tracking-[0.25em] text-ember font-semibold">
          Design Consultation Enquiry
        </span>
        <h3 className="display text-3xl md:text-4xl text-ink mt-2">
          Start Your Project Brief
        </h3>
        <p className="mt-2 text-xs leading-6 text-muted">
          Fill in your spatial details below. Our creative team will review your brief and respond with next steps for your design consultation.
        </p>
      </div>

      {isSubmitted ? (
        <div className="py-10 text-center flex flex-col items-center">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-ember/10 text-ember mb-5">
            <CheckCircle2 size={36} />
          </div>
          <h4 className="display text-3xl text-ink">Brief Received</h4>
          <p className="mt-3 max-w-md text-sm text-muted leading-7">
            Thank you, <span className="font-semibold text-ink">{formData.name}</span>. Your consultation brief for a{" "}
            <span className="font-semibold text-ink">{formData.projectType}</span> project in{" "}
            <span className="font-semibold text-ink">{formData.location}</span> has been logged. Our studio team will review your requirements and reach out shortly.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  projectType: "Residential",
                  location: "Lekki Phase 1",
                  budget: "₦30M – ₦75M Target Range",
                  message: "",
                });
              }}
              className="border border-ink/30 px-6 py-3 text-xs uppercase tracking-[0.2em] text-ink hover:bg-ink hover:text-white transition-colors"
            >
              Submit Another Brief
            </button>
            <a
              href={siteConfig.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-ember px-6 py-3 text-xs uppercase tracking-[0.2em] text-white hover:bg-ember/90 transition-colors"
            >
              <MessageSquare size={16} /> Instant WhatsApp Consultation
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-[11px] uppercase tracking-[0.18em] text-ink font-semibold mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Samuel Olabode"
                className="w-full border-b border-ink/30 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-ember focus:outline-none bg-transparent transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[11px] uppercase tracking-[0.18em] text-ink font-semibold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. samuel@example.com"
                className="w-full border-b border-ink/30 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-ember focus:outline-none bg-transparent transition-colors"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <label htmlFor="phone" className="block text-[11px] uppercase tracking-[0.18em] text-ink font-semibold mb-2">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+234 (0) 800 000 0000"
                className="w-full border-b border-ink/30 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-ember focus:outline-none bg-transparent transition-colors"
              />
            </div>

            <div>
              <label htmlFor="projectType" className="block text-[11px] uppercase tracking-[0.18em] text-ink font-semibold mb-2">
                Project Category
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full border-b border-ink/30 py-3 text-sm text-ink focus:border-ember focus:outline-none bg-transparent transition-colors"
              >
                <option value="Residential">Residential Interior</option>
                <option value="Commercial">Commercial Workspace</option>
                <option value="Hospitality">Hospitality & Lounge</option>
                <option value="Renovation">Full Renovation</option>
                <option value="Turnkey">Turnkey Project</option>
              </select>
            </div>

            <div>
              <label htmlFor="location" className="block text-[11px] uppercase tracking-[0.18em] text-ink font-semibold mb-2">
                Location in Lagos / Nigeria
              </label>
              <select
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full border-b border-ink/30 py-3 text-sm text-ink focus:border-ember focus:outline-none bg-transparent transition-colors"
              >
                <option value="Lekki Phase 1">Lekki Phase 1 / Chevron</option>
                <option value="Ikoyi">Ikoyi / Banana Island</option>
                <option value="Victoria Island">Victoria Island / Eko Atlantic</option>
                <option value="Ikeja GRA">Ikeja GRA / Mainland</option>
                <option value="Abuja FCT">Abuja FCT</option>
                <option value="Other Location">Other Region / International</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="budget" className="block text-[11px] uppercase tracking-[0.18em] text-ink font-semibold mb-2">
              Target Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full border-b border-ink/30 py-3 text-sm text-ink focus:border-ember focus:outline-none bg-transparent transition-colors"
            >
              <option value="₦15M – ₦30M Target Range">₦15,000,000 – ₦30,000,000 Target Range</option>
              <option value="₦30M – ₦75M Target Range">₦30,000,000 – ₦75,000,000 Target Range</option>
              <option value="₦75M – ₦150M Target Range">₦75,000,000 – ₦150,000,000 Target Range</option>
              <option value="₦150M+ Master Target">₦150,000,000+ Master Scope Target</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-[11px] uppercase tracking-[0.18em] text-ink font-semibold mb-2">
              Project Description & Requirements
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your space, key room functions, material preferences, and target start timeline..."
              className="w-full border border-ink/20 p-4 text-sm text-ink placeholder:text-ink/30 focus:border-ember focus:outline-none bg-transparent transition-colors rounded-sm"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-ember px-8 py-4 text-xs uppercase tracking-[0.2em] text-white hover:bg-ember/90 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Submitting Brief...</span>
              ) : (
                <>
                  <span>Submit Consultation Brief</span>
                  <Send size={14} />
                </>
              )}
            </button>

            <a
              href={siteConfig.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.18em] text-ink hover:text-ember transition-colors py-3"
            >
              <MessageSquare size={15} className="text-ember" />
              <span>Or Chat on WhatsApp</span>
              <MoveRight size={13} />
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
