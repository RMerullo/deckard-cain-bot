import type { Route } from "./+types/home";
import { HomeScreen } from "../homescreen/homescreen";
import React, { useState, useEffect } from 'react';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Deckard Cain Bot" },
    { name: "description", content: "Diablo 2 Helper" },
  ];
}

export default function Home() {
  const [runes, setRunes] = useState();

  useEffect(() => {
    async function fetchRunes() {
      const response = await fetch('/data/runes.json');
      const runeList = await response.json();

      setRunes(runeList);
      console.log(runeList);
    }

    fetchRunes();
  }, []);

  return <div>
    {JSON.stringify(runes)}
  </div>
}
