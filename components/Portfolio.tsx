"use client";

import { useState, useMemo } from "react";

// ─── TIPE DATA PROJECT ────────────────────────────────────────────────────────
type ImageItem = {
  src: string;
  caption?: string;
};

type Project = {
  id: number;
  title: string;
  category: string;
  tags: string[];
  coverImage: string;
  summary: string;
  features: string[];
  images: ImageItem[];
  demoUrl?: string;
};

// ─── DATA PROJECT (PATH GAMBAR DISESUAIKAN: A1, A2, B1, B2, DST) ──────────────
const projects: Project[] = [
  {
    id: 1,
    title: "Ravindra Beer Store",
    category: "Website",
    tags: [
      "Laravel 13",
      "PHP 8.3",
      "Tailwind CSS",
      "Alpine.js",
      "Vite",
      "MySQL",
    ],
    coverImage: "images/portfolio/A1.png",
    summary:
      "Aplikasi e-commerce berbasis web untuk toko minuman yang mengintegrasikan sistem pembatasan usia (Age Verification). Platform ini menyediakan pengalaman belanja yang lancar bagi pelanggan serta panel administrasi lengkap untuk manajemen produk, pesanan, dan campaign email otomatis.",
    features: [
      "Halaman Publik Interaktif: Beranda, Tentang Kami, Galeri, dan Form Kontak.",
      "Verifikasi Usia (Age Verification): Sistem validasi umur sebelum pelanggan dapat mengakses katalog produk.",
      "Autentikasi Keamanan Tinggi: Registrasi akun dilengkapi verifikasi kode OTP dan integrasi Laravel Breeze.",
      "Manajemen Transaksi & Katalog: Halaman detail produk, riwayat pesanan, pembatalan otomatis/manual, dan sistem testimoni pelanggan.",
      "Panel Administrasi Lengkap: Pengelolaan stok/pesanan, broadcast email promosi via Laravel Mail (Mailable), dan moderasi ulasan.",
    ],
    images: [
      {
        src: "images/portfolio/A2.png",
        caption:
          "Tampilan katalog produk dengan filter kategori dan sistem verifikasi usia.",
      },
    ],
    demoUrl: "https://ravindra-beer.vercel.app",
  },
  {
    id: 2,
    title: "Subak Penyalin",
    category: "Website",
    tags: [
      "Laravel 13",
      "PHP 8.3",
      "Tailwind CSS",
      "Alpine.js",
      "DomPDF",
      "Pest PHP",
    ],
    coverImage: "images/portfolio/B1.png",
    summary:
      "Platform digital rantai pasok pertanian yang terinspirasi dari filosofi pengelolaan pertanian tradisional Bali (Subak). Sistem ini menghubungkan secara langsung petani dan konsumen untuk distribusi hasil panen yang lebih efisien dan transparan.",
    features: [
      "Multi-Role Access Control: Hak akses khusus yang disesuaikan untuk Admin, Petani, dan Konsumen.",
      "Portal Khusus Petani: Manajemen stok hasil panen, pemantauan riwayat penjualan, dan cetak laporan otomatis.",
      "Portal Konsumen: Jelajah katalog hasil pertanian segar, checkout instan, serta pelacakan status pesanan.",
      "Dashboard Administrator: Pengelolaan data pengguna/petani, penetapan harga pasar, eksekusi pemesanan, dan ekspor laporan penjualan PDF.",
      "Pengujian Terintegrasi: Kode program telah diuji menggunakan automated testing Pest PHP untuk menjamin stabilitas.",
    ],
    images: [
      {
        src: "images/portfolio/B2.png",
        caption:
          "Dashboard platform yang memfasilitasi alur distribusi dari petani ke konsumen.",
      },
    ],
  },
  {
    id: 3,
    title: "Sanggar Kayonan",
    category: "Website",
    tags: [
      "Laravel 13",
      "PHP 8.3",
      "Tailwind CSS",
      "Alpine.js",
      "Laravel Breeze",
      "DomPDF",
    ],
    coverImage: "images/portfolio/C1.png",
    summary:
      "Profil perusahaan digital sekaligus platform manajemen operasional untuk sanggar seni tari tradisional Bali. Mengintegrasikan landing page publik interaktif dengan sistem portal anggota untuk pengelolaan jadwal latihan dan pementasan.",
    features: [
      "Landing Page Interaktif: Slider hero dinamis, scroll interaktif, jadwal pementasan, serta berita kegiatan sanggar.",
      "Portal Anggota (Member): Pendaftaran pementasan mandiri, pengecekan jadwal latihan, dan konfirmasi kehadiran.",
      "Manajemen Absensi & Pelatihan: Admin dapat mengelola jadwal latihan, tipe kelas, serta mencatat kehadiran peserta secara otomatis.",
      "Ekspor Laporan PDF: Kemudahan rekapitulasi data absensi dan daftar pendaftar pementasan berbasis DomPDF.",
    ],
    images: [
      {
        src: "images/portfolio/C2.png",
        caption:
          "Landing page utama Sanggar Kayonan dengan informasi pertunjukan dan profil sanggar.",
      },
    ],
  },
  {
    id: 4,
    title: "My GYM Gue",
    category: "Mobile",
    tags: [
      "Kotlin",
      "Jetpack Compose",
      "Room DB",
      "Navigation Compose",
      "Coroutines",
    ],
    coverImage: "images/portfolio/D1.png",
    summary:
      "Aplikasi Android native untuk pelacakan dan manajemen program latihan kebugaran (gym). Dirancang untuk membantu pengguna menyusun workout split, mencatat progres repetisi dan beban, serta memantau perkembangan fisik secara konsisten.",
    features: [
      "Penyusunan Workout Program: Bebas mengelompokkan split latihan (Push/Pull/Legs) beserta daftar gerakan spesifik per bagian tubuh.",
      "Live Workout Session & Timer: Pencatatan beban/repetisi secara real-time yang didukung Foreground Service & Notification agar timer tetap aktif di background.",
      "Visualisasi Progres: Grafik statistik perkembangan kekuatan (beban maksimal & total repetisi) dari waktu ke waktu.",
      "Riwayat & Analisis Latihan: Dashboard riwayat aktivitas bulanan, statistik hari aktif, serta filter rekapitulasi periode.",
      "Sinkronisasi & Backup Data: Fitur overwrite mode untuk pencadangan dan pemindahan seluruh data latihan secara aman.",
    ],
    images: [
      {
        src: "images/portfolio/D2.png",
        caption:
          "Antarmuka pencatatan set, repetisi, dan timer latihan berbasis Jetpack Compose.",
      },
    ],
  },
  {
    id: 5,
    title: "Green Guardian",
    category: "Game",
    tags: [
      "Godot Engine",
      "GDScript",
      "Android Studio",
      "Adobe Photoshop",
      "2D Platformer",
    ],
    coverImage: "images/portfolio/E1.png",
    summary:
      "Game Android 2D Platformer bertema edukasi lingkungan. Game ini mengajarkan pemain mengenai pemilahan jenis sampah (organik, anorganik, dan B3) melalui gameplay interaktif yang menggabungkan elemen tantangan mekanik dan kuis pemahaman.",
    features: [
      "Mekanik 2D Platformer: Navigasi level dengan sistem HP (Health Bar), tantangan musuh patrol, flying enemy, hingga shooter.",
      "3 Variasi Kuis Edukatif: Tantangan kuis berupa pilihan teks, identifikasi gambar, serta mekanisme drag and drop pemilahan sampah.",
      "Sistem Koleksi & Marketplace Skin: Sampah yang dikumpulkan sepanjang game dapat ditukarkan dengan berbagai variasi skin karakter.",
      "Desain Aset Custom: Seluruh visual aset game dirancang khusus menggunakan Adobe Photoshop untuk menciptakan estetika edukatif yang menarik.",
    ],
    images: [
      {
        src: "images/portfolio/E2.png",
        caption:
          "Gameplay 2D platformer saat mengumpulkan sampah dan menghadapi rintangan musuh.",
      },
    ],
  },
];

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
        background: "rgba(0,0,0,0.92)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        cursor: "zoom-out",
        backdropFilter: "blur(4px)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="Enlarged view"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "100%",
          maxHeight: "90vh",
          objectFit: "contain",
          borderRadius: 12,
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
        }}
      />
    </div>
  );
}

