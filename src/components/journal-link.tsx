import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { formatDate } from "@/utils/formatters";

export const JournalLink: React.FC<{
  href: string;
  title: string;
  date: string;
}> = (props) => {
  return (
    <div className="flex items-center justify-between py-2 rounded-lg hover:bg-muted dark:hover:bg-muted/40 md:px-4">
      <Link
        href={props.href}
        className={cn(
          buttonVariants({ variant: "link", className: "text-lg" })
        )}
      >
        <Icons.TriangleRightIcon />
        {props.title}
      </Link>
      <time
        dateTime={props.date}
        className="text-muted-foreground"
      >
        {formatDate(props.date)}
      </time>
    </div>
  );
};
