"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CONTACT_COPY, CONTACT_INFO } from "@/data/site";

const inputStyles =
  "mt-2 w-full rounded-xl border border-white/10 bg-[#0f0f0f] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/10";

const labelStyles = "text-xs font-semibold uppercase tracking-[0.2em] text-white/60";

interface ContactFormState {
  firstName: string;
  lastName: string;
  email: string;
  website: string;
  message: string;
}

function normalizePhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (!digits) return "";
  if (digits.startsWith("0")) return `62${digits.slice(1)}`;
  return digits;
}

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormState>({
    firstName: "",
    lastName: "",
    email: "",
    website: "",
    message: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const phone = normalizePhone(CONTACT_INFO.phone);
    if (!phone) {
      setError("WhatsApp number is not configured.");
      return;
    }

    const fullName = `${form.firstName} ${form.lastName}`.trim();
    const lines = [
      `Name: ${fullName}`,
      `Email: ${form.email}`,
      form.website ? `Website: ${form.website}` : null,
      `Message: ${form.message}`,
    ].filter(Boolean);

    const messageText = lines.join("\n");
    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
      messageText,
    )}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center">
            <h1
              className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {CONTACT_COPY.titleLineOne}
              <br />
              {CONTACT_COPY.titleLineTwo}
            </h1>
            <p className="mt-5 text-sm text-white/60 sm:text-base">
              {CONTACT_COPY.description}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <form
            className="mt-12 grid gap-6"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="grid gap-6 md:grid-cols-2">
              <label className={labelStyles}>
                First Name
                <input
                  className={inputStyles}
                  name="firstName"
                  type="text"
                  placeholder="Dafa"
                  required
                  value={form.firstName}
                  onChange={handleChange}
                />
              </label>

              <label className={labelStyles}>
                Last Name
                <input
                  className={inputStyles}
                  name="lastName"
                  type="text"
                  placeholder="Rizqullah"
                  required
                  value={form.lastName}
                  onChange={handleChange}
                />
              </label>
            </div>

            <label className={labelStyles}>
              Email
              <input
                className={inputStyles}
                name="email"
                type="email"
                placeholder="hello@email.com"
                required
                value={form.email}
                onChange={handleChange}
              />
            </label>

            <label className={labelStyles}>
              Website (Optional)
              <input
                className={inputStyles}
                name="website"
                type="url"
                placeholder="https://"
                value={form.website}
                onChange={handleChange}
              />
            </label>

            <label className={labelStyles}>
              Message
              <textarea
                className={`${inputStyles} min-h-[160px] resize-none`}
                name="message"
                placeholder="Tell me about your project..."
                required
                value={form.message}
                onChange={handleChange}
              />
            </label>

            {error && (
              <p className="text-sm text-red-400">{error}</p>
            )}

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-transform duration-300 hover:-translate-y-0.5"
            >
              Send to WhatsApp
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
