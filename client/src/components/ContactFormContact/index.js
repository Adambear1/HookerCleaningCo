import React, { useState } from "react";
import API from "../../utils/API";

function ContactFormContact() {
  const [words, setWord] = useState([]);
  function onType(e) {
    setWord([...words, e.target.value]);
  }
  function handleSubmit(e) {
    e.preventDefault();
    API.sendEmail(words)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label class="mr-sm-2 mt-5" htmlFor="inlineFormCustomSelect">
          Preference
        </label>
        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
          <option selected>Topic</option>
          <option value="1">Make Payment</option>
          <option value="2">Inquire</option>
          <option value="3">General Question</option>
          <option value="3">Other</option>
        </select>
        <label className="my-2" htmlFor="exampleFormControlTextarea1">
          Please Include Name, Contact Information, and Question Below...
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          onChange={onType}
        ></textarea>
        <div className="modal-footer justify-content-md-center">
          <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactFormContact;
