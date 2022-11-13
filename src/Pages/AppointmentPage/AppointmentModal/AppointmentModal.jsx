import { format } from "date-fns";
import React from "react";

const AppointmentModal = ({ treatment, selectedDate }) => {
  const { name, slots } = treatment;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const date = form.date.value;
    const slot = form.slot.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;

    const bookingData = {
      date,
      slot,
      name,
      phone,
      email,
    };

    console.log(bookingData)
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
                <option key={index} value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="input input-bordered w-full"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone number"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
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

