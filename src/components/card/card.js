import React from "react";
import PropTypes from "prop-types";

import "./card.css";

export default function Card({
  handleCardClick,
  id,
  type,
  clicked,
  solved,
  height,
  width,
  disabled
}) {
  return (
    <div
      className={`card-container ${clicked ? "clicked" : ""}`}
      style={{
        width,
        height
      }}
      onClick={() => (disabled ? null : handleCardClick(id))}
    >
      <div className="flipper">
        <img
          style={{
            width,
            height
          }}
          className={clicked ? "front" : "back"}
          src={clicked || solved ? `/img/${type}.png` : `/img/back.png`}
          alt={clicked || solved ? `SDG-goal` : `SDG-ring`}
        />
      </div>
    </div>
  );
}

Card.propTypes = {
  handleCardClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  clicked: PropTypes.bool.isRequired,
  solved: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired
};
