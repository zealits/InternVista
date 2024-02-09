import { z } from "zod";
export declare const skillSchema: z.ZodObject<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
    name: z.ZodString;
    description: z.ZodString;
    level: z.ZodDefault<z.ZodNumber>;
    keywords: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    id: string;
    visible: boolean;
    name: string;
    description: string;
    keywords: string[];
    level: number;
}, {
    visible: boolean;
    name: string;
    description: string;
    id?: string | undefined;
    level?: number | undefined;
    keywords?: string[] | undefined;
}>;
export type Skill = z.infer<typeof skillSchema>;
export declare const defaultSkill: Skill;
