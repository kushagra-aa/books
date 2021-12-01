import React from "react";

export default function Top(props) {
  return (
    <>
      <div className="home-top home-con">
        {props.banners.map((card) => {
          return (
            <div className="home-top-card" key={card.sno}>
              <img
                src={card.img}
                alt={card.title}
                className="home-top-card-img"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
