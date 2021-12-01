import React from "react";

export default function Card({ card }) {
  return (
    <>
      <div className="card">
        <img src={card.img} alt="Card Img" className="card-img" />
        <div className="card-text">
          <h4 className="card-title">{card.title}</h4>
          <div className="card-price">₹{card.price}</div>
          <div className="card-discount">{card.discount}%</div>
        </div>
      </div>
    </>
  );
}
