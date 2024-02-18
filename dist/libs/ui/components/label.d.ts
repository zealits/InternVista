/// <reference types="react" />
import * as LabelPrimitive from "@radix-ui/react-label";
import { type VariantProps } from "class-variance-authority";
export declare const labelVariants: (props?: import("class-variance-authority/dist/types").ClassProp | undefined) => string;
export declare const Label: import("react").ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & import("react").RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: import("class-variance-authority/dist/types").ClassProp | undefined) => string> & import("react").RefAttributes<HTMLLabelElement>>;
