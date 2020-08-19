import React, { useEffect } from "react";
import "./styles.css";
import { response } from "express";

function AboutStaffCard(props) {
  return (
    <div className="col-sm-12">
      <li>
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src={props.image} alt="Card image cap" />
          <div className="card-header">
            {props.name},{"  "}
            {props.title}
          </div>
          <div class="card-body">
            <p class="card-text">{props.about}</p>
          </div>
        </div>
      </li>
    </div>
  );
}

export default AboutStaffCard;
