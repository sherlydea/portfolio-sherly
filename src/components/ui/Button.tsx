"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  onClick,
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={
        variant === "primary"
          ? "group inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          : "rounded-xl border border-slate-700 bg-slate-900/30 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
      }
    >
      {children}
      
      {/* Bagian ikon ArrowRight di sini sudah dihapus bersih */}
    </motion.button>
  );
}