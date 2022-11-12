import React from "react";
import chair from "../../../assets//images/chair.png";
import background from "../../../assets/images/bg.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Banner = () => {

  const bannerBg = {
    backgroundImage: `url(${background})`,
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={bannerBg} className="hero lg:py-52 py-9 banner-img ">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-[1400px] mx-auto">
        <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="lg:text-5xl text-4xl font-bold">
            Your New Smile Starts Here
          </h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
