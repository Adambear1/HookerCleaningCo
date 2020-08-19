import React from "react";
import Card from "../Cards";
import clean from "./images/clean.jpg";
import cleanoffice from "./images/cleanoffice.jpg";
import janitorial1 from "./images/janitorial1.jpg";
import cleancrew from "./images/cleancrew.jpg";

function HomeBodyCards(props) {
  return (
    <div>
      <div className="row">
        <div className="animate__animated animate__fadeIn col-sm-6 col-md-5 col-lg-6">
          <Card
            image={cleanoffice}
            text={
              "Locally owned organization that has proudly been serving the Pudget Sound Area for 39 years."
            }
          />
        </div>
        <div className="animate__animated animate__fadeIn col-sm-6 col-md-5 col-lg-6">
          <Card
            image={clean}
            text={
              "Servicing private residences, commercial units, government buildings, and everything in between; there are no jobs too big or too small!"
            }
          />
        </div>
      </div>
      <div className="row">
        <div className="animate__animated animate__fadeIn col-sm-6 col-md-5 col-lg-6">
          <Card
            image={cleancrew}
            text={
              "An organization that takes pride in maintaining and refurbishing buildings while assuring top customer satisfaction."
            }
          />
        </div>
        <div className="animate__animated animate__fadeIn col-sm-6 col-md-5 col-lg-6">
          <Card
            image={janitorial1}
            text={
              "On call, scheduling, or booked in advanced. We take pride in our flexible and readiness services."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default HomeBodyCards;
