import { CodeEditorState } from "@/types";
import { create } from "zustand";

const getInitialState = () => {

    if (typeof window === "undefined") {
        return {
            language: "javascript",
            fontSize: 16,
            theme: "vs-dark",
        }
    };

    const savedLanguage = localStorage.getItem("editor-language") || "javascript";
    const savedTheme = localStorage.getItem("editor-theme") || "vs-dark";
    const savedFontSize = localStorage.getItem("editor-font-size") || 16;

    return {
        language: savedLanguage,
        theme: savedTheme,
        fontSize: Number(savedFontSize),
    };
}

export const useCodeEditorStore = create<CodeEditorState>((set, get) => {

    const initialState = getInitialState();

    return {}
})