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
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}

        <Link href="/" className="group">

          <h1 className="text-2xl font-bold tracking-tight text-white">

            Sherly
            <span className="text-cyan-400 group-hover:text-cyan-300 transition">
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
              className="text-slate-300 hover:text-cyan-400 transition font-medium"
            >
              {menu.title}
            </Link>
          ))}

        </nav>

        {/* Resume */}

        <div className="hidden lg:block">

          <a
            href="/CV-sherly-dea-aulia.pdf"
            target="_blank"
            className="rounded-xl border border-cyan-400 px-5 py-2.5 text-cyan-400 font-medium hover:bg-cyan-400 hover:text-slate-950 transition"
          >
            View CV
          </a>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="lg:hidden bg-slate-950 border-t border-slate-800"
          >

            <div className="flex flex-col px-6 py-8 gap-6">

              {menus.map((menu) => (

                <Link
                  key={menu.title}
                  href={menu.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-slate-300 hover:text-cyan-400 transition"
                >
                  {menu.title}
                </Link>

              ))}

              <a
                href="/CV-sherly-dea-aulia.pdf"
                target="_blank"
                className="mt-4 rounded-xl bg-cyan-400 text-slate-950 py-3 text-center font-semibold hover:bg-cyan-300 transition"
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