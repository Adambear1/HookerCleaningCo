import React from "react";

function CareersFormPhoneEmail(props) {
  return (
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="email">Email</label>
        <input
          name="email"
          type="email"
          class="form-control"
          id="email"
          onChange={props.dataAdd}
          placeholder="Email..."
        />
      </div>
      <div class="form-group col-md-6">
        <div class="form-group">
          <label for="phoneNumber">Phone Number</label>
          <input
            name="phoneNumber"
            type="tel"
            class="form-control"
            id="phoneNumber"
            onChange={props.dataAdd}
            placeholder="(555) 555-5555"
          />
        </div>
      </div>
    </div>
  );
}

export default CareersFormPhoneEmail;
