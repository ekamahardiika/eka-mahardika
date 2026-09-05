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
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <p
        style={{
          color: "var(--muted)",
          fontSize: "0.85rem",
          letterSpacing: "0.03em",
        }}
      >
        © {new Date().getFullYear()} Eka Mahardika. All rights reserved.
      </p>
    </footer>
  );
}
