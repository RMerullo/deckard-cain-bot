import type { Route } from "./+types/home";
import { HomeScreen } from "../homescreen/homescreen";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Deckard Cain Bot" },
    { name: "description", content: "Diablo 2 Helper" },
  ];
}

export default function Home() {
  return <HomeScreen />;
}
