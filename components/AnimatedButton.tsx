"use client";

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import clsx from 'clsx'; // Make sure clsx is installed or just use template literals

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: 'primary' | 'outline' | 'ghost';
  isLoading?: boolean;
  className?: string; // allow overriding classes
}

export default function AnimatedButton({
  title,
  variant = 'primary',
  isLoading = false,
  className,
  disabled,
  ...props
}: AnimatedButtonProps) {
  const { theme } = useTheme();

  const getBaseStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: theme.buttonBg,
          color: theme.buttonText,
          border: 'none',
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: theme.text,
          border: `1px solid ${theme.primary}`,
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: theme.textSecondary,
          border: 'none',
        };
    }
  };

  const styles = getBaseStyles();

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      disabled={disabled || isLoading}
      className={clsx(
        "w-full py-[14px] px-4 rounded-xl flex flex-row items-center justify-center font-bold text-sm tracking-wide transition-colors",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      style={styles as any}
      {...props as any}
    >
      {isLoading ? (
        <Loader2 className="animate-spin mr-2" size={20} />
      ) : null}
      {title}
    </motion.button>
  );
}
