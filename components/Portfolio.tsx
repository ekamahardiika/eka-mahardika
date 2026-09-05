"use client";
import { useState, useMemo } from "react";

// ─── DATA PROJECT — GANTI/TAMBAH SESUAI KEBUTUHAN ─────────────────────────────
// category: bebas -> "Website", "Mobile", "Game", "Network", "IT Support", dll.
// tags: badge kecil di header modal (contoh: "Laravel", "React Native", "Cisco")
// images: array gambar, tiap gambar boleh punya caption sendiri.
//   -> kasih "showDetailButton: true" di gambar MANA SAJA (gambar 1, 3, 5, 6, dst)
//      untuk menempatkan tombol "Lihat Detail" di situ. Bebas, tidak harus gambar ke-2.
// detailUrl & demoUrl: OPSIONAL. Kosongkan / hapus kalau tidak ada.
const projects = [
  {
    id: 1,
    title: "Ravindra Beer Store - Website",
    category: "Website",
    tags: ["Laravel", "MySQL", "Bootstrap"],
    color: "#f0f4ff",
    accent: "#3730a3",
    coverImage: "/images/website/ravindra/cover.png",
    images: [
      {
        src: "/images/website/ravindra/1.png",
        caption:
          "Landing page toko yang menampilkan katalog produk bir dengan filter kategori dan pencarian cepat untuk memudahkan konsumen menemukan produk yang dicari.",
      },
      {
        src: "/images/website/ravindra/2.png",
        caption:
          "Halaman detail produk lengkap dengan stok real-time, harga, dan sistem keranjang belanja yang terintegrasi dengan database inventori.",
        showDetailButton: true,
      },
      {
        src: "/images/website/ravindra/3.png",
        caption:
          "Dashboard admin untuk mengelola produk, pesanan, dan laporan penjualan dengan tampilan yang ringkas dan mudah digunakan.",
      },
    ],
    detailUrl: "https://github.com/username/ravindra-beer",
    demoUrl: "https://ravindra-beer.vercel.app",
  },
  {
    id: 2,
    title: "MyGYMGue - Mobile App",
    category: "Mobile",
    tags: ["Kotlin", "Jetpack Compose", "Room"],
    color: "#f0fdf4",
    accent: "#15803d",
    coverImage: "/images/mobile/mygymgue/cover.png",
    images: [
      {
        src: "/images/mobile/mygymgue/1.png",
        caption:
          "Aplikasi pelacak latihan gym untuk Android yang mencatat progres set, repetisi, dan beban setiap sesi latihan.",
      },
      {
        src: "/images/mobile/mygymgue/2.png",
        caption:
          "Fitur sinkronisasi antar dua perangkat melalui koneksi lokal (NSD + TCP) tanpa memerlukan koneksi internet.",
      },
    ],
    demoUrl: "",
  },
  {
    id: 3,
    title: "Sanggar Kayonan - Company Profile",
    category: "Website",
    tags: ["Laravel", "Email Notification"],
    color: "#fff7f7",
    accent: "#bf0000",
    coverImage: "/images/website/kayonan/cover.png",
    images: [
      {
        src: "/images/website/kayonan/1.png",
        caption:
          "Website profil untuk komunitas seni pertunjukan Sanggar Kayonan, menampilkan jadwal kegiatan dan galeri dokumentasi.",
      },
      {
        src: "/images/website/kayonan/2.png",
        caption:
          "Sistem notifikasi email otomatis yang mengirim konfirmasi setiap ada pendaftaran anggota atau jadwal baru.",
        showDetailButton: true,
      },
    ],
    detailUrl: "https://github.com/username/sanggar-kayonan",
  },
];

type ImageItem = { src: string; caption?: string; showDetailButton?: boolean };
type Project = {
  id: number;
  title: string;
  category: string;
  tags: string[];
  color: string;
  accent: string;
  coverImage: string;
  images: ImageItem[];
  detailUrl?: string;
  demoUrl?: string;
};

// ─── FULLSCREEN LIGHTBOX ───────────────────────────────────────────────────────
function FullscreenLightbox({
  src,
  onClose,
}: {
  src: string;
  onClose: () => void;
}) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 300,
        background: "rgba(0,0,0,0.94)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        cursor: "zoom-out",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "100%",
          maxHeight: "90vh",
          objectFit: "contain",
          borderRadius: 12,
          boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
        }}
      />
    </div>
  );
}

