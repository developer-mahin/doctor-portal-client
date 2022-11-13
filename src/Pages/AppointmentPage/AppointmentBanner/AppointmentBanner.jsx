import React from "react";
import background from "../../../assets/images/bg.png";
import chair from "../../../assets//images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AppointmentBanner = ({setSelectedDate, selectedDate}) => {
  const bannerBg = {
    backgroundImage: `url(${background})`,
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      <div style={bannerBg} className="lg:pt-52 pt-16">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 max-w-[1000px] mx-auto px-3">
          <div className="">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            ></DayPicker>
          </div>
          <div>
            <img className="w-full" src={chair} alt="" />
          </div>
        </div>
        <div className="lg:pt-44 pt-16 pb-6 text-center">
          <p className="lg:text-2xl text-base font-semibold text-secondary">
            Available Appointments on {format(selectedDate, "PP")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
