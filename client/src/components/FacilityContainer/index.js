import React from "react";
import "./styles.css";
import FacilityCards from "../FacilityCards";
import office from "./images/clean1.jpg";

function FacilityContainer() {
  let facilities = [
    {
      image: office,
      text: "Auto Dealer Cleaning",
      index: 0,
    },
    {
      image: office,
      text: "Building Maintenance",
      index: 1,
    },
    {
      image: office,
      text: "Residential Cleaning",
      index: 2,
    },
    {
      image: office,
      text: "Medical Office Cleaning",
      index: 3,
    },
    {
      image: office,
      text: "Office Cleaning",
      index: 4,
    },
    {
      image: office,
      text: "Post Construction Cleaning",
      index: 5,
    },
    {
      image: office,
      text: "School & University Cleaning",
      index: 6,
    },
    {
      image: office,
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