// ─── MODAL DETAIL PROJECT (layout sesuai referensi gambar) ────────────────────
function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const hasDetail = !!project.detailUrl;
  const hasDemo = !!project.demoUrl;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.75)",
          zIndex: 200,
          backdropFilter: "blur(4px)",
          animation: "fadeIn 0.2s ease",
        }}
      />

      {/* Wrapper */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 201,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            background: "#f2f2f2",
            borderRadius: 24,
            width: "100%",
            maxWidth: 980,
            maxHeight: "90vh",
            display: "flex",
            flexDirection: "column",
            pointerEvents: "all",
            animation: "slideUp 0.25s ease",
            boxShadow: "0 30px 60px rgba(0,0,0,0.25)",
          }}
        >
          {/* Header (sticky) */}
          <div
            style={{
              padding: "1.5rem 1.75rem 1rem",
              borderBottom: "1px solid rgba(0,0,0,0.06)",
              background: "#f2f2f2",
              borderRadius: "24px 24px 0 0",
              position: "sticky",
              top: 0,
              zIndex: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "1rem",
                marginBottom: "0.85rem",
              }}
            >
              <h3
                className="playfair"
                style={{ fontSize: "1.35rem", fontWeight: 800, lineHeight: 1.3 }}
              >
                {project.title}
              </h3>
              <button
                onClick={onClose}
                aria-label="Tutup"
                style={{
                  flexShrink: 0,
                  background: "#4a4a4a",
                  border: "none",
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  cursor: "pointer",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "#333",
                    background: "#fff",
                    padding: "0.35rem 0.9rem",
                    borderRadius: "1rem",
                    border: "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Body scrollable */}
          <div
            style={{
              padding: "1.5rem 1.75rem",
              overflowY: "auto",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {project.images.map((img, i) => {
              const showDetailHere = hasDetail && !!img.showDetailButton;
              return (
                <div key={i} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div
                    style={{
                      position: "relative",
                      background: "#fff",
                      borderRadius: 16,
                      overflow: "hidden",
                      cursor: "zoom-in",
                      boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
                    }}
                    onClick={() => setLightboxImg(img.src)}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={project.title}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                      }}
                    />

                    {/* tombol Lihat Detail muncul di gambar mana pun yang diberi showDetailButton: true */}
                    {showDetailHere && (
                      <a
                        href={project.detailUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          position: "absolute",
                          bottom: 14,
                          right: 14,
                          padding: "0.55rem 1.3rem",
                          borderRadius: "2rem",
                          background: "#3a3a3a",
                          color: "#fff",
                          fontWeight: 700,
                          fontSize: "0.82rem",
                          textDecoration: "none",
                          boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
                        }}
                      >
                        Lihat Detail →
                      </a>
                    )}
                  </div>

                  {img.caption && (
                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "#444",
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                    >
                      {img.caption}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Footer: tombol Lihat Demo (opsional) */}
          {hasDemo && (
            <div
              style={{
                padding: "1rem 1.75rem 1.5rem",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "0.65rem 1.6rem",
                  borderRadius: "2rem",
                  background: "#3a3a3a",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
                }}
              >
                Lihat Demo →
              </a>
            </div>
          )}
        </div>
      </div>

      {lightboxImg && (
        <FullscreenLightbox src={lightboxImg} onClose={() => setLightboxImg(null)} />
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: translateY(30px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
      `}</style>
    </>
  );
}

// ─── CARD PROJECT ───────────────────────────────────────────────────────────
function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: project.color,
        borderRadius: 20,
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.25s, box-shadow 0.25s",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 40px rgba(0,0,0,0.12)"
          : "0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      <div style={{ height: 180, overflow: "hidden", position: "relative" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.coverImage}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.35s",
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
        />
        <span
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            fontSize: "0.65rem",
            fontWeight: 800,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "#fff",
            background: project.accent,
            padding: "0.25rem 0.65rem",
            borderRadius: "1rem",
          }}
        >
          {project.category}
        </span>
      </div>

      <div style={{ padding: "1rem 1.25rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "0.35rem",
          }}
        >
          <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>
            {project.title}
          </span>
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              color: project.accent,
              background: "rgba(255,255,255,0.6)",
              padding: "0.2rem 0.6rem",
              borderRadius: "1rem",
            }}
          >
            {project.images.length} foto
          </span>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "0.5rem" }}>
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "0.68rem",
                fontWeight: 600,
                color: project.accent,
                background: "rgba(255,255,255,0.7)",
                padding: "0.15rem 0.55rem",
                borderRadius: "1rem",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <p
          style={{
            fontSize: "0.78rem",
            color: project.accent,
            fontWeight: 600,
          }}
        >
          Klik untuk lihat detail →
        </p>
      </div>
    </div>
  );
}

// ─── MAIN PORTFOLIO COMPONENT ──────────────────────────────────────────────────
export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    [],
  );

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" style={{ padding: "3rem 2rem", background: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <p
          style={{
            color: "var(--primary)",
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
            fontSize: "clamp(2rem, 4vw, 3.3rem)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            marginBottom: "2.5rem",
            textAlign: "center",
          }}
        >
          Portfolio IT Saya
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
                borderColor: active === cat ? "var(--primary)" : "var(--border, #ddd)",
                background: active === cat ? "var(--primary)" : "transparent",
                color: active === cat ? "#fff" : "var(--muted, #888)",
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

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} onClick={() => setOpenProject(p)} />
          ))}
        </div>
      </div>

      {openProject && (
        <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
      )}
    </section>
  );
}