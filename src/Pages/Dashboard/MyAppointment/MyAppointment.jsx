import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext/AuthProvider";

const MyAppointment = () => {
  const { user, logOut } = useContext(AuthContext);

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
      if (res.status === 401 || res.status === 403) {
        return logOut()
          .then(() => {})
          .then((err) => {
            console.error(err.message);
          });
      }
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
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{booking.userName}</td>
                <td>{booking.treatment}</td>
                <td>{booking.date}</td>
                <td>{booking.slot}</td>
                <td>
                  {booking.price && !booking.paid && (
                    <Link to={`/dashboard/payment/${booking._id}`}>
                      <button className="btn btn-primary btn-sm">Pay</button>
                    </Link>
                  )}
                  {booking.price && booking.paid && (
                    <small className="text-green-500 text-base">Paid</small>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
