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

export default function Products() {
  return (
    <div className={adminCss.mainComponent}>
      <div>
        <h3>Manage Products</h3>
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
        <div className={adminCss.selectDiv}>
          <label htmlFor="subCategory">Select Sub Category</label>
          <select name="subCategory" id="subCategory">
            <option value="subCat1">Sub Category1</option>
            <option value="subCat2">Sub Category2</option>
            <option value="subCat3">Sub Category3</option>
            <option value="subCat4">Sub Category4</option>
            <option value="subCat5">Sub Category5</option>
            <option value="subCat6">Sub Category6</option>
          </select>
        </div>
        <div>
          <button>Add New Product</button>
        </div>
        <div className={adminCss.prods}>
          <div className="prods-header">
            <div>Prod Id</div>
            <div>Category Id</div>
            <div>Sub Category Id</div>
            <div>Product Name</div>
            <div>Stock</div>
            <div>Update Stock</div>
            <div>Edit</div>
            <div>Delete</div>
          </div>
          <div className="prods-data">
            <div className="prodIdText">
              <input
                className="w100"
                type="text"
                name="prodId1"
                placeholder="Prod Id"
                disabled
              />
            </div>
            <div className="catIdText">
              <input
                className="w100"
                type="text"
                name="catId1"
                placeholder="Cat Id"
                disabled
              />
            </div>
            <div className="subCatIdText">
              <input
                className="w100"
                type="text"
                name="subCatId1"
                placeholder="Sub Cat Id"
                disabled
              />
            </div>
            <div className="prodName">
              <input
                className="w100"
                type="text"
                name="prodName1"
                placeholder="Product Name"
                disabled
              />
            </div>
            <div className="stockText">
              <input
                className="w100"
                type="text"
                name="stock1"
                placeholder="Stock"
                disabled
              />
            </div>
            <div className="inStock">
              <button className="w100" type="button">
                Update Stock
              </button>
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
          <div className="prods-data">
            <div className="prodIdText">
              <input
                className="w100"
                type="text"
                name="prodId2"
                placeholder="Prod Id"
                disabled
              />
            </div>
            <div className="catIdText">
              <input
                className="w100"
                type="text"
                name="catId2"
                placeholder="Cat Id"
                disabled
              />
            </div>
            <div className="subCatIdText">
              <input
                className="w100"
                type="text"
                name="subCatId2"
                placeholder="Sub Cat Id"
                disabled
              />
            </div>
            <div className="prodName">
              <input
                className="w100"
                type="text"
                name="prodName2"
                placeholder="Product Name"
                disabled
              />
            </div>
            <div className="stockText">
              <input
                className="w100"
                type="text"
                name="stock2"
                placeholder="Stock"
                disabled
              />
            </div>
            <div className="inStock">
              <button className="w100" type="button">
                Update Stock
              </button>
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
          <div className="prods-data">
            <div className="prodIdText">
              <input
                className="w100"
                type="text"
                name="prodId3"
                placeholder="Prod Id"
                disabled
              />
            </div>
            <div className="catIdText">
              <input
                className="w100"
                type="text"
                name="catId3"
                placeholder="Cat Id"
                disabled
              />
            </div>
            <div className="subCatIdText">
              <input
                className="w100"
                type="text"
                name="subCatId3"
                placeholder="Sub Cat Id"
                disabled
              />
            </div>
            <div className="prodName">
              <input
                className="w100"
                type="text"
                name="prodName3"
                placeholder="Product Name"
                disabled
              />
            </div>
            <div className="stockText">
              <input
                className="w100"
                type="text"
                name="stock3"
                placeholder="Stock"
                disabled
              />
            </div>
            <div className="inStock">
              <button className="w100" type="button">
                Update Stock
              </button>
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
          <div className="prods-data">
            <div className="prodIdText">
              <input
                className="w100"
                type="text"
                name="prodId4"
                placeholder="Prod Id"
                disabled
              />
            </div>
            <div className="catIdText">
              <input
                className="w100"
                type="text"
                name="catId4"
                placeholder="Cat Id"
                disabled
              />
            </div>
            <div className="subCatIdText">
              <input
                className="w100"
                type="text"
                name="subCatId4"
                placeholder="Sub Cat Id"
                disabled
              />
            </div>
            <div className="prodName">
              <input
                className="w100"
                type="text"
                name="prodName4"
                placeholder="Product Name"
                disabled
              />
            </div>
            <div className="stockText">
              <input
                className="w100"
                type="text"
                name="stock4"
                placeholder="Stock"
                disabled
              />
            </div>
            <div className="inStock">
              <button className="w100" type="button">
                Update Stock
              </button>
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
          <div className="prods-data">
            <div className="prodIdText">
              <input
                className="w100"
                type="text"
                name="prodId5"
                placeholder="Prod Id"
                disabled
              />
            </div>
            <div className="catIdText">
              <input
                className="w100"
                type="text"
                name="catId5"
                placeholder="Cat Id"
                disabled
              />
            </div>
            <div className="subCatIdText">
              <input
                className="w100"
                type="text"
                name="subCatId5"
                placeholder="Sub Cat Id"
                disabled
              />
            </div>
            <div className="prodName">
              <input
                className="w100"
                type="text"
                name="prodName5"
                placeholder="Product Name"
                disabled
              />
            </div>
            <div className="stockText">
              <input
                className="w100"
                type="text"
                name="stock5"
                placeholder="Stock"
                disabled
              />
            </div>
            <div className="inStock">
              <button className="w100" type="button">
                Update Stock
              </button>
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
          <div className="prods-data">
            <div className="prodIdText">
              <input
                className="w100"
                type="text"
                name="prodId6"
                placeholder="Prod Id"
                disabled
              />
            </div>
            <div className="catIdText">
              <input
                className="w100"
                type="text"
                name="catId6"
                placeholder="Cat Id"
                disabled
              />
            </div>
            <div className="subCatIdText">
              <input
                className="w100"
                type="text"
                name="subCatId6"
                placeholder="Sub Cat Id"
                disabled
              />
            </div>
            <div className="prodName">
              <input
                className="w100"
                type="text"
                name="prodName6"
                placeholder="Product Name"
                disabled
              />
            </div>
            <div className="stockText">
              <input
                className="w100"
                type="text"
                name="stock6"
                placeholder="Stock"
                disabled
              />
            </div>
            <div className="inStock">
              <button className="w100" type="button">
                Update Stock
              </button>
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
