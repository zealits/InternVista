export type Font = {
    family: string;
    category: string;
    subsets: string[];
    variants: string[];
    files: {
        [key: string]: string;
    };
};
export declare const fonts: Font[];
export declare const getFontUrls: (family: string, variants: string[]) => string[];
