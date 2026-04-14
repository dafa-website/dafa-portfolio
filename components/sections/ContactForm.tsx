"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { CONTACT_COPY, CONTACT_INFO } from "@/data/site";
import { ArrowRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const inputStyles =
  "mt-2 w-full rounded-xl border border-white/10 bg-[#0f0f0f] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/10";

const labelStyles = "text-xs font-semibold uppercase tracking-[0.2em] text-white/60";

function normalizePhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (!digits) return "";
  if (digits.startsWith("0")) return `62${digits.slice(1)}`;
  return digits;
}

export default function ContactForm() {
  const whatsappNumber = normalizePhone(CONTACT_INFO.phone);
  const whatsappHref = whatsappNumber ? `https://wa.me/${whatsappNumber}` : "#";

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
            action="https://formspree.io/f/xreowoqb"
            method="POST"
          >
            <input type="hidden" name="_subject" value="New contact request" />
            <div className="grid gap-6 md:grid-cols-2">
              <label className={labelStyles}>
                First Name
                <input
                  className={inputStyles}
                  name="firstName"
                  type="text"
                  placeholder="Dafa"
                  required
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
              />
            </label>

            <label className={labelStyles}>
              Website (Optional)
              <input
                className={inputStyles}
                name="website"
                type="url"
                placeholder="https://"
              />
            </label>

            <label className={labelStyles}>
              Budget
              <select
                className={inputStyles}
                name="budget"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select budget
                </option>
                <option value="< Rp1.000.0000">&lt; Rp1.000.000</option>
                <option value="Rp5.000.000 - Rp10.000.000">Rp5.000.000 - Rp10.000.000</option>
                <option value="> Rp10.000.000">&gt; Rp10.000.000</option>
              </select>
            </label>

            <label className={labelStyles}>
              Message
              <textarea
                className={`${inputStyles} min-h-[160px] resize-none`}
                name="message"
                placeholder="Tell me about your project..."
                required
              />
            </label>

            <div className="flex justify-center">
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-gradient-to-b from-[#242424] to-[#111111] px-6 py-3 text-base font-semibold tracking-wide text-white shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:from-[#2a2a2a] hover:to-[#151515]"
              >
                <span>Send Message</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/50 transition-all duration-300 group-hover:bg-white">
                  <ArrowRight
                    size={16}
                    className="text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-black"
                    strokeWidth={2.5}
                  />
                </span>
              </button>
            </div>
          </form>
          <div className="mt-32 text-center">
            <h1 className="text-2xl font-bold text-white sm:text-3xl">
              Prefer Direct Whatsapp?
            </h1>
            <div className="mt-4 flex justify-center">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-gradient-to-b from-[#242424] to-[#111111] px-6 py-3 text-base font-semibold tracking-wide text-white shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:from-[#2a2a2a] hover:to-[#151515]"
              >
                <span className="flex items-center gap-2">
                  <SiWhatsapp className="h-4 w-4" />
                  Send Whatsapp
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/50 transition-all duration-300 group-hover:bg-white">
                  <ArrowRight
                    size={16}
                    className="text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-black"
                    strokeWidth={2.5}
                  />
                </span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
