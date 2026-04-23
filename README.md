# CINEMATIC.EDITS — Video Editor Portfolio

A blazing-fast, frontend-only portfolio website built with **Next.js**, **Tailwind CSS**, and **Framer Motion**. No backend, no database — just pure static performance.

---

## 🎬 Features

- **YouTube Showcase** — Landscape video grid with modal player
- **Reels Section** — Vertical snap-scroll with play-on-click
- **Cinematic Design** — Dark theme, neon glows, glass morphism
- **Smooth Animations** — Framer Motion powered transitions
- **Fully Static** — No API calls, no database, no server needed
- **SEO Optimized** — Meta tags, semantic HTML, Open Graph

---

## 📁 Project Structure

```
app-build/
├── src/
│   ├── app/
│   │   ├── globals.css        # Design tokens & global styles
│   │   ├── layout.tsx         # Root layout with fonts & meta
│   │   └── page.tsx           # Homepage (assembles all sections)
│   ├── components/
│   │   ├── Hero.tsx           # Hero section with CTA
│   │   ├── Navbar.tsx         # Fixed navigation bar
│   │   ├── YouTubeShowcase.tsx # YouTube video grid
│   │   ├── ReelsSection.tsx   # Vertical reels with snap-scroll
│   │   ├── VideoCard.tsx      # Individual video card
│   │   ├── VideoModal.tsx     # Fullscreen video player modal
│   │   ├── ContactSection.tsx # Contact links (WhatsApp, IG, Email)
│   │   ├── Footer.tsx         # Footer with social links
│   │   └── TimelineLoader.tsx # Loading animation bar
│   └── data/
│       └── videos.ts          # ✅ ALL VIDEO CONTENT LIVES HERE
├── public/                    # Static assets
├── package.json
├── next.config.ts
└── tsconfig.json
```

---

## ✏️ How to Manage Videos

All videos are managed from a **single file**: `src/data/videos.ts`

### ➕ Add a New Video

Open `src/data/videos.ts` and add a new object to the `videos` array:

```ts
{
  id: 8,                           // Increment the ID
  title: "My Awesome Edit",        // Display title
  description: "A short description of the project",
  videoType: "youtube",            // "youtube" for landscape, "reel" for vertical
  videoId: "YOUR_YOUTUBE_VIDEO_ID", // Just the ID, not the full URL
  category: "Music Video",         // Category badge text
  thumbnailUrl: "https://img.youtube.com/vi/YOUR_YOUTUBE_VIDEO_ID/maxresdefault.jpg",
},
```

### ✏️ Edit a Video

Find the video object and change any field:

```ts
// Before
title: "Old Title",

// After
title: "Updated Title",
```

### ❌ Remove a Video

Simply delete the entire object (from `{` to `},`) from the array.

### 💡 Finding a YouTube Video ID

| URL Format | Example | Video ID |
|---|---|---|
| Regular | `youtube.com/watch?v=NVMa86cxU-k` | `NVMa86cxU-k` |
| Short | `youtu.be/NVMa86cxU-k` | `NVMa86cxU-k` |
| Shorts | `youtube.com/shorts/dQw4w9WgXcQ` | `dQw4w9WgXcQ` |

### 🖼️ Auto-Thumbnail

Generate a thumbnail automatically from any YouTube video ID:

```
https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg
```

---

## 🚀 Local Development

### Prerequisites

- **Node.js** 18+ installed
- **npm** or **yarn**

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🌍 Deploy to Vercel

### Steps

1. **Push your project to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Go to [vercel.com](https://vercel.com)** and sign in with GitHub

3. **Click "New Project"** → Select your repository

4. **Click "Deploy"** — that's it!

> **No environment variables needed.** The site is fully static.

### Updating Content

After editing `src/data/videos.ts`, just push to GitHub:

```bash
git add .
git commit -m "Update videos"
git push
```

Vercel will automatically rebuild and deploy.

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js](https://nextjs.org/) | React framework |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |

---

## 📄 License

© 2026 CINEMATIC.EDITS. All rights reserved.
