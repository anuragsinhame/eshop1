import React from "react";

export default function ProductCard(props) {
  return (
    <div className="card">
      <a href={`product/${props.id}`}>
        {/* <!-- Image size should be 680px * 830px -->
              <!-- <img src="./images/1.jpg" alt="Product1"> --> */}
        <img className="medium" src={props.image} alt={props.description} />
      </a>
      <div className="card-body">
        <a href={`product/${props.id}`}>
          <h2>{props.name}</h2>
        </a>
        <div className="rating">
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
          {props.rating}
        </div>
        <div className="price">₹{props.price}</div>
      </div>
    </div>
  );
}
