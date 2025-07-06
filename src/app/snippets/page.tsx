import { useState } from "react";
import { api } from "../../../convex/_generated/api";

function SnippetsPage() {
    const snippets = useQuery(api.snippets.getSnippets);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
    const [view, setView] = useState<"grid" | "list">("grid");

    
}