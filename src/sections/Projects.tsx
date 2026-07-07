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
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#0B0F17] py-32 overflow-hidden">
      
      {/* DOT GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(204,255,0,.15) 1.5px, transparent 1.5px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* SOFT GLOWS */}
      <div className="absolute top-[-200px] left-1/2 w-[600px] h-[600px] bg-[#CCFF00]/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-200px] right-1/2 w-[500px] h-[500px] bg-[#FF8B72]/5 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#CCFF00]/20 bg-[#CCFF00]/5 mb-4">
            <span className="w-1 h-1 rounded-full bg-[#CCFF00]" />
            <p className="text-[#CCFF00] uppercase tracking-[.35em] text-[10px] font-bold font-mono">
              Portfolio Works
            </p>
          </div>

          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Selected Projects
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-slate-400 leading-8 text-base">
            Beberapa project yang saya kembangkan sebagai implementasi kemampuan UI/UX Design, System Analysis, dan Software Development selama perkuliahan.
          </p>
        </motion.div>

        {/* PROJECT LIST */}
        <div className="mt-28 space-y-32">
          {PROJECTS.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`flex flex-col md:flex-row gap-12 items-center ${
                  isReversed ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* IMAGE CONTAINER */}
                <div className="w-full md:w-1/2">
                  {project.image ? (
                    <div className="group relative rounded-3xl overflow-hidden border border-slate-800 bg-[#121722]/50 backdrop-blur-xl transition duration-300 hover:border-[#CCFF00]/30">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#CCFF00]/5 to-[#FF8B72]/5 opacity-0 group-hover:opacity-100 transition duration-500" />

                      <Image
                        src={project.image}
                        alt={project.title}
                        width={900}
                        height={600}
                        className="w-full h-auto object-cover group-hover:scale-[1.03] transition duration-500"
                      />
                    </div>
                  ) : (
                    <div className="h-[280px] rounded-3xl border border-slate-800 bg-[#121722]/50 flex items-center justify-center text-slate-500 text-sm font-mono backdrop-blur-xl">
                      No Preview Available
                    </div>
                  )}
                </div>

                {/* CONTENT CONTAINER */}
                <div className="w-full md:w-1/2">
                  <p className="text-[#FF8B72] text-xs font-bold tracking-[0.25em] uppercase font-mono">
                    {project.subtitle}
                  </p>

                  <h3 className="mt-3 text-3xl font-extrabold text-white tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-slate-400 leading-7 text-base font-normal">
                    {project.description}
                  </p>

                  {/* ROLE STACKS (Gaya Minimalis Tanpa Bubble) */}
                  <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-mono">
                    <span className="text-slate-500 font-bold uppercase tracking-wider">Roles:</span>
                    {project.role.map((r, i) => (
                      <span key={r} className="text-[#FF8B72] font-semibold">
                        {r}
                        {i < project.role.length - 1 && <span className="text-slate-800 ml-3">|</span>}
                      </span>
                    ))}
                  </div>

                  {/* TECH STACKS (Gaya Minimalis Tanpa Bubble) */}
                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-mono">
                    <span className="text-slate-500 font-bold uppercase tracking-wider">Tech:</span>
                    {project.tech.map((t, i) => (
                      <span key={t} className="text-[#CCFF00] font-semibold">
                        {t}
                        {i < project.tech.length - 1 && <span className="text-slate-800 ml-3">|</span>}
                      </span>
                    ))}
                  </div>

                  {/* ACTION BUTTONS (Murni Teks Dop Tanpa Ikon) */}
                  <div className="mt-8 flex flex-wrap gap-4">
                    {project.prototype && (
                      <a
                        href={project.prototype}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-xl bg-slate-800 px-6 py-3.5 text-xs font-bold tracking-wider text-[#E3D5CA] transition-all duration-200 hover:bg-[#E3D5CA] hover:text-[#0B0F17] hover:-translate-y-0.5 active:translate-y-0 shadow-md border border-slate-700"
                      >
                        View Prototype
                      </a>
                    )}

            
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* FOOTER FOOTPRINT CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-36"
        >
          <div className="rounded-3xl border border-slate-800/80 bg-[#121722]/40 backdrop-blur-xl p-10 text-center relative overflow-hidden">
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-[#CCFF00]/5 blur-2xl rounded-full" />
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Always Building &amp; Improving
            </h3>
            <p className="mt-3 max-w-xl mx-auto text-slate-400 leading-7 text-sm">
              Saya terus mengembangkan proyek baru untuk mengasah ketajaman analisis proses bisnis serta merancang pengalaman produk digital yang solutif.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}