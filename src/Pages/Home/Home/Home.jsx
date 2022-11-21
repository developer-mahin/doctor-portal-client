import React from "react";
import Appointment from "../Appointment/Appointment";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import InfoCards from "../InfoCards/InfoCards";
import ServicesCards from "../Services/ServicesCards/ServicesCards";
import Terms from "../Terms/Terms";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <ServicesCards></ServicesCards>
      <Terms></Terms>
      <Appointment></Appointment>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default Home;
