import Link from "next/link";
import { Arrow } from "./Arrow";
import { EMAIL, LINKEDIN, SECTORS } from "@/content/site";
import { d } from "@/lib/style";

export function FooterCta() {
  return (
    <section className="footer-cta tone-walnut">
      <div className="container">
        <span className="kicker" data-reveal>Next step</span>
        <h2 data-reveal style={d(80)}>
          Let&rsquo;s talk about <span className="accent">what comes next.</span>
        </h2>
        <div className="row" data-reveal style={d(160)}>
          <p>Every conversation is private and carries no obligation. We listen first, then tell you honestly whether we are the right partner.</p>
          <Link className="btn btn-sand" href="/contact" data-magnetic>
            Start a confidential conversation <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link className="brand" href="/">
              <span className="brand-mark" aria-hidden="true">XV</span>
              <span className="brand-name">XrateVentures</span>
            </Link>
            <p>A long-term home for established UK businesses, built on care for people and modern operational thinking.</p>
          </div>
          <div>
            <span className="label">Company</span>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/founder">Who I am</Link></li>
              <li><Link href="/approach">Approach</Link></li>
              <li><Link href="/approach#faq">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <span className="label">Sectors</span>
            <ul>
              {SECTORS.slice(0, 5).map((s) => <li key={s.name}>{s.name}</li>)}
            </ul>
          </div>
          <div>
            <span className="label">Contact</span>
            <ul>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li><a href={LINKEDIN} target="_blank" rel="noopener">LinkedIn</a></li>
              <li>United Kingdom</li>
            </ul>
          </div>
        </div>
        <div className="footer-bar">
          <span>&copy; {new Date().getFullYear()} XrateVentures. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
