import { HEADER_NAVS } from "@/utils/navigations";
import Link from "next/link";
import React from "react";
import { ThemeBtn } from "./theme-btn";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export const Menu: React.FC = () => {
  return (
    <>
      <menu
        about="nav-menus"
        className="flex items-center gap-4"
      >
        {HEADER_NAVS.map((hn) => (
          <Link
            key={hn.href}
            href={hn.href}
            className={cn(
              buttonVariants({
                variant: "ghost",
                size: "sm",
                className: "text-base",
              })
            )}
          >
            {hn.label}
          </Link>
        ))}

        <ThemeBtn />
      </menu>
    </>
  );
};
