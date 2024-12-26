import { buttonVariants } from "@/components/ui/button";
import { DocsDescription, DocsTitle } from "fumadocs-ui/page";
import { MoveLeftIcon } from "lucide-react";

import Link from "next/link";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/cn";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { journalSource } from "@/source";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Icons } from "@/components/ui/icons";

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
    <Section className="border-x-2 border-dashed">
      <div className="mb-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/journal">
                <Icons.RemixHomeIcon className="size-5" />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={page.url}>{page.data.title}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <DocsTitle>{page.data.title}</DocsTitle>
      {page.data.description ? (
        <DocsDescription>{page.data.description}</DocsDescription>
      ) : null}
      <MDX components={{ ...defaultMdxComponents }} />
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
