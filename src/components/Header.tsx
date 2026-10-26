"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Arrow } from "./Arrow";
import { EMAIL, NAV } from "@/content/site";

type LenisLike = { stop: () => void; start: () => void };

const isCurrent = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

export function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const root = document.documentElement;
    const lenis = (window as unknown as { __lenis?: LenisLike }).__lenis;
    root.classList.toggle("nav-open", open);
    if (open) {
      lenis?.stop();
      document.querySelector(".site-header")?.classList.remove("is-hidden");
    } else {
      lenis?.start();
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <div className="progress" aria-hidden="true" />
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" href="/" aria-label="XrateVentures home">
            <span className="brand-mark" aria-hidden="true">XV</span>
            <span className="brand-name">XrateVentures</span>
          </Link>
          <nav className="nav" aria-label="Main">
            <ul className="nav-links">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} aria-current={isCurrent(pathname, item.href) ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link className="btn btn-sand btn-sm nav-cta" href="/contact" data-magnetic>
            Book a call <Arrow />
          </Link>
          <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((v) => !v)}>
            <span /><span /><span className="sr">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </header>
      <div className="mobile-menu" id="mobile-menu" aria-hidden={!open} inert={!open}>
        <nav aria-label="Mobile">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link className="m-link" href={item.href} aria-current={isCurrent(pathname, item.href) ? "page" : undefined} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="m-foot">
          <Link className="btn btn-sand" href="/contact" onClick={() => setOpen(false)}>
            Start a confidential conversation <Arrow />
          </Link>
          <span>{EMAIL}</span>
        </div>
      </div>
    </>
  );
}
