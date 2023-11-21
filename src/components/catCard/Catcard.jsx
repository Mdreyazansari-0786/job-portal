import React from "react";
import { Link } from "react-router-dom";
import "./catcard.scss";

function Catcard({ card }) {
  return (
    <Link to="/gigs?cat=design">
      <div className="catCard">
        <img src={card.img} alt="" />
        <span className="desc">{card.desc}</span>
        <span className="title">{card.title}</span>
      </div>
    </Link>
  );
}

export default Catcard;
