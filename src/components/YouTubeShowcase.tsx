"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";
import { youtubeVideos, type Video } from "@/data/videos";

export default function YouTubeShowcase() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const categoryColors: Record<string, "primary" | "secondary"> = {
    "Cinematic Edit": "primary",
    "Documentary Style": "primary",
    "Tech Review": "secondary",
    "Ads": "secondary",
    "Music Video": "primary",
  };

  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-headline tracking-[0.2em] uppercase text-sm mb-2 block">
              Case Studies
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-on-surface">
              YouTube Masterpieces
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-on-surface-variant max-w-md text-left md:text-right"
          >
            Long-form narrative editing focusing on retention, pacing, and visual
            storytelling for creators with 1M+ subscribers.
          </motion.p>
        </div>

        {/* Video Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {youtubeVideos.map((video) => (
            <VideoCard
              key={video.id}
              title={video.title}
              category={video.category}
              thumbnailUrl={video.thumbnailUrl}
              categoryColor={categoryColors[video.category] || "primary"}
              onClick={() => setSelectedVideo(video)}
            />
          ))}
        </motion.div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoId={selectedVideo.videoId}
          title={selectedVideo.title}
          description={selectedVideo.description}
        />
      )}
    </section>
  );
}
