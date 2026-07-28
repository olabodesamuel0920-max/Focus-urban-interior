import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Focus Urban Interiors | Luxury Interior Architecture in Lagos",
  description:
    "Focus Urban Interiors creates warm, refined residential, commercial, and hospitality spaces in Lagos, Nigeria.",
  keywords: [
    "interior design Lagos",
    "luxury interiors Nigeria",
    "interior architecture",
    "residential design",
    "commercial interiors",
    "hospitality design",
  ],
  openGraph: {
    title: "Focus Urban Interiors | Spatial Design Studio",
    description: "Designed for comfort. Crafted for living.",
    type: "website",
    locale: "en_NG",
    siteName: "Focus Urban Interiors",
  },
  twitter: {
    card: "summary_large_image",
    title: "Focus Urban Interiors",
    description: "Designed for comfort. Crafted for living.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans antialiased bg-canvas text-copy">
        {children}
      </body>
    </html>
  );
}
