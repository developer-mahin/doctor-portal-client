import React from "react";
import fluoride from "../../../../assets/images/fluoride.png";
import cavity from "../../../../assets/images/cavity.png";
import whitening from "../../../../assets/images/whitening.png";
import ServiceCard from "../ServiceCard/ServiceCard";

const ServicesCards = () => {
  const servicesItems = [
    {
      id: 1,
      image: fluoride,
      title: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 2,
      image: cavity,
      title: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 3,
      image: whitening,
      title: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];

  return (
    <div className="lg:py-32 py-16 max-w-[1400px] mx-auto px-3">
      <div className="lg:pb-16 pb-12 text-center">
        <div className="">
          <p className="inline-block px-3 py-px mb-4  font-semibold tracking-wider text-accent uppercase rounded-full bg-gradient-to-r from-secondary to-primary">
            OUR SERVICES
          </p>
        </div>
        <h2 className="mb-6 font-sans text-3xl font-regular tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Services We Provide
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
        {servicesItems.map((item) => (
          <ServiceCard key={item.id} item={item}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default ServicesCards;
