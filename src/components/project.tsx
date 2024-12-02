import React from "react";
import { type Project as IProject } from "@/types/globals";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { focusRing } from "@/lib/focuses";
const PROJECT_ITEMS: IProject[] = [
  {
    description:
      "A software company, building products that contribute to society.",
    title: "Nobasi Software",
    tools: ["next", "react", "tailwindcss", "typescript", "radix_ui"],
    url: "https://nobasisoftware.vercel.app",
    id: "nsjbdkvhbe7833682hbahkb39",
  },
  {
    description: "Generate tokens for your design system.",
    title: "Yoteeei",
    tools: ["next", "react", "tailwindcss", "typescript", "radix_ui"],
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
  return (
    <Card className="relative transition-shadow duration-200 shadow-none">
      <CardHeader className={cn("border-b-2 border-dashed dark:border-input")}>
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-2xl font-bold tracking-normal uppercase select-none font-geist-mono line-clamp-1">
            {data.title}
          </h3>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={data.url}
                  target="_blank"
                  className={cn("rounded-full", focusRing)}
                >
                  <ArrowUpRightIcon />
                  <span className="sr-only">visit project live</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <span>Visit &mdash; {data.title}</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
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
