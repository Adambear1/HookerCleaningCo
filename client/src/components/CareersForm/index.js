import React, { useState, useEffect } from "react";
import CareersFormMisc from "../CareersFormMisc";

import API from "../../utils/API";

import CareersFormName from "../CareersFormName";
import CareersFormPhoneEmail from "../CareersFormPhoneEmail";
import CareersFormRadios from "../CareersFormRadios";
import CareersFormIncompleteModal from "../CareersFormIncompleteModal";
import CareersFormCompleteModal from "../CareersFormCompleteModal";
import CareersFormErrorModal from "../CareersFormErrorModal";

function CareersForm() {
  const [data, setData] = useState({});
  const [experience, setExperience] = useState();
  const [complete, setComplete] = useState(false);
  const [incomplete, setIncomplete] = useState(false);
  const [error, setError] = useState(false);
  useEffect(
    () => {
      if (data.experience == "yes") {
        setExperience({
          title: "Years Experience",
          for: "yearsExperience",
          name: "yearsExperience",
          id: "yearsExperience",
        });
      } else if (data.experience == "no") {
        setExperience({
          title: "Why Janitorial",
          for: "whyJanitorial",
          name: "whyJanitorial",
          id: "whyJanitorial",
        });
      }
      setTimeout(() => {
        setError(false);
        setIncomplete(false);
      }, 3000);
    },
    [data.experience],
    [setError],
    [setIncomplete]
  );
  function dataAdd(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  function dataSend(e) {
    if (
      (data.fullName &&
        data.email &&
        data.phoneNumber &&
        data.experience &&
        data.yearsExperience) ||
      data.whyJanitorial
    ) {
      console.log(true);
      e.preventDefault();
      API.careers(data)
        .then((data) => {
          setComplete(true);
          console.log(data);
        })
        .catch((error) => {
          setError(true);
          console.log(error);
        });
    } else {
      console.log(false);
      e.preventDefault();
      setIncomplete(true);
    }
  }
  console.log(data);
  return (
    <>
      <form class="mt-5" onSubmit={dataSend}>
        <CareersFormName dataAdd={dataAdd} />
        <CareersFormPhoneEmail dataAdd={dataAdd} />
        <CareersFormRadios
          dataAdd={dataAdd}
          state={
            experience && (
              <>
                <label for="whyJanitorial" class="radios-label">
                  {experience.title}
                </label>
                <input
                  name={experience.name}
                  type="text"
                  class="form-control"
                  id={experience.id}
                  placeholder={`${experience.title}...`}
                  onChange={dataAdd}
                />
              </>
            )
          }
        />
        <CareersFormMisc dataAdd={dataAdd} />
        {error && <CareersFormErrorModal />}
        {incomplete && <CareersFormIncompleteModal />}
        {complete && <CareersFormCompleteModal name={data.fullName} />}
        <button
          type="submit"
          class="btn btn-primary item-align-center"
          onSubmit={dataSend}
        >
          Sign in
        </button>
      </form>
    </>
  );
}

export default CareersForm;
