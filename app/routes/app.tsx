import { HomeScreen } from "./homescreen";
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Runewordle } from "./runewordle";

export function meta({ }) {
  return [
    { title: "Deckard Cain Bot" },
    { name: "description", content: "Diablo 2 Helper" },
  ];
}

export default function App() {
  const [isClient, setIsClient] = useState(false);
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
    setIsClient(true); // Ensures that we are not accessing the document during server-side rendering.
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      {isClient ? (
          <Routes>
            <Route path="/*" element={<HomeScreen />}>
              <Route path="runewordle" element={<Runewordle runes={runes} runewords={runewords} />} />
            </Route>
          </Routes>
      ) : (
        <div id="loading-image-div">
          <img src="./app/assets/loading.svg"></img>
        </div>
      )}
    </div>
  );
}
