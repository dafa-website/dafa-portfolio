# Dafa Rizqullah — Multimedia Designer Portfolio

A modern, cinematic portfolio website built for **Achmad Dafa Rizqullah**, a multimedia designer specializing in video editing, motion graphics, social media content, and graphic design. Features smooth scroll-reveal animations, a glassmorphism navbar, Instagram-style video showcase, and a fully integrated headless CMS.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![Sanity](https://img.shields.io/badge/Sanity-5-F03E2F?logo=sanity)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)

---

## ✨ Features

- **Cinematic Hero Section** — Fullscreen animated gradient background with letter-by-letter heading animation, supports video backgrounds via CMS
- **Portfolio Grid** — 3-column responsive grid with uniform 3:4 aspect ratio cards, hover-reveal details, and scroll-triggered animations
- **Instagram-Style Video Reel** — Horizontal scrollable 9:16 video cards with platform badges, auto-play on scroll, and navigation arrows
- **Glassmorphism Navbar** — Always-on frosted glass effect that intensifies on scroll, fully responsive with mobile slide-in menu
- **About Section** — Split layout with portrait, bio, stats counter, skill tags, and social links
- **Contact Section** — CTA with email and WhatsApp buttons, location display
- **Scroll Reveal Animations** — Powered by Framer Motion with multiple variants (fade-up, fade-left, scale, etc.)
- **Film Grain Overlay** — Subtle animated grain texture for a cinematic aesthetic
- **Sanity CMS Integration** — Full headless CMS with embedded Studio at `/studio`, supports live content editing
- **Responsive Design** — Mobile-first layout optimized for all screen sizes
- **SEO Optimized** — Open Graph metadata, semantic HTML, and static site generation

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 16.1.6 | React framework with App Router, SSG, and server components |
| **React** | 19.2.3 | UI library |
| **TypeScript** | 5.x | Type-safe development |
| **Tailwind CSS** | 4.x | Utility-first CSS framework with custom theme tokens |
| **Framer Motion** | 12.x | Scroll-reveal and page transition animations |
| **Sanity** | 5.x | Headless CMS for content management |
| **next-sanity** | 12.x | Sanity integration for Next.js (client, live preview) |
| **@sanity/image-url** | 2.x | Sanity image URL builder and transformations |
| **next-cloudinary** | 6.x | Cloudinary image/video optimization (optional) |
| **Lucide React** | 0.577.x | Icon library |
| **Playfair Display** | — | Display font for headings (Google Fonts) |

---

## 📁 Project Structure

```
dafa-portfolio/
├── app/
│   ├── globals.css          # Tailwind v4 theme, glassmorphism, animations
│   ├── layout.tsx           # Root layout with metadata and grain overlay
│   ├── page.tsx             # Home page — orchestrates all sections
│   ├── projects/
│   │   └── [slug]/page.tsx  # Dynamic project detail pages
│   └── studio/
│       └── [[...tool]]/page.tsx  # Embedded Sanity Studio
├── components/
│   ├── layout/
│   │   └── Navbar.tsx       # Glassmorphism sticky navbar
│   ├── sections/
│   │   ├── Hero.tsx         # Fullscreen hero with animated heading
│   │   ├── Gallery.tsx      # Portfolio grid (Selected Works)
│   │   ├── VideoReel.tsx    # Horizontal video showcase
│   │   ├── About.tsx        # Bio, stats, skills, social links
│   │   ├── Contact.tsx      # CTA with email + WhatsApp
│   │   └── Footer.tsx       # Minimal footer with nav + socials
│   └── ui/
│       ├── AnimatedHeading.tsx  # Letter-by-letter animation
│       ├── ProjectCard.tsx      # Portfolio card with hover reveal
│       └── ScrollReveal.tsx     # Scroll-triggered animation wrapper
├── lib/
│   ├── mockData.ts          # Fallback demo content
│   ├── queries.ts           # GROQ queries for Sanity
│   ├── sanity.ts            # Sanity client + helpers
│   └── utils.ts             # Utility functions (cn, etc.)
├── sanity/
│   └── schemas/
│       ├── index.ts         # Schema registry
│       ├── project.ts       # Project document schema
│       ├── about.ts         # About document schema
│       └── siteSettings.ts  # Global site settings schema
├── types/
│   └── index.ts             # TypeScript interfaces
├── public/                  # Static assets
├── sanity.config.ts         # Sanity Studio configuration
├── next.config.ts           # Next.js configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm**, **yarn**, or **pnpm**
- A [Sanity.io](https://www.sanity.io/) account (optional — runs with mock data by default)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/dafa-portfolio.git
cd dafa-portfolio
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Variables

Create a `.env.local` file in the project root:

```env
# Sanity CMS (optional — app works with mock data if not configured)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

> **Note:** If you don't configure Sanity credentials, the site will automatically use built-in mock data showcasing Dafa's portfolio projects.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Access Sanity Studio (Optional)

Navigate to [http://localhost:3000/studio](http://localhost:3000/studio) to manage content through the embedded CMS.

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint checks |

---

## 🎨 Customization

### Theming

All design tokens are defined in `app/globals.css` using Tailwind v4's `@theme` directive:

```css
@theme inline {
  --color-background: #0a0a0a;
  --color-foreground: #fafafa;
  --color-accent: #c9a96e;        /* Gold accent */
  --color-accent-light: #e0c891;
  --color-card: #141414;
  --color-border: #262626;
  --font-display: "Playfair Display", Georgia, serif;
}
```

Modify these values to change the entire color scheme and typography instantly.

### Content

- **With Sanity CMS:** Edit content directly in the Studio at `/studio`. Manage projects, about info, and site settings through the visual editor.
- **Without Sanity CMS:** Update the mock data in `lib/mockData.ts` to change projects, bio, social links, and stats.

### Adding Projects

Each project requires:
- `title` — Project name
- `slug` — URL-friendly identifier
- `category` — Project type (e.g., "Video Editing", "Motion Graphics")
- `description` — Brief project description
- `coverImageUrl` — Cover image (3:4 aspect ratio recommended, 600×800px minimum)
- `client` — Client name (optional)
- `year` — Project year
- `featured` — Boolean to show on homepage

### Adding Videos

Edit the `defaultVideos` array in `components/sections/VideoReel.tsx` or pass video data via Sanity CMS:

```typescript
{
  url: "/videos/your-video.mp4",  // Local or external URL
  title: "Video Title",
  platform: "Instagram",          // Badge label
  views: "1M+"                    // Stats display
}
```

---

## 🌐 Deployment

### Vercel (Recommended)

1. Push the repository to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Add environment variables in the Vercel dashboard
4. Deploy — Vercel auto-detects Next.js settings

### Other Platforms

The project builds to static HTML where possible. Run `npm run build` and deploy the `.next` output to any Node.js hosting provider.

---

## 📄 CMS Schema Reference

### Project
| Field | Type | Description |
|---|---|---|
| `title` | String | Project name |
| `slug` | Slug | URL path segment |
| `category` | String | Project category |
| `description` | Text | Project description |
| `coverImage` | Image | Cover photo (3:4) |
| `images` | Image[] | Gallery images |
| `videoUrl` | URL | Project video |
| `client` | String | Client name |
| `year` | String | Project year |
| `featured` | Boolean | Show on homepage |

### About
| Field | Type | Description |
|---|---|---|
| `name` | String | Full name |
| `tagline` | String | Professional title |
| `bio` | Text | Biography paragraph |
| `profileImage` | Image | Portrait photo |
| `heroVideoUrl` | URL | Hero background video |
| `socialLinks` | Object[] | Platform + URL pairs |
| `experience` | String | Years of experience |
| `location` | String | City/region |

### Site Settings
| Field | Type | Description |
|---|---|---|
| `title` | String | Site title (SEO) |
| `description` | Text | Meta description |
| `heroVideoUrl` | URL | Hero video override |
| `heroTagline` | String | Hero subtitle override |

---

## 🤝 Credits

- **Design & Development** — Portfolio crafted for Achmad Dafa Rizqullah
- **Fonts** — [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (Google Fonts), [Geist](https://vercel.com/font) (Vercel)
- **Icons** — [Lucide](https://lucide.dev/)
- **Animations** — [Framer Motion](https://www.framer.com/motion/)
- **CMS** — [Sanity.io](https://www.sanity.io/)

---

## 📜 License

This project is private and intended for personal portfolio use.

---

## 📖 Panduan Penggunaan CMS (Untuk Klien)

Selamat datang di sistem manajemen konten website Anda! Panduan ini akan menjelaskan secara rinci fungsi dari masing-masing tombol dan kolom (field) isian di dalam Sanity.

### 1. 🔑 Cara Masuk (Login)
1. Buka tautan Sanity Studio di browser Anda (Biasanya berupa `www.website-anda.com/studio` atau `localhost:3000/studio`).
2. Anda akan diminta login. Silakan tekan opsi login dengan akun Google atau GitHub yang sebelumnya sudah didaftarkan.
3. Setelah masuk, pandangan pertama Anda adalah halaman **Desk** (kiri adalah menu, kanan adalah layar pengeditan).

### 2. 📂 Penjelasan Detail Setiap Menu (Desk)

#### A. ⚙️ Site Settings (Pengaturan Inti Website)
Ini adalah pusat informasi umum website Anda. **Hanya buat 1 dokumen** di dalam menu ini.
* **Site Title:** Judul website Anda (muncul pada tab browser).
* **Site Description:** Deskripsi singkat website untuk keperluan SEO Google.
* **Hero Video URL (Cloudinary):** Link video latar belakang untuk halaman paling depan (Hero Section). Gunakan link dari Cloudinary.
* **Hero Tagline:** Teks semboyan yang muncul di halaman depan, tepat di bawah nama Anda.
* **Overview Title:** Judul untuk bagian "Overview" (Sekilas Tentang) di halaman depan.
* **Overview Description:** Teks penjelasan/paragraf yang mendampingi "Overview Title".
* **Overview Video URL:** Video yang ditampilkan secara khusus pada seksi *Overview* di halaman depan.

#### B. 👤 About (Profil & Pengalaman)
Menu ini mengatur data diri, halaman "About", pengantar (preview) profil, serta riwayat pekerjaan. **Cukup buat 1 dokumen saja**.
* **Photographer Name:** Nama Anda yang ditampilkan di website.
* **Tagline:** Slogan atau profesi Anda (Contoh: *"Visual Storyteller & Photographer"*).
* **About Preview Copy:** Teks pendek yang akan ditampilkan pada riwayat singkat di halaman utama (Home). Mengatur Heading, Subtitle, Text Body, hingga tombol CTA.
* **Bio:** Penjelasan lengkap (biografi panjang) tentang diri Anda.
* **Profile Image:** Foto profil Anda. Fitur "Hotspot" tersedia agar Anda bisa menggeser titik fokus wajah.
* **Hero Background Video URL:** Video latar belakang khusus halaman "About".
* **Years of Experience:** Angka berapa lama Anda bekerja di industri ini (Misal: "5+").
* **Location:** Domisili Anda (Misal: "Jakarta, ID").
* **Social Links (Array):** Link akun media sosial (Instagram, LinkedIn, dll). Klik "Add item" -> Pilih Platform -> Masukkan URL.
* **Work Experience / Jobs (Array):** Riwayat pekerjaan Anda. Isi Role, Company, Location, Start/End Date, Description, dan Skills.

#### C. 📁 Project (Pusat Portofolio Karya)
Fungsi menu ini adalah tempat Anda menambah, mengedit, atau menghapus hasil portofolio. Setiap karya dibuat sebagai **1 dokumen terpisah**.
* **Title:** Judul proyek karya.
* **Slug:** Susunan tautan (link URL). **Wajib:** tekan tombol **"Generate"** otomatis, jangan diisi manual dengan spasi.
* **Category:** Kategori karya (*Video Editing, Graphic Design, AI Product Photography*).
* **Tags:** Label atau keyword (*Commercial*, *Corporate*, dll).
* **Description:** Deskripsi panjang tentang karya Anda.
* **Cover Image:** Gambar sampul utama (thumbnail). Wajib diisi.
* **Gallery Images:** Kumpulan foto tambahan dalam satu proyek.
* **Project Video:** Link dari Cloudinary untuk menampung tayangan video.
* **Client:** Nama Klien/Brand.
* **Year:** Tahun proyek diselesaikan. Sangat penting agar karya bisa di-sortir sistem urut dari yang terbaru.
* **Featured:** Nyalakan saklar (True) jika ingin karya ini disorot/tampil di halaman utama.

### 3. ✍️ Aturan Wajib Publikasi (Simpan & Tayangkan)
* Teks yang baru diketik akan berstatus **Draft** (belum tayang namun sudah tersimpan otomatis).
* **Tombol Publish (Wajib Ditekan):** Di sudut kanan bawah, klik tombol warna hijau **"Publish"** agar perubahan Anda ditayangkan langsung ke website publik. Khusus kolom URL video Cloudinary, perubahan bisa langsung tersimpan tanpa nge-publish teks jika videonya berhasil ter-upload.

#### Menghapus atau Menyembunyikan Karya
Klik karya Anda, pada tanda panah (atau titik tiga) di sebelah tombol "Publish", pilih:
* **Unpublish:** Menarik karya dari website, mengubahnya menjadi *Draft*.
* **Delete:** Menghapus data karya dari sistem selamanya.
