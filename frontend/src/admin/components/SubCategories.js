import React, { useEffect, useState } from "react";
import axios from "axios";

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

export default function SubCategories() {
  const emptySubCategory = {
    _id: null,
    categoryName: "",
    subcategories: [],
  };
  const [loading, setLoading] = useState(false);
  // const [editing, setEditing] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("1");
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      let dbCategoriesRes = await axios.get(`${API_URL}/api/category`);
      setCategories(dbCategoriesRes.data.CategoryData);
      let dbSubCategoriesRes = await axios.get(
        `${API_URL}/api/category/${selectedCategory}`
      );
      // console.log("SUb", dbSubCategoriesRes.data.category.subCategories);
      setSubCategories(dbSubCategoriesRes.data.category.subCategories);

      setLoading(false);
    }
    fetchData();
    // console.log("Categories", categories);
    // console.log("CategoriesField", categoryFieldState);
  }, [selectedCategory]);

  const createSubCategory = () => {
    setLoading(true);
    console.log("Adding new category", categories);
    setSubCategories((subCategories) => [...subCategories, emptySubCategory]);
    setLoading(false);
  };

  const updateSubCategory = async () => {
    setLoading(true);
    let categoryToUpdate = categories.filter(
      (category) => category._id === +selectedCategory
    )[0];
    categoryToUpdate = { ...categoryToUpdate, subCategories: subCategories };
    // category
    console.log("Updating", categoryToUpdate);
    let updateCategoryRes = await axios.put(
      `${API_URL}/api/category/updateCategory`,
      categoryToUpdate
    );
    console.log("updateRes", updateCategoryRes);
    setLoading(false);
    alert("Data Updated");
  };

  // const deleteSubCategory = async (subCategoryId) => {
  //   console.log("sub", subCategories);
  //   let categoryToUpdate = categories.filter(
  //     (category) => category._id === +selectedCategory
  //   )[0];
  //   categoryToUpdate = { ...categoryToUpdate, subCategories: subCategories };
  //   // category
  //   console.log("deleteRes", categoryToUpdate);
  // };

  return (
    <div className={adminCss.mainComponent}>
      {loading ? (
        <LoadingBox />
      ) : (
        <div>
          <h3>Manage Sub Categories Categories</h3>
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
          <div className={adminCss.subCategories}>
            <div className="subCategory-header">
              <div>Category Id</div>
              <div>Sub Category Id</div>
              <div>Sub Category Name</div>
              <div>Delete</div>
            </div>
            {subCategories.map((subCat) => (
              <div className="subCategory-data" key={subCat._id}>
                <div className="catIdText">
                  <input
                    className="w100"
                    type="text"
                    name="catId2"
                    placeholder="Cat Id"
                    disabled
                    value={selectedCategory}
                  />
                </div>
                <div className="subCatIdText">
                  <input
                    className="w100"
                    type="text"
                    name="subCatId2"
                    placeholder="Sub Cat Id"
                    value={subCat._id}
                    disabled={subCat._id !== null}
                    onBlur={(e) => {
                      setSubCategories((subCategories) => {
                        return [
                          ...subCategories.map((oldSubCategory) => {
                            if (oldSubCategory._id === null) {
                              oldSubCategory._id = e.target.value;
                            }
                            return oldSubCategory;
                          }),
                        ];
                      });
                    }}
                  />
                </div>
                <div className="subCatName">
                  <input
                    className="w100"
                    type="text"
                    name="catName2"
                    placeholder="Sub Cat Name"
                    value={subCat.name}
                    onChange={(e) =>
                      setSubCategories((subCategories) => {
                        return [
                          ...subCategories.map((oldSubCategory) => {
                            if (subCat._id === oldSubCategory._id) {
                              oldSubCategory.name = e.target.value;
                            }
                            return oldSubCategory;
                          }),
                        ];
                      })
                    }
                  />
                </div>
                <div className="catDelete">
                  <button
                    className="w100"
                    type="button"
                    onClick={(e) =>
                      setSubCategories((oldSubCategories) => [
                        ...oldSubCategories.filter(
                          (subCategory) => subCategory._id !== subCat._id
                        ),
                      ])
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div>
            <button onClick={createSubCategory}>Add New Sub Category</button>
            <button
              className=""
              type="button"
              // onClick={() =>
              //   updateSubCategory(selectedCategory, subCat._id)
              // }
              onClick={updateSubCategory}
            >
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
