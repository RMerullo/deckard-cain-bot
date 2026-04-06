import titleImage from "@/assets/images/homescreen/DeckardCainBotTitle.png";
import "@/style/runewordle.css";
import { useNavigate } from "@remix-run/react";
import { Outlet } from "react-router-dom";
import React, { useContext } from 'react';
import { DataContext } from "~/context/DataContext";

const HomeScreen = () => {

  const navigate = useNavigate();

  const navigateToRunewordle = () => {
    navigate('/runewordle'); 
  };

  const { runes, runewords } = useContext(DataContext);

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <img
              src={titleImage}
              alt="Deckard Cain Bot"
              className="hidden w-full dark:block"
            />
          </div>
        </header>
        <div className="button-container">
          <div className="individual-button-container">
              <button className="homepage-button" onClick={navigateToRunewordle}>
                Runewordle
              </button>
          </div>
        </div>
            {/* <div>
              <h1>Runewordle</h1>
              <p>Total runes: {runes.length}</p>
            </div> */}
      </div>
      <Outlet />
    </main>
  );
}

export default HomeScreen;