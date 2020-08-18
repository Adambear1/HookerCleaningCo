import React, { useEffect } from "react";
import "./styles.css";

function AboutStaffCard(props) {
  return (
    <>
      <li class="media">
        <img
          class="mr-3 image"
          src={props.image}
          alt="Generic placeholder image"
        />
        <div class="media-body">
          <h3 class="mt-0 mb-1">{props.name}</h3>
          {"    "}
          <h5>{props.title}</h5>
          {props.about}
        </div>
      </li>
    </>
  );
}

export default AboutStaffCard;
