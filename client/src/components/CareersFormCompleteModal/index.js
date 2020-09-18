import React from "react";

function CareersFormComplete(props) {
  return (
    <div class="alert alert-success" role="alert">
      Success! Thank you {props.name} for your interest. One of our
      representatives will contact you shortly!
    </div>
  );
}

export default CareersFormComplete;
