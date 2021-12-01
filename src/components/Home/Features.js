import React from "react";
import BooksIcon from "./../../assets/icons/books.svg";
import GiftIcon from "./../../assets/icons/gift.svg";
import DroneIcon from "./../../assets/icons/drone.svg";
import HeadphonesIcon from "./../../assets/icons/headphones.svg";

export default function Features() {
  return (
    <>
      <div className="features">
        <div className="feature">
          <img src={BooksIcon} alt="icon" />
          <h5>endless options</h5>
          <p>We have more books than you can imagine.</p>
        </div>
        <div className="feature">
          <img src={GiftIcon} alt="icon" />
          <h5>easy to order</h5>
          <p>You get to choose from thousands of books!</p>
        </div>
        <div className="feature">
          <img src={DroneIcon} alt="icon" />
          <h5>fastest delivery</h5>
          <p>Our drones are the fastes and most secure</p>
        </div>
        <div className="feature">
          <img src={HeadphonesIcon} alt="icon" />
          <h5>best support</h5>
          <p>We offer 24/7 customer hotline so we can help you online</p>
        </div>
      </div>
    </>
  );
}
