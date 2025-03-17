"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Slows down the video slightly
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover fade-video"
      >
        <source src="/video/test.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for Readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Content with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <motion.h2
          className="text-white text-4xl md:text-6xl font-extrabold uppercase"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Bienvenue Chez
        </motion.h2>

        <motion.p
          className="text-yellow-300 font-bold text-2xl md:text-4xl pb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Home Deco
        </motion.p>

        <motion.p
          className="text-white font-medium text-lg md:text-2xl pb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Où le rêve de trouver le foyer parfait devient une réalité
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition"
        >
          About Us
        </motion.button>
      </motion.div>
    </section>
  );
}
