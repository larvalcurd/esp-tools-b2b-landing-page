import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contacts" className="bg-esp-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {/* Brand */}
          <div>
            <a href="#top" className="inline-block leading-none outline-none focus-visible:ring-2 focus-visible:ring-esp-red rounded-sm">
              <span className="text-[22px] font-extrabold tracking-tight text-esp-red">
                ESP-TOOLS
              </span>
            </a>
            <p className="mt-1 text-[10px] font-medium tracking-[0.22em] text-white/50 uppercase">
              Электросила Поволжье
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Оптовые поставки профессионального электро- и бензоинструмента. Собственная
              торговая марка, 30+ лет на рынке.
            </p>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.18em] text-white/40 uppercase">
              Контакты
            </h3>
            <ul className="mt-5 space-y-3.5 text-sm">
              <li>
                <a
                  href="tel:+78352202321"
                  className="flex items-center gap-3 font-semibold text-white/85 transition-colors hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-esp-red rounded-sm"
                >
                  <Phone className="h-4 w-4 shrink-0 text-esp-red" aria-hidden="true" />
                  +7 (8352) 20-23-21
                </a>
              </li>
              <li>
                <a
                  href="tel:+79053404087"
                  className="flex items-center gap-3 font-semibold text-white/85 transition-colors hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-esp-red rounded-sm"
                >
                  <Phone className="h-4 w-4 shrink-0 text-esp-red" aria-hidden="true" />
                  +7 905 340 40 87
                </a>
              </li>
              <li>
                <a
                  href="mailto:site@esptools.ru"
                  className="flex items-center gap-3 text-white/70 transition-colors hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-esp-red rounded-sm"
                >
                  <Mail className="h-4 w-4 shrink-0 text-esp-red" aria-hidden="true" />
                  site@esptools.ru
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <MapPin className="h-4 w-4 shrink-0 text-esp-red" aria-hidden="true" />
                Чебоксары
              </li>
            </ul>
          </div>

          {/* Copyright */}
          <div className="md:text-right">
            <h3 className="text-xs font-semibold tracking-[0.18em] text-white/40 uppercase">
              Оптовый отдел
            </h3>
            <p className="mt-5 text-sm text-white/60">Пн–Пт, 9:00–18:00 (МСК)</p>
            <p className="mt-8 text-sm text-white/40">
              © 2024 ESP-Tools. Все права защищены.
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-white/30">
            Информация на сайте не является публичной офертой. Оптовые цены и условия
            предоставляются по запросу после регистрации партнёра.
          </p>
        </div>
      </div>
    </footer>
  );
}
