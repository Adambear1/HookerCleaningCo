import React from "react";

function CareersFormName(props) {
  return (
    <div class="form-row">
      <label for="fullName">Name</label>
      <input
        name="fullName"
        type="text"
        class="form-control"
        id="fullName"
        placeholder="Full Name..."
        onChange={props.dataAdd}
      />
    </div>
  );
}

export default CareersFormName;
