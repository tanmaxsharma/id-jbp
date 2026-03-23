"use client";
import { useEffect, useState, useRef } from "react";

const LINKS = [
  { label: "About",           href: "#about"   },
  { label: "Services",        href: "#services" },
  { label: "Why Us",          href: "#why"      },
  { label: "Success Stories", href: "#success"  },
  { label: "Contact",         href: "#contact"  },
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

const Logo = ({ atTop }: { atTop: boolean }) => (
  <a
    href="#"
    style={{
      display: "flex", alignItems: "center", gap: 10,
      textDecoration: "none", flexShrink: 0, padding: "0 8px",
    }}
  >
    <div style={{
      width: 36, height: 36,
      background: "linear-gradient(135deg, #2563eb, #0ea5e9)",
      borderRadius: 10,
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 4px 12px rgba(37,99,235,0.35)",
      flexShrink: 0,
    }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="white" />
      </svg>
    </div>
    <span style={{
      fontSize: "1.05rem", fontWeight: 800,
      color: atTop ? "#fff" : "#0f172a",
      letterSpacing: "-0.3px",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      transition: "color 0.3s ease",
    }}>
      India<span style={{ color: "#2563eb" }}>Daksh</span>
    </span>
  </a>
);

export default function Navbar() {
  const [visible,  setVisible]  = useState(true);
  const [atTop,    setAtTop]    = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setAtTop(y < 10);
      if (y < 10) {
        setVisible(true);
      } else if (y > lastY.current + 6) {
        setVisible(false);
        setMenuOpen(false);
      } else if (y < lastY.current - 6) {
        setVisible(true);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Floating Pill Navbar ── */}
      <div style={{
        position: "fixed",
        top: atTop ? 16 : 12,
        left: "50%",
        transform: `translateX(-50%) translateY(${visible ? "0" : "-120%"})`,
        zIndex: 1000,
        width: "calc(100% - 32px)",
        maxWidth: 1160,
        transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1), top 0.3s ease",
      }}>
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          padding: "0 8px",
          height: 60,
          borderRadius: 9999,
          background: atTop ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.97)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: atTop
            ? "1px solid rgba(255,255,255,0.22)"
            : "1px solid rgba(226,232,240,0.8)",
          boxShadow: atTop
            ? "0 4px 24px rgba(0,0,0,0.1)"
            : "0 8px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
          transition: "background 0.3s ease, border 0.3s ease, box-shadow 0.3s ease",
        }}>

          <Logo atTop={atTop} />

          {/* Desktop Nav Links */}
          <ul className="nav-links-desktop" style={{
            display: "flex", alignItems: "center",
            gap: 2, listStyle: "none", margin: 0, padding: 0,
          }}>
            {LINKS.map(l => (
              <li key={l.label}>
                <button
                  onClick={() => scrollTo(l.href)}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.875rem", fontWeight: 600,
                    color: atTop ? "rgba(255,255,255,0.85)" : "#475569",
                    padding: "8px 14px", borderRadius: 50,
                    transition: "color 0.2s, background 0.2s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={e => {
                    const b = e.currentTarget;
                    b.style.color = atTop ? "#fff" : "#2563eb";
                    b.style.background = atTop ? "rgba(255,255,255,0.15)" : "#eff6ff";
                  }}
                  onMouseLeave={e => {
                    const b = e.currentTarget;
                    b.style.color = atTop ? "rgba(255,255,255,0.85)" : "#475569";
                    b.style.background = "none";
                  }}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button
            onClick={() => scrollTo("#contact")}
            className="nav-cta-desktop"
            style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "10px 22px",
              background: "#0f172a", color: "#fff",
              border: "none", borderRadius: 9999,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.875rem", fontWeight: 700,
              cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0,
              boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
            }}
            onMouseEnter={e => {
              const b = e.currentTarget;
              b.style.transform = "translateY(-2px)";
              b.style.background = "#2563eb";
              b.style.boxShadow = "0 8px 22px rgba(37,99,235,0.45)";
            }}
            onMouseLeave={e => {
              const b = e.currentTarget;
              b.style.transform = "translateY(0)";
              b.style.background = "#0f172a";
              b.style.boxShadow = "0 4px 14px rgba(0,0,0,0.25)";
            }}
          >
            Get Started →
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            className="nav-hamburger"
            style={{
              display: "none", flexDirection: "column", gap: 5,
              background: "none", border: "none",
              cursor: "pointer", padding: "8px 12px", flexShrink: 0,
            }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: "block", width: 22, height: 2,
                background: atTop ? "#fff" : "#0f172a",
                borderRadius: 2,
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transform: menuOpen
                  ? i === 0 ? "translateY(7px) rotate(45deg)"
                  : i === 2 ? "translateY(-7px) rotate(-45deg)"
                  : "scaleX(0)"
                  : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu Drawer ── */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 999,
        pointerEvents: menuOpen ? "all" : "none",
      }}>
        {/* Backdrop */}
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "absolute", inset: 0,
            background: "rgba(2,8,30,0.65)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            opacity: menuOpen ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Slide-in panel */}
        <div style={{
          position: "absolute",
          top: 12, left: 12, right: 12,
          borderRadius: 24,
          background: "rgba(255,255,255,0.99)",
          boxShadow: "0 24px 64px rgba(0,0,0,0.2)",
          padding: "20px 20px 28px",
          transform: menuOpen ? "translateY(0) scale(1)" : "translateY(-16px) scale(0.97)",
          opacity: menuOpen ? 1 : 0,
          transition: "transform 0.35s cubic-bezier(0.34,1.2,0.64,1), opacity 0.3s ease",
        }}>
          {/* Mobile header row */}
          <div style={{
            display: "flex", alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20, paddingBottom: 16,
            borderBottom: "1px solid #f1f5f9",
          }}>
            <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
              <div style={{
                width: 34, height: 34,
                background: "linear-gradient(135deg,#2563eb,#0ea5e9)",
                borderRadius: 9,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="white" />
                </svg>
              </div>
              <span style={{
                fontSize: "1rem", fontWeight: 800, color: "#0f172a",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}>
                India<span style={{ color: "#2563eb" }}>Daksh</span>
              </span>
            </a>

            <button
              onClick={() => setMenuOpen(false)}
              style={{
                width: 36, height: 36, borderRadius: "50%",
                background: "#f1f5f9", border: "none",
                cursor: "pointer", display: "flex",
                alignItems: "center", justifyContent: "center",
                color: "#475569",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <ul style={{
            listStyle: "none", margin: 0, padding: 0,
            display: "flex", flexDirection: "column", gap: 2,
          }}>
            {LINKS.map(l => (
              <li key={l.label}>
                <button
                  onClick={() => { scrollTo(l.href); setMenuOpen(false); }}
                  style={{
                    display: "flex", alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%", textAlign: "left",
                    background: "none", border: "none", cursor: "pointer",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "1.05rem", fontWeight: 600, color: "#334155",
                    padding: "13px 12px", borderRadius: 12,
                    transition: "background 0.2s, color 0.2s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "#eff6ff";
                    e.currentTarget.style.color = "#2563eb";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "none";
                    e.currentTarget.style.color = "#334155";
                  }}
                >
                  {l.label}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" opacity="0.4">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={() => { scrollTo("#contact"); setMenuOpen(false); }}
            style={{
              width: "100%", marginTop: 16, padding: "15px",
              background: "#2563eb", color: "#fff",
              border: "none", borderRadius: 14,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "1rem", fontWeight: 700, cursor: "pointer",
              boxShadow: "0 6px 20px rgba(37,99,235,0.35)",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#1d4ed8")}
            onMouseLeave={e => (e.currentTarget.style.background = "#2563eb")}
          >
            Get Started →
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .nav-links-desktop { display: none !important; }
          .nav-cta-desktop   { display: none !important; }
          .nav-hamburger     { display: flex !important; }
        }
        @media (min-width: 901px) {
          .nav-hamburger { display: none !important; }
        }
      `}</style>
    </>
  );
}