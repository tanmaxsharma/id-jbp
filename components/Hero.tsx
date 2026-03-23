"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const BG =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172&auto=format&fit=crop";

const TRUST_TAGS = ["Enterprises", "SMEs", "Startups", "Government", "NGOs"];

export default function Hero() {
  const heroRef  = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const h1Ref    = useRef<HTMLHeadingElement>(null);
  const paraRef  = useRef<HTMLParagraphElement>(null);
  const btnsRef  = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.35 });

      tl.fromTo(badgeRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, ease: "power3.out" })

        .fromTo(h1Ref.current,
          { y: 52, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.95, ease: "power3.out" },
          "-=0.35")

        .fromTo(paraRef.current,
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.55")

        .fromTo(btnsRef.current,
          { y: 22, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.45")

        .fromTo(
          pillsRef.current ? Array.from(pillsRef.current.children) : [],
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45, stagger: 0.08, ease: "power3.out" },
          "-=0.3"
        );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 80,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section ref={heroRef} style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: 72,
      }}>

        {/* Background image */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: `url("${BG}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} />

        {/* Multi-layer overlay */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(115deg, rgba(2,8,30,0.97) 0%, rgba(5,15,55,0.92) 40%, rgba(10,25,80,0.70) 68%, rgba(2,8,30,0.50) 100%)",
        }} />

        {/* Grid texture */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 2,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          pointerEvents: "none",
        }} />

        {/* Blue radial glow bottom-left */}
        <div style={{
          position: "absolute", bottom: -120, left: -120, zIndex: 2,
          width: "clamp(300px,55vw,620px)",
          height: "clamp(300px,55vw,620px)",
          background: "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 65%)",
          borderRadius: "50%", pointerEvents: "none",
        }} />

        {/* Cyan glow top-right */}
        <div style={{
          position: "absolute", top: -60, right: -60, zIndex: 2,
          width: "clamp(200px,35vw,420px)",
          height: "clamp(200px,35vw,420px)",
          background: "radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 65%)",
          borderRadius: "50%", pointerEvents: "none",
        }} />

        {/* Content */}
        <div style={{
          position: "relative", zIndex: 10,
          width: "100%", maxWidth: 1280,
          margin: "0 auto",
          padding: "clamp(48px,8vw,110px) clamp(20px,5vw,48px) clamp(100px,14vw,160px)",
        }}>

          {/* Live badge */}
          <div ref={badgeRef} style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "8px 20px",
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.18)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            borderRadius: 50,
            marginBottom: "clamp(22px,3vw,36px)",
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
              background: "#38bdf8",
              boxShadow: "0 0 0 3px rgba(56,189,248,0.28)",
              display: "inline-block",
              animation: "heroPulse 2s infinite",
            }} />
            <span style={{
              fontSize: "clamp(0.6rem,1.3vw,0.75rem)", fontWeight: 700,
              color: "#bae6fd", letterSpacing: "1.8px", textTransform: "uppercase",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              IT Solutions &amp; Managed Services — Jabalpur, MP
            </span>
          </div>

          {/* H1 */}
          <h1 ref={h1Ref} style={{
            fontSize: "clamp(2.1rem,6.8vw,5.4rem)",
            fontWeight: 800, lineHeight: 1.07,
            color: "#ffffff", letterSpacing: "-1.5px",
            marginBottom: "clamp(18px,2.5vw,30px)",
            maxWidth: "clamp(300px,80vw,840px)",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            Powering Businesses<br />
            With{" "}
            <span style={{
              background: "linear-gradient(135deg, #60a5fa 0%, #38bdf8 50%, #67e8f9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Smart IT Solutions
            </span>
          </h1>

          {/* Paragraph */}
          <p ref={paraRef} style={{
            fontSize: "clamp(0.9rem,1.75vw,1.1rem)",
            color: "rgba(226,232,240,0.78)", lineHeight: 1.85,
            maxWidth: "clamp(280px,62vw,540px)",
            marginBottom: "clamp(32px,5vw,52px)",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            India Daksh delivers enterprise-grade managed services, cybersecurity,
            network infrastructure, and software development — keeping your business
            secure, scalable, and always online.
          </p>

          {/* Buttons */}
          <div ref={btnsRef} className="hero-btns" style={{
            display: "flex", gap: "clamp(10px,2vw,16px)",
            flexWrap: "wrap",
            marginBottom: "clamp(36px,5vw,56px)",
          }}>
            <button
              onClick={() => scrollTo("#contact")}
              className="hero-btn-primary"
              style={{
                display: "inline-flex", alignItems: "center",
                justifyContent: "center", gap: 10,
                padding: "clamp(13px,1.6vw,17px) clamp(26px,3.2vw,40px)",
                background: "linear-gradient(135deg,#2563eb,#0ea5e9)",
                color: "#fff", border: "none", borderRadius: 50,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(0.85rem,1.5vw,0.98rem)",
                fontWeight: 700, cursor: "pointer",
                boxShadow: "0 8px 32px rgba(37,99,235,0.52)",
                transition: "transform 0.22s ease, box-shadow 0.22s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(37,99,235,0.65)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(37,99,235,0.52)";
              }}
            >
              Free Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <button
              onClick={() => scrollTo("#services")}
              className="hero-btn-ghost"
              style={{
                display: "inline-flex", alignItems: "center",
                justifyContent: "center", gap: 10,
                padding: "clamp(13px,1.6vw,17px) clamp(26px,3.2vw,40px)",
                background: "rgba(255,255,255,0.07)",
                color: "#f1f5f9",
                border: "1.5px solid rgba(255,255,255,0.26)",
                borderRadius: 50,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(0.85rem,1.5vw,0.98rem)",
                fontWeight: 600, cursor: "pointer",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                transition: "background 0.22s, border-color 0.22s, transform 0.22s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.14)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.55)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.26)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Explore Services
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll-ind" style={{
          position: "absolute",
          bottom: "clamp(88px,13vw,130px)",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: 8,
          zIndex: 10,
          animation: "fadeUpScroll 0.9s ease 2.4s both",
        }}>
          <div style={{
            width: 22, height: 36,
            border: "1.5px solid rgba(255,255,255,0.22)",
            borderRadius: 12,
            display: "flex", justifyContent: "center", paddingTop: 7,
          }}>
            <div style={{
              width: 3.5, height: 8,
              background: "#38bdf8",
              borderRadius: 2,
              animation: "scrollDot 2s ease-in-out infinite",
            }} />
          </div>
          <span style={{
            fontSize: "0.58rem", fontWeight: 700,
            color: "rgba(255,255,255,0.32)",
            letterSpacing: "2.5px", textTransform: "uppercase",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>Scroll</span>
        </div>

        {/* Trusted-by strip */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 10,
          background: "rgba(5,12,36,0.65)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "clamp(12px,1.8vw,18px) clamp(20px,5vw,48px)",
          display: "flex", alignItems: "center",
          gap: "clamp(10px,2vw,28px)",
          flexWrap: "wrap",
        }}>
          <span style={{
            fontSize: "clamp(0.58rem,1vw,0.68rem)", fontWeight: 700,
            color: "rgba(255,255,255,0.35)", textTransform: "uppercase",
            letterSpacing: "2px", whiteSpace: "nowrap",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            Trusted by
          </span>
          <div style={{ width: 1, height: 14, background: "rgba(255,255,255,0.12)", flexShrink: 0 }} />
          {/* Pills ref is attached here so GSAP can stagger them */}
          <div ref={pillsRef} style={{ display: "flex", gap: "clamp(6px,1vw,12px)", flexWrap: "wrap" }}>
            {TRUST_TAGS.map(t => (
              <span key={t} style={{
                fontSize: "clamp(0.68rem,1.2vw,0.78rem)", fontWeight: 600,
                color: "rgba(255,255,255,0.58)",
                padding: "4px 14px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 50, whiteSpace: "nowrap",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes heroPulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(56,189,248,0.28); }
          50%      { box-shadow: 0 0 0 9px rgba(56,189,248,0.05); }
        }
        @keyframes scrollDot {
          0%,100% { transform: translateY(0); opacity: 1; }
          50%      { transform: translateY(10px); opacity: 0.18; }
        }
        @keyframes fadeUpScroll {
          from { opacity: 0; transform: translateX(-50%) translateY(14px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @media (max-width: 768px) {
          .hero-scroll-ind { display: none !important; }
        }
        @media (max-width: 480px) {
          .hero-btns { flex-direction: column !important; }
          .hero-btn-primary, .hero-btn-ghost { width: 100% !important; }
        }
      `}</style>
    </>
  );
}