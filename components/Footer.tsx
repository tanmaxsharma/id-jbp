"use client";
import { useState } from "react";

const SOCIALS = [
  {
    label: "Facebook", href: "#",
    svg: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X", href: "#",
    svg: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn", href: "#",
    svg: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram", href: "#",
    svg: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "YouTube", href: "#",
    svg: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20.06 12 20.06 12 20.06s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
];

const NAV_LINKS = {
  Company: [
    { label: "About Us",        href: "#about"   },
    { label: "Success Stories", href: "#success" },
    { label: "Why Choose Us",   href: "#why"     },
    { label: "Contact",         href: "#contact" },
  ],
  Services: [
    { label: "IT Support",       href: "#services" },
    { label: "Network Solutions",href: "#services" },
    { label: "Cyber Security",   href: "#services" },
    { label: "Software Dev",     href: "#services" },
    { label: "BPO Services",     href: "#services" },
    { label: "KPO Services",     href: "#services" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subbed, setSubbed] = useState(false);

  const handleSub = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubbed(true);
    setEmail("");
    setTimeout(() => setSubbed(false), 4000);
  };

  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        /* Scoped to footer to avoid global conflicts */
        .ft-root {
          background: #0b1222;
          font-family: 'Plus Jakarta Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .ft-root::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px);
          background-size: 56px 56px;
          pointer-events: none;
        }
        .ft-root::after {
          content: '';
          position: absolute;
          top: -80px; left: -80px;
          width: 480px; height: 320px;
          background: radial-gradient(ellipse at top left, rgba(37,99,235,0.12) 0%, transparent 65%);
          pointer-events: none;
        }
        .ft-inner {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto;
          padding: 72px 32px 0;
          box-sizing: border-box;
        }
        .ft-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.75fr;
          gap: clamp(32px,4vw,64px);
          padding-bottom: 56px;
        }
        .ft-logo-row {
          display: flex; align-items: center; gap: 11px;
          margin-bottom: 18px;
        }
        .ft-logo-icon {
          width: 38px; height: 38px; flex-shrink: 0;
          background: linear-gradient(135deg,#2563eb,#0ea5e9);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 18px rgba(37,99,235,0.45);
        }
        .ft-logo-name {
          font-size: 1.15rem; font-weight: 800;
          color: #f1f5f9; letter-spacing: -0.3px;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .ft-logo-name span { color: #38bdf8; }
        .ft-desc {
          font-size: 0.83rem; color: #64748b;
          line-height: 1.8; margin-bottom: 26px;
          max-width: 268px;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .ft-socials { display: flex; gap: 9px; flex-wrap: wrap; margin-bottom: 28px; }
        .ft-soc-btn {
          width: 36px; height: 36px; border-radius: 9px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.03);
          color: #475569;
          display: flex; align-items: center; justify-content: center;
          text-decoration: none;
          transition: background 0.22s, border-color 0.22s, color 0.22s, transform 0.22s, box-shadow 0.22s;
        }
        .ft-soc-btn:hover {
          background: #2563eb;
          border-color: #2563eb;
          color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 6px 18px rgba(37,99,235,0.45);
        }
        .ft-tags { display: flex; gap: 7px; flex-wrap: wrap; }
        .ft-tag {
          font-size: 0.67rem; font-weight: 700;
          letter-spacing: 0.5px; text-transform: uppercase;
          color: #3b82f6;
          background: rgba(37,99,235,0.09);
          border: 1px solid rgba(37,99,235,0.2);
          border-radius: 5px; padding: 4px 10px;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .ft-col-head {
          font-size: 0.68rem; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          color: #e2e8f0; margin-bottom: 20px;
          padding-bottom: 12px; position: relative;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .ft-col-head::after {
          content: '';
          position: absolute; bottom: 0; left: 0;
          width: 22px; height: 2px;
          background: linear-gradient(90deg,#2563eb,#0ea5e9);
          border-radius: 2px;
        }
        .ft-link-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }
        .ft-link-list li a {
          font-size: 0.84rem; color: #64748b; text-decoration: none;
          display: inline-flex; align-items: center;
          transition: color 0.2s, padding-left 0.2s;
          font-family: 'Plus Jakarta Sans', sans-serif;
          position: relative; padding-left: 0;
        }
        .ft-link-list li a:hover { color: #cbd5e1; padding-left: 14px; }
        .ft-link-list li a::before {
          content: '›';
          position: absolute; left: 0;
          font-size: 1rem; color: #2563eb;
          opacity: 0;
          transition: opacity 0.2s;
          line-height: 1;
        }
        .ft-link-list li a:hover::before { opacity: 1; }
        .ft-nl-desc {
          font-size: 0.82rem; color: #64748b;
          line-height: 1.75; margin-bottom: 16px;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .ft-nl-form { display: flex; flex-direction: column; gap: 9px; margin-bottom: 22px; }
        .ft-nl-input {
          width: 100%; padding: 11px 15px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 9px; color: #e2e8f0;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.83rem; outline: none;
          transition: border-color 0.2s, background 0.2s;
          box-sizing: border-box;
        }
        .ft-nl-input::placeholder { color: #2d3f55; }
        .ft-nl-input:focus {
          border-color: rgba(37,99,235,0.6);
          background: rgba(37,99,235,0.05);
        }
        .ft-nl-btn {
          width: 100%; padding: 11px;
          background: linear-gradient(135deg,#2563eb 0%,#0ea5e9 100%);
          border: none; border-radius: 9px;
          color: #fff; font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.83rem; font-weight: 700;
          cursor: pointer; letter-spacing: 0.3px;
          transition: opacity 0.2s, transform 0.2s;
          box-shadow: 0 4px 16px rgba(37,99,235,0.35);
        }
        .ft-nl-btn:hover { opacity: 0.87; transform: translateY(-1px); }
        .ft-nl-success {
          display: flex; align-items: center; gap: 9px;
          padding: 11px 14px;
          background: rgba(74,222,128,0.07);
          border: 1px solid rgba(74,222,128,0.22);
          border-radius: 9px;
          font-size: 0.83rem; color: #4ade80; font-weight: 600;
          margin-bottom: 22px;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .ft-contacts { display: flex; flex-direction: column; gap: 9px; }
        .ft-contact-a {
          display: flex; align-items: center; gap: 10px;
          font-size: 0.81rem; color: #64748b; text-decoration: none;
          transition: color 0.2s;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .ft-contact-a:hover { color: #93c5fd; }
        .ft-contact-icon {
          width: 28px; height: 28px; flex-shrink: 0;
          background: rgba(37,99,235,0.09);
          border: 1px solid rgba(37,99,235,0.18);
          border-radius: 7px;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.75rem;
        }
        .ft-divider {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.055);
          margin: 0;
        }
        .ft-bottom {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto;
          padding: 20px 32px;
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 12px;
          box-sizing: border-box;
        }
        .ft-copy {
          font-size: 0.72rem; color: #334155; letter-spacing: 0.4px;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .ft-copy b { color: #3b82f6; font-weight: 700; }
        .ft-legal { display: flex; align-items: center; gap: 6px; }
        .ft-legal a {
          font-size: 0.72rem; color: #334155; text-decoration: none;
          font-family: 'Plus Jakarta Sans', sans-serif;
          transition: color 0.2s;
        }
        .ft-legal a:hover { color: #93c5fd; }
        .ft-dot {
          width: 3px; height: 3px; border-radius: 50%;
          background: #1e293b; flex-shrink: 0;
        }

        /* WhatsApp FAB — kept above most content but with safe zone on mobile */
        .ft-wab {
          position: fixed;
          bottom: 24px; right: 24px;
          z-index: 998;
          width: 52px; height: 52px; border-radius: 50%;
          background: #25d366;
          display: flex; align-items: center; justify-content: center;
          text-decoration: none;
          box-shadow: 0 6px 24px rgba(37,211,102,0.42);
          transition: transform 0.22s, box-shadow 0.22s;
          animation: wab-glow 3s ease-in-out infinite;
        }
        .ft-wab:hover {
          transform: scale(1.1);
          box-shadow: 0 10px 36px rgba(37,211,102,0.6);
          animation: none;
        }
        @keyframes wab-glow {
          0%,100% { box-shadow: 0 6px 24px rgba(37,211,102,0.42); }
          50%      { box-shadow: 0 6px 36px rgba(37,211,102,0.6), 0 0 0 7px rgba(37,211,102,0.08); }
        }
        /* On very small screens push FAB up to avoid overlapping bottom browser UI */
        @media (max-width: 480px) {
          .ft-wab { bottom: 16px; right: 16px; width: 46px; height: 46px; }
        }

        @media (max-width: 1024px) {
          .ft-grid { grid-template-columns: 1.6fr 1fr 1fr; }
          .ft-nl-col { grid-column: 1 / -1; max-width: 460px; }
        }
        @media (max-width: 700px) {
          .ft-grid { grid-template-columns: 1fr 1fr; }
          .ft-brand-col { grid-column: 1 / -1; }
          .ft-nl-col { grid-column: 1 / -1; max-width: 100%; }
          .ft-inner { padding: 56px 20px 0; }
          .ft-bottom { padding: 18px 20px; flex-direction: column; text-align: center; }
          .ft-legal { justify-content: center; }
        }
        @media (max-width: 420px) {
          .ft-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <footer className="ft-root">
        <div className="ft-inner">
          <div className="ft-grid">

            {/* Brand */}
            <div className="ft-brand-col">
              <div className="ft-logo-row">
                <div className="ft-logo-icon">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="white" />
                  </svg>
                </div>
                <span className="ft-logo-name">
                  India<span>Daksh</span>
                </span>
              </div>
              <p className="ft-desc">
                Your trusted IT partner delivering innovative technology solutions
                that drive business growth across India.
              </p>
              <div className="ft-socials">
                {SOCIALS.map(s => (
                  <a key={s.label} href={s.href} aria-label={s.label} className="ft-soc-btn">
                    {s.svg}
                  </a>
                ))}
              </div>
              <div className="ft-tags">
                <span className="ft-tag">ISO Certified</span>
                <span className="ft-tag">MSME Registered</span>
                <span className="ft-tag">GST Compliant</span>
              </div>
            </div>

            {/* Company links */}
            <div>
              <h4 className="ft-col-head">Company</h4>
              <ul className="ft-link-list">
                {NAV_LINKS.Company.map(item => (
                  <li key={item.label}><a href={item.href}>{item.label}</a></li>
                ))}
              </ul>
            </div>

            {/* Services links */}
            <div>
              <h4 className="ft-col-head">Services</h4>
              <ul className="ft-link-list">
                {NAV_LINKS.Services.map(item => (
                  <li key={item.label}><a href={item.href}>{item.label}</a></li>
                ))}
              </ul>
            </div>

            {/* Newsletter + quick contacts */}
            <div className="ft-nl-col">
              <h4 className="ft-col-head">Stay Updated</h4>
              <p className="ft-nl-desc">
                Subscribe for IT tips, security updates, and service announcements.
              </p>

              {subbed ? (
                <div className="ft-nl-success">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="#4ade80" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  You&apos;re subscribed. Welcome aboard!
                </div>
              ) : (
                <form onSubmit={handleSub} className="ft-nl-form">
                  <input
                    className="ft-nl-input"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="ft-nl-btn">
                    Subscribe →
                  </button>
                </form>
              )}

              <div className="ft-contacts">
                <a href="tel:+919302742400" className="ft-contact-a">
                  <span className="ft-contact-icon">📞</span>
                  +91 93027 42400
                </a>
                <a href="mailto:info@indiadaksh.com" className="ft-contact-a">
                  <span className="ft-contact-icon">✉️</span>
                  info@indiadaksh.com
                </a>
                <a href="#about" className="ft-contact-a">
                  <span className="ft-contact-icon">📍</span>
                  Jabalpur, MP — India
                </a>
              </div>
            </div>

          </div>
        </div>

        <hr className="ft-divider" />

        <div className="ft-bottom">
          <p className="ft-copy">
            COPYRIGHT © {year} <b>INDIA DAKSH</b> — ALL RIGHTS RESERVED
          </p>
          <div className="ft-legal">
            <a href="#">Privacy Policy</a>
            <div className="ft-dot" />
            <a href="#">Terms of Service</a>
            <div className="ft-dot" />
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/919302742400?text=Hi%2C%20I'm%20interested%20in%20your%20IT%20services"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="ft-wab"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}