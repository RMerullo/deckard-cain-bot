import type { Route } from "./+types/home";
import { HomeScreen } from "./homescreen";
import { useState, useEffect } from 'react';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Deckard Cain Bot" },
    { name: "description", content: "Diablo 2 Helper" },
  ];
}

export default function App() {
  const [runes, setRunes] = useState();
  const [runewords, setRunewords] = useState();

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
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <HomeScreen runes={runes} runewords={runewords} />
  );
}