// ─── MODAL DETAIL PROJECT ─────────────────────────────────────────────────────
function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.65)",
          zIndex: 200,
          backdropFilter: "blur(4px)",
          animation: "fadeIn 0.2s ease forwards",
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
          padding: "1.25rem",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 20,
            width: "100%",
            maxWidth: 880,
            maxHeight: "88vh",
            display: "flex",
            flexDirection: "column",
            pointerEvents: "all",
            animation: "slideUp 0.25s ease forwards",
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            border: "1px solid var(--border, #e5e7eb)",
            overflow: "hidden",
          }}
        >
          {/* Header Sticky */}
          <div
            style={{
              padding: "1.25rem 1.5rem",
              borderBottom: "1px solid var(--border, #e5e7eb)",
              background: "#fff",
              position: "sticky",
              top: 0,
              zIndex: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                marginBottom: "0.75rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  color: "var(--fg, #111)",
                  margin: 0,
                }}
              >
                {project.title}
              </h3>
              <button
                onClick={onClose}
                aria-label="Tutup Modal"
                style={{
                  flexShrink: 0,
                  background: "#f3f4f6",
                  border: "none",
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "#4b5563",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s",
                }}
              >
                ✕
              </button>
            </div>

            {/* Tag / Badge Teknologi */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "var(--primary, #2563eb)",
                    background: "rgba(37, 99, 235, 0.08)",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "50px",
                    border: "1px solid rgba(37, 99, 235, 0.15)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Body Modal (Scrollable) */}
          <div
            style={{
              padding: "1.5rem",
              overflowY: "auto",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {/* Ringkasan Project */}
            <div>
              <h4
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--fg, #111)",
                  marginBottom: "0.4rem",
                }}
              >
                Tentang Project
              </h4>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "var(--muted, #4b5563)",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {project.summary}
              </p>
            </div>

            {/* Fitur Utama */}
            <div>
              <h4
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--fg, #111)",
                  marginBottom: "0.5rem",
                }}
              >
                Fitur Utama
              </h4>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: "1.2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}
              >
                {project.features.map((feat, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--muted, #4b5563)",
                      lineHeight: 1.55,
                    }}
                  >
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tangkapan Layar / Galeri Gambar */}
            <div>
              <h4
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--fg, #111)",
                  marginBottom: "0.75rem",
                }}
              >
                Tampilan Antarmuka
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                {project.images.map((img, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        background: "#f9fafb",
                        borderRadius: 12,
                        overflow: "hidden",
                        cursor: "zoom-in",
                        border: "1px solid var(--border, #e5e7eb)",
                      }}
                      onClick={() => setLightboxImg(img.src)}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img.src}
                        alt={`${project.title} screenshot ${i + 1}`}
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                        }}
                      />
                    </div>
                    {img.caption && (
                      <p
                        style={{
                          fontSize: "0.78rem",
                          color: "var(--muted, #6b7280)",
                          lineHeight: 1.4,
                          margin: 0,
                          fontStyle: "italic",
                        }}
                      >
                        * {img.caption}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer (Tombol Demo saja) */}
          {project.demoUrl && (
            <div
              style={{
                padding: "0.9rem 1.5rem",
                borderTop: "1px solid var(--border, #e5e7eb)",
                background: "#f9fafb",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "0.55rem 1.3rem",
                  borderRadius: "50px",
                  background: "var(--primary, #2563eb)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.82rem",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                }}
              >
                Lihat Demo Live ↗
              </a>
            </div>
          )}
        </div>
      </div>

      {lightboxImg && (
        <FullscreenLightbox
          src={lightboxImg}
          onClose={() => setLightboxImg(null)}
        />
      )}
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
        background: "#fff",
        borderRadius: 16,
        overflow: "hidden",
        cursor: "pointer",
        border: "1px solid var(--border, #e5e7eb)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 12px 24px -8px rgba(0,0,0,0.08)"
          : "0 2px 4px rgba(0,0,0,0.02)",
      }}
    >
      {/* Container Gambar Cover */}
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
            transition: "transform 0.35s ease",
            transform: hovered ? "scale(1.04)" : "scale(1)",
          }}
        />
        <span
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            fontSize: "0.65rem",
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#fff",
            background: "var(--primary, #2563eb)",
            padding: "0.25rem 0.65rem",
            borderRadius: "50px",
          }}
        >
          {project.category}
        </span>
      </div>

      {/* Konten Card */}
      <div style={{ padding: "1.15rem 1.25rem" }}>
        <h3
          style={{
            fontWeight: 700,
            fontSize: "1rem",
            color: "var(--fg, #111)",
            marginBottom: "0.5rem",
          }}
        >
          {project.title}
        </h3>

        {/* Tag Ringkas */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.35rem",
            marginBottom: "0.85rem",
          }}
        >
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "0.68rem",
                fontWeight: 500,
                color: "var(--muted, #6b7280)",
                background: "#f3f4f6",
                padding: "0.15rem 0.55rem",
                borderRadius: "50px",
              }}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span
              style={{
                fontSize: "0.68rem",
                fontWeight: 500,
                color: "var(--muted, #6b7280)",
                background: "#f3f4f6",
                padding: "0.15rem 0.4rem",
                borderRadius: "50px",
              }}
            >
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        <p
          style={{
            fontSize: "0.8rem",
            color: "var(--primary, #2563eb)",
            fontWeight: 600,
            margin: 0,
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
        >
          Lihat Detail Project →
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
    []
  );

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section
      id="portfolio"
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
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: translateY(20px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
      `,
        }}
      />

      <p
        style={{
          color: "var(--primary, #2563eb)",
          fontWeight: 700,
          fontSize: "0.8rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginBottom: "0.75rem",
        }}
      >
        Working Process
      </p>

      <h2
        style={{
          fontSize: "clamp(2.2rem, 5vw, 3rem)",
          fontWeight: 900,
          letterSpacing: "-0.03em",
          marginBottom: "2.5rem",
          lineHeight: 1.15,
          color: "var(--fg, #111)",
        }}
      >
        Portofolio <span style={{ color: "var(--primary, #2563eb)" }}>Proyek IT</span>
      </h2>

      {/* Filter Tabs */}
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          marginBottom: "2.5rem",
          flexWrap: "wrap",
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              padding: "0.4rem 1.15rem",
              borderRadius: "50px",
              border: "1px solid",
              borderColor:
                active === cat
                  ? "var(--primary, #2563eb)"
                  : "var(--border, #e5e7eb)",
              background:
                active === cat ? "var(--primary, #2563eb)" : "transparent",
              color: active === cat ? "#fff" : "var(--muted, #6b7280)",
              fontWeight: 500,
              fontSize: "0.85rem",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Card Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {filtered.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            onClick={() => setOpenProject(p)}
          />
        ))}
      </div>

      {/* Modal Detail */}
      {openProject && (
        <ProjectModal
          project={openProject}
          onClose={() => setOpenProject(null)}
        />
      )}
    </section>
  );
}