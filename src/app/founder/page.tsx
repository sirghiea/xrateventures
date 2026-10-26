import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { FooterCta } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LINKEDIN } from "@/content/site";
import { d, delay } from "@/lib/style";

export const metadata: Metadata = {
  title: "Alex Sîrghie, Founder and Group Chairman",
  description: "Alex Sîrghie has spent over a decade in technology and AI. Now he acquires established UK businesses and helps them grow.",
  alternates: { canonical: "/founder/" },
  openGraph: { url: "/founder/" },
};

const VALUE = [
  ["Modern infrastructure", "Systems built for the next decade", "Secure cloud platforms that connect sales, operations and finance.", "One reliable source of truth."],
  ["Automation & AI", "Less admin, more capacity", "Quoting, scheduling, reporting and certification paperwork, automated.", "Engineers spend their time on skilled work."],
  ["Data & insight", "Decisions based on real numbers", "Live dashboards for cash, margins, utilisation and pipeline.", "Problems spotted early, opportunities seized."],
  ["Revenue growth", "New contracts and new markets", "Modern marketing, a proper CRM and fast follow-up on every enquiry.", "More recurring, predictable revenue."],
  ["Operational excellence", "Better margins, no corners cut", "Clear processes, fewer bottlenecks and smarter purchasing.", "Healthier profits with the same great team."],
  ["People & skills", "A team ready for what is next", "Training and tools that help people grow with the business.", "Technology supporting people, not replacing them."],
];

export default function Founder() {
  return (
    <>
      <Hero
        variant="portrait"
        image="/images/alex-seated.jpg"
        imageAlt="Alex Sîrghie"
        kicker="Who I am"
        lines={["I’m Alex.", <span className="accent" key="a">I buy exceptional</span>, <span className="accent" key="b">businesses and</span>, <span className="accent" key="c">help them grow.</span>]}
        lead="Founder and Group Chairman of XrateVentures. More than ten years in technology and AI, now put to work inside the businesses I own."
        actions={
          <>
            <Link className="btn btn-sand" href="/contact" data-magnetic>Talk to me directly <Arrow /></Link>
            <a className="btn btn-ghost" href="#story">Read my story</a>
          </>
        }
      >
        <dl className="facts fade-in" style={delay(1100)}>
          <div><dt>Role</dt><dd>Founder &amp; Group Chairman</dd></div>
          <div><dt>Experience</dt><dd>10+ years in technology &amp; AI</dd></div>
          <div><dt>Also founded</dt><dd><a href="https://x-rate-ai.com/" target="_blank" rel="noopener">XRate AI</a></dd></div>
          <div><dt>Connect</dt><dd><a href={LINKEDIN} target="_blank" rel="noopener">LinkedIn</a></dd></div>
        </dl>
      </Hero>

      <section className="section tone-cream" id="story">
        <div className="container split">
          <div className="head">
            <span className="kicker" data-reveal>My story</span>
            <h2 data-reveal style={d(80)}>Why I started <span className="accent">XrateVentures.</span></h2>
            <figure className="media media--portrait" data-reveal="image" style={{ marginTop: "1.5rem" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/alex-lobby-2.jpg" alt="Alex Sîrghie in a lobby with carved wooden walls" loading="lazy" decoding="async" />
            </figure>
          </div>
          <div className="prose" data-reveal style={d(160)}>
            <p>I have spent more than ten years in technology, most recently building AI systems for businesses. I have seen how much a few well-built tools can change a company: fewer manual tasks, better information and faster decisions.</p>
            <p>In company after company I saw the same pattern. Demand was rarely the problem. Manual work, slow follow-up and ageing systems were.</p>
            <p>The best service businesses in the UK already have the hardest things in place: loyal customers, skilled teams and a reputation earned over decades. Add modern systems and fresh thinking, and they can grow faster than ever before.</p>
            <p><strong>XrateVentures is the next step.</strong> Instead of advising businesses from the outside, I acquire them and make the changes from the inside, for the long term.</p>
          </div>
        </div>
      </section>

      <section className="section tone-white">
        <div className="container">
          <div className="head">
            <span className="kicker" data-reveal>What I believe</span>
            <h2 data-reveal style={d(80)}>How I think about <span className="accent">growing a business.</span></h2>
          </div>
          <figure className="media media--wide" data-reveal="image" data-parallax style={{ marginBottom: "clamp(2.5rem,5vw,4rem)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/alex-balcony-1.jpg" alt="Alex Sîrghie looking out towards the horizon" loading="lazy" decoding="async" style={{ objectPosition: "50% 62%" }} />
          </figure>
          <div className="beliefs">
            <div className="belief" data-reveal><h3>&ldquo;Don&rsquo;t sell AI. Sell productivity.&rdquo;</h3><p>Technology only matters when it saves time, cuts errors or helps people do better work. That is how I judge every change I make.</p></div>
            <div className="belief" data-reveal><h3>&ldquo;Growth dies by a thousand cuts.&rdquo;</h3><p>Slow responses, manual handoffs, opportunities left in spreadsheets. I look for the small leaks first, because fixing them compounds quickly.</p></div>
            <div className="belief" data-reveal><h3>&ldquo;Respect what&rsquo;s already working.&rdquo;</h3><p>The team, the name and the customer relationships took years to build. My job is to give them better tools, never to start again from scratch.</p></div>
          </div>
        </div>
      </section>

      <section className="section tone-mocha">
        <div className="container">
          <div className="head">
            <span className="kicker" data-reveal>How I add value</span>
            <h2 data-reveal style={d(80)}>Taking a great business <span className="accent">to the next level.</span></h2>
          </div>
          <div className="features features--3" data-reveal style={d(120)}>
            {VALUE.map(([label, title, text, result]) => (
              <article className="feature" key={label}>
                <span className="label">{label}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="result"><span className="label">The result</span><p>{result}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section tone-dark">
        <div className="container">
          <div className="head">
            <span className="kicker" data-reveal>The first 100 days</span>
            <h2 data-reveal style={d(80)}>Change in the <span className="accent">right order.</span></h2>
          </div>
          <ol className="steps">
            <li className="step" data-reveal><span className="num" /><h3>Listen and learn</h3><p>Days 1–30. Time with the team, customers and suppliers before changing anything.</p></li>
            <li className="step" data-reveal style={d(120)}><span className="num" /><h3>Quick wins</h3><p>Days 30–60. Fix the small frustrations that slow people down every day.</p></li>
            <li className="step" data-reveal style={d(240)}><span className="num" /><h3>Growth roadmap</h3><p>Days 60–100. A clear plan for technology, operations and revenue, built with management.</p></li>
            <li className="step" data-reveal style={d(360)}><span className="num" /><h3>Long-term growth</h3><p>Beyond day 100. Deliver step by step, measure results and keep investing.</p></li>
          </ol>
        </div>
      </section>

      <section className="section tone-cream">
        <div className="container">
          <span className="kicker" data-reveal>What won&rsquo;t change</span>
          <blockquote className="quote" data-reveal style={d(100, { marginTop: "1.8rem" })}>
            &ldquo;Technology should serve the business, not the other way around. The name, the team and the customer relationships you spent years building are exactly what I&rsquo;m buying. My job is to give them better tools.&rdquo;
          </blockquote>
          <div className="signature" data-reveal style={d(180, { marginTop: "2rem", maxWidth: "22rem" })}><strong>Alex Sîrghie</strong><span className="label">Founder &amp; Group Chairman</span></div>
        </div>
      </section>

      <FooterCta />
    </>
  );
}
