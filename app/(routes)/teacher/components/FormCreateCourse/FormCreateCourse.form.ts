import { z } from "zod";

export const formSchema = z.object({
  courseName: z
    .string()
    .min(1, {
      message: "O nome do curso é obrigatório.",
    })
    .max(200),
  slug: z
    .string()
    .min(1, {
      message: "O slug é obrigatório.",
    })
    .max(200),
});
