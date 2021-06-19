import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";

<<<<<<< HEAD
=======
import publicCss from "../public.module.css";

>>>>>>> a8a068809179321f989551c6dbdef68b17559fa9
const STATIC_HOST = process.env.REACT_APP_STATIC_HOST_URL;

export default function ProductCard(props) {
  const { product } = props;
  return (
<<<<<<< HEAD
    <div className="card">
=======
    <div className={publicCss.card}>
>>>>>>> a8a068809179321f989551c6dbdef68b17559fa9
      <Link to={`/product/${product._id}`}>
        {/* <!-- Image size should be 680px * 830px -->
              <!-- <img src="./images/1.jpg" alt="Product1"> --> */}
        <img
          className="medium"
          src={STATIC_HOST + product.image}
          alt={product.description}
        />
      </Link>
<<<<<<< HEAD
      <div className="card-body">
=======
      <div className={publicCss.cardBody}>
>>>>>>> a8a068809179321f989551c6dbdef68b17559fa9
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <Rating numReviews={product.numReviews} rating={product.rating} />
        <div className={publicCss.price}>₹{product.price}</div>
      </div>
    </div>
  );
}
