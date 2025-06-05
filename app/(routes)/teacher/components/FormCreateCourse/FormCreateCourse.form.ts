import { z } from "zod";

export const formSchema = z.object({
  courseName: z.string().min(1, "O nome do curso é obrigatório"),
  slug: z.string().min(1, "O slug é obrigatório"),
});
