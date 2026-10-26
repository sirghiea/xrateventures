import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { FooterCta } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Sectors } from "@/components/Sectors";
import { Words } from "@/components/Words";
import { d, delay } from "@/lib/style";

export const metadata: Metadata = { alternates: { canonical: "/" }, openGraph: { url: "/" } };

export default function Home() {
  return (
    <>
      <Hero
        variant="home"
        glow
        image="/images/alex-lobby-1.jpg"
        imageStyle={{ objectPosition: "62% 40%" }}
        kicker="Private acquisitions · United Kingdom"
        lines={["The long-term home", <>for <span className="accent">exceptional</span></>, "UK businesses."]}
        lead="We acquire established companies from the founders who built them, protect what makes them special and give them the systems, data and investment to lead their markets for decades."
        actions={
          <>
            <Link className="btn btn-sand" href="/contact" data-magnetic>Start a confidential conversation <Arrow /></Link>
            <a className="btn btn-ghost" href="#approach">Our approach</a>
          </>
        }
      >
        <ul className="hero-meta fade-in" style={delay(1000)}>
          <li><strong>Founder-led</strong><span>One decision-maker, start to finish</span></li>
          <li><strong>Long-term owner</strong><span>No fund clock, no forced exit</span></li>
          <li><strong>Operational partner</strong><span>Modern systems, data and AI</span></li>
          <li><strong>Strictly confidential</strong><span>From the very first call</span></li>
          <li><a className="scroll-cue" href="#intro"><i />Scroll</a></li>
        </ul>
      </Hero>

      <section className="section tone-cream" id="intro">
        <div className="container statement-wrap">
          <span className="kicker">Our view</span>
          <Words text="Selling the company you built is one of the most important decisions you will ever make. We make it a considered one: a fair price, a clear plan and a future for the people who made it possible." />
        </div>
      </section>

      <section className="section tone-white">
        <div className="container">
          <div className="head-row">
            <div className="head">
              <span className="kicker" data-reveal>What we look for</span>
              <h2 data-reveal style={d(80)}>Businesses the UK <span className="accent">quietly depends on.</span></h2>
            </div>
            <p className="lead" data-reveal style={d(160)}>Essential, specialist service companies with loyal customers, skilled teams and revenue that renews year after year.</p>
          </div>
          <div className="pillars">
            <div className="pillar" data-reveal><span className="label">01 · Established</span><h3>Decades of reputation</h3><p>Typically ten years or more of trading, with a name customers trust.</p></div>
            <div className="pillar" data-reveal style={d(100)}><span className="label">02 · Resilient</span><h3>Recurring, contracted revenue</h3><p>Compliance, maintenance and service contracts that customers renew.</p></div>
            <div className="pillar" data-reveal style={d(200)}><span className="label">03 · Profitable</span><h3>Consistent performance</h3><p>A track record of healthy, sustainable profit through the cycle.</p></div>
            <div className="pillar" data-reveal style={d(300)}><span className="label">04 · Ready</span><h3>An owner planning ahead</h3><p>A founder looking to step back, with a team worth backing.</p></div>
          </div>
        </div>
      </section>

      <section className="section tone-dark">
        <div className="container">
          <div className="head">
            <span className="kicker" data-reveal>Sectors</span>
            <h2 data-reveal style={d(80)}>Where we invest.</h2>
          </div>
          <Sectors />
        </div>
      </section>

      <Marquee />

      <section className="section tone-cream">
        <div className="container">
          <div className="head-row">
            <div className="head">
              <span className="kicker" data-reveal>Why founders choose us</span>
              <h2 data-reveal style={d(80)}>A buyer that keeps <span className="accent">what makes you good.</span></h2>
            </div>
            <Link className="link" href="/about" data-reveal style={d(160)}>About XrateVentures <Arrow /></Link>
          </div>
          <div className="features" data-reveal style={d(120)}>
            <article className="feature"><span className="label">Legacy first</span><h3>Your name stays on the door</h3><p>Your people, your customers and your brand sit at the centre of every decision we make after completion.</p></article>
            <article className="feature"><span className="label">Long-term ownership</span><h3>We buy to hold and to build</h3><p>No plan to strip costs and resell. We reinvest in people, systems and growth for the long run.</p></article>
            <article className="feature"><span className="label">Clear terms</span><h3>An offer you can follow</h3><p>We explain how we value your company and what every part of the offer means, in plain English.</p></article>
            <article className="feature"><span className="label">Discretion</span><h3>Nobody hears until you are ready</h3><p>Every conversation is confidential from the first call. Your team and customers hear when you decide.</p></article>
          </div>
        </div>
      </section>

      <section className="band" aria-label="London at golden hour">
        <figure className="media media--wide" data-reveal="image" data-parallax>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/london-golden.jpg" alt="Aerial view over London at golden hour" loading="lazy" decoding="async" />
        </figure>
      </section>

      <section className="section tone-white">
        <div className="container founder">
          <figure className="media media--portrait" data-reveal="image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/alex-smile.jpg" alt="Alex Sîrghie, Founder and Group Chairman of XrateVentures" loading="lazy" decoding="async" />
          </figure>
          <div className="head">
            <span className="kicker" data-reveal>Led by a founder, not a fund</span>
            <h2 data-reveal style={d(80)}>Meet Alex Sîrghie.</h2>
            <p className="lead" data-reveal style={d(140)}>Alex has spent more than ten years in technology and AI. He brings that experience inside every business XrateVentures owns: better systems, sharper data and practical automation that frees people to do their best work.</p>
            <div className="signature" data-reveal style={d(200)}><strong>Alex Sîrghie</strong><span className="label">Founder &amp; Group Chairman</span></div>
            <div className="actions" data-reveal style={d(260)}><Link className="btn" href="/founder" data-magnetic>Read Alex&rsquo;s story <Arrow /></Link></div>
          </div>
        </div>
      </section>

      <section className="section tone-dark" id="approach">
        <div className="container">
          <div className="head-row">
            <div className="head">
              <span className="kicker" data-reveal>Our approach</span>
              <h2 data-reveal style={d(80)}>A considered process, <span className="accent">at your pace.</span></h2>
            </div>
            <Link className="link" href="/approach" data-reveal style={d(160)}>See the full process <Arrow /></Link>
          </div>
          <ol className="steps">
            <li className="step" data-reveal><span className="num" /><h3>Conversation</h3><p>A private discussion about your business, your goals and your timing.</p></li>
            <li className="step" data-reveal style={d(120)}><span className="num" /><h3>Understanding</h3><p>Under NDA, we learn how the business really works and what makes it valuable.</p></li>
            <li className="step" data-reveal style={d(240)}><span className="num" /><h3>Offer</h3><p>Clear Heads of Terms, with our reasoning for every figure set out openly.</p></li>
            <li className="step" data-reveal style={d(360)}><span className="num" /><h3>Completion and beyond</h3><p>A smooth handover, then patient investment in the next chapter.</p></li>
          </ol>
        </div>
      </section>

      <FooterCta />
    </>
  );
}
