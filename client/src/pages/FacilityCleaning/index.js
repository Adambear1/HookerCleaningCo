import React from "react";
import FacilityContainer from "../../components/FacilityContainer";
import ServicesContainer from "../../components/ServicesContainer";

function FacilityCleaning() {
  return (
    <>
      <div>
        <h2 className="text-center my-4">Facilities</h2>
      </div>
      <FacilityContainer />
      <div>
        <h2 className="text-center my-4">Services</h2>
      </div>
      <ServicesContainer />
    </>
  );
}

export default FacilityCleaning;
