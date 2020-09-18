import React from "react";

function AboutTestimonialCards(props) {
  return (
    <div>
      <div class="card bg-light mb-3" styles="max-width: 18rem;">
        <div class="card-header">{props.company}</div>
        <div class="card-body">
          <h5 class="card-title">{props.testimonial}</h5>
          <p class="card-text"></p>
        </div>
      </div>
    </div>
  );
}

export default AboutTestimonialCards;
