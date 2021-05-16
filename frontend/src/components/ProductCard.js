import React from "react";
import Rating from "./Rating";

// name={product.name}
//                 image={product.image}
//                 description={product.description}
//                 rating={product.rating}
//                 price={product.price}
//                 id={product._id}

export default function ProductCard(props) {
  const { product } = props;
  return (
    <div className="card">
      <a href={`product/${product._id}`}>
        {/* <!-- Image size should be 680px * 830px -->
              <!-- <img src="./images/1.jpg" alt="Product1"> --> */}
        <img className="medium" src={product.image} alt={product.description} />
      </a>
      <div className="card-body">
        <a href={`product/${product._id}`}>
          <h2>{product.name}</h2>
        </a>
        <Rating numReviews={product.numReviews} rating={product.rating} />
        <div className="price">₹{product.price}</div>
      </div>
    </div>
  );
}
