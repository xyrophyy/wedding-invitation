"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type CountdownTime = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[#fbf6ef] text-[#3a2e25] font-serif overflow-x-hidden">
      <GlobalSmoothStyle />
      <FloralForeground />
      <WindLeaves />

      <div className="relative z-10">
        <Hero />
        <Countdown />
        <Story />
        <Event />
        <Gallery />
        <Location />
        <RSVP />
        <Footer />
      </div>
    </main>
  );
}

/* GLOBAL SMOOTH UI UX */
function GlobalSmoothStyle() {
  return (
    <style jsx global>{`
      html {
        scroll-behavior: smooth;
        scroll-padding-top: 80px;
      }

      body {
        margin: 0;
        background: #fbf6ef;
        -webkit-font-smoothing: antialiased;
        text-rendering: geometricPrecision;
      }

      ::selection {
        background: rgba(166, 124, 82, 0.25);
        color: #3a2e25;
      }

      a,
      button {
        -webkit-tap-highlight-color: transparent;
      }

      .page-soft-bg {
        background:
          radial-gradient(circle at 50% 5%, rgba(255, 255, 255, 0.85), transparent 42%),
          radial-gradient(circle at 50% 45%, rgba(180, 132, 78, 0.06), transparent 45%),
          #fbf6ef;
      }

      .glass-card {
        background: rgba(255, 255, 255, 0.82);
        border: 1px solid rgba(234, 220, 200, 0.95);
        box-shadow: 0 18px 45px rgba(120, 80, 40, 0.09);
        backdrop-filter: blur(8px);
        transition:
          transform 420ms cubic-bezier(0.22, 1, 0.36, 1),
          box-shadow 420ms cubic-bezier(0.22, 1, 0.36, 1),
          border-color 420ms ease,
          background 420ms ease;
      }

      .glass-card:hover {
        transform: translateY(-7px);
        box-shadow: 0 24px 60px rgba(120, 80, 40, 0.14);
        border-color: rgba(185, 141, 85, 0.45);
        background: rgba(255, 255, 255, 0.94);
      }

      .smooth-btn {
        transition:
          transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
          box-shadow 320ms cubic-bezier(0.22, 1, 0.36, 1),
          background 320ms ease,
          color 320ms ease,
          border-color 320ms ease;
      }

      .smooth-btn:hover {
        transform: translateY(-3px);
      }

      .smooth-btn:active {
        transform: translateY(0) scale(0.98);
      }

      .smooth-btn:focus-visible {
        outline: 2px solid rgba(166, 124, 82, 0.55);
        outline-offset: 4px;
      }

      .image-soft {
        transition:
          transform 650ms cubic-bezier(0.22, 1, 0.36, 1),
          filter 650ms ease;
      }

      .image-soft:hover {
        transform: scale(1.035);
        filter: brightness(1.04) saturate(1.04);
      }

      .reveal {
        opacity: 0;
        transition:
          opacity 950ms ease,
          transform 950ms cubic-bezier(0.16, 1, 0.3, 1),
          filter 950ms ease;
        will-change: opacity, transform, filter;
      }

      .reveal-up {
        transform: translateY(42px);
        filter: blur(7px);
      }

      .reveal-left {
        transform: translateX(-46px);
        filter: blur(7px);
      }

      .reveal-right {
        transform: translateX(46px);
        filter: blur(7px);
      }

      .reveal-scale {
        transform: scale(0.92) translateY(26px);
        filter: blur(6px);
      }

      .reveal-roll {
        transform: translateY(45px) rotateX(68deg);
        transform-origin: bottom center;
        filter: blur(7px);
      }

      .reveal-show {
        opacity: 1;
        transform: translateX(0) translateY(0) rotateX(0deg) scale(1);
        filter: blur(0);
      }

      .soft-float {
        animation: softFloat 6.5s ease-in-out infinite;
      }

      @keyframes softFloat {
        0%,
        100% {
          transform: translateY(0);
        }

        50% {
          transform: translateY(-7px);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        html {
          scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `}</style>
  );
}

