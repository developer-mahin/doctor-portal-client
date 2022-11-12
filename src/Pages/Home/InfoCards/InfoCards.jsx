import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "../InfoCard/InfoCard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      icon: clock,
      title: "Opening Hours",
      description: "Open 9am to 5pm everyday",
      bgClass: "bg-gradient-to-r from-secondary to-primary",
    },
    {
      id: 2,
      icon: marker,
      title: "Visit our location",
      description: "Brooklyn, NY 10036, United States",
      bgClass: "bg-accent",
    },
    {
      id: 3,
      icon: phone,
      title: "Contact us now",
      description: "+000 123 456789",
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 
    gap-6 max-w-[1400px] mx-auto px-3">
      {cardData.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
