import React from "react";
import "./styles.css";

function FacilityCards(props) {
  return (
    <div class="card" styles="width: 18rem;">
      <img class="card-img-top image" src={props.image} alt="Card image cap" />
      <div class={`overlay ${props.text.split(" ").join("_")}`}>
        <div class="text">{props.text}</div>
      </div>
    </div>
  );
}

export default FacilityCards;
