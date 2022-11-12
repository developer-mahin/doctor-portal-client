import React from "react";
import contactImage from "../../../assets/images/appointment.png";

const Contact = () => {
  const contactBg = {
    backgroundImage: `url(${contactImage})`,
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding:"71px 0px"
  };

  return (
    <div style={contactBg} className="">
      <div className="lg:w-1/4 w-full mx-auto px-3 lg:px-0">
        <div className=" text-center">
          <div className="">
            <p className="inline-block px-3 py-px mb-4  font-semibold tracking-wider text-accent uppercase rounded-full bg-gradient-to-r from-secondary to-primary">
            Contact Us
            </p>
          </div>
          <h2 className="mb-6 font-sans text-3xl font-regular tracking-tight text-white sm:text-4xl sm:leading-none">
          Stay connected with us
          </h2>
        </div>
        <form>
          <input
            className="w-full  py-3 px-6 rounded-xl my-4 border-2"
            placeholder="Email Address"
            type="email"
            name="email"
            id=""
          />
          <input
            className="w-full  py-3 px-6 rounded-xl my-4 border-2"
            placeholder="Subject"
            type="text"
            name="text"
            id=""
          />
          <textarea
            className="w-full py-3 px-6 rounded-xl my-4 border-2"
            placeholder="Your message"
            name="message"
            id=""
            cols="30"
            rows="3"
          ></textarea>
          <div className="text-center">
            <button
              className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary  px-10 py-3 rounded-lg text-white font-semibold"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
