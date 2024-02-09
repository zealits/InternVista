/// <reference types="react" />
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    hasError?: boolean;
}
export declare const Input: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<HTMLInputElement>>;
