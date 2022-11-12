import React from "react";

const InfoCard = ({ card }) => {
  const { icon, title, description, bgClass } = card;

  return (
    <div className={`card card-side shadow-xl px-6 py-9 ${bgClass}`}>
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
