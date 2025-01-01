import { Brand } from "@/components/ui/brand";
import { Menu } from "@/components/menu";
import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-50 w-full border-b">
      <nav className="flex flex-row items-center justify-between px-4 mx-auto py-2 backdrop-filter backdrop-blur-lg bg-opacity-30">
        <Brand variant="link" />
        <Menu />
      </nav>
    </header>
  );
};
