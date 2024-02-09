import { z } from "nestjs-zod/z";
export declare const emailSchema: z.ZodObject<{
    to: z.ZodString;
    subject: z.ZodString;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    to: string;
    subject: string;
    content: string;
}, {
    to: string;
    subject: string;
    content: string;
}>;
declare const EmailDto_base: import("nestjs-zod/dto").ZodDto<{
    to: string;
    subject: string;
    content: string;
}, z.ZodObjectDef<{
    to: z.ZodString;
    subject: z.ZodString;
    content: z.ZodString;
}, "strip", z.ZodTypeAny>, {
    to: string;
    subject: string;
    content: string;
}>;
export declare class EmailDto extends EmailDto_base {
}
export {};
