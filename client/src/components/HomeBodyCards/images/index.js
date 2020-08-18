import React from "react";
import clean from "./clean.jpg";

function HomeBodyCards() {
  return (
    <div>
      <div className="row">
        <div className="col-5">
          <div class="card" styles="width: 18rem;">
            <img class="card-img-top" src={clean} alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-7">
          <div class="card" styles="width: 18rem;">
            <img class="card-img-top" src={clean} alt="Card image cap" />
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
