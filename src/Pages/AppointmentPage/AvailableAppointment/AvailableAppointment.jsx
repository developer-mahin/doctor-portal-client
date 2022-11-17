import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import BigSpinner from "../../../components/Spinner/BigSpinner/BigSpinner";
import AppointmentModal from "../AppointmentModal/AppointmentModal";
import AppointmentOption from "../AppointmentOption/AppointmentOption";

const AvailableAppointment = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null); // is appointment option just different name
  const date = format(selectedDate, "PP");

  const { data: availableAppointment = [], refetch, isLoading } = useQuery({
    queryKey: ["availableAppointment", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointmentOption?date=${date}`
      );
      const result = await res.json();
      return result;
    },
  });

  if(isLoading){
    return <BigSpinner></BigSpinner>
  }

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
      {treatment && (
        <AppointmentModal
          refetch={refetch}
          setTreatment={setTreatment}
          selectedDate={selectedDate}
          treatment={treatment}
        />
      )}
    </div>
  );
};

export default AvailableAppointment;
