// TO DO
// Update values on new insert or update
import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, Route, BrowserRouter } from "react-router-dom";
import axios from "../../../node_modules/axios/index";
// import crypto from "crypto";

import adminCss from "../admin.module.css";
import LoadingBox from "../../components/LoadingBox";
import { uploadUnsignedImage } from "../../utilities/ImageUpload";

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
  const [imageData, setImageData] = useState({
    image: null,
    desc: "",
    alt: "",
  });
  const [sliderImages, setSliderImages] = useState([]);

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
      console.log("DB PIN", dbPinCodes.data.PinCodes);
      // getting slider images
      let dbSliderImages = await axios.get(`${API_URL}/api/store/sliderImages`);
      setSliderImages(dbSliderImages.data.SliderImages);
      console.log("DB Slider Images", dbSliderImages.data.SliderImages);
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

  const deletePin = async (pin) => {
    setLoading(true);
    console.log("Delete" + pin);
    await axios.delete(`${API_URL}/api/store/pinCode`, {
      data: {
        pinCode: pin,
      },
    });
    setLoading(false);
    alert("Pin Deleted");
  };

  const uploadImage = async () => {
    setLoading(true);
    try {
      const uploadImgData = await uploadUnsignedImage(
        imageData.image,
        "e6zcsf21"
      );

      console.log("uploadImgData", uploadImgData);
      let imgData = {
        url: uploadImgData.url,
        description: imageData.desc,
        alt: imageData.alt,
      };
      await axios.post(`${API_URL}/api/store/sliderImage`, { ...imgData });
      setLoading(false);
    } catch (error) {
      console.log("Error in uploading image", error);
    }
  };

  const deleteImage = async (imageId) => {
    setLoading(true);
    console.log("Delete" + imageId);
    await axios.delete(`${API_URL}/api/store/sliderImage`, {
      data: {
        id: imageId,
      },
    });
    setLoading(false);
    alert("Image Deleted");
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
                  <span key={pinObj._id}>
                    <span>{pinObj.value}</span>
                    <button
                      type="button"
                      onClick={(e) => deletePin(pinObj.value)}
                    >
                      x
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="slider">
            <h3>Slider Images</h3>
            <div>
              <h5>Add New Slider</h5>
            </div>
            <div className={adminCss.formInput}>
              <label htmlFor="sliderImage">Select Single Image</label>
              <input
                type="file"
                name="sliderImage"
                id="sliderImage"
                onChange={(e) =>
                  setImageData({ ...imageData, image: e.target.files[0] })
                }
              />
            </div>
            <div className={adminCss.formInput}>
              <label htmlFor="sliderDesc">Slider Description</label>
              <input
                type="text"
                name="sliderDesc"
                id="sliderDesc"
                placeholder="Slider Description"
                value={imageData.desc}
                onChange={(e) =>
                  setImageData({ ...imageData, desc: e.target.value })
                }
              />
            </div>
            <div className={adminCss.formInput}>
              <label htmlFor="imgDesc">Image Description</label>
              <input
                type="text"
                name="imgDesc"
                id="imgDesc"
                placeholder="Image Description"
                value={imageData.alt}
                onChange={(e) =>
                  setImageData({ ...imageData, alt: e.target.value })
                }
              />
            </div>
            <button type="button" onClick={uploadImage}>
              Add / Update
            </button>
            <div>
              <h4>Current Slider Images</h4>
              <div>
                {sliderImages.map((sliderImage) => (
                  <span key={sliderImage._id}>
                    <img
                      src={sliderImage.url}
                      alt={sliderImage.alt}
                      style={{ width: "75px", height: "50px" }}
                    />
                    <span>
                      <button
                        type="button"
                        onClick={(e) => deleteImage(sliderImage._id)}
                      >
                        x
                      </button>
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
