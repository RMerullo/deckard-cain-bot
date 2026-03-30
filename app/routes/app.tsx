import HomeScreen from "./HomeScreen";

export function meta({ }) {
  return [
    { title: "Deckard Cain Bot" },
    { name: "description", content: "Diablo 2 Helper" },
  ];
}

export default function App() {
  return (
    <HomeScreen />
  );
}