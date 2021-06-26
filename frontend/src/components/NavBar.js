import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

import publicCss from "../public.module.css";
import { useSelector } from "react-redux";
const API_URL = process.env.REACT_APP_API_URL;

export default function NavBar() {
  const [CategoryData, setCategoryData] = useState([]);
  const [isError, setError] = useState(false);

  const { isAdminPage } = useSelector((state) => state.adminPageStatus);

  useEffect(() => {
    if (!isAdminPage) {
      axios
        .get(`${API_URL}/api/category`)
        .then(({ data }) => {
          setCategoryData(data.CategoryData);
        })
        .catch((err) => {
          setError(true);
          console.log(`Error in getting category from Server ${err}`);
        });
    }
  }, [isAdminPage]);

  return (
    <nav className={`${publicCss.nav} row`}>
      {isError && <Redirect to="/signin"></Redirect>}
      <div>
        {CategoryData.map((category) => (
          <div className={publicCss.dropdown} key={category._id}>
            <Link to={`/products/${category._id}`}>
              {category.categoryName} <i className="fa fa-caret-down"></i>
            </Link>
            <ul className={publicCss.dropdownContent}>
              {category.subCategories.map((subCat) => (
                <li key={subCat._id}>
                  <Link to={`/products/${category._id}/${subCat._id}`}>
                    {subCat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
