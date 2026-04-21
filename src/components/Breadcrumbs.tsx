import Link from "next/link";

type BreadcrumbsProps = {
  pathname: string;
};

function formatSegment(segment: string) {
  return segment
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default function Breadcrumbs({ pathname }: BreadcrumbsProps) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="pointer-events-none absolute inset-x-0 top-28 z-40 px-4 sm:top-28 sm:px-6 md:top-32 md:px-12"
    >
      <div className="mx-auto flex w-full max-w-7xl justify-start">
        <ol className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-[var(--color-silver)]/20 bg-[var(--color-navy)]/75 px-4 py-2 text-xs font-medium text-[var(--color-offwhite)] shadow-lg backdrop-blur-md sm:gap-3 sm:px-5 sm:py-2.5 sm:text-sm">
          <li>
            <Link href="/" className="transition-opacity hover:opacity-80">
              Home
            </Link>
          </li>

          {segments.map((segment, index) => {
            const href = `/${segments.slice(0, index + 1).join("/")}`;
            const isLast = index === segments.length - 1;

            return (
              <li key={href} className="inline-flex items-center gap-2">
                <span className="text-[var(--color-silver)]">/</span>
                {isLast ? (
                  <span className="text-[var(--color-offwhite)]/90" aria-current="page">
                    {formatSegment(segment)}
                  </span>
                ) : (
                  <Link href={href} className="transition-opacity hover:opacity-80">
                    {formatSegment(segment)}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}