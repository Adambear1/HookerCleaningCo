import React from "react";

function CareersFormMisc(props) {
  return (
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Additional Information:</label>
      <textarea
        name="additionalInformation"
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="5"
        placeholder="Tell us any additional information..."
        onChange={props.dataAdd}
      ></textarea>
    </div>
  );
}

export default CareersFormMisc;
