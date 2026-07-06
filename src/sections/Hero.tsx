"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import SocialButton from "@/components/ui/SocialButton";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Hero() {

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen bg-slate-950 overflow-hidden">

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,.3) 1px, transparent 1px),linear-gradient(90deg, rgba(34,211,238,.3) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }}
      />

      {/* GLOW */}
      <div className="absolute -top-40 -left-40 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen pt-28">

          {/* ================= LEFT COLUMN ================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >

            {/* LABEL */}
            <span className="font-mono uppercase tracking-[0.45em] text-cyan-400 text-xs block">
              Information Systems Student
            </span>

            {/* NAME */}
            <h1 className="mt-6 leading-none">
              <span className="block text-white text-7xl xl:text-8xl font-extrabold">
                Sherly
              </span>
              <span className="block mt-2 text-7xl xl:text-8xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Dea Aulia
              </span>
            </h1>

            {/* HEADLINE */}
            <h2 className="mt-10 text-2xl md:text-3xl font-bold text-white leading-tight">
              Ready to support{" "}
              <br className="md:hidden" />
              <span className="text-cyan-300">your IT operations.</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-8 text-lg leading-8 text-slate-400">
              Mahasiswa Sistem Informasi UPN "Veteran" Jawa Timur yang memiliki minat pada bidang
              <span className="text-cyan-300 font-medium"> IT Support</span>,
              <span className="text-cyan-300 font-medium"> System Analysis</span>, dan
              <span className="text-cyan-300 font-medium"> UI/UX Design</span>.
              Saya senang mempelajari hal baru, mampu bekerja sama dalam tim,
              cepat beradaptasi dengan lingkungan kerja, serta berkomitmen
              memberikan hasil terbaik dalam setiap tanggung jawab yang diberikan.
            </p>

            {/* ACTION & SOCIAL BUTTONS */}
            <div className="mt-12 mb-20 flex flex-wrap items-center gap-6">

              {/* Tanda panah sudah dihapus dari teks di bawah ini */}
              <Button onClick={scrollToProjects}>
                View My Projects
              </Button>

              <div className="flex items-center gap-4">
                <SocialButton
                  href="https://github.com/sherlydea"
                  icon={<FaGithub size={20} />}
                />

                <SocialButton
                  href="https://www.linkedin.com/in/sherly-dea-aulia-17aa483b1/"
                  icon={<FaLinkedin size={20} />}
                />

                <SocialButton
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sherlydeaauliaa@gmail.com"
                  icon={<FaEnvelope size={20} />}
                />
              </div>

            </div>

          </motion.div>

          {/* ================= RIGHT COLUMN ================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >

            <div className="w-full max-w-[470px]">

              {/* CARD */}
              <div className="relative overflow-hidden rounded-[36px] border border-slate-700 bg-slate-900/80 backdrop-blur-xl">

                {/* PHOTO */}
                <div className="relative h-[620px]">
                  <Image
                    src="/images/profil-sherly.png"
                    alt="Sherly Dea Aulia"
                    fill
                    priority
                    className="object-cover object-top"
                  />
                </div>

                {/* STATUS OVERLAY */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent px-8 pb-8 pt-24">
                  <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-ping"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400"></span>
                    </span>
                    <span className="text-sm font-medium text-emerald-300">
                      Available for Internship
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 0.8,
        }}
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-mono uppercase tracking-[0.4em] text-[10px] text-slate-500">
          SCROLL
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-cyan-400 to-transparent"></div>
      </motion.div>

    </section>
  );
}