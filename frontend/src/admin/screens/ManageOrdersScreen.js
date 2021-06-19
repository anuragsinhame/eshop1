import React from "react";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, Route, BrowserRouter } from "react-router-dom";

import adminCss from "../admin.module.css";

// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// import ProductCard from "../components/ProductCard";
// import LoadingBox from "../components/LoadingBox";
// import MessageBox from "../components/MessageBox";
// import { listProducts } from "../actions/productActions";
// import data from "../data";  //local import commented

// import { StoreConstants } from "../storeData";

export default function ManageOrdersScreen() {
  return (
    <div class={adminCss.mainComponentHeader}>
      <a class={adminCss.cardSimple_a} href="./ManageProdCategories.html">
        <div class={adminCss.cardSimple}>Manage Categories</div>
      </a>
      <a class={adminCss.cardSimple_a} href="./ManageProdSubCategories.html">
        <div class={adminCss.cardSimple}>Manage Sub Categories</div>
      </a>
      <a class={adminCss.cardSimple_a} href="./ManageProducts.html">
        <div class={adminCss.cardSimple}>Manage Products</div>
      </a>
    </div>
  );
}
