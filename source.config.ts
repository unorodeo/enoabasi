import { defineCollections, defineConfig } from "fumadocs-mdx/config";

import { journalSchema } from "@/lib/zods";

export const journal = defineCollections({
  type: "doc",
  dir: "content/journal",
  schema: journalSchema,
});

export default defineConfig({
  mdxOptions: {
    rehypePlugins: [],
  },
});
