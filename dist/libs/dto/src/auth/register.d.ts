import { z } from "nestjs-zod/z";
export declare const registerSchema: z.ZodObject<{
    email: z.ZodString;
    name: z.ZodString;
    username: z.ZodString;
    locale: z.ZodDefault<z.ZodString>;
    password: z.ZodPassword;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name: string;
    username: string;
    locale: string;
}, {
    email: string;
    password: string;
    name: string;
    username: string;
    locale?: string | undefined;
}>;
declare const RegisterDto_base: import("nestjs-zod/dto").ZodDto<{
    email: string;
    password: string;
    name: string;
    username: string;
    locale: string;
}, z.ZodObjectDef<{
    email: z.ZodString;
    name: z.ZodString;
    username: z.ZodString;
    locale: z.ZodDefault<z.ZodString>;
    password: z.ZodPassword;
}, "strip", z.ZodTypeAny>, {
    email: string;
    password: string;
    name: string;
    username: string;
    locale?: string | undefined;
}>;
export declare class RegisterDto extends RegisterDto_base {
}
export {};
