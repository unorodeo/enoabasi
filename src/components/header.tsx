import { Brand } from "@/components/ui/brand";
import { Menu } from "@/components/menu";
import React from "react";

export const Header: React.FC = () => {
	return (
		<header className="sticky inset-x-0 top-0 z-50">
			<nav className="flex items-center justify-between px-4 mx-auto max-w-7xl md:px-8 h-14">
				<Brand variant="link" />
				<Menu />
			</nav>
		</header>
	);
};
