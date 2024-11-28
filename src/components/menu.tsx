"use client";

import { Button, buttonVariants } from "@/components/ui/button";

import { HEADER_NAVS } from "@/utils/navigations";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { ThemeBtn } from "@/components/theme-btn";
import { cn } from "@/lib/cn";
import { useIsMobile } from "@/hooks/use-is-mobile";

export const Menu: React.FC = () => {
	const matches = useIsMobile();

	return (
		<>
			{matches ? (
				<Button
					type="button"
					variant={"secondary"}
					size={"icon-md"}
					title="toggle menu"
				>
					<MenuIcon />
					<span className="sr-only">toggle menu</span>
				</Button>
			) : (
				<menu
					about="nav-menus"
					className="flex items-center gap-4"
				>
					{HEADER_NAVS.map((hn) => (
						<Link
							key={hn.href}
							href={hn.href}
							className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
						>
							{hn.label}
						</Link>
					))}
					<Separator className="h-6 w-[2px]" />
					<ThemeBtn />
				</menu>
			)}
		</>
	);
};
