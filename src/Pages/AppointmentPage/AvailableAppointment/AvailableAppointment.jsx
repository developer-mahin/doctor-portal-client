import React, { useEffect, useState } from "react";
import AppointmentModal from "../AppointmentModal/AppointmentModal";
import AppointmentOption from "../AppointmentOption/AppointmentOption";

const AvailableAppointment = ({selectedDate}) => {
  const [availableAppointment, setAvailableAppointment] = useState([]);
    const [treatment, setTreatment] = useState(null) // is appointment option just different name


  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setAvailableAppointment(data));
  }, []);


  return (
    <div className="max-w-[1400px] mx-auto ">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 justify-items-center">
        {availableAppointment.map((option) => (
          <AppointmentOption
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {
        treatment && <AppointmentModal selectedDate={selectedDate} treatment={treatment} />
      }
    </div>
  );
};

export default AvailableAppointment;
