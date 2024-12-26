import { createMDXSource } from "fumadocs-mdx";
import { journal } from "../.source";
import { loader } from "fumadocs-core/source";

export const journalSource = loader({
  baseUrl: "/journal",
  source: createMDXSource(journal, []),
});