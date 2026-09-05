"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const links = ["Home", "About", "Portfolio", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const onScroll = () => setScrolled(window.scrollY > 40);

    // Jalankan saat pertama kali mount
    handleResize();
    onScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
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
          background:
            scrolled || (menuOpen && isMobile)
              ? "rgba(255,250,255,0.95)"
              : "transparent",
          backdropFilter:
            scrolled || (menuOpen && isMobile) ? "blur(12px)" : "none",
          borderBottom:
            scrolled || (menuOpen && isMobile)
              ? "1px solid var(--border)"
              : "none",
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <Image
            src="/images/logo-icon2.png"
            alt="Logo"
            width={32}
            height={32}
            style={{ objectFit: "contain" }}
          />
          <span
            style={{
              fontWeight: 700,
              fontSize: "1.1rem",
              letterSpacing: "-0.02em",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Eka Mahardika
          </span>
        </div>

        {/* Desktop Links (Hanya muncul di md ke atas) */}
        <div
          className="hidden md:flex"
          style={{
            gap: "2rem",
          }}
        >
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
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--muted)";
              }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right Actions (CTA + Hamburger) */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* CTA Button - Sembunyi di mobile super kecil jika diperlukan, tapi di sini tetap dimunculkan */}
          <a
            href="/files/CV_I Wayan Eka Mahardika_ID.pdf"
            download="CV_Eka_Mahardika.pdf"
            className="hidden sm:flex" // Sembunyi di layar < 640px agar tidak terlalu padat
            style={{
              background: "var(--primary)",
              color: "#fff",
              padding: "0.5rem 1.25rem",
              borderRadius: "2rem",
              textDecoration: "none",
              fontSize: "0.875rem",
              fontWeight: 600,
              alignItems: "center",
              gap: "0.5rem",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.85";
              e.currentTarget.style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <span>Download CV</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>

          {/* Hamburger Menu Button (Hanya muncul di mobile/tablet) */}
          <button
            className="flex md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              color: "var(--primary)",
              zIndex: 110,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transition: "transform 0.3s ease" }}
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(255,250,255,0.98)",
          backdropFilter: "blur(20px)",
          zIndex: 90,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2.5rem",
          opacity: menuOpen && isMobile ? 1 : 0,
          pointerEvents: menuOpen && isMobile ? "auto" : "none",
          transform:
            menuOpen && isMobile ? "translateY(0)" : "translateY(-10px)",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            style={{
              color: "var(--muted)",
              textDecoration: "none",
              fontSize: "1.5rem",
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-0.02em",
              transition: "transform 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--primary)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--muted)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {link}
          </a>
        ))}

        {/* Download CV alternatif di dalam mobile menu (untuk layar hp yang sangat kecil) */}
        <a
          href="/files/CV_I Wayan Eka Mahardika_ID.pdf"
          download="CV_Eka_Mahardika.pdf"
          className="flex sm:hidden"
          onClick={() => setMenuOpen(false)}
          style={{
            background: "var(--primary)",
            color: "#fff",
            padding: "0.75rem 1.75rem",
            borderRadius: "2rem",
            textDecoration: "none",
            fontSize: "1rem",
            fontWeight: 600,
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span>Download CV</span>
        </a>
      </div>
    </>
  );
}
