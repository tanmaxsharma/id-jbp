"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  { src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=600&fit=crop", alt: "Business Professional" },
  { src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=600&fit=crop", alt: "Technology Dashboard" },
  { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=600&fit=crop", alt: "Network Infrastructure" },
  { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop", alt: "Team Collaboration" },
  { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=600&fit=crop", alt: "Digital Technology" },
  { src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=600&fit=crop", alt: "Business Communication" },
  { src: "https://images.unsplash.com/photo-1642957323739-5632d8a2ff3d?w=600&h=600&fit=crop", alt: "Enterprise Tech" },
  { src: "https://images.unsplash.com/photo-1632910138458-5bf601f3835e?w=600&h=600&fit=crop", alt: "Digital Transformation" },
];

function GalleryItem({ img }: { img: typeof IMAGES[0] }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      data-item
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative", borderRadius: 16, overflow: "hidden",
        aspectRatio: "1", cursor: "pointer",
        transform: hov ? "scale(1.03)" : "scale(1)",
        boxShadow: hov ? "0 20px 48px rgba(0,0,0,0.15)" : "0 4px 16px rgba(0,0,0,0.06)",
        transition: "transform 0.35s ease, box-shadow 0.35s ease",
      }}
    >
      <img src={img.src} alt={img.alt} loading="lazy" style={{
        width: "100%", height: "100%", objectFit: "cover", display: "block",
        transform: hov ? "scale(1.08)" : "scale(1)",
        transition: "transform 0.5s ease",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg,rgba(37,99,235,0.88),rgba(14,165,233,0.88))",
        display: "flex", alignItems: "center", justifyContent: "center",
        opacity: hov ? 1 : 0,
        transition: "opacity 0.35s ease",
        borderRadius: 16,
      }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
        </svg>
      </div>
    </div>
  );
}

export default function SuccessStories() {
  const secRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = secRef.current?.querySelectorAll("[data-item]");
      if (items) {
        gsap.fromTo(Array.from(items), { scale: 0.92, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, stagger: 0.06, ease: "power3.out",
            scrollTrigger: { trigger: secRef.current, start: "top 80%", once: true } });
      }
    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={secRef} id="success" style={{
      padding: "clamp(60px,10vw,120px) 0",
      background: "#f8fafc",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

        <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 56px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 28, height: 3, background: "#2563eb", borderRadius: 2 }} />
            <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#2563eb" }}>
              Success Stories
            </span>
            <div style={{ width: 28, height: 3, background: "#2563eb", borderRadius: 2 }} />
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.2, color: "#0f172a", marginBottom: 16 }}>
            Trusted by Leading{" "}
            <span style={{ background: "linear-gradient(135deg,#2563eb,#0ea5e9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Businesses
            </span>
          </h2>
          <p style={{ fontSize: "1rem", color: "#64748b", lineHeight: 1.7 }}>
            Real results from real partnerships across diverse industries in Central India and beyond.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%,200px),1fr))",
          gap: "clamp(10px,1.5vw,16px)",
        }}>
          {IMAGES.map((img, i) => <GalleryItem key={i} img={img} />)}
        </div>
      </div>
    </section>
  );
}