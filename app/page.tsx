"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#fbf6ef] text-[#3a2e25] font-serif overflow-x-hidden">

      <Hero />
      <Countdown />
      <Story />
      <Event />
      <Gallery />
      <Location />
      <RSVP />
      <Footer />

    </main>
  );
}

/* ================= HERO ================= */
function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center relative bg-gradient-to-b from-[#f7ead7] to-[#fbf6ef]">

      {/* BATIK OVERLAY */}
      <div className="absolute inset-0 opacity-10 bg-[url('/batik-pattern.png')] bg-cover" />

      {/* FLOATING GOLD GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-yellow-200 blur-3xl opacity-30 rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[300px] h-[300px] bg-orange-200 blur-3xl opacity-20 rounded-full bottom-[-80px] right-[-80px]" />

      <div className="z-10 px-6">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="tracking-[0.4em] text-xs text-[#7a5c3e]"
        >
          UNDANGAN PERNIKAHAN
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-6xl md:text-7xl mt-6 font-semibold text-[#a67c52]"
        >
          Raka & Aulia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-[#6b4f2a] max-w-md mx-auto"
        >
          Dengan penuh rasa syukur, kami mengundang Anda dalam acara sakral pernikahan kami
        </motion.p>

      </div>
    </section>
  );
}

/* ================= COUNTDOWN ================= */
function Countdown() {
  const [time, setTime] = useState<any>({});

  useEffect(() => {
    const target = new Date("2026-12-20").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;

      setTime({
        days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
        minutes: Math.max(0, Math.floor((diff / 1000 / 60) % 60)),
        seconds: Math.max(0, Math.floor((diff / 1000) % 60)),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 text-center">

      <h2 className="text-xl tracking-[0.3em] uppercase text-[#7a5c3e]">
        Menuju Hari Bahagia
      </h2>

      <div className="mt-12 flex justify-center gap-4 flex-wrap">

        {Object.entries(time).map(([k, v]) => (
          <motion.div
            key={k}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-[#e8d6c0] rounded-xl px-6 py-5 w-24 shadow-sm"
          >
            <p className="text-2xl text-[#a67c52]">{v}</p>
            <p className="text-[10px] uppercase tracking-widest text-[#7a5c3e]">
              {k}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

/* ================= STORY ================= */
function Story() {
  return (
    <section className="py-24 text-center bg-[#fbf6ef]">

      <h2 className="text-2xl tracking-[0.3em] uppercase text-[#7a5c3e] mb-8">
        Kisah Kami
      </h2>

      <p className="max-w-xl mx-auto text-[#6b4f2a] leading-relaxed">
        Dari pertemuan sederhana, tumbuhlah cinta yang membawa kami ke perjalanan hidup baru yang penuh berkah dan kebahagiaan.
      </p>

    </section>
  );
}

/* ================= EVENT ================= */
function Event() {
  return (
    <section className="py-24 text-center bg-white">

      <h2 className="text-xl tracking-[0.3em] uppercase text-[#7a5c3e] mb-10">
        Acara Pernikahan
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 px-6">

        <div className="p-8 rounded-2xl border border-[#e8d6c0] bg-[#fbf6ef]">
          <h3 className="text-xl text-[#a67c52]">Akad Nikah</h3>
          <p className="mt-2">20 Desember 2026</p>
          <p>Gedung Adat Ballroom</p>
        </div>

        <div className="p-8 rounded-2xl border border-[#e8d6c0] bg-[#fbf6ef]">
          <h3 className="text-xl text-[#a67c52]">Resepsi</h3>
          <p className="mt-2">20 Desember 2026</p>
          <p>Gedung Adat Ballroom</p>
        </div>

      </div>
    </section>
  );
}

/* ================= GALLERY ================= */
function Gallery() {
  return (
    <section className="py-24 text-center bg-[#fbf6ef]">

      <h2 className="text-xl tracking-[0.3em] uppercase text-[#7a5c3e] mb-10">
        Prewedding Gallery
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto px-6">

        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="h-40 bg-gray-200 rounded-xl shadow"
          />
        ))}

      </div>

    </section>
  );
}

/* ================= LOCATION ================= */
function Location() {
  return (
    <section className="py-24 text-center bg-[#fbf6ef]">

      <h2 className="text-xl tracking-[0.3em] uppercase text-[#7a5c3e] mb-6">
        Lokasi
      </h2>

      <p className="text-[#6b4f2a] mb-6">
        Gedung Adat Nusantara Ballroom
      </p>

      <a
        href="https://maps.google.com"
        className="px-8 py-3 bg-[#a67c52] text-white rounded-full hover:scale-105 transition"
      >
        Lihat Peta
      </a>

    </section>
  );
}

/* ================= RSVP ================= */
function RSVP() {
  return (
    <section className="py-24 bg-white text-center">

      <h2 className="text-xl tracking-[0.3em] uppercase text-[#7a5c3e] mb-8">
        RSVP
      </h2>

      <div className="max-w-md mx-auto space-y-4 px-6">

        <input className="w-full p-3 border border-[#e8d6c0] rounded-xl" placeholder="Nama Anda" />

        <select className="w-full p-3 border border-[#e8d6c0] rounded-xl">
          <option>Hadir</option>
          <option>Tidak Hadir</option>
        </select>

        <textarea className="w-full p-3 border border-[#e8d6c0] rounded-xl" placeholder="Ucapan" />

        <button className="w-full bg-[#a67c52] text-white py-3 rounded-xl hover:scale-105 transition">
          Kirim
        </button>

      </div>

    </section>
  );
}

/* ================= FOOTER ================= */
function Footer() {
  return (
    <footer className="py-16 text-center text-xs text-[#7a5c3e] tracking-[0.3em]">
      © 2026 Raka & Aulia • Wedding Invitation
    </footer>
  );
}