import { createZodDto } from "nestjs-zod/dto";
import { z } from "nestjs-zod/z";

export const emailSchema = z.object({
  to: z.string().email(),
  subject: z.string(),
  content: z.string(),
});

export class EmailDto extends createZodDto(emailSchema) {}
