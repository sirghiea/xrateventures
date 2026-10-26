import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Hero } from "@/components/Hero";
import { EMAIL } from "@/content/site";
import { d } from "@/lib/style";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a confidential conversation with XrateVentures about the future of your business.",
  alternates: { canonical: "/contact/" },
  openGraph: { url: "/contact/" },
};

export default function Contact() {
  return (
    <>
      <Hero
        variant="compact"
        image="/images/lounge.jpg"
        kicker="Contact"
        lines={["Start a", <span className="accent" key="a">confidential conversation.</span>]}
        lead="Tell us a little about your business. We reply personally within two working days."
      />
      <section className="section tone-cream">
        <div className="container contact">
          <div>
            <span className="kicker" data-reveal>What happens next</span>
            <ol className="next-steps" data-reveal style={d(100)}>
              <li><div><strong>We read every enquiry personally</strong><span>No call centres, no automated sequences.</span></div></li>
              <li><div><strong>A private first conversation</strong><span>Usually a short call at a time that suits you.</span></div></li>
              <li><div><strong>An honest view of fit</strong><span>If we are not the right partner, we will tell you, and why.</span></div></li>
            </ol>
            <div className="direct" data-reveal style={d(160)}>
              <span className="label">Prefer email?</span>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </div>
          <div className="form-card" data-reveal style={d(120)}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
