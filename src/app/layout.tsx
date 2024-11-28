import "@/styles/globals.css";

import type { Metadata } from "next";

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
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
