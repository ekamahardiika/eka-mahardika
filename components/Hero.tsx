"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [hoveredBtn, setHoveredBtn] = useState("");

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "4rem",
        padding: "4rem 2rem", // Tetap menjaga padding samping 2rem konsisten sesuai halaman lain
        maxWidth: 1100,
        margin: "0 auto",
        width: "100%",
        boxSizing: "border-box",
        marginTop: "24px",
      }}
    >
      {/* STYLE TAG UTK MEDIA QUERY RESPONSIVE FOTO */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media (max-width: 768px) {
          .hero-desktop-img-wrapper {
            display: none !important; /* Sembunyikan foto kolom kanan bawaan di mobile */
          }
          .hero-mobile-header {
            display: flex !important; /* Munculkan baris header teks + foto bulat di mobile */
            align-items: center;
            justifyContent: space-between;
            gap: 1rem;
            width: 100%;
            margin-bottom: 1.5rem;
          }
          .hero-mobile-avatar {
            display: block !important;
            flex-shrink: 0;
            position: relative;
            width: 80px; /* Ukuran bulat foto di mobile, silakan sesuaikan */
            height: 80px;
            border-radius: 50% !important; /* Membuat lingkaran sempurna */
            overflow: hidden;
            
            box-shadow: 0 8px 20px rgba(0,57,195,0.15);
          }
          .hero-text-title {
            margin-bottom: 0 !important; /* Reset margin h1 karena space diambil oleh container header */
          }
        }
      `,
        }}
      />

      {/* Left Content Column */}
      <div style={{ flex: 1, minWidth: 300, width: "100%" }}>
        {/* CONTAINER BARU: Hanya aktif & flex-row saat layar mobile */}
        <div className="hero-mobile-header" style={{ display: "none" }}>
          <h1
            className="hero-text-title"
            style={{
              fontSize: "clamp(2.3rem, 7vw, 4rem)",
              lineHeight: 1.1,
              fontWeight: 800,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Halo! Saya <br />
            <span style={{ color: "var(--primary)" }}>Eka Mahardika</span>
          </h1>

          {/* Foto Bulat di Kanan Teks (Hanya muncul saat mobile) */}
          <div className="hero-mobile-avatar" style={{ display: "none" }}>
            <Image
              src="/images/nobg1.png"
              alt="Eka"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Judul Versi Desktop (Otomatis tersembunyi di mobile karena class .hero-desktop-title diatur lewat reset) */}
        <h1
          className="hidden md:block"
          style={{
            fontSize: "clamp(2.7rem, 7vw, 4rem)",
            lineHeight: 1.1,
            fontWeight: 800,
            marginBottom: "1.5rem",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Halo! Saya <br />
          <span style={{ color: "var(--primary)" }}>Eka Mahardika</span>
        </h1>

        {/* Deskripsi Diri */}
        <p
          style={{
            color: "var(--muted)",
            lineHeight: 1.8,
            maxWidth: 550,
            fontSize: "1rem",
            marginBottom: "2rem",
          }}
        >
          Saya Fresh Graduate lulusan Sistem Informasi yang teliti,
          terorganisir, dan memiliki pemahaman kuat dalam pengelolaan data serta
          administrasi sistem. Berpengalaman dalam mengelola komunikasi
          profesional dengan klien internasional serta berkolaborasi lintas
          divisi.
        </p>

        {/* Call to Action Buttons */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          {/* BUTTON 1 */}
          <a
            href="#portfolio"
            onMouseEnter={() => setHoveredBtn("portfolio")}
            onMouseLeave={() => setHoveredBtn("")}
            style={{
              background:
                hoveredBtn === "portfolio"
                  ? "var(--secondary)"
                  : "var(--primary)",
              color: "#fff",
              padding: "0.95rem 2rem",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 600,
              transform:
                hoveredBtn === "portfolio"
                  ? "translateY(-4px)"
                  : "translateY(0px)",
              boxShadow:
                hoveredBtn === "portfolio"
                  ? "0 12px 30px rgba(0,57,195,0.25)"
                  : "none",
              transition: "all 0.3s ease",
            }}
          >
            Lihat Portfolio
          </a>

          {/* BUTTON 2 */}
          <a
            href="#contact"
            onMouseEnter={() => setHoveredBtn("contact")}
            onMouseLeave={() => setHoveredBtn("")}
            style={{
              border:
                hoveredBtn === "contact"
                  ? "1px solid var(--secondary)"
                  : "1px solid var(--border)",
              color:
                hoveredBtn === "contact" ? "var(--secondary)" : "var(--fg)",
              background:
                hoveredBtn === "contact"
                  ? "rgba(62, 146, 204,0.08)"
                  : "transparent",
              padding: "0.95rem 2rem",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 600,
              transform:
                hoveredBtn === "contact"
                  ? "translateY(-4px)"
                  : "translateY(0px)",
              transition: "all 0.3s ease",
            }}
          >
            Kontak Saya
          </a>
        </div>
      </div>

      {/* Right Image Column (Hanya Desktop) */}
      <div
        className="hero-desktop-img-wrapper"
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          minWidth: 280,
        }}
      >
        <div
          style={{
            position: "relative",
            width: 350,
            height: 420,
            borderRadius: 30,
            overflow: "hidden",
            boxShadow: "0 20px 50px rgba(0,57,195,0.15)",
          }}
        >
          <Image
            src="/images/nobg1.png"
            alt="Eka"
            fill
            priority
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
}
