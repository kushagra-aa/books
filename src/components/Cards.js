import React from "react";
import Card from "./Card";

export default function cards(props) {
  return (
    <>
      <h2 className="cards-title">{props.cards.title}</h2>
      <div className="cards-con">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
