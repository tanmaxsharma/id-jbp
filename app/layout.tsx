import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daksh India | Enterprise IT Solutions & Managed Services",
  description:
    "Daksh India delivers enterprise-grade IT solutions — managed services, cybersecurity, network infrastructure, and software development for businesses across India.",
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