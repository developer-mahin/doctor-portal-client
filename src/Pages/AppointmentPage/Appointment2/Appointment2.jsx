import React from "react";
import { DateRangePicker } from "react-date-range";
import chair from "../../../assets//images/chair.png";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Appointment2 = ({ setSelectedDate2, selectedDate2 }) => {
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };
  console.log();

  return (
    <div>
      <div className="lg:pt-52 pt-16">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 max-w-[1200px] mx-auto px-3">
          <div className="">
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={setSelectedDate2}
            ></DateRangePicker>

            <p className="lg:text-2xl text-base font-semibold text-secondary">
              Selected on{" "}
              {`${
                selectedDate2?.selection?.startDate
                  ? (selectedDate2?.selection?.startDate).toString().slice(0, 16)
                  : new Date().toString().slice(0, 16)
              } to ${
                selectedDate2?.selection?.endDate
                  ? (selectedDate2?.selection?.endDate).toString().slice(0, 16)
                  : ""
              }`}
            </p>
          </div>
          <div>
            <img className="w-full" src={chair} alt="" />
          </div>
        </div>
        <div className="lg:pt-44 pt-16 pb-6 text-center"></div>
      </div>
    </div>
  );
};

export default Appointment2;
