import React from "react";
import Card from "../Card/Card";

export default function cards(props) {
  return (
    <>
      <h2 className="cards-title">{props.cards.title}</h2>
      <div className="cards-con">
        {props.cards.books.map((book) => {
          return <Card card={book} />;
        })}
      </div>
    </>
  );
}
