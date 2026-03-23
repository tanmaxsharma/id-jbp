"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: "IT Support & Maintenance",
    desc:  "Round-the-clock monitoring, maintenance, and helpdesk support to ensure your systems are always operational.",
    tags:  ["24/7 Support", "Remote & Onsite"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop&auto=format",
    accent: "#3b82f6",
    number: "01",
  },
  {
    title: "Network & Infrastructure",
    desc:  "Design, implementation, and management of robust, scalable network solutions that grow with your business.",
    tags:  ["LAN/WAN", "VPN", "Firewall"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop&auto=format",
    accent: "#0ea5e9",
    number: "02",
  },
  {
    title: "Cyber Security",
    desc:  "Advanced threat protection, data encryption, and security audits to safeguard your critical business assets.",
    tags:  ["Threat Detection", "Audits"],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=500&fit=crop&auto=format",
    accent: "#6366f1",
    number: "03",
  },
  {
    title: "Software Development",
    desc:  "Custom software solutions built for your exact requirements — from internal tools to customer-facing platforms.",
    tags:  ["Web", "Mobile", "Enterprise"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop&auto=format",
    accent: "#10b981",
    number: "04",
  },
  {
    title: "BPO Services",
    desc:  "Streamline business operations with professional business process outsourcing tailored to your workflow.",
    tags:  ["Data Entry", "Operations"],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop&auto=format",
    accent: "#f59e0b",
    number: "05",
  },
  {
    title: "KPO Services",
    desc:  "Knowledge-driven outsourcing leveraging deep domain expertise to deliver analytical and research services.",
    tags:  ["Research", "Analytics"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format",
    accent: "#ec4899",
    number: "06",
  },
];

/* ─── Desktop card ───────────────────────────────────────────── */
function ServiceCard({ svc }: { svc: (typeof SERVICES)[0] }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      data-svc-card
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        borderRadius: 20,
        overflow: "hidden",
        background: "#fff",
        boxShadow: hov
          ? `0 28px 60px rgba(0,0,0,0.14), 0 0 0 1.5px ${svc.accent}55`
          : "0 2px 20px rgba(0,0,0,0.06)",
        transform: hov ? "translateY(-10px)" : "translateY(0)",
        transition: "all 0.38s cubic-bezier(0.34,1.4,0.64,1)",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image area */}
      <div style={{ position: "relative", height: 200, overflow: "hidden", flexShrink: 0 }}>
        <img
          src={svc.image}
          alt={svc.title}
          loading="lazy"
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            transform: hov ? "scale(1.08)" : "scale(1)",
            transition: "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
            display: "block",
          }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(160deg, ${svc.accent}cc, #0f172aee)`,
          opacity: hov ? 1 : 0,
          transition: "opacity 0.38s ease",
        }} />
        {/* Number badge */}
        <div style={{
          position: "absolute", top: 14, left: 16,
          fontSize: "0.65rem", fontWeight: 800,
          letterSpacing: "2px", color: "#fff",
          background: "rgba(0,0,0,0.38)",
          backdropFilter: "blur(8px)",
          padding: "4px 10px", borderRadius: 50,
          fontFamily: "'Plus Jakarta Sans',sans-serif",
        }}>
          {svc.number}
        </div>
        {/* Arrow icon on hover */}
        <div style={{
          position: "absolute", bottom: 14, right: 16,
          width: 36, height: 36, borderRadius: "50%",
          background: "#fff",
          display: "flex", alignItems: "center", justifyContent: "center",
          opacity: hov ? 1 : 0,
          transform: hov ? "scale(1) translateY(0)" : "scale(0.7) translateY(6px)",
          transition: "all 0.35s ease",
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke={svc.accent} strokeWidth="2.5">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      </div>

      {/* Content area */}
      <div style={{
        padding: "22px 22px 24px",
        display: "flex", flexDirection: "column", gap: 10,
        flex: 1,
        borderTop: `3px solid ${hov ? svc.accent : "transparent"}`,
        transition: "border-color 0.3s",
      }}>
        <h3 style={{
          fontSize: "0.97rem", fontWeight: 800, color: "#0f172a",
          lineHeight: 1.28, fontFamily: "'Plus Jakarta Sans',sans-serif", margin: 0,
        }}>{svc.title}</h3>
        <p style={{
          fontSize: "0.83rem", color: "#64748b", lineHeight: 1.72,
          flex: 1, fontFamily: "'Plus Jakarta Sans',sans-serif", margin: 0,
        }}>{svc.desc}</p>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 4 }}>
          {svc.tags.map(t => (
            <span key={t} style={{
              padding: "3px 11px",
              background: hov ? `${svc.accent}12` : "#f1f5f9",
              color: hov ? svc.accent : "#64748b",
              border: `1px solid ${hov ? svc.accent + "44" : "#e2e8f0"}`,
              borderRadius: 50,
              fontSize: "0.68rem", fontWeight: 700,
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              letterSpacing: "0.3px",
              transition: "all 0.3s",
            }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Mobile stack ───────────────────────────────────────────── */
function MobileStack() {
  const STICKY_OFFSET = 76;
  const STACK_GAP     = 12;

  return (
    <>
      <style>{`
        .ms2-wrap { position: relative; padding-bottom: 20px; }
        .ms2-wrap:last-child { padding-bottom: 0; }
        .ms2-card {
          position: sticky;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(0,0,0,0.2);
        }
      `}</style>
      {SERVICES.map((svc, i) => (
        <div key={svc.title} className="ms2-wrap">
          <div
            className="ms2-card"
            style={{ top: STICKY_OFFSET + i * STACK_GAP, zIndex: 10 + i }}
          >
            {/* Image */}
            <div style={{ position: "relative", height: 160, overflow: "hidden" }}>
              <img
                src={svc.image}
                alt={svc.title}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to bottom, transparent 30%, #0f172af0)",
              }} />
              <span style={{
                position: "absolute", bottom: 12, left: 16,
                fontSize: "1rem", fontWeight: 800, color: "#fff",
                fontFamily: "'Plus Jakarta Sans',sans-serif",
              }}>{svc.title}</span>
              <span style={{
                position: "absolute", top: 12, right: 14,
                fontSize: "0.62rem", fontWeight: 800, letterSpacing: "2px",
                color: "#fff", background: "rgba(0,0,0,0.36)",
                backdropFilter: "blur(6px)", padding: "3px 9px", borderRadius: 50,
                fontFamily: "'Plus Jakarta Sans',sans-serif",
              }}>{svc.number}</span>
            </div>
            {/* Content */}
            <div style={{
              background: "#fff",
              padding: "16px 18px 20px",
              borderTop: `3px solid ${svc.accent}`,
            }}>
              <p style={{
                fontSize: "0.82rem", color: "#64748b", lineHeight: 1.68,
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                margin: "0 0 12px",
              }}>{svc.desc}</p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {svc.tags.map(t => (
                  <span key={t} style={{
                    padding: "3px 10px",
                    background: `${svc.accent}12`,
                    color: svc.accent,
                    border: `1px solid ${svc.accent}33`,
                    borderRadius: 50,
                    fontSize: "0.68rem", fontWeight: 700,
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

/* ─── Main Section ───────────────────────────────────────────── */
export default function Services() {
  const secRef  = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo("[data-svc-header]", { y: 36, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: "[data-svc-header]", start: "top 88%", once: true },
      });
      const cards = gridRef.current?.querySelectorAll("[data-svc-card]");
      if (cards) {
        gsap.fromTo(Array.from(cards), { y: 50, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.65,
          stagger: { amount: 0.5, from: "start" },
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
      /* Slightly different bg from About (#fff) for visual rhythm */
      background: "#f1f5f9",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px,4vw,32px)" }}>

        {/* Header */}
        <div data-svc-header style={{
          textAlign: "center",
          maxWidth: 620,
          margin: "0 auto clamp(40px,6vw,64px)",
        }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <div style={{ width: 24, height: 3, background: "#2563eb", borderRadius: 2 }} />
            <span style={{
              fontSize: "0.7rem", fontWeight: 700, letterSpacing: "3px",
              textTransform: "uppercase", color: "#2563eb",
              fontFamily: "'Plus Jakarta Sans',sans-serif",
            }}>Our Services</span>
            <div style={{ width: 24, height: 3, background: "#2563eb", borderRadius: 2 }} />
          </div>
          <h2 style={{
            fontSize: "clamp(1.7rem,3.8vw,2.9rem)", fontWeight: 800,
            lineHeight: 1.16, color: "#0f172a", marginBottom: 14,
            fontFamily: "'Plus Jakarta Sans',sans-serif",
          }}>
            Comprehensive IT Solutions<br />
            <span style={{
              background: "linear-gradient(135deg,#2563eb,#0ea5e9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>for Modern Businesses</span>
          </h2>
          <p style={{
            fontSize: "clamp(0.9rem,1.5vw,1rem)", color: "#64748b",
            lineHeight: 1.75, fontFamily: "'Plus Jakarta Sans',sans-serif",
          }}>
            Enterprise-grade services designed to keep your business running
            smoothly, securely, and efficiently.
          </p>
        </div>

        {/* Desktop grid */}
        <div
          ref={gridRef}
          className="svc-desktop-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "clamp(16px,2vw,24px)",
          }}
        >
          {SERVICES.map(svc => <ServiceCard key={svc.title} svc={svc} />)}
        </div>

        {/* Mobile stack */}
        <div className="svc-mobile-stack" style={{ display: "none" }}>
          <MobileStack />
        </div>
      </div>

      <style>{`
        @media (min-width: 641px) {
          .svc-desktop-grid { display: grid !important; }
          .svc-mobile-stack { display: none !important; }
        }
        @media (max-width: 640px) {
          .svc-desktop-grid { display: none !important; }
          .svc-mobile-stack { display: block !important; }
        }
        @media (min-width: 641px) and (max-width: 960px) {
          .svc-desktop-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
}