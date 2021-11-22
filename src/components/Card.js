import React from "react";

export default function Card() {
  return (
    <>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="Card Img"
          className="card-img"
        />
        <h4 className="card-title card-text">Harry Porter</h4>
        <div className="card-price card-text">$500</div>
        <div className="card-discount card-text">50%</div>
      </div>
    </>
  );
}
