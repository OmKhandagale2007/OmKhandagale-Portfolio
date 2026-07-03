import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Om Khandagale — Portfolio",
  description:
    "Om Khandagale — CS Student & Builder. Python, TypeScript, AI developer building real projects at Manipal University Jaipur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Mono:wght@400;500&family=Outfit:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" />
      </head>
      <body>{children}</body>
    </html>
  );
}
