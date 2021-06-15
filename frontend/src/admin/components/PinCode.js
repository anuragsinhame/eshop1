import React from "react";
// import axios from "axios";
import adminCss from "../admin.module.css";

// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// import ProductCard from "../components/ProductCard";
// import LoadingBox from "../components/LoadingBox";
// import MessageBox from "../components/MessageBox";
// import { listProducts } from "../actions/productActions";
// import data from "../data";  //local import commented

// import { StoreConstants } from "../storeData";

export default function PinCode(props) {
  return (
    <span>
      {props.pinCode} <button type="button">x</button>
    </span>
  );
}
