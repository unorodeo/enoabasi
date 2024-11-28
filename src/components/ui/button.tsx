import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";
import { focusRing } from "@/lib/focuses";

const buttonVariants = cva(
	[
		"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
		focusRing,
	],
	{
		variants: {
			variant: {
				primary:
					"bg-primary text-primary-foreground shadow hover:bg-primary/90",
				destructive:
					"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
				outline:
					"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
				secondary:
					"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
				tertiary:
					"bg-tertiary text-tertiary-foreground shadow-sm hover:bg-tertiary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				plain: "text-muted-foreground hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				xs: "h-7 rounded-md px-1",
				sm: "h-8 rounded-md px-3",
				md: "h-9 px-4 py-2",
				lg: "h-10 rounded-lg px-8",

				"icon-xs": "h-7 w-7",
				"icon-sm": "h-8 w-8",
				"icon-md": "h-9 w-9",
				"icon-lg": "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };

