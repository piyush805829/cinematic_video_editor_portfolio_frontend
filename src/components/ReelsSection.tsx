"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { reels as reelsData } from "@/data/videos";

const categoryColors: Record<string, { bg: string; text: string }> = {
  "Reel Edit": { bg: "bg-primary", text: "text-on-primary" },
  "Social Ad": { bg: "bg-secondary", text: "text-on-secondary" },
  "Ads": { bg: "bg-tertiary", text: "text-white" },
};

export default function ReelsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingId, setPlayingId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track active reel via IntersectionObserver
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      { root: container, threshold: 0.6 }
    );

    const sections = container.querySelectorAll(".reel-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  if (reelsData.length === 0) return null;

  return (
    <section id="reels" className="relative bg-surface-container-lowest">
      <div ref={containerRef} className="reels-container">
        {reelsData.map((reel, index) => {
          const catColor = categoryColors[reel.category] || {
            bg: "bg-primary",
            text: "text-on-primary",
          };

          return (
            <div
              key={reel.id}
              data-index={index}
              className="reel-section relative flex items-center justify-center overflow-hidden"
            >
              {/* Blurred Background */}
              <div className="absolute inset-0 z-0">
                <img
                  className="w-full h-full object-cover blur-3xl opacity-30 scale-110"
                  src={reel.thumbnailUrl}
                  alt=""
                  loading="lazy"
                />
              </div>

              {/* Reel Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full max-w-[380px] aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(210,119,255,0.2)] border border-white/10 mx-4 cursor-pointer"
                onClick={() =>
                  setPlayingId(playingId === reel.id ? null : reel.id)
                }
              >
                {/* Thumbnail or Player */}
                {playingId === reel.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${reel.videoId}?autoplay=1&loop=1&controls=0&rel=0`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope"
                    allowFullScreen
                    title={reel.title}
                  />
                ) : (
                  <>
                    <img
                      className="w-full h-full object-cover"
                      src={reel.thumbnailUrl}
                      alt={reel.title}
                      loading="lazy"
                    />
                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-white text-2xl ml-1">▶</span>
                      </div>
                    </div>
                  </>
                )}

                {/* Gradient Overlay (only on thumbnail) */}
                {playingId !== reel.id && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                )}

                {/* Content Overlay */}
                {playingId !== reel.id && (
                  <div className="absolute bottom-0 left-0 p-6 w-full pointer-events-none">
                    <span
                      className={`${catColor.bg} ${catColor.text} px-3 py-1 text-[10px] font-bold rounded-full mb-3 inline-block uppercase tracking-wider`}
                    >
                      {reel.category}
                    </span>
                    <h4 className="text-xl font-bold leading-tight mb-2 text-white">
                      {reel.title}
                    </h4>
                    <p className="text-white/70 text-sm mb-4">
                      {reel.description}
                    </p>
                    <div className="flex items-center gap-4 text-white/50">
                      <span className="text-xl">♡</span>
                      <span className="text-xl">💬</span>
                      <span className="text-xl">↗</span>
                    </div>
                  </div>
                )}

                {/* Progress Dots */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
                  {reelsData.map((_, dotIndex) => (
                    <div
                      key={dotIndex}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        dotIndex === activeIndex
                          ? index % 2 === 0
                            ? "bg-primary shadow-[0_0_10px_rgba(153,247,255,1)]"
                            : "bg-secondary shadow-[0_0_10px_rgba(210,119,255,1)]"
                          : "bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Bounce Arrow */}
              {index < reelsData.length - 1 && (
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 text-xs animate-bounce z-20">
                  <span className="text-2xl">⌄</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
