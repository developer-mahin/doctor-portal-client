import React from "react";
import { Link } from "react-router-dom";
import footerImage from "../../../assets/images/footer.png";

const Footer = () => {
  const footerBg = {
    backgroundImage: `url(${footerImage})`,
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <footer style={footerBg} className="py-16 text-black">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto px-3">
        <div className="flex flex-col space-y-4">
          <h2 className="font-semibold text-gray-500">SERVICES</h2>
          <div className="flex flex-col space-y-2 text-sm text-[#3A4256]">
            <Link to="/" rel="noopener noreferrer">
              Emergency Checkup
            </Link>
            <Link to="/" rel="noopener noreferrer">
              Monthly Checkup
            </Link>
            <Link to="/" rel="noopener noreferrer">
              Weekly Checkup
            </Link>
            <Link to="/" rel="noopener noreferrer">
              Deep Checkup
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-semibold text-gray-500">ORAL HEALTH</h2>
          <div className="flex flex-col space-y-2 text-sm text-[#3A4256]">
            <Link to="/" rel="noopener noreferrer ">
              Fluoride Treatment
            </Link>
            <Link to="/" rel="noopener noreferrer">
              Cavity Filling
            </Link>
            <Link to="/" rel="noopener noreferrer">
              Teeth Whitening
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-semibold text-gray-500">OUR ADDRESS</h2>
          <div className="flex flex-col space-y-2 text-sm text-[#3A4256]">
            <Link to="/" rel="noopener noreferrer">
              New York - 101010 Hudson
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-semibold text-gray-500">OUR ADDRESS</h2>
          <div className="flex flex-col space-y-2 text-sm text-[#3A4256]">
            <Link to="/" rel="noopener noreferrer">
              New York - 101010 Hudson
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-6 lg:pt-28 pt-9 text-sm">
        <span className="">© Copyright 2022 All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
