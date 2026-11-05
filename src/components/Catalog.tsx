import { ArrowRight, Drill, Flame, Fuel, Ruler, Wind, Zap } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const CATEGORIES = [
  {
    icon: Drill,
    name: "Электроинструмент",
    description: "Дрели, перфораторы, УШМ, фрезеры, рубанки, шлифмашины.",
  },
  {
    icon: Fuel,
    name: "Бензоинструмент",
    description: "Бензопилы, генераторы, мотобуры, триммеры, снегоуборщики, газонокосилки.",
  },
  {
    icon: Wind,
    name: "Компрессоры и пневмоинструмент",
    description: "Поршневые компрессоры, гайковёрты, краскопульты, продувочные пистолеты.",
  },
  {
    icon: Zap,
    name: "Сварочное оборудование",
    description: "Сварочные инверторы, полуавтоматы, маски и комплектующие.",
  },
  {
    icon: Flame,
    name: "Тепловые пушки",
    description: "Электрические, газовые и дизельные пушки для объектов любой площади.",
  },
  {
    icon: Ruler,
    name: "Измерительные приборы",
    description: "Мультиметры, тестеры, детекторы и контрольно-измерительный инструмент.",
  },
];

export default function Catalog() {
  return (
    <section id="catalog" className="bg-esp-gray">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Каталог"
            title="Категории товаров для оптовых закупок"
            description="Более 2 000 SKU на собственном складе. Полный прайс-лист с оптовыми ценами направим по запросу."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category, index) => (
            <Reveal key={category.name} delay={(index % 3) * 100}>
              <a
                href="#request"
                aria-label={`Запросить подробности: ${category.name}`}
                className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:scale-[1.02] hover:border-esp-red/40 hover:shadow-[0_20px_45px_rgba(26,26,46,0.10)] outline-none focus-visible:ring-2 focus-visible:ring-esp-red"
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-lg bg-esp-red/10 p-3.5 transition-colors group-hover:bg-esp-red">
                  <category.icon
                    className="h-6 w-6 text-esp-red transition-colors group-hover:text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-6 text-lg font-bold text-esp-dark">{category.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  {category.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-esp-red">
                  Подробнее
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
