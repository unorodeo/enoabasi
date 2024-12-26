import { DocsDescription, DocsTitle } from "fumadocs-ui/page";
import { Section } from "@/components/ui/section";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { journalSource } from "@/source";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { JounralCrumbs } from "@/components/journal-crumbs";
import { Highlight } from "@/components/mdx";
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { HR } from "@/components/ui/hr";

interface Props {
  params: {
    slug: string[];
  };
}

export default async function Article(props: Props) {
  const page = journalSource.getPage(props.params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <Section>
      <div className="mb-8">
        <JounralCrumbs
          href={page.url}
          title={page.data.title}
        />
      </div>
      <DocsTitle>{page.data.title}</DocsTitle>
      {page.data.description ? (
        <DocsDescription>{page.data.description}</DocsDescription>
      ) : null}
      <MDX components={{ ...defaultMdxComponents, Highlight, Tab, Tabs, HR }} />
    </Section>
  );
}

export async function generateStaticParams() {
  return journalSource.generateParams();
}

export async function generateMetadata(props: Props) {
  const page = journalSource.getPage(props.params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
