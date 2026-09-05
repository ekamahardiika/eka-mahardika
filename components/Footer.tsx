"use client";
export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2.5rem 2rem",
        maxWidth: 1100,
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <div
          style={{
            width: 28,
            height: 28,
            background: "var(--accent)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 12 }}>N</span>
        </div>
        <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>Nancy</span>
        <span style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
          — Graphic Designer
        </span>
      </div>

      <p style={{ color: "var(--muted)", fontSize: "0.8rem" }}>
        © {new Date().getFullYear()} Nancy. All rights reserved.
      </p>

      <div style={{ display: "flex", gap: "1rem" }}>
        {["Instagram", "Behance", "Dribbble"].map((s) => (
          <a
            key={s}
            href="#"
            style={{
              color: "var(--muted)",
              fontSize: "0.8rem",
              textDecoration: "none",
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
            {s}
          </a>
        ))}
      </div>
    </footer>
  );
}
