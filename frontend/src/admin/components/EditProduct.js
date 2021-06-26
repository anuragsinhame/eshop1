import React, { useEffect, useState } from "react";
import axios from "axios";

import adminCss from "../admin.module.css";

// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// import ProductCard from "../components/ProductCard";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";
// import { listProducts } from "../actions/productActions";
// import data from "../data";  //local import commented

// import { StoreConstants } from "../storeData";
const API_URL = process.env.REACT_APP_API_URL;

export default function Products() {
  const emptyProduct = {
    _id: null,
    categoryName: "",
    subcategories: [],
  };
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // const [editing, setEditing] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("1");
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      let dbCategoriesRes = await axios.get(`${API_URL}/api/category`);
      setCategories(dbCategoriesRes.data.CategoryData);
      let dbSubCategories = dbCategoriesRes.data.CategoryData.find(
        (category) => category._id === +selectedCategory
      );
      // console.log("dbsffgw", dbSubCategories);
      setSubCategories(dbSubCategories.subCategories);
      if (selectedSubCategory) {
        console.log("CategorySe", selectedSubCategory);
        try {
          let dbProductsRes = await axios(
            `${API_URL}/api/products/category/${selectedCategory}/subCategory/${selectedSubCategory}`
          );
          const { data } = dbProductsRes;
          setProducts(data.products);
        } catch (error) {
          console.log("Error");
        }
      }
      setLoading(false);
    }
    fetchData();
    // console.log("Categories", categories);
    // console.log("CategoriesField", categoryFieldState);
  }, [selectedCategory, selectedSubCategory]);

  const editProduct = ()=>{
    // this.showModal = true;
    // this.showModal = false;
  }

  return (
    <div className={adminCss.mainComponent}>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <h3>Manage Products</h3>
          <div className={adminCss.selectDiv}>
            <label htmlFor="category">Select Category</label>
            <select
              name="category"
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.categoryName}
                </option>
              ))}
            </select>
          </div>

          <div className={adminCss.selectDiv}>
            <label htmlFor="subCategory">Select Sub Category</label>
            <select
              name="subCategory"
              id="subCategory"
              value={selectedSubCategory}
              onChange={(e) => setSelectedSubCategory(e.target.value)}
            >
              {subCategories.map((subCat) => (
                <option key={subCat._id} value={subCat._id}>
                  {subCat.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button>Add New Product</button>
          </div>
          <div className={adminCss.prods}>
            <div className="prods-header">
              {/* <div>Prod Id</div>
              <div>Category Id</div>
              <div>Sub Category Id</div> */}
              <div>Product Name</div>
              <div>Stock</div>
              <div>Product Image</div>
              <div>Edit</div>
              <div>Delete</div>
            </div>
            {products.map((product) => (
              <div className="prods-data">
                {/* <div className="prodIdText">
                  <input
                    className="w100"
                    type="text"
                    name="prodId1"
                    placeholder="Prod Id"
                    value={product._id}
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
                </div> */}
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
                <div className={adminCss.adminImgUpload}>
                  <label htmlFor="sliderImage"></label>
                  <input
                    type="file"
                    name="sliderImage"
                    id="sliderImage"
                    onChange={(e) =>e
                      // setImageData({ ...imageData, image: e.target.files[0] })
                    }
                  />
                </div>
                <div className="catEdit">
                  <button className="w100" type="button" onClick={()=>editProduct(product._id)}>
                    Edit
                  </button>
                </div>
                <div className="catDelete">
                  <button className="w100" type="button">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
