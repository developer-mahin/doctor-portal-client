import React from "react";
import chair from "../../../assets//images/chair.png";
import background from "../../../assets/images/bg.png";

const Banner = () => {

  const bannerBg = {
    backgroundImage: `url(${background})`,
    width: "100%",
    height: "100vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "noRepeat",
    margin:"20px 0px"
  };

  return (
    <div style={bannerBg} className="hero lg:py-52 py-11 banner-img">
      <div className="hero-content flex-col lg:flex-row-reverse">
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
          <button className="btn  bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary   text-white border-none px-6">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
