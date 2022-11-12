import React from "react";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import SingleTestimonial from "./SingleTestimonial";
import quote from "../../../assets/icons/quote.svg";

const Testimonial = () => {
  const quoteImage = {
    backgroundImage: `url(${quote})`,
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
  };

  const testimonialData = [
    {
      id: 1,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      authorImage: people1,
      authorName: "Winson Herry",
      location: "California",
    },
    {
      id: 2,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      authorImage: people2,
      authorName: "Winson Herry",
      location: "California",
    },
    {
      id: 3,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      authorImage: people3,
      authorName: "Winson Herry",
      location: "California",
    },
  ];

  return (
    <section className="py-20 max-w-[1400px] mx-auto">
      <div style={quoteImage} className="mb-12 md:p-10 ">
        <p className="inline-block px-3 py-px mb-4  font-semibold tracking-wider text-accent uppercase rounded-full bg-gradient-to-r from-secondary to-primary">
          Testimonial
        </p>
        <h1 className="text-4xl font-regular leading-none">
          What Our Patients Says
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {testimonialData.map((item) => (
          <SingleTestimonial key={item.id} item={item}></SingleTestimonial>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
