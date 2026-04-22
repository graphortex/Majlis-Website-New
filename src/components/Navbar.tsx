"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigationItems = [
	{ label: "Home", href: "/" },
	{ label: "Services", href: "/services" },
	{ label: "About Us", href: "/about" },
	{ label: "Contact Us", href: "/contact" },
];

const CONTACT_PHONE = "+971524779626";
const WHATSAPP_LINK = "https://wa.me/971524779626";

function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
			<path d="M6.9 3.5h2.5a1 1 0 0 1 1 .8l.6 3a1 1 0 0 1-.3.95L9.1 9.8a14.6 14.6 0 0 0 5.1 5.1l1.55-1.6a1 1 0 0 1 .95-.3l3 .6a1 1 0 0 1 .8 1v2.5a1.4 1.4 0 0 1-1.55 1.4A17.45 17.45 0 0 1 5.5 5.05 1.4 1.4 0 0 1 6.9 3.5Z" />
		</svg>
	);
}

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
			<path d="M12.04 2A9.92 9.92 0 0 0 3.5 17l-1.36 4.97 5.1-1.34A9.92 9.92 0 1 0 12.04 2Zm0 18.02a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.02.8.81-2.95-.2-.31a8.11 8.11 0 1 1 6.84 3.77Zm4.45-5.9c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.77.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.17-.71-.63-1.2-1.4-1.34-1.64-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.68 2.56 4.07 3.58.57.24 1.01.39 1.36.5.57.18 1.09.16 1.5.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
		</svg>
	);
}

export default function Navbar() {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		setIsMenuOpen(false);
	}, [pathname]);

	useEffect(() => {
		if (!isMenuOpen) {
			document.body.style.overflow = "";
			return;
		}

		document.body.style.overflow = "hidden";

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsMenuOpen(false);
			}
		};

		window.addEventListener("keydown", onKeyDown);

		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [isMenuOpen]);

	return (
		<>
			<header className="fixed inset-x-0 top-6 z-50 flex justify-center px-2 sm:px-4">
				<div className="relative hidden w-full max-w-[calc(100vw-1rem)] grid-cols-[1fr_auto_1fr] items-center lg:grid">
					<div className="glass-navbar relative col-start-2 flex items-center justify-self-center py-1 px-1.5 sm:py-1.5 sm:px-5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
						<nav className="items-center flex gap-x-0.5 sm:gap-1">
							{navigationItems.map((item) => {
								const isActive = pathname === item.href;
								return (
									<Link
										key={item.label}
										href={item.href}
										className={`relative rounded-full px-2.5 py-1.5 min-[375px]:px-3 sm:px-6 sm:py-2 text-[12px] min-[375px]:text-[13px] sm:text-[14px] font-medium tracking-wide transition-all duration-300 whitespace-nowrap ${
											isActive
												? "bg-white/20 text-white shadow-[inset_0_1px_3px_rgba(255,255,255,0.2)] ring-1 ring-white/10"
												: "text-[var(--color-offwhite)]/70 hover:text-white"
										}`}
									>
										{item.label}
									</Link>
								);
							})}
						</nav>
					</div>
					<div className="col-start-3 flex shrink-0 items-center justify-self-end gap-2">
						<a
							href={WHATSAPP_LINK}
							target="_blank"
							rel="noreferrer"
							aria-label="Chat on WhatsApp"
							className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/85 transition-colors hover:bg-white/20 hover:text-white"
						>
							<WhatsAppIcon className="h-4 w-4" />
						</a>
						<a
							href={`tel:${CONTACT_PHONE}`}
							aria-label={`Call us at ${CONTACT_PHONE}`}
							className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--color-navy)] transition-colors hover:bg-white/85"
						>
							<PhoneIcon className="h-4 w-4" />
						</a>
					</div>
				</div>

				<div className="relative flex w-full max-w-[calc(100vw-1rem)] items-center justify-between px-2 lg:hidden">
					<Link href="/" aria-label="Majlis Studio home" className="inline-flex items-center">
						<Image
							src="/logo/majlis-logo-new.png"
							alt="Majlis Studio"
							width={150}
							height={42}
							className="h-auto w-[126px]"
							priority={false}
						/>
					</Link>
					<div className="flex items-center gap-2">
						<a
							href={WHATSAPP_LINK}
							target="_blank"
							rel="noreferrer"
							aria-label="Chat on WhatsApp"
							className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-md"
						>
							<WhatsAppIcon className="h-[18px] w-[18px]" />
						</a>
						<a
							href={`tel:${CONTACT_PHONE}`}
							aria-label={`Call us at ${CONTACT_PHONE}`}
							className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--color-navy)] backdrop-blur-md"
						>
							<PhoneIcon className="h-[18px] w-[18px]" />
						</a>
						<button
							type="button"
							onClick={() => setIsMenuOpen((prev) => !prev)}
							aria-label={isMenuOpen ? "Close menu" : "Open menu"}
							aria-expanded={isMenuOpen}
							className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-md"
						>
							{isMenuOpen ? (
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
									<path d="M6 6l12 12" />
									<path d="M18 6L6 18" />
								</svg>
							) : (
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
									<path d="M4 7h16" />
									<path d="M4 12h16" />
									<path d="M4 17h16" />
								</svg>
							)}
						</button>
					</div>
				</div>
			</header>

			{isMenuOpen ? (
				<div className="fixed inset-0 z-40 lg:hidden">
					<div
						className="absolute inset-0 bg-black/55 backdrop-blur-xl"
						onClick={() => setIsMenuOpen(false)}
					/>
					<nav className="relative z-10 flex min-h-screen items-center justify-center px-8">
						<div className="flex w-full max-w-sm flex-col items-center gap-7 px-6 py-10">
							{navigationItems.map((item) => {
								const isActive = pathname === item.href;
								return (
									<Link
										key={item.label}
										href={item.href}
										className={`text-center text-[clamp(2.25rem,10vw,3.25rem)] leading-none tracking-wide transition-opacity ${
											isActive
												? "text-white"
												: "text-white/75 hover:text-white"
										}`}
										onClick={() => setIsMenuOpen(false)}
									>
										{item.label}
									</Link>
								);
							})}
						</div>
					</nav>
				</div>
			) : null}
		</>
	);
}
