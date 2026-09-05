"use client";
import { useState } from "react";

const categories = ["All", "Social Media", "Ilustrasi", "T-Shirt"];

const projects = [
  {
    id: 1,
    title: "Kopi Morning Series",
    category: "Social Media",
    tags: ["Instagram", "Brand Kit"],
    color: "#ffecd2",
    accent: "#e8533a",
    emoji: "☕",
    desc: "Feed grid & stories for a local Bali coffee brand.",
  },
  {
    id: 2,
    title: "Bali Fest Campaign",
    category: "Social Media",
    tags: ["Event", "Carousel"],
    color: "#d4f1f4",
    accent: "#0d9488",
    emoji: "🌴",
    desc: "Social campaign design for annual cultural festival.",
  },
  {
    id: 3,
    title: "Spirit of the Forest",
    category: "Ilustrasi",
    tags: ["Digital Art", "Character"],
    color: "#e8f5e9",
    accent: "#2e7d32",
    emoji: "🌿",
    desc: "Hand-drawn digital illustration series, nature spirits.",
  },
  {
    id: 4,
    title: "Ocean Dreams",
    category: "Ilustrasi",
    tags: ["Watercolor", "Poster"],
    color: "#e3f2fd",
    accent: "#1565c0",
    emoji: "🌊",
    desc: "Digital watercolor series inspired by Indonesian coastlines.",
  },
  {
    id: 5,
    title: "Nusantara Tee",
    category: "T-Shirt",
    tags: ["Apparel", "Print"],
    color: "#fce4ec",
    accent: "#c62828",
    emoji: "👕",
    desc: "Cultural motif apparel graphics, 1000+ units sold.",
  },
  {
    id: 6,
    title: "Street Vibes Drop",
    category: "T-Shirt",
    tags: ["Streetwear", "Limited"],
    color: "#f3e5f5",
    accent: "#6a1b9a",
    emoji: "🎨",
    desc: "Limited drop streetwear collection graphic tees.",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="portfolio"
      style={{
        padding: "6rem 2rem",
        background: "#fff",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Label */}
        <p
          style={{
            color: "var(--accent)",
            fontWeight: 700,
            fontSize: "0.8rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
            textAlign: "center",
          }}
        >
          Working Process
        </p>

        <h2
          className="playfair"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            marginBottom: "2.5rem",
            textAlign: "center",
          }}
        >
          My Creative Portfolio
        </h2>

        {/* Filter tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            marginBottom: "3rem",
            flexWrap: "wrap",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "2rem",
                border: "1.5px solid",
                borderColor: active === cat ? "var(--accent)" : "var(--border)",
                background: active === cat ? "var(--accent)" : "transparent",
                color: active === cat ? "#fff" : "var(--muted)",
                fontWeight: 600,
                fontSize: "0.85rem",
                cursor: "pointer",
                transition: "all 0.2s",
                fontFamily: "inherit",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {filtered.map((p) => (
            <div
              key={p.id}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: p.color,
                borderRadius: 20,
                padding: "2rem",
                cursor: "pointer",
                transition: "transform 0.25s, box-shadow 0.25s",
                transform: hovered === p.id ? "translateY(-6px)" : "translateY(0)",
                boxShadow:
                  hovered === p.id
                    ? "0 20px 40px rgba(0,0,0,0.1)"
                    : "0 2px 8px rgba(0,0,0,0.04)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Category badge */}
              <span
                style={{
                  position: "absolute",
                  top: "1.25rem",
                  right: "1.25rem",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: p.accent,
                  background: "rgba(255,255,255,0.6)",
                  padding: "0.25rem 0.6rem",
                  borderRadius: "1rem",
                  letterSpacing: "0.05em",
                }}
              >
                {p.category}
              </span>

              {/* Emoji icon */}
              <div
                style={{
                  fontSize: "2.5rem",
                  marginBottom: "1.25rem",
                  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                }}
              >
                {p.emoji}
              </div>

              <h3
                className="playfair"
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                  color: "var(--fg)",
                }}
              >
                {p.title}
              </h3>

              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  marginBottom: "1.25rem",
                }}
              >
                {p.desc}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      color: p.accent,
                      background: "rgba(255,255,255,0.5)",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "1rem",
                      border: `1px solid ${p.accent}30`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
