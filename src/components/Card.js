import React from "react";
import "./Card.css";

function Card({ id, src, name }) {
  return (
    <div className="card-container">
      <img className="card" id={id} src={src} alt={name} />
      <p className="card-description">{name}</p>
    </div>
  );
}

export default Card;
