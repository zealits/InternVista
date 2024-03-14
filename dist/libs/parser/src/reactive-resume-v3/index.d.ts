import { Json } from "@reactive-resume/utils";
import { Schema } from "zod";
import { Parser } from "../interfaces/parser";
import { ReactiveResumeV3 } from "./schema";
export * from "./schema";
export declare class ReactiveResumeV3Parser implements Parser<Json, ReactiveResumeV3> {
    schema: Schema;
    constructor();
    readFile(file: File): Promise<Json>;
    validate(data: Json): {
        basics: {
            email: string;
            location: {
                address?: string | undefined;
                postalCode?: string | undefined;
                city?: string | undefined;
                country?: string | undefined;
                region?: string | undefined;
            };
            profiles: {
                id?: string | undefined;
                url?: string | undefined;
                network?: string | undefined;
                username?: string | undefined;
            }[];
            photo: {
                visible: boolean;
                filters: {
                    size: number;
                    border: boolean;
                    grayscale: boolean;
                    shape?: string | null | undefined;
                };
                url?: string | undefined;
            };
            name?: string | undefined;
            phone?: string | undefined;
            headline?: string | undefined;
            summary?: string | {
                visible: boolean;
                body?: string | undefined;
                heading?: string | undefined;
            } | undefined;
            birthdate?: string | undefined;
            website?: string | undefined;
        };
        public: boolean;
        sections: {
            work: {
                type: "work" | "custom" | "basic";
                visible: boolean;
                columns: number | null;
                items: ({
                    id?: string | undefined;
                    url?: string | undefined;
                    date?: {
                        start?: string | undefined;
                        end?: string | undefined;
                    } | undefined;
                    name?: string | undefined;
                    position?: string | undefined;
                    summary?: string | null | undefined;
                } | null)[];
                name?: string | undefined;
                id?: string | undefined;
            };
            volunteer: {
                type: "work" | "custom" | "basic";
                visible: boolean;
                columns: number | null;
                items: ({
                    id?: string | undefined;
                    organization?: string | undefined;
                    position?: string | undefined;
                    date?: {
                        start?: string | undefined;
                        end?: string | undefined;
                    } | undefined;
                    url?: string | undefined;
                    summary?: string | null | undefined;
                } | null)[];
                name?: string | undefined;
                id?: string | undefined;
            };
            education: {
                type: "work" | "custom" | "basic";
                visible: boolean;
                columns: number | null;
                items: ({
                    id?: string | undefined;
                    url?: string | undefined;
                    area?: string | undefined;
                    date?: {
                        start?: string | undefined;
                        end?: string | undefined;
                    } | undefined;
                    score?: string | undefined;
                    degree?: string | undefined;
                    courses?: (string | null)[] | undefined;
                    summary?: string | null | undefined;
                    institution?: string | undefined;
                } | null)[];
                name?: string | undefined;
                id?: string | undefined;
            };
            awards: {
                type: "work" | "custom" | "basic";
                visible: boolean;
                columns: number | null;
                items: ({
                    id?: string | undefined;
                    url?: string | undefined;
                    date?: string | undefined;
                    title?: string | undefined;
                    awarder?: string | undefined;
                    summary?: string | null | undefined;
                } | null)[];
                name?: string | undefined;
                id?: string | undefined;
            };
            publications: {
                type: "work" | "custom" | "basic";
                visible: boolean;
                columns: number | null;
                items: ({
                    id?: string | undefined;
                    url?: string | undefined;
                    date?: string | undefined;
                    name?: string | undefined;
                    publisher?: string | undefined;
                    summary?: string | null | undefined;
                } | null)[];
                name?: string | undefined;
                id?: string | undefined;
            };
            skills: {
                type: "work" | "custom" | "basic";
                visible: boolean;
                columns: number | null;
                items: ({
                    levelNum: number;
                    id?: string | undefined;
                    name?: string | undefined;
                    level?: string | undefined;
                    keywords?: (string | null)[] | undefined;
                } | null)[];
                name?: string | undefined;
                id?: string | undefined;
            };
            languages: {
                type: "work" | "custom" | "basic";
                visible: boolean;
                columns: number | null;
                items: ({
                    levelNum: number;
                    id?: string | undefined;
                    name?: string | undefined;
                    level?: string | undefined;
                } | null)[];
                name?: string | undefined;
                id?: string | undefined;
            };
            interests: {
                type: "work" | "custom" | "basic";
                visible: boolean;
                columns: number | null;
                items: ({
                    id?: string | undefined;
                    name?: string | undefined;
                    keywords?: (string | null)[] | undefined;
                } | null)[];
                name?: string | undefined;
                id?: string | undefined;
            };
            references: {
                type: "work" | "custom" | "basic";
                visible: boolean;
                columns: number | null;
                items: ({
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                    phone?: string | undefined;
                    summary?: string | null | undefined;
                    relationship?: string | undefined;
                } | null)[];
                name?: string | undefined;
                id?: string | undefined;
            };
            projects: {
                type: "work" | "custom" | "basic";
                visible: boolean;
                columns: number | null;
                items: ({
                    id?: string | undefined;
                    url?: string | undefined;
                    date?: {
                        start?: string | undefined;
                        end?: string | undefined;
                    } | undefined;
                    name?: string | undefined;
                    summary?: string | null | undefined;
                    keywords?: (string | null)[] | undefined;
                    description?: string | undefined;
                } | null)[];
                name?: string | undefined;
                id?: string | undefined;
            };
            certifications: {
                type: "work" | "custom" | "basic";
                visible: boolean;
                columns: number | null;
                items: ({
                    id?: string | undefined;
                    url?: string | undefined;
                    date?: string | undefined;
                    name?: string | undefined;
                    issuer?: string | undefined;
                    summary?: string | null | undefined;
                } | null)[];
                name?: string | undefined;
                id?: string | undefined;
            };
        };
        metadata?: {
            css?: {
                visible: boolean;
                value?: string | undefined;
            } | undefined;
            date?: {
                format?: string | undefined;
            } | undefined;
            theme?: {
                text?: string | undefined;
                primary?: string | undefined;
                background?: string | undefined;
            } | undefined;
            layout?: (string | null)[][][] | undefined;
            locale?: string | undefined;
            template?: string | undefined;
            typography?: {
                size?: {
                    body?: number | undefined;
                    heading?: number | undefined;
                } | undefined;
                family?: {
                    body?: string | undefined;
                    heading?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
    };
    convert(data: ReactiveResumeV3): {
        basics: {
            name: string;
            headline: string;
            email: string;
            phone: string;
            location: string;
            url: {
                label: string;
                href: string;
            };
            customFields: {
                id: string;
                value: string;
                icon: string;
                name: string;
            }[];
            picture: {
                url: string;
                size: number;
                aspectRatio: number;
                borderRadius: number;
                effects: {
                    hidden: boolean;
                    border: boolean;
                    grayscale: boolean;
                };
            };
        };
        sections: {
            custom: Record<string, {
                id: string;
                visible: boolean;
                name: string;
                columns: number;
                items: {
                    id: string;
                    visible: boolean;
                    date: string;
                    name: string;
                    location: string;
                    url: {
                        label: string;
                        href: string;
                    };
                    summary: string;
                    description: string;
                    keywords: string[];
                }[];
            }>;
            profiles: {
                id: "profiles";
                visible: boolean;
                name: string;
                columns: number;
                items: {
                    id: string;
                    visible: boolean;
                    icon: string;
                    url: {
                        label: string;
                        href: string;
                    };
                    network: string;
                    username: string;
                }[];
            };
            summary: {
                id: "summary";
                visible: boolean;
                name: string;
                columns: number;
                content: string;
            };
            experience: {
                id: "experience";
                visible: boolean;
                name: string;
                columns: number;
                items: {
                    id: string;
                    visible: boolean;
                    date: string;
                    location: string;
                    url: {
                        label: string;
                        href: string;
                    };
                    summary: string;
                    company: string;
                    position: string;
                }[];
            };
            education: {
                id: "education";
                visible: boolean;
                name: string;
                columns: number;
                items: {
                    id: string;
                    visible: boolean;
                    date: string;
                    url: {
                        label: string;
                        href: string;
                    };
                    summary: string;
                    institution: string;
                    studyType: string;
                    area: string;
                    score: string;
                }[];
            };
            projects: {
                id: "projects";
                visible: boolean;
                name: string;
                columns: number;
                items: {
                    id: string;
                    visible: boolean;
                    date: string;
                    name: string;
                    url: {
                        label: string;
                        href: string;
                    };
                    summary: string;
                    description: string;
                    keywords: string[];
                }[];
            };
            volunteer: {
                id: "volunteer";
                visible: boolean;
                name: string;
                columns: number;
                items: {
                    id: string;
                    visible: boolean;
                    date: string;
                    location: string;
                    url: {
                        label: string;
                        href: string;
                    };
                    summary: string;
                    position: string;
                    organization: string;
                }[];
            };
            references: {
                id: "references";
                visible: boolean;
                name: string;
                columns: number;
                items: {
                    id: string;
                    visible: boolean;
                    name: string;
                    url: {
                        label: string;
                        href: string;
                    };
                    summary: string;
                    description: string;
                }[];
            };
            skills: {
                id: "skills";
                visible: boolean;
                name: string;
                columns: number;
                items: {
                    id: string;
                    visible: boolean;
                    name: string;
                    description: string;
                    keywords: string[];
                    level: number;
                }[];
            };
            interests: {
                id: "interests";
                visible: boolean;
                name: string;
                columns: number;
                items: {
                    id: string;
                    visible: boolean;
                    name: string;
                    keywords: string[];
                }[];
            };
            certifications: {
                id: "certifications";
                visible: boolean;
                name: string;
                columns: number;
                items: {
                    id: string;
                    visible: boolean;
                    date: string;
                    name: string;
                    url: {
                        label: string;
                        href: string;
                    };
                    summary: string;
                    issuer: string;
                }[];
            };
            awards: {
                id: "awards";
                visible: boolean;
                name: string;
                columns: number;
                items: {
                    id: string;
                    visible: boolean;
                    date: string;
                    url: {
                        label: string;
                        href: string;
                    };
                    summary: string;
                    title: string;
                    awarder: string;
                }[];
            };
            publications: {
                id: "publications";
                visible: boolean;
                name: string;
                columns: number;
                items: {
                    id: string;
                    visible: boolean;
                    date: string;
                    name: string;
                    url: {
                        label: string;
                        href: string;
                    };
                    summary: string;
                    publisher: string;
                }[];
            };
            languages: {
                id: "languages";
                visible: boolean;
                name: string;
                columns: number;
                items: {
                    id: string;
                    visible: boolean;
                    name: string;
                    description: string;
                    level: number;
                }[];
            };
        };
        metadata: {
            template: string;
            layout: string[][][];
            css: {
                visible: boolean;
                value: string;
            };
            page: {
                options: {
                    breakLine: boolean;
                    pageNumbers: boolean;
                };
                margin: number;
                format: "a4" | "letter";
            };
            theme: {
                background: string;
                text: string;
                primary: string;
            };
            typography: {
                font: {
                    size: number;
                    family: string;
                    subset: string;
                    variants: string[];
                };
                lineHeight: number;
                hideIcons: boolean;
                underlineLinks: boolean;
            };
            notes: string;
        };
    };
}
