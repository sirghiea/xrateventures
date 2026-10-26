/** A statement whose words light up one by one as it scrolls through the viewport. */
export function Words({ text, className = "statement" }: { text: string; className?: string }) {
  const words = text.split(/\s+/);
  return (
    <p className={className} data-words aria-label={text}>
      {words.map((w, i) => (
        <span key={i} aria-hidden="true">
          <span className="w">{w}</span>{i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
