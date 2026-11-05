import { useState, type ChangeEvent, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type FormState = {
  name: string;
  phone: string;
  email: string;
  company: string;
  comment: string;
};

const INITIAL_FORM: FormState = {
  name: "",
  phone: "",
  email: "",
  company: "",
  comment: "",
};

const inputBase =
  "w-full rounded-md border bg-white px-4 py-3 text-[15px] text-gray-900 placeholder-gray-400 transition-colors outline-none focus:ring-2";
const inputNormal = `${inputBase} border-gray-300 focus:border-esp-red focus:ring-esp-red/25`;
const inputError = `${inputBase} border-esp-red focus:border-esp-red focus:ring-esp-red/25`;

export default function RequestForm() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (form.name.trim().length < 2) {
      nextErrors.name = "Укажите ваше имя";
    }
    const digits = form.phone.replace(/\D/g, "");
    if (digits.length < 10) {
      nextErrors.phone = "Укажите корректный телефон";
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      nextErrors.email = "Проверьте адрес электронной почты";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="request" className="bg-esp-gray">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Заявка"
            title="Готовы обсудить сотрудничество?"
            description="Оставьте заявку — мы подготовим персональный прайс-лист и коммерческое предложение в течение 24 часов."
          />
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_24px_60px_rgba(26,26,46,0.08)] sm:p-8 md:p-10">
            {submitted ? (
              <div
                className="flex flex-col items-center py-10 text-center"
                role="status"
                aria-live="polite"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-esp-red/10">
                  <CheckCircle2 className="h-9 w-9 text-esp-red" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold text-esp-dark">Заявка отправлена</h3>
                <p className="mt-3 max-w-md leading-relaxed text-gray-600">
                  Спасибо! Персональный менеджер свяжется с вами в течение рабочего дня и
                  подготовит индивидуальное коммерческое предложение.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm(INITIAL_FORM);
                    setSubmitted(false);
                  }}
                  className="mt-8 rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-esp-red hover:text-esp-red outline-none focus-visible:ring-2 focus-visible:ring-esp-red"
                >
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-esp-dark">
                      Имя <span className="text-esp-red" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Как к вам обращаться"
                      value={form.name}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={errors.name ? inputError : inputNormal}
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" className="mt-1.5 text-xs font-medium text-esp-red">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-esp-dark">
                      Телефон <span className="text-esp-red" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={form.phone}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      className={errors.phone ? inputError : inputNormal}
                    />
                    {errors.phone && (
                      <p id="phone-error" role="alert" className="mt-1.5 text-xs font-medium text-esp-red">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-esp-dark">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="name@company.ru"
                      value={form.email}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={errors.email ? inputError : inputNormal}
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="mt-1.5 text-xs font-medium text-esp-red">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="mb-1.5 block text-sm font-semibold text-esp-dark">
                      Компания
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Название организации"
                      value={form.company}
                      onChange={handleChange}
                      className={inputNormal}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="comment" className="mb-1.5 block text-sm font-semibold text-esp-dark">
                      Комментарий
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      rows={4}
                      placeholder="Интересующие категории, объёмы закупки, город доставки..."
                      value={form.comment}
                      onChange={handleChange}
                      className={`${inputNormal} resize-none`}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-md bg-esp-red px-8 py-4 text-base font-semibold text-white shadow-[0_10px_30px_rgba(210,51,51,0.3)] transition-colors hover:bg-esp-red-dark sm:w-auto outline-none focus-visible:ring-2 focus-visible:ring-esp-red focus-visible:ring-offset-2"
                >
                  <Send className="h-4.5 w-4.5" aria-hidden="true" />
                  Получить прайс-лист
                </button>
                <p className="mt-4 text-xs leading-relaxed text-gray-500">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
                  Данные используются только для связи по вашей заявке.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
