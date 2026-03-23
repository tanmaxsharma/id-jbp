"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  { icon: "⚡", title: "Rapid Response",       desc: "Average response time under 30 minutes for critical issues, 24 hours a day." },
  { icon: "🎖️", title: "Certified Experts",    desc: "Industry-certified IT professionals with decades of combined experience." },
  { icon: "📈", title: "Scalable Solutions",    desc: "Infrastructure that grows seamlessly with your business and new technology." },
  { icon: "💰", title: "Transparent Pricing",  desc: "No hidden costs. Clear and predictable pricing models for every service tier." },
  { icon: "🛡️", title: "Security First",       desc: "Enterprise-grade security baked in from day one, not as an afterthought." },
  { icon: "🤝", title: "Long-term Partnership",desc: "We invest in understanding your business, not just fixing one-off problems." },
];

function Card({ f, delay }: { f: typeof FEATURES[0]; delay: number }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      data-card
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? "#fff" : "#f8fafc",
        border: hov ? "1.5px solid #bfdbfe" : "1.5px solid #e2e8f0",
        borderRadius: 16,
        padding: "clamp(18px,2.5vw,28px)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        transform: hov ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hov
          ? "0 14px 36px rgba(37,99,235,0.1)"
          : "0 1px 6px rgba(0,0,0,0.04)",
        transition: "all 0.28s cubic-bezier(0.34,1.4,0.64,1)",
        animationDelay: `${delay}s`,
      }}
    >
      {/* Icon circle */}
      <div style={{
        width: 48, height: 48, borderRadius: "50%",
        background: hov
          ? "linear-gradient(135deg,#eff6ff,#e0f2fe)"
          : "#fff",
        border: hov ? "1.5px solid #bfdbfe" : "1.5px solid #e2e8f0",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1.3rem",
        flexShrink: 0,
        transform: hov ? "rotate(-6deg) scale(1.1)" : "none",
        transition: "all 0.28s ease",
      }}>
        {f.icon}
      </div>

      <h3 style={{
        fontSize: "clamp(0.875rem,1.5vw,0.95rem)",
        fontWeight: 700, color: "#0f172a",
        lineHeight: 1.3,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}>
        {f.title}
      </h3>

      <p style={{
        fontSize: "clamp(0.78rem,1.2vw,0.85rem)",
        color: "#64748b", lineHeight: 1.65,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        margin: 0,
      }}>
        {f.desc}
      </p>
    </div>
  );
}

export default function WhyUs() {
  const secRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      const headerEl = secRef.current?.querySelector("[data-header]");
      if (headerEl) {
        gsap.fromTo(headerEl,
          { y: 36, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: headerEl, start: "top 88%", once: true },
          }
        );
      }

      // Cards stagger
      const cards = secRef.current?.querySelectorAll("[data-card]");
      if (cards) {
        gsap.fromTo(Array.from(cards),
          { y: 36, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.55,
            stagger: { amount: 0.4, from: "start" },
            ease: "power3.out",
            scrollTrigger: { trigger: secRef.current, start: "top 78%", once: true },
          }
        );
      }
    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={secRef} id="why" style={{
      padding: "clamp(56px,9vw,112px) 0",
      background: "#fff",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px,4vw,32px)" }}>

        {/* Header */}
        <div data-header style={{
          textAlign: "center",
          maxWidth: 560,
          margin: "0 auto clamp(36px,6vw,60px)",
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            marginBottom: 14,
          }}>
            <div style={{ width: 24, height: 3, background: "#2563eb", borderRadius: 2 }} />
            <span style={{
              fontSize: "0.7rem", fontWeight: 700,
              letterSpacing: "3px", textTransform: "uppercase",
              color: "#2563eb",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              Why Choose Us
            </span>
            <div style={{ width: 24, height: 3, background: "#2563eb", borderRadius: 2 }} />
          </div>

          <h2 style={{
            fontSize: "clamp(1.6rem,3.8vw,2.8rem)",
            fontWeight: 800, lineHeight: 1.18,
            color: "#0f172a", marginBottom: 14,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            Excellence Through{" "}
            <span style={{
              background: "linear-gradient(135deg,#2563eb,#0ea5e9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Innovation
            </span>
          </h2>

          <p style={{
            fontSize: "clamp(0.9rem,1.5vw,1rem)",
            color: "#64748b", lineHeight: 1.72,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            Committed to delivering superior IT solutions with unmatched expertise
            and a client-first mindset.
          </p>
        </div>

        {/* 3-col desktop / 2-col mobile grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",   /* 3×2 desktop */
          gap: "clamp(12px,2vw,20px)",
        }} className="why-grid">
          {FEATURES.map((f, i) => (
            <Card key={f.title} f={f} delay={i * 0.07} />
          ))}
        </div>
      </div>

      {/* Responsive grid override */}
      <style>{`
        /* Tablet — keep 3 col down to 640px */
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        /* Mobile — 2 columns */
        @media (max-width: 600px) {
          .why-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 10px !important; }
        }
        /* Very small phones — 2 columns still but tighter padding */
        @media (max-width: 360px) {
          .why-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 8px !important; }
        }
      `}</style>
    </section>
  );
}