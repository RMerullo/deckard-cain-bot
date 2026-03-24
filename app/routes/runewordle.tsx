import './style/runewordle.css';
import { RunewordData } from "~/model/RunewordInterface";
import { RuneData } from "~/model/RuneInterface";

interface RunewordleProps {
  runes?: RuneData[];
  runewords?: RunewordData[];
}

export function Runewordle({ runes, runewords }: RunewordleProps) {
  return (<div>Loading...</div>);
  // console.log('Runewordle RUNES = ', runes);
  // if (!runes) return <div>Loading...</div>;
  // return (
  //   <>
  //     {runes.map(rune => (
  //       <div key={rune.name}>
  //         <h1>{rune.name}</h1>
  //         <img src={rune.imagePath} />
  //       </div>
  //     ))}
  //   </>
  // );
};