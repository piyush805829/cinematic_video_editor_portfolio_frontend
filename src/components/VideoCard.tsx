"use client";

import { motion } from "framer-motion";

interface VideoCardProps {
  title: string;
  category: string;
  thumbnailUrl: string;
  categoryColor?: "primary" | "secondary";
  onClick: () => void;
}

export default function VideoCard({
  title,
  category,
  thumbnailUrl,
  categoryColor = "primary",
  onClick,
}: VideoCardProps) {
  const colorMap = {
    primary: {
      bg: "bg-primary/20",
      text: "text-primary",
    },
    secondary: {
      bg: "bg-secondary/20",
      text: "text-secondary",
    },
  };

  const colors = colorMap[categoryColor];

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={onClick}
      className="group relative bg-surface-container-highest overflow-hidden rounded-lg cursor-pointer ambient-shadow-hover"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden">
        <img
          className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
          src={thumbnailUrl}
          alt={title}
          loading="lazy"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest via-transparent to-transparent opacity-90" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
        <div className="flex justify-between items-end">
          <div>
            <span
              className={`${colors.bg} ${colors.text} px-3 py-1 text-xs font-bold rounded-full mb-3 inline-block`}
            >
              {category}
            </span>
            <h3 className="text-xl md:text-2xl font-bold font-display text-on-surface">
              {title}
            </h3>
          </div>
          <span className="text-primary text-4xl group-hover:translate-x-2 transition-transform duration-300 shrink-0 ml-4">
            ▶
          </span>
        </div>
      </div>
    </motion.div>
  );
}
