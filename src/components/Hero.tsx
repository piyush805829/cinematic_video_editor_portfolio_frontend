"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-surface">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-40">
        <img
          className="w-full h-full object-cover grayscale brightness-50"
          src="https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1920&q=80"
          alt="Cinematic studio background"
          loading="eager"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black font-display tracking-tighter text-on-surface mb-6 leading-none"
        >
          I Don&apos;t Just Edit Videos. <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="gradient-text glow-text"
          >
            I Craft Stories.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
          High-end post-production for brands who demand cinematic excellence
          and narrative depth in every frame.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#work"
            className="px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-bold rounded-md hover:scale-105 transition-all duration-300 text-base"
          >
            Explore Portfolio
          </a>
          <a
            href="#reels"
            className="px-8 py-4 bg-transparent border border-outline-variant/30 text-on-surface font-bold rounded-md hover:bg-surface-container-high transition-all duration-300 text-base"
          >
            Watch Showreel
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-headline tracking-widest uppercase text-on-surface-variant">
          Scroll to Edit
        </span>
        <motion.div
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-primary to-transparent origin-top"
        />
      </motion.div>
    </section>
  );
}
