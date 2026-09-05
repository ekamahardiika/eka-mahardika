"use client";
import { useState, useEffect } from "react";

const links = ["Home", "About", "Portfolio", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(250,249,247,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <div
          style={{
            width: 32,
            height: 32,
            background: "var(--accent)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>N</span>
        </div>
        <span
          className="playfair"
          style={{ fontWeight: 700, fontSize: "1.1rem", letterSpacing: "-0.02em" }}
        >
          Nancy
        </span>
      </div>

      {/* Desktop Links */}
      <div style={{ display: "flex", gap: "2rem" }} className="hidden md:flex">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              color: "var(--muted)",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "var(--accent)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "var(--muted)")
            }
          >
            {link}
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <a
        href="#contact"
        style={{
          background: "var(--accent)",
          color: "#fff",
          padding: "0.5rem 1.25rem",
          borderRadius: "2rem",
          textDecoration: "none",
          fontSize: "0.875rem",
          fontWeight: 600,
          transition: "opacity 0.2s, transform 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.opacity = "0.85";
          (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.opacity = "1";
          (e.currentTarget as HTMLElement).style.transform = "scale(1)";
        }}
      >
        Let&apos;s talk
      </a>
    </nav>
  );
}
