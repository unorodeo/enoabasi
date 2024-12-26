import Link from "next/link";
import React from "react";
import { cn } from "@/lib/cn";
import { focusRing } from "@/lib/focuses";
import { siteConfig } from "@/site.config";

export const Brand: React.FC<{
  variant?: "link" | "div";
  href?: `/${string}`;
}> = ({ href, variant = "link" }) => {

  const _name = siteConfig.name.fn;

  if (variant === "link" || href) {
    return (
      <Link
        href={href ?? "/"}
        className={cn(
          "rounded-lg p-1 text-2xl font-bold tracking-tight select-none",
          focusRing
        )}
      >
        {_name}
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
        {_name}
      </div>
    );
  }
  return null;
};
