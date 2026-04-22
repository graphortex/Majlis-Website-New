"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
	{ label: "Home", href: "/" },
	{ label: "Services", href: "/services" },
	{ label: "About Us", href: "/about" },
	{ label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
	const pathname = usePathname();

	return (
		<header className="fixed inset-x-0 top-6 z-50 flex justify-center px-2 sm:px-4">
			<div className="glass-navbar relative flex items-center justify-between py-1 px-1.5 sm:py-1.5 sm:px-5 max-w-[calc(100vw-1rem)] overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
				{/* Nav links */}
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
		</header>
	);
}
