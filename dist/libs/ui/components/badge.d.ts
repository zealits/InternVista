/// <reference types="react" />
import { type VariantProps } from "class-variance-authority";
import { badgeVariants } from "../variants/badge";
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
export declare const Badge: ({ className, variant, outline, ...props }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
