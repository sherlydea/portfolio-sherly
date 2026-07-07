"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SocialButton from "@/components/ui/SocialButton";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaMobileAlt,
  FaPalette,
} from "react-icons/fa";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const stickers = [
    {
      icon: <FaPalette size={14} />,
      label: "UI/UX Design",
      rotate: "-rotate-6",
      pos: "-top-5 md:-left-6 left-0",
      color: "text-[#0B0F17] bg-[#CCFF00]",
      delay: 0,
    },
    {
      icon: <FaCode size={14} />,
      label: "Web Development",
      rotate: "rotate-3",
      pos: "top-1/2 md:-right-8 right-0 md:-translate-y-1/2",
      color: "text-white bg-[#FF8B72]",
      delay: 0.6,
    },
    {
      icon: <FaMobileAlt size={14} />,
      label: "Mobile Development",
      rotate: "rotate-6",
      pos: "-bottom-5 md:-left-4 left-0",
      color: "text-[#0B0F17] bg-[#E3D5CA]",
      delay: 1.2,
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#0B0F17] overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(204,255,0,.25) 1.5px, transparent 1.5px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Glow */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#CCFF00]/5 blur-[110px]" />
      <div className="absolute top-1/3 -right-24 w-[380px] h-[380px] rounded-full bg-[#FF8B72]/5 blur-[110px]" />
      <div className="absolute bottom-0 left-1/3 w-[360px] h-[360px] rounded-full bg-[#E3D5CA]/5 blur-[110px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen pt-24 pb-12 lg:pt-28">

          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl w-full order-2 lg:order-1"
          >

            {/* LABEL */}

            <span className="inline-flex items-center gap-2 font-mono uppercase tracking-[0.32em] text-[#CCFF00] text-[10px] sm:text-xs">

              <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse" />

              Information Systems Student • UI/UX Enthusiast

            </span>

            {/* NAME */}

            <h1 className="mt-5 md:mt-6 leading-none">

              <span className="block text-white text-5xl sm:text-7xl xl:text-8xl font-extrabold tracking-tight">

                Sherly

              </span>

              <span className="relative inline-block mt-2 text-5xl sm:text-7xl xl:text-8xl font-extrabold bg-gradient-to-r from-[#FF8B72] via-[#E3D5CA] to-[#CCFF00] bg-clip-text text-transparent">

                Dea Aulia

                <svg
                  viewBox="0 0 300 20"
                  className="absolute -bottom-2 left-0 w-full h-3 md:h-4"
                  fill="none"
                >
                  <path
                    d="M2 12C40 2 70 20 110 10C150 0 180 18 220 8C250 1 270 14 298 6"
                    stroke="#FF8B72"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>

              </span>

            </h1>

            {/* HEADLINE */}

            <h2 className="mt-10 text-3xl md:text-4xl font-bold text-white leading-tight">

              Creating
              <br />

              <span className="text-[#CCFF00]">
                Digital Products
              </span>

              <br />

              That Matter.

            </h2>

            {/* DESCRIPTION */}

            <p className="mt-7 text-base sm:text-lg leading-8 text-slate-400">

              Mahasiswa Sistem Informasi UPN "Veteran" Jawa Timur dengan latar belakang Multimedia yang memiliki ketertarikan pada
              <span className="text-[#CCFF00] font-medium"> UI/UX Design</span>,
              <span className="text-[#FF8B72] font-medium"> Web Development</span>,
              <span className="text-[#E3D5CA] font-medium"> Mobile Development</span>,
              dan <span className="text-white font-medium">System Analysis</span>.
              Saya menikmati proses memahami kebutuhan pengguna, merancang antarmuka yang intuitif, serta mengembangkan solusi digital yang fungsional melalui kolaborasi dan pembelajaran yang berkelanjutan.

            </p>

            {/* BUTTON & SOCIAL */}

            <div className="mt-10 flex flex-wrap items-center gap-5">

              <button
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center rounded-xl bg-slate-800 px-6 py-3 text-sm font-semibold tracking-wide text-[#CCFF00] border border-slate-700 hover:bg-[#CCFF00] hover:text-[#0B0F17] transition-all duration-300"
              >

                Explore My Projects

              </button>

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
                    {/* ================= RIGHT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >

            <div className="relative w-full max-w-[470px]">

              {/* Floating Stickers */}

              {stickers.map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: item.delay,
                  }}
                  className={`absolute ${item.pos} z-20 ${item.rotate}`}
                >
                  <div
                    className={`flex items-center gap-2 rounded-full px-4 py-2 shadow-xl ${item.color}`}
                  >
                    {item.icon}
                    <span className="text-xs font-bold whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* CARD */}

              <div className="relative overflow-hidden rounded-[36px] border border-slate-800 bg-[#111827]/80 backdrop-blur-xl">

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

                {/* Overlay */}

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/80 to-transparent px-8 pb-8 pt-24">

                  <div className="inline-flex items-center gap-3 rounded-full border border-[#CCFF00]/30 bg-[#CCFF00]/10 px-5 py-2">

                    <span className="relative flex h-3 w-3">

                      <span className="absolute inline-flex h-full w-full rounded-full bg-[#CCFF00] animate-ping"></span>

                      <span className="relative inline-flex h-3 w-3 rounded-full bg-[#CCFF00]"></span>

                    </span>

                    <span className="text-sm font-medium text-[#CCFF00]">
                      Open to Internship
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* Scroll Indicator */}

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

        <div className="w-px h-10 bg-gradient-to-b from-[#CCFF00] to-transparent"></div>

      </motion.div>

    </section>
  );
}