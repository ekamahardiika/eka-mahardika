"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();
    // In production, connect to Formspree / EmailJS / API
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section
      id="contact"
      style={{
        padding: "6rem 2rem",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          background: "var(--teal)",
          borderRadius: 28,
          padding: "4rem 3rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
          position: "relative",
          overflow: "hidden",
        }}
        className="contact-grid"
      >
        {/* Decorative circles */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 240,
            height: 240,
            border: "40px solid rgba(255,255,255,0.08)",
            borderRadius: "50%",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: -40,
            left: "40%",
            width: 180,
            height: 180,
            border: "30px solid rgba(255,255,255,0.06)",
            borderRadius: "50%",
          }}
        />

        {/* Left text */}
        <div style={{ position: "relative" }}>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Get In Touch
          </p>
          <h2
            className="playfair"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}
          >
            Let&apos;s Create Something Amazing Together
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.75,
              marginBottom: "2rem",
              fontSize: "0.95rem",
            }}
          >
            Ready to level up your brand visuals? I&apos;d love to hear about your project.
            Let&apos;s make something you&apos;re proud of.
          </p>

          {/* Contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { icon: "✉️", text: "nancy@designstudio.id" },
              { icon: "📱", text: "+62 812 3456 7890" },
              { icon: "📍", text: "Bali, Indonesia" },
            ].map((item) => (
              <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span>{item.icon}</span>
                <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9rem" }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right form */}
        <div
          style={{
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            borderRadius: 18,
            padding: "2rem",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { key: "name", label: "Your Name", type: "text", placeholder: "Nancy Dela Rosa" },
              { key: "email", label: "Email Address", type: "email", placeholder: "hello@email.com" },
            ].map((field) => (
              <div key={field.key}>
                <label
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    marginBottom: "0.4rem",
                  }}
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.7rem 1rem",
                    borderRadius: 10,
                    border: "1.5px solid rgba(255,255,255,0.2)",
                    background: "rgba(255,255,255,0.15)",
                    color: "#fff",
                    fontSize: "0.9rem",
                    outline: "none",
                    fontFamily: "inherit",
                  }}
                />
              </div>
            ))}

            <div>
              <label
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  marginBottom: "0.4rem",
                }}
              >
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{
                  width: "100%",
                  padding: "0.7rem 1rem",
                  borderRadius: 10,
                  border: "1.5px solid rgba(255,255,255,0.2)",
                  background: "rgba(255,255,255,0.15)",
                  color: "#fff",
                  fontSize: "0.9rem",
                  outline: "none",
                  resize: "vertical",
                  fontFamily: "inherit",
                }}
              />
            </div>

            <button
              onClick={handleSubmit}
              style={{
                background: "var(--accent)",
                color: "#fff",
                padding: "0.85rem",
                borderRadius: "2rem",
                border: "none",
                fontWeight: 700,
                fontSize: "0.95rem",
                cursor: "pointer",
                transition: "transform 0.2s, opacity 0.2s",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0.9";
                (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              }}
            >
              {sent ? "✅ Message Sent!" : "Send Message →"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
