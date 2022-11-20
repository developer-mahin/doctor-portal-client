import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext/AuthProvider";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem(
            "doctors-portal-token"
          )}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="lg:px-12 lg:py-11 py-4">
      <h2 className="text-3xl font-semibold mb-5">My Appointment</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{booking.userName}</td>
                <td>{booking.treatment}</td>
                <td>{booking.date}</td>
                <td>{booking.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
