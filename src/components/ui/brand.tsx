import { DotIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/cn";
import { focusRing } from "@/lib/focuses";
import { siteConfig } from "@/site.config";

export const Brand: React.FC<{
	variant?: "link" | "div";
	href?: `/${string}`;
}> = ({ href, variant = "link" }) => {
	if (variant === "link" || href) {
		return (
			<Link
				href={href ?? "/"}
				className={cn(
					"rounded-lg p-1 select-none text-2xl font-bold tracking-tight inline-flex items-center gap-1 [&_svg]:shrink-0 whitespace-nowrap justify-center",
					focusRing
				)}
			>
				{siteConfig.name.fn}
				<DotIcon />
				{siteConfig.name.ln}
			</Link>
		);
	}
	if (variant === "div" && href) {
		return (
			<span className="text-sm font-medium text-destructive">
				A div cannot have an href
			</span>
		);
	}
	if (variant === "div") {
		return (
			<div className="p-1 text-2xl font-bold tracking-tight select-none">
				{siteConfig.name.fn}
			</div>
		);
	}
	return null;
};
