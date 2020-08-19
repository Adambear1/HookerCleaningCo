import React, { useEffect } from "react";
import "./styles.css";

function AboutStaffCard(props) {
  return (
    <div className="col-sm-8 mb-5  ">
      <li className="align-items-center">
        <div className="card" styles="width: 18rem;">
          <img
            className="card-img-top about-picture"
            src={props.image}
            alt="Card image cap"
          />
          <div className="card-header">
            {props.name},{"  "}
            {props.title}
          </div>
          <div className="card-body">
            <p className="card-text">{props.about}</p>
          </div>
        </div>
      </li>
    </div>
  );
}

export default AboutStaffCard;
