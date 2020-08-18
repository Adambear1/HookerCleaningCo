import React, { useState } from "react";
import axios from "axios";

function Form() {
  const [textState, updateTextState] = useState({});
  function onChange(e) {
    updateTextState({ ...textState, [e.target.name]: e.target.value });
  }
  function onSubmit(e) {
    e.preventDefault();
    axios
      .post("/api/inquire", textState)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  console.log(textState);
  return (
    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            class="form-control"
            id="name"
            placeholder="First and Last Name"
            onChange={onChange}
            required
          />
        </div>
        <div class="form-group col-md-6">
          <label for="address">Address</label>
          <input
            name="address"
            type="text"
            class="form-control"
            id="address"
            placeholder="Address"
            onChange={onChange}
            required
          />
        </div>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          name="email"
          type="email"
          class="form-control"
          id="email"
          placeholder="Email"
          onChange={onChange}
          required
        />
      </div>
      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input
          name="phone"
          type="text"
          class="form-control"
          id="phone"
          placeholder="Phone Number"
          onChange={onChange}
          required
        />
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="squarefootage">Square Footage</label>
          <select
            id="squarefootage"
            name="squarefootage"
            class="form-control"
            onChange={onChange}
            required
          >
            <option defaultValue>Choose...</option>
            <option value="700-">700-</option>
            <option value="800">800</option>
            <option value="900">900</option>
            <option value="1000">1000</option>
            <option value="1100">1100</option>
            <option value="1200">1200</option>
            <option value="1300">1300</option>
            <option value="1400">1400</option>
            <option value="1500">1500</option>
            <option value="1600">1600</option>
            <option value="1700">1700</option>
            <option value="1800">1800</option>
            <option value="1900">1900</option>
            <option value="2000">2000</option>
            <option value="2100">2100</option>
            <option value="2200">2200</option>
            <option value="2300">2300</option>
            <option value="2400">2400</option>
            <option value="2500+">2500+</option>
          </select>
        </div>
        <div class="form-group col-md-6">
          <label for="frequency">Frequency</label>
          <select
            id="frequency"
            name="frequency"
            class="form-control"
            onChange={onChange}
            required
          >
            <option defaultValue>Choose...</option>
            <option value="OneTime">One Time</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="WeekendsOnly">Weekends Only</option>
            <option value="Monthly">Monthly</option>
            <option value="OnCall">On Call</option>
            <option value="Other(Specify)">Other (Specify)</option>
          </select>
        </div>
        <div class="form-group col-md-12">
          <label for="type">Type</label>
          <select
            id="type"
            class="form-control"
            name="type"
            onChange={onChange}
            required
          >
            <option defaultValue>Choose...</option>
            <option value="AutoDealerCleaning">Auto Dealer Cleaning</option>
            <option value="BuildingMaintenance">Building Maintenance</option>
            <option value="MedicalOfficeCleaning">
              Medical Office Cleaning
            </option>
            <option value="PostConstructionCleaning">
              Post Construction Cleaning
            </option>
            <option value="Residential">Residential</option>
            <option value="School/UniversityCleaning">
              School/University Cleaning
            </option>
            <option value="OfficeCleaning">Office Cleaning</option>
            <option value="Other(Specify)">Other (Specify)</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label for="additionalInformation">Additional Information</label>
        <textarea
          class="form-control"
          id="additionalInformation"
          name="additionalInformation"
          rows="3"
          onChange={onChange}
          required
        ></textarea>
      </div>
      <div class="modal-footer justify-content-md-center ">
        <button type="submit" class="btn btn-primary" onSubmit={onSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
