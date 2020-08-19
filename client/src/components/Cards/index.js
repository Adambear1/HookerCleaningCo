import React from "react";

function Cards(props) {
  return (
    <div className="card" styles="width: 18rem; height: 300px">
      <img
        className="card-img-top"
        src={props.image}
        alt="Card image cap"
        styles="height 550px !important; "
      />
      <div className="card-body">
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
}

export default Cards;
