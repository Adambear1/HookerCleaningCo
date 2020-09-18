import React from "react";

function CareersFormIncompleteModal(props) {
  return (
    <div class="alert alert-danger" role="alert">
      One or more inputs has not been filled out! Please answer the remaining
      questions before continuing!
    </div>
  );
}

export default CareersFormIncompleteModal;
