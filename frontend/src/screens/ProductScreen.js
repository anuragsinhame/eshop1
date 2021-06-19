import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import publicCss from "../public.module.css";

import Rating from "../components/Rating";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { detailsProduct } from "../actions/productActions";
// import data from "../data";

const STATIC_HOST = process.env.REACT_APP_STATIC_HOST_URL;

export default function ProductScreen(props) {
  // const product = data.products.find(
  //   (prod) => +prod._id === +props.match.params.id
  // );
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`)
  }

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  // if (!product) {
  //   return <div>Product Not Found</div>;
  // }

  console.log("Error:", error);

  return (
    <div className="row center">
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link to="/">Back to Result</Link>
          <div className="row top">
            <div className="col-2">
              <img className="large" src={STATIC_HOST+product.image} alt={product.name} />
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  />
                </li>
                <li>Price: ₹{product.price}</li>
                <li>Description: {product.description}</li>
              </ul>
            </div>
            <div className="col-1">
              <div className={`${publicCss.card} ${publicCss.cardBody}`}>
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className={publicCss.price}>₹{product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Out of Stock</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {product.countInStock > 0 && (
                    // Empty Container
                    <>
                      <li>
                        <div className="row">
                          <div>Qty</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button onClick={addToCartHandler} className="primary block">Add to Cart</button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
