import "@/styles/globals.css";

import { geistMono, geistSans } from "@/lib/fonts";

import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
	title: "Enoabasi",
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
					"antialiased font-geist-sans",
					geistSans.variable,
					geistMono.variable
				)}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}

