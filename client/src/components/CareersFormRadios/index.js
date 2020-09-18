import React from "react";
import "./styles.css";

function CareersFormRadios(props) {
  return (
    <>
      <div class="form-row">
        <div class="col-sm-12 col-md-6">
          <label>Previous Janitorial Experience?{"  "}</label>
          <div class="custom-control custom-radio">
            <input
              value="yes"
              name="experience"
              type="radio"
              id="yesRadio"
              class="custom-control-input"
              onChange={props.dataAdd}
            />
            <label class="custom-control-label" for="yesRadio">
              Yes
            </label>
          </div>

          {"      "}
          <div class="custom-control custom-radio ">
            <input
              value="no"
              name="experience"
              type="radio"
              id="noRadio"
              class="custom-control-input"
              onChange={props.dataAdd}
            />
            <label class="custom-control-label" for="noRadio">
              No
            </label>
          </div>
        </div>
        {/*  */}
        <div class="col-sm-12 col-md-6">{props.state}</div>
      </div>
    </>
  );
}

export default CareersFormRadios;
