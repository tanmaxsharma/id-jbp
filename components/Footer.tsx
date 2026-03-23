"use client";
import { useState } from "react";

const SOCIALS = [
  { label: "Facebook", href: "#", svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
  { label: "Twitter", href: "#", svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { label: "LinkedIn", href: "#", svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
  { label: "Instagram", href: "#", svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
  { label: "YouTube", href: "#", svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20.06 12 20.06 12 20.06s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg> },
];

const LINKS = {
  Company: ["About Us", "Our Team", "Success Stories", "Careers"],
  Services: ["IT Support", "Network Solutions", "Cyber Security", "Software Dev"],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subbed, setSubbed] = useState(false);

  const handleSub = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubbed(true);
    setEmail("");
    setTimeout(() => setSubbed(false), 3500);
  };

  const sl: React.CSSProperties = { /* social link base */ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: "50%", border: "1.5px solid #e2e8f0", color: "#64748b", textDecoration: "none", transition: "all 0.2s ease" };

  return (
    <>
      {/* CTA Banner */}
      <div style={{
        background: "linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 100%)",
        padding: "clamp(48px,8vw,80px) 24px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.6rem,4vw,2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
            Ready to Transform Your Business?
          </h2>
          <p style={{ fontSize: "clamp(0.95rem,1.8vw,1.1rem)", color: "rgba(255,255,255,0.85)", marginBottom: 32, lineHeight: 1.7 }}>
            Schedule a free consultation and discover how we can optimize your IT infrastructure.
          </p>
          <a href="#contact" onClick={e => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "14px 36px",
              background: "#fff", color: "#1d4ed8",
              borderRadius: 50, textDecoration: "none",
              fontWeight: 800, fontSize: "0.95rem",
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 14px 32px rgba(0,0,0,0.2)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)"; }}
          >
            Get Started Today →
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ background: "#0f172a", padding: "72px 0 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "2fr repeat(2, 1fr) 1.8fr",
            gap: "clamp(32px,4vw,56px)",
            marginBottom: 56,
          }} className="footer-grid">

            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 36, height: 36, background: "linear-gradient(135deg,#2563eb,#0ea5e9)", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="white" /></svg>
                </div>
                <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Daksh<span style={{ color: "#38bdf8" }}>India</span>
                </span>
              </div>
              <p style={{ fontSize: "0.84rem", color: "#94a3b8", lineHeight: 1.75, marginBottom: 24, maxWidth: 260 }}>
                Your trusted IT partner delivering innovative technology solutions that drive business growth across India.
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {SOCIALS.map(s => (
                  <a key={s.label} href={s.href} aria-label={s.label}
                    style={{ ...sl }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "#2563eb";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "#2563eb";
                      (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                      (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "none";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "#e2e8f0";
                      (e.currentTarget as HTMLAnchorElement).style.color = "#64748b";
                      (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                    }}
                  >
                    {s.svg}
                  </a>
                ))}
              </div>
            </div>

            {/* Link groups */}
            {Object.entries(LINKS).map(([group, items]) => (
              <div key={group}>
                <h4 style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "#fff", marginBottom: 20 }}>
                  {group}
                </h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {items.map(item => (
                    <li key={item}>
                      <a href="#" style={{ fontSize: "0.85rem", color: "#94a3b8", textDecoration: "none", display: "inline-block", transition: "color 0.2s, padding-left 0.2s" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; (e.currentTarget as HTMLAnchorElement).style.paddingLeft = "4px"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8"; (e.currentTarget as HTMLAnchorElement).style.paddingLeft = "0"; }}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter */}
            <div>
              <h4 style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "#fff", marginBottom: 14 }}>
                Stay Updated
              </h4>
              <p style={{ fontSize: "0.83rem", color: "#94a3b8", lineHeight: 1.7, marginBottom: 16 }}>
                Subscribe for IT tips, security updates, and service announcements.
              </p>
              {subbed ? (
                <div style={{ color: "#4ade80", fontSize: "0.88rem", fontWeight: 600 }}>✅ You&apos;re subscribed!</div>
              ) : (
                <form onSubmit={handleSub} style={{ display: "flex", gap: 8 }}>
                  <input
                    type="email" placeholder="your@email.com" value={email}
                    onChange={e => setEmail(e.target.value)} required
                    style={{
                      flex: 1, minWidth: 0, padding: "10px 14px",
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 8, color: "#fff",
                      fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.85rem", outline: "none",
                    }}
                  />
                  <button type="submit" style={{
                    padding: "10px 16px", background: "#2563eb", border: "none",
                    borderRadius: 8, color: "#fff",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.82rem", fontWeight: 700, cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = "#1d4ed8"}
                    onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = "#2563eb"}
                  >
                    Subscribe
                  </button>
                </form>
              )}
              {/* Contact quick */}
              <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 6 }}>
                <a href="tel:+919302742400" style={{ fontSize: "0.82rem", color: "#94a3b8", textDecoration: "none" }}>📞 +91 9302742400</a>
                <a href="mailto:info@indiadaksh.com" style={{ fontSize: "0.82rem", color: "#94a3b8", textDecoration: "none" }}>✉️ info@indiadaksh.com</a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            padding: "24px 0", display: "flex",
            justifyContent: "space-between", alignItems: "center",
            flexWrap: "wrap", gap: 12,
          }}>
            <p style={{ fontSize: "0.75rem", color: "#475569", letterSpacing: "0.5px" }}>
              COPYRIGHT © {new Date().getFullYear()} DAKSH INDIA — ALL RIGHTS RESERVED
            </p>
            <div style={{ display: "flex", gap: 20 }}>
              {["Privacy Policy", "Terms of Service"].map(t => (
                <a key={t} href="#" style={{ fontSize: "0.75rem", color: "#475569", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#fff"}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "#475569"}
                >{t}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/919302742400?text=Hi%2C%20I'm%20interested%20in%20your%20IT%20services"
        target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
        style={{
          position: "fixed", bottom: 28, right: 28, zIndex: 999,
          width: 56, height: 56, borderRadius: "50%",
          background: "#25d366",
          display: "flex", alignItems: "center", justifyContent: "center",
          textDecoration: "none",
          boxShadow: "0 8px 28px rgba(37,211,102,0.4)",
          transition: "transform 0.2s, box-shadow 0.2s",
          animation: "wap 2.5s ease-in-out infinite",
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.12)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)"; }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>
      </a>

      <style>{`
        @keyframes wap {
          0%,100% { box-shadow: 0 8px 28px rgba(37,211,102,0.4); }
          50% { box-shadow: 0 8px 44px rgba(37,211,102,0.65); }
        }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}