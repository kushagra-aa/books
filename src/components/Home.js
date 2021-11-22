import React from "react";
import Cards from "./Cards";

export default function Home(props) {
  return (
    <div className="container">
      <div className="home-top home-con">
        {props.top.map((card) => {
          return (
            <div className="home-top-card">
              <img
                src={card.img}
                alt="card-img"
                className="home-top-card-img"
              />
              <div className="home-top-card-text">
                <div className="home-top-card-title">{card.title}</div>
                <div className="home-top-card-detail">{card.detail}</div>
                <button className="home-top-card-btn">Click Here</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="home-mid home-con">
        {props.mid.map((card) => {
          return <div className="home-mid-card">{card.text}</div>;
        })}
      </div>
      <div className="home-btm home-con">
        {props.btm.map((card) => {
          return (
            <div className="home-btm-card">
              <img src={card.img} alt="BG Img" className="home-btm-img" />
              <div className="home-btm-card-text">
                <div className="home-btm-card-title">{card.title}</div>
                Novels
              </div>
            </div>
          );
        })}
      </div>
      <Cards cards={props.feat} />
      <Cards cards={props.isc} />
    </div>
  );
}
