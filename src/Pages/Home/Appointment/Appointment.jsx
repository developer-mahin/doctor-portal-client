import React from "react";
import doctor from "../../../assets/images/doctor.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import appointmentBgImage from "../../../assets/images/appointment.png";

const Appointment = () => {
  const appointmentBg = {
    backgroundImage: `url(${appointmentBgImage})`,
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={appointmentBg} className="hero py-16 lg:py-0">
      <div className="max-w-[1400px] mx-auto">
      <div className="hero-content flex-col lg:flex-row py-0">
        <img src={doctor} className="w-1/2 hidden lg:block -mt-36" alt="" />
        <div>
          <div className="">
            <div className="">
              <p className="inline-block px-3 py-px mb-4  font-semibold tracking-wider text-accent uppercase rounded-full bg-gradient-to-r from-secondary to-primary">
                Appointment
              </p>
            </div>
          </div>
          <h1 className="text-4xl font-semibold text-white">Make an appointment Today</h1>
          <p className="py-6 text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Appointment;
