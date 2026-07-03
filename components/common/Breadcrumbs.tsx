import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
};

export function Breadcrumbs({ items, variant = "dark" }: BreadcrumbsProps) {
  const isLight = variant === "light";

  return (
    <nav
      aria-label="Breadcrumb"
      className={`mb-6 text-sm ${isLight ? "text-white/60" : "text-black/60"}`}
    >
      <ol className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 && <span>/</span>}
            {item.href ? (
              <Link
                href={item.href}
                className={`transition ${isLight ? "hover:text-white" : "hover:text-brand"}`}
              >
                {item.label}
              </Link>
            ) : (
              <span className={isLight ? "text-white" : "text-black"}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
