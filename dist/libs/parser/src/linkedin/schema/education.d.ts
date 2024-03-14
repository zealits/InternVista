import { z } from "zod";
export declare const educationSchema: z.ZodObject<{
    "School Name": z.ZodString;
    "Start Date": z.ZodString;
    "End Date": z.ZodString;
    Notes: z.ZodOptional<z.ZodString>;
    "Degree Name": z.ZodString;
    Activities: z.ZodString;
}, "strip", z.ZodTypeAny, {
    "School Name": string;
    "Start Date": string;
    "End Date": string;
    "Degree Name": string;
    Activities: string;
    Notes?: string | undefined;
}, {
    "School Name": string;
    "Start Date": string;
    "End Date": string;
    "Degree Name": string;
    Activities: string;
    Notes?: string | undefined;
}>;
