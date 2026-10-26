import { SECTORS } from "@/content/site";

function Group({ hidden }: { hidden?: boolean }) {
  return (
    <div className="marquee-group" aria-hidden={hidden || undefined}>
      {SECTORS.map((s) => (
        <span key={s.name} style={{ display: "contents" }}>
          <span>{s.name}</span>
          <i />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="marquee tone-cream" aria-label="Sectors we invest in">
      <div className="marquee-track">
        <Group />
        <Group hidden />
      </div>
    </div>
  );
}
