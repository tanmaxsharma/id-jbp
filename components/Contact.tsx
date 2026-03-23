"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const INFO = [
  { icon: "📍", title: "Visit Our Office", lines: ["IT PARK, Bargi Hills Road,", "Naya Gaon, Bargi Hills,", "Jabalpur, Madhya Pradesh, India"] },
  { icon: "📞", title: "Call Us", lines: ["+91 9302742400", "+91 9926439124"] },
  { icon: "✉️", title: "Email Us", lines: ["info@indiadaksh.com"] },
  { icon: "🕐", title: "Business Hours", lines: ["Mon – Sat: 9:00 AM – 5:00 PM", "Sunday: Emergency Support Only"] },
];

type State = "idle" | "sending" | "sent";

export default function Contact() {
  const secRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [state, setState] = useState<State>("idle");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = secRef.current?.querySelectorAll("[data-r]");
      if (els) {
        gsap.fromTo(Array.from(els), { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out",
            scrollTrigger: { trigger: secRef.current, start: "top 75%", once: true } });
      }
    }, secRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    setTimeout(() => {
      setState("sent");
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setState("idle"), 4000);
    }, 1500);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 16px",
    border: "2px solid #e2e8f0", borderRadius: 10,
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: "0.9rem", color: "#0f172a",
    background: "#f8fafc", outline: "none",
    transition: "border-color 0.2s, background 0.2s, box-shadow 0.2s",
  };

  return (
    <section ref={secRef} id="contact" style={{
      background: "#f8fafc",
      paddingBottom: 0,
    }}>
      <div style={{ padding: "clamp(60px,10vw,120px) 0 clamp(60px,8vw,100px)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

          {/* Header */}
          <div data-r style={{ textAlign: "center", maxWidth: 580, margin: "0 auto 64px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 28, height: 3, background: "#2563eb", borderRadius: 2 }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#2563eb" }}>
                Contact Us
              </span>
              <div style={{ width: 28, height: 3, background: "#2563eb", borderRadius: 2 }} />
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.2, color: "#0f172a", marginBottom: 16 }}>
              Let&apos;s Start a{" "}
              <span style={{ background: "linear-gradient(135deg,#2563eb,#0ea5e9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Conversation
              </span>
            </h2>
            <p style={{ fontSize: "1rem", color: "#64748b", lineHeight: 1.7 }}>
              We&apos;re here to help your business succeed with technology. Our team responds within 30 minutes.
            </p>
          </div>

          {/* Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,380px),1fr))",
            gap: "clamp(24px,4vw,48px)",
            alignItems: "start",
          }}>
            {/* Info cards */}
            <div data-r style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {INFO.map(item => (
                <div key={item.title} style={{
                  display: "flex", alignItems: "flex-start", gap: 16,
                  padding: 20, background: "#fff",
                  border: "1.5px solid #e2e8f0", borderRadius: 14,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateX(6px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 28px rgba(37,99,235,0.09)";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#bfdbfe";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateX(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#e2e8f0";
                  }}
                >
                  <div style={{
                    width: 46, height: 46, flexShrink: 0,
                    background: "linear-gradient(135deg,#eff6ff,#e0f2fe)",
                    borderRadius: 12,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.2rem",
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0f172a", marginBottom: 4 }}>{item.title}</h4>
                    {item.lines.map(l => (
                      <p key={l} style={{ fontSize: "0.83rem", color: "#64748b", lineHeight: 1.6 }}>{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div data-r style={{
              background: "#fff", borderRadius: 20, padding: "clamp(24px,4vw,44px)",
              border: "1.5px solid #e2e8f0",
              boxShadow: "0 20px 60px rgba(0,0,0,0.07)",
            }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a", marginBottom: 28 }}>
                Send us a Message
              </h3>

              {state === "sent" ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: "48px 0", textAlign: "center" }}>
                  <span style={{ fontSize: "3rem" }}>✅</span>
                  <strong style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a" }}>Message sent successfully!</strong>
                  <p style={{ fontSize: "0.9rem", color: "#64748b" }}>Our team will get back to you within 30 minutes.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 16 }}>
                    {["name", "email"].map(field => (
                      <div key={field} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: "0.82rem", fontWeight: 600, color: "#0f172a" }}>
                          {field === "name" ? "Full Name *" : "Email *"}
                        </label>
                        <input
                          type={field === "email" ? "email" : "text"}
                          placeholder={field === "name" ? "John Doe" : "john@company.com"}
                          value={form[field as keyof typeof form]}
                          onChange={e => setForm(p => ({ ...p, [field]: e.target.value }))}
                          required
                          style={inputStyle}
                          onFocus={e => {
                            (e.currentTarget as HTMLInputElement).style.borderColor = "#2563eb";
                            (e.currentTarget as HTMLInputElement).style.background = "#fff";
                            (e.currentTarget as HTMLInputElement).style.boxShadow = "0 0 0 4px rgba(37,99,235,0.08)";
                          }}
                          onBlur={e => {
                            (e.currentTarget as HTMLInputElement).style.borderColor = "#e2e8f0";
                            (e.currentTarget as HTMLInputElement).style.background = "#f8fafc";
                            (e.currentTarget as HTMLInputElement).style.boxShadow = "none";
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontSize: "0.82rem", fontWeight: 600, color: "#0f172a" }}>Phone</label>
                    <input
                      type="tel" placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                      style={inputStyle}
                      onFocus={e => { (e.currentTarget as HTMLInputElement).style.borderColor = "#2563eb"; (e.currentTarget as HTMLInputElement).style.background = "#fff"; (e.currentTarget as HTMLInputElement).style.boxShadow = "0 0 0 4px rgba(37,99,235,0.08)"; }}
                      onBlur={e => { (e.currentTarget as HTMLInputElement).style.borderColor = "#e2e8f0"; (e.currentTarget as HTMLInputElement).style.background = "#f8fafc"; (e.currentTarget as HTMLInputElement).style.boxShadow = "none"; }}
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontSize: "0.82rem", fontWeight: 600, color: "#0f172a" }}>Your Message *</label>
                    <textarea
                      placeholder="Tell us about your IT needs..."
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      required
                      rows={4}
                      style={{ ...inputStyle, resize: "vertical", minHeight: 110 }}
                      onFocus={e => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = "#2563eb"; (e.currentTarget as HTMLTextAreaElement).style.background = "#fff"; (e.currentTarget as HTMLTextAreaElement).style.boxShadow = "0 0 0 4px rgba(37,99,235,0.08)"; }}
                      onBlur={e => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = "#e2e8f0"; (e.currentTarget as HTMLTextAreaElement).style.background = "#f8fafc"; (e.currentTarget as HTMLTextAreaElement).style.boxShadow = "none"; }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={state === "sending"}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                      width: "100%", padding: "15px",
                      background: state === "sending" ? "#93c5fd" : "#2563eb",
                      color: "#fff", border: "none", borderRadius: 10,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.95rem", fontWeight: 700, cursor: state === "sending" ? "not-allowed" : "pointer",
                      boxShadow: "0 6px 20px rgba(37,99,235,0.3)",
                      transition: "background 0.2s, transform 0.2s",
                    }}
                    onMouseEnter={e => { if (state !== "sending") (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}
                  >
                    {state === "sending" ? (
                      <>
                        <span style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin 0.7s linear infinite", display: "inline-block" }} />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div style={{ height: "clamp(280px,45vw,480px)" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d617.6598162049112!2d79.88028980064263!3d23.128868618801736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b39e0f44e0dd%3A0xcf13ba23a3c45aae!2sIT%20PARK!5e0!3m2!1sen!2sin!4v1770114121745!5m2!1sen!2sin"
          width="100%" height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Daksh India Office Location"
        />
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}