export const SITE_URL = "https://xrateventures.com";
export const EMAIL = "hello@xrateventures.com";
export const LINKEDIN = "https://www.linkedin.com/in/alexandru-sirghie/";

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/founder", label: "Who I am" },
  { href: "/approach", label: "Approach" },
  { href: "/contact", label: "Contact" },
] as const;

export const SECTORS = [
  { name: "Calibration & certification", image: "/images/sector-calibration.jpg", alt: "Precision pressure gauges" },
  { name: "Electrical testing & compliance", image: "/images/sector-electrical-testing.jpg", alt: "Testing an electrical control panel" },
  { name: "Fire safety", image: "/images/sector-fire-safety.jpg", alt: "Fire sprinkler control valve" },
  { name: "HVAC maintenance", image: "/images/sector-hvac.jpg", alt: "Plant room pipework and pumps" },
  { name: "Industrial maintenance", image: "/images/sector-industrial-maintenance.jpg", alt: "Engineer reviewing data in an industrial hall" },
  { name: "Infrastructure services", image: "/images/sector-infrastructure.jpg", alt: "Electrical substation at dusk" },
  { name: "Water hygiene", image: "/images/sector-water.jpg", alt: "Water treatment tanks" },
  { name: "Electrical equipment manufacturing", image: "/images/sector-electrical-equipment.jpg", alt: "Inside an electrical control panel" },
  { name: "Industrial components", image: "/images/sector-components.jpg", alt: "Industrial pipework" },
] as const;
