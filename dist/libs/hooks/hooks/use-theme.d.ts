import { type Dispatch, type SetStateAction } from "react";
type Theme = "system" | "dark" | "light";
interface UseThemeOutput {
    theme: Theme;
    isDarkMode: boolean;
    toggleTheme: () => void;
    setTheme: Dispatch<SetStateAction<Theme>>;
}
export declare const useTheme: () => UseThemeOutput;
export {};
