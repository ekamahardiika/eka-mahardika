"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const tagRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tags = ["Social Media", "Illustration", "T-Shirt Design"];
    let i = 0;
    let charIdx = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    function type() {
      const current = tags[i];
      if (!deleting) {
        charIdx++;
        if (tagRef.current) tagRef.current.textContent = current.slice(0, charIdx);
        if (charIdx === current.length) {
          deleting = true;
          timeout = setTimeout(type, 1500);
          return;
        }
      } else {
        charIdx--;
        if (tagRef.current) tagRef.current.textContent = current.slice(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          i = (i + 1) % tags.length;
        }
      }
      timeout = setTimeout(type, deleting ? 60 : 100);
    }
    type();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "6rem 2rem 4rem",
        maxWidth: 1100,
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Decorative blobs */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "15%",
          right: "5%",
          width: 320,
          height: 320,
          background: "radial-gradient(circle, rgba(232,83,58,0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "10%",
          left: "2%",
          width: 200,
          height: 200,
          background: "radial-gradient(circle, rgba(13,148,136,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 640 }}>
        {/* Eyebrow */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "rgba(232,83,58,0.1)",
            padding: "0.35rem 1rem",
            borderRadius: "2rem",
            marginBottom: "1.5rem",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              background: "var(--accent)",
              borderRadius: "50%",
              display: "inline-block",
            }}
          />
          <span style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600 }}>
            Available for freelance
          </span>
        </div>

        {/* Greeting */}
        <p
          style={{
            color: "var(--accent)",
            fontWeight: 600,
            fontSize: "1.1rem",
            marginBottom: "0.5rem",
            letterSpacing: "0.02em",
          }}
        >
          Hello, I&apos;m Nancy
        </p>

        {/* Headline */}
        <h1
          className="playfair"
          style={{
            fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "1.25rem",
          }}
        >
          Professional
          <br />
          <span style={{ color: "var(--accent)" }}>Graphic</span> Designer
        </h1>

        {/* Typewriter */}
        <p style={{ fontSize: "1.15rem", color: "var(--muted)", marginBottom: "1.5rem" }}>
          Specializing in{" "}
          <span
            ref={tagRef}
            style={{
              color: "var(--fg)",
              fontWeight: 600,
              borderRight: "2px solid var(--accent)",
              paddingRight: 2,
            }}
          />
        </p>

        {/* Bio */}
        <p
          style={{
            color: "var(--muted)",
            lineHeight: 1.75,
            maxWidth: 480,
            marginBottom: "2.5rem",
            fontSize: "0.95rem",
          }}
        >
          I craft compelling visual identities and designs that speak louder than words —
          from vibrant social media assets to hand-drawn illustrations and wearable art.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="#portfolio"
            style={{
              background: "var(--accent)",
              color: "#fff",
              padding: "0.85rem 2rem",
              borderRadius: "2rem",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.95rem",
              transition: "transform 0.2s, opacity 0.2s",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.opacity = "0.9";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.opacity = "1";
            }}
          >
            View Portfolio ↓
          </a>
          <a
            href="#contact"
            style={{
              background: "transparent",
              color: "var(--fg)",
              padding: "0.85rem 2rem",
              borderRadius: "2rem",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.95rem",
              border: "1.5px solid var(--border)",
              transition: "border-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Hire Me
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: "2.5rem",
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border)",
            flexWrap: "wrap",
          }}
        >
          {[
            { num: "3+", label: "Years Experience" },
            { num: "50+", label: "Projects Done" },
            { num: "30+", label: "Happy Clients" },
          ].map((s) => (
            <div key={s.label}>
              <p
                className="playfair"
                style={{ fontSize: "2rem", fontWeight: 700, color: "var(--accent)" }}
              >
                {s.num}
              </p>
              <p style={{ fontSize: "0.8rem", color: "var(--muted)", fontWeight: 500 }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right decoration */}
      <div
        style={{
          position: "absolute",
          right: "2rem",
          top: "50%",
          transform: "translateY(-50%)",
          display: "none",
        }}
        className="lg:block"
      >
        <div
          style={{
            width: 340,
            height: 400,
            background: "var(--border)",
            borderRadius: "60% 40% 40% 60% / 60% 60% 40% 40%",
            position: "relative",
            overflow: "hidden",
            opacity: 0.4,
          }}
        />
      </div>
    </section>
  );
}
