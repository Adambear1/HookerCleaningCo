import React from "react";

function ContactFormEmailCard(props) {
  return (
    <div className="card">
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <a class="card-text" href={`mailto:${props.email}`}>
          {props.email}
        </a>
      </div>
    </div>
  );
}

export default ContactFormEmailCard;
