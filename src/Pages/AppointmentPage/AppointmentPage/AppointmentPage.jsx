import React, { useState } from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";

const AppointmentPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

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
    </div>
  );
};

export default AppointmentPage;
