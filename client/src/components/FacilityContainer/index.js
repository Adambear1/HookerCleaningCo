import React from "react";
import "./styles.css";
import FacilityCards from "../FacilityCards";
import office from "./images/clean1.jpg";

function FacilityContainer() {
  let facilities = [
    {
      image: office,
      text: "Auto Dealer Cleaning",
    },
    {
      image: office,
      text: "Building Maintenance",
    },
    {
      image: office,
      text: "Residential Cleaning",
    },
    {
      image: office,
      text: "Medical Office Cleaning",
    },
    {
      image: office,
      text: "Office Cleaning",
    },
    {
      image: office,
      text: "Post Construction Cleaning",
    },
    {
      image: office,
      text: "School & University Cleaning",
    },
    {
      image: office,
      text: "Other",
    },
  ];
  return (
    <div className="container">
      <div className="card-columns">
        {facilities.map((item) => {
          return <FacilityCards image={item.image} text={item.text} />;
        })}
      </div>
    </div>
  );
}

export default FacilityContainer;
