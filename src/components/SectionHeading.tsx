type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

/**
 * Consistent section header: red eyebrow, bold title, optional description.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const itemsClass = align === "center" ? "items-center" : "items-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignClass} ${itemsClass}`}>
      <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase">
        <span className="h-px w-8 bg-esp-red" aria-hidden="true" />
        <span className="text-esp-red">{eyebrow}</span>
        {align === "center" && <span className="h-px w-8 bg-esp-red" aria-hidden="true" />}
      </span>
      <h2
        className={`text-3xl font-extrabold tracking-tight text-balance md:text-[2.5rem] md:leading-[1.15] ${
          dark ? "text-white" : "text-esp-dark"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-relaxed md:text-lg ${dark ? "text-white/65" : "text-gray-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
