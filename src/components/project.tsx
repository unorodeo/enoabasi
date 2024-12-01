"use client";

import React from "react";
import { type Project as IProject } from "@/types/globals";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { cn } from "@/lib/cn";

const PROJECT_ITEMS: IProject[] = [
  {
    description:
      "A software company, building products that contribute to society.",
    title: "Nobasi Software",
    tools: ["next", "react", "tailwindcss", "typescript", "radix_ui"],
    url: "https://nobasisoftwares.vercel.app",
    id: "nsjbdkvhbe7833682hbahkb39",
  },
  {
    description: "Generate tokens for your design system.",
    title: "Yoteeei",
    tools: [
      "next",
      "react",
      "tailwindcss",
      "typescript",
      "radix_ui",
    ],
    url: "https://yoteeei.vercel.app",
    id: "kvbvhb873873jbhbki372982",
  },
];

export const Projects: React.FC = () => (
  <>
    {PROJECT_ITEMS.map((item) => (
      <Project
        key={item.id}
        data={item}
      />
    ))}
  </>
);

export const Project: React.FC<{ data: IProject }> = ({ data }) => {
  const matches = useIsMobile();

  return (
    <Card className="relative transition-shadow duration-200 shadow-none">
      <CardHeader
        className={cn("border-b-2 border-dashed dark:border-input", {
          "group/title": !matches,
        })}
      >
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-2xl font-bold tracking-normal uppercase select-none font-geist-mono line-clamp-1 ">
            {data.title}
          </h3>
          <Button
            variant={"secondary"}
            size={"icon-lg"}
            className="rounded-full"
            asChild
          >
            <Link href={`${data.url}?ref=portfolio`} target="_blank">
              <ArrowUpRightIcon />
            </Link>
          </Button>
        </div>
        {!matches ? (
          <div className="absolute top-0 left-0 flex items-start w-full px-4 pt-1 pb-4 transition-transform duration-200 border-2 border-dashed rounded-t-lg text-muted-foreground bg-muted dark:border-input -z-10 group-hover/title:-translate-y-10">
            <div className="text-base font-medium no-uppercase">
              {data.title}
            </div>
          </div>
        ) : null}
      </CardHeader>
      <CardContent>
        <div className="pt-6">
          <p className="[&:not(:first-child)]:mt-0">{data.description}</p>
        </div>
      </CardContent>
      <CardFooter className="flex-wrap gap-2 pt-2 border-t-2 border-dashed dark:border-input" />
    </Card>
  );
};
