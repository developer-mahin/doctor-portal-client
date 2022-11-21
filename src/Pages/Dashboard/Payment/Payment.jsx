import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIP_PK);

const Payment = () => {
  const bookings = useLoaderData();
  const { date, price, slot } = bookings;
  return (
    <div className="px-5 py-3">
      <h2 className="text-3xl text-center">Payment for Pediatric Dental</h2>
      <p className="mt-2">
        Please pay <strong>${price}</strong> for your Appointment on {slot} at{" "}
        {date}
      </p>
      <Elements stripe={stripePromise}>
        <CheckoutForm bookings={bookings} />
      </Elements>
    </div>
  );
};

export default Payment;
