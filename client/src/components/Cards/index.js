import React from "react";

function Cards(props) {
  return (
    <div class="card" styles="width: 18rem; height: 300px">
      <img
        class="card-img-top"
        src={props.image}
        alt="Card image cap"
        styles="height 550px !important; "
      />
      <div class="card-body">
        <p class="card-text">{props.text}</p>
      </div>
    </div>
  );
}

export default Cards;
