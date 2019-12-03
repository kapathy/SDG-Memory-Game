import React from "react";
import PropTypes from "prop-types";

import "./counter.css";

export default function Counter({ numMatches }) {
  return (
    <div className="counter-box">
      <div className="container">
        <h3>Solved:</h3>
        <p>{numMatches} out of 17</p>
      </div>
    </div>
  );
}

Counter.propTypes = {
  numMatches: PropTypes.number.isRequired
};
