/// <reference types="react" />
import { DialogProps } from "@radix-ui/react-dialog";
export declare const Command: import("react").ForwardRefExoticComponent<Omit<{
    children?: import("react").ReactNode;
} & import("react").HTMLAttributes<HTMLDivElement> & {
    label?: string | undefined;
    shouldFilter?: boolean | undefined;
    filter?: ((value: string, search: string) => number) | undefined;
    value?: string | undefined;
    onValueChange?: ((value: string) => void) | undefined;
    loop?: boolean | undefined;
} & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
interface CommandDialogProps extends DialogProps {
}
export declare const CommandDialog: ({ children, ...props }: CommandDialogProps) => import("react/jsx-runtime").JSX.Element;
export declare const CommandInput: import("react").ForwardRefExoticComponent<Omit<Omit<import("react").InputHTMLAttributes<HTMLInputElement>, "onChange" | "value" | "type"> & {
    value?: string | undefined;
    onValueChange?: ((search: string) => void) | undefined;
} & import("react").RefAttributes<HTMLInputElement>, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export declare const CommandList: import("react").ForwardRefExoticComponent<Omit<{
    children?: import("react").ReactNode;
} & import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export declare const CommandEmpty: import("react").ForwardRefExoticComponent<Omit<{
    children?: import("react").ReactNode;
} & import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export declare const CommandGroup: import("react").ForwardRefExoticComponent<Omit<{
    children?: import("react").ReactNode;
} & Omit<import("react").HTMLAttributes<HTMLDivElement>, "value" | "heading"> & {
    heading?: import("react").ReactNode;
    value?: string | undefined;
} & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export declare const CommandSeparator: import("react").ForwardRefExoticComponent<Omit<import("react").HTMLAttributes<HTMLDivElement> & {
    alwaysRender?: boolean | undefined;
} & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export declare const CommandItem: import("react").ForwardRefExoticComponent<Omit<{
    children?: import("react").ReactNode;
} & Omit<import("react").HTMLAttributes<HTMLDivElement>, "onSelect" | "disabled" | "value"> & {
    disabled?: boolean | undefined;
    onSelect?: ((value: string) => void) | undefined;
    value?: string | undefined;
} & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export {};
