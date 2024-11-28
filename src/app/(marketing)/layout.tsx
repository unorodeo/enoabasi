import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export default function MarketingLayout({ children }: Props) {
	return (
		<main className="flex flex-col justify-between min-h-screen">
			<Header />
			<section role="main" className="relative flex-1">{children}</section>
			<Footer />
		</main>
	);
}
