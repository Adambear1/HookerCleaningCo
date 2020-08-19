import React, { useState } from "react";
import API from "../../utils/API";

function Form() {
  const [textState, setTextState] = useState({});
  function onChange(e) {
    setTextState({ ...textState, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    API.postInquire(textState)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  console.log(textState);
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="First and Last Name"
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="address">Address</label>
          <input
            name="address"
            type="text"
            className="form-control"
            id="address"
            placeholder="Address"
            onChange={onChange}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          className="form-control"
          id="email"
          placeholder="Email"
          onChange={onChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          name="phone"
          type="text"
          className="form-control"
          id="phone"
          placeholder="Phone Number"
          onChange={onChange}
          required
        />
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="squarefootage">Square Footage</label>
          <select
            id="squarefootage"
            name="squarefootage"
            className="form-control"
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
        <div className="form-group col-md-6">
          <label htmlFor="frequency">Frequency</label>
          <select
            id="frequency"
            name="frequency"
            className="form-control"
            onChange={onChange}
            required
          >
            <option defaultValue>Choose...</option>
            <option value="OneTime">One Time</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="WeekendsOnly">Weekends Only</option>
            <option value="Monthly">Monthly</option>
            <option value="Annually">Annually</option>
            <option value="OnCall">On Call</option>
            <option value="Other(Specify)">Other (Specify)</option>
          </select>
        </div>
        <div className="form-group col-md-12">
          <label htmlFor="type">Type</label>
          <select
            id="type"
            className="form-control"
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
      <div className="form-group">
        <label htmlFor="additionalInformation">Additional Information</label>
        <textarea
          className="form-control"
          id="additionalInformation"
          name="additionalInformation"
          rows="3"
          onChange={onChange}
          required
        ></textarea>
      </div>
      <div className="modal-footer justify-content-md-center ">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
