import { journal, ui, uiMeta } from "../.source";

import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";

export const journalSource = loader({
  baseUrl: "/journal",
  source: createMDXSource(journal, []),
});

export const uiSource = loader({
  baseUrl: "/ui",
  source: createMDXSource(ui, uiMeta),
});
