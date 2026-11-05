import { BadgeCheck, Container, Handshake, Wrench } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ADVANTAGES = [
  {
    icon: Container,
    title: "Прямые поставки",
    description:
      "Контейнерные поставки с фабрик Китая. Без посредников — минимальные цены для партнёров.",
  },
  {
    icon: BadgeCheck,
    title: "Собственный бренд",
    description:
      "СТМ ESP-Tools: полный контроль качества на каждом этапе производства.",
  },
  {
    icon: Wrench,
    title: "Авторизованный сервис",
    description:
      "Собственный сервисный центр в Чебоксарах. Гарантия, запчасти, ремонт.",
  },
  {
    icon: Handshake,
    title: "Гибкие условия",
    description:
      "Персональный менеджер, скидки от объёма, индивидуальные условия для постоянных партнёров.",
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="bg-esp-gray">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Преимущества"
            title="Почему с нами выгодно работать"
            description="Мы строим долгосрочные партнёрства: стабильный ассортимент, честные цены и поддержка после продажи."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ADVANTAGES.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <div className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(26,26,46,0.10)]">
                <div className="flex h-13 w-13 items-center justify-center rounded-lg bg-esp-red/10 p-3.5 transition-colors group-hover:bg-esp-red">
                  <item.icon
                    className="h-6 w-6 text-esp-red transition-colors group-hover:text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-6 text-lg font-bold text-esp-dark">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
