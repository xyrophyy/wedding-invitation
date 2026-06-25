"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Page() {
  return (
    <main className="min-h-screen text-[#3a2e25] overflow-hidden font-serif relative">

      <BatikBackground />
      <Intro />

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

/* 🌸 BATIK BACKGROUND (PAKAI GAMBAR KAMU) */
function BatikBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <img
        src="/batik.png"
        className="w-full h-full object-cover opacity-25"
        alt="batik background"
      />
      <div className="absolute inset-0 bg-[#fbf6ef]/60" />
    </div>
  );
}

/* 🎬 CINEMATIC INTRO */
function Intro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-50 flex items-center justify-center text-white text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <p className="tracking-[0.4em] text-xs text-gray-400">
              THE WEDDING OF
            </p>

            <h1 className="text-5xl mt-4 font-semibold">
              Raka & Aulia
            </h1>

            <p className="mt-3 text-sm text-gray-300">
              20 • 12 • 2026
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* 💍 HERO (ELEGANT OVER BATIK) */
function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center px-6">

      <div className="bg-white/70 backdrop-blur-xl px-10 py-10 rounded-3xl shadow-xl border">

        <p className="tracking-[0.3em] text-xs text-[#7a5c3e]">
          UNDANGAN PERNIKAHAN
        </p>

        <h1 className="text-6xl mt-6 text-[#a67c52] font-semibold">
          Raka & Aulia
        </h1>

        <p className="mt-6 text-[#6b4f2a] max-w-md mx-auto">
          Dengan penuh cinta dan restu keluarga, kami mengundang Anda dalam hari bahagia kami
        </p>

      </div>

    </section>
  );
}

/* ⏳ COUNTDOWN */
function Countdown() {
  const [t, setT] = useState<any>({});

  useEffect(() => {
    const target = new Date("2026-12-20").getTime();

    const i = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;

      setT({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return (
    <section className="py-20 text-center">
      <h2 className="tracking-[0.3em] text-sm text-[#7a5c3e]">
        MENUJU HARI BAHAGIA
      </h2>

      <div className="flex justify-center gap-4 mt-10 flex-wrap">
        {Object.entries(t).map(([k, v]: any) => (
          <div key={k} className="bg-white border rounded-xl px-5 py-4 w-24">
            <p className="text-2xl text-[#a67c52]">{String(v)}</p>
            <p className="text-[10px] uppercase tracking-widest text-[#7a5c3e]">
              {k}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* 📸 GALLERY (PAKAI IMAGE KAMU JUGA NANTI) */
function Gallery() {
  const images = ["/batik.png", "/batik.png", "/batik.png"];

  return (
    <section className="py-20 text-center">
      <h2 className="tracking-[0.3em] text-sm text-[#7a5c3e] mb-10">
        GALERI PREWEDDING
      </h2>

      <div className="flex gap-4 overflow-x-auto px-6 snap-x">

        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            className="min-w-[280px] h-72 object-cover rounded-2xl shadow-lg snap-center"
          />
        ))}

      </div>
    </section>
  );
}

/* 📍 LOCATION */
function Location() {
  return (
    <section className="py-20 text-center">
      <h2 className="tracking-[0.3em] text-sm text-[#7a5c3e] mb-6">
        LOKASI
      </h2>

      <p className="mb-6">Gedung Adat Nusantara Ballroom</p>

      <a
        href="https://maps.google.com"
        className="bg-[#a67c52] text-white px-6 py-3 rounded-full"
      >
        Lihat Maps
      </a>
    </section>
  );
}

/* 💌 RSVP */
function RSVP() {
  return (
    <section className="py-20 text-center px-6">
      <h2 className="tracking-[0.3em] text-sm text-[#7a5c3e] mb-8">
        RSVP
      </h2>

      <div className="max-w-md mx-auto space-y-3">
        <input className="w-full border p-3 rounded-xl" placeholder="Nama" />
        <textarea className="w-full border p-3 rounded-xl" placeholder="Ucapan" />

        <button className="w-full bg-[#a67c52] text-white py-3 rounded-xl">
          Kirim
        </button>
      </div>
    </section>
  );
}

/* 🧾 FOOTER */
function Footer() {
  return (
    <footer className="py-10 text-center text-xs text-[#7a5c3e]">
      © 2026 Wedding Invitation
    </footer>
  );
}