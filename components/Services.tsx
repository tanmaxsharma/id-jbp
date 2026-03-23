"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  { icon: "🖥️", title: "IT Support & Maintenance", desc: "Round-the-clock monitoring, maintenance, and helpdesk support to ensure your systems are always operational.", tags: ["24/7 Support", "Remote & Onsite"] },
  { icon: "🌐", title: "Network & Infrastructure",  desc: "Design, implementation, and management of robust, scalable network solutions that grow with your business.", tags: ["LAN/WAN", "VPN", "Firewall"] },
  { icon: "🔐", title: "Cyber Security",            desc: "Advanced threat protection, data encryption, and security audits to safeguard your critical business assets.", tags: ["Threat Detection", "Audits"] },
  { icon: "⚙️", title: "Software Development",     desc: "Custom software solutions built for your exact requirements — from internal tools to customer-facing platforms.", tags: ["Web", "Mobile", "Enterprise"] },
  { icon: "📊", title: "BPO Services",              desc: "Streamline business operations with professional business process outsourcing tailored to your workflow.", tags: ["Data Entry", "Operations"] },
  { icon: "🧠", title: "KPO Services",              desc: "Knowledge-driven outsourcing leveraging deep domain expertise to deliver analytical and research services.", tags: ["Research", "Analytics"] },
];

