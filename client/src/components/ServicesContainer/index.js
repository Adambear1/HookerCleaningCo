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
      <div className="card-group my-1 animate__animated animate__rollIn">
        <div>
          <div class="card bg-light mb-3" styles="max-width: 18rem;">
            <div class="card-header"></div>
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text">
                The Hooker Cleaning Company is dynamic in services: On Call,
                Daily, Weekly, Monthly, One-Time. We take immense pride in
                having flexible hours that cater best to our customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesContainer;
