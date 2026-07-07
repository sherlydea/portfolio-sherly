"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    number: "01",
    title: "System Analysis",
    description:
      "Menganalisis kebutuhan pengguna, proses bisnis, serta menyusun solusi sistem yang sesuai dengan tujuan organisasi.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Merancang antarmuka yang sederhana, konsisten, dan memberikan pengalaman penggunaan yang nyaman.",
  },
  {
    number: "03",
    title: "Web Development",
    description:
      "Mengembangkan aplikasi web yang responsif menggunakan teknologi modern sesuai kebutuhan pengguna.",
  },
  {
    number: "04",
    title: "Mobile Development",
    description:
      "Membangun aplikasi mobile serta prototype yang berfokus pada kemudahan penggunaan dan efisiensi.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0B0F17] py-32"
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(204,255,0,.2) 1.5px, transparent 1.5px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-[#CCFF00]/5 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-[#FF8B72]/5 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="font-mono uppercase tracking-[.4em] text-xs text-[#CCFF00]">
            ABOUT ME
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Turning Ideas Into
            <br />
            Digital Experiences
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-9 text-slate-400">
            Saya merupakan mahasiswa Sistem Informasi di Universitas Pembangunan Nasional "Veteran" Jawa Timur dengan latar belakang Multimedia. Saya memiliki ketertarikan dalam memahami kebutuhan pengguna, menganalisis proses bisnis, merancang antarmuka yang intuitif, serta mengembangkan solusi digital yang memberikan pengalaman terbaik bagi pengguna. Melalui berbagai proyek akademik maupun personal, saya terus mengembangkan kemampuan di bidang UI/UX Design, System Analysis, Web Development, dan Mobile Development.
          </p>
        </motion.div>

        {/* ================= WHAT I DO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-28"
        >
          <div className="text-center">
            <span className="font-mono uppercase tracking-[.35em] text-xs text-[#FF8B72]">
              WHAT I DO
            </span>
            <h3 className="mt-5 text-4xl font-bold text-white">
              Areas I Continue to Develop
            </h3>
            <p className="mt-6 text-slate-400 max-w-2xl mx-auto leading-8">
              Saya terus mengembangkan kemampuan melalui berbagai proyek yang
              menggabungkan analisis, desain, dan implementasi menjadi solusi
              digital yang fungsional.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {SERVICES.map((item) => (
              <motion.div
                key={item.number}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="group rounded-3xl border border-slate-800 bg-[#111827]/60 backdrop-blur-xl p-8 hover:border-[#CCFF00]/20 transition-all duration-300"
              >
                <span className="text-sm font-mono text-slate-500">
                  {item.number}
                </span>
                <h4 className="mt-4 text-2xl font-bold text-white">
                  {item.title}
                </h4>
                <p className="mt-4 leading-8 text-slate-400">
                  {item.description}
                </p>
                <div className="mt-8 h-px w-full bg-gradient-to-r from-[#CCFF00]/50 via-transparent to-transparent" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= MY APPROACH ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-32"
        >
          <div className="rounded-[32px] border border-slate-800 bg-[#111827]/60 backdrop-blur-xl p-10 md:p-14">
            <div className="text-center">
              <span className="font-mono uppercase tracking-[.35em] text-xs text-[#E3D5CA]">
                MY APPROACH
              </span>
              <h3 className="mt-5 text-4xl font-bold text-white">
                How I Build Digital Solutions
              </h3>
              <p className="mt-6 max-w-3xl mx-auto leading-8 text-slate-400">
                Dalam setiap proyek, saya berusaha memahami permasalahan terlebih dahulu,
                kemudian merancang solusi yang tepat, dan mengimplementasikannya menjadi
                produk digital yang mudah digunakan serta memberikan nilai bagi pengguna.
              </p>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {/* STEP 1 */}
              <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#CCFF00]/30 bg-[#CCFF00]/10">
                  <span className="text-2xl font-black text-[#CCFF00]">01</span>
                </div>
                <h4 className="mt-6 text-xl font-bold text-white">Understand</h4>
                <p className="mt-3 leading-7 text-slate-400">
                  Memahami kebutuhan pengguna, tujuan bisnis, serta masalah yang ingin diselesaikan.
                </p>
              </div>

              {/* STEP 2 */}
              <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#FF8B72]/30 bg-[#FF8B72]/10">
                  <span className="text-2xl font-black text-[#FF8B72]">02</span>
                </div>
                <h4 className="mt-6 text-xl font-bold text-white">Design</h4>
                <p className="mt-3 leading-7 text-slate-400">
                  Merancang alur sistem, antarmuka, dan pengalaman pengguna yang sederhana dan efektif.
                </p>
              </div>

              {/* STEP 3 */}
              <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#E3D5CA]/30 bg-[#E3D5CA]/10">
                  <span className="text-2xl font-black text-[#E3D5CA]">03</span>
                </div>
                <h4 className="mt-6 text-xl font-bold text-white">Develop</h4>
                <p className="mt-3 leading-7 text-slate-400">
                  Mengimplementasikan solusi menjadi aplikasi yang responsif, fungsional, dan mudah digunakan.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}