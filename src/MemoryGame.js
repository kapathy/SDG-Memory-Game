import React, { useState, useEffect } from "react";
import GameBoard from "./components/gameboard/gameboard.js";
import StartPage from "./components/startpage/startpage.js";
import GameWon from "./components/gamewon/gamewon.js";
import shuffleCards from "./components/deck/deck.js";

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [clicked, setClicked] = useState([]);
  const [solved, setSolved] = useState([]);
  const [dimension, setDimension] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [started, setStarted] = useState(false);
  const [numMatches, setNumMatches] = useState(0);

  useEffect(() => {
    setDimension(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      )
    );
    setCards(shuffleCards());
  }, []);

  const handleStartClick = () => {
    setStarted(true);
  };

  const handlePlayAgainClick = () => {
    window.location.reload();
  };

  const handleCardClick = id => {
    setDisabled(true);
    if (clicked.length === 0) {
      setClicked([id]);
      setDisabled(false);
      return;
    } else {
      if (sameCardClicked(id)) return;
      setClicked([...clicked, id]);
      if (isMatch(id)) {
        resetCards();
      } else {
        setTimeout(resetCards, 1000);
      }
    }
  };

  const sameCardClicked = id => clicked.includes(id);

  const isMatch = id => {
    let clickedCardOne = cards.find(card => card.id === id);
    let clickedCardTwo = cards.find(card => clicked[0] === card.id);
    if (clickedCardOne.type === clickedCardTwo.type) {
      setSolved([...solved, clicked[0], id]);
      setNumMatches(numMatches + 1);
      return true;
    }
  };

  const resetCards = () => {
    setClicked([]);
    setDisabled(false);
  };

  if (started === false) {
    return <StartPage handleStartClick={handleStartClick} />;
  }

  if (numMatches === 17) {
    return <GameWon handlePlayAgainClick={handlePlayAgainClick} />;
  }

  return (
    <div>
      <div>
        <GameBoard
          dimension={dimension}
          cards={cards}
          clicked={clicked}
          handleCardClick={handleCardClick}
          disabled={disabled}
          solved={solved}
          numMatches={numMatches}
        />
      </div>
    </div>
  );
}
