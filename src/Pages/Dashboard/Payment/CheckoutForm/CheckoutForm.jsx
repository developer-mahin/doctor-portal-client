import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import SmallSpinner from "../../../../components/Spinner/SmallSpinner/SmallSpinner";

const CheckoutForm = ({ bookings }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { price, userName, email, _id } = bookings;
  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState("");
  const [succeeded, setSucceeded] = useState("");
  const [process, setProcess] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("doctors-portal-token")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setCardError("");
    setSucceeded("");
    setProcess(true);
    const { paymentIntent, error: PaymentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: userName,
            email: email,
          },
        },
      });

    if (PaymentError) {
      setCardError(PaymentError.message);
      return;
    }
    setCardError("");
    if (paymentIntent.status === "succeeded") {
      const paymentData = {
        price,
        email,
        serviceId: _id,
        transactionId: paymentIntent.id,
      };

      fetch("http://localhost:5000/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem(
            "doctors-portal-token"
          )}`,
        },
        body: JSON.stringify(paymentData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            setSucceeded("Congrats! Your payment completed successfully");
            setTransactionId(paymentIntent.id);
            setProcess(false);
          }
        });
    }
  };

  return (
    <div className="w-96 my-5">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-sm px-6 mt-3"
          type="submit"
          disabled={!stripe || !clientSecret || process}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">{cardError}</p>
      <div>
        {process ? (
          <SmallSpinner></SmallSpinner>
        ) : (
          <>
            {succeeded && (
              <div>
                <p className="text-green-500">{succeeded}</p>
                <p>
                  Your transaction Id <strong>{transactionId}</strong>
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;
