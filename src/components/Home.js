import React from "react";
import Top from "./Home/Top";
import Features from "./Home/Features";
import Authors from "./Home/Authors";
import Genres from "./Home/Genres";
import Me from "./Home/Me";
import Help from "./Home/Help";
import Cards from "./Home/Cards";

export default function Home(props) {
  return (
    <div className="container">
      <Top banners={props.top}></Top>
      <Features></Features>
      <Authors authors={props.authors}></Authors>
      <Genres genres={props.genres}></Genres>
      <Cards cards={props.topPicks} />
      <Cards cards={props.bestSellers} />
      <Help></Help>
      <Me></Me>
    </div>
  );
}
