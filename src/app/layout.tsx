import "@/styles/globals.css";

import { geistMono, geistSans } from "@/lib/fonts";

import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: { default: "Enoabasi", template: "%s | Enoabasi" },
  description: "The playground of Enoabasi Essien.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={cn(
          "relative antialiased font-geist-sans",
          "selection:bg-tertiary selection:text-tertiary-foreground",
          "[&::-webkit-scrollbar]:w-2",
          "[&::-webkit-scrollbar-track]:bg-background",
          "[&::-webkit-scrollbar-thumb]:bg-muted",
          "[&::-webkit-scrollbar-thumb]:rounded-full",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
