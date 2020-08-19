import React from "react";
import ContactFormEmailCard from "../ContactFormEmailCard";

function ContactFormEmail() {
  let employee = [
    {
      name: "John Hooker",
      email: "john@hookercleaningcompany.com",
    },
    {
      name: "Sammie Mull",
      email: "sammie@hookercleaningcompany.com",
    },
    {
      name: "Rodika Baranov",
      email: "rodika@hookercleaningcompany.com",
    },
  ];
  return (
    <div class="row">
      {employee.map((item) => {
        return (
          <div class="col-sm animate__animated animate__zoomInDown">
            <ContactFormEmailCard name={item.name} email={item.email} />
          </div>
        );
      })}
    </div>
  );
}

export default ContactFormEmail;
