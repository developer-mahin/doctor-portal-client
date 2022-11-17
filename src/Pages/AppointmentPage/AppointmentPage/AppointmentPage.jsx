import React, { useState } from "react";
import Appointment2 from "../Appointment2/Appointment2";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";

const AppointmentPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDate2, setSelectedDate2] = useState(new Date());

  return (
    <div>
      <div>
        <AppointmentBanner
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        ></AppointmentBanner>

        <AvailableAppointment
          selectedDate={selectedDate}
        ></AvailableAppointment>
      </div>
      <div>
        <Appointment2
          setSelectedDate2={setSelectedDate2}
          selectedDate2={selectedDate2}
        ></Appointment2>
      </div>
    </div>
  );
};

export default AppointmentPage;
