import './factspage.css';
import '../assets/TestData.json';
import { RunewordData } from "~/model/RunewordInterface";
import { RuneData }  from "~/model/RuneInterface";


const FactsPage = ({ runes }: {runes: RuneData[]}) => {
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