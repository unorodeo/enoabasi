import { object, z } from "zod";

export const isodate = () =>
  z
    .string()
    .refine((value) => !isNaN(Date.parse(value)), "Invalid date string")
    .transform<string>((value) => new Date(value).toISOString());

export const journalSchema = object({
  title: z.string().min(1).max(200),
  description: z.string().min(1).max(300).optional(),
  full: z.boolean().default(false).optional(),
  date: isodate(),
});
