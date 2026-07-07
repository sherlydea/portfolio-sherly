"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menus = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scroll
          ? "bg-[#0B0F17]/80 backdrop-blur-xl border-b border-slate-800/80"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="group">
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Sherly
            <span className="text-[#CCFF00] group-hover:text-[#FF8B72] transition-colors duration-300">
              .
            </span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10">
          {menus.map((menu) => (
            <Link
              key={menu.title}
              href={menu.href}
              className="text-slate-300 hover:text-[#CCFF00] transition-colors duration-200 font-mono text-sm tracking-wide font-semibold"
            >
              {menu.title}
            </Link>
          ))}
        </nav>

        {/* Resume Button (DESKTOP REVISI: Dop Solid Tanpa Ikon) */}
        <div className="hidden lg:block">
          <a
            href="/cv sherly dea aulia.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-slate-800 border border-slate-700 px-5 py-2.5 text-xs font-bold tracking-wider text-[#CCFF00] transition-all duration-200 hover:bg-[#CCFF00] hover:text-[#0B0F17] hover:-translate-y-0.5 shadow-md"
          >
            View CV
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white hover:text-[#CCFF00] transition-colors"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#0B0F17] border-t border-slate-800/60 shadow-xl"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {menus.map((menu) => (
                <Link
                  key={menu.title}
                  href={menu.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-semibold font-mono tracking-wide text-slate-300 hover:text-[#CCFF00] transition-colors"
                >
                  {menu.title}
                </Link>
              ))}

              {/* Resume Button (MOBILE REVISI: Dop Solid Tanpa Ikon) */}
              <a
                href="/cv sherly dea aulia.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-xl bg-slate-800 border border-slate-700 py-3 text-center text-xs font-bold tracking-wider text-[#CCFF00] transition-all duration-200 hover:bg-[#CCFF00] hover:text-[#0B0F17] active:bg-[#CCFF00]"
              >
                View CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}