import { defineCollections, metaSchema } from "fumadocs-mdx/config";
import { journalSchema, uiSchema } from "@/lib/zods";

export const journal = defineCollections({
  type: "doc",
  dir: "content/journal",
  schema: journalSchema,
});

export const ui = defineCollections({
  type: "doc",
  dir: "content/ui",
  schema: uiSchema,
});

export const uiMeta = defineCollections({
  type: "meta",
  dir: "content/ui",
  schema: metaSchema,
});
