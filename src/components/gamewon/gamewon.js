import React from "react";
import PropTypes from "prop-types";
import "./gamewon.css";

export default function GameWon({ handlePlayAgainClick }) {
  return (
    <div>
      <h1>CONGRATULATIONS</h1>
      <img className="logo" src={`/img/SDG_wheel.png`} alt="SDG-logo" />
      <h2 />
      <button
        className="play-again-button"
        onClick={() => handlePlayAgainClick()}
      >
        <p>Play Again</p>
      </button>
      <p>
        <a href="https://sustainabledevelopment.un.org" target="_blank">
          Click Here to learn more about the Sustianable Development Goals
        </a>
      </p>
    </div>
  );
}

GameWon.propTypes = {
  handlePlayAgainClick: PropTypes.func.isRequired
};
