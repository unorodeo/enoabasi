import { Brand } from "./ui/brand";
import React from "react";

export const Footer: React.FC = () => {
	return (
		<footer className="mt-12 border-t bg-background">
			<nav className="flex items-start gap-12 px-4 py-6 mx-auto max-w-7xl md:py-12 md:px-8 md:justify-between md:gap-0">
				<div>
					<Brand variant="div"/>
					<span className="block mt-1 muted">
						The playground of Enoabasi Essien.
					</span>
				</div>
			</nav>
		</footer>
	);
};
