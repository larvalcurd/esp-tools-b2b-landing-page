import { ShieldCheck, Wrench } from "lucide-react";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text column */}
          <Reveal>
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-esp-red uppercase">
                <span className="h-px w-8 bg-esp-red" aria-hidden="true" />
                О компании
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-esp-dark text-balance md:text-[2.5rem] md:leading-[1.15]">
                30 лет надёжных поставок инструмента для российского бизнеса
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-600 md:text-lg">
                <p>
                  Компания «Электросила Поволжье» — надёжный поставщик электро- и
                  бензоинструмента для бизнеса любого масштаба. Более 30 лет мы работаем на
                  рынке, начиная с розничных точек и вырастая до крупного оптового
                  дистрибьютора с собственной торговой маркой ESP-Tools.
                </p>
                <p>
                  Мы наладили прямые поставки контейнерами с проверенных фабрик Китая, что
                  позволяет нам предлагать нашим партнёрам лучшие цены без посредников.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                {["Работаем по договору с НДС", "Склад и офис в Чебоксарах", "Отгрузка по всей России"].map(
                  (item) => (
                    <span key={item} className="flex items-center gap-2 text-sm font-semibold text-esp-dark">
                      <ShieldCheck className="h-4.5 w-4.5 shrink-0 text-esp-red" aria-hidden="true" />
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </Reveal>

          {/* Image column */}
          <Reveal delay={150}>
            <div className="relative">
              <div
                className="absolute -top-5 -right-5 hidden h-full w-full rounded-2xl border-2 border-esp-red/20 lg:block"
                aria-hidden="true"
              />
              <img
                src="https://images.pexels.com/photos/30413428/pexels-photo-30413428.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900"
                alt="Аккумуляторные дрели ESP-Tools на рабочем столе сервисной мастерской"
                className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 left-5 flex items-center gap-4 rounded-xl bg-white p-4 pr-6 shadow-[0_16px_40px_rgba(26,26,46,0.16)] sm:left-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-esp-red">
                  <ShieldCheck className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-2xl leading-none font-extrabold text-esp-dark">30+</p>
                  <p className="mt-1 text-xs font-medium text-gray-500">лет стабильной работы</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Authorized service center — trust signal */}
        <Reveal delay={100}>
          <div
            id="service"
            className="mt-24 flex flex-col items-start gap-6 rounded-2xl border border-gray-200 bg-esp-gray p-7 sm:flex-row sm:items-center md:p-10"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-esp-red">
              <Wrench className="h-7 w-7 text-white" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-esp-dark md:text-2xl">
                Авторизованный сервисный центр
              </h3>
              <p className="mt-2 max-w-3xl leading-relaxed text-gray-600">
                Собственный сервисный центр в Чебоксарах: гарантийное и постгарантийное
                обслуживание, оригинальные запчасти и ремонт инструмента ESP-Tools. Ваши
                клиенты получают поддержку производителя без долгих пересылок и ожидания.
              </p>
            </div>
            <a
              href="#request"
              className="shrink-0 rounded-md border border-esp-red px-6 py-3 text-sm font-semibold text-esp-red transition-colors hover:bg-esp-red hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-esp-red focus-visible:ring-offset-2"
            >
              Уточнить условия
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
