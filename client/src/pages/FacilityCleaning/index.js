import React from "react";
import FacilityContainer from "../../components/FacilityContainer";
import ServicesContainer from "../../components/ServicesContainer";

function FacilityCleaning() {
  return (
    <>
      <div>
        <h2 className="text-center my-4 animate__animated animate__fadeIn">
          Facilities
        </h2>
      </div>
      <FacilityContainer />
      <div>
        <h2 className="text-center my-4 text-center my-4 animate__animated animate__fadeIn">
          Services
        </h2>
      </div>
      <ServicesContainer />
    </>
  );
}

export default FacilityCleaning;
