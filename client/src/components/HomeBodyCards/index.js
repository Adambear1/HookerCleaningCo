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
        <div className="col-sm-6 col-md-5 col-lg-6">
          <Card image={cleanoffice} text={"this is text"} />
        </div>
        <div className="col-sm-6 col-md-5 col-lg-6">
          <Card image={clean} text={"this is text"} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-5 col-lg-6">
          <Card image={cleancrew} text={"this is text"} />
        </div>
        <div className="col-sm-6 col-md-5 col-lg-6">
          <Card image={janitorial1} text={"this is text"} />
        </div>
      </div>
    </div>
  );
}

export default HomeBodyCards;
