import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import publicCss from "../public.module.css";

import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";
// import { StoreConstants } from "../storeData.js";
import MessageBox from "../components/MessageBox";

export default function ShippingAddressScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!userInfo) {
    props.history.push("/signin");
  }

  const StoreConstants = useSelector((state) => state.storeData);

  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setcountry] = useState(shippingAddress.country);
  const [error, setError] = useState({ error: false, message: "" });

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch save ShippingAddress
    console.log("SCS", StoreConstants.PinCodes);
    const isPinAvailable = StoreConstants.PinCodes.find(
      (pincode) => pincode === postalCode
    );
    if (isPinAvailable) {
      dispatch(
        saveShippingAddress({ fullName, address, city, postalCode, country })
      );
      props.history.push("/payment");
    } else {
      setError({
        error: true,
        message:
          "Delivery not available to the entered PinCode. Please select another PinCode.",
      });
    }
  };

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      {error.error && <MessageBox variant="danger">{error.message}</MessageBox>}
      <form className={publicCss.form} onSubmit={submitHandler}>
        <div>
          <h1>Shipping Address</h1>
        </div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            placeholder="Enter Postal Code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            placeholder="Enter Country"
            value={country}
            onChange={(e) => setcountry(e.target.value)}
            required
          />
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
