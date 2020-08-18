import React from "react";
import Card from "../Cards";
import clean from "./images/clean.jpg";
import cleancrew from "./images/cleancrew.jpg";

function HomeBodyCards(props) {
  return (
    <div>
      <div className="row">
        <div className="col-sm-6 col-md-5 col-lg-6">
          <Card image={clean} text={"this is text"} />
        </div>
        <div className="col-sm-6 col-md-5 col-lg-6">
          <Card image={clean} text={"this is text"} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-5 col-lg-6">
          <div class="card" styles="width: 18rem">
            <img class="card-img-top" src={cleancrew} alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-5 col-lg-6">
          <div class="card" styles="width: 18rem">
            <img class="card-img-top" src={cleancrew} alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBodyCards;
