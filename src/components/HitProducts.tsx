import { ImageIcon } from "lucide-react";
import Reveal from "./Reveal";

const PRODUCTS = [
  "Аккумуляторная бесщ. ударная дрель ESP ДА24-2-2",
  "Аккумуляторная бесщеточная дрель ESP ДА21/2-2ПРО",
  "Аккумуляторная бесщеточная дрель ESP ДАУ16,8/2-2ПРО",
  "Аккумуляторная дрель ESP ДА18-2-2",
  "Аккумуляторная дрель ESP ДАУ12-2-2",
  "Аккумуляторная дрель ESP ДА18-2-2ПРО",
];

export default function HitProducts() {
  return (
    <section aria-labelledby="hits-heading" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex max-w-xl flex-col items-start gap-4">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-esp-red uppercase">
                <span className="h-px w-8 bg-esp-red" aria-hidden="true" />
                Каталог
              </span>
              <h2
                id="hits-heading"
                className="text-3xl font-extrabold tracking-tight text-esp-dark md:text-[2.5rem] md:leading-[1.15]"
              >
                Хиты продаж ESP-Tools
              </h2>
            </div>
            <p className="rounded-full border border-gray-200 bg-esp-gray px-5 py-2.5 text-sm font-medium text-gray-600">
              Цены — по запросу для оптовых клиентов
            </p>
          </div>
        </Reveal>

        {/* Horizontal snap-scroll row on mobile, 3-col grid on desktop */}
        <div className="no-scrollbar -mx-4 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 xl:grid-cols-3">
          {PRODUCTS.map((name, index) => (
            <Reveal
              key={name}
              delay={(index % 3) * 90}
              className="w-[75vw] max-w-[300px] shrink-0 snap-start sm:w-[300px] lg:w-auto lg:max-w-none"
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(26,26,46,0.12)]">
                <div
                  className="relative flex aspect-[4/3] items-center justify-center bg-esp-gray"
                  role="img"
                  aria-label={`Фото товара: ${name}`}
                >
                  <div className="flex flex-col items-center gap-2 text-gray-400">
                    <ImageIcon className="h-9 w-9" aria-hidden="true" />
                    <span className="text-[11px] font-semibold tracking-[0.2em] uppercase">
                      фото товара
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 rounded bg-esp-red px-2.5 py-1 text-[11px] font-bold tracking-wide text-white uppercase">
                    Хит
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="flex-1 text-[15px] leading-snug font-semibold text-esp-dark">
                    {name}
                  </h3>
                  <a
                    href="#request"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-esp-red px-4 py-2.5 text-sm font-semibold text-esp-red transition-colors group-hover:bg-esp-red group-hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-esp-red focus-visible:ring-offset-2"
                  >
                    Запросить цену
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-4 text-sm text-gray-500 lg:hidden" aria-hidden="true">
          Листайте, чтобы увидеть все позиции →
        </p>
      </div>
    </section>
  );
}
