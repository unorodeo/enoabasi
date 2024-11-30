import { ConstructionIcon } from "lucide-react";
import React from "react";

export const UnderConstruction: React.FC = () => {
  return (
    <section className="grid place-items-center min-h-[20rem]">
      <div className="flex flex-col items-start justify-center gap-4 md:items-center">
        <span className="p-2 rounded-lg bg-muted">
          <ConstructionIcon
            size={52}
            className="text-muted-foreground shrink-0"
          />
        </span>
        <h2 className="text-center w-96">
          Sorry this page is under construction, please come back later.
        </h2>
      </div>
    </section>
  );
};
