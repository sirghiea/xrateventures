"use client";

import { useRef, useState, type FormEvent } from "react";
import { Arrow } from "./Arrow";
import { EMAIL } from "@/content/site";

type Errors = Partial<Record<"name" | "email" | "company", boolean>>;

/** Validates, then opens the visitor's email app with the enquiry pre-filled to EMAIL. */
export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sentTo, setSentTo] = useState<string | null>(null);
  const doneRef = useRef<HTMLDivElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const next: Errors = {};
    (["name", "email", "company"] as const).forEach((k) => {
      const input = form.elements.namedItem(k) as HTMLInputElement;
      if (!input.checkValidity()) next[k] = true;
    });
    setErrors(next);
    const firstBad = Object.keys(next)[0];
    if (firstBad) { (form.elements.namedItem(firstBad) as HTMLInputElement).focus(); return; }

    const f = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const subject = `Enquiry from ${f.name} (${f.company})`;
    const body = [`Name: ${f.name}`, `Email: ${f.email}`, `Phone: ${f.phone || "-"}`, `Company: ${f.company}`, `Annual revenue: ${f.turnover}`, `Timing: ${f.timeline}`, "", f.message || ""].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSentTo(f.name.split(" ")[0] || "there");
    setTimeout(() => doneRef.current?.focus(), 50);
  };

  if (sentTo) {
    return (
      <div className="form-done" ref={doneRef} tabIndex={-1}>
        <h3>Almost there, {sentTo}.</h3>
        <p>Your email app should now be open with your enquiry filled in. Press send and we will reply within two working days.</p>
        <p>If nothing opened, email <strong>{EMAIL}</strong> with your name, company and what you are looking for.</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" type="text" autoComplete="name" placeholder="Your name" required aria-invalid={!!errors.name} />
          {errors.name && <span className="err">Enter your name.</span>}
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.co.uk" required aria-invalid={!!errors.email} />
          {errors.email && <span className="err">Enter a valid email address, like name@company.co.uk.</span>}
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" autoComplete="organization" placeholder="Company Ltd" required aria-invalid={!!errors.company} />
          {errors.company && <span className="err">Enter your company name.</span>}
        </div>
        <div className="field">
          <label htmlFor="phone">Phone (optional)</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="07700 900000" />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="turnover">Annual revenue</label>
          <select id="turnover" name="turnover" defaultValue="£10m – £50m">
            <option>Under £10m</option>
            <option>£10m – £50m</option>
            <option>£50m – £250m</option>
            <option>£250m+</option>
            <option>Prefer not to say</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="timeline">Timing</label>
          <select id="timeline" name="timeline" defaultValue="1–3 years">
            <option>Within 12 months</option>
            <option>1–3 years</option>
            <option>3+ years</option>
            <option>Exploring options</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">About your business (optional)</label>
        <textarea id="message" name="message" placeholder="What the company does, and what you would like to happen next." />
      </div>
      <div className="form-foot">
        <button className="btn" type="submit" data-magnetic>Send enquiry <Arrow /></button>
        <p>Opens your email app with your enquiry ready to send. Everything you share is treated in strict confidence.</p>
      </div>
    </form>
  );
}
