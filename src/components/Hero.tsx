import type { CSSProperties, ReactNode } from "react";
import { delay, line } from "@/lib/style";

type Props = {
  variant?: "home" | "page" | "compact" | "portrait";
  image?: string;
  imageAlt?: string;
  imageStyle?: CSSProperties;
  kicker: string;
  lines: ReactNode[];
  lead?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
  glow?: boolean;
};

export function Hero({ variant = "page", image, imageAlt = "", imageStyle, kicker, lines, lead, actions, children, glow }: Props) {
  const cls = ["hero", variant === "page" && "hero--page", variant === "compact" && "hero--compact", variant === "portrait" && "hero--portrait"]
    .filter(Boolean)
    .join(" ");
  const leadDelay = 450 + lines.length * 110;
  return (
    <section className={cls}>
      {image && (
        <div className="hero-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={imageAlt} fetchPriority="high" style={imageStyle} />
        </div>
      )}
      {glow && <div className="hero-glow" aria-hidden="true" />}
      <div className="container">
        <div className="hero-body">
          <span className="kicker fade-in" style={delay(100)}>{kicker}</span>
          <h1>
            {lines.map((content, i) => (
              <span className="line" key={i}><span style={line(i)}>{content}</span></span>
            ))}
          </h1>
          {lead && <p className="lead fade-in" style={delay(leadDelay)}>{lead}</p>}
          {actions && <div className="actions fade-in" style={delay(leadDelay + 150)}>{actions}</div>}
          {variant === "portrait" && children}
        </div>
        {variant !== "portrait" && children}
      </div>
    </section>
  );
}
