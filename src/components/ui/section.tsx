import React from "react";
import { cn } from "@/lib/cn";

export const Section: React.FC<
	React.ComponentPropsWithRef<"section"> & { bleed?: boolean }
> = ({ ref, children, className, bleed = false, ...props }) => {
	return (
		<section
			ref={ref}
			className={cn(
				"max-w-5xl mx-auto py-6 md:py-12 px-4 md:px-8",
				{
					"max-w-full py-4 md:py-6": bleed,
				},
				className
			)}
			{...props}
		>
			{children}
		</section>
	);
};
Section.displayName = "Section";
