import React from "react";
import ContactFormContainer from "../../components/ContactFormContainer";
import ContactFormContact from "../../components/ContactFormContact";

function Contact() {
  return (
    <div className="container">
      <ContactFormContainer />
      <ContactFormContact />
    </div>
  );
}

export default Contact;
