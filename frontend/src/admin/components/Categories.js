import React, { useEffect, useState } from "react";
import axios from "axios";

// import { useDispatch, useSelector } from "react-redux";
// import { Link, Route, BrowserRouter } from "react-router-dom";

import adminCss from "../admin.module.css";

// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// import ProductCard from "../components/ProductCard";
import LoadingBox from "../../components/LoadingBox";
// import MessageBox from "../components/MessageBox";
// import { listProducts } from "../actions/productActions";
// import data from "../data";  //local import commented

// import { StoreConstants } from "../storeData";

const API_URL = process.env.REACT_APP_API_URL;

export default function Categories() {
  const emptyCategory = {
    _id: null,
    categoryName: "",
    subCategories: [],
  };
  const [loading, setLoading] = useState(false);
  // const [editing, setEditing] = useState(false);
  const [categories, setCategories] = useState([]);
  // const [categoryFieldState, setCategoryFieldState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      let dbCategoriesRes = await axios.get(`${API_URL}/api/category`);
      setCategories(dbCategoriesRes.data.CategoryData);
      // setCategoryFieldState(() => {
      //   let newCatField = categories.map((category) => {
      //     return { _id: category._id, mode: "" };
      //   });
      //   console.log("new", newCatField);
      //   return [...newCatField];
      // });
      setLoading(false);
    }
    fetchData();
    // console.log("Categories", categories);
    // console.log("CategoriesField", categoryFieldState);
  }, []);

  const createCategory = () => {
    console.log("Adding new category", categories);
    setCategories((categories) => [...categories, emptyCategory]);
    console.log("Categories", categories);
    // console.log("CategoriesField", categoryFieldState);
  };

  // const editCategory = (categoryId) => {
  //   console.log("Edit Category", categoryId);
  // };

  const updateCategory = async (categoryId) => {
    let categoryToUpdate = categories.filter(
      (category) => categoryId === category._id
    )[0];
    // category
    console.log("Updating", categoryId);
    let updateCategoryRes = await axios.put(
      `${API_URL}/api/category/updateCategory`,
      categoryToUpdate
    );
    console.log("updateRes", updateCategoryRes);
  };

  const deleteCategory = async (categoryId) => {
    console.log("Delete Category", categoryId);
    let deleteCategoryRes = await axios.delete(
      `${API_URL}/api/category/deleteCategory`,
      {
        data: {
          _id: categoryId,
        },
      }
    );
    console.log("deleteRes", deleteCategoryRes);
  };

  return (
    <div className={adminCss.mainComponent}>
      {loading ? (
        <LoadingBox />
      ) : (
        <div>
          <h3>Manage Categories</h3>
          <div className={adminCss.categories}>
            <div className={adminCss.categoryHeader}>
              <div>Category Id</div>
              <div>Category Name</div>
              <div>Edit</div>
              <div>Delete</div>
            </div>

            {categories.map((category) => (
              <div className={adminCss.categoryData} key={category._id}>
                <div className="catIdText">
                  <input
                    className="w100"
                    type="text"
                    placeholder="Cat Id"
                    value={category._id}
                    disabled={category._id !== null}
                    onChange={(e) => {
                      setCategories((categories) => {
                        return [
                          ...categories.map((oldCategory) => {
                            if (oldCategory._id === null) {
                              oldCategory._id = e.target.value;
                            }
                            return oldCategory;
                          }),
                        ];
                      });
                    }}
                  />
                </div>
                <div className="catName">
                  <input
                    className="w100"
                    type="text"
                    placeholder="Cat Name"
                    value={category.categoryName}
                    onChange={(e) => {
                      setCategories((categories) => {
                        return [
                          ...categories.map((oldCategory) => {
                            if (category._id === oldCategory._id) {
                              oldCategory.categoryName = e.target.value;
                            }
                            return oldCategory;
                          }),
                        ];
                      });
                    }}
                    // disabled
                  />
                </div>
                <div className="catEdit">
                  {/* <button
                  className="w100"
                  type="button"
                  onClick={(e) => editCategory(category._id)}
                >
                  Edit
                </button> */}
                  <button
                    className="w100"
                    type="button"
                    onClick={(e) => updateCategory(category._id)}
                  >
                    Update
                  </button>
                </div>
                <div className="catDelete">
                  <button
                    className="w100"
                    type="button"
                    onClick={(e) => deleteCategory(category._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div>
            <button onClick={createCategory}>Add New Category</button>
          </div>
        </div>
      )}
    </div>
  );
}
