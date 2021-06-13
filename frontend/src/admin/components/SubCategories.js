import React from "react";

import adminCss from "../admin.module.css";

// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// import ProductCard from "../components/ProductCard";
// import LoadingBox from "../components/LoadingBox";
// import MessageBox from "../components/MessageBox";
// import { listProducts } from "../actions/productActions";
// import data from "../data";  //local import commented

// import { StoreConstants } from "../storeData";

export default function SubCategories() {
  return (
    <div className={adminCss.mainComponent}>
      <div>
        <h3>Manage Sub Categories Categories</h3>
        <div className={adminCss.selectDiv}>
          <label htmlFor="category">Select Category</label>
          <select name="category" id="category">
            <option value="cat1">Category1</option>
            <option value="cat2">Category2</option>
            <option value="cat3">Category3</option>
            <option value="cat4">Category4</option>
            <option value="cat5">Category5</option>
            <option value="cat6">Category6</option>
          </select>
        </div>
        <div className={adminCss.subCategories}>
          <div className="subCategory-header">
            <div>Category Id</div>
            <div>Sub Category Id</div>
            <div>Sub Category Name</div>
            <div>Edit</div>
            <div>Delete</div>
          </div>
          <div className="subCategory-data">
            <div className="catIdText">
              <input
                className="w100"
                type="text"
                name="catId2"
                placeholder="Cat Id"
              />
            </div>
            <div className="subCatIdText">
              <input
                className="w100"
                type="text"
                name="subCatId2"
                placeholder="Sub Cat Id"
              />
            </div>
            <div className="subCatName">
              <input
                className="w100"
                type="text"
                name="catName2"
                placeholder="Sub Cat Name"
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
          <div className="subCategory-data">
            <div className="catIdText">
              <input
                className="w100"
                type="text"
                name="catId3"
                placeholder="Cat Id"
              />
            </div>
            <div className="subCatIdText">
              <input
                className="w100"
                type="text"
                name="subCatId3"
                placeholder="Sub Cat Id"
              />
            </div>
            <div className="subCatName">
              <input
                className="w100"
                type="text"
                name="catName3"
                placeholder="Sub Cat Name"
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
          <div className="subCategory-data">
            <div className="catIdText">
              <input
                className="w100"
                type="text"
                name="catId4"
                placeholder="Cat Id"
              />
            </div>
            <div className="subCatIdText">
              <input
                className="w100"
                type="text"
                name="subCatId4"
                placeholder="Sub Cat Id"
              />
            </div>
            <div className="subCatName">
              <input
                className="w100"
                type="text"
                name="catName4"
                placeholder="Sub Cat Name"
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
          <div className="subCategory-data">
            <div className="catIdText">
              <input
                className="w100"
                type="text"
                name="catId5"
                placeholder="Cat Id"
              />
            </div>
            <div className="subCatIdText">
              <input
                className="w100"
                type="text"
                name="subCatId5"
                placeholder="Sub Cat Id"
              />
            </div>
            <div className="subCatName">
              <input
                className="w100"
                type="text"
                name="catName5"
                placeholder="Sub Cat Name"
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
          <div className="subCategory-data">
            <div className="catIdText">
              <input
                className="w100"
                type="text"
                name="catId6"
                placeholder="Cat Id"
              />
            </div>
            <div className="subCatIdText">
              <input
                className="w100"
                type="text"
                name="subCatId6"
                placeholder="Sub Cat Id"
              />
            </div>
            <div className="subCatName">
              <input
                className="w100"
                type="text"
                name="catName6"
                placeholder="Sub Cat Name"
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
          <div className="subCategory-data">
            <div className="catIdText">
              <input
                className="w100"
                type="text"
                name="catId7"
                placeholder="Cat Id"
              />
            </div>
            <div className="subCatIdText">
              <input
                className="w100"
                type="text"
                name="subCatId7"
                placeholder="Sub Cat Id"
              />
            </div>
            <div className="subCatName">
              <input
                className="w100"
                type="text"
                name="catName7"
                placeholder="Sub Cat Name"
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
      </div>
    </div>
  );
}
