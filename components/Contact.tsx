"use client";

import { useState } from "react";
import { Mail, Phone, Camera, Link } from "lucide-react";

export default function Contact() {
  const [hovered, setHovered] = useState<number | null>(null);

  const contacts = [
    {
      title: "Email",
      href: "mailto:wayaneka2003@gmail.com",
      icon: <Mail size={16} />,
    },
    {
      title: "WhatsApp",
      href: "https://wa.me/6281246457249",
      icon: <Phone size={16} />,
    },
    {
      title: "Instagram",
      href: "https://instagram.com/ekamahardiika",
      icon: <Camera size={16} />,
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/i-wayan-eka-mahardika-a1385835a/",
      icon: <Link size={16} />,
    },
    {
      title: "GitHub",
      href: "https://github.com/ekamahardiika",
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: "5rem 2rem",
        maxWidth: 1100,
        margin: "0 auto",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .contact-card {
          transition: all 0.3s ease !important;
        }
        .contact-card:hover {
          background-color: var(--primary) !important;
          border-color: var(--primary) !important;
          transform: translateX(8px);
        }
        @media (max-width: 768px) {
          .contact-card:hover {
            transform: translateY(-4px);
          }
        }
        .contact-card:hover .contact-label {
          color: #fff !important;
        }
        .contact-card:hover .contact-icon {
          color: #fff !important;
        }
        .contact-card:hover .contact-arrow {
          color: #fff !important;
          transform: rotate(-45deg);
        }
      `,
        }}
      />

      <div
        className="flex flex-col md:grid"
        style={{
          gridTemplateColumns: "1fr 1.2fr",
          gap: "2.5rem md:4rem",
          width: "100%",
        }}
      >
        {/* LEFT */}
        <div>
          <p
            style={{
              color: "var(--primary)",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Kontak
          </p>

          <h2
            style={{
              fontSize: "clamp(2.3rem, 6vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              color: "var(--fg)",
            }}
          >
            Ayo
            <br />
            <span style={{ color: "var(--primary)" }}>Kerja Sama!</span>
          </h2>

          <p
            style={{
              color: "var(--muted)",
              lineHeight: 1.9,
              maxWidth: 420,
              fontSize: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            Terbuka untuk kolaborasi, dan berbagai proyek digital lainnya.
          </p>
        </div>

        {/* RIGHT — pill cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            width: "100%",
          }}
        >
          {contacts.map((item) => {
            return (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.85rem 1.5rem",
                  borderRadius: "50px",
                  border: "1px solid var(--border)",
                  backgroundColor: "#fff",
                  gap: "1rem",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    minWidth: 0,
                  }}
                >
                  <span
                    className="contact-icon"
                    style={{
                      color: "var(--primary)",
                      display: "flex",
                      alignItems: "center",
                      flexShrink: 0,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {item.icon}
                  </span>

                  <span
                    className="contact-label"
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--fg)",
                      fontWeight: 600,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {item.title}
                  </span>
                </div>

                <span
                  className="contact-arrow"
                  style={{
                    color: "var(--primary)",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    display: "inline-block",
                    flexShrink: 0,
                    transition: "transform 0.3s ease, color 0.3s ease",
                  }}
                >
                  →
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}