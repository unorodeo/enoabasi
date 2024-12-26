import React, { ReactNode } from "react";

import { cn } from "@/lib/cn";
import { focusRing } from "@/lib/focuses";

interface SharedProps {
  children?: ReactNode;
}

interface HighlightProps extends SharedProps {
  href?: string;
}

export const Highlight: React.FC<HighlightProps> = ({ children, href }) => {
  const Comp = href ? "a" : "span";
  return (
    <Comp
      className={cn(
        "bg-foreground text-background px-1 rounded",
        { "hover:underline": href },
        focusRing
      )}
    >
      {children}
    </Comp>
  );
};
