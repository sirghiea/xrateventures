import type { CSSProperties } from "react";

/** Reveal delay in ms (consumed by `[data-reveal]` CSS as --d). */
export const d = (ms: number, extra?: CSSProperties) => ({ "--d": ms, ...extra }) as CSSProperties;
/** Hero fade-in delay. */
export const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;
/** Hero headline line index (staggers the line-up animation). */
export const line = (i: number) => ({ "--i": i }) as CSSProperties;
