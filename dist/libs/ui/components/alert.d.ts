/// <reference types="react" />
import { type VariantProps } from "class-variance-authority";
import { alertVariants } from "../variants/alert";
interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
    onClose?: () => void;
}
export declare const Alert: import("react").ForwardRefExoticComponent<AlertProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const AlertTitle: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLHeadingElement> & import("react").RefAttributes<HTMLParagraphElement>>;
export declare const AlertDescription: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLParagraphElement> & import("react").RefAttributes<HTMLParagraphElement>>;
export {};
