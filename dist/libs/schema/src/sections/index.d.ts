import { FilterKeys } from "@reactive-resume/utils";
import { z } from "zod";
export declare const sectionSchema: z.ZodObject<{
    name: z.ZodString;
    columns: z.ZodDefault<z.ZodNumber>;
    visible: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    visible: boolean;
    name: string;
    columns: number;
}, {
    name: string;
    columns?: number | undefined;
    visible?: boolean | undefined;
}>;
export declare const customSchema: z.ZodObject<{
    visible: z.ZodDefault<z.ZodBoolean>;
    name: z.ZodString;
    columns: z.ZodDefault<z.ZodNumber>;
    id: z.ZodDefault<z.ZodString>;
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodDefault<z.ZodString>;
        visible: z.ZodBoolean;
        name: z.ZodString;
        description: z.ZodString;
        date: z.ZodString;
        location: z.ZodString;
        summary: z.ZodString;
        keywords: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        url: z.ZodObject<{
            label: z.ZodString;
            href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
        }, "strip", z.ZodTypeAny, {
            label: string;
            href: string;
        }, {
            label: string;
            href: string;
        }>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
        id?: string | undefined;
        keywords?: string[] | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
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
}, {
    name: string;
    items: {
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
        id?: string | undefined;
        keywords?: string[] | undefined;
    }[];
    visible?: boolean | undefined;
    columns?: number | undefined;
    id?: string | undefined;
}>;
export declare const sectionsSchema: z.ZodObject<{
    summary: z.ZodObject<{
        visible: z.ZodDefault<z.ZodBoolean>;
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        id: z.ZodLiteral<"summary">;
        content: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: "summary";
        visible: boolean;
        name: string;
        columns: number;
        content: string;
    }, {
        id: "summary";
        name: string;
        visible?: boolean | undefined;
        columns?: number | undefined;
        content?: string | undefined;
    }>;
    awards: z.ZodObject<{
        visible: z.ZodDefault<z.ZodBoolean>;
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        id: z.ZodLiteral<"awards">;
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
            title: z.ZodString;
            awarder: z.ZodString;
            date: z.ZodString;
            summary: z.ZodString;
            url: z.ZodObject<{
                label: z.ZodString;
                href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                href: string;
            }, {
                label: string;
                href: string;
            }>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
            visible: boolean;
            date: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            title: string;
            awarder: string;
            id?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
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
    }, {
        id: "awards";
        name: string;
        items: {
            visible: boolean;
            date: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            title: string;
            awarder: string;
            id?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
    }>;
    certifications: z.ZodObject<{
        visible: z.ZodDefault<z.ZodBoolean>;
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        id: z.ZodLiteral<"certifications">;
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
            name: z.ZodString;
            issuer: z.ZodString;
            date: z.ZodString;
            summary: z.ZodString;
            url: z.ZodObject<{
                label: z.ZodString;
                href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                href: string;
            }, {
                label: string;
                href: string;
            }>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
            visible: boolean;
            date: string;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            issuer: string;
            id?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
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
    }, {
        id: "certifications";
        name: string;
        items: {
            visible: boolean;
            date: string;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            issuer: string;
            id?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
    }>;
    education: z.ZodObject<{
        visible: z.ZodDefault<z.ZodBoolean>;
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        id: z.ZodLiteral<"education">;
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
            institution: z.ZodString;
            studyType: z.ZodString;
            area: z.ZodString;
            score: z.ZodString;
            date: z.ZodString;
            summary: z.ZodString;
            url: z.ZodObject<{
                label: z.ZodString;
                href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                href: string;
            }, {
                label: string;
                href: string;
            }>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
            id?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
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
    }, {
        id: "education";
        name: string;
        items: {
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
            id?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
    }>;
    experience: z.ZodObject<{
        visible: z.ZodDefault<z.ZodBoolean>;
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        id: z.ZodLiteral<"experience">;
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
            company: z.ZodString;
            position: z.ZodString;
            location: z.ZodString;
            date: z.ZodString;
            summary: z.ZodString;
            url: z.ZodObject<{
                label: z.ZodString;
                href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                href: string;
            }, {
                label: string;
                href: string;
            }>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
            id?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
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
    }, {
        id: "experience";
        name: string;
        items: {
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
            id?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
    }>;
    volunteer: z.ZodObject<{
        visible: z.ZodDefault<z.ZodBoolean>;
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        id: z.ZodLiteral<"volunteer">;
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
            organization: z.ZodString;
            position: z.ZodString;
            location: z.ZodString;
            date: z.ZodString;
            summary: z.ZodString;
            url: z.ZodObject<{
                label: z.ZodString;
                href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                href: string;
            }, {
                label: string;
                href: string;
            }>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
            id?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
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
    }, {
        id: "volunteer";
        name: string;
        items: {
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
            id?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
    }>;
    interests: z.ZodObject<{
        visible: z.ZodDefault<z.ZodBoolean>;
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        id: z.ZodLiteral<"interests">;
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
            name: z.ZodString;
            keywords: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            visible: boolean;
            name: string;
            keywords: string[];
        }, {
            visible: boolean;
            name: string;
            id?: string | undefined;
            keywords?: string[] | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
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
    }, {
        id: "interests";
        name: string;
        items: {
            visible: boolean;
            name: string;
            id?: string | undefined;
            keywords?: string[] | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
    }>;
    languages: z.ZodObject<{
        visible: z.ZodDefault<z.ZodBoolean>;
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        id: z.ZodLiteral<"languages">;
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
            name: z.ZodString;
            description: z.ZodString;
            level: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            visible: boolean;
            name: string;
            description: string;
            level: number;
        }, {
            visible: boolean;
            name: string;
            description: string;
            id?: string | undefined;
            level?: number | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
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
    }, {
        id: "languages";
        name: string;
        items: {
            visible: boolean;
            name: string;
            description: string;
            id?: string | undefined;
            level?: number | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
    }>;
    profiles: z.ZodObject<{
        visible: z.ZodDefault<z.ZodBoolean>;
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        id: z.ZodLiteral<"profiles">;
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
            network: z.ZodString;
            username: z.ZodString;
            icon: z.ZodString;
            url: z.ZodObject<{
                label: z.ZodString;
                href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                href: string;
            }, {
                label: string;
                href: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            visible: boolean;
            icon: string;
            url: {
                label: string;
                href: string;
            };
            network: string;
            username: string;
        }, {
            visible: boolean;
            icon: string;
            url: {
                label: string;
                href: string;
            };
            network: string;
            username: string;
            id?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
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
    }, {
        id: "profiles";
        name: string;
        items: {
            visible: boolean;
            icon: string;
            url: {
                label: string;
                href: string;
            };
            network: string;
            username: string;
            id?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
    }>;
    projects: z.ZodObject<{
        visible: z.ZodDefault<z.ZodBoolean>;
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        id: z.ZodLiteral<"projects">;
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
            name: z.ZodString;
            description: z.ZodString;
            date: z.ZodString;
            summary: z.ZodString;
            keywords: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            url: z.ZodObject<{
                label: z.ZodString;
                href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                href: string;
            }, {
                label: string;
                href: string;
            }>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
            visible: boolean;
            date: string;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            description: string;
            id?: string | undefined;
            keywords?: string[] | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
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
    }, {
        id: "projects";
        name: string;
        items: {
            visible: boolean;
            date: string;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            description: string;
            id?: string | undefined;
            keywords?: string[] | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
    }>;
    publications: z.ZodObject<{
        visible: z.ZodDefault<z.ZodBoolean>;
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        id: z.ZodLiteral<"publications">;
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
            name: z.ZodString;
            publisher: z.ZodString;
            date: z.ZodString;
            summary: z.ZodString;
            url: z.ZodObject<{
                label: z.ZodString;
                href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                href: string;
            }, {
                label: string;
                href: string;
            }>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
            visible: boolean;
            date: string;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            publisher: string;
            id?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
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
    }, {
        id: "publications";
        name: string;
        items: {
            visible: boolean;
            date: string;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            publisher: string;
            id?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
    }>;
    references: z.ZodObject<{
        visible: z.ZodDefault<z.ZodBoolean>;
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        id: z.ZodLiteral<"references">;
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
            name: z.ZodString;
            description: z.ZodString;
            summary: z.ZodString;
            url: z.ZodObject<{
                label: z.ZodString;
                href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                href: string;
            }, {
                label: string;
                href: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            visible: boolean;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            description: string;
        }, {
            visible: boolean;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            description: string;
            id?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
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
    }, {
        id: "references";
        name: string;
        items: {
            visible: boolean;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            description: string;
            id?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
    }>;
    skills: z.ZodObject<{
        visible: z.ZodDefault<z.ZodBoolean>;
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        id: z.ZodLiteral<"skills">;
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
            name: z.ZodString;
            description: z.ZodString;
            level: z.ZodDefault<z.ZodNumber>;
            keywords: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            visible: boolean;
            name: string;
            description: string;
            keywords: string[];
            level: number;
        }, {
            visible: boolean;
            name: string;
            description: string;
            id?: string | undefined;
            level?: number | undefined;
            keywords?: string[] | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
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
    }, {
        id: "skills";
        name: string;
        items: {
            visible: boolean;
            name: string;
            description: string;
            id?: string | undefined;
            level?: number | undefined;
            keywords?: string[] | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
    }>;
    custom: z.ZodRecord<z.ZodString, z.ZodObject<{
        visible: z.ZodDefault<z.ZodBoolean>;
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        id: z.ZodDefault<z.ZodString>;
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
            name: z.ZodString;
            description: z.ZodString;
            date: z.ZodString;
            location: z.ZodString;
            summary: z.ZodString;
            keywords: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            url: z.ZodObject<{
                label: z.ZodString;
                href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                href: string;
            }, {
                label: string;
                href: string;
            }>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
            id?: string | undefined;
            keywords?: string[] | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
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
    }, {
        name: string;
        items: {
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
            id?: string | undefined;
            keywords?: string[] | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
        id?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
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
}, {
    custom: Record<string, {
        name: string;
        items: {
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
            id?: string | undefined;
            keywords?: string[] | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
        id?: string | undefined;
    }>;
    profiles: {
        id: "profiles";
        name: string;
        items: {
            visible: boolean;
            icon: string;
            url: {
                label: string;
                href: string;
            };
            network: string;
            username: string;
            id?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
    };
    summary: {
        id: "summary";
        name: string;
        visible?: boolean | undefined;
        columns?: number | undefined;
        content?: string | undefined;
    };
    experience: {
        id: "experience";
        name: string;
        items: {
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
            id?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
    };
    education: {
        id: "education";
        name: string;
        items: {
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
            id?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
    };
    projects: {
        id: "projects";
        name: string;
        items: {
            visible: boolean;
            date: string;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            description: string;
            id?: string | undefined;
            keywords?: string[] | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
    };
    volunteer: {
        id: "volunteer";
        name: string;
        items: {
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
            id?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
    };
    references: {
        id: "references";
        name: string;
        items: {
            visible: boolean;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            description: string;
            id?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
    };
    skills: {
        id: "skills";
        name: string;
        items: {
            visible: boolean;
            name: string;
            description: string;
            id?: string | undefined;
            level?: number | undefined;
            keywords?: string[] | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
    };
    interests: {
        id: "interests";
        name: string;
        items: {
            visible: boolean;
            name: string;
            id?: string | undefined;
            keywords?: string[] | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
    };
    certifications: {
        id: "certifications";
        name: string;
        items: {
            visible: boolean;
            date: string;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            issuer: string;
            id?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
    };
    awards: {
        id: "awards";
        name: string;
        items: {
            visible: boolean;
            date: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            title: string;
            awarder: string;
            id?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
    };
    publications: {
        id: "publications";
        name: string;
        items: {
            visible: boolean;
            date: string;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            publisher: string;
            id?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
    };
    languages: {
        id: "languages";
        name: string;
        items: {
            visible: boolean;
            name: string;
            description: string;
            id?: string | undefined;
            level?: number | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
    };
}>;
export type Section = z.infer<typeof sectionSchema>;
export type Sections = z.infer<typeof sectionsSchema>;
export type SectionKey = "basics" | keyof Sections | `custom.${string}`;
export type SectionWithItem<T = unknown> = Sections[FilterKeys<Sections, {
    items: T[];
}>];
export type SectionItem = SectionWithItem["items"][number];
export type CustomSectionGroup = z.infer<typeof customSchema>;
export declare const defaultSection: Section;
export declare const defaultSections: Sections;
export * from "./award";
export * from "./certification";
export * from "./custom-section";
export * from "./education";
export * from "./experience";
export * from "./interest";
export * from "./language";
export * from "./profile";
export * from "./project";
export * from "./publication";
export * from "./reference";
export * from "./skill";
export * from "./volunteer";