/* ─── Desktop card (unchanged hover behaviour) ─────────────────── */
function DesktopCard({ svc }: { svc: typeof SERVICES[0] }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      data-desktop-card
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "#fff",
        border: hov ? "1.5px solid #bfdbfe" : "1.5px solid #f1f5f9",
        borderRadius: 20,
        padding: "clamp(24px,2.5vw,32px)",
        display: "flex", flexDirection: "column", gap: 14,
        boxShadow: hov ? "0 20px 48px rgba(37,99,235,0.1)" : "0 2px 16px rgba(0,0,0,0.04)",
        transform: hov ? "translateY(-8px)" : "translateY(0)",
        transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        cursor: "pointer", position: "relative", overflow: "hidden",
      }}
    >
      {/* accent top line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: "linear-gradient(90deg,#2563eb,#0ea5e9)",
        transform: hov ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 0.4s ease",
        borderRadius: "3px 3px 0 0",
      }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{
          width: 52, height: 52,
          background: hov ? "linear-gradient(135deg,#2563eb,#0ea5e9)" : "#f0f9ff",
          borderRadius: 14,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.4rem",
          transition: "background 0.3s, transform 0.3s",
          transform: hov ? "scale(1.08) rotate(-5deg)" : "none",
        }}>{svc.icon}</div>
        <svg style={{ color: "#2563eb", opacity: hov ? 1 : 0, transition: "opacity 0.3s" }}
          width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </div>

      <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0f172a", lineHeight: 1.3,
        fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{svc.title}</h3>
      <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.7, flex: 1,
        fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{svc.desc}</p>

      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {svc.tags.map(t => (
          <span key={t} style={{
            padding: "3px 10px",
            background: hov ? "#eff6ff" : "#f8fafc",
            color: hov ? "#2563eb" : "#64748b",
            borderRadius: 50, fontSize: "0.7rem", fontWeight: 600,
            border: hov ? "1px solid #bfdbfe" : "1px solid #e2e8f0",
            transition: "all 0.3s",
            fontFamily: "'Plus Jakarta Sans',sans-serif",
          }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ─── Mobile stacked card (sticky scroll) ──────────────────────── */
function MobileCard({
  svc, index, total,
}: { svc: typeof SERVICES[0]; index: number; total: number }) {
  const colors = [
    { bg: "#0f172a", accent: "#60a5fa", sub: "rgba(255,255,255,0.6)", tagBg: "rgba(96,165,250,0.15)", tagBorder: "rgba(96,165,250,0.3)", tagColor: "#93c5fd" },
    { bg: "#1e3a5f", accent: "#38bdf8", sub: "rgba(255,255,255,0.6)", tagBg: "rgba(56,189,248,0.15)", tagBorder: "rgba(56,189,248,0.3)", tagColor: "#7dd3fc" },
    { bg: "#1e1b4b", accent: "#a78bfa", sub: "rgba(255,255,255,0.6)", tagBg: "rgba(167,139,250,0.15)", tagBorder: "rgba(167,139,250,0.3)", tagColor: "#c4b5fd" },
    { bg: "#14532d", accent: "#4ade80", sub: "rgba(255,255,255,0.6)", tagBg: "rgba(74,222,128,0.15)", tagBorder: "rgba(74,222,128,0.3)", tagColor: "#86efac" },
    { bg: "#7c2d12", accent: "#fb923c", sub: "rgba(255,255,255,0.6)", tagBg: "rgba(251,146,60,0.15)",  tagBorder: "rgba(251,146,60,0.3)",  tagColor: "#fdba74" },
    { bg: "#164e63", accent: "#22d3ee", sub: "rgba(255,255,255,0.6)", tagBg: "rgba(34,211,238,0.15)",  tagBorder: "rgba(34,211,238,0.3)",  tagColor: "#67e8f9" },
  ];
  const c = colors[index % colors.length];
  // Each card sticks at top + (index * 64px) so they stack progressively
  const stickyTop = 88 + index * 16;

  return (
    <div
      className="mobile-sticky-card"
      style={{
        position: "sticky",
        top: stickyTop,
        zIndex: 10 + index,
        borderRadius: 20,
        overflow: "hidden",
        marginBottom: index < total - 1 ? 16 : 0,
        /* slight scale-down illusion for cards underneath */
        transformOrigin: "top center",
      }}
    >
      <div style={{
        background: c.bg,
        padding: "clamp(22px,5vw,32px)",
        borderRadius: 20,
        display: "flex", flexDirection: "column", gap: 14,
        boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
        border: `1px solid ${c.accent}22`,
        minHeight: 220,
      }}>
        {/* Number + Icon row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{
            width: 52, height: 52,
            background: `${c.accent}18`,
            border: `1.5px solid ${c.accent}40`,
            borderRadius: 14,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.5rem",
          }}>
            {svc.icon}
          </div>
          <span style={{
            fontSize: "2.5rem", fontWeight: 900,
            color: `${c.accent}25`,
            fontFamily: "'Plus Jakarta Sans',sans-serif",
            lineHeight: 1,
            userSelect: "none",
          }}>
            0{index + 1}
          </span>
        </div>

        {/* Title */}
        <h3 style={{
          fontSize: "clamp(1rem,4vw,1.15rem)", fontWeight: 800,
          color: "#fff", lineHeight: 1.25,
          fontFamily: "'Plus Jakarta Sans',sans-serif",
          margin: 0,
        }}>{svc.title}</h3>

        {/* Desc */}
        <p style={{
          fontSize: "clamp(0.8rem,3vw,0.88rem)",
          color: c.sub, lineHeight: 1.7,
          fontFamily: "'Plus Jakarta Sans',sans-serif",
          margin: 0,
        }}>{svc.desc}</p>

        {/* Tags */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 4 }}>
          {svc.tags.map(t => (
            <span key={t} style={{
              padding: "4px 12px",
              background: c.tagBg,
              color: c.tagColor,
              border: `1px solid ${c.tagBorder}`,
              borderRadius: 50,
              fontSize: "0.72rem", fontWeight: 700,
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              letterSpacing: "0.3px",
            }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Main Section ─────────────────────────────────────────────── */
export default function Services() {
  const secRef  = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  /* Desktop card entrance animation */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const headerEl = secRef.current?.querySelector("[data-header]");
      if (headerEl) {
        gsap.fromTo(headerEl, { y: 36, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: headerEl, start: "top 88%", once: true },
        });
      }

      // Desktop cards stagger
      const dcards = gridRef.current?.querySelectorAll("[data-desktop-card]");
      if (dcards) {
        gsap.fromTo(Array.from(dcards), { y: 48, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.6,
          stagger: { amount: 0.45, from: "start" },
          ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 82%", once: true },
        });
      }
    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={secRef} id="services" style={{
      padding: "clamp(56px,9vw,112px) 0",
      background: "#f8fafc",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px,4vw,32px)" }}>

        {/* Header */}
        <div data-header style={{
          textAlign: "center", maxWidth: 600,
          margin: "0 auto clamp(36px,6vw,60px)",
        }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <div style={{ width: 24, height: 3, background: "#2563eb", borderRadius: 2 }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "3px",
              textTransform: "uppercase", color: "#2563eb",
              fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
              Our Services
            </span>
            <div style={{ width: 24, height: 3, background: "#2563eb", borderRadius: 2 }} />
          </div>
          <h2 style={{ fontSize: "clamp(1.6rem,3.8vw,2.8rem)", fontWeight: 800,
            lineHeight: 1.18, color: "#0f172a", marginBottom: 14,
            fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
            Comprehensive IT Solutions<br />
            <span style={{ background: "linear-gradient(135deg,#2563eb,#0ea5e9)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              for Modern Businesses
            </span>
          </h2>
          <p style={{ fontSize: "clamp(0.9rem,1.5vw,1rem)", color: "#64748b", lineHeight: 1.72,
            fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
            Enterprise-grade services designed to keep your business running smoothly,
            securely, and efficiently.
          </p>
        </div>

        {/* ── Desktop grid (hidden on mobile) ── */}
        <div ref={gridRef} className="services-desktop-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "clamp(14px,2vw,22px)",
        }}>
          {SERVICES.map(svc => <DesktopCard key={svc.title} svc={svc} />)}
        </div>

        {/* ── Mobile sticky stack (hidden on desktop) ── */}
        <div className="services-mobile-stack" style={{ display: "none" }}>
          {SERVICES.map((svc, i) => (
            <MobileCard key={svc.title} svc={svc} index={i} total={SERVICES.length} />
          ))}
        </div>
      </div>

      <style>{`
        /* Show desktop grid, hide mobile stack */
        @media (min-width: 641px) {
          .services-desktop-grid { display: grid !important; }
          .services-mobile-stack { display: none !important; }
        }

        /* Show mobile stack, hide desktop grid */
        @media (max-width: 640px) {
          .services-desktop-grid { display: none !important; }
          .services-mobile-stack { display: block !important; }
        }

        /* Tablet: 2 columns */
        @media (min-width: 641px) and (max-width: 900px) {
          .services-desktop-grid {
            grid-template-columns: repeat(2,1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}