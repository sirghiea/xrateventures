import type { Metadata } from "next";
import { FooterCta } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { d } from "@/lib/style";

export const metadata: Metadata = {
  title: "Our approach",
  description: "Full acquisitions, majority investment and succession planning for founders of established UK businesses.",
  alternates: { canonical: "/approach/" },
  openGraph: { url: "/approach/" },
};

const ROUTES = [
  ["Full acquisition", "A clean break, on your timeline", "We acquire 100% of the shares. You receive your proceeds at completion, with an agreed handover so customers and staff experience a seamless transition.", "Founders ready to retire or move on."],
  ["Majority investment", "Realise value now, share the upside", "We acquire a controlling stake while you retain equity and stay involved, so you benefit from the growth that follows.", "Founders who want a second bite of the cherry."],
  ["Succession planning", "Plan the exit before you need it", "A phased transition over one to three years, including building a leadership team that can run the business without you.", "Founders one to three years from stepping back."],
  ["Management transition", "Back the leaders you have built", "We work alongside your managers, back promising internal leaders and add operational and financial support where it counts.", "Businesses with a strong second tier."],
];

const PROCESS: [string, string, string[]][] = [
  ["Introductory conversation", "A confidential discussion about your business, your goals and your timeline.", ["No documents needed", "No obligation"]],
  ["NDA & information", "We sign a non-disclosure agreement and review headline financials and the shape of the business.", ["Three years of accounts", "Management figures"]],
  ["Heads of Terms", "We set out valuation and deal structure in writing, and explain how we reached every figure.", ["Valuation rationale", "Structure", "Timeline"]],
  ["Due diligence", "A focused, proportionate review, coordinated closely with your advisers.", ["Financial", "Legal", "Commercial", "People"]],
  ["Completion", "Share Purchase Agreement signed and funds transferred. Your team hears the news the way you choose.", []],
  ["Handover & growth", "We follow the transition plan we agreed together, then invest patiently in the next chapter.", []],
];

const FAQ = [
  ["Will my employees keep their jobs?", "Yes. We acquire businesses for their people and reputation. Employees transfer on their existing terms, and keeping the team together is part of every plan we make."],
  ["Do I need an adviser or broker?", "No, you can approach us directly. Many founders appoint a corporate finance adviser and solicitor, and we are glad to work alongside them."],
  ["How do you value a business?", "We look at sustainable profit, the quality and predictability of revenue, customer concentration and how dependent the business is on its founder. We share our reasoning openly."],
  ["Will my customers find out we are talking?", "Not unless you choose to tell them. Conversations are confidential from the first call and covered by an NDA once information is exchanged."],
  ["Can I stay involved after the sale?", "Yes, if you would like to. Some founders stay on as a director or adviser for a period; others prefer a clean handover. We agree this before Heads of Terms."],
];

export default function Approach() {
  return (
    <>
      <Hero
        image="/images/substation-dusk.jpg"
        kicker="Our approach"
        lines={["An exit shaped", <span className="accent" key="a">around your plans.</span>]}
        lead="Some founders want a clean break. Others want to stay involved or keep a stake. We structure every transaction around what you want next."
      />

      <section className="section tone-cream">
        <div className="container">
          <div className="head">
            <span className="kicker" data-reveal>Ways we work together</span>
            <h2 data-reveal style={d(80)}>Four routes to a <span className="accent">well-planned exit.</span></h2>
          </div>
          <div className="features" data-reveal style={d(120)}>
            {ROUTES.map(([label, title, text, best]) => (
              <article className="feature" key={label}>
                <span className="label">{label}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="result"><span className="label">Best for</span><p>{best}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section tone-white" id="process">
        <div className="container process">
          <aside className="process-aside">
            <div className="head">
              <span className="kicker" data-reveal>The process</span>
              <h2 data-reveal style={d(80)}>From first call <span className="accent">to completion.</span></h2>
              <p className="lead" data-reveal style={d(140)}>Every transaction is different, but most follow six clear stages. You will always know where you stand.</p>
            </div>
            <figure className="media media--landscape" data-reveal="image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/alex-lobby-4.jpg" alt="Alex Sîrghie in a lobby with carved wooden walls" loading="lazy" decoding="async" style={{ objectPosition: "50% 35%" }} />
            </figure>
          </aside>
          <ol className="process-list">
            {PROCESS.map(([title, text, tags]) => (
              <li className="process-item" data-reveal key={title}>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  {tags.length > 0 && <ul className="tags">{tags.map((t) => <li key={t}>{t}</li>)}</ul>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section tone-mocha" id="faq">
        <div className="container split">
          <div className="head">
            <span className="kicker" data-reveal>FAQ</span>
            <h2 data-reveal style={d(80)}>Questions founders <span className="accent">ask us.</span></h2>
          </div>
          <div className="faq" data-reveal style={d(120)}>
            {FAQ.map(([q, a]) => (
              <details key={q}>
                <summary>{q}<span className="plus" aria-hidden="true" /></summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FooterCta />
    </>
  );
}
