import { CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const TRUST_POINTS = [
  "Прямые контракты с фабриками Китая",
  "Собственная ТМ ESP-Tools",
  "Авторизованный сервисный центр",
];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-esp-dark">
      {/* Background */}
      <img
        src="https://images.pexels.com/photos/4170172/pexels-photo-4170172.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1920&h=1280"
        alt="Склад оптового поставщика инструмента и строительных материалов"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      {/* Subtle linear gradient overlay (hero only) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(26,26,46,0.97) 0%, rgba(26,26,46,0.88) 42%, rgba(26,26,46,0.62) 72%, rgba(210,51,51,0.30) 130%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-esp-dark to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-40 pb-28 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-white/85 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-esp-red" aria-hidden="true" />
              Оптовые поставки инструмента · Чебоксары
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-7 text-4xl leading-[1.12] font-extrabold tracking-tight text-white text-balance sm:text-5xl lg:text-[3.6rem]">
              Профессиональный{" "}
              <span className="underline decoration-esp-red decoration-[5px] underline-offset-[10px]">
                инструмент
              </span>{" "}
              оптом от производителя
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">
              30+ лет на рынке. Собственная торговая марка. Прямые поставки контейнерами —
              лучшие цены для вашего бизнеса.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#request"
                className="inline-flex items-center justify-center rounded-md bg-esp-red px-8 py-4 text-base font-semibold text-white shadow-[0_10px_30px_rgba(210,51,51,0.35)] transition-all hover:bg-esp-red-dark hover:shadow-[0_6px_20px_rgba(210,51,51,0.4)] outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Стать партнёром
              </a>
              <a
                href="#catalog"
                className="inline-flex items-center justify-center rounded-md border border-white/50 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white hover:bg-white hover:text-esp-dark outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Скачать каталог
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3">
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm font-medium text-white/70">
                  <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-esp-red" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
