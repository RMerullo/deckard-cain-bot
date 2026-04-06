import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import Runewordle from "./RuneWordle";

export function meta({ }) {
  return [
    { title: "Deckard Cain Bot" },
    { name: "description", content: "Diablo 2 Helper" },
  ];
}

export default function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/runewordle" element={<Runewordle />} />
      </Routes>
    </BrowserRouter>
  );
}