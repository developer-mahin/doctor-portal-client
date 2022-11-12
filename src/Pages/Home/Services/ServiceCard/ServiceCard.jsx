import React from "react";

const ServiceCard = ({ item }) => {
  const { title, description, image } = item;

  return (
    <div className="card w-full bg-base-100 shadow-xl border py-11">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
