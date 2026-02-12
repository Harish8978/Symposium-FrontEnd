"use client";

import React, { useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function AnimatedBackground({ children }: { children: React.ReactNode }) {
  const { theme, themeName } = useTheme();

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: theme.background }}>
      {/* Background Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom right, ${theme.background}, ${themeName === 'deadpool' ? 'rgba(139, 0, 0, 0.15)' : 'rgba(0, 255, 65, 0.08)'}, ${theme.background})`
        }}
      />

      {/* Glow Orb */}
      <motion.div
        className="absolute top-[10%] left-1/2 -ml-[150px] w-[300px] h-[300px] rounded-full pointer-events-none blur-3xl opacity-20"
        style={{ backgroundColor: theme.glow }}
        animate={{
          opacity: [0.15, 0.4, 0.15],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Hacker Scan Line */}
      {themeName === 'hacker' && (
        <motion.div
          className="absolute left-0 right-0 h-[2px] opacity-20 pointer-events-none"
          style={{ backgroundColor: theme.primary }}
          initial={{ top: -100 }}
          animate={{ top: "100%" }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      )}

      {/* Content */}
      <motion.div
        className="relative z-10 w-full min-h-screen flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-full max-w-xl mx-auto flex-1 flex flex-col">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
