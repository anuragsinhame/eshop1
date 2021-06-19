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

export default function Categories() {
  return (
    <div className={adminCss.mainComponent}>
      <div>
        <h3>Manage Categories</h3>
        <div className={adminCss.categories}>
          <div className={adminCss.categoryHeader}>
            <div>Category Id</div>
            <div>Category Name</div>
            <div>Edit</div>
            <div>Delete</div>
          </div>
          <div className={adminCss.categoryData}>
            <div className="catIdText">
              <input
                className="w100"
                type="text"
                name="catId1"
                placeholder="Cat Id"
              />
            </div>
            <div className="catName">
              <input
                className="w100"
                type="text"
                name="catName1"
                placeholder="Cat Name"
              />
            </div>
            <div className="catEdit">
              <button className="w100" type="button">
                Edit
              </button>
            </div>
            <div className="catDelete">
              <button className="w100" type="button">
                Delete
              </button>
            </div>
          </div>
          <div className="category-data">
            <div className="catIdText">
              <input
                className="w100"
                type="text"
                name="catId1"
                placeholder="Cat Id"
              />
            </div>
            <div className="catName">
              <input
                className="w100"
                type="text"
                name="catName1"
                placeholder="Cat Name"
              />
            </div>
            <div className="catEdit">
              <button className="w100" type="button">
                Edit
              </button>
            </div>
            <div className="catDelete">
              <button className="w100" type="button">
                Delete
              </button>
            </div>
          </div>
          <div className="category-data">
            <div className="catIdText">
              <input
                className="w100"
                type="text"
                name="catId1"
                placeholder="Cat Id"
              />
            </div>
            <div className="catName">
              <input
                className="w100"
                type="text"
                name="catName1"
                placeholder="Cat Name"
              />
            </div>
            <div className="catEdit">
              <button className="w100" type="button">
                Edit
              </button>
            </div>
            <div className="catDelete">
              <button className="w100" type="button">
                Delete
              </button>
            </div>
          </div>
          <div className="category-data">
            <div className="catIdText">
              <input
                className="w100"
                type="text"
                name="catId1"
                placeholder="Cat Id"
              />
            </div>
            <div className="catName">
              <input
                className="w100"
                type="text"
                name="catName1"
                placeholder="Cat Name"
              />
            </div>
            <div className="catEdit">
              <button className="w100" type="button">
                Edit
              </button>
            </div>
            <div className="catDelete">
              <button className="w100" type="button">
                Delete
              </button>
            </div>
          </div>
          <div className="category-data">
            <div className="catIdText">
              <input
                className="w100"
                type="text"
                name="catId1"
                placeholder="Cat Id"
              />
            </div>
            <div className="catName">
              <input
                className="w100"
                type="text"
                name="catName1"
                placeholder="Cat Name"
              />
            </div>
            <div className="catEdit">
              <button className="w100" type="button">
                Edit
              </button>
            </div>
            <div className="catDelete">
              <button className="w100" type="button">
                Delete
              </button>
            </div>
          </div>
          <div className="category-data">
            <div className="catIdText">
              <input
                className="w100"
                type="text"
                name="catId1"
                placeholder="Cat Id"
              />
            </div>
            <div className="catName">
              <input
                className="w100"
                type="text"
                name="catName1"
                placeholder="Cat Name"
              />
            </div>
            <div className="catEdit">
              <button className="w100" type="button">
                Edit
              </button>
            </div>
            <div className="catDelete">
              <button className="w100" type="button">
                Delete
              </button>
            </div>
          </div>
          <div className="category-data">
            <div className="catIdText">
              <input
                className="w100"
                type="text"
                name="catId1"
                placeholder="Cat Id"
              />
            </div>
            <div className="catName">
              <input
                className="w100"
                type="text"
                name="catName1"
                placeholder="Cat Name"
              />
            </div>
            <div className="catEdit">
              <button className="w100" type="button">
                Edit
              </button>
            </div>
            <div className="catDelete">
              <button className="w100" type="button">
                Delete
              </button>
            </div>
          </div>
        </div>
        <div><button>Add New Category</button></div>
      </div>
    </div>
  );
}
