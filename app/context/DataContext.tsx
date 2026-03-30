import { createContext } from "react";
import { RunewordData } from "~/model/RunewordInterface";
import { RuneData } from "~/model/RuneInterface";

interface DataContextType {
    isClient: boolean;
    runes: RuneData[];
    runewords: RunewordData[];
}

export const DataContext = createContext<DataContextType>({
    isClient: false,
    runes: [],
    runewords: []
});