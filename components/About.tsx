"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HIGHLIGHTS = [
  { icon: "🏆", label: "10+ Years",     sub: "Industry Experience" },
  { icon: "🔐", label: "ISO Certified", sub: "Security Standards"  },
  { icon: "🌐", label: "Pan India",     sub: "Service Coverage"    },
];

export default function About() {
  const secRef  = useRef<HTMLElement>(null);
  const imgRef  = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: imgRef.current, start: "top 80%", once: true } }
      );
      const els = textRef.current?.querySelectorAll("[data-r]");
      if (els) {
        gsap.fromTo(Array.from(els),
          { y: 36, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out",
            scrollTrigger: { trigger: textRef.current, start: "top 80%", once: true } }
        );
      }
    }, secRef);
    return () => ctx.revert();
  }, []);

  const scrollSmoothTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section ref={secRef} id="about" style={{
        padding: "clamp(60px,10vw,120px) 0",
        background: "#fff",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(16px,4vw,32px)" }}>

          {/* Section label */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 56 }}>
            <div style={{ width: 32, height: 3, background: "#2563eb", borderRadius: 2 }} />
            <span style={{
              fontSize: "0.75rem", fontWeight: 700,
              letterSpacing: "3px", textTransform: "uppercase",
              color: "#2563eb", fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              About India Daksh
            </span>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,420px),1fr))",
            gap: "clamp(40px,6vw,80px)",
            alignItems: "center",
          }}>

            {/* ── Image column ── */}
            <div ref={imgRef}>
              <div style={{ position: "relative", borderRadius: 20, overflow: "hidden" }}>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="India Daksh team"
                  loading="lazy"
                  style={{
                    width: "100%", aspectRatio: "4/3",
                    objectFit: "cover", display: "block",
                  }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(135deg,rgba(37,99,235,0.12),transparent 60%)",
                  pointerEvents: "none",
                }} />
                {/* Floating badge */}
                <div style={{
                  position: "absolute", bottom: 20, left: 20,
                  background: "#fff", borderRadius: 14,
                  padding: "14px 18px",
                  display: "flex", alignItems: "center", gap: 12,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                  animation: "about-floatY 4s ease-in-out infinite",
                }}>
                  <span style={{ fontSize: "1.6rem" }}>⚡</span>
                  <div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0f172a" }}>
                      Enterprise Ready
                    </div>
                    <div style={{ fontSize: "0.72rem", color: "#64748b", marginTop: 2 }}>
                      99.9% SLA Guaranteed
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlights row */}
              <div style={{
                display: "grid", gridTemplateColumns: "repeat(3,1fr)",
                gap: 12, marginTop: 16,
              }}>
                {HIGHLIGHTS.map(h => (
                  <div
                    key={h.label}
                    style={{
                      background: "#f8fafc", border: "1px solid #e2e8f0",
                      borderRadius: 14, padding: "18px 12px",
                      display: "flex", flexDirection: "column",
                      alignItems: "center", gap: 4, textAlign: "center",
                      transition: "transform 0.2s, box-shadow 0.2s",
                      cursor: "default",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = "0 8px 24px rgba(37,99,235,0.1)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <span style={{ fontSize: "1.4rem" }}>{h.icon}</span>
                    <strong style={{
                      fontSize: "0.82rem", fontWeight: 700, color: "#0f172a",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}>{h.label}</strong>
                    <span style={{
                      fontSize: "0.7rem", color: "#94a3b8",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}>{h.sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Text column ── */}
            <div ref={textRef} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <h2 data-r style={{
                fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                fontWeight: 800, lineHeight: 1.2, color: "#0f172a",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                margin: 0,
              }}>
                Empowering Businesses<br />
                <span style={{
                  background: "linear-gradient(135deg,#2563eb,#0ea5e9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>Through Technology</span>
              </h2>

              <p data-r style={{
                fontSize: "1rem", color: "#64748b", lineHeight: 1.8,
                fontFamily: "'Plus Jakarta Sans', sans-serif", margin: 0,
              }}>
                At India Daksh, our mission is to provide top-notch IT services to small and
                mid-size businesses. We make technology work{" "}
                <em style={{ fontStyle: "normal", color: "#2563eb", fontWeight: 600 }}>for</em>{" "}
                our clients — not against them.
              </p>

              <p data-r style={{
                fontSize: "1rem", color: "#64748b", lineHeight: 1.8,
                fontFamily: "'Plus Jakarta Sans', sans-serif", margin: 0,
              }}>
                Since our inception, we&apos;ve delivered enterprise-grade IT solutions tailored
                for every scale. Our certified professionals bring decades of combined experience
                in network infrastructure, cybersecurity, and managed IT services.
              </p>

              {/* Mission box */}
              <div data-r style={{
                background: "linear-gradient(135deg,#eff6ff,#e0f2fe)",
                borderLeft: "4px solid #2563eb",
                borderRadius: 16, padding: 24,
                display: "flex", gap: 16,
              }}>
                <span style={{ fontSize: "1.6rem", flexShrink: 0 }}>🎯</span>
                <div>
                  <h4 style={{
                    fontSize: "0.95rem", fontWeight: 700, color: "#0f172a",
                    marginBottom: 6, fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}>Our Mission</h4>
                  <p style={{
                    fontSize: "0.875rem", color: "#64748b", lineHeight: 1.7,
                    fontFamily: "'Plus Jakarta Sans', sans-serif", margin: 0,
                  }}>
                    To provide reliable, secure, and scalable technology infrastructure that
                    supports everyday business operations and drives growth. We don&apos;t just
                    solve problems — we build lasting partnerships.
                  </p>
                </div>
              </div>

              {/* CTA actions */}
              <div data-r style={{
                display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8,
              }}>
                <a
                  href="#contact"
                  onClick={scrollSmoothTo("#contact")}
                  style={{
                    display: "inline-flex", alignItems: "center",
                    padding: "12px 28px",
                    background: "#2563eb", color: "#fff",
                    borderRadius: 50, textDecoration: "none",
                    fontWeight: 700, fontSize: "0.9rem",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    boxShadow: "0 6px 18px rgba(37,99,235,0.3)",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 10px 24px rgba(37,99,235,0.4)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 6px 18px rgba(37,99,235,0.3)";
                  }}
                >
                  Work With Us →
                </a>
                <a
                  href="#services"
                  onClick={scrollSmoothTo("#services")}
                  style={{
                    display: "inline-flex", alignItems: "center",
                    padding: "12px 28px",
                    border: "2px solid #e2e8f0", color: "#475569",
                    borderRadius: 50, textDecoration: "none",
                    fontWeight: 600, fontSize: "0.9rem",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "#2563eb";
                    e.currentTarget.style.color = "#2563eb";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "#e2e8f0";
                    e.currentTarget.style.color = "#475569";
                  }}
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes about-floatY {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-6px); }
        }
      `}</style>
    </>
  );
}