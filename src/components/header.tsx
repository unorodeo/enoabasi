"use client";

import { Brand } from "@/components/ui/brand";
import { Menu } from "@/components/menu";
import React from "react";
import { cn } from "@/lib/cn";
import useScroll from "@/hooks/use-scroll";

export const Header: React.FC = () => {
  const threshold: boolean = useScroll(5);

  return (
    <header
      className={cn("sticky inset-x-0 top-0 z-50 w-full transition-all duration-300 border-b-0", {
        "border-b": threshold,
      })}
    >
      <nav className="flex flex-row items-center justify-between px-4 mx-auto py-2 backdrop-filter backdrop-blur-lg bg-opacity-30">
        <Brand variant="link" />
        <Menu />
      </nav>
    </header>
  );
};
