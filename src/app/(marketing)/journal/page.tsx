import { Icons } from "@/components/ui/icons";
import { JournalLink } from "@/components/journal-link";
import { Section } from "@/components/ui/section";
import { journalSource } from "@/source";
import { siteConfig } from "@/site.config";

export default async function Journal() {
  const pages = journalSource.getPages();
  return (
    <>
      <Section className="grid">
        <div>
          <div className="relative border border-dashed">
            <Icons.CrossIcon className="absolute text-muted-foreground size-6 -top-3 -left-3" />
            <Icons.CrossIcon className="absolute text-muted-foreground size-6 -top-3 -right-3" />
            <Icons.CrossIcon className="absolute text-muted-foreground size-6 -bottom-3 -left-3" />
            <Icons.CrossIcon className="absolute text-muted-foreground size-6 -bottom-3 -right-3" />
            <div className="p-6 text-left">
              <h3>{siteConfig.name.fn}&apos;s Journal</h3>
              <p className="[&:not(:first-child)]:mt-2 text-muted-foreground">
                Writings about things I find interesting.
              </p>
            </div>
          </div>
        </div>
        <section className="mt-12 space-y-4 divide-y-2">
          {pages.map((page) => (
            <JournalLink
              key={page.url}
              href={page.url}
              title={page.data.title}
              date={page.data.date}
            />
          ))}
        </section>
      </Section>
    </>
  );
}
