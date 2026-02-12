"use client";

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  const { theme, themeName } = useTheme();

  return (
    <div className="items-center mb-8">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="mb-8 relative"
      >
        <div
          className="w-48 h-48 rounded-full overflow-hidden border-4 absolute top-0 left-0 blur-md z-0"
          style={{ borderColor: theme.primary }}
        />
        <img
          src={theme.mascotImage}
          alt="Mascot"
          className="w-48 h-48 rounded-full object-cover border-4 relative z-10"
          style={{ borderColor: theme.primary }}
        />
        {/* Placeholder for Glitch effect if needed, simpler for web to just show image */}
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center"
      >
        <h1
          className="text-3xl md:text-4xl font-extrabold mb-3 tracking-wide"
          style={{ color: theme.text }}
        >
          {themeName === 'deadpool' ? 'MAXIMUM EFFORT' : 'SYSTEM READY'}
        </h1>
        <p
          className="text-lg font-medium tracking-wide max-w-[80%] mx-auto"
          style={{ color: theme.textSecondary }}
        >
          {themeName === 'deadpool'
            ? 'Your friendly neighborhood AI assistant.'
            : 'Initialize advanced protocol...'}
        </p>
      </motion.div>
    </div>
  );
}
