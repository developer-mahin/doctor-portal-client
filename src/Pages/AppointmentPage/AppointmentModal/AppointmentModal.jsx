import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthContext/AuthProvider";

const AppointmentModal = ({
  treatment,
  selectedDate,
  setTreatment,
  refetch,
}) => {
  const { name, slots, price } = treatment;
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const date = form.date.value;
    const slot = form.slot.value;
    const userName = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;

    const bookingData = {
      date,
      treatment: name,
      slot,
      price,
      userName,
      phone,
      email,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Booking Confirmed");
          setTreatment(null);
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-6 mt-10"
          >
            <input
              type="text"
              name="date"
              value={format(selectedDate, "PP")}
              disabled
              className="input input-bordered w-full font-semibold"
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email"
              className="input input-bordered w-full"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone number"
              className="input input-bordered w-full"
            />

            <button type="submit" className="w-full btn btn-accent">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AppointmentModal;
