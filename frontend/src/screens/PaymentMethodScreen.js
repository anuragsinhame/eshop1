import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import publicCss from "../public.module.css";

import { savePaymentMethod } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

export default function PaymentMethodScreen(props) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress.address) {
    props.history.push("/shipping");
  }
  const [paymentMethod, setPaymentMethod] = useState("COD");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push("/placeorder");
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className={publicCss.form} onSubmit={submitHandler}>
        <div>
          <h1>Payment Method</h1>
        </div>
        <div>
          <div>
            <input
              type="radio"
              name="paymentMethod"
              id="cod"
              value="COD"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="cod">Cash on Delivery</label>
          </div>
          <div>
            <input
              type="radio"
              name="paymentMethod"
              id="others"
              value="others"
              required
              disabled
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="others">Others (Will be available soon)</label>
          </div>
          <div>
            <button type="submit" className="primary">
              Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
