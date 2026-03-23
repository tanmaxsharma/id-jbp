"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { display: "500+",  label: "Clients Served"      },
  { display: "12+",   label: "Years Experience"     },
  { display: "99.9%", label: "Uptime SLA"           },
  { display: "<30min",label: "Avg Response Time"    },
];

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: "Rapid Response",
    desc: "Average response time under 30 minutes for critical issues, 24 hours a day, 365 days a year.",
    highlight: "< 30 min",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Security First",
    desc: "Enterprise-grade security protocols baked into every solution we deliver — never as an afterthought.",
    highlight: "ISO Certified",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: "Scalable Solutions",
    desc: "Infrastructure that grows seamlessly alongside your business — from startup to enterprise.",
    highlight: "500+ clients",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: "Transparent Pricing",
    desc: "No hidden costs. Clear, predictable pricing models for every service tier — you know exactly what you pay.",
    highlight: "No surprises",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Certified Experts",
    desc: "Industry-certified IT professionals with decades of combined experience across diverse verticals.",
    highlight: "12+ years",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: "Long-term Partnership",
    desc: "We invest time to understand your business deeply — not just fixing issues, but building your future.",
    highlight: "98% retention",
  },
];

function FeatureRow({ f, index }: { f: (typeof FEATURES)[0]; index: number }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      data-feature-row
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "clamp(16px,2.5vw,28px)",
        padding: "clamp(16px,2vw,22px) clamp(20px,3vw,32px)",
        borderRadius: 16,
        background: hov ? "rgba(37,99,235,0.07)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${hov ? "rgba(37,99,235,0.25)" : "rgba(255,255,255,0.07)"}`,
        transition: "all 0.28s ease",
        cursor: "default",
      }}
    >
      {/* Icon */}
      <div style={{
        width: 48, height: 48, flexShrink: 0,
        borderRadius: 13,
        background: hov
          ? "linear-gradient(135deg,#2563eb,#0ea5e9)"
          : "rgba(37,99,235,0.12)",
        border: `1.5px solid ${hov ? "transparent" : "rgba(37,99,235,0.25)"}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: hov ? "#fff" : "#60a5fa",
        transition: "all 0.28s ease",
        transform: hov ? "rotate(-6deg) scale(1.08)" : "none",
        boxShadow: hov ? "0 6px 20px rgba(37,99,235,0.4)" : "none",
      }}>
        {f.icon}
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <h4 style={{
          fontSize: "clamp(0.88rem,1.4vw,0.97rem)",
          fontWeight: 700, color: "#f1f5f9",
          margin: "0 0 4px",
          fontFamily: "'Plus Jakarta Sans',sans-serif",
        }}>{f.title}</h4>
        <p style={{
          fontSize: "clamp(0.76rem,1.1vw,0.83rem)",
          color: "#64748b", lineHeight: 1.65, margin: 0,
          fontFamily: "'Plus Jakarta Sans',sans-serif",
        }}>{f.desc}</p>
      </div>

      {/* Highlight pill */}
      <div style={{
        flexShrink: 0,
        padding: "5px 14px",
        borderRadius: 50,
        background: hov ? "rgba(37,99,235,0.2)" : "rgba(255,255,255,0.05)",
        border: `1px solid ${hov ? "rgba(59,130,246,0.5)" : "rgba(255,255,255,0.1)"}`,
        fontSize: "0.7rem", fontWeight: 800,
        color: hov ? "#93c5fd" : "#475569",
        letterSpacing: "0.4px",
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        whiteSpace: "nowrap",
        transition: "all 0.28s ease",
      }}>
        {f.highlight}
      </div>
    </div>
  );
}

export default function WhyUs() {
  const secRef   = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo("[data-why-header]", { y: 36, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: "[data-why-header]", start: "top 88%", once: true },
      });
      gsap.fromTo("[data-stat]", { y: 30, opacity: 0, scale: 0.9 }, {
        y: 0, opacity: 1, scale: 1, duration: 0.6,
        stagger: 0.1, ease: "back.out(1.4)",
        scrollTrigger: { trigger: statsRef.current, start: "top 85%", once: true },
      });
      const rows = secRef.current?.querySelectorAll("[data-feature-row]");
      if (rows) {
        rows.forEach((row, i) => {
          gsap.fromTo(row,
            { x: i % 2 === 0 ? -40 : 40, opacity: 0 },
            {
              x: 0, opacity: 1, duration: 0.6, ease: "power3.out",
              scrollTrigger: { trigger: row, start: "top 88%", once: true },
              delay: (i % 3) * 0.05,
            }
          );
        });
      }
    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={secRef} id="why" style={{
      padding: "clamp(60px,9vw,120px) 0",
      background: "#080f1e",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background decorations */}
      <div style={{
        position: "absolute", top: -100, right: -100,
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle,rgba(37,99,235,0.12) 0%,transparent 65%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -80, left: -80,
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle,rgba(14,165,233,0.08) 0%,transparent 65%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage:
          "linear-gradient(rgba(37,99,235,0.035) 1px,transparent 1px), linear-gradient(90deg,rgba(37,99,235,0.035) 1px,transparent 1px)",
        backgroundSize: "52px 52px",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: 1200, margin: "0 auto",
        padding: "0 clamp(16px,4vw,32px)",
        position: "relative", zIndex: 1,
      }}>

        {/* Header */}
        <div data-why-header style={{
          textAlign: "center", maxWidth: 600,
          margin: "0 auto clamp(40px,6vw,64px)",
        }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <div style={{ width: 24, height: 3, background: "#3b82f6", borderRadius: 2 }} />
            <span style={{
              fontSize: "0.7rem", fontWeight: 700, letterSpacing: "3px",
              textTransform: "uppercase", color: "#60a5fa",
              fontFamily: "'Plus Jakarta Sans',sans-serif",
            }}>Why Choose Us</span>
            <div style={{ width: 24, height: 3, background: "#3b82f6", borderRadius: 2 }} />
          </div>
          <h2 style={{
            fontSize: "clamp(1.7rem,3.8vw,2.9rem)", fontWeight: 800,
            lineHeight: 1.16, color: "#f0f6ff", marginBottom: 14,
            fontFamily: "'Plus Jakarta Sans',sans-serif",
          }}>
            Excellence Through{" "}
            <span style={{
              background: "linear-gradient(135deg,#60a5fa,#38bdf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Innovation</span>
          </h2>
          <p style={{
            fontSize: "clamp(0.9rem,1.5vw,1rem)", color: "#64748b",
            lineHeight: 1.75, fontFamily: "'Plus Jakarta Sans',sans-serif",
          }}>
            Committed to delivering superior IT solutions with unmatched expertise
            and a client-first mindset.
          </p>
        </div>

        {/* Stats bar */}
        <div ref={statsRef} className="why-stats-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "clamp(12px,2vw,20px)",
          marginBottom: "clamp(40px,6vw,64px)",
          padding: "clamp(20px,3vw,32px)",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 20,
          backdropFilter: "blur(8px)",
        }}>
          {STATS.map((s, i) => (
            <div key={s.label} data-stat style={{
              textAlign: "center", padding: "12px 0",
              borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
            }}>
              <div style={{
                fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 900,
                lineHeight: 1,
                background: "linear-gradient(135deg,#60a5fa,#38bdf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                marginBottom: 6,
              }}>
                {s.display}
              </div>
              <div style={{
                fontSize: "0.71rem", fontWeight: 600, letterSpacing: "1.5px",
                textTransform: "uppercase", color: "#475569",
                fontFamily: "'Plus Jakarta Sans',sans-serif",
              }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className="why-features-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "clamp(10px,1.5vw,14px)",
        }}>
          {FEATURES.map((f, i) => (
            <FeatureRow key={f.title} f={f} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .why-stats-grid    { grid-template-columns: repeat(2,1fr) !important; }
          .why-features-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .why-stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
}