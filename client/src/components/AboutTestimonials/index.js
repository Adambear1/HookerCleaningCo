import React from "react";
import AboutTestimonialCards from "../AboutTestimonialCards";

function AboutTestimonials() {
  let item = [
    {
      company: "Lipsum Irum",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam purus arcu, condimentum sit amet luctus nec, laoreet sit amet diam. Aenean nec rhoncus mi. Donec facilisis molestie ex, condimentum pellentesque risus semper at. Vestibulum vehicula porttitor arcu nec feugiat. Sed rhoncus ultrices lacinia. Aenean enim mauris, sodales in tempor sit amet, vehicula quis odio.",
    },
    {
      company: "lorem ispum",
      testimonial:
        "Donec vitae turpis mi. Quisque eu commodo arcu. Maecenas placerat pretium ex, sed ultricies odio facilisis quis. Donec scelerisque, nisi et venenatis euismod, lacus odio vulputate ex, ut commodo massa augue et velit. Suspendisse fringilla dignissim enim a semper.",
    },
  ];
  return (
    <div>
      <ul class="list-unstyled">
        {item.map((item) => {
          return (
            <AboutTestimonialCards
              testimonial={item.testimonial}
              company={item.company}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default AboutTestimonials;
