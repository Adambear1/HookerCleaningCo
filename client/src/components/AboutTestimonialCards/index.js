import React from "react";

function AboutTestimonialCards(props) {
  return (
    <li className="media">
      <div className="card">
        <b>
          <h3 className="text-justify">{props.company}</h3>
        </b>
        <div className="card-body">{props.testimonial}</div>
      </div>
    </li>
  );
}

export default AboutTestimonialCards;
