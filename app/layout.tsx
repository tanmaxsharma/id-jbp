import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "India Daksh | Enterprise IT Solutions & Managed Services",
  description:
    "India Daksh delivers enterprise-grade IT solutions — AI Automation , Software Development, cybersecurity, Network infrastructure, and KPO/BPO Services for businesses across India.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}