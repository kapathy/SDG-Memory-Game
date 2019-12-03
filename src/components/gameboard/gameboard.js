import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card.js";
import Counter from "../counter/counter.js";
import "./gameboard.css";

export default function GameBoard({
  dimension,
  cards,
  clicked,
  solved,
  handleCardClick,
  disabled,
  numMatches
}) {
  return (
    <div
      className="board"
      style={{
        width: dimension,
        height: dimension
      }}
    >
      {cards.map(card => (
        <Card
          key={card.id}
          width={dimension / 7}
          height={dimension / 7}
          handleCardClick={handleCardClick}
          clicked={clicked.includes(card.id)}
          solved={solved.includes(card.id)}
          disabled={disabled || solved.includes(card.id)}
          {...card}
        />
      ))}
      <Counter numMatches={numMatches} />
    </div>
  );
}

GameBoard.propTypes = {
  dimension: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  clicked: PropTypes.arrayOf(PropTypes.number).isRequired,
  solved: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleCardClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  numMatches: PropTypes.number.isRequired
};
