import { Section } from "@/components/ui/section";
import { siteConfig } from "@/site.config";

export default function UI() {
	return (
		<>
			<Section>
				<h1>User interface of {siteConfig.name.fn}</h1>
			</Section>
		</>
	);
}
