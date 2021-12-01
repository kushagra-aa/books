import React from "react";

export default function Genres(props) {
  return (
    <>
      <div className="home-genre home-con">
        {props.genres.map((card) => {
          return (
            <div className="home-genre-card">
              <img src={card.img} alt="BG Img" className="home-genre-img" />
              <div className="home-genre-card-text">
                <div className="home-genre-card-title">{card.title}</div>
                Novels
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
