import React from "react";

export default function Card({ card }) {
  return (
    <>
      <div className="card">
        <img src={card.img} alt="Card Img" className="card-img" />
        <h4 className="card-title card-text">{card.title}</h4>
        <div className="card-price card-text">₹{card.price}</div>
        <div className="card-discount card-text">{card.discount}%</div>
      </div>
    </>
  );
}
