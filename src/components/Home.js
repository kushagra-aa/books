import React from "react";
import Cards from "./Cards";

export default function Home(props) {
  return (
    <div className="container">
      <div className="home-top home-con">
        <div className="home-top-card">
          <img
            src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"
            alt="card-img"
            className="home-top-card-img"
          />
          <div className="home-top-card-text">
            <div className="home-top-card-title">
              sell your Books & earn money
            </div>
            <div className="home-top-card-detail">pickup from home</div>
            <button className="home-top-card-btn">Click Here</button>
          </div>
        </div>
        <div className="home-top-card">
          <img
            src="https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt="card-img"
            className="home-top-card-img"
          />
          <div className="home-top-card-text">
            <div className="home-top-card-title">
              sell your Books & earn money
            </div>
            <div className="home-top-card-detail">pickup from home</div>
            <button className="home-top-card-btn">Click Here</button>
          </div>
        </div>
      </div>
      <div className="home-mid home-con">
        <div className="home-mid-card">class IX</div>
        <div className="home-mid-card">class X</div>
        <div className="home-mid-card">class XI</div>
        <div className="home-mid-card">class XII</div>
        <div className="home-mid-card">IIT</div>
      </div>
      <div className="home-btm home-con">
        <div className="home-btm-card">
          <img
            src="https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="BG Img"
            className="home-btm-img"
          />
          <div className="home-btm-card-text">
            <div className="home-btm-card-title">Romance</div>
            Novels
          </div>
        </div>
        <div className="home-btm-card">
          <img
            src="https://images.unsplash.com/photo-1637168974468-1cc2a370b4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            alt="BG Img"
            className="home-btm-img"
          />
          <div className="home-btm-card-text">
            <div className="home-btm-card-title">sifi</div>
            Novels
          </div>
        </div>
      </div>
      <Cards cards={props.feat} />
      <Cards cards={props.isc} />
    </div>
  );
}
