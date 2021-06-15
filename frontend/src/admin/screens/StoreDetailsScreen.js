// TO DO
  // Update values on new insert or update
import React, { useEffect, useState } from "react";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, BrowserRouter } from "react-router-dom";
import axios from "../../../node_modules/axios/index";

import adminCss from "../admin.module.css";
import LoadingBox from "../../components/LoadingBox";
import PinCode from "../components/PinCode";

// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// import ProductCard from "../components/ProductCard";
// import MessageBox from "../components/MessageBox";
// import { listProducts } from "../actions/productActions";
// import data from "../data";  //local import commented

// import { StoreConstants } from "../storeData";

const API_URL = process.env.REACT_APP_API_URL;

export default function StoreDetailsScreen() {
  const [storeName, setStoreName] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [pinCodes, setPinCodes] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      let dbStoreNameRes = await axios.get(`${API_URL}/api/store/storeName`);
      setStoreName(dbStoreNameRes.data.StoreName);
      let dbPinCodes = await axios.get(`${API_URL}/api/store/pinCodes`);
      // let newPinCodes = dbPinCodes.data.PinCodes.map(
      //   (pinCodeRes) => pinCodeRes.value
      // );
      setPinCodes(dbPinCodes.data.PinCodes);
      // console.log("DB PIN", dbPinCodes.data.PinCodes);
      setLoading(false);
    }
    fetchData();
  }, []);

  const updateStoreName = async () => {
    // call update API
    setLoading(true);
    await axios.post(`${API_URL}/api/store/storeName`, {
      storeName,
    });
    setLoading(false);
    alert("Store Name Updated");
  };

  const addPinCode = async () => {
    // call insert Pin API
    setLoading(true);
    await axios.post(`${API_URL}/api/store/pinCode`, {
      pinCode,
    });
    setLoading(false);
    alert("Store Name Updated");
  };

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : (
        <div className={adminCss.mainComponent}>
          <div className="storeName">
            <h3>Store Data</h3>
            <div className={adminCss.formInput}>
              <label htmlFor="storeName">Store Name</label>
              <input
                type="text"
                name="storeName"
                id="storeName"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
              />
              <button type="button" onClick={updateStoreName}>
                Update
              </button>
            </div>
          </div>
          {/* Handling Pin Codes */}
          <div className="pinCode">
            <h3>Manage Pin Codes for delivery</h3>
            <div className={adminCss.formInput}>
              <label htmlFor="pinCodes">Pin Codes</label>
              <input
                type="text"
                name="pinCodes"
                id="pinCodes"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
              <button type="button" onClick={addPinCode}>
                Add PinCode
              </button>
            </div>
            <div>
              <h4>Currently Allowed Pin Codes</h4>
              <div>
                {pinCodes.map((pinObj) => (
                  <PinCode pinCode={pinObj.value}></PinCode>
                ))}
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
      )}
    </div>
  );
}
