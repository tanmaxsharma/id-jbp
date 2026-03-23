"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ROW1 = [
  { src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=600&fit=crop", alt: "Business Professional"   },
  { src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=600&fit=crop", alt: "Technology Dashboard"    },
  { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=600&fit=crop", alt: "Network Infrastructure"   },
  { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop", alt: "Team Collaboration"     },
  { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=600&fit=crop", alt: "Digital Technology"     },
];

const ROW2 = [
  { src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=600&fit=crop", alt: "Business Communication"   },
  { src: "https://images.unsplash.com/photo-1642957323739-5632d8a2ff3d?w=600&h=600&fit=crop", alt: "Enterprise Tech"       },
  { src: "https://images.unsplash.com/photo-1632910138458-5bf601f3835e?w=600&h=600&fit=crop", alt: "Digital Transformation" },
  { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=600&fit=crop", alt: "Workspace Innovation"   },
  { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=600&fit=crop", alt: "Creative Collaboration"  },
];

type ImageItem = { src: string; alt: string };

function GalleryItem({ img }: { img: ImageItem }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
        flexShrink: 0,
        width: "clamp(200px,20vw,280px)",
        aspectRatio: "1",
        cursor: "pointer",
        transform: hov ? "scale(1.05)" : "scale(1)",
        boxShadow: hov
          ? "0 24px 56px rgba(37,99,235,0.2), 0 4px 16px rgba(0,0,0,0.12)"
          : "0 4px 20px rgba(0,0,0,0.08)",
        transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease",
        willChange: "transform",
      }}
    >
      <img
        src={img.src}
        alt={img.alt}
        loading="lazy"
        draggable={false}
        style={{
          width: "100%", height: "100%",
          objectFit: "cover", display: "block",
          transform: hov ? "scale(1.1)" : "scale(1)",
          transition: "transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)",
          userSelect: "none",
        }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg,rgba(37,99,235,0.88),rgba(14,165,233,0.88))",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: 10,
        opacity: hov ? 1 : 0,
        transition: "opacity 0.35s ease",
        borderRadius: 16,
      }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
          stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
        </svg>
        <span style={{
          color: "white", fontSize: "0.78rem", fontWeight: 700,
          letterSpacing: "1.5px", textTransform: "uppercase",
          textAlign: "center", padding: "0 16px",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>
          {img.alt}
        </span>
      </div>
    </div>
  );
}

function CarouselRow({
  images,
  direction,
  speed = 35,
}: {
  images: ImageItem[];
  direction: "ltr" | "rtl";
  speed?: number;
}) {
  const trackRef    = useRef<HTMLDivElement>(null);
  const tweenRef    = useRef<gsap.core.Tween | null>(null);
  const isPausedRef = useRef(false);
  const track       = [...images, ...images, ...images];

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const oneSetWidth = el.scrollWidth / 3;

    if (direction === "ltr") {
      gsap.set(el, { x: 0 });
      tweenRef.current = gsap.to(el, {
        x: `-=${oneSetWidth}`,
        duration: speed,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % oneSetWidth),
        },
      });
    } else {
      gsap.set(el, { x: -oneSetWidth });
      tweenRef.current = gsap.to(el, {
        x: `+=${oneSetWidth}`,
        duration: speed,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => {
            const val = parseFloat(x) % oneSetWidth;
            return val > 0 ? val - oneSetWidth : val;
          }),
        },
      });
    }

    return () => tweenRef.current?.kill();
  }, [direction, speed]);

  return (
    <div
      onMouseEnter={() => {
        if (!isPausedRef.current) {
          tweenRef.current?.pause();
          isPausedRef.current = true;
        }
      }}
      onMouseLeave={() => {
        if (isPausedRef.current) {
          tweenRef.current?.resume();
          isPausedRef.current = false;
        }
      }}
      style={{ overflow: "hidden", width: "100%", position: "relative" }}
    >
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: "clamp(12px,1.6vw,20px)",
          width: "max-content",
          padding: "8px 0",
          willChange: "transform",
        }}
      >
        {track.map((img, i) => <GalleryItem key={i} img={img} />)}
      </div>
    </div>
  );
}

export default function SuccessStories() {
  const secRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo("[data-ss-header]", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: secRef.current, start: "top 80%", once: true },
      });
      gsap.fromTo("[data-ss-row]", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.2, ease: "power3.out",
        scrollTrigger: { trigger: secRef.current, start: "top 75%", once: true },
      });
    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    /* White bg — sits between dark Services (#f1f5f9) and dark WhyUs (#080f1e) */
    <section
      ref={secRef}
      id="success"
      style={{
        padding: "clamp(60px,10vw,120px) 0",
        background: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        data-ss-header
        style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 56px", padding: "0 24px" }}
      >
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "center", gap: 12, marginBottom: 16,
        }}>
          <div style={{ width: 28, height: 3, background: "#2563eb", borderRadius: 2 }} />
          <span style={{
            fontSize: "0.75rem", fontWeight: 700, letterSpacing: "3px",
            textTransform: "uppercase", color: "#2563eb",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            Success Stories
          </span>
          <div style={{ width: 28, height: 3, background: "#2563eb", borderRadius: 2 }} />
        </div>
        <h2 style={{
          fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800,
          lineHeight: 1.2, color: "#0f172a", marginBottom: 16,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>
          Trusted by Leading{" "}
          <span style={{
            background: "linear-gradient(135deg,#2563eb,#0ea5e9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Businesses
          </span>
        </h2>
        <p style={{
          fontSize: "1rem", color: "#64748b", lineHeight: 1.7,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>
          Real results from real partnerships across diverse industries in
          Central India and beyond.
        </p>
      </div>

      {/* Carousel rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: "clamp(14px,2vw,22px)" }}>

        {/* Row 1 — Left to Right */}
        <div data-ss-row style={{ position: "relative" }}>
          <div style={{
            position: "absolute", left: 0, top: 0, bottom: 0,
            width: "clamp(40px,8vw,130px)",
            background: "linear-gradient(to right,#fff,transparent)",
            zIndex: 2, pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", right: 0, top: 0, bottom: 0,
            width: "clamp(40px,8vw,130px)",
            background: "linear-gradient(to left,#fff,transparent)",
            zIndex: 2, pointerEvents: "none",
          }} />
          <CarouselRow images={ROW1} direction="ltr" speed={30} />
        </div>

        {/* Row 2 — Right to Left */}
        <div data-ss-row style={{ position: "relative" }}>
          <div style={{
            position: "absolute", left: 0, top: 0, bottom: 0,
            width: "clamp(40px,8vw,130px)",
            background: "linear-gradient(to right,#fff,transparent)",
            zIndex: 2, pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", right: 0, top: 0, bottom: 0,
            width: "clamp(40px,8vw,130px)",
            background: "linear-gradient(to left,#fff,transparent)",
            zIndex: 2, pointerEvents: "none",
          }} />
          <CarouselRow images={ROW2} direction="rtl" speed={38} />
        </div>

      </div>
    </section>
  );
}