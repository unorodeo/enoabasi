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
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-2 rounded-lg hover:bg-muted dark:hover:bg-muted/40 md:px-4">
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
        className="text-muted-foreground px-4 ms-2 md:ms-0 md:px-0 text-sm md:text-base"
      >
        {formatDate(props.date)}
      </time>
    </div>
  );
};
