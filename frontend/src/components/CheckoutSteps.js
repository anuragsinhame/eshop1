import React from "react";

import publicCss from "../public.module.css";

export default function CheckoutSteps(props) {
  return (
    <div className={`row ${publicCss.checkoutSteps}`}>
      <div className={props.step1 ? publicCss.active : ""}>Sign-In</div>
      <div className={props.step2 ? publicCss.active : ""}>Shipping</div>
      <div className={props.step3 ? publicCss.active : ""}>Payment</div>
      <div className={props.step4 ? publicCss.active : ""}>Place Order</div>
    </div>
  );
}
