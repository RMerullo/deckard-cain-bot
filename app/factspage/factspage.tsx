import './factspage.css';
import '../assets/TestData.json';
import type Rune from 'app/model/rune';
import runes from '../data/runes.json';

interface FactspageProps { }

const Factspage = (props: FactspageProps) => {
  return (
    <>
      {runes.map(rune => (
        <>
          <h1 key={rune.name}>{rune.name}</h1>
          <img src={rune.imagePath}></img>
        </>
      ))}
    </>
  );
}

export default Factspage;