/* TRANSISI BERULANG SAAT SCROLL ATAS/BAWAH */
function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "left" | "right" | "scale" | "roll";
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: show ? `${delay}ms` : "0ms" }}
      className={`reveal reveal-${variant} ${show ? "reveal-show" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

/* BUNGA PALING DEPAN + ANIMASI HIDUP */
function FloralForeground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-visible">
      <img
        src="/flower-top-left.png"
        alt=""
        className="fixed top-[-45px] left-[-45px] w-[330px] sm:w-[390px] md:w-[460px] lg:w-[520px] opacity-100 select-none flower-life flower-top-left"
      />

      <img
        src="/flower-top-right.png"
        alt=""
        className="fixed top-[-45px] right-[-45px] w-[330px] sm:w-[390px] md:w-[460px] lg:w-[520px] opacity-100 select-none flower-life flower-top-right"
      />

      <img
        src="/flower-bottom-left.png"
        alt=""
        className="fixed bottom-[-95px] left-[-95px] w-[380px] sm:w-[450px] md:w-[540px] lg:w-[620px] opacity-100 select-none flower-life flower-bottom-left"
      />

      <img
        src="/flower-bottom-right.png"
        alt=""
        className="fixed bottom-[-95px] right-[-95px] w-[380px] sm:w-[450px] md:w-[540px] lg:w-[620px] opacity-100 select-none flower-life flower-bottom-right"
      />

      <style jsx global>{`
        .flower-life {
          will-change: transform;
          filter: drop-shadow(0 18px 28px rgba(120, 80, 40, 0.16));
        }

        .flower-top-left {
          transform-origin: top left;
          animation: flowerTopLeft 9s ease-in-out infinite;
        }

        .flower-top-right {
          transform-origin: top right;
          animation: flowerTopRight 10s ease-in-out infinite;
        }

        .flower-bottom-left {
          transform-origin: bottom left;
          animation: flowerBottomLeft 11s ease-in-out infinite;
        }

        .flower-bottom-right {
          transform-origin: bottom right;
          animation: flowerBottomRight 10.5s ease-in-out infinite;
        }

        @keyframes flowerTopLeft {
          0%,
          100% {
            transform: rotate(0deg) scale(1);
          }

          50% {
            transform: rotate(-1.4deg) scale(1.018) translateY(5px);
          }
        }

        @keyframes flowerTopRight {
          0%,
          100% {
            transform: rotate(0deg) scale(1);
          }

          50% {
            transform: rotate(1.4deg) scale(1.018) translateY(5px);
          }
        }

        @keyframes flowerBottomLeft {
          0%,
          100% {
            transform: rotate(0deg) scale(1);
          }

          50% {
            transform: rotate(1.2deg) scale(1.016) translateY(-6px);
          }
        }

        @keyframes flowerBottomRight {
          0%,
          100% {
            transform: rotate(0deg) scale(1);
          }

          50% {
            transform: rotate(-1.2deg) scale(1.016) translateY(-6px);
          }
        }
      `}</style>
    </div>
  );
}

/* DAUN TERBAWA ANGIN */
function WindLeaves() {
  const leaves = [
    { top: "10%", delay: "0s", duration: "16s", size: "18px" },
    { top: "22%", delay: "2s", duration: "18s", size: "14px" },
    { top: "35%", delay: "4s", duration: "20s", size: "16px" },
    { top: "48%", delay: "1s", duration: "17s", size: "13px" },
    { top: "62%", delay: "5s", duration: "21s", size: "17px" },
    { top: "76%", delay: "3s", duration: "19s", size: "15px" },
    { top: "88%", delay: "6s", duration: "22s", size: "14px" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998] overflow-hidden">
      {leaves.map((leaf, index) => (
        <span
          key={index}
          className="wind-leaf"
          style={{
            top: leaf.top,
            animationDelay: leaf.delay,
            animationDuration: leaf.duration,
            fontSize: leaf.size,
          }}
        >
          ❦
        </span>
      ))}

      <style jsx global>{`
        .wind-leaf {
          position: absolute;
          left: -12%;
          color: rgba(166, 124, 82, 0.42);
          text-shadow: 0 8px 18px rgba(120, 80, 40, 0.16);
          animation-name: leafWind;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform, opacity;
        }

        @keyframes leafWind {
          0% {
            transform: translateX(-10vw) translateY(0) rotate(0deg);
            opacity: 0;
          }

          12% {
            opacity: 0.6;
          }

          38% {
            transform: translateX(36vw) translateY(-22px) rotate(120deg);
          }

          66% {
            transform: translateX(72vw) translateY(20px) rotate(260deg);
            opacity: 0.55;
          }

          100% {
            transform: translateX(115vw) translateY(-10px) rotate(420deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

/* HERO */
function Hero() {
  return (
    <section className="page-soft-bg min-h-screen flex items-center justify-center text-center px-6 pt-24 pb-16">
      <div className="max-w-3xl mx-auto">
        <Reveal variant="roll">
          <p className="tracking-[0.45em] text-xs md:text-sm text-[#9a7448] uppercase">
            The Wedding Of
          </p>
        </Reveal>

        <Reveal variant="roll" delay={160}>
          <h1 className="mt-7 text-6xl md:text-8xl font-light leading-none text-[#a67c52] soft-float">
            Raka & Aulia
          </h1>
        </Reveal>

        <Reveal variant="scale" delay={300}>
          <div className="flex items-center justify-center gap-4 mt-7 text-[#b58a55]">
            <span className="h-px w-16 bg-[#c9a16c]" />
            <span className="text-lg">♡</span>
            <span className="h-px w-16 bg-[#c9a16c]" />
          </div>
        </Reveal>

        <Reveal variant="up" delay={430}>
          <p className="mt-6 tracking-[0.35em] text-sm text-[#8a6b4a]">
            20 • 12 • 2026
          </p>
        </Reveal>

        <Reveal variant="up" delay={560}>
          <p className="mt-8 max-w-xl mx-auto text-sm md:text-base leading-loose text-[#6b4f2a]">
            Dengan penuh cinta dan restu keluarga, kami mengundang
            Bapak/Ibu/Saudara/i untuk hadir dalam hari bahagia kami.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* COUNTDOWN */
function Countdown() {
  const [time, setTime] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date("2026-12-20T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = Math.max(0, target - now);

      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: "Hari", value: time.days },
    { label: "Jam", value: time.hours },
    { label: "Menit", value: time.minutes },
    { label: "Detik", value: time.seconds },
  ];

  return (
    <section className="py-16 md:py-20 px-6 text-center">
      <SectionTitle title="Menuju Hari Bahagia" />

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
        {items.map((item, index) => (
          <Reveal key={item.label} variant="scale" delay={index * 120}>
            <div className="glass-card rounded-xl py-6">
              <p className="text-4xl md:text-5xl font-light text-[#a67c52]">
                {String(item.value).padStart(2, "0")}
              </p>
              <p className="mt-2 text-sm text-[#7a5c3e]">{item.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* STORY */
function Story() {
  return (
    <section id="story" className="py-16 md:py-20 px-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <Reveal variant="left">
          <div className="bg-white p-3 rounded-xl shadow-[0_18px_48px_rgba(120,80,40,0.14)] rotate-[-2deg] overflow-hidden transition-transform duration-500 hover:rotate-0 hover:scale-[1.015]">
            <img
              src="/prewed1.jpg"
              alt="Prewedding"
              className="image-soft w-full h-[260px] md:h-[320px] object-cover rounded-lg"
            />
          </div>
        </Reveal>

        <Reveal variant="right" delay={160}>
          <div className="text-center md:text-left">
            <SectionTitle title="Kisah Cinta Kami" align="left" />

            <p className="mt-8 text-sm md:text-base leading-loose text-[#6b4f2a]">
              Dari pertemuan sederhana, tumbuhlah perjalanan cinta yang membawa
              kami menuju kehidupan baru yang penuh doa, kebahagiaan, dan restu
              keluarga.
            </p>

            <a
              href="#event"
              className="smooth-btn relative z-[10000] inline-block mt-8 border border-[#b98d55] text-[#9a7448] px-7 py-3 text-[11px] tracking-[0.25em] uppercase hover:bg-[#b98d55] hover:text-white cursor-pointer"
            >
              Selengkapnya
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* EVENT */
function Event() {
  return (
    <section id="event" className="py-16 md:py-20 px-6 text-center">
      <SectionTitle title="Acara" />

      <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Reveal variant="left">
          <EventCard
            title="Akad Nikah"
            time="08.00 - 10.00 WIB"
            location="Gedung Adat Nusantara Ballroom"
          />
        </Reveal>

        <Reveal variant="right" delay={160}>
          <EventCard
            title="Resepsi"
            time="11.00 - 15.00 WIB"
            location="Gedung Adat Nusantara Ballroom"
          />
        </Reveal>
      </div>
    </section>
  );
}

function EventCard({
  title,
  time,
  location,
}: {
  title: string;
  time: string;
  location: string;
}) {
  return (
    <div className="glass-card rounded-xl p-8">
      <div className="text-4xl text-[#b98d55] mb-4">❧</div>

      <h3 className="text-xl text-[#8a5e31]">{title}</h3>

      <p className="mt-4 text-sm text-[#6b4f2a]">20 Desember 2026</p>
      <p className="mt-1 text-sm text-[#6b4f2a]">{time}</p>
      <p className="mt-1 text-sm text-[#6b4f2a]">{location}</p>
    </div>
  );
}

/* GALLERY */
function Gallery() {
  const images = ["/prewed1.jpg", "/prewed2.jpg", "/prewed3.jpg"];

  return (
    <section className="py-16 md:py-20 px-6 text-center">
      <SectionTitle title="Galeri Prewedding" />

      <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-12">
        {images.map((src, index) => (
          <Reveal key={src} variant="scale" delay={index * 140}>
            <div
              className="bg-white p-3 w-[230px] md:w-[260px] rounded-lg shadow-[0_14px_35px_rgba(120,80,40,0.18)] transition-transform duration-500 hover:scale-[1.04] hover:rotate-0"
              style={{
                transform: `rotate(${
                  index === 0 ? "-3deg" : index === 1 ? "2deg" : "-2deg"
                })`,
              }}
            >
              <img
                src={src}
                alt={`Prewedding ${index + 1}`}
                className="image-soft w-full h-[170px] md:h-[190px] object-cover rounded-md"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* LOCATION */
function Location() {
  return (
    <section id="location" className="py-16 md:py-20 px-6 text-center">
      <SectionTitle title="Lokasi" />

      <Reveal variant="up" delay={140}>
        <div className="mt-8 max-w-xl mx-auto">
          <p className="text-lg text-[#6b4f2a]">
            Gedung Adat Nusantara Ballroom
          </p>

          <p className="mt-2 text-sm text-[#7a5c3e]">
            Jl. Nusantara No. 123, Jakarta
          </p>

          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="smooth-btn relative z-[10000] inline-block mt-8 bg-[#a67c52] text-white px-8 py-3 rounded-full text-xs tracking-[0.25em] uppercase shadow-[0_12px_26px_rgba(120,80,40,0.22)] hover:bg-[#8f653d] cursor-pointer"
          >
            Lihat di Google Maps
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* RSVP */
function RSVP() {
  return (
    <section
      id="rsvp"
      className="relative py-16 md:py-20 px-6 text-center bg-[#a67c52] text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.18),transparent_45%)]" />

      <Reveal variant="roll">
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-sm tracking-[0.35em] uppercase">
            Konfirmasi Kehadiran
          </h2>

          <div className="flex items-center justify-center gap-4 mt-4 opacity-80">
            <span className="h-px w-16 bg-white" />
            <span>♡</span>
            <span className="h-px w-16 bg-white" />
          </div>

          <p className="mt-6 text-sm opacity-90">
            Kehadiran Anda adalah doa dan kebahagiaan bagi kami.
          </p>

          <a
            href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20konfirmasi%20kehadiran%20di%20acara%20pernikahan%20Raka%20%26%20Aulia."
            target="_blank"
            rel="noopener noreferrer"
            className="smooth-btn relative z-[10000] inline-block mt-8 bg-white text-[#a67c52] px-9 py-3 rounded-full text-xs tracking-[0.25em] uppercase shadow-[0_14px_30px_rgba(70,40,20,0.18)] hover:bg-[#f8ead8] cursor-pointer"
          >
            Konfirmasi Sekarang
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* FOOTER */
function Footer() {
  return (
    <footer className="py-8 text-center text-xs text-[#8a6b4a] bg-[#fbf6ef]">
      <Reveal variant="up">
        © 2026 Raka & Aulia. All Rights Reserved.
      </Reveal>
    </footer>
  );
}

/* SECTION TITLE */
function SectionTitle({
  title,
  align = "center",
}: {
  title: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={align === "center" ? "text-center" : "text-center md:text-left"}
    >
      <Reveal variant="roll">
        <h2 className="text-sm tracking-[0.25em] uppercase text-[#9a7448]">
          {title}
        </h2>
      </Reveal>

      <Reveal variant="scale" delay={120}>
        <div
          className={`flex items-center gap-3 mt-3 ${
            align === "center"
              ? "justify-center"
              : "justify-center md:justify-start"
          }`}
        >
          <span className="h-px w-12 bg-[#c9a16c]" />
          <span className="text-[#c9a16c] text-xs">♡</span>
          <span className="h-px w-12 bg-[#c9a16c]" />
        </div>
      </Reveal>
    </div>
  );
}