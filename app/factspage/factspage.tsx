import './factspage.css';
import '../assets/TestData.json';
import { RunewordData } from "~/model/RunewordInterface";
import { RuneData }  from "~/model/RuneInterface";

type RuneProps = {
  runes: RuneData[];
};


function FactsPage({ runes }: RuneProps) {
  console.log('Factspage RUNES = ', runes);
  if (!runes) return <div>Loading...</div>;
  return (
    <>
      {runes.map(rune => (
        <div key={rune.name}>
          <h1>{rune.name}</h1>
          <img src={rune.imagePath} />
        </div>
      ))}
    </>
  );
};

export default FactsPage;