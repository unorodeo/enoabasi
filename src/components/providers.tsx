import React from "react";
import { RootProvider } from "fumadocs-ui/provider";
import { ThemeProvider } from "@/components/themes";

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <RootProvider theme={{ enabled: false }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </RootProvider>
    </>
  );
};
