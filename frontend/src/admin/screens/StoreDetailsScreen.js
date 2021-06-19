import React from "react";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, BrowserRouter } from "react-router-dom";

import adminCss from "../admin.module.css";

// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// import ProductCard from "../components/ProductCard";
// import LoadingBox from "../components/LoadingBox";
// import MessageBox from "../components/MessageBox";
// import { listProducts } from "../actions/productActions";
// import data from "../data";  //local import commented

// import { StoreConstants } from "../storeData";

export default function StoreDetailsScreen() {
  return (
    <div>
      <div className={adminCss.mainComponent}>
        <div className="storeName">
          <h3>Store Data</h3>
          <div className={adminCss.formInput}>
            <label htmlFor="storeName">Store Name</label>
            <input type="text" name="storeName" id="storeName" />
            <button type="button">Update</button>
          </div>
        </div>
        <div className="pinCode">
          <h3>Manage Pin Codes for delivery</h3>
          <div className={adminCss.formInput}>
            <label htmlFor="pinCodes">Pin Codes</label>
            <input type="text" name="pinCodes" id="pinCodes" />
            <button type="button">Add PinCode</button>
          </div>
          <div>
            <h4>Currently Allowed Pin Codes</h4>
            <div>
              <span>
                206001 <button type="button">x</button>
              </span>
              <span>
                2006002 <button type="button">x</button>
              </span>
              <span>
                2006003 <button type="button">x</button>
              </span>
              <span>
                206130 <button type="button">x</button>
              </span>
              <span>
                206242 <button type="button">x</button>
              </span>
            </div>
          </div>
        </div>
        <div className="slider">
          <h3>Slider Images</h3>
          <div className={adminCss.formInput}>
            <label htmlFor="pinCodes">Add New Slider</label>
            <input type="file" name="pinCodes" id="pinCodes" />
            <button type="button">Upload</button>
          </div>
          <div>
            <h4>Current Slider Images</h4>
            <div>
              <span>
                206001 <button type="button">x</button>
              </span>
              <span>
                2006002 <button type="button">x</button>
              </span>
              <span>
                2006003 <button type="button">x</button>
              </span>
              <span>
                206130 <button type="button">x</button>
              </span>
              <span>
                206242 <button type="button">x</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
