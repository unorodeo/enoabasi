"use client";

import { MoonStarIcon, SunIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/cn";
import { useTheme } from "next-themes";

export const ThemeBtn: React.FC = () => {
	const { theme, setTheme } = useTheme();
	return (
		<Button
			type="button"
			variant="secondary"
			size="icon-sm"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
		>
			<SunIcon
				className={cn(
					"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0 text-current fill-current"
				)}
			/>
			<MoonStarIcon
				className={cn(
					"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100 text-current fill-current"
				)}
			/>
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
};
