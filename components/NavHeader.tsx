"use client";

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';
import ThemeToggle from './ThemeToggle';
import { LogOut, Shield, Code2 } from 'lucide-react';
import Link from 'next/link';

interface NavHeaderProps {
  showAuthButtons?: boolean;
}

export default function NavHeader({
  showAuthButtons = true,
}: NavHeaderProps) {
  const { theme, themeName } = useTheme();
  const { isAuthenticated, logout } = useAuth();

  // Handlers for Login/Signup are not passed anymore because we used Link in Next.js
  // or checking pathname, but keeping it simple with Links.

  return (
    <div
      className="flex flex-row justify-between items-center px-4 md:px-5 py-3.5 border-b"
      style={{ borderBottomColor: theme.surfaceLight }}
    >
      <div className="flex flex-row items-center gap-2.5">
        <div
          className="w-9 h-9 rounded-md border flex justify-center items-center"
          style={{ backgroundColor: theme.surface, borderColor: theme.primary }}
        >
          {themeName === 'deadpool' ? (
            <Shield color={theme.primary} size={20} />
          ) : (
            <Code2 color={theme.primary} size={20} />
          )}
        </div>
        <div>
          <h1 className="text-sm font-extrabold tracking-[2px]" style={{ color: theme.text }}>
            {themeName === 'deadpool' ? 'DEADPOOL' : 'HACKER'}
          </h1>
          <span className="text-[10px] font-semibold tracking-[1px] block -mt-0.5" style={{ color: theme.primary }}>
            {themeName === 'deadpool' ? 'CHAT' : 'TERMINAL'}
          </span>
        </div>
      </div>

      <div className="flex flex-row items-center gap-2.5">
        {showAuthButtons && !isAuthenticated && (
          <>
            <Link
              href="/login"
              className="px-4 py-2.5 rounded-lg border text-[13px] font-semibold hover:opacity-80 transition-opacity"
              style={{ borderColor: theme.surfaceLight, color: theme.textSecondary }}
            >
              Login
            </Link>
          </>
        )}
        {isAuthenticated && (
          <button
            onClick={logout}
            className="flex flex-row items-center gap-1.5 px-3.5 py-2.5 rounded-lg border hover:bg-opacity-80 transition-all text-[13px] font-semibold"
            style={{
              backgroundColor: theme.surface,
              borderColor: theme.surfaceLight,
              color: theme.textSecondary
            }}
          >
            <LogOut color={theme.primary} size={18} />
            Logout
          </button>
        )}
        <ThemeToggle />
      </div>
    </div>
  );
}
