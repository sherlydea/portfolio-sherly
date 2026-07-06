"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Website SSB HBS",
    subtitle: "Football School Management System",
    image: "/images/projects/ssb-hbs.png",
    description:
      "Website sistem informasi untuk mendukung pengelolaan administrasi Sekolah Sepak Bola (SSB) HBS, meliputi data siswa, pelatih, jadwal latihan, dan administrasi secara digital.",
    role: ["System Analysis", "Web Development"],
    tech: ["Laravel", "PHP", "MySQL", "HTML", "CSS"],
  },

  {
    title: "SiBANDO",
    subtitle: "Disaster Information Mobile Application",
    image: "/images/projects/sibando.png",
    description:
      "Aplikasi informasi kebencanaan yang dirancang untuk mendukung penyebaran informasi, koordinasi relawan, serta membantu masyarakat memperoleh informasi terkait kondisi bencana secara cepat dan terintegrasi.",
    role: [
      "System Analysis",
      "UI/UX Design",
      "Mobile Development",
    ],
    tech: [
      "Flutter",
      "Dart",
      "Figma",
    ],
    prototype: "https://www.figma.com/proto/SSKlESCwxk2xG4aNxghEmk/Prototype-PEMMOB?node-id=0-1&t=e0Eqc5vNANkzanfO-1",
  },

  {
    title: "Sistem Kasir Mie Gacoan",
    subtitle: "Desktop Cashier Application",
    image: "/images/projects/migacoan.png",
    description:
      "Merancang dan membangun aplikasi kasir berbasis Java Swing (GUI) untuk mendukung proses transaksi penjualan.",
    role: ["Desktop Development"],
    tech: ["Java", "Java Swing"],
  },

  {
    title: "GoGoTalk",
    subtitle: "AI English Learning Prototype",
    image: "/images/projects/gogotalk.png",
    description:
      "Merancang UI/UX prototype aplikasi pembelajaran speaking Bahasa Inggris berbasis Artificial Intelligence (AI) menggunakan Figma.",
    role: ["UI/UX Design", "Prototype Design"],
    tech: ["Figma"],
    prototype: "https://www.figma.com/proto/JDCV6BVd6PlRKlWB4lt1k1/TIM-EDI-JUARA?node-id=0-1&t=1AnE1h2dRZ1G9uVs-1",
  },

  {
    title: "TaniMate",
    subtitle: "Smart Farming Prototype",
    image: "/images/projects/tanimate.png",
    description:
      "Merancang UI/UX prototype aplikasi pengelolaan usaha tani menggunakan Figma untuk membantu petani mengelola aktivitas pertanian secara digital.",
    role: ["UI/UX Design", "Prototype Design"],
    tech: ["Figma"],
    prototype: "https://www.figma.com/proto/7UKsXSa3iNe1ue3Z9URBio/UI-UX-TANIMATE?node-id=0-1&t=ni9bi3fD0VD9sjYf-1",
  },

  {
    title: "Analisis Infrastruktur TI J&T Cargo Menganti",
    subtitle: "IT Infrastructure Analysis",
    image: "/images/projects/jnt-cargo.png",
    description:
      "Melakukan analisis infrastruktur teknologi informasi pada J&T Cargo Menganti untuk mengidentifikasi kondisi infrastruktur saat ini serta memberikan rekomendasi perbaikan.",
    role: ["System Analysis"],
    tech: ["Documentation"],
    report: "/reports/jnt-cargo.pdf",
  },

  {
    title: "Perencanaan Sistem Informasi EQ-Math",
    subtitle: "Information System Planning",
    image: "/images/projects/eqmath-pkti.png",
    description:
      "Melakukan perencanaan sistem informasi untuk lembaga bimbingan belajar EQ-Math, meliputi identifikasi kebutuhan bisnis dan penyusunan rancangan solusi sistem.",
    role: ["System Analysis"],
    tech: ["Documentation"],
    report: "/reports/eq-math-pkti.pdf",
    dashboard: "https://v0-it-kpi-dashboard.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#070B18] py-32 overflow-hidden">
  {/* Background Glow */}
  <div className="absolute inset-0">
    <div className="absolute top-[-200px] left-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full" />
    <div className="absolute bottom-[-200px] right-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
  </div>

  <div className="relative max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center"
    >
      <p className="uppercase tracking-[0.4em] text-xs text-cyan-400 font-mono">
        Portfolio Works
      </p>

      <h2 className="mt-6 text-5xl font-bold text-white">
        Selected Projects
      </h2>

      <p className="mt-6 max-w-2xl mx-auto text-slate-400 leading-8">
        Beberapa project yang saya kembangkan selama perkuliahan sebagai implementasi
        kemampuan UI/UX Design, System Analysis, dan Software Development.
      </p>
    </motion.div>

    {/* PROJECT LIST */}
    <div className="mt-24 space-y-28">
      {PROJECTS.map((project, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className={`flex flex-col md:flex-row gap-10 items-center ${
              isReversed ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <div className="w-full md:w-1/2">
              {project.image ? (
                <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition" />

                  <Image
                    src={project.image}
                    alt={project.title}
                    width={900}
                    height={600}
                    className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
              ) : (
                <div className="h-[260px] rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 text-sm backdrop-blur-xl">
                  No Preview Available
                </div>
              )}
            </div>

            {/* CONTENT */}
            <div className="w-full md:w-1/2">
              <p className="text-cyan-400 text-xs tracking-[0.35em] uppercase font-mono">
                {project.subtitle}
              </p>

              <h3 className="mt-3 text-3xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-5 text-slate-400 leading-8">
                {project.description}
              </p>

              {/* ROLE */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.role.map((r) => (
                  <span
                    key={r}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300"
                  >
                    {r}
                  </span>
                ))}
              </div>

              {/* TECH */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

            {/* ACTION BUTTONS */}
<div className="mt-6 flex flex-wrap gap-3">

  {project.prototype && (
    <a
      href={project.prototype}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-purple-600 border border-purple-500 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-purple-500 hover:scale-105"
    >
      View Prototype
    </a>
  )}

  {project.report && (
    <a
      href={project.report}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-amber-600 border border-amber-500 px-5 py-2 text-sm font-medium text-slate-950 transition-all duration-300 hover:bg-amber-500 hover:scale-105"
    >
      View Report
    </a>
  )}

  {project.dashboard && (
    <a
      href={project.dashboard}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-cyan-600 border border-cyan-500 px-5 py-2 text-sm font-medium text-slate-950 transition-all duration-300 hover:bg-cyan-500 hover:scale-105"
    >
      View KPI Dashboard
    </a>
  )}

</div>

            </div>
          </motion.div>
        );
      })}
    </div>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mt-28"
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center">
        <h3 className="text-3xl font-bold text-white">
          Always Building & Improving
        </h3>

        <p className="mt-4 max-w-2xl mx-auto text-slate-400 leading-8">
          Saya terus mengembangkan project untuk meningkatkan skill di bidang
          UI/UX, System Analysis, dan Software Engineering.
        </p>
      </div>
    </motion.div>

  </div>
</section>
);
}