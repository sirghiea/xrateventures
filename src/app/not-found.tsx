import Link from "next/link";
import { Arrow } from "@/components/Arrow";

export default function NotFound() {
  return (
    <section className="hero hero--compact">
      <div className="container">
        <div className="hero-body">
          <span className="kicker">Page not found</span>
          <h1>This page has <span className="accent">moved on.</span></h1>
          <div className="actions"><Link className="btn btn-sand" href="/">Back to home <Arrow /></Link></div>
        </div>
      </div>
    </section>
  );
}
