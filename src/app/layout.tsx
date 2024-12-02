import "@/styles/globals.css";

import { calistoga, geistMono, geistSans } from "@/lib/fonts";

import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Enoabasi | The playground of Enoabasi Essien.",
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
          geistSans.variable,
          geistMono.variable,
          calistoga.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

