import { Json } from "@reactive-resume/utils";
import { Schema } from "zod";
import { Parser } from "../interfaces/parser";
import { JsonResume } from "./schema";
export * from "./schema";
export declare class JsonResumeParser implements Parser<Json, JsonResume> {
    schema: Schema;
    constructor();
    readFile(file: File): Promise<Json>;
    validate(data: Json): {
        basics?: {
            name?: string | undefined;
            label?: string | undefined;
            image?: string | undefined;
            email?: string | undefined;
            phone?: string | undefined;
            url?: string | undefined;
            summary?: string | undefined;
            location?: {
                address?: string | undefined;
                postalCode?: string | undefined;
                city?: string | undefined;
                countryCode?: string | undefined;
                region?: string | undefined;
            } | undefined;
            profiles?: {
                network?: string | undefined;
                username?: string | undefined;
                url?: string | undefined;
            }[] | undefined;
        } | undefined;
        work?: {
            name?: string | undefined;
            position?: string | undefined;
            url?: string | undefined;
            startDate?: string | undefined;
            endDate?: string | undefined;
            summary?: string | undefined;
            highlights?: string[] | undefined;
        }[] | undefined;
        volunteer?: {
            organization?: string | undefined;
            position?: string | undefined;
            url?: string | undefined;
            startDate?: string | undefined;
            endDate?: string | undefined;
            summary?: string | undefined;
            highlights?: string[] | undefined;
        }[] | undefined;
        education?: {
            institution?: string | undefined;
            url?: string | undefined;
            area?: string | undefined;
            studyType?: string | undefined;
            startDate?: string | undefined;
            endDate?: string | undefined;
            score?: string | undefined;
            courses?: string[] | undefined;
        }[] | undefined;
        awards?: {
            title?: string | undefined;
            date?: string | undefined;
            awarder?: string | undefined;
            summary?: string | undefined;
        }[] | undefined;
        certificates?: {
            name?: string | undefined;
            date?: string | undefined;
            issuer?: string | undefined;
            summary?: string | undefined;
        }[] | undefined;
        publications?: {
            name?: string | undefined;
            publisher?: string | undefined;
            releaseDate?: string | undefined;
            url?: string | undefined;
            summary?: string | undefined;
        }[] | undefined;
        skills?: {
            name?: string | undefined;
            level?: string | undefined;
            keywords?: string[] | undefined;
        }[] | undefined;
        languages?: {
            language?: string | undefined;
            fluency?: string | undefined;
        }[] | undefined;
        interests?: {
            name?: string | undefined;
            keywords?: string[] | undefined;
        }[] | undefined;
        references?: {
            name?: string | undefined;
            reference?: string | undefined;
        }[] | undefined;
    };
    convert(data: JsonResume): {
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
