"use client";

import Link from "next/link";
import { useState } from "react";
import { Arrow } from "./Arrow";
import { SECTORS } from "@/content/site";
import { d } from "@/lib/style";

export function Sectors() {
  const [active, setActive] = useState(0);
  return (
    <div className="sectors">
      <ul className="sector-list" data-reveal style={d(120)}>
        {SECTORS.map((s, i) => (
          <li key={s.name} className={`sector${i === active ? " is-active" : ""}`} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)}>
            <Link href="/contact">
              <span className="name">{s.name}</span>
              <Arrow />
            </Link>
          </li>
        ))}
      </ul>
      <div className="sector-stage" aria-hidden="true">
        {SECTORS.map((s, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={s.image} src={s.image} alt="" loading="lazy" decoding="async" className={i === active ? "is-active" : undefined} />
        ))}
        <span className="sector-caption">{SECTORS[active].name}</span>
      </div>
    </div>
  );
}
