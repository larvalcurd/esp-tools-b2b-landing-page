import { Award, Handshake, Package, Truck } from "lucide-react";
import Reveal from "./Reveal";

const STATS = [
  { icon: Award, value: "30+", label: "лет на рынке" },
  { icon: Handshake, value: "500+", label: "оптовых партнёров" },
  { icon: Package, value: "2 000+", label: "SKU в наличии" },
  { icon: Truck, value: "4–12", label: "дней доставка по РФ" },
];

export default function StatsBar() {
  return (
    <section aria-label="Ключевые показатели компании" className="border-t border-white/10 bg-esp-dark">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 90}>
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-esp-red/15 sm:h-14 sm:w-14">
                  <stat.icon className="h-6 w-6 text-esp-red sm:h-7 sm:w-7" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <dt className="order-2 mt-1 text-sm text-white/55">{stat.label}</dt>
                  <dd className="order-1 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    {stat.value}
                  </dd>
                </div>
              </div>
            </Reveal>
          ))}
        </dl>
        <p className="mt-12 text-center text-xs leading-relaxed text-white/35">
          * Цифры указаны в качестве примера и будут заменены на реальные данные после согласования.
        </p>
      </div>
    </section>
  );
}
