import React from "react";
import { RootProvider } from "fumadocs-ui/provider";
import { ThemeProvider } from "@/components/themes";

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <RootProvider>{children}</RootProvider>
      </ThemeProvider>
    </>
  );
};
