"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const STATS = [
  { number: "500+", label: "Clients Served" },
  { number: "99.9%", label: "Uptime SLA" },
  { number: "24/7", label: "Expert Support" },
  { number: "10+", label: "Years Experience" },
];

const BG =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172&auto=format&fit=crop";

export default function Hero() {
  const heroRef   = useRef<HTMLElement>(null);
  const badgeRef  = useRef<HTMLDivElement>(null);
  const h1Ref     = useRef<HTMLHeadingElement>(null);
  const paraRef   = useRef<HTMLParagraphElement>(null);
  const btnsRef   = useRef<HTMLDivElement>(null);
  const statsRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 });
      tl.fromTo(badgeRef.current,  { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" })
        .fromTo(h1Ref.current,     { y: 48, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }, "-=0.4")
        .fromTo(paraRef.current,   { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, "-=0.5")
        .fromTo(btnsRef.current,   { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.4")
        .fromTo(
          statsRef.current ? Array.from(statsRef.current.children) : [],
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out" },
          "-=0.3"
        );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <>
      <section ref={heroRef} style={{
        position: "relative", minHeight: "100vh",
        display: "flex", alignItems: "center",
        overflow: "hidden", paddingTop: 72,
      }}>

        {/* BG image */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: `url("${BG}")`,
          backgroundSize: "cover", backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }} />

        {/* Dark overlay */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(110deg, rgba(2,8,30,0.94) 0%, rgba(5,15,55,0.88) 45%, rgba(10,25,80,0.65) 70%, rgba(2,8,30,0.45) 100%)",
        }} />

        {/* Blue glow accent */}
        <div style={{
          position: "absolute", bottom: -100, left: -100, zIndex: 2,
          width: "clamp(280px,50vw,580px)", height: "clamp(280px,50vw,580px)",
          background: "radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 65%)",
          borderRadius: "50%", pointerEvents: "none",
        }} />

        {/* Grid texture */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 2,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px", pointerEvents: "none",
        }} />

        {/* Content */}
        <div style={{
          position: "relative", zIndex: 10,
          width: "100%", maxWidth: 1280,
          margin: "0 auto",
          padding: "clamp(40px,8vw,100px) clamp(20px,5vw,48px) clamp(100px,14vw,160px)",
        }}>

          {/* Badge */}
          <div ref={badgeRef} style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "8px 18px",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
            borderRadius: 50, marginBottom: "clamp(20px,3vw,32px)",
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
              background: "#38bdf8", display: "inline-block",
              boxShadow: "0 0 0 3px rgba(56,189,248,0.3)",
              animation: "heroPulse 2s infinite",
            }} />
            <span style={{
              fontSize: "clamp(0.62rem,1.4vw,0.78rem)", fontWeight: 700,
              color: "#e0f2fe", letterSpacing: "1.5px", textTransform: "uppercase",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              IT Solutions &amp; Managed Services
            </span>
          </div>

          {/* H1 */}
          <h1 ref={h1Ref} style={{
            fontSize: "clamp(2rem,6.5vw,5.2rem)",
            fontWeight: 800, lineHeight: 1.08,
            color: "#ffffff", letterSpacing: "-1px",
            marginBottom: "clamp(14px,2.5vw,28px)",
            maxWidth: "clamp(300px,80vw,820px)",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            Powering Businesses<br />
            With{" "}
            <span style={{
              background: "linear-gradient(135deg,#60a5fa 0%,#38bdf8 50%,#67e8f9 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Smart IT Solutions
            </span>
          </h1>

          {/* Para */}
          <p ref={paraRef} style={{
            fontSize: "clamp(0.9rem,1.8vw,1.12rem)",
            color: "rgba(226,232,240,0.82)", lineHeight: 1.8,
            maxWidth: "clamp(280px,65vw,560px)",
            marginBottom: "clamp(28px,4vw,48px)",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            Daksh India delivers enterprise-grade managed services, cybersecurity,
            network infrastructure, and software development — keeping your business
            secure, scalable, and always online.
          </p>

          {/* Buttons */}
          <div ref={btnsRef} className="hero-btns" style={{
            display: "flex", gap: "clamp(10px,2vw,16px)",
            flexWrap: "wrap", marginBottom: "clamp(44px,7vw,76px)",
          }}>
            <button onClick={() => scrollTo("#contact")} className="btn-primary-hero" style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
              padding: "clamp(12px,1.5vw,16px) clamp(22px,3vw,36px)",
              background: "#2563eb", color: "#fff",
              border: "none", borderRadius: 50,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(0.85rem,1.5vw,1rem)", fontWeight: 700, cursor: "pointer",
              boxShadow: "0 8px 28px rgba(37,99,235,0.5)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              whiteSpace: "nowrap",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 14px 36px rgba(37,99,235,0.6)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 28px rgba(37,99,235,0.5)"; }}
            >
              Free Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <button onClick={() => scrollTo("#services")} className="btn-ghost-hero" style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
              padding: "clamp(12px,1.5vw,16px) clamp(22px,3vw,36px)",
              background: "rgba(255,255,255,0.08)", color: "#fff",
              border: "1.5px solid rgba(255,255,255,0.3)", borderRadius: 50,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(0.85rem,1.5vw,1rem)", fontWeight: 600, cursor: "pointer",
              backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
              transition: "background 0.2s ease, border-color 0.2s ease, transform 0.2s ease",
              whiteSpace: "nowrap",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.15)"; (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.6)"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.3)"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}
            >
              Explore Services
            </button>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="hero-stats" style={{
            display: "flex", flexWrap: "wrap",
            gap: "clamp(16px,3vw,0px)",
          }}>
            {STATS.map((s, i) => (
              <div key={s.label} className="hero-stat-item" style={{
                paddingRight: "clamp(18px,3vw,40px)",
                marginRight: i < STATS.length - 1 ? "clamp(18px,3vw,40px)" : 0,
                borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none",
                minWidth: "clamp(70px,14vw,110px)",
              }}>
                <div style={{
                  fontSize: "clamp(1.5rem,4vw,2.6rem)", fontWeight: 800,
                  lineHeight: 1, marginBottom: 5,
                  background: "linear-gradient(135deg,#60a5fa,#38bdf8)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}>
                  {s.number}
                </div>
                <div style={{
                  fontSize: "clamp(0.6rem,1.1vw,0.72rem)", fontWeight: 600,
                  color: "rgba(226,232,240,0.55)", textTransform: "uppercase", letterSpacing: "1px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll-ind" style={{
          position: "absolute", bottom: "clamp(80px,12vw,120px)", left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
          zIndex: 10, animation: "fadeUpScroll 1s ease 2.2s both",
        }}>
          <div style={{
            width: 22, height: 36, border: "2px solid rgba(255,255,255,0.25)",
            borderRadius: 12, display: "flex", justifyContent: "center", paddingTop: 6,
          }}>
            <div style={{
              width: 4, height: 8, background: "#38bdf8", borderRadius: 2,
              animation: "scrollDot 2s ease-in-out infinite",
            }} />
          </div>
          <span style={{
            fontSize: "0.6rem", fontWeight: 700, color: "rgba(255,255,255,0.4)",
            letterSpacing: "2px", textTransform: "uppercase",
          }}>Scroll</span>
        </div>

        {/* Bottom trusted strip */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 10,
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "clamp(10px,1.8vw,18px) clamp(20px,5vw,48px)",
          display: "flex", alignItems: "center", gap: "clamp(12px,2.5vw,32px)",
          flexWrap: "wrap",
        }}>
          <span style={{
            fontSize: "clamp(0.6rem,1.1vw,0.72rem)", fontWeight: 700,
            color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1.5px",
            whiteSpace: "nowrap",
          }}>
            Trusted by
          </span>
          {["Enterprises", "SMEs", "Startups", "Government", "NGOs"].map(t => (
            <span key={t} style={{
              fontSize: "clamp(0.7rem,1.3vw,0.82rem)", fontWeight: 600,
              color: "rgba(255,255,255,0.65)",
              padding: "4px 14px",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 50, whiteSpace: "nowrap",
            }}>{t}</span>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes heroPulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(56,189,248,0.3); }
          50%      { box-shadow: 0 0 0 8px rgba(56,189,248,0.06); }
        }
        @keyframes scrollDot {
          0%,100% { transform: translateY(0); opacity: 1; }
          50%      { transform: translateY(9px); opacity: 0.2; }
        }
        @keyframes fadeUpScroll {
          from { opacity: 0; transform: translateX(-50%) translateY(14px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        /* ── Tablet ── */
        @media (max-width: 768px) {
          .hero-scroll-ind { display: none !important; }
        }

        /* ── Mobile ── */
        @media (max-width: 480px) {
          .hero-btns { flex-direction: column !important; gap: 12px !important; }
          .btn-primary-hero,
          .btn-ghost-hero {
            width: 100% !important;
            justify-content: center !important;
          }
          .hero-stats {
            gap: 16px 0 !important;
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            padding-bottom: 6px;
            -webkit-overflow-scrolling: touch;
          }
          .hero-stats::-webkit-scrollbar { display: none; }
          .hero-stat-item {
            flex-shrink: 0;
          }
        }
      `}</style>
    </>
  );
}