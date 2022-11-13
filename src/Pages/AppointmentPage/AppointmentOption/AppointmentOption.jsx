import React from "react";


const AppointmentOption = ({ option,setTreatment }) => {
  const { name, slots } = option;

  return (
    <div className="card w-96 bg-base-100 shadow-xl text-center">
      <div className="card-body">
        <h2 className=" text-secondary font-semibold text-2xl text-center">
          {name}
        </h2>
        <p className="">{slots.length > 0 ? slots[0] : "Try another day"}</p>
        <p className="">
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} available
        </p>
        <div className="card-actions justify-center">
          <label
          onClick={()=>setTreatment(option)}
            htmlFor="booking-modal"
            className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary  px-6 py-3 rounded-lg text-white font-semibold cursor-pointer"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
