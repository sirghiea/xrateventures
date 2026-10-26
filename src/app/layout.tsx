import type { Metadata, Viewport } from "next";
import { Albert_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import { Effects } from "@/components/Effects";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SITE_URL } from "@/content/site";

const albert = Albert_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-albert", display: "swap" });
const newsreader = Newsreader({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-newsreader", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "XrateVentures | The long-term home for exceptional UK businesses", template: "%s | XrateVentures" },
  description:
    "XrateVentures acquires and grows established UK businesses in compliance, maintenance and engineering services, combining long-term ownership with modern operational thinking.",
  icons: { icon: "/favicon.svg", apple: "/apple-touch-icon.png" },
  openGraph: {
    type: "website",
    siteName: "XrateVentures",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#16110d", viewportFit: "cover" };

// Hide reveal targets only once we know JS is running; un-hide if the app fails to start.
const bootScript = `document.documentElement.classList.add("js");window.__revealFallback=setTimeout(function(){document.documentElement.classList.remove("js")},2500);`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${albert.variable} ${newsreader.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Effects />
      </body>
    </html>
  );
}
