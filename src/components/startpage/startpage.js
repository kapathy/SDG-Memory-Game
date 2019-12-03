import React from "react";
import PropTypes from "prop-types";

import "./startpage.css";

export default function StartPage({ handleStartClick }) {
  return (
    <div>
      <h1>The Sustainable Development Goals - MEMORY GAME</h1>
      <img className="logo" src={`/img/SDG_wheel.png`} alt="SDG-logo" />
      <h2 />
      <button className="start-button" onClick={() => handleStartClick()}>
        <p>Start</p>
      </button>
    </div>
  );
}

StartPage.propTypes = {
  handleStartClick: PropTypes.func.isRequired
};
