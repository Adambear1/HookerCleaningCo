import React from "react";
import "./styles.css";
import FacilityCards from "../FacilityCards";

import clean2 from "./images/clean2.jpg";
import clean3 from "./images/clean3.jpg";
import clean4 from "./images/clean4.jpg";
import clean5 from "./images/clean5.jpg";
import clean6 from "./images/clean6.jpg";
import clean7 from "./images/clean7.jpg";
import clean8 from "./images/clean8.jpg";
import clean9 from "./images/clean9.jpg";

function FacilityContainer() {
  let facilities = [
    {
      image: clean9,
      text: "Auto Dealer Cleaning",
      index: 0,
    },
    {
      image: clean2,
      text: "Building Maintenance",
      index: 1,
    },
    {
      image: clean3,
      text: "Residential Cleaning",
      index: 2,
    },
    {
      image: clean4,
      text: "Medical clean Cleaning",
      index: 3,
    },
    {
      image: clean5,
      text: "clean Cleaning",
      index: 4,
    },
    {
      image: clean6,
      text: "Post Construction Cleaning",
      index: 5,
    },
    {
      image: clean7,
      text: "School & University Cleaning",
      index: 6,
    },
    {
      image: clean8,
      text: "Other",
      index: 7,
    },
  ];
  return (
    <div className="container">
      <div className="card-group my-2 mx-4 animate__animated animate__slideInDown">
        {facilities.map((item) => {
          return (
            item.index <= 3 && (
              <FacilityCards
                className="mx-4"
                image={item.image}
                text={item.text}
              />
            )
          );
        })}
      </div>
      <div className="card-group my-2 mx-4 animate__animated animate__slideInUp">
        {facilities.map((item) => {
          return (
            item.index >= 4 && (
              <FacilityCards
                className="mx-4"
                image={item.image}
                text={item.text}
              />
            )
          );
        })}
      </div>
    </div>
  );
}

export default FacilityContainer;
