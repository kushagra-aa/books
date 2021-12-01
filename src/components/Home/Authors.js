import React from "react";

export default function Authors(props) {
  return (
    <>
      <div className="home-mid home-con">
        {props.authors.map((card) => {
          return (
            <div className="home-mid-card">
              <img src={card.img} alt={card.title} />
              <h4>{card.title}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}
