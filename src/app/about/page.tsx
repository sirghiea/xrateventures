import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { FooterCta } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { d } from "@/lib/style";

export const metadata: Metadata = {
  title: "About",
  description: "XrateVentures is a UK acquisition company offering founders a trusted successor and a structured, legacy-first exit.",
  alternates: { canonical: "/about/" },
  openGraph: { url: "/about/" },
};

export default function About() {
  return (
    <>
      <Hero
        image="/images/shard-dusk.jpg"
        kicker="About us"
        lines={["The future is built", <>on <span className="accent">what you&rsquo;ve created.</span></>]}
        lead="For decades, founders across the UK have built companies that keep buildings safe, systems running and industries moving. When it is time to step back, they deserve better than closing down or selling to someone who does not share their vision."
      />

      <section className="section tone-cream">
        <div className="container split">
          <div className="head">
            <span className="kicker" data-reveal>Who we are</span>
            <h2 data-reveal style={d(80)}>A successor <span className="accent">you can trust.</span></h2>
            <figure className="media media--portrait media--tint" data-reveal="image" style={{ marginTop: "1.5rem" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/facade-brown.jpg" alt="Warm brown architectural facade" loading="lazy" decoding="async" />
            </figure>
          </div>
          <div className="prose" data-reveal style={d(160)}>
            <p>Selling your business should mean that what you built keeps thriving after you leave. XrateVentures gives founders a structured, strategic exit that protects their legacy, their people and their values.</p>
            <p>We focus on B2B service companies in compliance, maintenance and engineering: businesses with an established reputation, long-standing customers and revenue that renews year after year. These are companies where people and relationships matter, and where the wrong buyer can do lasting damage.</p>
            <p><strong>Our commitment:</strong> we never strip a business for short-term gain. We invest in its future, so it is stronger in ten years than on the day we bought it.</p>
          </div>
        </div>
      </section>

      <section className="section tone-mocha">
        <div className="container split">
          <div className="head">
            <span className="kicker" data-reveal>Our outlook</span>
            <h2 data-reveal style={d(80)}>UK-wide, with a <span className="accent">long-term vision.</span></h2>
            <figure className="media media--portrait media--tint" data-reveal="image" style={{ marginTop: "1.5rem" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/london-night.jpg" alt="The City of London lit up at night" loading="lazy" decoding="async" />
            </figure>
          </div>
          <div className="prose" data-reveal style={d(160)}>
            <p>Many of the UK&rsquo;s strongest private companies are approaching a change of ownership, and too many have no succession plan in place.</p>
            <p>When those businesses close or pass to the wrong buyer, skilled jobs, customer relationships and decades of know-how go with them. We want to keep that value where it was built.</p>
            <p>We work with founders across England, Scotland, Wales and Northern Ireland. Wherever your business is based, our commitment is the same: <strong>a fair exit for you and a secure future for the people who depend on the company.</strong></p>
          </div>
        </div>
      </section>

      <section className="section tone-dark">
        <div className="container quote-with-photo">
          <figure className="media" data-reveal="image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/alex-sofa.jpg" alt="Alex Sîrghie" loading="lazy" decoding="async" />
          </figure>
          <div>
            <span className="kicker" data-reveal>A note from our founder</span>
            <blockquote className="quote" data-reveal style={d(100, { marginTop: "1.8rem" })}>
              &ldquo;I&rsquo;m inspired by business leaders who reinvest in the places that made them. XrateVentures is my contribution: helping founders get the exit they deserve, while their businesses remain a driving force in the UK economy.&rdquo;
            </blockquote>
            <div className="quote-by" data-reveal style={d(180)}><strong>Alex Sîrghie</strong><span className="label">Founder &amp; Group Chairman</span></div>
            <div className="actions" data-reveal style={d(240, { marginTop: "2rem" })}><Link className="btn btn-ghost" href="/founder">Read my story <Arrow /></Link></div>
          </div>
        </div>
      </section>

      <section className="section tone-cream">
        <div className="container">
          <div className="head">
            <span className="kicker" data-reveal>Why work with us</span>
            <h2 data-reveal style={d(80)}>What you can expect <span className="accent">from us.</span></h2>
          </div>
          <div className="features" data-reveal style={d(120)}>
            <article className="feature"><span className="label">Legacy first</span><h3>More than numbers on a balance sheet</h3><p>We protect what you have built and keep your people, customers and brand identity strong.</p></article>
            <article className="feature"><span className="label">Long-term growth</span><h3>We buy to develop, never to squeeze</h3><p>We do not buy companies to cut costs and extract profit. We buy to develop them and grow them for years to come.</p></article>
            <article className="feature"><span className="label">Committed to the UK</span><h3>Keeping value where it was built</h3><p>Strong communities depend on the businesses that sustain them. We keep jobs, investment and expertise across the UK.</p></article>
            <article className="feature"><span className="label">Clarity &amp; transparency</span><h3>The right hands, the right strategy</h3><p>We take time to understand your vision, so your company passes into the right hands with a clear plan for continuity.</p></article>
          </div>
        </div>
      </section>

      <FooterCta />
    </>
  );
}
