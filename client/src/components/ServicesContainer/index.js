import React from "react";
import FacilityCards from "../FacilityCards";
import photo from "./images/clean.jpg";
function ServicesContainer() {
  let services = [
    {
      image: photo,
      text: "One Time",
      index: 0,
    },
    {
      image: photo,
      text: "Daily",
      index: 1,
    },
    {
      image: photo,
      text: "Weekly",
      index: 2,
    },
    {
      image: photo,
      text: "Weekends Only",
      index: 3,
    },
    {
      image: photo,
      text: "Monthly",
      index: 4,
    },
    {
      image: photo,
      text: "On Call",
      index: 5,
    },
  ];
  return (
    <div className="container">
      <div className="card-group my-1 ">
        {services.map((item) => {
          return (
            item.index <= 2 && (
              <FacilityCards
                className="mx-4"
                image={item.image}
                text={item.text}
              />
            )
          );
        })}
      </div>
      <div className="card-group my-2 ">
        {services.map((item) => {
          return (
            item.index >= 3 && (
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

export default ServicesContainer;
