import { DataContext } from "../context/DataContext";
import { RunewordData } from "~/model/RunewordInterface";
import { RuneData } from "~/model/RuneInterface";
import React, { useState, useEffect } from 'react';

interface Props {
    children: React.ReactNode;
    runes: RuneData[];
    runewords: RunewordData[];
    isClient: boolean;
}

const DataProvider = ({ children }: Props) => {
    const [isClient, setIsClient] = useState(false);
    const [runes, setRunes] = useState<RuneData[]>([]);
    const [runewords, setRunewords] = useState<RunewordData[]>([]);

    useEffect(() => {

        async function fetchRunes() {
            const response = await fetch('/data/runes.json');
            const runeList = await response.json();

            setRunes(runeList);
        }

        async function fetchRunewords() {
            const response = await fetch('/data/runewords.json');
            const runewordList = await response.json();

            setRunewords(runewordList);
        }

        fetchRunes();
        fetchRunewords();
        setIsClient(true); // Ensures that we are not accessing the document during server-side rendering.
    }, []); // Empty dependency array means this effect runs once on mount
    return (
        <DataContext.Provider value={{ runes, runewords, isClient }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;