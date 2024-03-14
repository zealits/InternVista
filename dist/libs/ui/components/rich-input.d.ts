/// <reference types="react" />
import { Editor, EditorContentProps } from "@tiptap/react";
interface RichInputProps extends Omit<EditorContentProps, "ref" | "editor" | "content" | "value" | "onChange" | "className"> {
    content?: string;
    onChange?: (value: string) => void;
    hideToolbar?: boolean;
    className?: string;
    editorClassName?: string;
    footer?: (editor: Editor) => React.ReactNode;
}
export declare const RichInput: import("react").ForwardRefExoticComponent<RichInputProps & import("react").RefAttributes<Editor>>;
export {};
