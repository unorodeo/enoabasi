import { Header } from "@/components/header";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export default function MarketingLayout({ children }: Props) {
	return (
		<>
			<Header />
			<main className="relative">{children}</main>
		</>
	);
}
