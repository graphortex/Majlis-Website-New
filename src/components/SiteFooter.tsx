import Image from "next/image";
import Link from "next/link";

type IconProps = {
  className?: string;
};

function LinkedinIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M4.98 3.5A2.49 2.49 0 1 0 5 8.48a2.49 2.49 0 0 0-.02-4.98ZM3 9h4v12H3V9Zm7 0h3.84v1.64h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.09V21h-4v-5.54c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.92V21h-4V9Z" />
    </svg>
  );
}

function InstagramIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5A3.95 3.95 0 0 0 7.75 20.2h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.9 1.65a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Z" />
    </svg>
  );
}

function FacebookIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M13.5 21v-7h2.35l.35-2.8H13.5V9.43c0-.8.22-1.35 1.37-1.35h1.46V5.57A19.3 19.3 0 0 0 14.2 5c-2.2 0-3.7 1.34-3.7 3.8v2.4H8v2.8h2.5v7h3Z" />
    </svg>
  );
}

function YoutubeIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M21.58 7.2a2.96 2.96 0 0 0-2.08-2.1C17.68 4.6 12 4.6 12 4.6s-5.68 0-7.5.5a2.96 2.96 0 0 0-2.08 2.1C2 9.04 2 12 2 12s0 2.96.42 4.8a2.96 2.96 0 0 0 2.08 2.1c1.82.5 7.5.5 7.5.5s5.68 0 7.5-.5a2.96 2.96 0 0 0 2.08-2.1C22 14.96 22 12 22 12s0-2.96-.42-4.8ZM10.2 15.1V8.9l5.45 3.1-5.45 3.1Z" />
    </svg>
  );
}

function MailIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 6.75h18v10.5H3z" />
      <path d="m4 8 8 6 8-6" />
    </svg>
  );
}

function PhoneIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6.9 3.5h2.5a1 1 0 0 1 1 .8l.6 3a1 1 0 0 1-.3.95L9.1 9.8a14.6 14.6 0 0 0 5.1 5.1l1.55-1.6a1 1 0 0 1 .95-.3l3 .6a1 1 0 0 1 .8 1v2.5a1.4 1.4 0 0 1-1.55 1.4A17.45 17.45 0 0 1 5.5 5.05 1.4 1.4 0 0 1 6.9 3.5Z" />
    </svg>
  );
}

function PinIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

const servicesLinks = [
  { href: "/services", label: "AI Consultation" },
  { href: "/services", label: "Automation" },
  { href: "/services", label: "Branding" },
  { href: "/services", label: "Web Development" },
  { href: "/services", label: "Social Media" },
  { href: "/services", label: "E-Commerce" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/insights", label: "Blog" },
  { href: "#", label: "Partnerships" },
  { href: "#", label: "Marketplace" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#000] text-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <section>
            <Link href="/" className="inline-flex items-center" aria-label="Majlis Studio home">
              <Image
                src="/logo/majlis-logo-new.png"
                alt="Majlis Studio"
                width={260}
                height={74}
                className="h-auto w-[180px] sm:w-[220px]"
                priority={false}
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#888]">
              Creative by nature, smart by design. We transform businesses through innovative digital
              solutions and AI-powered experiences.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#2a2a2a] text-[#888] transition-colors duration-200 hover:bg-white hover:text-black"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#2a2a2a] text-[#888] transition-colors duration-200 hover:bg-white hover:text-black"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#2a2a2a] text-[#888] transition-colors duration-200 hover:bg-white hover:text-black"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#2a2a2a] text-[#888] transition-colors duration-200 hover:bg-white hover:text-black"
              >
                <YoutubeIcon />
              </a>
            </div>
          </section>

          <section>
            <h3 className="text-base font-semibold text-white">Services</h3>
            <ul className="mt-5 space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#888] transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-base font-semibold text-white">Company</h3>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#888] transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-base font-semibold text-white">Get in Touch</h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm text-[#888]">
                <span className="mt-0.5 text-white">
                  <MailIcon />
                </span>
                <a href="mailto:hello@majlistudio.com" className="transition-colors duration-200 hover:text-white">
                  hello@majlistudio.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#888]">
                <span className="mt-0.5 text-white">
                  <PhoneIcon />
                </span>
                <a href="tel:+971524779626" className="transition-colors duration-200 hover:text-white">
                  +971524779626
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#888]">
                <span className="mt-0.5 text-white">
                  <PinIcon />
                </span>
                <span>Dubai, UAE</span>
              </li>
            </ul>

            <a
              href="#top"
              className="mt-7 inline-flex items-center rounded-full border border-[#2a2a2a] px-4 py-2 text-sm text-[#888] transition-colors duration-200 hover:bg-white hover:text-black"
            >
              Back to Top ↑
            </a>
          </section>
        </div>

        <div className="mt-12 border-t border-[#151515] pt-6">
          <div className="flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[#888]">© {new Date().getFullYear()} Majlis Studio. All rights reserved.</p>

            <span
              aria-hidden="true"
              className="hidden h-2 w-16 rounded-full bg-[#1f1f1f] sm:inline-block"
            />

            <div className="flex items-center gap-5">
              <Link href="#" className="text-[#888] transition-colors duration-200 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-[#888] transition-colors duration-200 hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="text-[#888] transition-colors duration-200 hover:text-white">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}