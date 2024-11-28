import { Brand } from "@/components/ui/brand";
import { Menu } from "@/components/menu";
import React from "react";

export const Header: React.FC = () => {
	return (
		<header className="sticky top-0 inset-x-0 bg-background/60 supports-[backdrop-blur]:backdrop-blur-md">
			<nav className="flex items-center justify-between px-4 mx-auto max-w-7xl md:px-8 h-14">
				<Brand variant="link" />
				<Menu />
			</nav>
		</header>
	);
};
