import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#about", label: "О компании" },
  { href: "#catalog", label: "Каталог" },
  { href: "#advantages", label: "Преимущества" },
  { href: "#service", label: "Сервис" },
  { href: "#contacts", label: "Контакты" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-white shadow-[0_8px_30px_rgba(26,26,46,0.10)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#top"
          className="group flex flex-col leading-none outline-none focus-visible:ring-2 focus-visible:ring-esp-red rounded-sm"
          aria-label="ESP-Tools — на главную"
        >
          <span className="text-[22px] font-extrabold tracking-tight text-esp-red">
            ESP-TOOLS
          </span>
          <span
            className={`mt-1 text-[10px] font-medium tracking-[0.22em] uppercase transition-colors ${
              solid ? "text-gray-500" : "text-white/60"
            }`}
          >
            Электросила Поволжье
          </span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Основная навигация" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-esp-red rounded-sm ${
                solid ? "text-gray-700 hover:text-esp-red" : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Phone + CTA */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+78352202321"
            className={`flex items-center gap-2 text-sm font-bold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-esp-red rounded-sm ${
              solid ? "text-esp-dark hover:text-esp-red" : "text-white hover:text-white/80"
            }`}
          >
            <Phone className="h-4 w-4 text-esp-red" aria-hidden="true" />
            +7 (8352) 20-23-21
          </a>
          <a
            href="#request"
            className="rounded-md bg-esp-red px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-esp-red-dark outline-none focus-visible:ring-2 focus-visible:ring-esp-red focus-visible:ring-offset-2"
          >
            Получить прайс-лист
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-md transition-colors lg:hidden outline-none focus-visible:ring-2 focus-visible:ring-esp-red ${
            solid ? "text-esp-dark hover:bg-gray-100" : "text-white hover:bg-white/10"
          }`}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile panel */}
      <div
        className={`overflow-hidden bg-white transition-[max-height] duration-300 ease-out lg:hidden ${
          open
            ? "visible max-h-[480px] border-t border-gray-100 shadow-xl"
            : "invisible max-h-0"
        }`}
        aria-hidden={!open}
      >
        <nav aria-label="Мобильная навигация" className="flex flex-col gap-1 px-4 pt-3 pb-2 sm:px-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-[15px] font-semibold text-gray-800 transition-colors hover:bg-esp-gray hover:text-esp-red outline-none focus-visible:ring-2 focus-visible:ring-esp-red"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-3 border-t border-gray-100 px-4 py-4 sm:px-6">
          <a
            href="tel:+78352202321"
            className="flex items-center gap-2 text-[15px] font-bold text-esp-dark"
          >
            <Phone className="h-4 w-4 text-esp-red" aria-hidden="true" />
            +7 (8352) 20-23-21
          </a>
          <a
            href="#request"
            onClick={() => setOpen(false)}
            className="rounded-md bg-esp-red px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-esp-red-dark"
          >
            Получить прайс-лист
          </a>
        </div>
      </div>
    </header>
  );
}
