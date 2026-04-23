// ============================================================================
// 📁 VIDEO DATA — Single Source of Truth
// ============================================================================
//
// This file contains ALL video content displayed on the portfolio website.
// No database, no API — just edit this file to manage your videos.
//
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//
//  ➕ TO ADD A NEW VIDEO:
//     Copy one of the objects below and paste it at the end of the array.
//     Update the fields with your video's info.
//     Make sure to increment the `id` number.
//
//     Example:
//     {
//       id: 5,
//       title: "My New Video",
//       description: "A short description",
//       videoType: "youtube",       // "youtube" for landscape, "reel" for vertical/shorts
//       videoId: "YOUR_YOUTUBE_ID", // The ID from the YouTube URL
//       category: "Music Video",
//       thumbnailUrl: "https://img.youtube.com/vi/YOUR_YOUTUBE_ID/maxresdefault.jpg",
//     }
//
//  ✏️ TO EDIT A VIDEO:
//     Find the video object below and change any field you want.
//     For example, change `title: "Old Title"` to `title: "New Title"`.
//
//  ❌ TO DELETE A VIDEO:
//     Simply remove the entire object (from `{` to `},`) from the array.
//
//  💡 HOW TO FIND A YOUTUBE VIDEO ID:
//     YouTube URL: https://www.youtube.com/watch?v=NVMa86cxU-k
//     Video ID:    NVMa86cxU-k  (the part after ?v=)
//
//     Shorts URL:  https://www.youtube.com/shorts/dQw4w9WgXcQ
//     Video ID:    dQw4w9WgXcQ  (the part after /shorts/)
//
//  🖼️ THUMBNAIL TIP:
//     You can auto-generate a thumbnail URL from any YouTube video ID:
//     https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg
//
// ============================================================================

/** Video entry type */
export interface Video {
  /** Unique identifier (just increment for new entries) */
  id: number;
  /** Display title shown on the card and modal */
  title: string;
  /** Short description shown in the modal / overlay */
  description: string;
  /** "youtube" = landscape/long-form, "reel" = vertical/shorts */
  videoType: "youtube" | "reel";
  /** YouTube video ID (NOT the full URL — just the ID part) */
  videoId: string;
  /** Category label shown as a badge on the card */
  category: string;
  /** Thumbnail image URL (use YouTube auto-thumbnail or a custom URL) */
  thumbnailUrl: string;
}

// ============================================================================
// 🎬 YOUR VIDEOS — Edit this array to update the website!
// ============================================================================

export const videos: Video[] = [
  // ─── YouTube / Landscape Videos ──────────────────────────────────────────
  {
    id: 1,
    title: "Video 01",
    description:
      "Cinematic storytelling with precision editing and immersive visuals.",
    videoType: "youtube",
    videoId: "ncGT3BxJIzw",
    category: "Cinematic Edit",
    thumbnailUrl: "https://img.youtube.com/vi/ncGT3BxJIzw/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "Video 02",
    description:
      "High-end post-production showcasing dynamic pacing and visual narrative.",
    videoType: "youtube",
    videoId: "QcMyyblxmEI",
    category: "Cinematic Edit",
    thumbnailUrl: "https://img.youtube.com/vi/QcMyyblxmEI/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "Video 03",
    description:
      "Professional-grade editing with seamless transitions and color grading.",
    videoType: "youtube",
    videoId: "Sjnbsc81GHo",
    category: "Cinematic Edit",
    thumbnailUrl: "https://img.youtube.com/vi/Sjnbsc81GHo/maxresdefault.jpg",
  },

  // ─── Reels / Vertical Shorts ─────────────────────────────────────────────
  {
    id: 4,
    title: "Reel 01",
    description:
      "Fast-paced vertical edit with punchy transitions.",
    videoType: "reel",
    videoId: "i2qRfYxJmqE",
    category: "Reel Edit",
    thumbnailUrl: "https://img.youtube.com/vi/i2qRfYxJmqE/maxresdefault.jpg",
  },
  {
    id: 5,
    title: "Reel 02",
    description:
      "High-energy short-form content with cinematic flair.",
    videoType: "reel",
    videoId: "hDUrWeRyqoY",
    category: "Reel Edit",
    thumbnailUrl: "https://img.youtube.com/vi/hDUrWeRyqoY/maxresdefault.jpg",
  },
  {
    id: 6,
    title: "Reel 03",
    description:
      "Vertical storytelling optimized for maximum engagement.",
    videoType: "reel",
    videoId: "jEVz046zXtQ",
    category: "Social Ad",
    thumbnailUrl: "https://img.youtube.com/vi/jEVz046zXtQ/maxresdefault.jpg",
  },
  {
    id: 7,
    title: "Reel 04",
    description:
      "Dynamic motion graphics with attention-grabbing visuals.",
    videoType: "reel",
    videoId: "SflRJLf1lLY",
    category: "Social Ad",
    thumbnailUrl: "https://img.youtube.com/vi/SflRJLf1lLY/maxresdefault.jpg",
  },
  {
    id: 8,
    title: "Reel 05",
    description:
      "Crisp editing with smooth transitions and bold aesthetics.",
    videoType: "reel",
    videoId: "SEwZK313MgM",
    category: "Ads",
    thumbnailUrl: "https://img.youtube.com/vi/SEwZK313MgM/maxresdefault.jpg",
  },
  {
    id: 9,
    title: "Reel 06",
    description:
      "Cinematic product reveal with dramatic lighting and motion.",
    videoType: "reel",
    videoId: "l4W-YCi3YtU",
    category: "Ads",
    thumbnailUrl: "https://img.youtube.com/vi/l4W-YCi3YtU/maxresdefault.jpg",
  },
];

// ============================================================================
// 🔧 Pre-filtered arrays (used by components — no need to edit these)
// ============================================================================

/** All YouTube / landscape videos */
export const youtubeVideos = videos.filter((v) => v.videoType === "youtube");

/** All reels / vertical shorts */
export const reels = videos.filter((v) => v.videoType === "reel");
