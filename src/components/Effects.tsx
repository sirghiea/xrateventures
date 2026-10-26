"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    __lenis?: Lenis;
    __revealFallback?: number;
  }
}

/**
 * Site-wide motion: smooth scrolling, header state, scroll progress,
 * reveal-on-scroll, word fill, parallax and magnetic buttons.
 * Everything is skipped when the visitor prefers reduced motion.
 */
export function Effects() {
  const pathname = usePathname();

  // Smooth scroll: created once for the whole session.
  useEffect(() => {
    if (window.__revealFallback) clearTimeout(window.__revealFallback);
    document.documentElement.classList.add("js");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const lenis = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    window.__lenis = lenis;
    let id = 0;
    const raf = (time: number) => { lenis.raf(time); id = requestAnimationFrame(raf); };
    id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); lenis.destroy(); window.__lenis = undefined; };
  }, []);

  // Per-page effects: re-run on every navigation so new elements are wired up.
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const lenis = window.__lenis;
    const cleanups: Array<() => void> = [];

    window.scrollTo(0, 0);
    lenis?.scrollTo(0, { immediate: true });
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) setTimeout(() => (lenis ? lenis.scrollTo(target as HTMLElement, { offset: -88, immediate: true }) : target.scrollIntoView()), 50);
    }

    // In-page anchor links get the same smooth, header-aware scroll.
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest?.('a[href^="#"]');
      if (!a) return;
      const hash = a.getAttribute("href") || "";
      const target = hash.length > 1 ? document.querySelector(hash) : null;
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target as HTMLElement, { offset: -88 });
      else target.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
      history.replaceState(null, "", hash);
    };
    document.addEventListener("click", onClick);
    cleanups.push(() => document.removeEventListener("click", onClick));

    // Reveal on scroll.
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (reduced || !("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("is-in"));
    } else {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((entry) => {
          if (entry.isIntersecting) { entry.target.classList.add("is-in"); io.unobserve(entry.target); }
        }),
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
      );
      revealEls.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    // Scroll-linked: header, progress, word fill, parallax.
    const header = document.querySelector<HTMLElement>(".site-header");
    const progress = document.querySelector<HTMLElement>(".progress");
    const wordBlocks = Array.from(document.querySelectorAll<HTMLElement>("[data-words]"));
    const parallax = reduced ? [] : Array.from(document.querySelectorAll<HTMLImageElement>("[data-parallax] img"));
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      const max = document.documentElement.scrollHeight - vh;
      progress?.style.setProperty("--p", max > 0 ? (y / max).toFixed(4) : "0");
      if (header) {
        header.classList.toggle("is-solid", y > 24);
        if (y > 420 && y > lastY + 2 && !root.classList.contains("nav-open")) header.classList.add("is-hidden");
        else if (y < lastY - 2 || y < 420) header.classList.remove("is-hidden");
      }
      lastY = y;
      if (!reduced) {
        wordBlocks.forEach((el) => {
          const r = el.getBoundingClientRect();
          const p = Math.max(0, Math.min(1, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
          const words = el.querySelectorAll(".w");
          const lit = Math.round(p * words.length);
          words.forEach((w, i) => w.classList.toggle("on", i < lit));
        });
        parallax.forEach((img) => {
          const r = img.parentElement!.getBoundingClientRect();
          if (r.bottom < 0 || r.top > vh) return;
          const p = (r.top + r.height / 2 - vh / 2) / vh;
          img.style.transform = `translate3d(0,${(p * -8).toFixed(2)}%,0) scale(1.12)`;
        });
      }
    };
    if (lenis) { lenis.on("scroll", onScroll); cleanups.push(() => lenis.off("scroll", onScroll)); }
    else { window.addEventListener("scroll", onScroll, { passive: true }); cleanups.push(() => window.removeEventListener("scroll", onScroll)); }
    window.addEventListener("resize", onScroll);
    cleanups.push(() => window.removeEventListener("resize", onScroll));
    onScroll();

    // Magnetic buttons.
    if (finePointer && !reduced) {
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const x = (e.clientX - r.left - r.width / 2) / r.width;
          const y = (e.clientY - r.top - r.height / 2) / r.height;
          el.style.transform = `translate3d(${(x * 8).toFixed(2)}px,${(y * 6).toFixed(2)}px,0)`;
        };
        const leave = () => { el.style.transform = ""; };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        cleanups.push(() => { el.removeEventListener("pointermove", move); el.removeEventListener("pointerleave", leave); });
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
