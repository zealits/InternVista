/// <reference types="react" />
import * as LabelPrimitive from "@radix-ui/react-label";
import { ControllerProps, FieldPath, FieldValues } from "react-hook-form";
export declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues extends FieldValues | undefined = undefined>(props: import("react-hook-form").FormProviderProps<TFieldValues, TContext, TTransformedValues>) => import("react").JSX.Element;
export declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) => import("react/jsx-runtime").JSX.Element;
export declare const FormItem: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>;
export declare const FormLabel: import("react").ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & import("react").RefAttributes<HTMLLabelElement>, "ref"> & import("react").RefAttributes<HTMLLabelElement>>;
export declare const FormControl: import("react").ForwardRefExoticComponent<Omit<import("@radix-ui/react-slot").SlotProps & import("react").RefAttributes<HTMLElement>, "ref"> & import("react").RefAttributes<HTMLElement>>;
export declare const FormDescription: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLParagraphElement> & import("react").RefAttributes<HTMLParagraphElement>>;
export declare const FormMessage: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLParagraphElement> & import("react").RefAttributes<HTMLParagraphElement>>;
