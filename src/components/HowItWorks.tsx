import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    number: "01",
    title: "Оставьте заявку",
    description: "Заполните форму или позвоните нам.",
  },
  {
    number: "02",
    title: "Получите КП",
    description:
      "Персональный менеджер подготовит индивидуальное предложение в течение 24 часов.",
  },
  {
    number: "03",
    title: "Получите товар",
    description: "Отгрузка со склада. Доставка 4–12 дней по всей России.",
  },
];

export default function HowItWorks() {
  return (
    <section aria-labelledby="steps-heading" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Как начать работать"
            title="Три шага до первой поставки"
          />
        </Reveal>

        <ol className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {/* Connector line (desktop) */}
          <div
            className="absolute top-7 right-[18%] left-[18%] hidden border-t-2 border-dashed border-gray-300 md:block"
            aria-hidden="true"
          />
          {STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 120}>
              <li className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-esp-red text-lg font-extrabold text-white shadow-[0_10px_25px_rgba(210,51,51,0.35)] ring-8 ring-white">
                  {index + 1}
                  <span className="sr-only">{`Шаг ${index + 1}`}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-esp-dark">{step.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-600 md:text-base">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
