import React, { useEffect } from "react";
import AboutStaffCard from "../AboutStaffCard";
import johnPic from "./john.webp";
import sammiePic from "./sammie.webp";
import rodikaPic from "./rodika.webp";

function AboutStaffContainer(props) {
  let person = [
    {
      name: "John Hooker",
      title: "Owner and Service Manager",
      about:
        "John and his family have been providing quality services to the greater Seattle area for over 35 years. Family owned and operated since 1981. They take pride in our excellent reputation for our professionalism and first rate service.",
      image: johnPic,
    },
    {
      image: sammiePic,
      name: "Sammie Mull",
      title: "Sales Rep",
      about:
        "Sammie was born and raised in Washington and joined Hooker Company because it was not a large corporate company. Sammie, like you, values trust, honesty, and teamwork, and when you choose Hooker Company, they will all work to make sure that your experience with them is positive and stress free.",
    },
    {
      image: rodikaPic,
      name: "Rodika Baranov",
      title: "Account Manager",
      about:
        "At Hooker Company Rodika specializes in your concern for the health and safety and well being of your employees, customers, and environment. She strives to maintain outstanding reviews and services by staying in touch with all clients on a regular basis. ",
    },
  ];
  return (
    <div>
      <div class="card-deck">
        {person.map((item) => {
          return (
            <div className="row">
              <AboutStaffCard
                image={item.image}
                name={item.name}
                title={item.title}
                about={item.about}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutStaffContainer;
