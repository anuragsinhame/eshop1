import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";

import publicCss from "../public.module.css";

const STATIC_HOST = process.env.REACT_APP_STATIC_HOST_URL;

export default function ProductCard(props) {
  const { product } = props;
  return (
    <div className={publicCss.card}>
      <Link to={`/product/${product._id}`}>
        {/* <!-- Image size should be 680px * 830px -->
              <!-- <img src="./images/1.jpg" alt="Product1"> --> */}
        <img
          className="medium"
          src={STATIC_HOST + product.image}
          alt={product.description}
        />
      </Link>
      <div className={publicCss.cardBody}>
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <Rating numReviews={product.numReviews} rating={product.rating} />
        <div className={publicCss.price}>₹{product.price}</div>
      </div>
    </div>
  );
}
