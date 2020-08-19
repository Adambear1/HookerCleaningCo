import React, { useState } from "react";
import API from "../../utils/API";

function ContactFormContact() {
  const [words, setWord] = useState([]);
  const [title, setTitle] = useState([]);
  const [visible, setVisible] = useState(false);
  function onType(e) {
    setWord([...words, e.target.value]);
  }
  function onChange(e) {
    console.log(e.target.value);
    setTitle(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log({
      title: title,
      question: words.slice(-1)[0],
    });
    API.sendEmail({
      title: title,
      question: words,
    })
      .then((data) => {
        setVisible(true);
        document.querySelector(".form-control").textContent = "";

        setTimeout(() => {
          setVisible(false);
        }, 5000);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="animate__animated animate__fadeIn"
      >
        <label NameName="mr-sm-2 mt-5" htmlFor="inlineFormCustomSelect">
          Preference
        </label>
        <select
          className="custom-select mr-sm-2"
          id="inlineFormCustomSelect"
          onChange={onChange}
        >
          <option default>Topic</option>
          <option value="Make Payment">Make Payment</option>
          <option value="Services">Services</option>
          <option value="Inquire">Inquire</option>
          <option value="General Question">General Question</option>
          <option value="Other">Other</option>
        </select>
        <label className="my-2" htmlFor="exampleFormControlTextarea1">
          Please Include Name, Contact Information, and Question Below...
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          onChange={onType}
        ></textarea>
        <div className="modal-footer justify-content-md-center">
          <button
            type="submit"
            className="btn btn-primary justify-content-md-center"
            onClick={handleSubmit}
          >
            Submit
          </button>
          {visible && (
            <div className="row">
              <div className="alert alert-success" role="alert">
                {title} email sent!
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default ContactFormContact;
