import "app/style/runewordle.css";
import { RunewordData } from "~/model/RunewordInterface";
import { RuneData } from "~/model/RuneInterface";
import { DataContext } from "~/context/DataContext";
import { useContext } from 'react';

const Runewordle = () => {
  const { runes, runewords } = useContext(DataContext);
  return (
    <div>
      <h1>Runewordle</h1>
      <p>Total runes: {runes.length}</p>
    </div>
  );
};

export default Runewordle;