import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Abdelhakim BENBOUANANE Portfolio",
  description: "Modern & Minimalist Abdelhakim Benbouanane Portfolio",
  icons: { icon: "/assets/me.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Abdelhakim BENBOUANANE Portfolio</title>
        <meta
          name="description"
          content="Modern & Minimalist Abdelhakim Benbouanane Portfolio"
        />
        <meta property="og:title" content="Abdelhakim BENBOUANANE Portfolio" />
        <meta
          property="og:description"
          content="Modern & Minimalist Abdelhakim Benbouanane Portfolio"
        />
        <meta property="og:image" content="/assets/me.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Abdelhakim BENBOUANANE Portfolio" />
        <meta
          name="twitter:description"
          content="Modern & Minimalist Abdelhakim Benbouanane Portfolio"
        />
        <meta name="twitter:image" content="/assets/me.png" />
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </head>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
